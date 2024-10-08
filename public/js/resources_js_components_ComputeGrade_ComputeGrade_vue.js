(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_ComputeGrade_ComputeGrade_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComputeGrade/ComputeGrade.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComputeGrade/ComputeGrade.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      addProjectModel: false,
      // For opening/closing the upload modal
      editGradeModel: false,
      // For opening/closing the edit modal
      selectedFile: null,
      // Store the selected file for upload
      uploadMessage: null,
      // To store success/error messages
      grades: [],
      // Store the grades fetched from the API
      currentGrade: null // Store the current grade being edited

    };
  },
  methods: {
    // Method to fetch grades from the API
    getGrades: function getGrades() {
      var _this = this;

      this.axios.get("/api/v1/grades").then(function (response) {
        _this.grades = response.data;
      })["catch"](function (error) {
        console.error("Error fetching grades:", error);
      });
    },
    // Method to handle file change for upload
    onFileChange: function onFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    // Method to upload the selected file
    uploadFile: function uploadFile() {
      var _this2 = this;

      var formData = new FormData();
      formData.append("file", this.selectedFile);
      this.axios.post("/api/v1/grades/upload", formData).then(function (response) {
        _this2.uploadMessage = response.data.message;
        _this2.addProjectModel = false; // Close the modal

        _this2.getGrades(); // Refresh the grades list

      })["catch"](function (error) {
        _this2.uploadMessage = error.response.data.message || "Error uploading file.";
      });
    },
    // Method to edit a specific grade
    editGrade: function editGrade(grade) {
      this.currentGrade = _objectSpread({}, grade); // Create a copy of the grade for editing

      this.editGradeModel = true; // Show the edit modal
    },
    // Method to submit the updated grade
    // submitUpdatedGrade() {
    //     this.axios
    //         .put(
    //             `/api/v1/grades/${this.currentGrade.id}`,
    //             this.currentGrade
    //         )
    //         .then(response => {
    //             this.getGrades(); // Refresh the grades list
    //             this.editGradeModel = false; // Close the modal
    //         })
    //         .catch(error => {
    //             console.error("Error updating grade:", error);
    //         });
    // },
    submitUpdatedGrade: function submitUpdatedGrade() {
      var _this3 = this;

      this.axios.put("/api/v1/grades/".concat(this.currentGrade.id), {
        written_total_score: this.currentGrade.written,
        performance_total_score: this.currentGrade.performance,
        midterm_total_score: this.currentGrade.midterm,
        finalexam_total_score: this.currentGrade.finalexam
      }).then(function (response) {
        _this3.getGrades(); // Refresh the grades list


        _this3.editGradeModel = false; // Close the modal
      })["catch"](function (error) {
        console.error("Error updating grade:", error);
      });
    },
    // Method to delete a specific grade
    deleteGrade: function deleteGrade(id) {
      var _this4 = this;

      if (confirm("Are you sure you want to delete this grade?")) {
        this.axios["delete"]("/api/v1/grades/".concat(id)).then(function (response) {
          _this4.getGrades(); // Refresh the grades list

        })["catch"](function (error) {
          console.error("Error deleting grade:", error);
        });
      }
    },
    // Method to print the grades
    printGrade: function printGrade() {
      window.print(); // Use window.print() to print the current page
    }
  },
  mounted: function mounted() {
    this.getGrades(); // Fetch grades when the component is mounted
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComputeGrade/ComputeGrade.vue?vue&type=style&index=0&id=667e0274&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComputeGrade/ComputeGrade.vue?vue&type=style&index=0&id=667e0274&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.modal[data-v-667e0274] {\r\n    z-index: 1050; /* Ensure the modal is above other content */\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/ComputeGrade/ComputeGrade.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/ComputeGrade/ComputeGrade.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ComputeGrade_vue_vue_type_template_id_667e0274_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComputeGrade.vue?vue&type=template&id=667e0274&scoped=true& */ "./resources/js/components/ComputeGrade/ComputeGrade.vue?vue&type=template&id=667e0274&scoped=true&");
/* harmony import */ var _ComputeGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComputeGrade.vue?vue&type=script&lang=js& */ "./resources/js/components/ComputeGrade/ComputeGrade.vue?vue&type=script&lang=js&");
/* harmony import */ var _ComputeGrade_vue_vue_type_style_index_0_id_667e0274_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComputeGrade.vue?vue&type=style&index=0&id=667e0274&scoped=true&lang=css& */ "./resources/js/components/ComputeGrade/ComputeGrade.vue?vue&type=style&index=0&id=667e0274&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _ComputeGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ComputeGrade_vue_vue_type_template_id_667e0274_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ComputeGrade_vue_vue_type_template_id_667e0274_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "667e0274",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ComputeGrade/ComputeGrade.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ComputeGrade/ComputeGrade.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/ComputeGrade/ComputeGrade.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComputeGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComputeGrade.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComputeGrade/ComputeGrade.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComputeGrade_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/ComputeGrade/ComputeGrade.vue?vue&type=template&id=667e0274&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/ComputeGrade/ComputeGrade.vue?vue&type=template&id=667e0274&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComputeGrade_vue_vue_type_template_id_667e0274_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComputeGrade_vue_vue_type_template_id_667e0274_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComputeGrade_vue_vue_type_template_id_667e0274_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComputeGrade.vue?vue&type=template&id=667e0274&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComputeGrade/ComputeGrade.vue?vue&type=template&id=667e0274&scoped=true&");


/***/ }),

/***/ "./resources/js/components/ComputeGrade/ComputeGrade.vue?vue&type=style&index=0&id=667e0274&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/ComputeGrade/ComputeGrade.vue?vue&type=style&index=0&id=667e0274&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ComputeGrade_vue_vue_type_style_index_0_id_667e0274_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComputeGrade.vue?vue&type=style&index=0&id=667e0274&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComputeGrade/ComputeGrade.vue?vue&type=style&index=0&id=667e0274&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ComputeGrade_vue_vue_type_style_index_0_id_667e0274_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ComputeGrade_vue_vue_type_style_index_0_id_667e0274_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ComputeGrade_vue_vue_type_style_index_0_id_667e0274_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ComputeGrade_vue_vue_type_style_index_0_id_667e0274_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComputeGrade/ComputeGrade.vue?vue&type=template&id=667e0274&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComputeGrade/ComputeGrade.vue?vue&type=template&id=667e0274&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header border-0" }, [
              _c("div", { staticClass: "row align-items-center" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "col text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          _vm.addProjectModel = true
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                                    Upload Excel File\n                                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button" },
                      on: { click: _vm.printGrade }
                    },
                    [
                      _vm._v(
                        "\n                                    Print Grade\n                                "
                      )
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "table",
              { staticClass: "table align-items-center table-flush" },
              [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.grades, function(grade) {
                      return _c("tr", { key: grade.id }, [
                        _c("td", [_vm._v(_vm._s(grade.student_name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(grade.written))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(grade.performance))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(grade.midterm))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(grade.finalexam))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(grade.total_weighted_score))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(grade.final_numerical_grade))]),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            class: {
                              "text-success": grade.remarks === "Passed",
                              "text-danger": grade.remarks === "Failed"
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(grade.remarks) +
                                "\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-warning",
                              on: {
                                click: function($event) {
                                  return _vm.editGrade(grade)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-edit" }),
                              _vm._v(
                                " Edit\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger ml-2",
                              on: {
                                click: function($event) {
                                  return _vm.deleteGrade(grade.id)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-trash" }),
                              _vm._v(
                                " Delete\n                                    "
                              )
                            ]
                          )
                        ])
                      ])
                    }),
                    _vm._v(" "),
                    _vm.grades.length === 0
                      ? _c("tr", { staticClass: "text-center" }, [
                          _c("td", { attrs: { colspan: "8" } }, [
                            _vm._v("No Data Found")
                          ])
                        ])
                      : _vm._e()
                  ],
                  2
                )
              ]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.editGradeModel
      ? _c(
          "div",
          {
            staticClass: "modal fade show",
            staticStyle: { display: "block" },
            attrs: { tabindex: "-1" }
          },
          [
            _c("div", { staticClass: "modal-dialog" }, [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c("h5", { staticClass: "modal-title" }, [
                    _vm._v("Edit Grade")
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          _vm.editGradeModel = false
                        }
                      }
                    },
                    [_c("span", [_vm._v("×")])]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c(
                    "form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.submitUpdatedGrade($event)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "form-row" }, [
                        _c("div", { staticClass: "form-group col" }, [
                          _c("label", { attrs: { for: "student_name" } }, [
                            _vm._v("Student Name")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.currentGrade.student_name,
                                expression: "currentGrade.student_name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.currentGrade.student_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.currentGrade,
                                  "student_name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col" }, [
                          _c("label", { attrs: { for: "written" } }, [
                            _vm._v("Written")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.number",
                                value: _vm.currentGrade.written,
                                expression: "currentGrade.written",
                                modifiers: { number: true }
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "number", required: "" },
                            domProps: { value: _vm.currentGrade.written },
                            on: {
                              input: [
                                function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.currentGrade,
                                    "written",
                                    _vm._n($event.target.value)
                                  )
                                },
                                _vm.calculateGrade
                              ],
                              blur: function($event) {
                                return _vm.$forceUpdate()
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-row" }, [
                        _c("div", { staticClass: "form-group col" }, [
                          _c("label", { attrs: { for: "performance" } }, [
                            _vm._v("Performance")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.number",
                                value: _vm.currentGrade.performance,
                                expression:
                                  "\n                                        currentGrade.performance\n                                    ",
                                modifiers: { number: true }
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "number", required: "" },
                            domProps: { value: _vm.currentGrade.performance },
                            on: {
                              input: [
                                function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.currentGrade,
                                    "performance",
                                    _vm._n($event.target.value)
                                  )
                                },
                                _vm.calculateGrade
                              ],
                              blur: function($event) {
                                return _vm.$forceUpdate()
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col" }, [
                          _c("label", { attrs: { for: "midterm" } }, [
                            _vm._v("Midterm")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.number",
                                value: _vm.currentGrade.midterm,
                                expression: "currentGrade.midterm",
                                modifiers: { number: true }
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "number", required: "" },
                            domProps: { value: _vm.currentGrade.midterm },
                            on: {
                              input: [
                                function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.currentGrade,
                                    "midterm",
                                    _vm._n($event.target.value)
                                  )
                                },
                                _vm.calculateGrade
                              ],
                              blur: function($event) {
                                return _vm.$forceUpdate()
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-row" }, [
                        _c("div", { staticClass: "form-group col" }, [
                          _c("label", { attrs: { for: "finalexam" } }, [
                            _vm._v("Final Exam")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.number",
                                value: _vm.currentGrade.finalexam,
                                expression: "currentGrade.finalexam",
                                modifiers: { number: true }
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "number", required: "" },
                            domProps: { value: _vm.currentGrade.finalexam },
                            on: {
                              input: [
                                function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.currentGrade,
                                    "finalexam",
                                    _vm._n($event.target.value)
                                  )
                                },
                                _vm.calculateGrade
                              ],
                              blur: function($event) {
                                return _vm.$forceUpdate()
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col" }, [
                          _c(
                            "label",
                            { attrs: { for: "total_weighted_score" } },
                            [_vm._v("Total Weighted Score")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.number",
                                value: _vm.currentGrade.total_weighted_score,
                                expression:
                                  "\n                                        currentGrade.total_weighted_score\n                                    ",
                                modifiers: { number: true }
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "number", readonly: "" },
                            domProps: {
                              value: _vm.currentGrade.total_weighted_score
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.currentGrade,
                                  "total_weighted_score",
                                  _vm._n($event.target.value)
                                )
                              },
                              blur: function($event) {
                                return _vm.$forceUpdate()
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-row" }, [
                        _c("div", { staticClass: "form-group col" }, [
                          _c(
                            "label",
                            { attrs: { for: "final_numerical_grade" } },
                            [_vm._v("Final Numerical Grade")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.number",
                                value: _vm.currentGrade.final_numerical_grade,
                                expression:
                                  "\n                                        currentGrade.final_numerical_grade\n                                    ",
                                modifiers: { number: true }
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "number", readonly: "" },
                            domProps: {
                              value: _vm.currentGrade.final_numerical_grade
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.currentGrade,
                                  "final_numerical_grade",
                                  _vm._n($event.target.value)
                                )
                              },
                              blur: function($event) {
                                return _vm.$forceUpdate()
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col" }, [
                          _c("label", { attrs: { for: "remarks" } }, [
                            _vm._v("Remarks")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.currentGrade.remarks,
                                expression: "currentGrade.remarks"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.currentGrade.remarks },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.currentGrade,
                                  "remarks",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "submit" }
                        },
                        [
                          _vm._v(
                            "\n                            Update Grade\n                        "
                          )
                        ]
                      )
                    ]
                  )
                ])
              ])
            ])
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.addProjectModel
      ? _c(
          "div",
          {
            staticClass: "modal fade show",
            staticStyle: { display: "block" },
            attrs: { tabindex: "-1" }
          },
          [
            _c("div", { staticClass: "modal-dialog" }, [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c("h5", { staticClass: "modal-title" }, [
                    _vm._v("Upload Excel File")
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          _vm.addProjectModel = false
                        }
                      }
                    },
                    [_c("span", [_vm._v("×")])]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c(
                    "form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.uploadFile($event)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          attrs: { type: "file", accept: ".xlsx, .xls" },
                          on: { change: _vm.onFileChange }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "submit" }
                        },
                        [
                          _vm._v(
                            "\n                            Upload\n                        "
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm.uploadMessage
                    ? _c("div", { staticClass: "mt-2" }, [
                        _c("p", [_vm._v(_vm._s(_vm.uploadMessage))])
                      ])
                    : _vm._e()
                ])
              ])
            ])
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h3", { staticClass: "mb-0" }, [_vm._v("Computes Grade Table")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Student Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Written")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Performance")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Midterm")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Final Exam")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Total Weighted Score")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [
          _vm._v("Final Numerical Grade")
        ]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Remarks")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComputeGrade/ComputeGrade.vue?vue&type=style&index=0&id=667e0274&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComputeGrade/ComputeGrade.vue?vue&type=style&index=0&id=667e0274&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComputeGrade.vue?vue&type=style&index=0&id=667e0274&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ComputeGrade/ComputeGrade.vue?vue&type=style&index=0&id=667e0274&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4d953ba8", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);