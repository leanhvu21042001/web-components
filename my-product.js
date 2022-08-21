const template = document.createElement("template");
template.innerHTML = `<style>h2 {color: red; }</style><h2></h2>`;
class MyProuct extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h2").innerText = this.getAttribute("name");
  }
}

window.customElements.define("my-product", MyProuct);
