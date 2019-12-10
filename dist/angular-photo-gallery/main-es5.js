function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation> </app-navigation>\n\n\n\n<div class=\"container p-4\" >\n  <router-outlet></router-outlet>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\" style=\"height: 4rem;\">\n <div class=\"container\">  \n \t<img src=\"assets/LOGO5.png\" width=\"200\" height=\"70\" />\n  <a class=\"navbar-brand\" routerLink=\"\"> </a>\n       \t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" routerLink=\"/signin\">Signin\n        <span class=\"navbar-toggler-icon\"></span>\n \t      </button>\n  \t<div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n   \t <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/signin\">Signin</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/principal\">Principal</a>\n      </li>\n    </ul>\n  </div>\n </div>\n</nav>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/photo-form/photo-form.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/photo-form/photo-form.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPhotoFormPhotoFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\" style=\"height: 2.5rem;\">\n <div class=\"container\">  \n \t<a class=\"navbar-brand\" routerLink=\"\"> {{user1}}: Nuevo Proyecto </a>\n  \t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n \t </button>\n  \t<div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n   \t <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/signup\">Login</a>\n      </li>\n   \t  \n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/photos/{{idv}}\" >tus proyectos</a>\n      </li>\n  \n\n    </ul>\n  </div>\n </div>\n\n</nav>\n\n\n\n\n<div class=\"col-lg-4 mx-auto\">\n\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t\tIngresa los datos\n\t\t\t</div>\n\n\t\t\t<div clas=\"card-body\" align= \"center\">\n\t\t\t\t<form (submit)=\"uploadPhoto(venta, precio, sector, metros, caracteristicas, vendedor)\">\n\t\t\t\t\t<input  class=\"d-none\" [value]=idv  #vendedor >\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<select id=\"L1\" class= \"form-control\" required #venta>\n\t\t\t\t\t\t  <option value=\"VENTA\">VENTA</option>\n\t\t\t\t\t\t  <option value=\"ALQUILER\">ALQUILER</option>\n\t\t\t\t\t\t  <option value=\"OTRO\">OTRO</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input id=\"L2\" type=\"number\"  class= \"form-control\" placeholder=\"Precio\" required #precio > \n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<select id=\"L3\" class= \"form-control\" required #sector>\n\t\t\t\t\t\t  <option value=\"Norte\">Norte</option>\n\t\t\t\t\t\t  <option value=\"Sur\">Sur</option>\n\t\t\t\t\t\t  <option value=\"Centro norte\">Centro norte</option>\n\t\t\t\t\t\t  <option value=\"Centro norte\">Valles</option>\n\t\t\t\t\t\t  <option value=\"Provincia\">Provincia</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input id=\"L4\" type=\"number\"  class= \"form-control\" placeholder=\"metros\" required #metros > \n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<textarea id=\"L5\" rows=\"2\" class=\"form-control\" placeholder=\"Características principales\" required #caracteristicas ></textarea>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t<input type=\"file\" class=\"d-none\" (change)=\"onPhotoSelected($event)\" #photoInput>\t\n\t\t\t\t<img id=\"casa\"  class=\"img-fluid\" [src]=\"photoSelected || 'assets/no-image.png'\" alt=\"No Images\" (click)=\"photoInput.click()\">\n\n\n\n\n\t\t\t\t\n\t\t\t\t\t<form >\n\t\t\t\t\t\t<canvas id=\"mycanvas\"  width=\"330\" height=\"200\">\n\n\t\t    \t\t\t</canvas>\n\n\t\t\t\t\t\t<p><button (click)=\"dibujar()\" >Foto</button>\n\t\t\t\t\t\t<button (click)=\"dibujar1()\" >Sombra</button>\n\t\t\t\t\t\t<button (click)=\"dibujar2()\" >Letras</button></p>\n\n\n\t\t\t\t\t</form >\n\n\t\t\t\t\t\t<button class=\"btn btn-primary btn-block\" type=\"\">\n\t\t\t\t\t\t\tGrabar\n\t\t\t\t\t\t</button>\n\t\t\t</form>\n\t\n\t\t\t</div>\n\t</div>\n\t\n</div>\n\n \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/photo-list/photo-list.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/photo-list/photo-list.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPhotoListPhotoListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\" style=\"height: 2.5rem;\">\n <div class=\"container\">  \n \t<a class=\"navbar-brand\" routerLink=\"\"> {{user1}}: tus proyectos </a>\n  \t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n \t </button>\n  \t<div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n   \t <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/signup\">Login</a>\n      </li>\n   \t  \n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]= \"['new']\" [queryParams]=\"{idv: idv}\" >Nuevo Proyecto</a>\n      </li>\n  \n\n    </ul>\n  </div>\n </div>\n\n</nav>\n\n      <form >\n         <div class=\"row\">\n          <div class=\"col-md-4 p4\" >\n                <input  class=\"d-none\" [value]=idv  #vendedor >\n            <div class=\"form-group\">\n              <select id=\"L1\" class= \"form-control\" placeholder=\"Venta\"  #transaccion>\n                <option value=\"\"></option>\n                <option value=\"VENTA\">VENTA</option>\n                <option value=\"ALQUILER\">ALQUILER</option>\n                <option value=\"OTRO\">OTRO</option>\n              </select>\n            \n\n            <select id=\"L2\" class= \"form-control\" placeholder=\"Precio\"  #precio>\n              <option value=\"\"> </option>\n              <option value=\"1\">0-100</option>\n              <option value=\"2\">100-300</option>\n              <option value=\"3\">300-500</option>\n              <option value=\"4\">500-1.000</option>\n              <option value=\"5\">1.000-5.000</option>\n              <option value=\"6\">5.000-50.000</option>\n              <option value=\"7\">75.000-100.000</option>\n              <option value=\"8\">100.000-150.000</option>\n              <option value=\"9\">150.000-300.000</option>\n              <option value=\"10\">más de 300.000</option>\n            </select>\n           \n            <select id=\"L3\" class= \"form-control\" placeholder=\"Sector\"  #sector>\n              <option value=\"\"></option>\n              <option value=\"Norte\">Norte</option>\n              <option value=\"Sur\">Sur</option>\n              <option value=\"Centro norte\">Centro norte</option>\n              <option value=\"Centro norte\">Valles</option>\n              <option value=\"Provincia\">Provincia</option>\n            </select>\n             <button (click)=\"buscarproyectos(transaccion, precio, sector, vendedor)\" class=\"btn btn-primary btn-block\" type=\"\">\n              Buscar\n            </button>\n\n          </div>\n          </div>\n        </div>\n      </form>\n\n\n<div class=\"row\">\n\t<div class=\"col-md-4 p4\" *ngFor=\"let photo of photos\">\n\t\t<div class=\"card card-photo\" (click)=\"selectedCard(photo._id, idv)\">\n\t\t\t<div class =\"card-header\">\n\t\t\t\t{{photo.transaccion}}\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<img [src]=\"'http://165.227.20.230:4000/'+ photo.imagePath\" class= \"img-card-top w-100\" >\n\t\t\t<div clas =\"card-body\">\n\t\t\t\t{{photo.caracteristicas}}\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t\n\t</div>\n\t\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/photo-preview/photo-preview.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/photo-preview/photo-preview.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPhotoPreviewPhotoPreviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"row\" *ngIf=\"!photo; else main_content\">\n\t<h1>Loading...</h1>\n\t\n</div>\n\n\n<ng-template #main_content>\n<div class=\"row\">\n\t<div clas=col-md-5>\n\t\t<div class=\"card\">\n\t\t\t<img [src]=\"'http://165.227.20.230:4000/'+ photo.imagePath\" \n\t\t\tclass=\"img-fluid\">\n\t\t\t\n\t\t</div>\n\n\t</div>\n\t\t<div class=\"col-md-7\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<form class=\"card-body\" (submit)=\"updatePhoto(venta, precio, sector, metros, caracteristicas, vendedor)\">\t\t\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" class=\"d-none\" placeholder=\"transaccion\" [value]=\"photo.vendedor\" #venta1>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<select id=\"L1\" class= \"form-control\" required #venta [value]=\"photo.transaccion\">\n\t\t\t\t\t\t  <option value=\"Venta\">Venta</option>\n\t\t\t\t\t\t  <option value=\"Alquiler\">Alquiler</option>\n\t\t\t\t\t\t  <option value=\"Otro\">Otro</option>\n\t\t\t\t\t\t</select> \n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input id=\"L2\" type=\"number\"  class= \"form-control\" [value]=\"photo.precio\" placeholder=\"Precio\" required #precio > \n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<select id=\"L3\" class= \"form-control\" [value]=\"photo.sector\" required #sector>\n\t\t\t\t\t\t  <option value=\"Norte\">Norte</option>\n\t\t\t\t\t\t  <option value=\"Sur\">Sur</option>\n\t\t\t\t\t\t  <option value=\"Centro norte\">Centro norte</option>\n\t\t\t\t\t\t  <option value=\"Centro norte\">Valles</option>\n\t\t\t\t\t\t  <option value=\"Provincia\">Provincia</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input id=\"L4\" type=\"number\"  class= \"form-control\" placeholder=\"metros\"  [value]=\"photo.metros\" required #metros > \n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<textarea id=\"L5\" rows=\"2\" class=\"form-control\" placeholder=\"Características principales\" required #caracteristicas  [value]=\"photo.caracteristicas\"  ></textarea>\n\t\t\t\t\t</div>\n\t<!--  \t\t<button class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\tActualizar\n\t\t\t\t\t</button>-->\n\t\t\t\t</form>\n\t\t\t\t\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t\n\t</div>\n\t\n\n<button class=\"btn btn-danger\" (click)=\"deletePhoto(photo._id)\">\n\tEliminar proyecto\n\n</button>\n\n</ng-template>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/principal/principal.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/principal/principal.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPrincipalPrincipalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2  class=\"Titulo1\" align=\"Left\">Inmovivienda: </h2>\n\n\t<h3 class=\"Parrafo1\" align=\"Justify\" >Somos una Agencia de Servicios Inmobiliarios, nuestro trabajo principal es SERVIR. </h3>\n\t<p> </p>\n\t<h3 class=\"Parrafo1\" align=\"Justify\" >Cuando usted se contacta con INMOVIVIENDA va a tener la seguridad de encontrarse con agentes inmobiliarios profesionales, que están preparados para servirle. Ellos le brindarán información, apoyo y lo atenderán con su requerimiento. Permítanos servirle, y guiarle a realizar un buen negocio para usted y su familia. </h3>\n\t<p> </p>\n\t<p> </p>\n<h2  class=\"Titulo1\" align=\"Left\">Nuestro equipo:</h2>\n\t<p>  </p>\n\t<h3 class=\"Parrafo1\" align=\"Justify\">Un equipo joven y profesional para atenderle se encuentra a su disposición </h3>\n\t<p> </p>\n\n<div class=\"card\" >\n    <div class=\"row\" style=\"width: 48rem;\" align=\"center\">\n     \n      <div class=\"col-md-4 p4\" >\n        <div class=\"card card-photo\" >\n          <div class=\"card-title\">\n            <h5 class=\"FotosN\"> Marycarmen Orellana </h5>\n             <p class=\"FotosT\">Telf. 0987015393</p>      \n          </div>\n          <img src=\"assets/MarycarmenO.jpg\" class=\"card-img-top\" height=\"180\"    alt=\"...\" >\n          <div clas =\"card-body\">\n          \t <p class=\"FotosT\"></p>  \n          </div>\n          <p class=\"card-text\"></p>  \n        </div>\n      </div>\n\n      <div class=\"col-md-4 p4\" >\n        <div class=\"card card-photo\" >\n          <div class=\"card-title\">\n            <h5 class=\"FotosN\">Daniel Espinosa</h5>\n             <p class=\"FotosT\">Telf. 0998127069</p>      \n          </div>\n          <img src=\"assets/DanielE.jpg\" class=\"card-img-top\" height=\"180\"    alt=\"...\" >\n          <div clas =\"card-body\">\n          \t <p class=\"FotosT\"></p>  \n          </div>\n          <p class=\"card-text\"></p>  \n        </div>\n      </div>\n\t  \n      <div class=\"col-md-4 p4\" >\n        <div class=\"card card-photo\" >\n          <div class=\"card-title\">\n            <h5 class=\"FotosN\">Mariely Zurita</h5>\n             <p class=\"FotosT\">Telf. 0980477700</p>      \n          </div>\n          <img src=\"assets/MarielyZ.jpg\" class=\"card-img-top\" height=\"180\"    alt=\"...\" >\n          <div clas =\"card-body\">\n          \t <p class=\"FotosT\"></p>  \n          </div>\n          <p class=\"card-text\"></p>  \n        </div>\n      </div>\n\n      <div class=\"col-md-4 p4\" >\n        <div class=\"card card-photo\" >\n          <div class=\"card-title\">\n            <h5 class=\"FotosN\">Geovanna Gortaire</h5>\n             <p class=\"FotosT\">Telf. 0978641825</p>      \n          </div>\n          <img src=\"assets/GeovannaG.jpg\" class=\"card-img-top\" height=\"180\"   alt=\"...\" >\n          <div clas =\"card-body\">\n          \t <p class=\"FotosT\"></p>  \n          </div>\n          <p class=\"card-text\"></p>  \n        </div>\n      </div>\n\n      <div class=\"col-md-4 p4\" >\n        <div class=\"card card-photo\" >\n          <div class=\"card-title\">\n            <h5 class=\"FotosN\">Janella Lombeida</h5>\n             <p class=\"FotosT\">Telf. 0990336469</p>      \n          </div>\n          <img src=\"assets/JanellaL.jpg\" class=\"card-img-top\" height=\"180\"   alt=\"...\" >\n          <div clas =\"card-body\">\n          \t <p class=\"FotosT\"></p>  \n          </div>\n          <p class=\"card-text\"></p>  \n        </div>\n      </div>\n\n      <div class=\"col-md-4 p4\" >\n        <div class=\"card card-photo\" >\n          <div class=\"card-title\">\n            <h5 class=\"FotosN\">Verónica Gallegos</h5>\n             <p class=\"FotosT\">Telf. 0958919584</p>      \n          </div>\n          <img src=\"assets/VeronicaG.jpg\" class=\"card-img-top\" height=\"180\"    alt=\"...\" >\n          <div clas =\"card-body\">\n          \t <p class=\"FotosT\"></p>  \n          </div>\n          <p class=\"card-text\"></p>  \n        </div>\n      </div>\n\n      <div class=\"col-md-4 p4\" >\n        <div class=\"card card-photo\" >\n          <div class=\"card-title\">\n            <h5 class=\"FotosN\">Belén Alarcón</h5>\n             <p class=\"FotosT\">Telf. 0983593749</p>      \n          </div>\n          <img src=\"assets/BelenA.jpg\" class=\"card-img-top\" height=\"180\"    alt=\"...\" >\n          <div clas =\"card-body\">\n          \t <p class=\"FotosT\"></p>  \n          </div>\n          <p class=\"card-text\"></p>  \n        </div>\n      </div>\n\n      <div class=\"col-md-4 p4\" >\n        <div class=\"card card-photo\" >\n          <div class=\"card-title\">\n            <h5 class=\"FotosN\">Isabel Ron</h5>\n             <p class=\"FotosT\">Telf. 0999807657</p>      \n          </div>\n          <img src=\"assets/IsabelR.jpg\" class=\"card-img-top\"  height=\"180\"  alt=\"...\" >\n          <div clas =\"card-body\">\n          \t <p class=\"FotosT\"></p>  \n          </div>\n          <p class=\"card-text\"></p>  \n        </div>\n      </div>            \n\n\n\n    </div>\n  </div>\n\n<p> </p>\n\n<h2  class=\"Titulo1\" align=\"Left\">Servicios: </h2>\n\n<h2  class=\"Titulo2\" align=\"Left\">•\tPromoción Inmobiliaria </h2>\n\t<p> </p>\n\t<h3 class=\"Parrafo1\" align=\"Justify\" >Promocionamos tu propiedad, a través de todos los canales tecnológicos inmobiliarios y sobre todo a través de nuestra red de colaboradores lo que nos permite ampliar nuestra capacidad de atención. </h3>\n\t<p> </p>\n\t<p> </p>\n<h2  class=\"Titulo2\" align=\"Left\">•\tVentas de Inmuebles </h2>\n\t<p> </p>\n\t<h3 class=\"Parrafo1\" align=\"Justify\" >Con más de 3 millones de dólares comercializados en nuestra inmobiliaria, nos hemos posicionado como una agencia sólida que garantiza que sus procesos de venta sean: efectivos, rápidos y seguros para las partes.</h3>\n\t<p> </p>\n\t<p> </p>\n\n<h2  class=\"Titulo2\" align=\"Left\">•\tAlquiler </h2>\n\t<p> </p>\n\t<h3 class=\"Parrafo1\" align=\"Justify\" >Contamos con una amplia oferta inmobiliaria de bienes disponibles para la renta en Quito, también mediante nuestra red de colaboradores podemos conseguir la propiedad que se ajusta a sus requerimientos, a fin de que obtenga el lugar que usted está esperando.</h3>\n\t<p> </p>\n\t<p> </p>\n<h2  class=\"Titulo2\" align=\"Left\">•\tAvalúos Comerciales </h2>\n\t<p> </p>\n\t<h3 class=\"Parrafo1\" align=\"Justify\" >Nuestro servicio especializado de Avalúos Comerciales permite tomar mejores decisiones a la hora de vender su propiedad. Si hacemos una oferta atractiva y competitiva en el mercado, el tiempo de venta de su propiedad se reduce significativamente. </h3>\n\t<p> </p>\n\t<p> </p>\n\n<h2  class=\"Titulo2\" align=\"Left\">•\tTransferencias de Dominio </h2>\n\t<p> </p>\n\t<h3 class=\"Parrafo1\" align=\"Justify\" >El proceso de transferencia de domino es vital en la negociación de su propiedad, de esto depende que su compra – venta se resuelva en meses o en semanas. La agilidad en los procesos que podemos controlar es imprescindible para reducir significativamente el tiempo de venta de un inmueble.  </h3>\n\t<p> </p>\n\t<p> </p>\n\n\t<p> </p>\n<h2  class=\"Titulo1\" align=\"Left\">Nuestro catálogo:</h2>\n<div class=\"card\" >\n <div class=\"card-body\">\n\n    \n</div>\n\n    <div class=\"row\">\n      <div class=\"col-md-4 p4\" *ngFor=\"let photo of photos\">\n        <div class=\"card card-photo\" >\n          <div class =\"card-header\">\n            {{photo.transaccion}}\n            \n          </div>\n          <img [src]=\"'http://165.227.20.230:4000/'+ photo.imagePath\" class= \"img-card-top w-100\" >\n          <div clas =\"card-body\">\n            {{photo.precio}}\n          </div>\n          <p class=\"card-text\"></p>\n          \n        </div>\n        \n      </div>\n      \n  </div>\n\n\n\n</div>\n\n\n\n\n\n    \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/singin/singin.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/singin/singin.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSinginSinginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-lg-4 mx-auto\">\n\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\tIngreso: Inmovivienda\n\t\t\t</div>\n\t\t\t\t\n\t\t\t<div clas=\"card-body\" align= \"center\">\n\t\t\t\t<form (submit)=\"signinUser(telefono, password)\" >\n\t\t\t\t\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"number\"  class=\"form-control\" placeholder=\"Célular\" required #telefono>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"password\"  class=\"form-control\" placeholder=\"clave\" required #password >\n\t\t\t\t\t</div>\n\n\n\t\t\t\t<button class=\"btn btn-primary btn-block\" type=\"\">\n\t\t\t\t\tIngreso\n\t\t\t\t</button>\n\n\t\t\t\t</form>\n\n\n\t\t\t</div>\n\t</div>\n\t\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/singup/singup.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/singup/singup.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSingupSingupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-lg-4 mx-auto\">\n\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\tCargar usuario\n\t\t\t</div>\n\n\t\t\t<div clas=\"card-body\" align= \"center\">\n\t\t\t\t<form (submit)=\"uploadUser(username, telefono, password)\" >\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\"  class= \"form-control\" placeholder=\"Username\" required #username > \n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"text\"  class=\"form-control\" placeholder=\"Célular\" required #telefono>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"password\"  class=\"form-control\" placeholder=\"clave\" required #password >\n\t\t\t\t\t</div>\n\n\t\t\t\t<button class=\"btn btn-primary btn-block\" type=\"\">\n\t\t\t\t\tSignUp\n\t\t\t\t</button>\n\n\t\t\t\t</form>\n\n\n\t\t\t</div>\n\t</div>\n\t\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/photo-list/photo-list.component */
    "./src/app/components/photo-list/photo-list.component.ts");
    /* harmony import */


    var _components_photo_form_photo_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/photo-form/photo-form.component */
    "./src/app/components/photo-form/photo-form.component.ts");
    /* harmony import */


    var _components_photo_preview_photo_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/photo-preview/photo-preview.component */
    "./src/app/components/photo-preview/photo-preview.component.ts");
    /* harmony import */


    var _components_singup_singup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/singup/singup.component */
    "./src/app/components/singup/singup.component.ts");
    /* harmony import */


    var _components_singin_singin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/singin/singin.component */
    "./src/app/components/singin/singin.component.ts");
    /* harmony import */


    var _components_principal_principal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/principal/principal.component */
    "./src/app/components/principal/principal.component.ts");

    var routes = [{
      path: 'principal',
      component: _components_principal_principal_component__WEBPACK_IMPORTED_MODULE_8__["PrincipalComponent"]
    }, {
      path: 'signin',
      component: _components_singin_singin_component__WEBPACK_IMPORTED_MODULE_7__["SinginComponent"]
    }, {
      path: 'signup',
      component: _components_singup_singup_component__WEBPACK_IMPORTED_MODULE_6__["SingupComponent"]
    }, {
      path: 'photos/:idv',
      component: _components_photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_3__["PhotoListComponent"]
    }, {
      path: 'photos/:idv/new',
      component: _components_photo_form_photo_form_component__WEBPACK_IMPORTED_MODULE_4__["PhotoFormComponent"]
    }, {
      path: 'photos/:idv/:id',
      component: _components_photo_preview_photo_preview_component__WEBPACK_IMPORTED_MODULE_5__["PhotoPreviewComponent"]
    }, {
      path: '',
      redirectTo: '/principal',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'angular-photo-gallery';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/navigation/navigation.component */
    "./src/app/components/navigation/navigation.component.ts");
    /* harmony import */


    var _components_photo_form_photo_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/photo-form/photo-form.component */
    "./src/app/components/photo-form/photo-form.component.ts");
    /* harmony import */


    var _components_photo_preview_photo_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/photo-preview/photo-preview.component */
    "./src/app/components/photo-preview/photo-preview.component.ts");
    /* harmony import */


    var _components_photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/photo-list/photo-list.component */
    "./src/app/components/photo-list/photo-list.component.ts");
    /* harmony import */


    var _components_singup_singup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/singup/singup.component */
    "./src/app/components/singup/singup.component.ts");
    /* harmony import */


    var _components_singin_singin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/singin/singin.component */
    "./src/app/components/singin/singin.component.ts");
    /* harmony import */


    var _components_principal_principal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/principal/principal.component */
    "./src/app/components/principal/principal.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"], _components_photo_form_photo_form_component__WEBPACK_IMPORTED_MODULE_7__["PhotoFormComponent"], _components_photo_preview_photo_preview_component__WEBPACK_IMPORTED_MODULE_8__["PhotoPreviewComponent"], _components_photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_9__["PhotoListComponent"], _components_singup_singup_component__WEBPACK_IMPORTED_MODULE_10__["SingupComponent"], _components_singin_singin_component__WEBPACK_IMPORTED_MODULE_11__["SinginComponent"], _components_principal_principal_component__WEBPACK_IMPORTED_MODULE_12__["PrincipalComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/navigation/navigation.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/components/navigation/navigation.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavigationNavigationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/navigation/navigation.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/navigation/navigation.component.ts ***!
    \***************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppComponentsNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavigationComponent =
    /*#__PURE__*/
    function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationComponent;
    }();

    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation.component.css */
      "./src/app/components/navigation/navigation.component.css")).default]
    })], NavigationComponent);
    /***/
  },

  /***/
  "./src/app/components/photo-form/photo-form.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/components/photo-form/photo-form.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPhotoFormPhotoFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvdG8tZm9ybS9waG90by1mb3JtLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/photo-form/photo-form.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/photo-form/photo-form.component.ts ***!
    \***************************************************************/

  /*! exports provided: PhotoFormComponent */

  /***/
  function srcAppComponentsPhotoFormPhotoFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoFormComponent", function () {
      return PhotoFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/photo.service */
    "./src/app/services/photo.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_canvas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/canvas.service */
    "./src/app/services/canvas.service.ts");
    /* harmony import */


    var _service_singup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/singup.service */
    "./src/app/service/singup.service.ts");

    var PhotoFormComponent =
    /*#__PURE__*/
    function () {
      function PhotoFormComponent(photoService, router, rutaActiva, activeRoute, UserService) {
        _classCallCheck(this, PhotoFormComponent);

        this.photoService = photoService;
        this.router = router;
        this.rutaActiva = rutaActiva;
        this.activeRoute = activeRoute;
        this.UserService = UserService;
      }

      _createClass(PhotoFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activeRoute.params.subscribe(function (params) {
            _this.idv = params['idv'];

            _this.UserService.getUsuario(_this.idv).subscribe(function (res) {
              _this.user1 = res.username;
            }, function (err) {
              return console.log(err);
            });
          });
        }
      }, {
        key: "onPhotoSelected",
        value: function onPhotoSelected(event) {
          var _this2 = this;

          if (event.target.files && event.target.files[0]) {
            this.file = event.target.files[0]; //image preview

            var reader = new FileReader();

            reader.onload = function (e) {
              return _this2.photoSelected = reader.result;
            };

            reader.readAsDataURL(this.file);
          }
        }
      }, {
        key: "uploadPhoto",
        value: function uploadPhoto(venta, precio, sector, metros, caracteristicas, vendedor) {
          var _this3 = this;

          //console.log(venta.value);
          //console.log(precio.value);
          //console.log(sector.value);
          //console.log(metros.value);
          //console.log(caracteristicas.value);
          //console.log(vendedor.value);
          var canvas = document.getElementById("mycanvas");
          var img = canvas.toDataURL("image/png");
          img = img.replace("image/jpeg", "image/octet-stream");
          var file3 = dataURItoBlob(img);

          function dataURItoBlob(dataURI) {
            // convert base64/URLEncoded data component to raw binary data held in a string
            var byteString;
            if (dataURI.split(',')[0].indexOf('base64') >= 0) byteString = atob(dataURI.split(',')[1]);else byteString = unescape(dataURI.split(',')[1]); // separate out the mime component

            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // write the bytes of the string to a typed array

            var ia = new Uint8Array(byteString.length);

            for (var i = 0; i < byteString.length; i++) {
              ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ia], {
              type: mimeString
            });
          }

          this.file1 = file3; //this.idv= params ['idv'];
          // console.log(img);
          //ojo esta es la parte que vale 

          this.photoService.createPhoto(venta.value, precio.value, sector.value, metros.value, caracteristicas.value, vendedor.value, this.file1).subscribe(function (res) {
            _this3.router.navigate(['/photos/', _this3.idv]);
          }, function (err) {
            return console.log(err);
          });
          return false;
        }
      }, {
        key: "dibujar",
        value: function dibujar() {
          var canvas = new _services_canvas_service__WEBPACK_IMPORTED_MODULE_4__["CanvasService"]("mycanvas");
          var img2 = document.getElementById("casa");
          var mysrc = img2.src;
          canvas.drawImage(mysrc, 0, 0, 335, 260, 1);
          return false;
        }
      }, {
        key: "dibujar1",
        value: function dibujar1() {
          var canvas = new _services_canvas_service__WEBPACK_IMPORTED_MODULE_4__["CanvasService"]("mycanvas"); //canvas.drawLine(10, 10, 200, 200, "red", 2);
          //canvas.drawCircle(200, 200, 100, "black", 1, "yellow", .4);
          //canvas.drawRectangulo(0, 0, 100, 260, "black", 1, "yellow", 1);
          //canvas.drawTexto("logico", 0, 0);

          canvas.drawRectangulo(0, 0, 120, 260, "white", 1, "white", 0.1);
          return false;
        }
      }, {
        key: "dibujar2",
        value: function dibujar2() {
          var canvas = new _services_canvas_service__WEBPACK_IMPORTED_MODULE_4__["CanvasService"]("mycanvas");
          var fillStyle = "rgba(0, 0, 0)";
          var font = "16px Arial";
          var fillStyle1 = "rgba(0, 0, 0, 0.4)";
          var font1 = "9px Arial";
          var font2 = "12px Arial";
          var x = 5;
          var y = 5;
          var letrero1 = document.getElementById("L1");
          var titulo1 = letrero1.value;
          canvas.drawTexto(titulo1, x + 30, 65, fillStyle, font);
          var letrero2 = document.getElementById("L2");
          var titulo2 = letrero2.value;
          canvas.drawTexto("Precio:", x + 10, y + 80, fillStyle1, font1);
          canvas.drawTexto(titulo2, x + 40, y + 93, fillStyle, font2);
          var letrero3 = document.getElementById("L3");
          var titulo3 = letrero3.value;
          canvas.drawTexto("Sector:", x + 10, y + 108, fillStyle1, font1);
          canvas.drawTexto(titulo3, x + 40, y + 121, fillStyle, font2);
          var letrero4 = document.getElementById("L4");
          var titulo4 = letrero4.value;
          canvas.drawTexto("Área (m²):", x + 10, y + 136, fillStyle1, font1);
          canvas.drawTexto(titulo4, x + 40, y + 148, fillStyle, font2);
          canvas.drawLine(10, 180, 100, 180, "rgba(0,0,0)", 1);
          canvas.drawLine(10, 185, 100, 185, "rgba(0,230,230)", 1);
          canvas.drawImage("assets/LOGO5.png", x + 5, 5, 110, 45, 1);
          return false;
        }
      }]);

      return PhotoFormComponent;
    }();

    PhotoFormComponent.ctorParameters = function () {
      return [{
        type: _services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _service_singup_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };

    PhotoFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-photo-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./photo-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/photo-form/photo-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./photo-form.component.css */
      "./src/app/components/photo-form/photo-form.component.css")).default]
    })], PhotoFormComponent);
    /***/
  },

  /***/
  "./src/app/components/photo-list/photo-list.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/components/photo-list/photo-list.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPhotoListPhotoListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-photo{\r\n\tcursor: pointer;\r\n\r\n}\r\n\r\n.card-photo:hover {\r\n border:3px solid #333;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG90by1saXN0L3Bob3RvLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGVBQWU7O0FBRWhCOztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waG90by1saXN0L3Bob3RvLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXBob3Rve1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuXHJcbi5jYXJkLXBob3RvOmhvdmVyIHtcclxuIGJvcmRlcjozcHggc29saWQgIzMzMztcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/photo-list/photo-list.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/photo-list/photo-list.component.ts ***!
    \***************************************************************/

  /*! exports provided: PhotoListComponent */

  /***/
  function srcAppComponentsPhotoListPhotoListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoListComponent", function () {
      return PhotoListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/photo.service */
    "./src/app/services/photo.service.ts");
    /* harmony import */


    var _service_singup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/singup.service */
    "./src/app/service/singup.service.ts");

    var PhotoListComponent =
    /*#__PURE__*/
    function () {
      function PhotoListComponent(photoService, router, activeRoute, UserService) {
        _classCallCheck(this, PhotoListComponent);

        this.photoService = photoService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.UserService = UserService;
        this.photos = [];
      }

      _createClass(PhotoListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.activeRoute.params.subscribe(function (params) {
            _this4.idv = params['idv'];

            _this4.UserService.getUsuario(_this4.idv).subscribe(function (res) {
              _this4.user1 = res.username;
            }, function (err) {
              return console.log(err);
            });

            if (!_this4.photo) {
              _this4.photoService.getPhotosV(_this4.idv).subscribe(function (res) {
                _this4.photos = res;
              }, function (err) {
                return console.log(err);
              });
            }
          });
        }
      }, {
        key: "selectedCard",
        value: function selectedCard(id, idv) {
          this.router.navigate(['/photos', idv, id]);
        }
      }, {
        key: "buscarproyectos",
        value: function buscarproyectos(transaccion, precio, sector, vendedor) {
          var _this5 = this;

          this.activeRoute.params.subscribe(function (params) {
            _this5.idv = params['idv'];

            _this5.photoService.getPhotosVB(_this5.idv, transaccion.value, precio.value, sector.value).subscribe(function (res) {
              _this5.photos = res;
            }, function (err) {
              return console.log(err);
            }); //console.log(this.photos); 

          });
          return false;
        }
      }]);

      return PhotoListComponent;
    }();

    PhotoListComponent.ctorParameters = function () {
      return [{
        type: _services_photo_service__WEBPACK_IMPORTED_MODULE_3__["PhotoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _service_singup_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    PhotoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-photo-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./photo-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/photo-list/photo-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./photo-list.component.css */
      "./src/app/components/photo-list/photo-list.component.css")).default]
    })], PhotoListComponent);
    /***/
  },

  /***/
  "./src/app/components/photo-preview/photo-preview.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/photo-preview/photo-preview.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPhotoPreviewPhotoPreviewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvdG8tcHJldmlldy9waG90by1wcmV2aWV3LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/photo-preview/photo-preview.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/photo-preview/photo-preview.component.ts ***!
    \*********************************************************************/

  /*! exports provided: PhotoPreviewComponent */

  /***/
  function srcAppComponentsPhotoPreviewPhotoPreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoPreviewComponent", function () {
      return PhotoPreviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/photo.service */
    "./src/app/services/photo.service.ts");

    var PhotoPreviewComponent =
    /*#__PURE__*/
    function () {
      function PhotoPreviewComponent(activeRoute, router, photoService) {
        _classCallCheck(this, PhotoPreviewComponent);

        this.activeRoute = activeRoute;
        this.router = router;
        this.photoService = photoService;
      }

      _createClass(PhotoPreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.activeRoute.params.subscribe(function (params) {
            _this6.id = params['id'];
            _this6.idv = params['idv']; //	console.log(this.idv);

            _this6.photoService.getPhoto(_this6.id).subscribe(function (res) {
              _this6.photo = res;
            }, function (err) {
              return console.log(err);
            });
          });
        }
      }, {
        key: "deletePhoto",
        value: function deletePhoto(id) {
          var _this7 = this;

          this.activeRoute.params.subscribe(function (params) {
            _this7.id = params['id'];
            _this7.idv = params['idv'];
            console.log(_this7.idv);
          });
          this.photoService.deletePhoto(id).subscribe(function (res) {
            console.log(res), _this7.router.navigate(['/photos/', _this7.idv]);
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "updatePhoto",
        value: function updatePhoto(title, description) {
          var _this8 = this;

          this.photoService.updatePhoto(this.id, title.value, description.value).subscribe(function (res) {
            console.log(res), _this8.router.navigate(['/photos']);
          }, function (err) {
            return console.log(err);
          });
          return false;
        }
      }]);

      return PhotoPreviewComponent;
    }();

    PhotoPreviewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_photo_service__WEBPACK_IMPORTED_MODULE_3__["PhotoService"]
      }];
    };

    PhotoPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-photo-preview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./photo-preview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/photo-preview/photo-preview.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./photo-preview.component.css */
      "./src/app/components/photo-preview/photo-preview.component.css")).default]
    })], PhotoPreviewComponent);
    /***/
  },

  /***/
  "./src/app/components/principal/principal.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/principal/principal.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPrincipalPrincipalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".Titulo1 {\r\n\tfont-family: Verdana, Geneva, sans-serif;\r\n\tfont-size: 2rem;\r\n\tcolor: rgb(42,152,186);\r\n}\r\n\r\n.Titulo2 {\r\n\tfont-family: Verdana, Geneva, sans-serif;\r\n\tfont-size: 1.6rem;\r\n\tcolor: rgb(42,152,186);\r\n}\r\n\r\n.Parrafo1 {\r\n\tfont-family: Verdana, Geneva, sans-serif;\r\n\tfont-size: 1.5rem;\r\n\tcolor: rgb(166,166,166);\r\n}\r\n\r\n.FotosT {\r\n\tfont-family: Verdana, Geneva, sans-serif;\r\n\tfont-size: 1.1rem;\r\n\tcolor: rgb(0,176,240);\r\n}\r\n\r\n.FotosN {\r\n\tfont-family: Verdana, Geneva, sans-serif;\r\n\tfont-size: 1.3rem;\r\n\tcolor: rgb(127,127,127);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmluY2lwYWwvcHJpbmNpcGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx3Q0FBd0M7Q0FDeEMsZUFBZTtDQUNmLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLHdDQUF3QztDQUN4QyxpQkFBaUI7Q0FDakIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0Msd0NBQXdDO0NBQ3hDLGlCQUFpQjtDQUNqQix1QkFBdUI7QUFDeEI7O0FBR0E7Q0FDQyx3Q0FBd0M7Q0FDeEMsaUJBQWlCO0NBQ2pCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLHdDQUF3QztDQUN4QyxpQkFBaUI7Q0FDakIsdUJBQXVCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcmluY2lwYWwvcHJpbmNpcGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuVGl0dWxvMSB7XHJcblx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDJyZW07XHJcblx0Y29sb3I6IHJnYig0MiwxNTIsMTg2KTtcclxufVxyXG5cclxuLlRpdHVsbzIge1xyXG5cdGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxLjZyZW07XHJcblx0Y29sb3I6IHJnYig0MiwxNTIsMTg2KTtcclxufVxyXG5cclxuLlBhcnJhZm8xIHtcclxuXHRmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdGNvbG9yOiByZ2IoMTY2LDE2NiwxNjYpO1xyXG59XHJcblxyXG5cclxuLkZvdG9zVCB7XHJcblx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDEuMXJlbTtcclxuXHRjb2xvcjogcmdiKDAsMTc2LDI0MCk7XHJcbn1cclxuXHJcbi5Gb3Rvc04ge1xyXG5cdGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxLjNyZW07XHJcblx0Y29sb3I6IHJnYigxMjcsMTI3LDEyNyk7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/principal/principal.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/principal/principal.component.ts ***!
    \*************************************************************/

  /*! exports provided: PrincipalComponent */

  /***/
  function srcAppComponentsPrincipalPrincipalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function () {
      return PrincipalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/photo.service */
    "./src/app/services/photo.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PrincipalComponent =
    /*#__PURE__*/
    function () {
      function PrincipalComponent(photoService, router) {
        _classCallCheck(this, PrincipalComponent);

        this.photoService = photoService;
        this.router = router;
        this.photos = [];
      }

      _createClass(PrincipalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.photoService.getPhotos().subscribe(function (res) {
            _this9.photos = res;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "selectedCard",
        value: function selectedCard(id) {
          this.router.navigate(['/photos', id]);
        }
      }]);

      return PrincipalComponent;
    }();

    PrincipalComponent.ctorParameters = function () {
      return [{
        type: _services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    PrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-principal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./principal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/principal/principal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./principal.component.css */
      "./src/app/components/principal/principal.component.css")).default]
    })], PrincipalComponent);
    /***/
  },

  /***/
  "./src/app/components/singin/singin.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/singin/singin.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSinginSinginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2luZ2luL3Npbmdpbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/singin/singin.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/singin/singin.component.ts ***!
    \*******************************************************/

  /*! exports provided: SinginComponent */

  /***/
  function srcAppComponentsSinginSinginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SinginComponent", function () {
      return SinginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_singup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/singup.service */
    "./src/app/service/singup.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SinginComponent =
    /*#__PURE__*/
    function () {
      function SinginComponent(router, UserService, activeRoute, userService) {
        _classCallCheck(this, SinginComponent);

        this.router = router;
        this.UserService = UserService;
        this.activeRoute = activeRoute;
        this.userService = userService;
      }

      _createClass(SinginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signinUser",
        value: function signinUser(telefono, password) {
          var _this10 = this;

          //console.log(username.value);
          //console.log(telefono.value);
          //console.log(password.value);
          //console.log(description.value);
          this.UserService.signinUser(telefono.value, password.value).subscribe(function (res) {
            _this10.user3 = res;
            var idv = _this10.user3._id; //console.log(res);

            _this10.router.navigate(['/photos/', idv]); //this.router.navigate(['/photos/'], '5dd313bbd9c9f12c54d1f8f7' )

          }, function (err) {
            return console.log(err);
          });
          return false;
        }
      }]);

      return SinginComponent;
    }();

    SinginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _service_singup_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _service_singup_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    SinginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-singin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./singin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/singin/singin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./singin.component.css */
      "./src/app/components/singin/singin.component.css")).default]
    })], SinginComponent);
    /***/
  },

  /***/
  "./src/app/components/singup/singup.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/singup/singup.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSingupSingupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2luZ3VwL3Npbmd1cC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/singup/singup.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/singup/singup.component.ts ***!
    \*******************************************************/

  /*! exports provided: SingupComponent */

  /***/
  function srcAppComponentsSingupSingupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SingupComponent", function () {
      return SingupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_singup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/singup.service */
    "./src/app/service/singup.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SingupComponent =
    /*#__PURE__*/
    function () {
      function SingupComponent(router, UserService) {
        _classCallCheck(this, SingupComponent);

        this.router = router;
        this.UserService = UserService;
      }

      _createClass(SingupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "uploadUser",
        value: function uploadUser(username, telefono, password) {
          var _this11 = this;

          //console.log(username.value);
          //console.log(telefono.value);
          //console.log(password.value);
          //console.log(description.value)
          this.UserService.createUser(username.value, telefono.value, password.value).subscribe(function (res) {
            _this11.router.navigate(['signin']);
          }, function (err) {
            return console.log(err);
          });
          return false;
        }
      }]);

      return SingupComponent;
    }();

    SingupComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _service_singup_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    SingupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-singup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./singup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/singup/singup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./singup.component.css */
      "./src/app/components/singup/singup.component.css")).default]
    })], SingupComponent);
    /***/
  },

  /***/
  "./src/app/service/singup.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/service/singup.service.ts ***!
    \*******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServiceSingupServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.URL = 'http://165.227.20.230:4000/';
        this.URL1 = 'http://localhost:4000/';
      }

      _createClass(UserService, [{
        key: "createUser",
        value: function createUser(username, telefono, password) {
          //console.log(username);
          //console.log(email);
          //console.log(password);
          //const fd = new FormData();
          //fd.append('username', username);
          //fd.append('email', email);
          //fd.append('password', password);
          return this.http.post("".concat(this.URL, "api/signup"), {
            "username": username,
            "telefono": telefono,
            "password": password
          });
        }
      }, {
        key: "signinUser",
        value: function signinUser(telefono, password) {
          return this.http.post("".concat(this.URL, "api/signin"), {
            "telefono": telefono,
            "password": password
          });
        }
      }, {
        key: "getUsuario",
        value: function getUsuario(idv) {
          //console.log(idv);
          return this.http.post("".concat(this.URL, "api/datos").concat(idv), {
            idv: idv
          });
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/services/canvas.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/canvas.service.ts ***!
    \********************************************/

  /*! exports provided: CanvasService */

  /***/
  function srcAppServicesCanvasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasService", function () {
      return CanvasService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CanvasService =
    /*#__PURE__*/
    function () {
      function CanvasService(container) {
        _classCallCheck(this, CanvasService);

        var containerElement;
        if (typeof container == "string") containerElement = document.getElementById(container);else containerElement = container;

        if (containerElement.tagName == "CANVAS") {
          this.canvas = containerElement;
        } else {
          this.canvas = document.createElement("canvas");
          var dimensions = containerElement.getBoundingClientRect();
          this.canvas.width = dimensions.width;
          this.canvas.height = dimensions.height;
        }

        this.context = this.canvas.getContext("2d");
      } //#endregion


      _createClass(CanvasService, [{
        key: "drawRect",
        value: function drawRect(x, y, width, height) {
          var strokeColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "black";
          var lineWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
          var fillColor = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "";
          var alpha = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
          var context = this.context;
          context.globalAlpha = alpha;

          if (fillColor) {
            context.fillStyle = fillColor;
            context.fillRect(x, y, width, height);
          }

          if (lineWidth) {
            context.strokeStyle = strokeColor;
            context.lineWidth = lineWidth;
            context.strokeRect(x, y, width, height);
          }
        }
      }, {
        key: "drawLine",
        value: function drawLine(x1, y1, x2, y2) {
          var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "black";
          var lineWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
          var alpha = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
          var context = this.context;
          context.globalAlpha = alpha;
          context.beginPath();
          context.moveTo(x1, y1);
          context.lineTo(x2, y2);

          if (lineWidth) {
            context.strokeStyle = color;
            context.lineWidth = lineWidth;
            context.stroke();
          }
        }
      }, {
        key: "drawCircle",
        value: function drawCircle(x, y, radius) {
          var strokeColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "black";
          var lineWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
          var fillColor = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
          var alpha = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
          var context = this.context;
          context.beginPath();
          context.lineWidth = lineWidth;
          context.globalAlpha = alpha;
          context.arc(x, y, radius, 0, Math.PI * 2, true);
          context.closePath();

          if (lineWidth) {
            context.strokeStyle = strokeColor;
            context.stroke();
          }

          if (fillColor) {
            context.fillStyle = fillColor;
            context.fill();
          }
        }
      }, {
        key: "drawRectangulo",
        value: function drawRectangulo(x, y, width, height) {
          var strokeColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "black";
          var lineWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
          var fillColor = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "";
          var alpha = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
          var context = this.context;
          context.beginPath();
          context.lineWidth = lineWidth;
          context.globalAlpha = alpha;
          context.rect(x, y, width, height);
          context.closePath();

          if (lineWidth) {
            context.strokeStyle = strokeColor;
            context.stroke();
          }

          if (fillColor) {
            context.fillStyle = fillColor;
            context.fill();
          }
        }
      }, {
        key: "drawImage",
        value: function drawImage(src, x, y, width, height) {
          var alpha = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
          var context = this.context;
          var img = new Image();
          img.src = src;
          context.globalAlpha = alpha;
          var img1 = document.getElementById("casa"); //context.drawImage(img1);    

          img.onload = function () {
            context.drawImage(img, x, y, width, height);
          };
        }
      }, {
        key: "drawTexto",
        value: function drawTexto(texto, x, y, fillStyle, font) {
          var alpha = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
          var context = this.context;
          context.globalAlpha = alpha;
          context.fillStyle = fillStyle;
          context.font = font;
          context.fillText(texto, x, y);
        }
      }]);

      return CanvasService;
    }();

    CanvasService.ctorParameters = function () {
      return [{
        type: undefined
      }];
    };

    CanvasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CanvasService);
    /***/
  },

  /***/
  "./src/app/services/photo.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/photo.service.ts ***!
    \*******************************************/

  /*! exports provided: PhotoService */

  /***/
  function srcAppServicesPhotoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoService", function () {
      return PhotoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var PhotoService =
    /*#__PURE__*/
    function () {
      function PhotoService(http) {
        _classCallCheck(this, PhotoService);

        this.http = http;
        this.URI = 'http://localhost:4000/api/photos';
        this.UR1 = 'http://localhost:4000/api/photosV';
        this.URI_in1 = 'http://localhost:4000/api/signin';
        this.URL = 'http://165.227.20.230:4000/';
        this.URL1 = 'http://localhost:4000/';
        this.URIi = 'http://165.227.20.230:4000/api/photos';
        this.UR1i = 'http://165.227.20.230:4000/api/photosV';
        this.URI_ini = 'http://localhost:4000/api/signin';
      }

      _createClass(PhotoService, [{
        key: "createPhoto",
        value: function createPhoto(venta, precio1, sector, metros, caracteristicas, vendedor, photo) {
          var fd = new FormData();
          fd.append('transaccion', venta);
          fd.append('precio', precio1);
          fd.append('sector', sector);
          fd.append('metros', metros);
          fd.append('caracteristicas', caracteristicas);
          fd.append('vendedor', vendedor);
          fd.append('image', photo);
          return this.http.post("".concat(this.URL, "api/photos"), fd);
        }
      }, {
        key: "getPhotos",
        value: function getPhotos() {
          return this.http.get("".concat(this.URL, "api/photos"));
        }
      }, {
        key: "getPhotosV",
        value: function getPhotosV(vendedor) {
          //return this.http.get<Photo[]>(`${this.UR1}5dcc92cbd23fc6026c6f5d29`);
          return this.http.post("".concat(this.URL, "api/photosV").concat(vendedor), {
            vendedor: vendedor
          }); //ojo cambiar cuando ya subas
        }
      }, {
        key: "getPhotosVB",
        value: function getPhotosVB(vendedor, transaccion, precio, sector) {
          //return this.http.get<Photo[]>(`${this.UR1}5dcc92cbd23fc6026c6f5d29`);
          return this.http.post("".concat(this.URL, "api/photosV").concat(vendedor), {
            vendedor: vendedor,
            transaccion: transaccion,
            precio: precio,
            sector: sector
          }); //ojo cambiar cuando ya subas
        }
      }, {
        key: "getPhoto",
        value: function getPhoto(id) {
          return this.http.get("".concat(this.URL, "api/photos/").concat(id));
        }
      }, {
        key: "deletePhoto",
        value: function deletePhoto(id) {
          return this.http.delete("".concat(this.URL, "api/photos/").concat(id));
        }
      }, {
        key: "updatePhoto",
        value: function updatePhoto(id, title, description) {
          return this.http.put("".concat(this.URL, "api/photos/").concat(id), {
            title: title,
            description: description
          });
        }
      }]);

      return PhotoService;
    }();

    PhotoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PhotoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PhotoService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Geobigdata_Proyectos\05_Producción\angular-photo-gallery\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map