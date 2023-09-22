(()=>{"use strict";var e;!function(e){e.logo="logo",e.regions="regions",e.climate="climate",e.search="search",e.profile="profile"}(e||(e={}));class t extends HTMLElement{static get observedAttributes(){return[e.logo,e.regions,e.climate,e.search,e.profile]}constructor(){super(),this.logo=e.logo,this.regions=e.regions,this.climate=e.climate,this.search=e.search,this.profile=e.profile,this.attachShadow({mode:"open"})}connectedCallback(){this.render()}attributeChangedCallback(t,s,i){switch(t){case e.logo:this.logo=i?String(i):void 0;break;case e.regions:this.regions=i?String(i):void 0;break;case e.climate:this.climate=i?String(i):void 0;break;case e.search:this.search=i?String(i):void 0;break;case e.profile:this.profile=i?String(i):void 0;break;default:this.propName=i}this.render()}render(){this.ownerDocument.createElement("img"),this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <link rel="stylesheet" href="../src/components/header/header.css">\n            <section>\n            <div class="header">\n            <div class="left">\n            <img src=${this.logo} height="40np" alt="">\n\n            <h3 href="">Regiones</h3>\n            <h3 href="">Climas</h3>\n            </div>\n\n            <div class="right">\n            <img src=${this.search} height = "30np" alt="">\n            <img src=${this.profile} height = "30np" alt="">\n            </div>\n            </div>\n            </section>\n            `)}}customElements.define("app-header",t);const s=[{logo:"../src/components/imgheader/quiwe.png",regions:"regions",climate:"climate",search:"../src/components/imgheader/search.png",profile:"../src/components/imgheader/profile.png"}];class i extends HTMLElement{constructor(){super(),this.header=[],this.attachShadow({mode:"open"}),s.forEach((t=>{const s=this.ownerDocument.createElement("app-header");s.setAttribute(e.logo,t.logo),s.setAttribute(e.regions,t.regions),s.setAttribute(e.climate,t.climate),s.setAttribute(e.search,t.search),s.setAttribute(e.profile,t.profile),this.header.push(s)}))}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML="\n           \n            ",this.header.forEach((e=>{var t;null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)})))}}customElements.define("app-container",i)})();