import insertTemplate from "./views/template.js";

const onRouteChanged = async () => {
    const hash = window.location.hash;
    const routerView = document.getElementById("router-view");

    if (!(routerView instanceof HTMLElement)) {
      throw new ReferenceError("No router view element available for rendering");
    }

    switch (hash) {
      case "#Home":
        window.location.href = 'index.html';
        break;

      case "#About":
        const templateAbout = await insertTemplate('about');
        routerView.innerHTML = templateAbout;
        break;

      default:
        routerView.innerHTML = "<h1>404 - Page Not Found</h1>";
        break;
    }
  }

  export default onRouteChanged;
