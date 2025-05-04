// plugins/NotificationsPlugin.js
import Notifications from './Notifications.vue';

const NotificationStore = {
  state: [],
  settings: {
    overlap: false,
    verticalAlign: 'top',
    horizontalAlign: 'right',
    type: 'info',
    timeout: 5000,
    closeOnClick: true,
    showClose: true,
  },
  setOptions(options) {
    Object.assign(this.settings, options);
  },
  removeNotification(timestamp) {
    const index = this.state.findIndex(n => n.timestamp === timestamp);
    if (index !== -1) {
      this.state.splice(index, 1);
    }
  },
  addNotification(notification) {
    if (typeof notification === 'string') {
      notification = { message: notification };
    }
    notification.timestamp = new Date();
    notification.timestamp.setMilliseconds(
      notification.timestamp.getMilliseconds() + this.state.length
    );
    notification = Object.assign({}, this.settings, notification);
    this.state.push(notification);
  },
  notify(notification) {
    if (Array.isArray(notification)) {
      notification.forEach(this.addNotification.bind(this));
    } else {
      this.addNotification(notification);
    }
  },
};

export default {
  install(app, options) {
    if (options) {
      NotificationStore.setOptions(options);
    }

    app.config.globalProperties.$notify = NotificationStore.notify.bind(NotificationStore);
    app.config.globalProperties.$notifications = NotificationStore;

    app.component('Notifications', Notifications);
  },
};
