(()=>{"use strict";var e,t;!function(e){e.logo="logo",e.regions="regions",e.climate="climate",e.search="search",e.profile="profile"}(e||(e={}));class i extends HTMLElement{static get observedAttributes(){return Object.keys({logo:null,regions:null,climate:null,search:null,profile:null})}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}attributeChangedCallback(t,i,s){switch(t){case e.logo:this.logo=s?String(s):void 0;break;case e.regions:this.regions=s?String(s):void 0;break;case e.climate:this.climate=s?String(s):void 0;break;case e.search:this.search=s?String(s):void 0;break;case e.profile:this.profile=s?String(s):void 0;break;default:this.propName=s}this.render()}render(){this.ownerDocument.createElement("img"),this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <link rel="stylesheet" href="../src/components/header/header.css">\n            <section>\n            <div class="header">\n            <div class="left">\n            <img src=${this.logo} height="40np" alt="">\n\n            <h3 href="">Regiones</h3>\n            <h3 href="">Climas</h3>\n            </div>\n\n            <div class="right">\n            <img src=${this.search} height = "30np" alt="">\n            <img src=${this.profile} height = "30np" alt="">\n            </div>\n            </div>\n            </section>\n            `)}}customElements.define("app-header",i),function(e){e.img="img",e.title="title",e.spot="spot"}(t||(t={}));class s extends HTMLElement{static get observedAttributes(){return[t.img,t.title,t.spot]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}attributeChangedCallback(e,i,s){switch(e){case t.img:this.img=s?String(s):void 0;break;case t.title:this.customTitle=s?String(s):void 0;break;case t.spot:this.spot=s?String(s):void 0;default:this.propName=s}this.render()}render(){this.ownerDocument.createElement("img"),this.shadowRoot&&(this.shadowRoot.innerHTML=`\n          <link rel="stylesheet" href="../src/components/home/home.css">\n          \n          <section>\n          <div class="images">\n          <img src=${this.img} alt="">\n          </div>\n\n          <div class="text">\n          <h1>${this.title}</h1>\n          <h3>${this.spot}</h3>\n          </div>\n          </section>\n          `)}}customElements.define("app-home",s);const a=[{logo:"../src/components/imgheader/quiwe.png",regions:"regions",climate:"climate",search:"../src/components/imgheader/search.png",profile:"../src/components/imgheader/profile.png"}],o=[{name:"m_gigante",img:"https://huilamagnifica.com/wp-content/uploads/2019/05/Mirador-La-Mano-del-Gigante-Municipio-de-Gigante-Huila-Magnifica-10.jpg",title:"Mirador La Mano del Gigante",spot:"Gigante, Huila"},{name:"p_peñol",img:"https://upload.wikimedia.org/wikipedia/commons/2/26/PIEDRA_DEL_PE%C3%91OL_2.jpg",title:"Piedra del Peñol",spot:"Guatapé, Antioquia"},{name:"c_sombrillas",img:"https://voyagesautenteo.com/wp-content/uploads/2021/07/rues-parapluies-guatape.jpg",title:"Callejón de las Sombrillas Coloridas",spot:"Guatapé, Antioquia"},{name:"i_Pedro",img:"https://i0.wp.com/www.turismoreligioso.travel/wp-content/uploads/2021/09/SAN-PEDRO-CLAVER-EDIFICO-TURISMO-RELIGIOSO_1.jpg?fit=750%2C422&ssl=1",title:"Iglesia de San Pedro Claver",spot:"Cartagena de Indias, Bolívar"},{name:"c_cristales",img:"https://www.eluniversal.com.mx/resizer/7Loc41J5hFF0EhhlDfuOFfrixCE=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/PS36GSZDDNBVDF5HUA2KBNKYL4.jpg",title:"Caño Cristales",spot:"Sierra de la Macarena, Meta"},{name:"s_lajas",img:"https://lanotapositiva.com/wp-content/uploads/2019/02/Por-su-arquitectura-y-ubicaci%C3%B3n-la-iglesia-de-Las-Lajas-en-Nari%C3%B1o-es-considerada-como-la-m%C3%A1s-bonita-del-mundo.jpg",title:"Santuario de Las Lajas",spot:"Ipiales, Nariño"}];class n extends HTMLElement{constructor(){super(),this.header=[],this.home=[],this.attachShadow({mode:"open"}),a.forEach((t=>{const i=this.ownerDocument.createElement("app-header");i.setAttribute(e.logo,t.logo),i.setAttribute(e.regions,t.regions),i.setAttribute(e.climate,t.climate),i.setAttribute(e.search,t.search),i.setAttribute(e.profile,t.profile),this.header.push(i)})),o.forEach((e=>{const i=this.ownerDocument.createElement("app-home");i.setAttribute(t.img,e.img),i.setAttribute(t.title,e.title),i.setAttribute(t.spot,e.spot),this.home.push(i)}))}connectedCallback(){this.render()}render(){var e,t;if(this.shadowRoot){const i=this.ownerDocument.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("href","/src/style.css"),this.shadowRoot.appendChild(i),this.header.forEach((e=>{var t;null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}));let s=this.ownerDocument.createElement("h2");null===(e=this.shadowRoot)||void 0===e||e.appendChild(s),s.setAttribute("class","card-title");let a=this.ownerDocument.createElement("main");null===(t=this.shadowRoot)||void 0===t||t.appendChild(a),s.textContent="Ya visitados",a.setAttribute("class","principal"),a&&this.home.forEach((e=>{a.appendChild(e)}))}}}customElements.define("app-container",n)})();