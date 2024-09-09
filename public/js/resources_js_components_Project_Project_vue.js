(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Project_Project_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Project/Project.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Project/Project.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  name: "Dashboard",
  data: function data() {
    return {
      addPostData: {
        name: null,
        budget: null,
        status: null,
        completion: null,
        responsible_user: null
      },
      editPostData: {
        id: null,
        name: null,
        budget: null,
        status: null,
        completion: null,
        responsible_user: null
      },
      deletePostData: {
        id: null
      },
      // items: [
      //     {
      //         id: 1,
      //         name: "Project Alpha",
      //         budget: 5000,
      //         responsible_user: "John Doe",
      //         status: "PENDING",
      //         completion: 30,
      //         created_at: "2024-09-01"
      //     },
      //     {
      //         id: 2,
      //         name: "Project Beta",
      //         budget: 12000,
      //         responsible_user: "Jane Smith",
      //         status: "COMPLETED",
      //         completion: 100,
      //         created_at: "2024-08-15"
      //     },
      //     {
      //         id: 3,
      //         name: "Project Gamma",
      //         budget: 8000,
      //         responsible_user: "Mark Lee",
      //         status: "SCHEDULE",
      //         completion: 70,
      //         created_at: "2024-07-10"
      //     }
      // ],
      addProjectModel: false,
      editProjectModel: false,
      activeTooltip1: false,
      deleteDialog: false,
      dataNotFound: false
    };
  },
  methods: {
    getProject: function getProject() {
      var _this = this;

      var loading = this.block("projectLoading");
      this.axios.get("/api/v1/projects").then(function (response) {
        _this.items = response.data.data;
        console.log(response.data.data);
        _this.dataNotFound = false;
        loading.close();
      })["catch"](function (error) {
        _this.items = null;
        _this.dataNotFound = true;
        console.log(error.response.data);
        loading.close();
      });
    },
    addProject: function addProject() {
      var _this2 = this;

      var Loading = this.block("addProjectForm");
      this.axios.post("api/v1/add/project", this.addPostData).then(function (response) {
        if (response.data.status === true) {
          _this2.$refs.resetForm.reset();

          Loading.close();
          _this2.addProjectModel = false;

          _this2.getProject();
        } else {
          _this2.errorNotification(response.data.message);

          Loading.close();
        }
      })["catch"](function (error) {
        _this2.errorNotification(error.response.data.message);

        Loading.close();
      });
    },
    updateProject: function updateProject() {
      var _this3 = this;

      var Loading = this.block("editProjectForm");
      this.axios.put("/api/v1/update/project", this.editPostData).then(function (response) {
        _this3.editProjectModel = false;

        _this3.successNotification(response.data.message);

        Loading.close();

        _this3.getProject();
      })["catch"](function (error) {
        _this3.editProjectModel = false;

        _this3.errorNotification(error.response.data.message);

        Loading.close();
      });
    },
    onChangeStatus: function onChangeStatus(event) {
      this.addPostData.status = event.target.value;
    },
    onEditChangeStatus: function onEditChangeStatus(event) {
      this.editPostData.status = event.target.value;
    },
    deleteBtn: function deleteBtn(id) {
      if (id == "") {
        this.errorNotification("Something we Wrong..");
      }

      this.deleteDialog = true;
      this.deletePostData.id = id;
    },
    deleteProject: function deleteProject() {
      var _this4 = this;

      var Loading = this.block("deleteLoading");
      this.axios["delete"]("/api/v1/delete/project/" + this.deletePostData.id).then(function (response) {
        if (response.data.status === true) {
          _this4.deleteDialog = false;

          _this4.successNotification(response.data.message);

          _this4.getProject();

          Loading.close();
        } else {
          _this4.deleteDialog = false;

          _this4.errorNotification(response.data.message);

          Loading.close();
        }
      })["catch"](function (error) {
        _this4.deleteDialog = false;
        Loading.close();

        _this4.errorNotification(error.response.data.message);
      });
    },
    editBtn: function editBtn(id) {
      var _this5 = this;

      this.editPostData.id = id;
      this.editProjectModel = true;
      this.axios.get("/api/v1/get/project/" + id).then(function (response) {
        var item = response.data.data;
        _this5.editPostData.name = item.name;
        _this5.editPostData.budget = item.budget;
        _this5.editPostData.completion = item.completion;
        _this5.editPostData.responsible_user = item.responsible_user;
        _this5.editPostData.status = item.status;
        _this5.$refs.getStatus.value = item.status;
      })["catch"](function (error) {
        console.log(error.response.data);
      });
    }
  },
  mounted: function mounted() {
    this.getProject();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Project/Project.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Project/Project.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn i:not(:last-child),\r\n.btn svg:not(:last-child) {\r\n    margin-right: unset;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/Project/Project.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Project/Project.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Project_vue_vue_type_template_id_07b994e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.vue?vue&type=template&id=07b994e8& */ "./resources/js/components/Project/Project.vue?vue&type=template&id=07b994e8&");
/* harmony import */ var _Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.vue?vue&type=script&lang=js& */ "./resources/js/components/Project/Project.vue?vue&type=script&lang=js&");
/* harmony import */ var _Project_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Project/Project.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Project_vue_vue_type_template_id_07b994e8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Project_vue_vue_type_template_id_07b994e8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Project/Project.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Project/Project.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Project/Project.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Project.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Project/Project.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Project/Project.vue?vue&type=template&id=07b994e8&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Project/Project.vue?vue&type=template&id=07b994e8& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_07b994e8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_07b994e8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_07b994e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Project.vue?vue&type=template&id=07b994e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Project/Project.vue?vue&type=template&id=07b994e8&");


/***/ }),

/***/ "./resources/js/components/Project/Project.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Project/Project.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Project.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Project/Project.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Project/Project.vue?vue&type=template&id=07b994e8&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Project/Project.vue?vue&type=template&id=07b994e8& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("div", { staticClass: "container-fluid " }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col" }, [
            _c("div", { staticClass: "card", attrs: { id: "deleteLoading" } }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "table-responsive",
                  attrs: { id: "projectLoading" }
                },
                [
                  _c(
                    "table",
                    { staticClass: "table align-items-center table-flush" },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _vm._l(_vm.items, function(item) {
                        return _c(
                          "tbody",
                          { key: item.id, staticClass: "list" },
                          [
                            _c("tr", [
                              _c("th", { attrs: { scope: "row" } }, [
                                _c(
                                  "div",
                                  { staticClass: "media align-items-center" },
                                  [
                                    _c("div", { staticClass: "media-body" }, [
                                      _c(
                                        "span",
                                        { staticClass: "name mb-0 text-sm" },
                                        [_vm._v(_vm._s(item.name))]
                                      )
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "budget" }, [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(item.budget) +
                                    "\n                                    "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(item.responsible_user) +
                                    "\n                                    "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "span",
                                  { staticClass: "badge badge-dot mr-4" },
                                  [
                                    item.status == _vm.status.pending
                                      ? _c("i", { staticClass: "bg-warning" })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.status == _vm.status.completed
                                      ? _c("i", { staticClass: "bg-success" })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.status == _vm.status.delayed
                                      ? _c("i", { staticClass: "bg-danger" })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.status == _vm.status.schedule
                                      ? _c("i", { staticClass: "bg-info" })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "status" }, [
                                      _vm._v(_vm._s(item.status))
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  { staticClass: "d-flex align-items-center" },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "completion mr-2" },
                                      [
                                        _vm._v(
                                          _vm._s(item.completion) +
                                            "\n                                                %"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", [
                                      _c("div", { staticClass: "progress" }, [
                                        item.status == _vm.status.pending
                                          ? _c("div", {
                                              staticClass:
                                                "progress-bar bg-warning",
                                              style: {
                                                width: item.completion + "%"
                                              },
                                              attrs: { role: "progressbar" }
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        item.status == _vm.status.completed
                                          ? _c("div", {
                                              staticClass:
                                                "progress-bar bg-success",
                                              style: {
                                                width: item.completion + "%"
                                              },
                                              attrs: { role: "progressbar" }
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        item.status == _vm.status.delayed
                                          ? _c("div", {
                                              staticClass:
                                                "progress-bar bg-danger",
                                              style: {
                                                width: item.completion + "%"
                                              },
                                              attrs: { role: "progressbar" }
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        item.status == _vm.status.schedule
                                          ? _c("div", {
                                              staticClass:
                                                "progress-bar bg-info",
                                              style: {
                                                width: item.completion + "%"
                                              },
                                              attrs: { role: "progressbar" }
                                            })
                                          : _vm._e()
                                      ])
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  { staticClass: "d-flex align-items-center" },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "completion mr-2" },
                                      [_vm._v(_vm._s(item.created_at))]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  { staticStyle: { display: "inline-flex" } },
                                  [
                                    _c("div", [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-primary btn-sm",
                                          on: {
                                            click: function($event) {
                                              return _vm.editBtn(item.id)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "far fa-edit"
                                          }),
                                          _vm._v(" "),
                                          _vm._m(2, true)
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-danger btn-sm",
                                          attrs: { href: "#" },
                                          on: {
                                            click: function($event) {
                                              return _vm.deleteBtn(item.id)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-trash-alt"
                                          }),
                                          _vm._v(" "),
                                          _vm._m(3, true)
                                        ]
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ])
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _vm.dataNotFound ? _c("tbody", [_vm._m(4)]) : _vm._e()
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
      _c(
        "vs-dialog",
        {
          attrs: { "prevent-close": "", blur: "" },
          model: {
            value: _vm.addProjectModel,
            callback: function($$v) {
              _vm.addProjectModel = $$v
            },
            expression: "addProjectModel"
          }
        },
        [
          [
            _c("div", [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.addPost($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "file" } }, [
                      _vm._v("Upload Excel File")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      attrs: {
                        type: "file",
                        id: "file",
                        accept: ".xlsx, .xls"
                      },
                      on: {
                        change: function($event) {
                          return _vm.handleFileChange($event)
                        }
                      }
                    })
                  ])
                ]
              )
            ])
          ]
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("div", { staticClass: "row align-items-center" }, [
        _c("div", { staticClass: "col" }, [
          _c("h3", { staticClass: "mb-0" }, [_vm._v("Compute Grade Table")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c("th", { staticClass: "sort", attrs: { scope: "col" } }, [
          _vm._v("Action")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "sort", attrs: { scope: "col" } }, [
          _vm._v(
            "\n                                        Student Name\n                                    "
          )
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "sort", attrs: { scope: "col" } }, [
          _vm._v(
            "\n                                        Written\n                                    "
          )
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "sort", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "sort", attrs: { scope: "col" } }, [
          _vm._v(
            "\n                                        Midterm\n                                    "
          )
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "sort", attrs: { scope: "col" } }, [
          _vm._v("Final")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "sort", attrs: { scope: "col" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("strong", [_vm._v("Edit")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("strong", [_vm._v("Delete")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "text-center" }, [
      _c("td", { attrs: { colspan: "10" } }, [_vm._v("No Data Display")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Project/Project.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Project/Project.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Project.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Project/Project.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("13c63861", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);