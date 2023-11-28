(()=>{"use strict";var e={946:(e,t,s)=>{s.d(t,{Z:()=>r});var i=s(81),n=s.n(i),o=s(645),a=s.n(o)()(n());a.push([e.id,"/*.styles {\n    display: grid;\n    gap: 3rem;\n    grid-auto-rows: 22rem;\n    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));\n    margin: 0 131px 0 131px;\n    place-items: center;\n}*/\nh1 {\n    font-family: 'Inter', sans-serif;\n    color: white;\n    font-size: 15px;\n}\n\nh3 {\n    font-family: 'Inter', sans-serif;\n    color: white;\n    font-size: 12px;\n    \n}\n\nimg {\n    display: grid;\n    border-radius: 15px;\n    height:267.57px;\n    width: 100%;\n    overflow: hidden;\n    object-fit: cover;\n}\n",""]);const r=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s="",i=void 0!==t[5];return t[4]&&(s+="@supports (".concat(t[4],") {")),t[2]&&(s+="@media ".concat(t[2]," {")),i&&(s+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),s+=e(t),i&&(s+="}"),t[2]&&(s+="}"),t[4]&&(s+="}"),s})).join("")},t.i=function(e,s,i,n,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);i&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),s&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=s):d[2]=s),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}}},t={};function s(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={id:i,exports:{}};return e[i](o,o.exports,s),o.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e,t;!function(e){e.logo="logo",e.regions="regions",e.climate="climate",e.search="search",e.profile="profile"}(e||(e={}));class i extends HTMLElement{static get observedAttributes(){return Object.keys({logo:null,regions:null,climate:null,search:null,profile:null})}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}attributeChangedCallback(t,s,i){switch(t){case e.logo:this.logo=i?String(i):void 0;break;case e.regions:this.regions=i?String(i):void 0;break;case e.climate:this.climate=i?String(i):void 0;break;case e.search:this.search=i?String(i):void 0;break;case e.profile:this.profile=i?String(i):void 0;break;default:this.propName=i}this.render()}render(){if(this.shadowRoot){this.shadowRoot.innerHTML=`\n            <link rel="stylesheet" href="../src/components/header/header.css">\n                <section>\n                    <div class="header">\n                        <div class="left">\n                            <img src="${this.logo}" height="40np" alt="">\n                            <h3 href=" ">Regiones</h3>\n                            <h3 href=" ">Climas</h3>\n                        </div>\n                        <div class="right">\n                            <div class="search-container">\n                                <input type="text" id="searchInput" placeholder="Search">\n                                <button id="searchButton">Search</button>\n                            </div>\n                            <img src="${this.profile}" height="30np" alt="">\n                        </div>\n                    </div>\n                </section>\n            `;const e=this.shadowRoot.querySelector("#searchButton"),t=this.shadowRoot.querySelector("#searchInput");e&&e.addEventListener("click",(()=>{const e=t.value;console.log(e)}))}}}customElements.define("app-header",i),function(e){e.STORE="STORE"}(t||(t={}));var n;!function(e){e.DASHBOARD="DASHBOARD",e.REGIONS="REGIONS",e.SPOTSELECT="SPOTSELECT",e.LOGIN="LOGIN"}(n||(n={}));const o={screen:n.DASHBOARD};let a=(({key:e,defaultValue:t})=>{const s=localStorage.getItem(e)||sessionStorage.getItem(e);return s?JSON.parse(s):t})({key:t.STORE,defaultValue:o}),r=[];const c=e=>{const s=((e,t)=>{const{type:s,payload:i}=e;return"NAVIGATE"===s&&(t.screen=i),t})(e,JSON.parse(JSON.stringify(a)));var i;a=s,i=s,(({key:e,value:t,session:s=!1})=>{const i=s?sessionStorage:localStorage,n=JSON.stringify(t);i.setItem(e,n)})({key:t.STORE,value:i}),r.forEach((e=>e.render()))};var l,d,h=s(946);!function(e){e.img="img",e.title="title",e.spot="spot"}(l||(l={}));class p extends HTMLElement{static get observedAttributes(){return[l.img,l.title,l.spot]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}attributeChangedCallback(e,t,s){switch(e){case l.img:this.img=s?String(s):void 0;break;case l.title:this.customTitle=s?String(s):void 0;break;case l.spot:this.spot=s?String(s):void 0;default:this.propName=s}}render(){var e,t,s,i;this.shadowRoot&&(this.shadowRoot.innerHTML=""),((e,t)=>{var s;const i=e.ownerDocument.createElement("style");i.innerHTML=t,null===(s=e.shadowRoot)||void 0===s||s.appendChild(i)})(this,h.Z);const o=this.ownerDocument.createElement("section");o.classList.add("class-styles");const a=this.ownerDocument.createElement("img");a.classList.add("class-image"),a.setAttribute("src",`${this.img}`),a.setAttribute("height","267.57px"),a.setAttribute("width","200.68px"),a.addEventListener("click",(()=>{c({type:"NAVIGATE",payload:n.SPOTSELECT})}));const r=this.ownerDocument.createElement("h1");r.classList.add("tittle-spot"),r.innerText=`${this.title}`;const l=this.ownerDocument.createElement("h3");l.innerText=`${this.spot}`,null===(e=this.shadowRoot)||void 0===e||e.appendChild(a),null===(t=this.shadowRoot)||void 0===t||t.appendChild(r),null===(s=this.shadowRoot)||void 0===s||s.appendChild(l),null===(i=this.shadowRoot)||void 0===i||i.appendChild(o)}}customElements.define("app-home",p),function(e){e.img="img",e.title="title",e.spot="spot"}(d||(d={}));class m extends HTMLElement{static get observedAttributes(){return[d.img,d.title,d.spot]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}attributeChangedCallback(e,t,s){switch(e){case d.img:this.img=s?String(s):void 0;break;case d.title:this.customTitle=s?String(s):void 0;break;case d.spot:this.spot=s?String(s):void 0;default:this.propName=s}}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <link rel="stylesheet" href="../src/components/home/home.css">\n            \n            <section>\n            <div class="images">\n            <img src=${this.img} height="267.57px" weight="200.68px" alt="">\n            </div>\n  \n            <div class="text">\n            <h1>${this.title}</h1>\n            <h3>${this.spot}</h3>\n            </div>\n            </section>\n            `)}}customElements.define("app-recommended",m);const u=[{logo:"../src/components/imgheader/quiwe.png",regions:"regions",climate:"climate",search:"../src/components/imgheader/search.png",profile:"../src/components/imgheader/profile.png"}],g=[{name:"m_gigante",img:"https://huilamagnifica.com/wp-content/uploads/2019/05/Mirador-La-Mano-del-Gigante-Municipio-de-Gigante-Huila-Magnifica-10.jpg",title:"Mirador La Mano del Gigante",spot:"Gigante, Huila"},{name:"p_peñol",img:"https://upload.wikimedia.org/wikipedia/commons/2/26/PIEDRA_DEL_PE%C3%91OL_2.jpg",title:"Piedra del Peñol",spot:"Guatapé, Antioquia"},{name:"c_sombrillas",img:"https://voyagesautenteo.com/wp-content/uploads/2021/07/rues-parapluies-guatape.jpg",title:"Callejón de las Sombrillas Coloridas",spot:"Guatapé, Antioquia"},{name:"i_Pedro",img:"https://i0.wp.com/www.turismoreligioso.travel/wp-content/uploads/2021/09/SAN-PEDRO-CLAVER-EDIFICO-TURISMO-RELIGIOSO_1.jpg?fit=750%2C422&ssl=1",title:"Iglesia de San Pedro Claver",spot:"Cartagena de Indias, Bolívar"},{name:"c_cristales",img:"https://www.eluniversal.com.mx/resizer/7Loc41J5hFF0EhhlDfuOFfrixCE=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/PS36GSZDDNBVDF5HUA2KBNKYL4.jpg",title:"Caño Cristales",spot:"Sierra de la Macarena, Meta"},{name:"s_lajas",img:"https://lanotapositiva.com/wp-content/uploads/2019/02/Por-su-arquitectura-y-ubicaci%C3%B3n-la-iglesia-de-Las-Lajas-en-Nari%C3%B1o-es-considerada-como-la-m%C3%A1s-bonita-del-mundo.jpg",title:"Santuario de Las Lajas",spot:"Ipiales, Nariño"}],v=[{name:"m_gigante",img:"https://huilamagnifica.com/wp-content/uploads/2019/05/Mirador-La-Mano-del-Gigante-Municipio-de-Gigante-Huila-Magnifica-10.jpg",title:"Mirador La Mano del Gigante",spot:"Gigante, Huila"},{name:"p_peñol",img:"https://upload.wikimedia.org/wikipedia/commons/2/26/PIEDRA_DEL_PE%C3%91OL_2.jpg",title:"Piedra del Peñol",spot:"Guatapé, Antioquia"},{name:"c_sombrillas",img:"https://voyagesautenteo.com/wp-content/uploads/2021/07/rues-parapluies-guatape.jpg",title:"Callejón de las Sombrillas Coloridas",spot:"Guatapé, Antioquia"},{name:"i_Pedro",img:"https://i0.wp.com/www.turismoreligioso.travel/wp-content/uploads/2021/09/SAN-PEDRO-CLAVER-EDIFICO-TURISMO-RELIGIOSO_1.jpg?fit=750%2C422&ssl=1",title:"Iglesia de San Pedro Claver",spot:"Cartagena de Indias, Bolívar"},{name:"c_cristales",img:"https://www.eluniversal.com.mx/resizer/7Loc41J5hFF0EhhlDfuOFfrixCE=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/PS36GSZDDNBVDF5HUA2KBNKYL4.jpg",title:"Caño Cristales",spot:"Sierra de la Macarena, Meta"},{name:"s_lajas",img:"https://lanotapositiva.com/wp-content/uploads/2019/02/Por-su-arquitectura-y-ubicaci%C3%B3n-la-iglesia-de-Las-Lajas-en-Nari%C3%B1o-es-considerada-como-la-m%C3%A1s-bonita-del-mundo.jpg",title:"Santuario de Las Lajas",spot:"Ipiales, Nariño"}];class b extends HTMLElement{constructor(){super(),this.header=[],this.home=[],this.recommended=[],this.attachShadow({mode:"open"}),u.forEach((t=>{const s=this.ownerDocument.createElement("app-header");s.setAttribute(e.logo,t.logo),s.setAttribute(e.regions,t.regions),s.setAttribute(e.climate,t.climate),s.setAttribute(e.search,t.search),s.setAttribute(e.profile,t.profile),this.header.push(s)})),g.forEach((e=>{const t=this.ownerDocument.createElement("app-home");t.setAttribute(l.img,e.img),t.setAttribute(l.title,e.title),t.setAttribute(l.spot,e.spot),this.home.push(t)})),v.forEach((e=>{const t=this.ownerDocument.createElement("app-recommended");t.setAttribute(d.img,e.img),t.setAttribute(d.title,e.title),t.setAttribute(d.spot,e.spot),this.recommended.push(t)}))}connectedCallback(){this.render()}render(){var e,t,s,i;if(this.shadowRoot){const n=this.ownerDocument.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href","/src/screens/dashboard/style.css"),this.shadowRoot.appendChild(n),this.header.forEach((e=>{var t;null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}));let o=this.ownerDocument.createElement("h2");null===(e=this.shadowRoot)||void 0===e||e.appendChild(o),o.setAttribute("class","card-title");let a=this.ownerDocument.createElement("main");null===(t=this.shadowRoot)||void 0===t||t.appendChild(a),o.textContent="Ya visitados",a.setAttribute("class","principal"),a&&this.home.forEach((e=>{a.appendChild(e)}));let r=this.ownerDocument.createElement("h2");null===(s=this.shadowRoot)||void 0===s||s.appendChild(r),r.setAttribute("class","card-title");let c=this.ownerDocument.createElement("Recomm");null===(i=this.shadowRoot)||void 0===i||i.appendChild(c),r.textContent="Recomendados",c.setAttribute("class","principal"),c&&this.recommended.forEach((e=>{c.appendChild(e)}))}}}var w;customElements.define("app-dashboard",b),function(e){e.headerimg="headerimg",e.title="title",e.spot="spot",e.description="description",e.stars="stars",e.hotel="hotel",e.restaurant="restaurant",e.recommend="recommend",e.comment="comment"}(w||(w={}));class f extends HTMLElement{static get observedAttributes(){return[w.headerimg,w.title,w.spot,w.description,w.stars,w.hotel,w.restaurant,w.recommend,w.comment]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}attributeChangedCallback(e,t,s){switch(e){case w.headerimg:this.headerimg=s?String(s):void 0;break;case w.title:this.sTitle=s?String(s):void 0;break;case w.spot:this.spot=s?String(s):void 0;case w.description:this.description=s?String(s):void 0;break;case w.stars:this.stars=s?String(s):void 0;break;case w.hotel:this.hotel=s?String(s):void 0;case w.restaurant:this.restaurant=s?String(s):void 0;break;case w.recommend:this.recommend=s?String(s):void 0;break;case w.comment:this.comment=s?String(s):void 0;default:this.propName=s}this.render()}render(){this.ownerDocument.createElement("img"),this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <link rel="stylesheet" href="../src/components/selectedspot/Selectedspot.css">\n            \n            <section>\n            <div class="images">\n            <img src=${this.headerimg} alt="">\n            </div>\n  \n            <div class="star-text">\n            <h1>${this.title}</h1>\n            <div class="stars">\n              <img src="/src/components/selectedspot/img/star_icon.png" alt="">\n              <img src="/src/components/selectedspot/img/star_icon.png" alt="">\n              <img src="/src/components/selectedspot/img/star_icon.png" alt="">\n              <img src="/src/components/selectedspot/img/star_icon.png" alt="">\n              <img src="/src/components/selectedspot/img/star_icon.png" alt="">\n            </div>\n            </div>\n\n            <h6>${this.spot}</h6>\n            \n            <p class="description">${this.description}</p>\n\n            <div class="establishment">\n              <label for="establishment">\n                <img src="/src/components/selectedspot/img/hotel_icon.png" alt="">\n              </label>\n                <select>\n                    <option value="">Hoteles</option>\n                    <option value="restaurant">Restaurant</option>\n                </select>\n            </div>\n\n            <div class="recommendation">\n            <label for="recommendation">\n                <img src="/src/components/selectedspot/img/restaurant_icon.png" alt="">\n              </label>\n                <select>\n                    <option value="">Hoteles</option>\n                    <option value="restaurant">Restaurant</option>\n                </select>\n            </div>\n            </section>\n            `)}}customElements.define("app-spot",f);class E extends HTMLElement{constructor(){super(),this.header=[],this.sSpot=[],this.recommended=[],this.attachShadow({mode:"open"}),u.forEach((t=>{const s=this.ownerDocument.createElement("app-header");s.setAttribute(e.logo,t.logo),s.setAttribute(e.regions,t.regions),s.setAttribute(e.climate,t.climate),s.setAttribute(e.search,t.search),s.setAttribute(e.profile,t.profile),this.header.push(s)})),v.forEach((e=>{const t=this.ownerDocument.createElement("app-recommended");t.setAttribute(d.img,e.img),t.setAttribute(d.title,e.title),t.setAttribute(d.spot,e.spot),this.recommended.push(t)}))}connectedCallback(){this.render()}render(){if(this.shadowRoot){const e=this.ownerDocument.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","/src/screens/place/place.css"),this.shadowRoot.appendChild(e);const t=this.ownerDocument.createElement("main");t.classList.add("main-container"),this.header.forEach((e=>{t.appendChild(e)}));const s=this.ownerDocument.createElement("app-spot");s.setAttribute(w.headerimg,"https://www.eluniversal.com.mx/resizer/7Loc41J5hFF0EhhlDfuOFfrixCE=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/PS36GSZDDNBVDF5HUA2KBNKYL4.jpg"),s.setAttribute(w.title,"Caño Cristales"),s.setAttribute(w.spot,"Sierra de la Macarena, Meta"),s.setAttribute(w.description,"Caño Cristales es un río de Colombia que está ubicado en la sierra de la Macarena, en el municipio del mismo nombre, en el departamento del Meta."),t.appendChild(s);const i=this.ownerDocument.createElement("div");i.classList.add("recommended-container"),this.recommended.forEach((e=>{i.appendChild(e)}));const n=this.ownerDocument.createElement("h6");n.textContent="Lugares recomendados",n.setAttribute("class","title-recommed"),t.appendChild(n),t.appendChild(i),this.shadowRoot.appendChild(t)}}}customElements.define("app-place",E);class S extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),r=[...r,this]}connectedCallback(){this.render()}render(){var e,t;if(this.shadowRoot)switch(this.shadowRoot.innerHTML="",a.screen){case n.DASHBOARD:const s=this.ownerDocument.createElement("app-dashboard");null===(e=this.shadowRoot)||void 0===e||e.appendChild(s);break;case n.SPOTSELECT:const i=this.ownerDocument.createElement("app-place");null===(t=this.shadowRoot)||void 0===t||t.appendChild(i)}}}customElements.define("app-container",S)})()})();