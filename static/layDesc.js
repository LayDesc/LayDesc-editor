(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["layDesc"] = factory();
	else
		root["layDesc"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/containers/_module_export.ts":
/*!******************************************!*\
  !*** ./src/containers/_module_export.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./rectangleContainer/RectangleContainer */ "./src/containers/rectangleContainer/RectangleContainer.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, RectangleContainer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RectangleContainer = RectangleContainer_1.RectangleContainer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/containers/rectangleContainer/RectangleContainer.ts":
/*!*****************************************************************!*\
  !*** ./src/containers/rectangleContainer/RectangleContainer.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../geometry/generic/Padding */ "./src/geometry/generic/Padding.ts"), __webpack_require__(/*! ../../geometry/Rectangle */ "./src/geometry/Rectangle.ts"), __webpack_require__(/*! ../../elements/text/Text */ "./src/elements/text/Text.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Padding_1, Rectangle_1, Text_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class RectangleContainer extends Rectangle_1.Rectangle {
        constructor(settings) {
            super(settings);
            this.cssExtended = {};
            this.margin = new Padding_1.Padding(settings.margin);
            this.texts = [];
            for (const text of settings.texts) {
                this.texts.push(new Text_1.Text(text));
            }
            if (settings.cssExtended !== void 0) {
                for (const cssKeyName in settings.cssExtended) {
                    this.cssExtended[cssKeyName] = settings.cssExtended[cssKeyName];
                }
            }
            // @todo Which object should be returned ?
            if (settings instanceof RectangleContainer)
                return settings;
        }
        generate() {
            return {
                unit: this.unit,
                size: this.size.generate(),
                position: this.position.generate(),
                anchor: this.anchor,
                margin: this.margin.generate(),
                texts: this.texts,
                cssExtended: this.cssExtended,
            };
        }
    }
    exports.RectangleContainer = RectangleContainer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/document/Document.ts":
/*!**********************************!*\
  !*** ./src/document/Document.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../env */ "./src/env.ts"), __webpack_require__(/*! ../page/pageTemplate/PageTemplate */ "./src/page/pageTemplate/PageTemplate.ts"), __webpack_require__(/*! ../page/page/Page */ "./src/page/page/Page.ts"), __webpack_require__(/*! ../geometry/generic/UNIT */ "./src/geometry/generic/UNIT.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, env_1, PageTemplate_1, Page_1, UNIT_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Document {
        constructor(settings) {
            this.scale = 1;
            this._this = this;
            this.name = settings.name;
            if (settings.guides !== void 0) {
                this.guides = {
                    vertical: [],
                    horizontal: [],
                    show: Document._defaultSettings.guides.show,
                    unit: Document._defaultSettings.guides.unit,
                };
                this.guides.show = (settings.guides.show === void 0) ? Document._defaultSettings.guides.show : settings.guides.show;
                this.guides.horizontal = (settings.guides.horizontal === void 0) ? [] : settings.guides.horizontal;
                this.guides.vertical = (settings.guides.vertical === void 0) ? [] : settings.guides.vertical;
                this.guides.unit = (settings.guides.unit === void 0) ? Document._defaultSettings.guides.unit : settings.guides.unit;
            }
            else {
                this.guides = {
                    show: Document._defaultSettings.guides.show,
                    horizontal: [],
                    vertical: [],
                    unit: Document._defaultSettings.guides.unit,
                };
            }
            this.listOfPageTemplate = Document._defaultSettings.pageTemplates;
            if (settings.pageTemplates !== void 0) {
                for (const pageTemplate of settings.pageTemplates) {
                    this.addPageTemplate(pageTemplate);
                }
            }
            this.arrayOfPage = [];
            if (settings.arrayOfPage !== void 0) {
                for (const page of settings.arrayOfPage) {
                    this.addPage(page);
                }
            }
            if (settings.scale !== void 0)
                this.scale = settings.scale;
        }
        addPageTemplate(pageTemplate) {
            if (env_1.env.parameters.DEBUG) {
                if (pageTemplate.name in this.listOfPageTemplate)
                    console.info(`${pageTemplate.name} already exists in the names the registered template list. The last ${pageTemplate.name} addition removes the previous one.`);
            }
            this.listOfPageTemplate[pageTemplate.name] = new PageTemplateDocumentChild(pageTemplate).addDocumentParent(this);
        }
        addPage(page) {
            this.arrayOfPage.push(new PageDocumentChild(page).addDocumentParent(this));
        }
        generate() {
            return new Promise(resolve => {
                resolve(this._createJson());
            });
        }
        _createJson() {
            // generate guides
            const arrayOfHorizontal = [];
            for (const horizontal of this.guides.horizontal) {
                arrayOfHorizontal.push({
                    y: horizontal.y
                });
            }
            const arrayOfVertical = [];
            for (const vertical of this.guides.vertical) {
                arrayOfVertical.push({
                    x: vertical.x
                });
            }
            let guides = {
                show: this.guides.show,
                horizontal: arrayOfHorizontal,
                vertical: arrayOfVertical,
                unit: this.guides.unit,
            };
            // generate arrayOfPage
            const arrayOfPage = [];
            for (const page of this.arrayOfPage) {
                arrayOfPage.push(page.generate());
            }
            return {
                name: this.name,
                guides: guides,
                arrayOfPage: arrayOfPage,
                listOfPageTemplate: this.listOfPageTemplate,
                scale: this.scale,
            };
        }
    }
    Document._defaultSettings = {
        guides: {
            show: true,
            unit: UNIT_1.UNIT.MM,
        },
        pageTemplates: {},
    };
    exports.Document = Document;
    /**
     * @hidden
     */
    class PageDocumentChild extends Page_1.Page {
        constructor(settings) {
            // @todo Which object should be returned ?
            if (settings instanceof Page_1.Page)
                settings = {
                    pageTemplateName: settings.pageTemplateName,
                    unit: settings.unit,
                    containers: settings.containers,
                    pageMargin: settings.pageMargin,
                    size: settings.size,
                };
            super(settings);
        }
        addDocumentParent(document) {
            this._documentParents.push(document);
            return this;
        }
    }
    /**
     * @hidden
     */
    class PageTemplateDocumentChild extends PageTemplate_1.PageTemplate {
        constructor(settings) {
            // @todo Which object should be returned ?
            if (settings instanceof PageTemplate_1.PageTemplate)
                settings = {
                    name: settings.name,
                    unit: settings.unit,
                    containers: settings.containers,
                    pageMargin: settings.pageMargin,
                    size: settings.size,
                };
            super(settings);
        }
        addDocumentParent(document) {
            this._documentParents.push(document);
            return this;
        }
    }
    // layDesc initialisation
    env_1.env._helloMessage();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/document/_module_export.ts":
/*!****************************************!*\
  !*** ./src/document/_module_export.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Document */ "./src/document/Document.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Document_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Document = Document_1.Document;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/elements/_module_export.ts":
/*!****************************************!*\
  !*** ./src/elements/_module_export.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./font/Font */ "./src/elements/font/Font.ts"), __webpack_require__(/*! ./image/Image */ "./src/elements/image/Image.ts"), __webpack_require__(/*! ./text/Text */ "./src/elements/text/Text.ts"), __webpack_require__(/*! ./text/TextStyle */ "./src/elements/text/TextStyle.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Font_1, Image_1, Text_1, TextStyle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Font = Font_1.Font;
    exports.Image = Image_1.Image;
    exports.Text = Text_1.Text;
    exports.TextStyle = TextStyle_1.TextStyle;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/elements/font/Font.ts":
/*!***********************************!*\
  !*** ./src/elements/font/Font.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../geometry/generic/UNIT */ "./src/geometry/generic/UNIT.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, UNIT_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Font {
        constructor(settings = {}) {
            this.fontFamily = (settings.fontFamily === void 0) ? Font._defaultSettings.fontFamily : settings.fontFamily;
            this.fontSize = (settings.fontSize === void 0) ? Font._defaultSettings.fontSize : settings.fontSize;
            this.letterSpacing = (settings.letterSpacing === void 0) ? Font._defaultSettings.letterSpacing : settings.letterSpacing;
            this.lineHeight = (settings.lineHeight === void 0) ? Font._defaultSettings.lineHeight : settings.lineHeight;
            this.unit = (settings.unit === void 0) ? Font._defaultSettings.unit : settings.unit;
        }
        setSettings(settings) {
            this.fontFamily = (settings.fontFamily === void 0) ? this.fontFamily : settings.fontFamily;
            this.fontSize = (settings.fontSize === void 0) ? this.fontSize : settings.fontSize;
            this.letterSpacing = (settings.letterSpacing === void 0) ? this.letterSpacing : settings.letterSpacing;
            this.lineHeight = (settings.lineHeight === void 0) ? this.lineHeight : settings.lineHeight;
            this.unit = (settings.unit === void 0) ? this.unit : settings.unit;
        }
        // @todo name of function to generate data of object (getData() or generate() ?)
        generate() {
            return {
                unit: this.unit,
                lineHeight: this.lineHeight,
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                letterSpacing: this.letterSpacing,
            };
        }
        fontSettingsToFontData(fontSettings) {
            return {
                fontFamily: (fontSettings.fontFamily === void 0) ? this.fontFamily : fontSettings.fontFamily,
                fontSize: (fontSettings.fontSize === void 0) ? this.fontSize : fontSettings.fontSize,
                letterSpacing: (fontSettings.letterSpacing === void 0) ? this.letterSpacing : fontSettings.letterSpacing,
                lineHeight: (fontSettings.lineHeight === void 0) ? this.lineHeight : fontSettings.lineHeight,
                unit: (fontSettings.unit === void 0) ? this.unit : fontSettings.unit,
            };
        }
    }
    Font._defaultSettings = {
        fontFamily: "Arial",
        fontSize: 12,
        letterSpacing: 0,
        lineHeight: 15,
        unit: UNIT_1.UNIT.PX,
    };
    exports.Font = Font;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/elements/image/Image.ts":
/*!*************************************!*\
  !*** ./src/elements/image/Image.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../geometry/Rectangle */ "./src/geometry/Rectangle.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Rectangle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Image extends Rectangle_1.Rectangle {
        constructor(settings) {
            super(settings);
            this.url = settings.url;
        }
        generate() {
            return {
                anchor: this.anchor,
                position: this.position.generate(),
                size: this.size.generate(),
                unit: this.unit,
                url: this.url,
            };
        }
    }
    exports.Image = Image;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/elements/text/Text.ts":
/*!***********************************!*\
  !*** ./src/elements/text/Text.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./TextStyle */ "./src/elements/text/TextStyle.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, TextStyle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Text object type are equivalent to Paragraph in InDesign
     * @todo Text or Paragraph type name
     */
    class Text {
        constructor(settings) {
            this.content = settings.content;
            this.style = new TextStyle_1.TextStyle(settings.style);
        }
        generate() {
            return {
                content: this.content,
                style: this.style.generate(),
            };
        }
    }
    exports.Text = Text;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/elements/text/TextStyle.ts":
/*!****************************************!*\
  !*** ./src/elements/text/TextStyle.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../geometry/generic/UNIT */ "./src/geometry/generic/UNIT.ts"), __webpack_require__(/*! ../font/Font */ "./src/elements/font/Font.ts"), __webpack_require__(/*! ../../geometry/generic/Padding */ "./src/geometry/generic/Padding.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, UNIT_1, Font_1, Padding_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TextStyle {
        constructor(settings = {}) {
            this.font = new Font_1.Font(settings.font);
            this.space = new Padding_1.Padding(settings.space);
            this.unit = (settings.unit === void 0) ? TextStyle._defaultSettings.unit : settings.unit;
        }
        generate() {
            return {
                font: this.font.generate(),
                space: this.space.generate(),
                unit: this.unit,
            };
        }
    }
    TextStyle._defaultSettings = {
        unit: UNIT_1.UNIT.MM,
    };
    exports.TextStyle = TextStyle;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/env.ts":
/*!********************!*\
  !*** ./src/env.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var env;
    (function (env) {
        env.userAgentIsElectron = () => {
            return navigator.userAgent.toLowerCase().indexOf(' electron/') > -1;
        };
        let parameters;
        (function (parameters) {
            parameters.DEBUG = false;
            parameters.GENERATE_IN_EXTERNAL_WINDOW = true;
        })(parameters = env.parameters || (env.parameters = {}));
        /**
         * @hidden
         */
        env._DEBUG = true;
        /**
         * @hidden
         */
        function _helloMessage() {
            const styles = [
                'color: blue',
            ].join(';');
            console.log(`%c*****************
     LayDesc
*****************`, styles);
        }
        env._helloMessage = _helloMessage;
    })(env = exports.env || (exports.env = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/geometry/Rectangle.ts":
/*!***********************************!*\
  !*** ./src/geometry/Rectangle.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./generic/Position */ "./src/geometry/generic/Position.ts"), __webpack_require__(/*! ./generic/Size */ "./src/geometry/generic/Size.ts"), __webpack_require__(/*! ./generic/UNIT */ "./src/geometry/generic/UNIT.ts"), __webpack_require__(/*! ./generic/ANCHOR */ "./src/geometry/generic/ANCHOR.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Position_1, Size_1, UNIT_1, ANCHOR_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Rectangle {
        constructor(settings = {}) {
            this.anchor = (settings.anchor === void 0) ? Rectangle._defaultSettings.anchor : settings.anchor;
            this.position = new Position_1.Position(settings.position);
            this.size = new Size_1.Size(settings.size);
            this.unit = (settings.unit === void 0) ? Rectangle._defaultSettings.unit : settings.unit;
        }
        generate() {
            return {
                anchor: this.anchor,
                position: this.position.generate(),
                size: this.size.generate(),
                unit: this.unit,
            };
        }
    }
    Rectangle._defaultSettings = {
        unit: UNIT_1.UNIT.MM,
        anchor: ANCHOR_1.ANCHOR.TOP_LEFT,
    };
    exports.Rectangle = Rectangle;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/geometry/_module_export.ts":
/*!****************************************!*\
  !*** ./src/geometry/_module_export.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./generic/ANCHOR */ "./src/geometry/generic/ANCHOR.ts"), __webpack_require__(/*! ./generic/Padding */ "./src/geometry/generic/Padding.ts"), __webpack_require__(/*! ./generic/Position */ "./src/geometry/generic/Position.ts"), __webpack_require__(/*! ./generic/Size */ "./src/geometry/generic/Size.ts"), __webpack_require__(/*! ./generic/UNIT */ "./src/geometry/generic/UNIT.ts"), __webpack_require__(/*! ./Rectangle */ "./src/geometry/Rectangle.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, ANCHOR_1, Padding_1, Position_1, Size_1, UNIT_1, Rectangle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ANCHOR = ANCHOR_1.ANCHOR;
    exports.Padding = Padding_1.Padding;
    exports.Position = Position_1.Position;
    exports.Size = Size_1.Size;
    exports.UNIT = UNIT_1.UNIT;
    exports.Rectangle = Rectangle_1.Rectangle;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/geometry/generic/ANCHOR.ts":
/*!****************************************!*\
  !*** ./src/geometry/generic/ANCHOR.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ANCHOR;
    (function (ANCHOR) {
        ANCHOR[ANCHOR["TOP_LEFT"] = 0] = "TOP_LEFT";
        ANCHOR[ANCHOR["TOP_RIGHT"] = 1] = "TOP_RIGHT";
        ANCHOR[ANCHOR["BOTTOM_LEFT"] = 2] = "BOTTOM_LEFT";
        ANCHOR[ANCHOR["BOTTOM_RIGHT"] = 3] = "BOTTOM_RIGHT";
    })(ANCHOR = exports.ANCHOR || (exports.ANCHOR = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/geometry/generic/Padding.ts":
/*!*****************************************!*\
  !*** ./src/geometry/generic/Padding.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Padding {
        constructor(settings = {}) {
            this.top = (settings.top === void 0) ? Padding._defaultSettings.top : settings.top;
            this.right = (settings.right === void 0) ? Padding._defaultSettings.right : settings.right;
            this.bottom = (settings.bottom === void 0) ? Padding._defaultSettings.bottom : settings.bottom;
            this.left = (settings.left === void 0) ? Padding._defaultSettings.left : settings.left;
        }
        generate() {
            return {
                top: this.top,
                right: this.right,
                bottom: this.bottom,
                left: this.left,
            };
        }
    }
    Padding._defaultSettings = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    };
    exports.Padding = Padding;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/geometry/generic/Position.ts":
/*!******************************************!*\
  !*** ./src/geometry/generic/Position.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Position {
        constructor(settings = {}) {
            this.x = (settings.x === void 0) ? Position._defaultSettings.x : settings.x;
            this.y = (settings.y === void 0) ? Position._defaultSettings.y : settings.y;
        }
        generate() {
            return {
                x: this.x,
                y: this.y,
            };
        }
    }
    Position._defaultSettings = {
        x: 0,
        y: 0,
    };
    exports.Position = Position;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/geometry/generic/Size.ts":
/*!**************************************!*\
  !*** ./src/geometry/generic/Size.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Size {
        constructor(settings = {}) {
            this.width = (settings.width === void 0) ? Size._defaultSettings.width : settings.width;
            this.height = (settings.height === void 0) ? Size._defaultSettings.height : settings.height;
            // @todo Which object should be returned ?
            if (settings instanceof Size)
                return settings;
        }
        generate() {
            return {
                width: this.width,
                height: this.height,
            };
        }
    }
    Size._defaultSettings = {
        width: 10,
        height: 10,
    };
    exports.Size = Size;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/geometry/generic/UNIT.ts":
/*!**************************************!*\
  !*** ./src/geometry/generic/UNIT.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UNIT;
    (function (UNIT) {
        UNIT["CM"] = "cm";
        UNIT["MM"] = "mm";
        UNIT["PT"] = "pt";
        UNIT["PX"] = "px";
    })(UNIT = exports.UNIT || (exports.UNIT = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/guide/Horizontal.ts":
/*!*********************************!*\
  !*** ./src/guide/Horizontal.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Horizontal {
        constructor(y = 10) {
            this.y = y;
        }
    }
    exports.Horizontal = Horizontal;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/guide/Vertical.ts":
/*!*******************************!*\
  !*** ./src/guide/Vertical.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Vertical {
        constructor(x = 10) {
            this.x = x;
        }
    }
    exports.Vertical = Vertical;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/guide/_module_export.ts":
/*!*************************************!*\
  !*** ./src/guide/_module_export.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Horizontal */ "./src/guide/Horizontal.ts"), __webpack_require__(/*! ./Vertical */ "./src/guide/Vertical.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Horizontal_1, Vertical_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Horizontal = Horizontal_1.Horizontal;
    exports.Vertical = Vertical_1.Vertical;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./containers/_module_export */ "./src/containers/_module_export.ts"), __webpack_require__(/*! ./document/_module_export */ "./src/document/_module_export.ts"), __webpack_require__(/*! ./elements/_module_export */ "./src/elements/_module_export.ts"), __webpack_require__(/*! ./geometry/_module_export */ "./src/geometry/_module_export.ts"), __webpack_require__(/*! ./guide/_module_export */ "./src/guide/_module_export.ts"), __webpack_require__(/*! ./page/_module_export */ "./src/page/_module_export.ts"), __webpack_require__(/*! ./tools/_module_export */ "./src/tools/_module_export.ts"), __webpack_require__(/*! ./env */ "./src/env.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, containers, document, elements, geometry, guide, page, tools, env_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    containers = __importStar(containers);
    document = __importStar(document);
    elements = __importStar(elements);
    geometry = __importStar(geometry);
    guide = __importStar(guide);
    page = __importStar(page);
    tools = __importStar(tools);
    exports.containers = containers;
    exports.document = document;
    exports.elements = elements;
    exports.geometry = geometry;
    exports.guide = guide;
    exports.page = page;
    exports.tools = tools;
    exports.env = env_1.env;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/page/_module_export.ts":
/*!************************************!*\
  !*** ./src/page/_module_export.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./generic/GenericPage */ "./src/page/generic/GenericPage.ts"), __webpack_require__(/*! ./page/Page */ "./src/page/page/Page.ts"), __webpack_require__(/*! ./pageTemplate/PageTemplate */ "./src/page/pageTemplate/PageTemplate.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, GenericPage_1, Page_1, PageTemplate_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GenericPage = GenericPage_1.GenericPage;
    exports.Page = Page_1.Page;
    exports.PageTemplate = PageTemplate_1.PageTemplate;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/page/generic/GenericPage.ts":
/*!*****************************************!*\
  !*** ./src/page/generic/GenericPage.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../containers/rectangleContainer/RectangleContainer */ "./src/containers/rectangleContainer/RectangleContainer.ts"), __webpack_require__(/*! ../../geometry/generic/UNIT */ "./src/geometry/generic/UNIT.ts"), __webpack_require__(/*! ../../geometry/generic/Padding */ "./src/geometry/generic/Padding.ts"), __webpack_require__(/*! ../../geometry/generic/Size */ "./src/geometry/generic/Size.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, RectangleContainer_1, UNIT_1, Padding_1, Size_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class GenericPage {
        constructor(settings) {
            this.containers = [];
            this._documentParents = [];
            this.pageMargin = new Padding_1.Padding(settings.pageMargin);
            this.containers = (settings.containers === void 0) ? [] : this.addArrayOfContainers(settings.containers);
            this.unit = (settings.unit === void 0) ? GenericPage._defaultSettings.unit : settings.unit;
            this.size = (settings.size === void 0) ? new Size_1.Size(GenericPage._defaultSettings.size) : new Size_1.Size(settings.size);
        }
        get documentParents() {
            return this._documentParents;
        }
        addArrayOfContainers(containers) {
            const newArrayOfContainers = [];
            for (const container of containers) {
                let newContainerToAdd;
                //todo test instanceof
                if (container instanceof RectangleContainer_1.RectangleContainer) {
                    newContainerToAdd = container;
                    this.containers.push(newContainerToAdd);
                }
                else {
                    newContainerToAdd = new RectangleContainer_1.RectangleContainer(container);
                    this.containers.push(newContainerToAdd);
                }
                newArrayOfContainers.push(newContainerToAdd);
            }
            return newArrayOfContainers;
        }
    }
    GenericPage._defaultSettings = {
        unit: UNIT_1.UNIT.MM,
        size: {
            width: 210,
            height: 297,
        }
    };
    exports.GenericPage = GenericPage;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/page/page/Page.ts":
/*!*******************************!*\
  !*** ./src/page/page/Page.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../generic/GenericPage */ "./src/page/generic/GenericPage.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, GenericPage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Page extends GenericPage_1.GenericPage {
        constructor(settings) {
            super(settings);
            if (settings.pageTemplateName !== void 0)
                this.pageTemplateName = settings.pageTemplateName;
            // @todo Which object should be returned ?
            if (settings instanceof Page)
                return settings;
        }
        autoContent() {
        }
        generate() {
            const containers = [];
            for (const container of this.containers) {
                containers.push(container.generate());
            }
            return {
                containers: containers,
                pageMargin: this.pageMargin.generate(),
                pageTemplateName: this.pageTemplateName,
                unit: this.unit,
                size: this.size.generate(),
            };
        }
    }
    exports.Page = Page;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/page/pageTemplate/PageTemplate.ts":
/*!***********************************************!*\
  !*** ./src/page/pageTemplate/PageTemplate.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../generic/GenericPage */ "./src/page/generic/GenericPage.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, GenericPage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PageTemplate extends GenericPage_1.GenericPage {
        constructor(settings) {
            super(settings);
            this.name = settings.name;
            // @todo Which object should be returned ?
            if (settings instanceof PageTemplate)
                return settings;
        }
        generate() {
            const containers = [];
            for (const container of this.containers) {
                containers.push(container.generate());
            }
            return {
                containers: containers,
                pageMargin: this.pageMargin.generate(),
                name: this.name,
                unit: this.unit,
                size: this.size.generate(),
            };
        }
    }
    exports.PageTemplate = PageTemplate;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/tools/FONT_USER.ts":
/*!********************************!*\
  !*** ./src/tools/FONT_USER.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FONT_USER;
    (function (FONT_USER) {
        let GT_AMERICA;
        (function (GT_AMERICA) {
            GT_AMERICA["GTAmericaBlackItalic"] = "GT-America-Black-Italic";
            GT_AMERICA["GTAmericaBlack"] = "GT-America-Black";
            GT_AMERICA["GTAmericaBoldItalic"] = "GT-America-Bold-Italic";
            GT_AMERICA["GTAmericaBold"] = "GT-America-Bold";
            GT_AMERICA["GTAmericaCompressedBlackItalic"] = "GT-America-Compressed-Black-Italic";
            GT_AMERICA["GTAmericaCompressedBlack"] = "GT-America-Compressed-Black";
            GT_AMERICA["GTAmericaCompressedBoldItalic"] = "GT-America-Compressed-Bold-Italic";
            GT_AMERICA["GTAmericaCompressedBold"] = "GT-America-Compressed-Bold";
            GT_AMERICA["GTAmericaCompressedLightItalic"] = "GT-America-Compressed-Light-Italic";
            GT_AMERICA["GTAmericaCompressedLight"] = "GT-America-Compressed-Light";
            GT_AMERICA["GTAmericaCompressedMediumItalic"] = "GT-America-Compressed-Medium-Italic";
            GT_AMERICA["GTAmericaCompressedMedium"] = "GT-America-Compressed-Medium";
            GT_AMERICA["GTAmericaCompressedRegularItalic"] = "GT-America-Compressed-Regular-Italic";
            GT_AMERICA["GTAmericaCompressedRegular"] = "GT-America-Compressed-Regular";
            GT_AMERICA["GTAmericaCompressedThinItalic"] = "GT-America-Compressed-Thin-Italic";
            GT_AMERICA["GTAmericaCompressedThin"] = "GT-America-Compressed-Thin";
            GT_AMERICA["GTAmericaCompressedUltraLightItalic"] = "GT-America-Compressed-Ultra-Light-Italic";
            GT_AMERICA["GTAmericaCompressedUltraLight"] = "GT-America-Compressed-Ultra-Light";
            GT_AMERICA["GTAmericaCondensedBlackItalic"] = "GT-America-Condensed-Black-Italic";
            GT_AMERICA["GTAmericaCondensedBlack"] = "GT-America-Condensed-Black";
            GT_AMERICA["GTAmericaCondensedBoldItalic"] = "GT-America-Condensed-Bold-Italic";
            GT_AMERICA["GTAmericaCondensedBold"] = "GT-America-Condensed-Bold";
            GT_AMERICA["GTAmericaCondensedLightItalic"] = "GT-America-Condensed-Light-Italic";
            GT_AMERICA["GTAmericaCondensedLight"] = "GT-America-Condensed-Light";
            GT_AMERICA["GTAmericaCondensedMediumItalic"] = "GT-America-Condensed-Medium-Italic";
            GT_AMERICA["GTAmericaCondensedMedium"] = "GT-America-Condensed-Medium";
            GT_AMERICA["GTAmericaCondensedRegularItalic"] = "GT-America-Condensed-Regular-Italic";
            GT_AMERICA["GTAmericaCondensedRegular"] = "GT-America-Condensed-Regular";
            GT_AMERICA["GTAmericaCondensedThinItalic"] = "GT-America-Condensed-Thin-Italic";
            GT_AMERICA["GTAmericaCondensedThin"] = "GT-America-Condensed-Thin";
            GT_AMERICA["GTAmericaCondensedUltraLightItalic"] = "GT-America-Condensed-Ultra-Light-Italic";
            GT_AMERICA["GTAmericaCondensedUltraLight"] = "GT-America-Condensed-Ultra-Light";
            GT_AMERICA["GTAmericaExpandedBlackItalic"] = "GT-America-Expanded-Black-Italic";
            GT_AMERICA["GTAmericaExpandedBlack"] = "GT-America-Expanded-Black";
            GT_AMERICA["GTAmericaExpandedBoldItalic"] = "GT-America-Expanded-Bold-Italic";
            GT_AMERICA["GTAmericaExpandedBold"] = "GT-America-Expanded-Bold";
            GT_AMERICA["GTAmericaExpandedLightItalic"] = "GT-America-Expanded-Light-Italic";
            GT_AMERICA["GTAmericaExpandedLight"] = "GT-America-Expanded-Light";
            GT_AMERICA["GTAmericaExpandedMediumItalic"] = "GT-America-Expanded-Medium-Italic";
            GT_AMERICA["GTAmericaExpandedMedium"] = "GT-America-Expanded-Medium";
            GT_AMERICA["GTAmericaExpandedRegularItalic"] = "GT-America-Expanded-Regular-Italic";
            GT_AMERICA["GTAmericaExpandedRegular"] = "GT-America-Expanded-Regular";
            GT_AMERICA["GTAmericaExpandedThinItalic"] = "GT-America-Expanded-Thin-Italic";
            GT_AMERICA["GTAmericaExpandedThin"] = "GT-America-Expanded-Thin";
            GT_AMERICA["GTAmericaExpandedUltraLightItalic"] = "GT-America-Expanded-Ultra-Light-Italic";
            GT_AMERICA["GTAmericaExpandedUltraLight"] = "GT-America-Expanded-Ultra-Light";
            GT_AMERICA["GTAmericaExtendedBlackItalic"] = "GT-America-Extended-Black-Italic";
            GT_AMERICA["GTAmericaExtendedBlack"] = "GT-America-Extended-Black";
            GT_AMERICA["GTAmericaExtendedBoldItalic"] = "GT-America-Extended-Bold-Italic";
            GT_AMERICA["GTAmericaExtendedBold"] = "GT-America-Extended-Bold";
            GT_AMERICA["GTAmericaExtendedLightItalic"] = "GT-America-Extended-Light-Italic";
            GT_AMERICA["GTAmericaExtendedLight"] = "GT-America-Extended-Light";
            GT_AMERICA["GTAmericaExtendedMediumItalic"] = "GT-America-Extended-Medium-Italic";
            GT_AMERICA["GTAmericaExtendedMedium"] = "GT-America-Extended-Medium";
            GT_AMERICA["GTAmericaExtendedRegularItalic"] = "GT-America-Extended-Regular-Italic";
            GT_AMERICA["GTAmericaExtendedRegular"] = "GT-America-Extended-Regular";
            GT_AMERICA["GTAmericaExtendedThinItalic"] = "GT-America-Extended-Thin-Italic";
            GT_AMERICA["GTAmericaExtendedThin"] = "GT-America-Extended-Thin";
            GT_AMERICA["GTAmericaExtendedUltraLightItalic"] = "GT-America-Extended-Ultra-Light-Italic";
            GT_AMERICA["GTAmericaExtendedUltraLight"] = "GT-America-Extended-Ultra-Light";
            GT_AMERICA["GTAmericaLightItalic"] = "GT-America-Light-Italic";
            GT_AMERICA["GTAmericaLight"] = "GT-America-Light";
            GT_AMERICA["GTAmericaMediumItalic"] = "GT-America-Medium-Italic";
            GT_AMERICA["GTAmericaMedium"] = "GT-America-Medium";
            GT_AMERICA["GTAmericaMonoBlackItalic"] = "GT-America-Mono-Black-Italic";
            GT_AMERICA["GTAmericaMonoBlack"] = "GT-America-Mono-Black";
            GT_AMERICA["GTAmericaMonoBoldItalic"] = "GT-America-Mono-Bold-Italic";
            GT_AMERICA["GTAmericaMonoBold"] = "GT-America-Mono-Bold";
            GT_AMERICA["GTAmericaMonoLightItalic"] = "GT-America-Mono-Light-Italic";
            GT_AMERICA["GTAmericaMonoLight"] = "GT-America-Mono-Light";
            GT_AMERICA["GTAmericaMonoMediumItalic"] = "GT-America-Mono-Medium-Italic";
            GT_AMERICA["GTAmericaMonoMedium"] = "GT-America-Mono-Medium";
            GT_AMERICA["GTAmericaMonoRegularItalic"] = "GT-America-Mono-Regular-Italic";
            GT_AMERICA["GTAmericaMonoRegular"] = "GT-America-Mono-Regular";
            GT_AMERICA["GTAmericaMonoThinItalic"] = "GT-America-Mono-Thin-Italic";
            GT_AMERICA["GTAmericaMonoThin"] = "GT-America-Mono-Thin";
            GT_AMERICA["GTAmericaMonoUltraLightItalic"] = "GT-America-Mono-Ultra-Light-Italic";
            GT_AMERICA["GTAmericaMonoUltraLight"] = "GT-America-Mono-Ultra-Light";
            GT_AMERICA["GTAmericaRegularItalic"] = "GT-America-Regular-Italic";
            GT_AMERICA["GTAmericaRegular"] = "GT-America-Regular";
            GT_AMERICA["GTAmericaThinItalic"] = "GT-America-Thin-Italic";
            GT_AMERICA["GTAmericaThin"] = "GT-America-Thin";
            GT_AMERICA["GTAmericaUltraLightItalic"] = "GT-America-Ultra-Light-Italic";
            GT_AMERICA["GTAmericaUltraLight"] = "GT-America-Ultra-Light";
        })(GT_AMERICA = FONT_USER.GT_AMERICA || (FONT_USER.GT_AMERICA = {}));
        let Reckless;
        (function (Reckless) {
            Reckless["RecklessBold"] = "RecklessTRIAL-Bold";
            Reckless["RecklessHeavy"] = "RecklessTRIAL-Heavy";
            Reckless["RecklessLight"] = "RecklessTRIAL-Light";
            Reckless["RecklessMedium"] = "RecklessTRIAL-Medium";
            Reckless["RecklessRegular"] = "RecklessTRIAL-Regular";
            Reckless["RecklessSemiBold"] = "RecklessTRIAL-SemiBold";
        })(Reckless = FONT_USER.Reckless || (FONT_USER.Reckless = {}));
        let PxGrotesk;
        (function (PxGrotesk) {
            PxGrotesk["PxGroteskBoldItalic"] = "Px Grotesk Bold Italic";
            PxGrotesk["PxGroteskBold"] = "Px Grotesk Bold";
            PxGrotesk["PxGroteskLightItalic"] = "Px Grotesk Light Italic";
            PxGrotesk["PxGroteskLight"] = "Px Grotesk Light";
            PxGrotesk["PxGroteskRegularItalic"] = "Px Grotesk Regular Italic";
            PxGrotesk["PxGroteskRegular"] = "Px Grotesk Regular";
            PxGrotesk["PxGroteskScreen"] = "Px Grotesk Screen";
        })(PxGrotesk = FONT_USER.PxGrotesk || (FONT_USER.PxGrotesk = {}));
        let SangBleu;
        (function (SangBleu) {
            SangBleu["SangBleuEmpireBlack"] = "SangBleuEmpire-Black";
            SangBleu["SangBleuEmpireBlackItalic"] = "SangBleuEmpire-BlackItalic";
            SangBleu["SangBleuEmpireBold"] = "SangBleuEmpire-Bold";
            SangBleu["SangBleuEmpireBoldItalic"] = "SangBleuEmpire-BoldItalic";
            SangBleu["SangBleuEmpireMedium"] = "SangBleuEmpire-Medium";
            SangBleu["SangBleuEmpireMediumItalic"] = "SangBleuEmpire-MediumItalic";
            SangBleu["SangBleuEmpireRegular"] = "SangBleuEmpire-Regular";
            SangBleu["SangBleuEmpireRegularItalic"] = "SangBleuEmpire-RegularItalic";
            SangBleu["SangBleuKingdomAir"] = "SangBleuKingdom-Air";
            SangBleu["SangBleuKingdomAirItalic"] = "SangBleuKingdom-AirItalic";
            SangBleu["SangBleuKingdomBold"] = "SangBleuKingdom-Bold";
            SangBleu["SangBleuKingdomBoldItalic"] = "SangBleuKingdom-BoldItalic";
            SangBleu["SangBleuKingdomLight"] = "SangBleuKingdom-Light";
            SangBleu["SangBleuKingdomLightItalic"] = "SangBleuKingdom-LightItalic";
            SangBleu["SangBleuKingdomMedium"] = "SangBleuKingdom-Medium";
            SangBleu["SangBleuKingdomMediumItalic"] = "SangBleuKingdom-MediumItalic";
            SangBleu["SangBleuKingdomRegular"] = "SangBleuKingdom-Regular";
            SangBleu["SangBleuKingdomRegularItalic"] = "SangBleuKingdom-RegularItalic";
            SangBleu["SangBleuRepublicBold"] = "SangBleuRepublic-Bold";
            SangBleu["SangBleuRepublicBoldItalic"] = "SangBleuRepublic-BoldItalic";
            SangBleu["SangBleuRepublicBook"] = "SangBleuRepublic-Book";
            SangBleu["SangBleuRepublicBookItalic"] = "SangBleuRepublic-BookItalic";
            SangBleu["SangBleuRepublicMedium"] = "SangBleuRepublic-Medium";
            SangBleu["SangBleuRepublicMediumItalic"] = "SangBleuRepublic-MediumItalic";
            SangBleu["SangBleuRepublicRegular"] = "SangBleuRepublic-Regular";
            SangBleu["SangBleuRepublicRegularItalic"] = "SangBleuRepublic-RegularItalic";
            SangBleu["SangBleuSunriseAir"] = "SangBleuSunrise-Air";
            SangBleu["SangBleuSunriseAirItalic"] = "SangBleuSunrise-AirItalic";
            SangBleu["SangBleuSunriseBold"] = "SangBleuSunrise-Bold";
            SangBleu["SangBleuSunriseBoldItalic"] = "SangBleuSunrise-BoldItalic";
            SangBleu["SangBleuSunriseLight"] = "SangBleuSunrise-Light";
            SangBleu["SangBleuSunriseLightItalic"] = "SangBleuSunrise-LightItalic";
            SangBleu["SangBleuSunriseLivre"] = "SangBleuSunrise-Livre";
            SangBleu["SangBleuSunriseMedium"] = "SangBleuSunrise-Medium";
            SangBleu["SangBleuSunriseMediumItalic"] = "SangBleuSunrise-MediumItalic";
            SangBleu["SangBleuSunriseRegular"] = "SangBleuSunrise-Regular";
            SangBleu["SangBleuSunriseRegularItalic"] = "SangBleuSunrise-RegularItalic";
            SangBleu["SangBleuVersaillesBold"] = "SangBleuVersailles-Bold";
            SangBleu["SangBleuVersaillesBoldItalic"] = "SangBleuVersailles-BoldItalic";
            SangBleu["SangBleuVersaillesBook"] = "SangBleuVersailles-Book";
            SangBleu["SangBleuVersaillesBookItalic"] = "SangBleuVersailles-BookItalic";
            SangBleu["SangBleuVersaillesMedium"] = "SangBleuVersailles-Medium";
            SangBleu["SangBleuVersaillesMediumItalic"] = "SangBleuVersailles-MediumItalic";
            SangBleu["SangBleuVersaillesRegular"] = "SangBleuVersailles-Regular";
            SangBleu["SangBleuVersaillesRegularItalic"] = "SangBleuVersailles-RegularItalic";
        })(SangBleu = FONT_USER.SangBleu || (FONT_USER.SangBleu = {}));
    })(FONT_USER = exports.FONT_USER || (exports.FONT_USER = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/tools/_module_export.ts":
/*!*************************************!*\
  !*** ./src/tools/_module_export.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./loremIpsum */ "./src/tools/loremIpsum.ts"), __webpack_require__(/*! ./rectangleContainerGenerator/RectangleContainerGenerator */ "./src/tools/rectangleContainerGenerator/RectangleContainerGenerator.ts"), __webpack_require__(/*! ./FONT_USER */ "./src/tools/FONT_USER.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, loremIpsum_1, RectangleContainerGenerator_1, FONT_USER_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loremIpsum = loremIpsum_1.loremIpsum;
    exports.RectangleContainerGenerator = RectangleContainerGenerator_1.RectangleContainerGenerator;
    exports.TextMetric = RectangleContainerGenerator_1.TextMetric;
    exports.FONT_USER = FONT_USER_1.FONT_USER;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/tools/loremIpsum.ts":
/*!*********************************!*\
  !*** ./src/tools/loremIpsum.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function loremIpsum() {
        {
            return `The Xerox Star has significantly affected the computer industry. In this retrospective, several of Star’s designers describe its important features, antecedents, design and development, evolution, and some lessons learned.

Xerox introduced the 8010 “Star” Information System in April of 1981. That introduction was an important event in the history of personal computing because it changed notions of how interactive systems should be designed. Several of Star’s designers, some of us responsible for the original design and others for recent improvements, describe in this article where Star came from, what is distinctive about it, and how the original design has changed. In doing so, we hope to correct some misconceptions about Star that we have seen in the trade press and to relate some of what we have learned from designing it.

For brevity, we use the name “Star” here to refer to both Star and its successor, ViewPoint. “ViewPoint” refers exclusively to the current product.

What Star is

Star was designed as an office automation system. The idea was that professionals in a business or organization would have workstations on their desks and would use them to produce, retrieve, distribute, and organize documentation, presentations, memos, and reports. All of the workstations in an organization would be connected via Ethernet and would share access to file servers, printers, etc.

Star’s designers assumed that the target users were interested in getting their work done and not at all interested in computers. Therefore, an important design goal was to make the “computer” as invisible to users as possible. The applications included in the system were those that office professionals would supposedly need: documents, business graphics, tables, personal databases, and electronic mail. The set was fixed, always loaded, and automatically associated with data files, eliminating the need to obtain, install, and start the right application for a given task or data file. Users could focus on their work, oblivious to concepts like software, operating systems, applications, and programs.

Another important assumption was that Star’s users would be casual, occasional users rather than people who spent most of their time at the machine. This assumption led to the goal of having Star be easy to learn and remember.

When Star was introduced in 1981, its bitmapped screen, windows, mouse-driven interface, and icons were readily apparent features that clearly distinguished it from other computers. Soon, however, others adopted these features. Today, windows, mice, and icons are more common. However, Star’s clean, consistent user interface has much more to do with its details than with its gross features. We list here the features that we think make Star what it is, categorized according to their level in the system architecture: machine and network, window and file manager, user interface, and document editor.

Machine and network level

Important aspects of Star can be found in the lowest levels of its architecture: the machine and the network of which it is a part.

Distributed, personal computing. Though currently available in a standalone configuration, Star was designed primarily to operate in a distributed computing environment. This approach combines the advantages and avoids the disadvantages of the two other primary approaches to interactive computing: time-shared systems and stand-alone personal computers.

Time-shared systems, dominant through the sixties and seventies, allow sharing of expensive resources like printers and large data stores among many users and help assure the consistency of data that many must use. Timesharing has the disadvantages that all users depend upon the continued functioning of the central computer and that system response degrades as the number of users increases.

Personal computers, which have replaced timesharing as the primary mode of interactive computing, have the advantage, as one Xerox researcher put it, “of not being faster at night.” Also, a collection of personal computers is more reliable than are terminals connected to a centralized computer: system problems are less apt to cause a total stoppage of work. The disadvantages of PCs, of course, are the converse of the advantages of timesharing. Companies that use stand-alone PCs usually see a proliferation of printers, inconsistent databases, and nonexchangeable data.

The solution, pioneered by researchers at Xerox (see “History of Star development” below) and embodied in Star, is to connect personal workstations with a local area network and to attach shared resources (file servers, database servers, printers) to that same network.

Mouse. An interactive computer system must provide a way for users to indicate which operations they want and what data they want those operations to be performed on. Users of early interactive systems specified operations and operands via commands and data descriptors (such as text line numbers). As video display terminals became common, it became clear that it was often better for users to specify operands – and sometimes operations – by pointing to them on the screen. It also became clear that graphic applications should not be controlled solely with a keyboard. In the sixties and seventies, people invented many different pointing devices: the light pen, the trackball, the joystick, cursor keys, the digitizing tablet, the touch screen, and the mouse.

Like other pointing devices, the mouse allows easy selection of objects and triggering of sensitive areas on the screen. The mouse differs from touch screens, light pens, and digitizing pads in that it is a relative pointing device: the movement of the pointer on the screen depends upon mouse movement rather than position. Unlike light pens, joysticks, and digitizing pads, the mouse (and the corresponding pointer on the screen) stays put when the user lets go of it.

To achieve satisfactory mouse-tracking performance, Star handles the mouse at a very low level. In some workstations, the window system handles mouse tracking, with the result that the mouse pointer often jerks around the screen and may even freeze for seconds at a time, depending upon what else the system is doing. The mouse is a hand-eye coordination device, so if the pointer lags, users just keep moving the mouse. When the system catches up, the mouse moves beyond the user’s target. We at Xerox considered this unacceptable.

Star uses a two-button mouse, in contrast with the one-button mouse used by Apple and the three-button mouse used by most other vendors. Though predecessors of Star developed at Xerox Palo Alto Research Center (see “History of Star development” below) used a three-button mouse, Star’s designers wanted to reduce the number of buttons to alleviate confusion over which button did what. Why stop at two buttons instead of reducing the number to one, as Apple did? Because studies of users editing text and other material showed that a one-button mouse eliminated button-confusion errors only at the cost of increasing selection errors to unacceptable levels.

Bitmapped display. Until recently, most video display terminals were character-mapped. Such displays enable vast savings in display memory, which, when memory was expensive, made terminals more affordable.

In the seventies, researchers at Xerox PARC decided that memory would get cheaper eventually and that a bitmapped screen was worth the cost anyway. They thus developed the Alto, which had a screen 8.5 inches wide and 10.5 inches tall and an instruction set specially designed for manipulating display memory.

Figure 1. ViewPoint screen image. Star’s bitmapped display, once unique in the marketplace, is now much more common. Such a display permits WYSIWYG editing, display of proportionally spaced fonts, integrated text and graphics, and graphical user interfaces.
This image can be zoomedFigure 1. ViewPoint screen image. Star’s bitmapped display, once unique in the marketplace, is now much more common. Such a display permits WYSIWYG editing, display of proportionally spaced fonts, integrated text and graphics, and graphical user interfaces.
Like the Alto, Star’s display has a resolution of 72 pixels per inch. The number 72 was chosen for two reasons. First, there are 72 printer’s points per inch, so 72 pixels per inch allows for a smooth interface with the world of typesetting and typography. Second, 72 pixels per inch is a high enough resolution for on-screen legibility of a wide range of graphics and character sizes (down to about eight points – see Figure 1), but not so high as to cause an onerous memory burden, which a screen that matched the 300 dots-per-inch printer resolution would have. Unlike many PC graphic displays, the pixel size and density are the same horizontally and vertically, which simplifies the display software and improves image quality.

Window and file manager level

Just above Star’s operating system (not discussed here) are facilities upon which its distinctive user interface rests.

Windows. Systems now commonly allow several programs to display information simultaneously in separate areas of the screen, rather than each taking up the entire display. Star was the first commercial system to provide this capability.

Some windowing systems allow windows to overlap each other. Other systems don’t; the system adjusts the size and position of windows as they are opened and closed. Star’s windowing system could overlap windows and often did (for example, property sheets appeared in windows overlapping application windows). However, early testing revealed that users spent a lot of time adjusting windows, usually so they did not overlap. Because of this, and because Star’s 17-inch screen reduced the need for overlapping windows, the designers decided to constrain application windows to not overlap. However, some situations benefit from overlapping application windows. This, added to a subsequent reduction in the standard screen size to 15 inches (with a 19-inch screen optional), resulted in optional constraints for ViewPoint, Star’s successor, with the default setting allowing application windows to overlap one another.

Integrated applications. “Integrated” has become a buzzword used to describe many things. Here, it means that text, graphics, tables, and mathematical formulas are all edited inside documents. In many other systems, different types of content are edited in separate application windows and then cut and pasted together. For example, a MacDraw drawing put into a Microsoft Word or Aldus Pagemaker document can no longer be edited; rather, the original must be re-edited with MacDraw and then substituted for the old drawing in the document.

Not even Star is fully integrated in the sense used here. For example, though the original structured graphics editor, the new one (see “History of Star development” below), and the table and formula editors all operate inside text files, spreadsheets and freehand drawings are currently edited in separate application windows and transferred into documents, where they are no longer fully editable.

User-interface level

Star’s user interface is its most outstanding feature. In this section we discuss important aspects of the interface in detail.

Desktop metaphor. Star, unlike all conventional systems and many window- and mouse-based ones, uses an analogy with real offices to make the system easy to learn. This analogy is called “the Desktop metaphor.” To quote from an early article about Star:

Every user’s initial view of Star is the Desktop, which resembles the top of an office desk, together with surrounding furniture and equipment. It represents a working environment, where current projects and accessible resources reside. On the screen are displayed pictures of familiar office objects, such as documents, folders, file drawers, in-baskets, and out-baskets. These objects are displayed as small pictures, or icons.

The Desktop is the principal Star technique for realizing the physical office metaphor. The icons on it are visible, concrete embodiments of the corresponding physical objects. Star users are encouraged to think of the objects on the Desktop in physical terms. You can move the icons around to arrange your Desktop as you wish. (Messy Desktops are certainly possible, just as in real life.) You can leave documents on your Desktop indefinitely, just as on a real desk, or you can file them away.1

Having windows and a mouse does not make a system an embodiment of the Desktop metaphor. In a Desktop metaphor system, users deal mainly with data files, oblivious to the existence of programs. They do not “invoke a text editor,” they “open a document.” The system knows the type of each file and notifies the relevant application program when one is opened.

Most systems, including windowed ones, use a Tools metaphor, in which users deal mainly with applications as tools. Users start one or more application programs (such as a word processor or spreadsheet), then specify one or more data files to edit with each. Such systems do not explicitly associate applications with data files. Users bear the burden of doing that – and of remembering not to try to edit a spreadsheet file with the text editor or vice versa. User convention distinguishes different kinds of files, usually with filename extensions (such as memo.txt). Star relieves users of the need to keep track of which data file goes with which application.

SunView is an example of a window system based upon the Tools metaphor rather than the Desktop metaphor. Its users see a collection of application program windows, each used to edit certain files. Smalltalk-80, Cedar, and various Lisp environments also use the Tools metaphor rather than the Desktop metaphor.

This is not to say that the Desktop metaphor is superior to the Tools metaphor. The Desktop metaphor targets office automation and publishing. It might not suit other applications (such as software development). However, we could argue that orienting users toward their data rather than toward application programs and employing analogies with the physical world are useful techniques in any domain.

The disadvantage of assigning data files to applications is that users sometimes want to operate on a file with a program other than its “assigned” application. Such cases must be handled in Star in an ad hoc way, whereas systems like Unix allow you to run almost any file through a wide variety of programs. Star’s designers feel that, for its audience, the advantages of allowing users to forget about programs outweighs this disadvantage.

Generic commands. One way to simplify a computer system is to reduce the number of commands. Star achieves simplicity without sacrificing functionality by having a small set of generic commands apply to all types of data: Move, Copy, Open, Delete, Show Properties, and Same (Copy Properties). Dedicated function keys on Star’s keyboard invoke these commands. Each type of data object interprets a generic command in a way appropriate for it.

Such an approach avoids the proliferation of object-specific commands and/or command modifiers found in most systems, such as Delete Character, Delete Word, Delete Line, Delete Paragraph, and Delete File. Command modifiers are necessary in systems in which selection is only approximate. Consider the many systems in which the object of a command is specified by a combination of the cursor location and the command modifier. For example, Delete Word means “delete the word that the cursor is on.”

Modifiers are unnecessary in Star because exact selection of the objects of commands is easy. In many systems, the large number of object-specific commands is made even more confusing by using single-word synonyms instead of command modifiers for similar operations on different objects. For example, depending upon whether the object of the command is a file or text, the command used might be Remove or Delete, Duplicate or Copy, and Find or Search, respectively.

Careful choice of the generic commands can further reduce the number of commands required. For example, you might think it necessary to have a generic command Print for printing various things. Having Print apply to all data objects would avoid the trap that some systems fall into of having separate commands for printing documents, spreadsheets, illustrations, directories, etc., but it is nonetheless unnecessary. In Star, users simply Copy to a printer icon whatever they want to print. Similarly, the Move command is used to invoke Send Mail by moving a document to the out-basket.

Of course, not everything can be done via generic commands. Some operations are object-specific. For example, a word might use italics, but italics are meaningless for a triangle. In Star, object-specific operations are provided via selection-dependent “soft” function keys and via menus attached to application windows.

Direct manipulation and graphical user interface. Traditional computer systems require users to remember and type a great deal just to control the system. This impedes learning and retention, especially by casual users. Star’s designers favored an approach emphasizing recognition over recall, seeing and pointing over remembering and typing. This suggested using menus rather than commands. However, the designers wanted to go beyond a conventional menu-based approach. They wanted users to feel that they are manipulating data directly, rather than issuing commands to the system to do it. Star’s designers also wanted to exploit the tremendous communication possibilities of the display. They wanted to move away from strictly verbal communication. Therefore, they based the system heavily upon principles that are now known as direct manipulation and graphical control.

Star users control the system by manipulating graphical elements on the screen, elements that represent the state of the system and data created by users. The system does not distinguish between input and output. Anything displayed (output) by the system can be pointed to and acted upon by the user (input). When Star displays a directory, it (unlike MS-DOS and Unix) is not displaying a list of the names of the files in the directory, it is displaying the files themselves so that the user can manipulate them. Users of this type of system have the feeling that they are operating upon the data directly, rather than through an agent – like fetching a book from a library shelf yourself rather than asking someone to do it for you.

A related principle is that the state of the system always shows in the display. Nothing happens “behind the user’s back.” You needn’t fiddle with the system to understand what’s going on; you can understand by inspection.

One of Star’s designers wrote

When everything in a computer system is visible on the screen, the display becomes reality. Objects and actions can be understood purely in terms of their effects upon the display. This vastly simplifies understanding and reduces learning time.2

An example of this philosophy is the fact that, unlike many window-based computer systems (even some developed at Xerox), Star has no hidden menus – all available menus are marked with menu buttons.

For a more detailed explanation of direct manipulation, see the sidebar.

Icons and iconic file management. Computer users often have difficulty managing their files. Before Star existed, a secretary at Xerox complained that she couldn’t keep track of the files on her disk. An inspection of her system revealed files named memo, memol, memo071479, letter, etc. Naming things to keep track of them is bothersome enough for programmers, but completely unnatural for most people.

Star alleviates this problem partly by representing data files with pictures of office objects called icons. Every application data file in the system has an icon representing it. Each type of file has a characteristic icon shape. If a user is looking for a spreadsheet, his or her eye can skip over mailboxes, printers, text documents, etc.

Furthermore, Star allows users to organize files spatially rather than by distinctive naming. Systems having hierarchical directories, such as Unix and MS-DOS, provide an abstract sort of “spatial” file organization, but Star’s approach is concrete. Files can be kept together by putting them into a folder or simply by clumping them together on the Desktop, which models how people organize their physical worlds. Since data files are represented by icons, and files are distinguished by location and specified by selection rather than by name, users can use names like memo, memol, letter, etc., without losing track of their files as easily as they would with most systems.

As bitmap-, window-, and mouse-based systems have become more common, the use of the term “icon” has widened to refer to any nontextual symbol on the display. In standard English, “icon” is a term for religious statues or pictures believed to contain some of the powers of the deities they represent. It would be more consistent with its normal meaning if “icon” were reserved for objects having behavioral and intrinsic properties. Most graphical symbols and labels on computer screens are therefore not icons. In Star, only representations of files on the Desktop and in folders, mailboxes, and file drawers are called icons.

Few modes. A system has modes if user actions differ in effects or availability in different situations. Tesler has argued that modes in interactive computer systems are undesirable because they restrict the functions available at any given point and force users to keep track of the system’s state to know what effect their actions will have.3 Though modes can be helpful in guiding users through unfamiliar procedures or for handling exceptional activities, they should be used sparingly and carefully.

Star avoids modes in several ways. One is the extensive use of generic commands (see above), which drastically reduces the number of commands needed. This, in turn, means that designers need not assign double-duty (that is, different meanings in different modes) to physical controls.

A second way is by allowing applications to operate simultaneously. When using one program (such as a document editor), users are not in a mode that prevents them from using the capabilities of other programs (such as the desktop manager).

A third way Star avoids modes is by using a noun-verb command syntax. Users select an operand (such as a file, a word, or a table), then invoke a command. In conventional systems, arguments follow commands, either on a command line or in response to prompts. Whether a system uses noun-verb or verb-noun syntax has a lot to do with how moded it is. In a noun-verb system such as Star, selecting an object prior to choosing a command does not put the system into a mode. Users can decide not to invoke the command without having to “escape out” of anything or can select a different object to operate on.

Though Star avoids modes, it is not completely modeless. For example, the Move and Copy commands require two arguments: the object to be moved and the final destination. Though less moded ways to design Move and Copy exist, these functions currently require the user to select the object, press the Move or Copy key, then indicate the destination using the mouse. While Star waits for the user to point to a destination, it is in Move or Copy mode, precluding other uses of the mouse. These modes are relatively harmless, however, because (1) the shape of the cursor clearly indicates the state of the system and (2) the user enters and exits them in the course of carrying out a single mental plan, making it unlikely that the system will be in the “wrong” mode when the user begins his or her next action.

Objects have properties. Properties allow objects of the same type to vary in appearance, layout, and behavior. For example, files have a Name property, characters have a Font family property, and paragraphs have a Justified property. Properties may have different types of values: the Name property of a file is a text string; the Size property of a character might be a number or a choice from a menu; the Justified property of a paragraph is either “on” or “off.” In Star, properties are displayed and changed in graphical forms called property sheets.

Property-based systems are rare. Most computer systems, even today, allow users to set parameters for the duration of an interactive session or for the duration of a command, but not for particular data objects. For example, headings in Wordstar documents do not “remember” whether they are centered or not; whether a line is centered is determined by how the program was set when the line was typed. Similarly, directories in Unix do not “remember” whether files are to be listed in alphabetical or temporal order; users must respecify which display order they want every time they invoke the ls command.

Progressive disclosure. It has been said that “computers promise the fountains of Utopia, but only deliver a flood of information.”4 Indeed, many computer systems overwhelm their users with choices, commands to remember, and poorly organized output, much of it irrelevant to what the user is trying to do. They make no presumptions about what the user wants. Thus, they are designed as if all possible user actions were equally likely and as if all information generated by the system were of equal interest to the user. Some systems diminish the problem somewhat by providing default settings of parameters to simplify tasks expected to be common.

Star goes further towards alleviating this problem by applying a principle called “progressive disclosure.” Progressive disclosure dictates that detail be hidden from users until they ask or need to see it. Thus, Star not only provides default settings, it hides settings that users are unlikely to change until users indicate that they want to change them. Implicit in this design are assumptions about which properties will be less frequently altered.

Figure 2. Progressive disclosure. Star’s property sheets, like the rest of the interface, use a principle known as progressive disclosure to avoid overwhelming users with information. Usually, users don’t need to see an object’s properties: they only need to see and perhaps change its assigned style. Users see an object’s properties only upon request. Also, even when a user sets a property sheet to show an object’s properties, as shown here, some information remains hidden until the user asks to see it. For example, there is no need to clutter the property sheet here with boxes for entering numbers for “Other” values of Line Height, Spacing Before Paragraph, or Spacing After Paragraph until the user actually sets the property to “Other.”
This image can be zoomedFigure 2. Progressive disclosure. Star’s property sheets, like the rest of the interface, use a principle known as progressive disclosure to avoid overwhelming users with information. Usually, users don’t need to see an object’s properties: they only need to see and perhaps change its assigned style. Users see an object’s properties only upon request. Also, even when a user sets a property sheet to show an object’s properties, as shown here, some information remains hidden until the user asks to see it. For example, there is no need to clutter the property sheet here with boxes for entering numbers for “Other” values of Line Height, Spacing Before Paragraph, or Spacing After Paragraph until the user actually sets the property to “Other.”
One place progressive disclosure is used is in property sheets. Some objects have a large number of properties, many of which are relevant only when other properties have certain values (see Figure 2). For example, on the page layout property sheet, there is no reason to display all of the properties for specifying running header content and position unless the user actually specifies that the document will have running headers.

Another example of progressive disclosure is the fact that property displays in Star are temporary, displayed on demand. In some systems, the properties of the current selection are displayed at all times, through codes embedded in the text or in an area of the screen reserved for that purpose, even though the user usually doesn’t care.

A highly refined manifestation of progressive disclosure recently added to ViewPoint is styles, which allows users to regard document content (such as a paragraph) as having a single style rule instead of a large number of properties. Thus, styles hide needless detail from users.

Consistency. Because Star and all of its applications were designed and developed in-house, its designers had more control over its user interface than is usually the case with computer systems. Because the designers paid close attention to detail, they achieved a very high degree of consistency. The left mouse button always selects; the right always extends the selection. Mouse-sensitive areas always give feedback when the left button goes down, but never take effect until the button comes up.

Emphasis on good graphic and screen design. Windows, icons, and property sheets are useless if users can’t easily distinguish them from the background or each other, can’t easily see which labels correspond to which objects, or can’t cope with the visual clutter. To assure that Star presents information in a maximally perceivable and useful fashion, Xerox hired graphic designers to determine the appearance and placement of screen objects. These designers applied various written and unwritten principles to the design of the window headers and borders, the Desktop background, the command buttons, the pop-up menus, the property sheets, and the Desktop icons. The most important principles are


	
	
Figure 3. Visual order and user focus. The large amount of contrast present on the screen of many window systems (left screen) makes it difficult to focus on the relevant information. The selection should be the user’s main focus: it is the object of the next operation. The right screen shows how Star/ViewPoint’s screen design focuses attention on the selection.
This image can be zoomedFigure 3. Visual order and user focus. The large amount of contrast present on the screen of many window systems (left screen) makes it difficult to focus on the relevant information. The selection should be the user’s main focus: it is the object of the next operation. The right screen shows how Star/ViewPoint’s screen design focuses attention on the selection.
The illusion of manipulable objects. One goal, fundamental to the notion of direct manipulation, is to create the illusion of manipulable objects. It should be clear that objects can be selected and how to select them. It should be obvious when they are selected and that the next action will apply to them. Whereas the usual task of graphic designers is to present information for passive viewing, Star’s designers had to figure out how to present information for manipulation as well. This shows most clearly in the Desktop icons, with their clear figure/ground relationship: the icons stand by themselves, with self-contained labels. Windows reveal in their borders the “handles” for scrolling, paging, window-specific commands, and pop-up menus.
	
	
Figure 4. Visual order and user focus. Four candidate sets of icons were designed and tested for Star. A representative sample from each set is shown here. In Star, the icon selected by the user is indicated by inverting its image. Candidate icon sets in which the images are mostly white allow icons to stand out when selected. The set that best satisfies this criterion, the one on the upper left, was chosen.
This image can be zoomedFigure 4. Visual order and user focus. Four candidate sets of icons were designed and tested for Star. A representative sample from each set is shown here. In Star, the icon selected by the user is indicated by inverting its image. Candidate icon sets in which the images are mostly white allow icons to stand out when selected. The set that best satisfies this criterion, the one on the upper left, was chosen.
Visual order and user focus. One of the most obvious contributions of good graphic design is appropriate visual order and focus on the screen. For example, intensity and contrast, when appropriately applied, draw the user’s attention to the most important features of the display. 

In some windowing systems, window interiors have the same (dark) color as the Desktop background. Window content should have high intensity relative to the Desktop, to draw attention to what is important on the screen. In Star, window content background is white, both for high contrast and to simulate paper. 

Star keeps the amount of black on the screen to a minimum to make the selection stand out (see Figure 3). In most windowing systems, window headers and other areas of the screen are black, making the selection hard to find. This principle is so important that Star’s designers made sure that the display hardware could fill the nonaddressable border of the screen with Desktop grey rather than leaving it black as in most systems. Star also uses icon images that turn from mostly white to mostly black when selected (see Figure 4) and allows at most one selection on the screen at a time.
	
	
Figure 5. Revealed structure. At the top is the WYSIWYG view of mixed text and graphics. The middle two panels show that structure is revealed when an object is selected. When a line segment is selected, its control points are shown. When text is selected, the text string is revealed. The bottom panel shows the effect of the Show Structure and Show Non-Printing Characters commands, which is to reveal the location of embedded graphics and text frames (dotted lines) and “new paragraph” and Space characters.
This image can be zoomedFigure 5. Revealed structure. At the top is the WYSIWYG view of mixed text and graphics. The middle two panels show that structure is revealed when an object is selected. When a line segment is selected, its control points are shown. When text is selected, the text string is revealed. The bottom panel shows the effect of the Show Structure and Show Non-Printing Characters commands, which is to reveal the location of embedded graphics and text frames (dotted lines) and “new paragraph” and Space characters.
Revealed structure. Often, the more powerful the program used, the greater the distance between intention and effect. If only effect is displayed and not intention, the user’s task of learning the connection is much more difficult. A good graphical interface can make apparent to the user these connections between intention and effect, that is, “revealed structure.” For example, there are many ways to determine the position and length of a line of text on a page. It can be done with page margins, paragraph indentations, centering, tabs, blank lines, or spaces. The WYSIWYG, or “what you see is what you get,” view of all these would be identical. That would be enough if all that mattered to the user was the final form on paper. But what will happen if characters are inserted? If the line is moved to another page, where will it land? WYSIWYG views are sometimes not enough. 

Special views are one method of revealing structure. In Star, documents can show “Structure” and/or “Non-Printing Characters” if desired (see Figure 5). Another convenient means for revealing structure is to make it show up during selection. For example, when a rectangle is selected in a graphics frame, eight control points highlight it, any of which can attach to the cursor during Move or Copy and can land on grid points for precise alignment. The control point highlighting allows a user to distinguish a rectangle from four straight lines; both might produce the same printed effect but would respond differently to editing.
	
	Consistent and appropriate graphic vocabulary. Property sheets (see Figure 2) present a form-like display for the user to specify detailed property settings and arguments to commands. They were designed with a consistent graphic vocabulary. All of the user’s targets are in boxes; unchangeable information such as a property name is not. Mutually exclusive values within choice parameters appear with boxes adjacent. Independent “on/off” or state parameters appear with boxes separated. The current settings are shown inverted. Some of the menus display graphic symbols rather than text. Finally, there are text parameters consisting of a box into which text or numbers can be typed, copied, or moved, and within which text editing functions are available.
	
	
Figure 6. Match the medium. Many graphic refinements were made during the design process. For example, the turned corner of the document icon was moved to the top so that the three lines of label would line up with the labels of other icons. Also, icons were carefully sized and positioned against the gray background to create smoother lines.
This image can be zoomedFigure 6. Match the medium. Many graphic refinements were made during the design process. For example, the turned corner of the document icon was moved to the top so that the three lines of label would line up with the labels of other icons. Also, icons were carefully sized and positioned against the gray background to create smoother lines.
Match the medium. It is in this last principle that the sensitivities of a good graphic designer are most apparent. The goal is to create a consistent quality in the graphics that is appropriate to the product and makes the most of the given medium. Star has a large black and white display. The solutions the graphics designers devised might have been very different had the display had grey-scale or color pixels. 

A common problem with raster displays is “jaggies”: diagonal lines appearing as staircases. With careful design, jaggies can be avoided, for example, by using only vertical, horizontal, and 45-degree angles. Also important is controlling how the edges of the figures interact with the texture of the ground. Figure 6 shows how edges are carefully matched to the background texture so that they have a consistent quality appearance.


Document editor level

At the top level of Star’s architecture are its applications, the most prominent of which is the document editor.

Figure 7. WYSIWYG formula editing. Mathematical formulas are edited in Star in a highly WYSIWYG fashion, in contrast to most systems, in which formulas are specified via in-line expressions or by constructing them from pieces in a special character font.
This image can be zoomedFigure 7. WYSIWYG formula editing. Mathematical formulas are edited in Star in a highly WYSIWYG fashion, in contrast to most systems, in which formulas are specified via in-line expressions or by constructing them from pieces in a special character font.
WYSIWYG document editor. Within the limits of screen resolution, Star documents are displayed as they will print, including typographic features such as boldface, italics, proportional spacing, variable font families, and superscripts, and layout features such as embedded graphics, page numbers, headers, and footers. This is commonly referred to as “what you see is what you get,” or WYSIWYG.

Star adheres to this principle even in domains where other WYSIWYG document editors do not. For example, mathematical formulas are created and edited in documents using a WYSIWYG editor that has knowledge built into it about the appearance and layout of mathematical symbols. A square root sign has a slot for an expression and grows when the expression becomes large (see Figure 7). In most systems, mathematical formulas are created either by putting together special characters to make mathematical symbols or by using a special in-line notation (such as sqrt(sigma(l, n, (x*3)/2))) to represent the formula that will eventually be printed. Formulas created with such systems usually require several print-edit cycles to get right.

Extended character set for multilingual capability. Star uses 16-bit character codes, in contrast to most of the computer industry, which uses seven- or eight-bit character codes (for example, ASCII or EBCDIC). The Star character set is a superset of ASCII. The reason for a 16-bit code is a strong market requirement for enhanced multilingual capability coming from Xerox’s subsidiaries in Europe and Japan. Most systems provide non-English characters through different fonts, so that the eight-bit “extended” ASCII codes might be rendered as math symbols in one font, Greek letters in another font, and Arabic in yet another. This has the effect that when any application loses track of font information while handling the text (which happens often in some systems), a paragraph of Arabic may turn into nonsensical Greek or math symbols or something else, and vice versa.

Star uses 16-bit character codes to permit the system to reliably handle European languages and Japanese, which uses many thousands of characters. All Star and ViewPoint systems have French, German, Italian, Spanish, and Russian language capabilities built in. The Japanese language capability was developed as part of the original Star design effort and released in Japan soon after Star’s debut in the United States. Since that time, many more characters have been added, covering Chinese, Arabic, Hebrew, and nearly all European languages.

As explained in several articles by Joe Becker, the designer of Star’s multilingual capabilities, handling many of the world’s languages requires more than an expanded character set.5 Clever typing schemes and sophisticated rendering algorithms are required to provide a multilingual capability that satisfies customers.

The document is the heart of the world and unifies it. Most personal computers and workstations give no special status to any particular application. Dozens of applications are available, most incompatible with each other in data format as well as user interface.

Star, in contrast, assumes that the primary use of the system is to create and maintain documents. The document editor is thus the primary application. All other applications exist mainly to provide or manipulate information whose ultimate destination is a document. Thus, most applications are integrated into the document editor (see “Integrated applications” above), operating within frames embedded in documents. Those applications that are not part of the document editor support transfer of their data to documents.

History of Star development

Figure 8. How systems influenced later systems. This graph summarizes how various systems related to Star have influenced one another over the years. Time progresses downwards. Double arrows indicate direct successors (i.e., follow-on versions). Many “influence arrows” are due to key designers changing jobs or applying concepts from their graduate research to products.
This image can be zoomedFigure 8. How systems influenced later systems. This graph summarizes how various systems related to Star have influenced one another over the years. Time progresses downwards. Double arrows indicate direct successors (i.e., follow-on versions). Many “influence arrows” are due to key designers changing jobs or applying concepts from their graduate research to products.
Having described Star and ViewPoint, we will describe where they came from and how they were developed. Figure 8 graphs this history, showing systems that influenced Star and those influenced by it.

Pre-Xerox

Although Star was conceived as a product in 1975 and was released in 1981, many of the ideas that went into it were born in projects dating back more than three decades.

Memex. The story starts in 1945, when Vannevar Bush, a designer of early calculators and one of President Franklin D. Roosevelt’s science advisors, wrote an article describing his vision of the uses of electronics and information technology. At a time when computers were new, room-sized, and used only for military number-crunching, Bush envisioned a personal, desktop computer for non-numerical applications. He called it the Memex. Due to insufficient technology and insufficient imagination on the part of others, Bush’s ideas languished for 15 years.

Sketchpad. In the sixties, people began to take interactive computing seriously. One such person was Ivan Sutherland. He built an interactive graphics system called Sketchpad that allowed a user to create graphical figures on a CRT display using a light pen. The geometric shapes users put on the screen were treated as objects: after being created, they could be moved, copied, shrunk, expanded, and rotated. They could also be joined together to make larger, more complex objects that could then be operated upon as units. Sketchpad influenced Star’s user interface as a whole as well as its graphics applications.

NLS. Also in the sixties, Douglas Engelbart established a research program at Stanford Research Institute (now called SRI International) for exploring the use of computers “to augment the knowledge worker” and human intellect in general. He and his collegues experimented with different types of displays and input devices (inventing the mouse when other pointing devices proved inadequate) and developed a system commonly known as NLS. (The actual name of the system was On-Line System. A second system called Off-Line System was abbreviated FLS, hence NLS’s strange abbreviation. NLS is now marketed by McDonnell Douglas under the name Augment.)

NLS was unique in several respects. It used CRT displays when most computers used teletypes. It was interactive (i.e., online) when almost all computing was batch. It was full-screen-oriented when the few systems that were interactive were line-oriented. It used a mouse when all other graphic interactive systems used cursor keys, light pens, joysticks, or digitizing tablets. Finally, it was the first system to organize textual and graphical information in trees and networks. Today, it would be called an “idea processor” or a “hypertext system.”

The Reactive Engine. While Engelbart et al. were developing ideas, some of which eventually found their way into Star, Alan Kay, then a graduate student, was doing likewise. His dissertation, The Reactive Engine, contained the seeds of many ideas that he and others later brought to fruition in the Smalltalk language and programming environment, which, in turn, influenced Star. Like the designers of NLS, Kay realized that interactive applications do not have to treat the display as a “glass teletype” and can share the screen with other programs.

Xerox PARC

In 1970, Xerox established a research center in Palo Alto to explore technologies that would be important not only for the further development of Xerox’s then-existing product line (copiers), but also for Xerox’s planned expansion into the office systems business. The Palo Alto Research Center was organized into several laboratories, each devoted to basic and applied research in a field related to the above goals. The names and organization of the labs have changed over the years, but the research topics have stayed the same: materials science, laser physics, integrated circuitry, computer-aided design and manufacturing, user interfaces (not necessarily to computers), and computer science (including networking, databases, operating systems, languages and programming environments, graphics, document production systems, and artificial intelligence).

Alto

PARC researchers were fond of the slogan “The best way to predict the future is to invent it.” After some initial experiments with time-shared systems, they began searching for a new approach to computing.

Among the founding members of PARC was Alan Kay. He and his colleagues were acquainted with NLS and liked its novel approach to human-computer interaction. Soon, PARC hired several people who had worked on NLS. In 1971, the center signed an agreement with SRI licensing Xerox to use the mouse. Kay and others were dedicated to a vision of personal computers in a distributed environment. In fact, they coined the term “personal computer” in 1973, long before microcomputers started what has been called the “personal computer revolution.”

Figure 9. The Xerox Alto. The Alto, developed at Xerox PARC in the seventies, was a prototype for Star. Both its hardware design and the many programs written for it by PARC researchers strongly influenced Star’s designers.
This image can be zoomedFigure 9. The Xerox Alto. The Alto, developed at Xerox PARC in the seventies, was a prototype for Star. Both its hardware design and the many programs written for it by PARC researchers strongly influenced Star’s designers.
One result of the search for a new approach was the Alto (see Figure 9). The Alto was a minicomputer that had a removable, 2.5-megabyte hard disk pack (floppy disks did not exist at the time) and 128 to 256 kilobytes of memory. Unlike most machines of its day, the Alto also had a microprogrammable instruction set, a “full-page” (10½ × 8¼ inch, 600 × 800 pixel) bitmapped graphic display, about 50 kilobytes of high-speed display memory, and a mouse.

The first Alto became operational in 1972. At first, only a half-dozen or so Altos were built. After software that exploited the Alto’s capabilities became available, demand for them grew tremendously, spreading beyond PARC into Xerox as a whole and even to external customers. Eventually, Xerox built more than a thousand Altos.

Ethernet. Another product of the new approach was the Ethernet. With its standardized, layered communications protocols, Ethernet provided a way of connecting computers much more flexibly than previously possible. Soon after the first Altos were built, they were networked together. Eventually, the network grew to thousands of workstations (Altos and Alto successors) within Xerox’s worldwide organization.

Smalltalk. Alan Kay was one of the main advocates of the Alto. His Learning Research Group began using the Alto to build prototypes for a personal computing system “of the future” – a portable machine that would provide not canned applications but rather the building blocks necessary for users to build the tools and applications they needed to solve their own information processing problems. The technologies needed to build a lap computer with the power of the envisioned system (called the “DynaBook”) were unavailable at the time and still are.

The prototypes developed by Kay’s group evolved into the Smalltalk language and programming environment. Smalltalk further promoted the notion of personal computing; pioneered complete, interactive programming environments; and refined and solidified concepts of object-oriented programming that had been extant only in vestigial forms in previous systems. Most importantly for Star, Smalltalk demonstrated the power of graphical, bitmapped displays; mouse-driven input; windows; and simultaneous applications. This is the most visible link between Smalltalk and Star, and is perhaps why many people wrongly believe that Star was written in Smalltalk.

Pygmalion. The first large program to be written in Smalltalk was Pygmalion, the doctoral thesis project of David C. Smith. One goal of Pygmalion was to show that programming a computer does not have to be primarily a textual activity. It can be accomplished, given the appropriate system, by interacting with graphical elements on a screen. A second goal was to show that computers can be programmed in the language of the user interface, that is, by demonstrating what you want done and having the computer remember and reproduce it. The idea of using icons – images that allow users to manipulate them and in so doing act upon the data they represent – came mainly from Pygmalion. After completing Pygmalion, Smith worked briefly on the NLS project at SRI before joining the Star development team at Xerox.

Bravo, Gypsy, and BravoX. At the same time that the Learning Research Group was developing Smalltalk for the Alto, others at PARC, mainly Charles Simonyi and Butler Lampson, were writing an advanced document editing system for it called Bravo. Because it made heavy use of the Alto’s bitmapped screen, Bravo was unquestionably the most WYSIWYG text editor of its day, with on-screen underlining, boldface, italics, variable font families and sizes, and variable-width characters. It allowed the screen to be split, so different documents or different parts of the same document could be edited at once, but did not operate in a windowed environment as we use the term today. Bravo was widely used at PARC and in Xerox as a whole.

From 1976 to 1978, Simonyi and others rewrote Bravo, incorporating many of the new user-interface ideas floating around PARC at the time. One such idea was modelessness, promoted by Larry Tesler3 and exemplified in Tester’s prototype text editor, Gypsy. Simonyi et al. also added styles, enhancing users’ ability to control the appearance of their documents. The new version was called BravoX.

Shortly thereafter, Simonyi joined Microsoft, where he led the development of Microsoft Word, a direct descendent of BravoX. Another member of the BravoX team, Tom Malloy, went to Apple and wrote LisaWrite.

Draw, Sil, Markup, Flyer, and Doodle. Star’s graphics capability (its provisions for users to create graphical images for incorporation into documents, as opposed to its graphical user interface) owes a great deal to several graphics editors written for the Alto and later machines.

Draw, by Patrick Beaudelaire and Bob Sproull, and Sil (for Simple Illustrator) were intellectual successors of Sutherland’s Sketchpad (see above): graphical object editors that allowed users to construct figures out of selectable, movable, stretchable geometric forms and text. In turn, Star’s graphic frames capability is in large measure an intellectual successor of Draw and Sil.

Markup was a bitmap graphics editor (that is, a paint program) written by William Newman for the Alto. Flyer was another paint program, written in Smalltalk for the Alto by Bob Flegel and Bill Bowman. These programs inspired Doodle, a paint program written for a later machine by Dan Silva. Doodle eventually evolved into Viewpoint’s Free-Hand Drawing application. Silva went on to write De-luxePaint, a paint program for PCs.

Laser printing. Fancy graphics capabilities in a workstation are of little use without hard-copy capability to match it. Laser printing, invented at PARC, provided the necessary base capability, but computers needed a uniform way to describe output to laser printers. For this purpose, Bob Sproull developed the Press page-description language. Press was heavily used at PARC, then further developed into Interpress, Xerox’s commercial page-description language and the language in which Star encodes printer output. Some of the developers of Interpress later formed Adobe Systems and developed Postscript, a popular page description language.

Laurel and Hardy. A network of personal workstations suggests electronic mail. Though electronic mail was not invented at PARC, PARC researchers (mainly Doug Brotz) made it more accessible to nonengineers by creating Laurel, a display-oriented tool for sending, receiving, and organizing e-mail. The experience of using Laurel inspired others to write Hardy for an Alto successor machine. Laurel and Hardy were instrumental in getting nonengineers at Xerox to use e-mail. The use of e-mail spread further with the spread of Star and ViewPoint throughout Xerox.

OfficeTalk. One more Alto program that influenced Star was OfficeTalk, a prototype office automation system written by Clarence (“Skip”) Ellis and Gary Nutt. OfficeTalk supported standard office automation tasks and tracked jobs as they went from person to person in an organization. Experience with OfficeTalk provided ideas for Star because of the two systems’ similar target applications.

Summing up. The debt that Star owes to the Alto and its software is best summed up by quoting from the original designers, who wrote in 1982:

Alto served as a valuable prototype for Star... Alto users have had several thousand work-years of experience with them over a period of eight years, making Alto perhaps the largest prototyping effort in history. There were dozens of experimental programs written for the Alto by members of the Xerox Palo Alto Research Center. Without the creative ideas of the authors of these systems, Star in its present form would have been impossible... In addition, we ourselves programmed various aspects of the Star design on the Alto...

Star

To develop Star and other office systems products, Xerox created the Systems Development Department. SDD was staffed by transferring people from other parts of Xerox, including PARC, as well as by hiring from outside. Thus, contrary to what has often been stated in the industry press, Star was not developed at PARC, but rather in a separate product-development organization.

When SDD was formed, a decision was made to use Mesa, an “industrial-strength” dialect of Pascal conceived at SRI and further developed at PARC, as the primary product programming language. SDD took over development and maintenance of Mesa from the Computer Science Laboratory at PARC, freeing CSL to develop Mesa’s research successor, Cedar.

Star hardware. Star is often discussed as if it were a computer. In fact, Star is a body of software. (The official name for Star was the Xerox 8010 Information System. The machine was called the 8000 Series Network Systems Processor. Originally, “Star” was only an internal name.) However, using the name Star to refer to the machine is understandable since the machine was designed in conjunction with the software to meet the needs of the software design. This is in sharp contrast to the usual approach, in which software is designed for existing computers.

The 8000 Series workstation was based upon a microcoded processor designed within Xerox especially to run the object code produced by the Mesa compiler. Besides being microprogrammed to run Mesa, the processor provided low-level operations for facilitating display operations. For example, the bitblt operation for manipulating rectangular arrays of screen pixels is implemented as a single instruction. As sold, the machine was configured with at least 384 kilobytes of real memory (expandable to 1.5 megabytes), a local hard disk (10, 29, or 40 megabytes), a 17-inch display, a mechanical mouse, an eight-inch floppy disk drive, and an Ethernet connection. The price was initially $16,500 with software.

Even though the machine was designed to run Star, it also ran other software. In addition to selling it as the 8010 “Star” workstation, Xerox sold it as a server machine and as an Interlisp and a Smalltalk workstation.

Star software. Alhough Star incorporated ideas from a number of predecessors, it still required a mammoth design effort to pull all of those ideas – as well as new ideas – together to produce a coherent design. According to the original designers, “...it was a real challenge to bring some order to the different user interfaces on the Alto.”1 About 30 person-years went into the design of the user interface, functionality, and hardware.

To foster uniformity of specifications as well as thoughtful and uniform design, Star’s designers developed a strict format for specifications. Applications and system features were to be described in terms of the objects that users would manipulate with the software and the actions that the software provided for manipulating objects. This “objects and actions” analysis was supposed to occur at a fairly high level, without regard to how the objects would actually be presented or how the actions would actually be invoked by users. A full specification was then written from the “objects and actions” version. This approach forced designers to think clearly about the purpose of each application or feature and fostered recognition of similar operations across specifications, allowing what might have seemed like new operations to be handled by existing commands.

When SDD was formed, it was split between two locations: Southern California (El Segundo) and Northern California (Palo Alto). Few people were willing to transfer one way or the other, leaving SDD with the choice of losing many competent engineers or being creative. SDD’s management took the creative route: they put the Ethernet to work, attaching the development machines at both sites to a network, connecting the two sites with a 56-kilobit-per-second leased line, encouraging heavy use of electronic mail for work-related communication, and developing tools for facilitating distributed, multiparty development.

As might be expected from Star’s origins, most of the design and prototyping work was done in Palo Alto, whereas most of the implementation was done in El Segundo. Though this split was handled creatively, some of Star’s designers now believe it caused problems not overcome by extensive use of e-mail. For example, the implementors did not benefit from much of the prototyping done at PARC.

The development process has been recounted in detail elsewhere6 and will not be repeated here. Suffice it to say that the Star development effort

	
	involved developing new network protocols and data-encoding schemes when those used in PARC’s research environment proved inadequate;
	
	involved a great deal of prototyping and user testing;
	
	included a late redesign of the processor;
	
	included several software redesigns, rewrites, and late additions, some based on results from user testing, some based on marketing considerations, and some based on systems considerations (see below);
	
	included a level of attention to the requirements of international customers unmatched in the industry; and
	
	left much of what was in the Star Functional Specification unimplemented.


Tajo/XDE

Since the machine upon which Star ran was developed in parallel with the software, it was not available early-on for use as a software development platform. Early prototyping and development was done on Altos and successor research machines developed at PARC. Though the Mesa language ran on these machines, development aids for Mesa programmers were lacking.

When the 8000 Series workstation became available, the systems group within SDD began working on a suitable development environment. Known internally as Tajo and externally as Xerox Development Environment (XDE), the completed development environment and the numerous tools written to run in it were quickly adopted by programmers throughout SDD. Star’s later improvements adopted many good ideas from Tajo.

ViewPoint

Though Star’s introduction at NCC ’81 was lauded in the industry press, initial sales were not what had been hoped. Almost immediately, efforts were launched to improve its performance, extensibility, maintainability, and cost.

ViewPoint software. Even before Star was released, the implementors realized that it had serious problems from their point of view. Its high degree of integration and user-interface consistency had been achieved by making it monolithic: the system “knew” about all applications, and all parts of the system “knew” about all other parts. It was difficult to correct problems, add new features, and increase performance. The monolithic architecture also did not lend itself to distributed, multiparty development.

This created pressure to rewrite Star. Bob Ayers, who had been heavily involved in the development of Star, rewrote the infrastructure of the system according to the more flexible Tajo model. He built, on top of the operating system and low-level window manager, a “toolkit” for building Star-like applications.

In the new infrastructure, transfer of data between different applications was handled through strict protocols involving the user’s selection, thus making applications independent from one another. The object-oriented user interface, which requires that the system associate applications with data files, was preserved by having applications register themselves with the system when started, telling it which type of data file they correspond to and registering procedures for handling keyboard and mouse events and generic commands. User-interface consistency was fostered by building many of the standards into the application toolkit. The development organization completed the toolkit and then ported or rewrote the existing applications and utilities to run on top of it.

Other software changes included

	
	the addition of several applications and utilities, including a Free-Hand Drawing program and an IBM PC emulation application;
	
	optional window tiling constraints, so that users can have overlapping windows if desired;
	
	redesigned screen graphics (icons, windows, property sheets, command buttons, and menus) to accommodate a smaller screen and to meet the demands of a more sophisticated public; and
	
	improved performance.


To underscore the fact that the new system was a substantial improvement over the old, the name was changed from Star to ViewPoint. ViewPoint 1.0 was released in 1985.

ViewPoint hardware. In addition to revising the software, Xerox brought the hardware up to date by designing a completely new vehicle for ViewPoint: the 6085 workstation. The new machine was designed to take advantage of advances in integrated circuitry, reductions in memory costs, new disk technologies, and new standards in keyboard design, as well as to provide IBM PC compatibility. The 6085 workstation has a Mesa processor plus an optional IBM-PC-compatible processor, one megabyte of real memory (expandable to 4 megabytes), a hard disk (10 to 80 megabytes), a choice of a 15- or a 19-inch display, an optical mouse, a new keyboard, a 5¼-inch floppy disk drive, and, of course, an Ethernet connection. The base cost was initially $6,340 with the ViewPoint software. Like the 8010, the 6085 is sold as a vehicle for Interlisp and Smalltalk as well as for ViewPoint.

Recent ViewPoint changes. The recently released ViewPoint 2.0 adds many features relevant to desktop publishing. These include

	
	Xerox ProIllustrator, a new vector graphics editing application designed mainly for professional illustrators;
	
	Shared Books, support for groups of users working on multipart documents;
	
	a Redlining feature, for tracking deletions and insertions in documents;
	
	cursor keys, for moving the insertion point during keyboard-intensive work; and
	
	stylesheets, for facilitating control of document appearance.


Lessons from experience

So what have we learned from all this? We believe, the following:

Pay attention to industry trends.

Partly out of excitement over what they were doing, PARC researchers and Star’s designers didn’t pay enough attention to the “other” personal computer revolution occurring outside of Xerox. By the late seventies, Xerox had its own powerful technical tradition (mouse-driven, networked workstations with large bitmapped screens and multiple, simultaneous applications), blinding Star’s designers to the need to approach the market with cheap, stand-alone PCs. The result was a product that was highly unfamiliar to its intended customers: businesses. Nowadays, of course, such systems are no longer unusual.

Developing Star and ViewPoint involved developing several enabling technologies, for networking, communicating with servers, describing pages to laser printers, and developing software. At the time they were developed, these technologies were unique in the industry. Xerox elected to keep them proprietary for fear of losing its competitive advantage. With hindsight, we can say that it might have been better to release these technologies into the public domain or to market them early, so that they might have become industry standards. Instead, alternative approaches developed at other companies have become the industry standards. Xerox’s current participation in the development of various industry standards indicates its desire to reverse this trend.

Pay attention to what customers want.

The personal computer revolution has shown the futility of trying to anticipate all of the applications that customers will want. Star should have been designed from the start to be open and extensible by users, as the Alto was. In hindsight, extensibility was one of the keys to the Alto’s popularity. The problem wasn’t that Star lacked functionality, it was that it didn’t have the functionality customers wanted. An example is the initial lack of a spreadsheet application. The designers failed to appreciate the significance of this application, which may have been more important even than word-processing in expanding the personal computer revolution beyond engineers and hobbyists into business. Eventually realizing that Star’s closedness was a problem, Xerox replaced it with ViewPoint, a more “open” system that allows users to pick and choose applications that they need, including a spreadsheet and IBM PC software. Apple Computer learned the same lesson with its Lisa computer and similarly replaced it with a cheaper one having a more open software architecture: the Macintosh.

Know your competition.

Star’s initial per-workstation price was near that of time-shared minicomputers, dedicated word-processors, and other shared computing facilities. Star was, however, competing for desktop space with microcomputer-based PCs. ViewPoint has corrected that problem: The 6085 costs about the same as its competition.

Establish firm performance goals.

Star’s designers should have established performance goals, documented them in the functional specifications, and stuck to them as they developed Star. Where performance goals couldn’t be met, the corresponding functionality should have been cut.

In lieu of speed, the designers should have made the user interface more responsive. Designing systems to handle user input more intelligently can make them more responsive without necessarily making them execute functions faster. They can operate asynchronously with respect to user input, making use of background processes, keeping up with important user actions, delaying unimportant tasks (such as refreshing irrelevant areas of the screen) until time permits, and skipping tasks called for by early user actions but rendered moot by later ones. ViewPoint now makes use of background processes to increase its responsiveness.

Avoid geographically split development organizations.

Having a development organization split between Palo Alto and El Segundo was probably a mistake, less for reasons of distance per se than for lack of shared background in “PARC-style” computing. However, the adverse effect of sheer distance on communication was certainly a factor.

Don’t be dogmatic about the Desktop metaphor and direct manipulation.

Direct manipulation and the Desktop metaphor aren’t the best way to do everything. Remembering and typing is sometimes better than seeing and pointing. For example, if users want to open a file that is one of several hundred in a directory (folder), the system should let users type its name rather than forcing them to scroll through the directory trying to spot it so they can select it.

Many aspects of Star were correct.

Though certain aspects of Star perhaps should have been done differently, most of the aspects of Star’s design described at the beginning of this article have withstood the test of time. These include

	
	Iconic, direct-manipulation, object-oriented user interface. The days of cryptic command languages and scores of commands for users to remember (a la Unix and MS-DOS) should have passed long ago.
	
	Generic commands and consistency in general. Even Macintosh could use some lessons in this regard: the Duplicate command copies files within a disk, but users must drag icons to copy them across disks and must use Copy-Paste to copy anything else.
	
	Pointing device. Although cursor keys have some advantages and certainly would have enhanced Star’s market appeal (as they have Viewpoint’s), Star’s designers stand by the system’s primary reliance on the mouse. This does not imply a commitment to the mouse per se, but rather to any pointing device that allows quick pointing and selection. As interfaces evolve in the future, high-resolution touch screens and other more exotic devices may replace mice as the pointing devices of choice.
	
	High-resolution display. Memory is now cheap, so the justification for character displays is gone.
	
	Good graphic design. Screen graphics designed by computer programmers will not satisfy customers. The Star designers recognized their limitations in this regard and hired the right people for the job. As color displays gain market presence, the participation of graphic designers will become even more crucial.
	
	16-bit character set. An eight-bit character set (such as ASCII) cannot accommodate international languages adequately. Star and Viewpoint’s use of a 16-bit character set and of special typing and rendering algorithms for foreign languages is the correct approach.
	
	Distributed, personal computing. Though the reorientation of the industry away from batch and time-shared computing toward personal computing had nothing to do with Xerox, PARC, or Star, it was an important part of the computing philosophy that led to Star.


		

Star has had an indisputable influence on the design of computer systems. For example, the Lisa and Macintosh might have been very different had Apple’s designers not borrowed ideas from Star, as the following excerpt of a Byte magazine interview of Lisa’s designers shows:

Byte: Do you have a Xerox Star here that you work with?

Tesler: No, we didn’t have one here. We went to the NCC [National Computer Conference] when the Star was announced and looked at it. And in fact it did have an immediate impact. A few months after looking at it we made some changes to our user interface based on ideas that we got from it. For example, the desktop manager we had before was completely different; it didn’t use icons at all, and we never liked it very much. We decided to change ours to the icon base. That was probably the only thing we got from Star, I think. Most of our Xerox inspiration was Smalltalk rather than Star.7

Elements of the Desktop metaphor approach also appear in many other systems.

The history presented here has shown, however, that Star’s designers did not invent the system from nothingness. Just as it has influenced systems that came after it, Star was influenced by ideas and systems that came before it. It is difficult to inhibit the spread of good ideas once they are apparent to all, especially in this industry. Star was thus just one step in an evolutionary process that will continue both at Xerox and elsewhere. That is how it should be.

Jeff Johnson and Teresa L. Roberts, US West Advanced Technologies
William Verplank, IDTwo 
David C. Smith, Cognition, Inc.
Charles H. Irby and Marian Beard, Metaphor Computer Systems
Kevin Mackey, Xerox

Acknowledgments

When Star was announced, several articles on it appeared in trade magazines, journals, and at conferences. Many of these were reprinted in the Xerox publication Office Systems Technology.8 Since then, several more articles have been published that are relevant to this retrospective. They include an article from MacWorld9 that described the historical antecedents of Apple Computer’s Lisa and Macintosh computers, which share much of Star’s history. This retrospective owes a great deal to those previous writings. We also acknowledge the valuable contributions that Joe Becker, Bill Mallgren, Doug Carothers, Linda Bergsteinsson, and Randy Polen of Xerox, and Bob Ayers, Ralph Kimball, Dave Fylstra, and John Shoch made to this retrospective. Finally, we acknowledge the helpful suggestions made by the first and second authors’ colleagues at US West Advanced Technologies and several anonymous reviewers to improve the quality of the article.

References

1. D.C. Smith et al., The Star User Interface: An Overview, Proc. AFIPS Nat’l Computer Conf, June 1982, pp. 515-528.

2. D.C. Smith, “Origins of the Desktop Metaphor: A Brief History,” presented in a panel discussion, “The Desktop Metaphor as an Approach to User Interface Design,” in Proc. ACM Annual Conf., 1985, p. 548.

3. L. Tesler, “The Smalltalk Environment,” Byte, Vol. 6, No. 8, Aug. 1981, pp. 90-147.

4. L. Winner, “Mythinformation,” Whole Earth Review, No. 44, Jan. 1985.

5. J. Becker, “Multilingual Word Processing,” Scientific American, Vol. 251, No. 1, July 1984, pp. 96-107. (See Further reading for other articles on Star’s multilingual capability.)

6. E.F. Harslem and L.E. Nelson, A Retrospective on the Development of Star, Proc. Sixth Int’l Conf. on Software Engineering, Sept. 1982, Tokyo, Japan. Reprinted in Office Systems Technology, OSD-R8203A, Xerox Corp., pp. 261-269.

7. G. Williams, The Lisa Computer System, Byte, Vol. 8, No. 2, Feb. 1983, pp. 33-50.

8. Office Systems Technology, OSD-R8203A, Xerox Corp.

9. T. Nace, “The Macintosh Family Tree,” MacWorld, Nov. 1984, pp. 134-141.`;
        }
    }
    exports.loremIpsum = loremIpsum;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/tools/rectangleContainerGenerator/RectangleContainerGenerator.ts":
/*!******************************************************************************!*\
  !*** ./src/tools/rectangleContainerGenerator/RectangleContainerGenerator.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../../geometry/generic/UNIT */ "./src/geometry/generic/UNIT.ts"), __webpack_require__(/*! ../../elements/font/Font */ "./src/elements/font/Font.ts"), __webpack_require__(/*! ../../elements/text/Text */ "./src/elements/text/Text.ts"), __webpack_require__(/*! ../../env */ "./src/env.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, UNIT_1, Font_1, Text_1, env_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * ContainerGenerator allows you to cut long contents according to a width and height. They return an array of content that can be placed in Containers.
     * Thus, if you have a long text, a ContainerGenerator will be able to return the number of containers needed to display to display the entire text.
     * —
     * RectangleContainerGenerator is for RectangleContainer.
     */
    class RectangleContainerGenerator {
        constructor(settings) {
            this._textLinesOfTexts = [];
            this.width = settings.width;
            this.height = settings.height;
            this.unit = settings.unit;
            this.texts = [];
            for (const text of settings.texts) {
                this.texts.push(new Text_1.Text(text));
            }
            this._textMetric = new TextMetric();
            for (const text of this.texts) {
                this.generateLinesOfText(text);
            }
        }
        generateLinesOfText(text) {
            const newTextChild = new TextChildOfContainerGenerator(text);
            let newTextLines;
            const cacheOfTextLines = newTextChild.getCacheOfTextLines();
            if (cacheOfTextLines !== false) {
                if (env_1.env._DEBUG) {
                    console.log("mis en cache : ", cacheOfTextLines);
                }
                newTextLines = cacheOfTextLines;
            }
            else {
                if (env_1.env._DEBUG) {
                    console.log("pas de mise en cahe…");
                }
                newTextLines = {
                    lines: [],
                    style: newTextChild.style.generate(),
                };
                this._textMetric.font.setSettings(newTextChild.style.font);
                const subsectionsInContent = newTextChild.content.split(/\n/);
                for (const subsection of subsectionsInContent) {
                    const wordsInSubsection = subsection.split(/\s/);
                    const maxWidth = this.width - (newTextLines.style.space.left + newTextLines.style.space.right);
                    let line = "";
                    let newLine = "";
                    for (const word of wordsInSubsection) {
                        newLine = (line.length === 0) ? word : line + " " + word;
                        if (this._textMetric.getStringPixelWidth(newLine) > maxWidth) {
                            newTextLines.lines.push(line);
                            line = word;
                        }
                        else {
                            line = newLine;
                        }
                    }
                    newTextLines.lines.push(line);
                }
                newTextChild.cacheLinesGenerated(newTextLines);
            }
            this._textLinesOfTexts.push(newTextLines);
        }
        /**
         * return all line generated for specified width container
         */
        getTextLinesOfTexts() {
            return this._textLinesOfTexts;
        }
        /**
         * return rectangle containers generated for specified width and height container
         */
        getContainers() {
            return (Math.ceil(this._textLinesOfTexts.length * this._textMetric.font.lineHeight / this.height));
        }
    }
    exports.RectangleContainerGenerator = RectangleContainerGenerator;
    /**
     * @hidden
     */
    class TextChildOfContainerGenerator extends Text_1.Text {
        constructor(settings) {
            super(settings);
            this._cacheName = JSON.stringify(this.generate());
        }
        cacheLinesGenerated(textLines) {
            try {
                window.localStorage.setItem(this._cacheName, `${JSON.stringify(textLines)}`);
            }
            catch (e) {
                // @todo optimise cache
                window.localStorage.clear();
                window.localStorage.setItem(this._cacheName, `${JSON.stringify(textLines)}`);
            }
        }
        getCacheOfTextLines() {
            const cacheOfTextLines = window.localStorage.getItem(this._cacheName);
            if (cacheOfTextLines !== null) {
                return JSON.parse(cacheOfTextLines);
            }
            else {
                return false;
            }
        }
    }
    class TextMetric {
        constructor() {
            this.font = new Font_1.Font();
            // private readonly _windowRendering = window.open();
            this._elementSizingGetter = document.createElement("div");
            this._canvas = document.createElement("canvas");
            /**
             * list _pixelValueForUnitSize.size value in PX
             * @todo save value (don't search size if we have run _pixelValueForUnitSize one time)
             */
            this._pixelValueForUnitSize = {
                value: 1000,
                unitsToPX: {
                    [UNIT_1.UNIT.PT]: 0,
                    [UNIT_1.UNIT.MM]: 0,
                    [UNIT_1.UNIT.CM]: 0,
                },
            };
            this._context = this._canvas.getContext("2d");
            this._setXHeightElementSizingGetter();
            this._setPixelValueForUnitSize();
        }
        getStringPixelWidth(string, fontSettings) {
            if (fontSettings !== void 0) {
                this.font.setSettings(fontSettings);
                this._canvas.style.letterSpacing = this.font.letterSpacing + "px";
            }
            this._context.font = `${this.font.fontSize}${this.font.unit} ${this.font.fontFamily}`;
            return this._context.measureText(string).width;
        }
        getXHeightPixelHeight(fontSettings) {
            if (fontSettings !== void 0)
                this.font.setSettings(fontSettings);
            const fontData = this.font.generate();
            const keyName = `${fontData.fontFamily}${fontData.fontSize}${fontData.unit}`;
            let XHeightPixelHeight;
            if (window.localStorage.getItem(keyName) === null) {
                this._setFontParametersToElement(this._elementSizingGetter, fontData);
                this._elementSizingGetter.style.height = "1ex";
                XHeightPixelHeight = this._elementSizingGetter.getBoundingClientRect().height;
                try {
                    window.localStorage.setItem(keyName, XHeightPixelHeight.toString());
                }
                catch (e) {
                    // @todo optimise cache
                    window.localStorage.clear();
                    window.localStorage.setItem(keyName, XHeightPixelHeight.toString());
                }
            }
            else {
                XHeightPixelHeight = parseFloat(window.localStorage.getItem(keyName));
            }
            return XHeightPixelHeight;
        }
        _setXHeightElementSizingGetter() {
            document.body.appendChild(this._elementSizingGetter);
            this._elementSizingGetter.style.margin = "0";
            this._elementSizingGetter.style.padding = "0";
            this._elementSizingGetter.style.border = "none";
            this._elementSizingGetter.style.boxSizing = "border-box";
        }
        _setPixelValueForUnitSize() {
            const value = this._pixelValueForUnitSize.value;
            this._pixelValueForUnitSize.unitsToPX = {
                [UNIT_1.UNIT.CM]: this._valueToPX(value, UNIT_1.UNIT.CM),
                [UNIT_1.UNIT.MM]: this._valueToPX(value, UNIT_1.UNIT.MM),
                [UNIT_1.UNIT.PT]: this._valueToPX(value, UNIT_1.UNIT.PT),
            };
        }
        _valueToPX(value, unit) {
            this._elementSizingGetter.style.height = `${value}${unit}`;
            this._elementSizingGetter.style.display = "block";
            const valueToReturn = this._elementSizingGetter.getBoundingClientRect().height;
            this._elementSizingGetter.style.display = "none";
            return valueToReturn;
        }
        ;
        _setFontParametersToElement(element, fontData) {
            this._elementSizingGetter.style.letterSpacing = `${fontData.letterSpacing}${fontData.unit}`;
            this._elementSizingGetter.style.fontFamily = fontData.fontFamily;
            this._elementSizingGetter.style.lineHeight = `${fontData.lineHeight}${fontData.unit}`;
            this._elementSizingGetter.style.fontSize = `${fontData.fontSize}${fontData.unit}`;
            return fontData;
        }
    }
    exports.TextMetric = TextMetric;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
// const page = document.body as HTMLBodyElement;
// page.style.width = "21cm";
// page.style.border = "solid";
// page.style.borderColor = "black";
// const canvas = document.createElement("canvas") as HTMLCanvasElement;
// const context = canvas.getContext("2d") as CanvasRenderingContext2D;
// let text = loremIpsum().replace(/-/gm, "–");
// const lineHeight = 70;
// const fontSize = 60;
// const fontFamily = "Sangbleu Kingdom";
// const unit = "px";
//
// const width = 793;
// const height = 1122;
//
// const lineSplit = text.split(/\n/);
//
// const lengthArray = [];
// const lineArray = [];
//
// for(const lineSplited of lineSplit) {
//
//     const wordsSplit = lineSplited.split(/\s/);
//
//     let line = "";
//     let newLine = "";
//
//     for (let i = 0; i < wordsSplit.length; i++) {
//         context.font = `${fontSize}${unit} ${fontFamily}`;
//         newLine = (line.length === 0) ? wordsSplit[i] : line + " " + wordsSplit[i];
//         const wordLength = context.measureText(wordsSplit[i]).width;
//         const newLineLength = context.measureText(newLine).width;
//         lengthArray.push(wordLength);
//         if (newLineLength > width) {
//             lineArray.push(line);
//             line = wordsSplit[i];
//         } else {
//             line = newLine;
//         }
//     }
//     lineArray.push(line);
// }
//
// console.log(lengthArray);
// console.log(lineArray);
// console.log(lineArray.length * lineHeight);
//
// const container = document.createElement("div");
// container.style.width = `${width}${unit}`;
// @todo put this code in html generator
// text = text.replace(/–/gm, "&#x2011;");
// text = text.replace(/\n/gm, "<br>");
//
// container.innerHTML = text;
// container.style.margin = "0";
// container.style.position = "absolute";
// container.style.top = "0";
// container.style.left = "0";
// container.style.fontFamily = fontFamily;
// container.style.fontSize = `${fontSize}${unit}`;
// container.style.lineHeight = `${lineHeight}${unit}`;
// document.body.appendChild(container);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/azertypow/Documents/appDev/_LayDesc/LayDesc-api/src/main.ts */"./src/main.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=layDesc.js.map