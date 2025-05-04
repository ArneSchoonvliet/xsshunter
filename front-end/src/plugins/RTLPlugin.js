import { reactive } from 'vue'

export default {
  install(app) {
    const rtlStore = reactive({
      isRTL: false,

      getDocClasses() {
        return document.body.classList
      },

      enableRTL() {
        this.isRTL = true
        this.getDocClasses().add('rtl')
        this.getDocClasses().add('menu-on-right')
        this.toggleBootstrapRTL(true)
      },

      disableRTL() {
        this.isRTL = false
        this.getDocClasses().remove('rtl')
        this.getDocClasses().remove('menu-on-right')
        this.toggleBootstrapRTL(false)
      },

      toggleBootstrapRTL(value) {
        for (let i = 0; i < document.styleSheets.length; i++) {
          const styleSheet = document.styleSheets[i]
          const { href } = styleSheet
          if (href && href.endsWith('bootstrap-rtl.css')) {
            styleSheet.disabled = !value
          }
        }
      }
    })

    // Register globally for all components
    app.config.globalProperties.$rtl = rtlStore
  }
}