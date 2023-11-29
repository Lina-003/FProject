(()=>{"use strict";var e={893:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(81),s=n.n(a),o=n(645),i=n.n(o)()(s());i.push([e.id,".class-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: row;\n    background-color: black;\n    margin-left: 40px;\n    margin-right: 40px;\n    padding: 1rem;\n    box-shadow: 0px 6px 40px rgba(214.84, 214.84, 214.84, 0.06);\n}\n\n#Buscador {\n    background-color: black;\n    font-size: 14px;\n    color: #ededed;\n    background-size: 24px;\n    width: 400px;\n    border: 1px solid #ededed;\n    border-radius: 4px;\n    padding: 9px 9px 9px 30px;\n    outline: none;\n}\n\nbutton {\n    padding: 10px;\n    background-color: #ededed;\n    color: black;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n.class-header .class-right button:hover {\n    background-color: #d1d1d1;\n}\n\nh3 {\n    color: white;\n    font-size: 14px;\n    font-weight:500;\n    font-family: 'Inter', sans-serif;\n    cursor: pointer;\n}\n\nimg {\n    cursor: pointer;\n}\n\n.class-header .class-right {\n    display: flex;\n    align-items: center;\n}\n\n.class-header .class-left {\n    display: flex;\n    align-items: center;\n    gap: 80px;\n}",""]);const r=i},946:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(81),s=n.n(a),o=n(645),i=n.n(o)()(s());i.push([e.id,"\nh1 {\n    font-family: 'Inter', sans-serif;\n    color: white;\n    font-size: 15px;\n}\n\nh3 {\n    font-family: 'Inter', sans-serif;\n    color: white;\n    font-size: 14px;\n    font-weight: normal;\n    \n}\n\nimg {\n    display: grid;\n    border-radius: 15px;\n    height:267.57px;\n    width: 100%;\n    overflow: hidden;\n    object-fit: cover;\n    cursor: pointer;\n}\n",""]);const r=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,s,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var r=0;r<this.length;r++){var l=this[r][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);a&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;!function(e){e.STORE="STORE"}(e||(e={}));var t;!function(e){e.DASHBOARD="DASHBOARD",e.REGIONS="REGIONS",e.CLIMATE="CLIMATE",e.SPOTSELECT="SPOTSELECT",e.LOGIN="LOGIN"}(t||(t={}));const a={screen:t.DASHBOARD};let s=(({key:e,defaultValue:t})=>{const n=localStorage.getItem(e)||sessionStorage.getItem(e);return n?JSON.parse(n):t})({key:e.STORE,defaultValue:a}),o=[];const i=t=>{const n=((e,t)=>{const{type:n,payload:a}=e;return"NAVIGATE"===n&&(t.screen=a),t})(t,JSON.parse(JSON.stringify(s)));var a;s=n,a=n,(({key:e,value:t,session:n=!1})=>{const a=n?sessionStorage:localStorage,s=JSON.stringify(t);a.setItem(e,s)})({key:e.STORE,value:a}),o.forEach((e=>e.render()))},r=e=>({type:"NAVIGATE",payload:e}),l=(e,t)=>{var n;const a=e.ownerDocument.createElement("style");a.innerHTML=t,null===(n=e.shadowRoot)||void 0===n||n.appendChild(a)};var c,d=n(893);!function(e){e.logo="logo",e.regions="regions",e.climate="climate",e.search="search",e.profile="profile"}(c||(c={}));class h extends HTMLElement{static get observedAttributes(){return Object.keys({logo:null,regions:null,climate:null,search:null,profile:null})}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}attributeChangedCallback(e,t,n){switch(e){case c.logo:this.logo=n?String(n):void 0;break;case c.regions:this.regions=n?String(n):void 0;break;case c.climate:this.climate=n?String(n):void 0;break;case c.search:this.search=n?String(n):void 0;break;case c.profile:this.profile=n?String(n):void 0;break;default:this.propName=n}}render(){var e;this.shadowRoot&&(this.shadowRoot.innerHTML=""),l(this,d.Z);const n=this.ownerDocument.createElement("section");n.classList.add("class-header");const a=this.ownerDocument.createElement("div");a.classList.add("class-left");const s=this.ownerDocument.createElement("img");s.setAttribute("src",`${this.logo}`),s.setAttribute("height","40np"),s.addEventListener("click",(()=>{i(r(t.DASHBOARD))}));const o=this.ownerDocument.createElement("h3");o.innerText=`${this.regions}`,o.addEventListener("click",(()=>{i(r(t.REGIONS))}));const c=this.ownerDocument.createElement("h3");c.innerText=`${this.climate}`,c.addEventListener("click",(()=>{i(r(t.CLIMATE))}));const h=this.ownerDocument.createElement("div");h.classList.add("class-right");const p=this.ownerDocument.createElement("input");p.setAttribute("type","search"),p.setAttribute("placeholder","Buscar"),p.setAttribute("id","Buscador");const m=this.ownerDocument.createElement("button");m.textContent="Buscar",m.addEventListener("click",(()=>{const e=p.value;console.log(e)}));const u=this.ownerDocument.createElement("img");u.setAttribute("src",`${this.profile}`),u.setAttribute("height","35np"),u.style.marginLeft="50px",u.addEventListener("click",(()=>{i(r(t.DASHBOARD))})),a.appendChild(s),a.appendChild(o),a.appendChild(c),h.appendChild(p),h.appendChild(m),h.appendChild(u),n.appendChild(a),n.appendChild(h),null===(e=this.shadowRoot)||void 0===e||e.appendChild(n)}}customElements.define("app-header",h);var p,m,u=n(946);!function(e){e.img="img",e.title="title",e.spot="spot"}(p||(p={}));class g extends HTMLElement{static get observedAttributes(){return[p.img,p.title,p.spot]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}attributeChangedCallback(e,t,n){switch(e){case p.img:this.img=n?String(n):void 0;break;case p.title:this.customTitle=n?String(n):void 0;break;case p.spot:this.spot=n?String(n):void 0;default:this.propName=n}}render(){var e,n,a,s;this.shadowRoot&&(this.shadowRoot.innerHTML=""),l(this,u.Z);const o=this.ownerDocument.createElement("section");o.classList.add("class-styles");const c=this.ownerDocument.createElement("img");c.classList.add("class-image"),c.setAttribute("src",`${this.img}`),c.setAttribute("height","267.57px"),c.setAttribute("width","200.68px"),c.addEventListener("click",(()=>{i(r(t.SPOTSELECT))}));const d=this.ownerDocument.createElement("h1");d.classList.add("tittle-spot"),d.innerText=`${this.title}`;const h=this.ownerDocument.createElement("h3");h.innerText=`${this.spot}`,null===(e=this.shadowRoot)||void 0===e||e.appendChild(c),null===(n=this.shadowRoot)||void 0===n||n.appendChild(d),null===(a=this.shadowRoot)||void 0===a||a.appendChild(h),null===(s=this.shadowRoot)||void 0===s||s.appendChild(o)}}customElements.define("app-home",g),function(e){e.img="img",e.title="title",e.spot="spot"}(m||(m={}));class b extends HTMLElement{static get observedAttributes(){return[m.img,m.title,m.spot]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}attributeChangedCallback(e,t,n){switch(e){case m.img:this.img=n?String(n):void 0;break;case m.title:this.customTitle=n?String(n):void 0;break;case m.spot:this.spot=n?String(n):void 0;default:this.propName=n}}render(){var e,n,a,s;this.shadowRoot&&(this.shadowRoot.innerHTML=""),l(this,u.Z);const o=this.ownerDocument.createElement("section");o.classList.add("class-styles");const c=this.ownerDocument.createElement("img");c.classList.add("class-image"),c.setAttribute("src",`${this.img}`),c.setAttribute("height","267.57px"),c.setAttribute("width","200.68px"),c.addEventListener("click",(()=>{i(r(t.SPOTSELECT))}));const d=this.ownerDocument.createElement("h1");d.classList.add("tittle-spot"),d.innerText=`${this.title}`;const h=this.ownerDocument.createElement("h3");h.innerText=`${this.spot}`,null===(e=this.shadowRoot)||void 0===e||e.appendChild(c),null===(n=this.shadowRoot)||void 0===n||n.appendChild(d),null===(a=this.shadowRoot)||void 0===a||a.appendChild(h),null===(s=this.shadowRoot)||void 0===s||s.appendChild(o)}}customElements.define("app-recommended",b);const v=[{logo:"../src/components/imgheader/quiwe.png",regions:"Regiones",climate:"Climas",profile:"../src/components/imgheader/profile.png"}],w=[{name:"m_gigante",img:"https://huilamagnifica.com/wp-content/uploads/2019/05/Mirador-La-Mano-del-Gigante-Municipio-de-Gigante-Huila-Magnifica-10.jpg",title:"Mirador La Mano del Gigante",spot:"Gigante, Huila"},{name:"p_peñol",img:"https://upload.wikimedia.org/wikipedia/commons/2/26/PIEDRA_DEL_PE%C3%91OL_2.jpg",title:"Piedra del Peñol",spot:"Guatapé, Antioquia"},{name:"c_sombrillas",img:"https://voyagesautenteo.com/wp-content/uploads/2021/07/rues-parapluies-guatape.jpg",title:"Callejón de las Sombrillas Coloridas",spot:"Guatapé, Antioquia"},{name:"i_Pedro",img:"https://i0.wp.com/www.turismoreligioso.travel/wp-content/uploads/2021/09/SAN-PEDRO-CLAVER-EDIFICO-TURISMO-RELIGIOSO_1.jpg?fit=750%2C422&ssl=1",title:"Iglesia de San Pedro Claver",spot:"Cartagena de Indias, Bolívar"},{name:"c_cristales",img:"https://www.eluniversal.com.mx/resizer/7Loc41J5hFF0EhhlDfuOFfrixCE=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/PS36GSZDDNBVDF5HUA2KBNKYL4.jpg",title:"Caño Cristales",spot:"Sierra de la Macarena, Meta"},{name:"s_lajas",img:"https://lanotapositiva.com/wp-content/uploads/2019/02/Por-su-arquitectura-y-ubicaci%C3%B3n-la-iglesia-de-Las-Lajas-en-Nari%C3%B1o-es-considerada-como-la-m%C3%A1s-bonita-del-mundo.jpg",title:"Santuario de Las Lajas",spot:"Ipiales, Nariño"}],C=[{name:"m_gigante",img:"https://huilamagnifica.com/wp-content/uploads/2019/05/Mirador-La-Mano-del-Gigante-Municipio-de-Gigante-Huila-Magnifica-10.jpg",title:"Mirador La Mano del Gigante",spot:"Gigante, Huila"},{name:"p_peñol",img:"https://upload.wikimedia.org/wikipedia/commons/2/26/PIEDRA_DEL_PE%C3%91OL_2.jpg",title:"Piedra del Peñol",spot:"Guatapé, Antioquia"},{name:"c_sombrillas",img:"https://voyagesautenteo.com/wp-content/uploads/2021/07/rues-parapluies-guatape.jpg",title:"Callejón de las Sombrillas Coloridas",spot:"Guatapé, Antioquia"},{name:"i_Pedro",img:"https://i0.wp.com/www.turismoreligioso.travel/wp-content/uploads/2021/09/SAN-PEDRO-CLAVER-EDIFICO-TURISMO-RELIGIOSO_1.jpg?fit=750%2C422&ssl=1",title:"Iglesia de San Pedro Claver",spot:"Cartagena de Indias, Bolívar"},{name:"c_cristales",img:"https://www.eluniversal.com.mx/resizer/7Loc41J5hFF0EhhlDfuOFfrixCE=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/PS36GSZDDNBVDF5HUA2KBNKYL4.jpg",title:"Caño Cristales",spot:"Sierra de la Macarena, Meta"},{name:"s_lajas",img:"https://lanotapositiva.com/wp-content/uploads/2019/02/Por-su-arquitectura-y-ubicaci%C3%B3n-la-iglesia-de-Las-Lajas-en-Nari%C3%B1o-es-considerada-como-la-m%C3%A1s-bonita-del-mundo.jpg",title:"Santuario de Las Lajas",spot:"Ipiales, Nariño"}];class E extends HTMLElement{constructor(){super(),this.header=[],this.home=[],this.recommended=[],this.attachShadow({mode:"open"}),v.forEach((e=>{const t=this.ownerDocument.createElement("app-header");t.setAttribute(c.logo,e.logo),t.setAttribute(c.regions,e.regions),t.setAttribute(c.climate,e.climate),t.setAttribute(c.profile,e.profile),this.header.push(t)})),w.forEach((e=>{const t=this.ownerDocument.createElement("app-home");t.setAttribute(p.img,e.img),t.setAttribute(p.title,e.title),t.setAttribute(p.spot,e.spot),this.home.push(t)})),C.forEach((e=>{const t=this.ownerDocument.createElement("app-recommended");t.setAttribute(m.img,e.img),t.setAttribute(m.title,e.title),t.setAttribute(m.spot,e.spot),this.recommended.push(t)}))}connectedCallback(){this.render()}render(){var e,t,n,a;if(this.shadowRoot){const s=this.ownerDocument.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href","/src/screens/dashboard/style.css"),this.shadowRoot.appendChild(s),this.header.forEach((e=>{var t;null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}));let o=this.ownerDocument.createElement("h2");null===(e=this.shadowRoot)||void 0===e||e.appendChild(o),o.setAttribute("class","card-title");let i=this.ownerDocument.createElement("main");null===(t=this.shadowRoot)||void 0===t||t.appendChild(i),o.textContent="Ya visitados",i.setAttribute("class","principal"),i&&this.home.forEach((e=>{i.appendChild(e)}));let r=this.ownerDocument.createElement("h2");null===(n=this.shadowRoot)||void 0===n||n.appendChild(r),r.setAttribute("class","card-title");let l=this.ownerDocument.createElement("Recomm");null===(a=this.shadowRoot)||void 0===a||a.appendChild(l),r.textContent="Recomendados",l.setAttribute("class","principal"),l&&this.recommended.forEach((e=>{l.appendChild(e)}))}}}var f;customElements.define("app-dashboard",E),function(e){e.headerimg="headerimg",e.title="title",e.spot="spot",e.description="description",e.stars="stars",e.hotel="hotel",e.restaurant="restaurant",e.recommend="recommend",e.comment="comment"}(f||(f={}));class A extends HTMLElement{static get observedAttributes(){return[f.headerimg,f.title,f.spot,f.description,f.stars,f.hotel,f.restaurant,f.recommend,f.comment]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}attributeChangedCallback(e,t,n){switch(e){case f.headerimg:this.headerimg=n?String(n):void 0;break;case f.title:this.sTitle=n?String(n):void 0;break;case f.spot:this.spot=n?String(n):void 0;case f.description:this.description=n?String(n):void 0;break;case f.stars:this.stars=n?String(n):void 0;break;case f.hotel:this.hotel=n?String(n):void 0;case f.restaurant:this.restaurant=n?String(n):void 0;break;case f.recommend:this.recommend=n?String(n):void 0;break;case f.comment:this.comment=n?String(n):void 0;default:this.propName=n}this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <link rel="stylesheet" href="../src/components/selectedspot/Selectedspot.css">\n            \n            <section>\n            <div class="images">\n            <img src=${this.headerimg} alt="">\n            </div>\n  \n            <div class="star-text">\n            <h1>${this.title}</h1>\n            <div class="stars">\n              <img src="/src/components/selectedspot/img/star_icon.png" alt="">\n              <img src="/src/components/selectedspot/img/star_icon.png" alt="">\n              <img src="/src/components/selectedspot/img/star_icon.png" alt="">\n              <img src="/src/components/selectedspot/img/star_icon.png" alt="">\n              <img src="/src/components/selectedspot/img/star_icon.png" alt="">\n            </div>\n            </div>\n\n            <h6>${this.spot}</h6>\n            \n            <p class="description">${this.description}</p>\n\n            <div class="establishment">\n              <label for="establishment">\n                <img src="/src/components/selectedspot/img/hotel_icon.png" alt="">\n              </label>\n                <select>\n                    <option value="">Hoteles</option>\n                    <option value="restaurant">Restaurant</option>\n                </select>\n            </div>\n\n            <div class="recommendation">\n            <label for="recommendation">\n                <img src="/src/components/selectedspot/img/restaurant_icon.png" alt="">\n              </label>\n                <select>\n                    <option value="">Hoteles</option>\n                    <option value="restaurant">Restaurant</option>\n                </select>\n            </div>\n            </section>\n            `)}}customElements.define("app-spot",A);class S extends HTMLElement{constructor(){super(),this.header=[],this.sSpot=[],this.recommended=[],this.attachShadow({mode:"open"}),v.forEach((e=>{const t=this.ownerDocument.createElement("app-header");t.setAttribute(c.logo,e.logo),t.setAttribute(c.regions,e.regions),t.setAttribute(c.climate,e.climate),t.setAttribute(c.profile,e.profile),this.header.push(t)})),C.forEach((e=>{const t=this.ownerDocument.createElement("app-recommended");t.setAttribute(m.img,e.img),t.setAttribute(m.title,e.title),t.setAttribute(m.spot,e.spot),this.recommended.push(t)}))}connectedCallback(){this.render()}render(){if(this.shadowRoot){const e=this.ownerDocument.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","/src/screens/place/place.css"),this.shadowRoot.appendChild(e);const t=this.ownerDocument.createElement("main");t.classList.add("main-container"),this.header.forEach((e=>{t.appendChild(e)}));const n=this.ownerDocument.createElement("app-spot");n.setAttribute(f.headerimg,"https://www.eluniversal.com.mx/resizer/7Loc41J5hFF0EhhlDfuOFfrixCE=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/PS36GSZDDNBVDF5HUA2KBNKYL4.jpg"),n.setAttribute(f.title,"Caño Cristales"),n.setAttribute(f.spot,"Sierra de la Macarena, Meta"),n.setAttribute(f.description,"Caño Cristales es un río de Colombia que está ubicado en la sierra de la Macarena, en el municipio del mismo nombre, en el departamento del Meta."),t.appendChild(n);const a=this.ownerDocument.createElement("div");a.classList.add("recommended-container"),this.recommended.forEach((e=>{a.appendChild(e)}));const s=this.ownerDocument.createElement("h6");s.textContent="Lugares recomendados",s.setAttribute("class","title-recommed"),t.appendChild(s),t.appendChild(a),this.shadowRoot.appendChild(t)}}}customElements.define("app-place",S);class R extends HTMLElement{constructor(){super(),this.header=[],this.home=[],this.attachShadow({mode:"open"}),v.forEach((e=>{const t=this.ownerDocument.createElement("app-header");t.setAttribute(c.logo,e.logo),t.setAttribute(c.regions,e.regions),t.setAttribute(c.climate,e.climate),t.setAttribute(c.profile,e.profile),this.header.push(t)})),w.forEach((e=>{const t=this.ownerDocument.createElement("app-home");t.setAttribute(p.img,e.img),t.setAttribute(p.title,e.title),t.setAttribute(p.spot,e.spot),this.home.push(t)}))}connectedCallback(){this.render()}render(){var e,t,n,a,s,o;if(this.shadowRoot){const i=this.ownerDocument.createElement("link");function r(e,t,n){const a=document.createElement("div"),s=document.createElement("h2");s.setAttribute("class","card-title"),s.textContent=e;const o=document.createElement("h3");o.setAttribute("class","card-description"),o.textContent=t;const i=document.createElement("main");return i.setAttribute("class","principal"),n.forEach((e=>{const t=e.cloneNode(!0);i.appendChild(t)})),a.appendChild(s),a.appendChild(o),a.appendChild(i),a}i.setAttribute("rel","stylesheet"),i.setAttribute("href","/src/screens/Region/Regions.css"),this.shadowRoot.appendChild(i),this.header.forEach((e=>{var t;null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}));const l=this.ownerDocument.createElement("main");l.appendChild(r("Región Amazónica","Es la más extensa ya que ocupa un 40% del territorio colombiano. Cuenta con fauna y flora inmensamente variada que resguarda buena parte de la biodiversidad del planeta. Su cultura está atravesada por la herencia ancestral indígena, pues en esta región se encuentran casi 200 resguardos indígenas, donde conviven más de 20 comunidades con distintas familias lingüísticas como Tukano, Arawak, Tikuna, Huitoto y Tupí.",this.home)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(l);const c=this.ownerDocument.createElement("main");c.appendChild(r("Región Andina","Con cerca de 30 millones de habitantes, es la región más poblada y de mayor desarrollo económico del país, donde se ubican los 3 centros urbanos más importantes: Bogotá, Medellín y Cali. Allí se encuentran la cultura paisa, la santandereana, la cundiboyacense, la opita, la vallecaucana y la pastusa, que además está en constante contacto con la región del Pacífico colombiano.",this.home)),null===(t=this.shadowRoot)||void 0===t||t.appendChild(c);const d=this.ownerDocument.createElement("main");d.appendChild(r("Región Caribe","Históricamente ha sido una de las regiones de Colombia más conectadas con el resto del mundo gracias a los puertos de Barranquilla y Cartagena, que a su vez, son sus dos principales centros urbanos. En esta región surgieron expresiones culturales icónicas como la cumbia, el vallenato, las artesanías del pueblo Zenú y el mundialmente famoso Carnaval de Barranquilla.",this.home)),null===(n=this.shadowRoot)||void 0===n||n.appendChild(d);const h=this.ownerDocument.createElement("main");h.appendChild(r("Región Insular","Agrupa diferentes islas importantes alejadas del territorio continental colombiano. Esto incluye al de San Bernardo y el de San Andrés, Providencia y Santa Catalina (en el mar Caribe) y las islas Gorgona y Malpelo (en el océano Pacífico). Cuenta con una belleza marina destacable y paisajes paradisíacos con playas de arenas blancas, importantes reservas y santuarios naturales.",this.home)),null===(a=this.shadowRoot)||void 0===a||a.appendChild(h);const p=this.ownerDocument.createElement("main");p.appendChild(r("Región Orinoquía","Con amplias planicies que parecen infinitas, múltiples ríos, ecosistemas únicos y baja densidad poblacional, la región de la Orinoquía hace parte de la gran cuenca del río Orinoco que comparten Colombia y Venezuela.",this.home)),null===(s=this.shadowRoot)||void 0===s||s.appendChild(p);const m=this.ownerDocument.createElement("main");m.appendChild(r("Región Pacífica","El Pacífico colombiano atraviesa 4 departamentos y está compuesto por largas costas y selvas que conforman uno de los territorios más agrestes y húmedos del continente, donde se concentra gran parte de la biodiversidad del país.",this.home)),null===(o=this.shadowRoot)||void 0===o||o.appendChild(m)}}}customElements.define("app-region",R);class D extends HTMLElement{constructor(){super(),this.header=[],this.home=[],this.attachShadow({mode:"open"}),v.forEach((e=>{const t=this.ownerDocument.createElement("app-header");t.setAttribute(c.logo,e.logo),t.setAttribute(c.regions,e.regions),t.setAttribute(c.climate,e.climate),t.setAttribute(c.profile,e.profile),this.header.push(t)})),w.forEach((e=>{const t=this.ownerDocument.createElement("app-home");t.setAttribute(p.img,e.img),t.setAttribute(p.title,e.title),t.setAttribute(p.spot,e.spot),this.home.push(t)}))}connectedCallback(){this.render()}render(){var e,t,n,a;if(this.shadowRoot){const s=this.ownerDocument.createElement("link");function o(e,t,n){const a=document.createElement("div"),s=document.createElement("h2");s.setAttribute("class","card-title"),s.textContent=e;const o=document.createElement("h3");o.setAttribute("class","card-description"),o.textContent=t;const i=document.createElement("main");return i.setAttribute("class","principal"),n.forEach((e=>{const t=e.cloneNode(!0);i.appendChild(t)})),a.appendChild(s),a.appendChild(o),a.appendChild(i),a}s.setAttribute("rel","stylesheet"),s.setAttribute("href","/src/screens/Climate/Climate.css"),this.shadowRoot.appendChild(s),this.header.forEach((e=>{var t;null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}));const i=this.ownerDocument.createElement("main");i.appendChild(o("Clima Tropical Húmedo","Tiene variaciones de humedad y altas temperaturas. La región del Pacífico es la más representativa de este tipo de clima.",this.home)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(i);const r=this.ownerDocument.createElement("main");r.appendChild(o("Clima Seco","Predominante en los desiertos de altas temperaturas. La Península de La Guajira es un buen ejemplo de este clima en Colombia.",this.home)),null===(t=this.shadowRoot)||void 0===t||t.appendChild(r);const l=this.ownerDocument.createElement("main");l.appendChild(o("Clima Templado","Húmedo en invierno y seco en verano, como en la ciudad de Medellín.",this.home)),null===(n=this.shadowRoot)||void 0===n||n.appendChild(l);const c=this.ownerDocument.createElement("main");c.appendChild(o("Clima de Montaña","varía desde el clima frío como en Bogotá (2.600 m.s.n.m.) y de ahí a nieves perpetuas como en la Sierra Nevada de Santa Marta o el Nevado el Cocuy en Boyacá.",this.home)),null===(a=this.shadowRoot)||void 0===a||a.appendChild(c)}}}customElements.define("app-climate",D);class L extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),o=[...o,this]}connectedCallback(){this.render()}render(){var e,n,a,o;if(this.shadowRoot)switch(this.shadowRoot.innerHTML="",s.screen){case t.DASHBOARD:const s=this.ownerDocument.createElement("app-dashboard");null===(e=this.shadowRoot)||void 0===e||e.appendChild(s);break;case t.SPOTSELECT:const i=this.ownerDocument.createElement("app-place");null===(n=this.shadowRoot)||void 0===n||n.appendChild(i);break;case t.REGIONS:const r=this.ownerDocument.createElement("app-region");null===(a=this.shadowRoot)||void 0===a||a.appendChild(r);break;case t.CLIMATE:const l=this.ownerDocument.createElement("app-climate");null===(o=this.shadowRoot)||void 0===o||o.appendChild(l)}}}customElements.define("app-container",L)})()})();