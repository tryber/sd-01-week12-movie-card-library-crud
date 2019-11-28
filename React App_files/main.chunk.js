(this["webpackJsonpmovie-database-crud"] = this["webpackJsonpmovie-database-crud"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  background-color: whitesmoke;\n  box-sizing: border-box;\n}\n\n.movie-list {\n  display: flex;\n  flex-flow: row wrap;\n  padding: 48px 30px;\n}\n\n.movie-card {\n  width: 500px;\n}\n\n.movie-form {\n  margin: auto;\n  margin-top: 20px;\n  width: 80%;\n}\n\n.loading {\n  align-items: center;\n  display: flex;\n  font-size: 35px;\n  height: 100%;\n  justify-content: center;\n  position: fixed;\n  width: 100%;\n}\n\n.not-found {\n  font-size: 35px;\n  font-weight: 700;\n  margin-top: 50px;\n  text-align: center;\n}\n\n.card .card-content p {\n  margin-bottom: 15px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages */ "./src/pages/index.js");
var _jsxFileName = "/home/henrique/Projeto12/sd-01-week12-movie-card-library-crud/src/App.js";





function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _pages__WEBPACK_IMPORTED_MODULE_3__["MovieList"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/movies/:id",
    component: _pages__WEBPACK_IMPORTED_MODULE_3__["MovieDetails"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/movies/new",
    component: _pages__WEBPACK_IMPORTED_MODULE_3__["NewMovie"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/movies/:id/edit",
    component: _pages__WEBPACK_IMPORTED_MODULE_3__["EditMovie"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    component: _pages__WEBPACK_IMPORTED_MODULE_3__["NotFound"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Loading.js":
/*!***********************************!*\
  !*** ./src/components/Loading.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/henrique/Projeto12/sd-01-week12-movie-card-library-crud/src/components/Loading.js";


class Loading extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "loading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, "Carregando...");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/components/MovieCard.js":
/*!*************************************!*\
  !*** ./src/components/MovieCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/home/henrique/Projeto12/sd-01-week12-movie-card-library-crud/src/components/MovieCard.js";



class MovieCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const movie = this.props.movie;
    const title = movie.title,
          storyline = movie.storyline,
          imagePath = movie.imagePath;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col s12 m7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card movie-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "Movie Cover",
      className: "movie-card-image",
      src: imagePath,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, storyline)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-action",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/movies/".concat(title),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Ver Detalhes")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MovieCard);

/***/ }),

/***/ "./src/components/MovieForm.js":
/*!*************************************!*\
  !*** ./src/components/MovieForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_henrique_Projeto12_sd_01_week12_movie_card_library_crud_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/henrique/Projeto12/sd-01-week12-movie-card-library-crud/src/components/MovieForm.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_henrique_Projeto12_sd_01_week12_movie_card_library_crud_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



class MovieForm extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = _objectSpread({}, props.movie);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const onSubmit = this.props.onSubmit;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({
      [field]: newValue
    });
  }

  renderTitleInput() {
    const title = this.state.title;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "input-field col s12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      placeholder: "Insira o t\xEDtulo",
      id: "movie_title",
      type: "text",
      className: "validate",
      value: title,
      onChange: event => this.updateMovie('title', event.target.value),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "active",
      htmlFor: "movie_title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "T\xEDtulo")));
  }

  renderSubtitleInput() {
    const subtitle = this.state.subtitle;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "input-field col s12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      placeholder: "Insira o subt\xEDtulo",
      id: "movie_subtitle",
      type: "text",
      className: "validate",
      value: subtitle,
      onChange: event => this.updateMovie('subtitle', event.target.value),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "active",
      htmlFor: "movie_subtitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Subt\xEDtulo")));
  }

  renderImagePathInput() {
    const imagePath = this.state.imagePath;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "input-field col s12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      placeholder: "Insira o caminho da imagem",
      id: "movie_image",
      type: "text",
      className: "validate",
      value: imagePath,
      onChange: event => this.updateMovie('imagePath', event.target.value),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "active",
      htmlFor: "movie_image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "Imagem")));
  }

  renderStorylineInput() {
    const storyline = this.state.storyline;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "input-field col s12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
      id: "movie_storyline",
      className: "materialize-textarea",
      value: storyline,
      onChange: event => this.updateMovie('storyline', event.target.value),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "active",
      htmlFor: "movie_storyline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "Sinopse")));
  }

  renderGenreSelection() {
    const genre = this.state.genre;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "movie_genre",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "Genre Select"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
      className: "browser-default",
      value: genre,
      onChange: event => this.updateMovie('genre', event.target.value),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "action",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "A\xE7\xE3o"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "comedy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "Com\xE9dia"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "thriller",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "Suspense")));
  }

  renderRatingInput() {
    const rating = this.state.rating;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "input-field col s12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      placeholder: "D\xEA a avalia\xE7\xE3o do filme",
      id: "movie_rating",
      type: "number",
      className: "form-control",
      step: 0.1,
      min: 0,
      max: 5,
      value: rating,
      onChange: event => this.updateMovie('rating', event.target.value),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "active",
      htmlFor: "movie_rating",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "Avalia\xE7\xE3o")));
  }

  renderSubmitButton() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "btn waves-effect waves-light",
      type: "button",
      onClick: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, "Submit"));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "movie-form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      className: "col s12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, this.renderTitleInput(), this.renderSubtitleInput(), this.renderImagePathInput(), this.renderStorylineInput(), this.renderGenreSelection(), this.renderRatingInput(), this.renderSubmitButton())));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MovieForm);

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: Loading, MovieForm, MovieCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loading */ "./src/components/Loading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return _Loading__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _MovieForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieForm */ "./src/components/MovieForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovieForm", function() { return _MovieForm__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _MovieCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MovieCard */ "./src/components/MovieCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovieCard", function() { return _MovieCard__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _services_movieData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/movieData */ "./src/services/movieData.js");
var _jsxFileName = "/home/henrique/Projeto12/sd-01-week12-movie-card-library-crud/src/index.js";






localStorage.setItem('movies', JSON.stringify(_services_movieData__WEBPACK_IMPORTED_MODULE_5__["default"]));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/pages/EditMovie.js":
/*!********************************!*\
  !*** ./src/pages/EditMovie.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./src/components/index.js");
/* harmony import */ var _services_movieAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/movieAPI */ "./src/services/movieAPI.js");
var _jsxFileName = "/home/henrique/Projeto12/sd-01-week12-movie-card-library-crud/src/pages/EditMovie.js";




class EditMovie extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) {}

  render() {
    const _this$state = this.state,
          status = _this$state.status,
          shouldRedirect = _this$state.shouldRedirect,
          movie = _this$state.movie;

    if (shouldRedirect) {// Redirect
    }

    if (status === 'loading') {// render Loading
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["MovieForm"], {
      movie: movie,
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EditMovie);

/***/ }),

/***/ "./src/pages/MovieDetails.js":
/*!***********************************!*\
  !*** ./src/pages/MovieDetails.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_movieAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/movieAPI */ "./src/services/movieAPI.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./src/components/index.js");
var _jsxFileName = "/home/henrique/Projeto12/sd-01-week12-movie-card-library-crud/src/pages/MovieDetails.js";




class MovieDetails extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      movie: []
    };
  }

  componentDidMount() {
    this.setState(state => ({
      movie: [...state.movie, this.props.value]
    }));
  }

  render() {
    // Change the condition to check the state
    if (this.state.movie.length === 0) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Loading"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    });
    const _this$state$movie = this.state.movie,
          title = _this$state$movie.title,
          storyline = _this$state$movie.storyline,
          imagePath = _this$state$movie.imagePath,
          genre = _this$state$movie.genre,
          rating = _this$state$movie.rating,
          subtitle = _this$state$movie.subtitle;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col s12 m7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "Movie Cover",
      src: "../".concat(imagePath),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Subtitle: ".concat(subtitle)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Storyline: ".concat(storyline)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Genre: ".concat(genre)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Rating: ".concat(rating))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-action",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MovieDetails);

/***/ }),

/***/ "./src/pages/MovieList.js":
/*!********************************!*\
  !*** ./src/pages/MovieList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MovieCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MovieCard */ "./src/components/MovieCard.js");
/* harmony import */ var _services_movieAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/movieAPI */ "./src/services/movieAPI.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loading */ "./src/components/Loading.js");
var _jsxFileName = "/home/henrique/Projeto12/sd-01-week12-movie-card-library-crud/src/pages/MovieList.js";






class MovieList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true
    };
  }

  componentDidMount() {
    _services_movieAPI__WEBPACK_IMPORTED_MODULE_2__["getMovies"]().then(dados => this.setState({
      movies: dados,
      loading: false
    }));
  }

  render() {
    const _this$state = this.state,
          movies = _this$state.movies,
          loading = _this$state.loading; // Render Loading here if the request is still happening

    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "movie-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, movies.map(movie => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MovieCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: movie.title,
      movie: movie,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MovieList);

/***/ }),

/***/ "./src/pages/NewMovie.js":
/*!*******************************!*\
  !*** ./src/pages/NewMovie.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MovieForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MovieForm */ "./src/components/MovieForm.js");
/* harmony import */ var _services_movieAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/movieAPI */ "./src/services/movieAPI.js");
var _jsxFileName = "/home/henrique/Projeto12/sd-01-week12-movie-card-library-crud/src/pages/NewMovie.js";




class NewMovie extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {}

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MovieForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NewMovie);

/***/ }),

/***/ "./src/pages/NotFound.js":
/*!*******************************!*\
  !*** ./src/pages/NotFound.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/henrique/Projeto12/sd-01-week12-movie-card-library-crud/src/pages/NotFound.js";


class NotFound extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "not-found header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, "P\xE1gina n\xE3o encontrada");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: EditMovie, MovieDetails, MovieList, NewMovie, NotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditMovie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditMovie */ "./src/pages/EditMovie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditMovie", function() { return _EditMovie__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _MovieDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieDetails */ "./src/pages/MovieDetails.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovieDetails", function() { return _MovieDetails__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _MovieList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MovieList */ "./src/pages/MovieList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovieList", function() { return _MovieList__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _NewMovie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewMovie */ "./src/pages/NewMovie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewMovie", function() { return _NewMovie__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotFound */ "./src/pages/NotFound.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFound", function() { return _NotFound__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/services/movieAPI.js":
/*!**********************************!*\
  !*** ./src/services/movieAPI.js ***!
  \**********************************/
/*! exports provided: getMovies, getMovie, updateMovie, createMovie, deleteMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovies", function() { return getMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovie", function() { return getMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMovie", function() { return updateMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMovie", function() { return createMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMovie", function() { return deleteMovie; });
/* harmony import */ var _home_henrique_Projeto12_sd_01_week12_movie_card_library_crud_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_henrique_Projeto12_sd_01_week12_movie_card_library_crud_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const readMovies = () => JSON.parse(localStorage.getItem('movies'));

const saveMovies = movies => localStorage.setItem('movies', JSON.stringify(movies));

const getMovies = () => new Promise(resolve => {
  setTimeout(() => {
    const movies = readMovies();
    resolve(movies);
  }, 2000);
});
const getMovie = movieId => {
  const movie = readMovies().find(mov => mov.id === parseInt(movieId, 10));
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(movie);
    }, 2000);
  });
};
const updateMovie = updatedMovie => {
  const movies = readMovies().map(movie => {
    if (movie.id === parseInt(updatedMovie.id, 10)) {
      return _objectSpread({}, movie, {}, updatedMovie);
    }

    return movie;
  });
  saveMovies(movies);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('OK');
    }, 1000);
  });
};
const createMovie = movieData => {
  let movies = readMovies();
  const nextId = movies[movies.length - 1].id + 1;

  const newMovie = _objectSpread({}, movieData, {
    id: nextId
  });

  movies = [...movies, newMovie];
  saveMovies(movies);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('OK');
    }, 1000);
  });
};
const deleteMovie = movieId => {
  let movies = readMovies();
  movies = movies.find(movie => movie.id !== parseInt(movieId, 10));
  saveMovies(movies);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        status: 'OK'
      });
    }, 1000);
  });
};

/***/ }),

/***/ "./src/services/movieData.js":
/*!***********************************!*\
  !*** ./src/services/movieData.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const movies = [{
  id: 1,
  title: 'Kingsglaive',
  subtitle: 'Final Fantasy XV',
  storyline: "King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",
  rating: 4.5,
  imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',
  bookmarked: true,
  genre: 'action'
}, {
  id: 2,
  title: 'Final Fantasy',
  subtitle: 'Spirits Within',
  storyline: 'A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.',
  rating: 4.5,
  imagePath: 'images/Final_Fantasy_Spirits_Within.jpg',
  bookmarked: false,
  genre: 'fantasy'
}, {
  id: 3,
  title: 'Ghost In The Shell',
  subtitle: 'Ghost In The Shell',
  storyline: 'A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).',
  rating: 5,
  imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',
  bookmarked: false,
  genre: 'comedy'
}, {
  id: 4,
  title: 'Appleseed Alpha',
  subtitle: 'Appleseed Alpha',
  storyline: "A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",
  rating: 3.8,
  imagePath: 'images/Appleseed_Alpha.jpg',
  bookmarked: true,
  genre: 'action'
}, {
  id: 5,
  title: 'Resident Evil',
  subtitle: 'Vendetta',
  storyline: 'Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.',
  rating: 4.2,
  imagePath: 'images/Resident_Evil_Vendetta.jpg',
  bookmarked: true,
  genre: 'fantasy'
}];
/* harmony default export */ __webpack_exports__["default"] = (movies);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/henrique/Projeto12/sd-01-week12-movie-card-library-crud/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/henrique/Projeto12/sd-01-week12-movie-card-library-crud/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map