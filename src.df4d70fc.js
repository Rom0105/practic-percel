parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"tJ5y":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.galleryItems=void 0;const p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.galleryItems=p;
},{}],"VyiV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.refs=void 0;const e={galleryList:document.querySelector(".js-gallery"),lightBox:document.querySelector(".js-lightbox"),lightboxImage:document.querySelector(".lightbox__image")};exports.refs=e;
},{}],"UUu7":[function(require,module,exports) {
"use strict";var e=require("./galleryItems"),r=require("./refs");let a=null;function l(e){return e.map(({preview:e,original:r,description:a})=>`<li class="gallery__item">\n      <a\n        class="gallery__link"\n        href="${r}"\n      >\n        <img\n          class="gallery__image"\n          src="${e}"\n          data-source="${r}"\n          alt="${a}"\n        />\n      </a>\n    </li>`)}function s(s){s.preventDefault(),s.target.classList.contains("gallery__image")&&(r.refs.lightBox.classList.add("is-open"),r.refs.lightboxImage.src=s.target.dataset.source,l(e.galleryItems).forEach((e,r)=>{e.includes(s.target.src)&&(a=r)}),window.addEventListener("keydown",i))}function t(e){"IMG"!==(null==e?void 0:e.target.nodeName)&&(r.refs.lightboxImage.src="",r.refs.lightBox.classList.remove("is-open"),window.addEventListener("keydown",i))}function i({key:l}){switch(l){case e.galleryItems.length-1>a&&"ArrowRight":a+=1,r.refs.lightboxImage.src=e.galleryItems[a].original;break;case a>0&&"ArrowLeft":a-=1,r.refs.lightboxImage.src=e.galleryItems[a].original;break;case a===e.galleryItems.length-1&&"ArrowRight":a=0,r.refs.lightboxImage.src=e.galleryItems[a].original;break;case 0===a&&"ArrowLeft":a=e.galleryItems.length-1,r.refs.lightboxImage.src=e.galleryItems[a].original;break;case"Escape":t();break;default:alert("что-то пошло не так")}}r.refs.galleryList.innerHTML=l(e.galleryItems).join(""),r.refs.galleryList.addEventListener("click",s),r.refs.lightBox.addEventListener("click",t);
},{"./galleryItems":"tJ5y","./refs":"VyiV"}],"Focm":[function(require,module,exports) {
"use strict";require("./js/themeSwitch"),require("./js/galleryItems"),require("./js/refs");
},{"./js/themeSwitch":"UUu7","./js/galleryItems":"tJ5y","./js/refs":"VyiV"}]},{},["Focm"], null)
//# sourceMappingURL=/practic-percel/src.df4d70fc.js.map