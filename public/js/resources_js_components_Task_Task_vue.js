(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Task_Task_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task/Task.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task/Task.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Dashboard",
  data: function data() {
    return {
      addPostData: {
        name: null,
        status: null,
        responsible_user: null,
        due_date: null
      },
      editPostData: {
        id: null,
        name: null,
        status: null,
        responsible_user: null,
        due_date: null
      },
      deletePostData: {
        id: null
      },
      items: {},
      status: {
        pending: "PENDING",
        completed: "COMPLETED"
      },
      addTaskModel: false,
      editTaskModel: false,
      activeTooltip1: false,
      deleteDialog: false,
      dataNotFound: false
    };
  },
  methods: {
    getTask: function getTask() {
      var _this = this;

      var loading = this.block("taskLoading");
      this.axios.get("/api/v1/tasks").then(function (response) {
        _this.items = response.data.data;
        loading.close();
        _this.dataNotFound = false;
      })["catch"](function (error) {
        _this.items = null;
        console.log(error.response.data);
        _this.dataNotFound = true;
        loading.close();
      });
    },
    addTask: function addTask() {
      var _this2 = this;

      var Loading = this.block("addTaskForm");
      this.axios.post('api/v1/add/task', this.addPostData).then(function (response) {
        if (response.data.status === true) {
          document.getElementById("addTaskForm").reset();
          Loading.close();
          _this2.addTaskModel = false;

          _this2.getTask();
        } else {
          _this2.errorNotification(response.data.message);

          Loading.close();
        }
      })["catch"](function (error) {
        _this2.errorNotification(error.response.data.message);

        Loading.close();
      });
    },
    updateTask: function updateTask() {
      var _this3 = this;

      var Loading = this.block("editTaskForm");
      this.axios.put("/api/v1/update/task", this.editPostData).then(function (response) {
        _this3.editTaskModel = false;

        _this3.successNotification(response.data.message);

        Loading.close();

        _this3.getTask();
      })["catch"](function (error) {
        _this3.editTaskModel = false;

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
      if (id == '') {
        this.errorNotification("Something we Wrong..");
      }

      this.deleteDialog = true;
      this.deletePostData.id = id;
    },
    deleteTask: function deleteTask() {
      var _this4 = this;

      var Loading = this.block("deleteLoading");
      this.axios["delete"]("/api/v1/delete/task/" + this.deletePostData.id).then(function (response) {
        if (response.data.status === true) {
          _this4.deleteDialog = false;

          _this4.successNotification(response.data.message);

          _this4.getTask();

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
      this.editTaskModel = true;
      this.axios.get("/api/v1/get/task/" + id).then(function (response) {
        var item = response.data.data;
        _this5.editPostData.name = item.name;
        _this5.editPostData.due_date = item.due_date;
        _this5.editPostData.responsible_user = item.responsible_user;
        _this5.editPostData.status = item.status;
        _this5.$refs.getStatus.value = item.status;
      })["catch"](function (error) {
        console.log(error.response.data);
      });
    }
  },
  mounted: function mounted() {
    this.getTask();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task/Task.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task/Task.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn i:not(:last-child), .btn svg:not(:last-child) {\r\n    margin-right: unset;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/Task/Task.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Task/Task.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.vue?vue&type=script&lang=js& */ "./resources/js/components/Task/Task.vue?vue&type=script&lang=js&");
/* harmony import */ var _Task_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Task/Task.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _Task_vue_vue_type_custom_index_0_blockType_div_class_card_header_20border_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Task.vue?vue&type=custom&index=0&blockType=div&class=card-header%20border-0 */ "./resources/js/components/Task/Task.vue?vue&type=custom&index=0&blockType=div&class=card-header%20border-0");
/* harmony import */ var _Task_vue_vue_type_custom_index_0_blockType_div_class_card_header_20border_0__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Task_vue_vue_type_custom_index_0_blockType_div_class_card_header_20border_0__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Task_vue_vue_type_custom_index_1_blockType_div_class_table_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Task.vue?vue&type=custom&index=1&blockType=div&class=table-responsive */ "./resources/js/components/Task/Task.vue?vue&type=custom&index=1&blockType=div&class=table-responsive");
/* harmony import */ var _Task_vue_vue_type_custom_index_1_blockType_div_class_table_responsive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Task_vue_vue_type_custom_index_1_blockType_div_class_table_responsive__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Task_vue_vue_type_custom_index_2_blockType_vs_dialog_v_model_addTaskModel_prevent_close_true_blur_true__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Task.vue?vue&type=custom&index=2&blockType=vs-dialog&v-model=addTaskModel&prevent-close=true&blur=true */ "./resources/js/components/Task/Task.vue?vue&type=custom&index=2&blockType=vs-dialog&v-model=addTaskModel&prevent-close=true&blur=true");
/* harmony import */ var _Task_vue_vue_type_custom_index_2_blockType_vs_dialog_v_model_addTaskModel_prevent_close_true_blur_true__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Task_vue_vue_type_custom_index_2_blockType_vs_dialog_v_model_addTaskModel_prevent_close_true_blur_true__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Task_vue_vue_type_custom_index_3_blockType_vs_dialog_v_model_editTaskModel_prevent_close_true_blur_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Task.vue?vue&type=custom&index=3&blockType=vs-dialog&v-model=editTaskModel&prevent-close=true&blur=true */ "./resources/js/components/Task/Task.vue?vue&type=custom&index=3&blockType=vs-dialog&v-model=editTaskModel&prevent-close=true&blur=true");
/* harmony import */ var _Task_vue_vue_type_custom_index_3_blockType_vs_dialog_v_model_editTaskModel_prevent_close_true_blur_true__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Task_vue_vue_type_custom_index_3_blockType_vs_dialog_v_model_editTaskModel_prevent_close_true_blur_true__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Task_vue_vue_type_custom_index_4_blockType_vs_dialog_width_550px_not_center_true_v_model_deleteDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Task.vue?vue&type=custom&index=4&blockType=vs-dialog&width=550px&not-center=true&v-model=deleteDialog */ "./resources/js/components/Task/Task.vue?vue&type=custom&index=4&blockType=vs-dialog&width=550px&not-center=true&v-model=deleteDialog");
/* harmony import */ var _Task_vue_vue_type_custom_index_4_blockType_vs_dialog_width_550px_not_center_true_v_model_deleteDialog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Task_vue_vue_type_custom_index_4_blockType_vs_dialog_width_550px_not_center_true_v_model_deleteDialog__WEBPACK_IMPORTED_MODULE_7__);
var render, staticRenderFns
;

;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */
;
if (typeof (_Task_vue_vue_type_custom_index_0_blockType_div_class_card_header_20border_0__WEBPACK_IMPORTED_MODULE_3___default()) === 'function') _Task_vue_vue_type_custom_index_0_blockType_div_class_card_header_20border_0__WEBPACK_IMPORTED_MODULE_3___default()(component)
;
if (typeof (_Task_vue_vue_type_custom_index_1_blockType_div_class_table_responsive__WEBPACK_IMPORTED_MODULE_4___default()) === 'function') _Task_vue_vue_type_custom_index_1_blockType_div_class_table_responsive__WEBPACK_IMPORTED_MODULE_4___default()(component)
;
if (typeof (_Task_vue_vue_type_custom_index_2_blockType_vs_dialog_v_model_addTaskModel_prevent_close_true_blur_true__WEBPACK_IMPORTED_MODULE_5___default()) === 'function') _Task_vue_vue_type_custom_index_2_blockType_vs_dialog_v_model_addTaskModel_prevent_close_true_blur_true__WEBPACK_IMPORTED_MODULE_5___default()(component)
;
if (typeof (_Task_vue_vue_type_custom_index_3_blockType_vs_dialog_v_model_editTaskModel_prevent_close_true_blur_true__WEBPACK_IMPORTED_MODULE_6___default()) === 'function') _Task_vue_vue_type_custom_index_3_blockType_vs_dialog_v_model_editTaskModel_prevent_close_true_blur_true__WEBPACK_IMPORTED_MODULE_6___default()(component)
;
if (typeof (_Task_vue_vue_type_custom_index_4_blockType_vs_dialog_width_550px_not_center_true_v_model_deleteDialog__WEBPACK_IMPORTED_MODULE_7___default()) === 'function') _Task_vue_vue_type_custom_index_4_blockType_vs_dialog_width_550px_not_center_true_v_model_deleteDialog__WEBPACK_IMPORTED_MODULE_7___default()(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Task/Task.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Task/Task.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Task/Task.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Task.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task/Task.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Task/Task.vue?vue&type=custom&index=0&blockType=div&class=card-header%20border-0":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Task/Task.vue?vue&type=custom&index=0&blockType=div&class=card-header%20border-0 ***!
  \******************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./resources/js/components/Task/Task.vue?vue&type=custom&index=1&blockType=div&class=table-responsive":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Task/Task.vue?vue&type=custom&index=1&blockType=div&class=table-responsive ***!
  \************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./resources/js/components/Task/Task.vue?vue&type=custom&index=2&blockType=vs-dialog&v-model=addTaskModel&prevent-close=true&blur=true":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/js/components/Task/Task.vue?vue&type=custom&index=2&blockType=vs-dialog&v-model=addTaskModel&prevent-close=true&blur=true ***!
  \*********************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./resources/js/components/Task/Task.vue?vue&type=custom&index=3&blockType=vs-dialog&v-model=editTaskModel&prevent-close=true&blur=true":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/components/Task/Task.vue?vue&type=custom&index=3&blockType=vs-dialog&v-model=editTaskModel&prevent-close=true&blur=true ***!
  \**********************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./resources/js/components/Task/Task.vue?vue&type=custom&index=4&blockType=vs-dialog&width=550px&not-center=true&v-model=deleteDialog":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/components/Task/Task.vue?vue&type=custom&index=4&blockType=vs-dialog&width=550px&not-center=true&v-model=deleteDialog ***!
  \********************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./resources/js/components/Task/Task.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Task/Task.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Task.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task/Task.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task/Task.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task/Task.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Task.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task/Task.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("189753b6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);