import { BaseInput, Card, BaseDropdown, BaseButton, BaseCheckbox, BasePagination } from "../components/index.js";
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(app) {
    app.component(BaseInput.name, BaseInput);
    app.component(Card.name, Card);
    app.component(BasePagination.name, BasePagination);
    app.component(BaseDropdown.name, BaseDropdown);
    app.component(BaseButton.name, BaseButton);
    app.component(BaseCheckbox.name, BaseCheckbox);
  }
};

export default GlobalComponents;
