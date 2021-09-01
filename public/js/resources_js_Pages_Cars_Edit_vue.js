"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Cars_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cars/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cars/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'cars_edit',
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)({
    loggedIn: function loggedIn(state) {
      return state.loggedIn;
    },
    profile: function profile(state) {
      return state.profile;
    },
    token: function token(state) {
      return state.token;
    }
  })),
  data: function data() {
    return {
      form: {
        car_type_id: '',
        license: '',
        km: '',
        vintage: '',
        status: '',
        user_id: ''
      },
      errors: {},
      typeOptions: [],
      userOptions: [],
      carId: this.$route.params.id
    };
  },
  methods: {
    getCar: function getCar() {
      var _this = this;

      var that = this;
      this.errors = {};
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/cars/" + that.carId, {
        headers: {
          Authorization: 'Bearer ' + that.token
        }
      }).then(function (response) {
        if (response.data.status === 'success') {
          that.form.car_type_id = response.data.data.car_type_id;
          that.form.license = response.data.data.license;
          that.form.km = response.data.data.km;
          that.form.vintage = response.data.data.vintage;
          that.form.status = response.data.data.status;

          if (_this.isAdmin()) {
            that.form.user_id = response.data.data.user_id;
          }
        } else {
          for (var error in response.data.messages) {
            that.$set(that.errors, error, response.data.messages[error]);
          }
        }
      })["catch"](function (errorResponse) {
        for (var error in errorResponse.response.data.messages) {
          that.$set(that.errors, error, errorResponse.response.data.messages[error]);
        }
      });
    },
    submitForm: function submitForm() {
      var that = this;
      this.errors = {};
      axios__WEBPACK_IMPORTED_MODULE_0___default().put("/api/cars/" + that.carId, that.form, {
        headers: {
          Authorization: 'Bearer ' + that.token
        }
      }).then(function (response) {
        if (response.data.status === 'success') {
          that.$router.push({
            name: 'cars_index'
          });
        } else {
          for (var error in response.data.messages) {
            that.$set(that.errors, error, response.data.messages[error]);
          }
        }
      })["catch"](function (errorResponse) {
        for (var error in errorResponse.response.data.messages) {
          that.$set(that.errors, error, errorResponse.response.data.messages[error]);
        }
      });
    },
    hasError: function hasError(modelKey) {
      for (var key in this.errors) {
        if (modelKey === key) {
          return this.errors[key][0];
        }
      }
    },
    getCarTypes: function getCarTypes() {
      var that = this;
      this.errors = {};
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/car-types', {
        headers: {
          Authorization: 'Bearer ' + that.token
        }
      }).then(function (response) {
        if (response.data.status === 'success') {
          for (var index in response.data.data) {
            that.typeOptions.push({
              id: response.data.data[index].id,
              name: response.data.data[index].name
            });
          }
        } else {
          for (var error in response.data.messages) {
            that.$set(that.errors, error, response.response.data.messages[error]);
          }
        }
      })["catch"](function (errorResponse) {
        for (var error in errorResponse.response.data.messages) {
          that.$set(that.errors, error, errorResponse.response.data.messages[error]);
        }
      });
    },
    getUsers: function getUsers() {
      var that = this;
      this.errors = {};
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/users', {
        headers: {
          Authorization: 'Bearer ' + that.token
        }
      }).then(function (response) {
        if (response.data.status === 'success') {
          for (var index in response.data.data) {
            that.userOptions.push({
              id: response.data.data[index].id,
              name: response.data.data[index].name
            });
          }
        } else {
          for (var error in response.data.messages) {
            that.$set(that.errors, error, response.data.messages[error]);
          }
        }
      })["catch"](function (errorResponse) {
        for (var error in errorResponse.response.data.messages) {
          that.$set(that.errors, error, errorResponse.response.data.messages[error]);
        }
      });
    },
    isAdmin: function isAdmin() {
      return this.$store.getters.getProfile === 'admin';
    }
  },
  mounted: function mounted() {
    this.getCarTypes();

    if (this.isAdmin()) {
      this.getUsers();
    }

    this.getCar();
  }
});

/***/ }),

/***/ "./resources/js/Pages/Cars/Edit.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/Cars/Edit.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_00e0d6c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=00e0d6c1& */ "./resources/js/Pages/Cars/Edit.vue?vue&type=template&id=00e0d6c1&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Cars/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Edit_vue_vue_type_template_id_00e0d6c1___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_00e0d6c1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Cars/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Cars/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Cars/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cars/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Cars/Edit.vue?vue&type=template&id=00e0d6c1&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Cars/Edit.vue?vue&type=template&id=00e0d6c1& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_00e0d6c1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_00e0d6c1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_00e0d6c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=00e0d6c1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cars/Edit.vue?vue&type=template&id=00e0d6c1&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cars/Edit.vue?vue&type=template&id=00e0d6c1&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cars/Edit.vue?vue&type=template&id=00e0d6c1& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row mt-5" }, [
      _c(
        "div",
        { staticClass: "col-12 col-lg-6 offset-0 offset-lg-3 box-container" },
        [
          _c("h1", { staticClass: "mb-4" }, [_vm._v("Új gépjármű felvitele")]),
          _vm._v(" "),
          _c(
            "form",
            {
              attrs: { action: "" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submitForm()
                }
              }
            },
            [
              _c("div", { staticClass: "mb-3" }, [
                _c("label", { attrs: { for: "type" } }, [
                  _vm._v("Gépjármű típusa")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.car_type_id,
                        expression: "form.car_type_id"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "type" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.form,
                          "car_type_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.typeOptions, function(option, index) {
                    return _c("option", { domProps: { value: option.id } }, [
                      _vm._v(_vm._s(option.name))
                    ])
                  }),
                  0
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-text text-danger" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.hasError("car_type_id")) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-3" }, [
                _c("label", { attrs: { for: "license" } }, [
                  _vm._v("Gépjármű rendszáma:")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.license,
                      expression: "form.license"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", id: "license" },
                  domProps: { value: _vm.form.license },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "license", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "form-text text-danger" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.hasError("license")) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-3" }, [
                _c("label", { attrs: { for: "km" } }, [
                  _vm._v("Gépjármű Km óra állása:")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.km,
                      expression: "form.km"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "number", min: "0", id: "km" },
                  domProps: { value: _vm.form.km },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "km", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "form-text text-danger" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.hasError("km")) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-3" }, [
                _c("label", { attrs: { for: "vintage" } }, [
                  _vm._v("Gépjármű évjárata:")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.vintage,
                      expression: "form.vintage"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "number",
                    min: "1900",
                    max: "2030",
                    id: "vintage"
                  },
                  domProps: { value: _vm.form.vintage },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "vintage", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "form-text text-danger" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.hasError("vintage")) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-3" }, [
                _c("label", { attrs: { for: "status" } }, [_vm._v("Státusz:")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.status,
                        expression: "form.status"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "status" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.form,
                          "status",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "active" } }, [
                      _vm._v("Aktív")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "inactive" } }, [
                      _vm._v("Inaktív")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-text text-danger" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.hasError("status")) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _vm.isAdmin()
                ? _c("div", { staticClass: "mb-3" }, [
                    _c("label", { attrs: { for: "user_id" } }, [
                      _vm._v("Munkatárs")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.user_id,
                            expression: "form.user_id"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { id: "user" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.form,
                              "user_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.userOptions, function(userOption, index) {
                        return _c(
                          "option",
                          { domProps: { value: userOption.id } },
                          [_vm._v(_vm._s(userOption.name))]
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-text text-danger" }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.hasError("car_type_id")) +
                          "\n                    "
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-end mt-4" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn",
                      attrs: { to: { name: "cars_index" } }
                    },
                    [_vm._v("Mégsem")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("Mentés")]
                  )
                ],
                1
              )
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);