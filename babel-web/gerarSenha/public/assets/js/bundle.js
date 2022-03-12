/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_formGeraSenha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/formGeraSenha */ "./src/modules/formGeraSenha.js");

Object(_modules_formGeraSenha__WEBPACK_IMPORTED_MODULE_0__["geradora"])();

/***/ }),

/***/ "./src/modules/formGeraSenha.js":
/*!**************************************!*\
  !*** ./src/modules/formGeraSenha.js ***!
  \**************************************/
/*! exports provided: geradora */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geradora", function() { return geradora; });
/* harmony import */ var _geradores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geradores */ "./src/modules/geradores.js");

var senhaGerada = document.querySelector('.senha-gerada');
var qtdCaracteres = document.querySelector('.qtdCaracteres');
var chkMaiuscula = document.querySelector('.chk-maiusculas');
var chkMinuscula = document.querySelector('.chk-minusculas');
var chkNumero = document.querySelector('.chk-numeros');
var chkSimbolo = document.querySelector('.chk-simbolos');
var btmGerarsenha = document.querySelector('.gerarSenha');
console.log(senhaGerada);
console.log("kdddd");
function geradora() {
  console.log("eeeeee");
  btmGerarsenha.addEventListener('click', function () {
    console.log('ummm');
    senhaGerada.innerHTML = gera();
  });
}
;

function gera() {
  var senha = Object(_geradores__WEBPACK_IMPORTED_MODULE_0__["default"])(qtdCaracteres.value, chkMaiuscula.checked, chkMinuscula.checked, chkNumero.checked, chkSimbolo.checked);
  return senha;
}

/***/ }),

/***/ "./src/modules/geradores.js":
/*!**********************************!*\
  !*** ./src/modules/geradores.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return geraSenha; });
var rand = function rand(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
};

var geraMaiuscula = function geraMaiuscula() {
  return String.fromCharCode(rand(65, 91));
}; //65 91 codigo letras maiusculas tabela ascii


var geraMinuscula = function geraMinuscula() {
  return String.fromCharCode(rand(97, 123));
}; // codigo letras minusculas tabela ascii


var geraNumero = function geraNumero() {
  return String.fromCharCode(rand(48, 58));
}; // codigo letras minusculas tabela ascii


var simbolos = '!@#$%¨&*()_-=+{}[]<>,./?:;';

var geraSimbolo = function geraSimbolo() {
  return simbolos[rand(0, simbolos.length)];
};

function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
  var senhaArray = [];
  qtd = Number(qtd);

  for (var i = 0; i <= qtd; i++) {
    maiusculas && senhaArray.push(geraMaiuscula());
    minusculas && senhaArray.push(geraMinuscula());
    numeros && senhaArray.push(geraNumero());
    simbolos && senhaArray.push(geraSimbolo());
  }

  console.log("jjjj");
  return senhaArray.join('').slice(0, qtd);
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map