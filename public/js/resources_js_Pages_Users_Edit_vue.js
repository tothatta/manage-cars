"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Users_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Edit.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'users_edit',
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
        name: '',
        email: '',
        phone: '',
        status: '',
        profile: ''
      },
      errors: {},
      userId: this.$route.params.id,
      cars: []
    };
  },
  methods: {
    deleteUser: function deleteUser() {
      var that = this;
      this.errors = {};
      axios__WEBPACK_IMPORTED_MODULE_0___default().delete("/api/users/" + that.userId, {
        headers: {
          Authorization: 'Bearer ' + that.token
        }
      }).then(function (response) {
        if (response.data.status === 'success') {
          that.$router.push({
            name: 'users_index'
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
    getUser: function getUser() {
      var that = this;
      this.errors = {};
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/users/" + that.userId, {
        headers: {
          Authorization: 'Bearer ' + that.token
        }
      }).then(function (response) {
        if (response.data.status === 'success') {
          that.form.name = response.data.data.name;
          that.form.email = response.data.data.email;
          that.form.phone = response.data.data.phone;
          that.form.status = response.data.data.status;
          that.form.profile = response.data.data.profile;
          that.cars = response.data.data.cars;
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
      axios__WEBPACK_IMPORTED_MODULE_0___default().put("/api/users/" + that.userId, that.form, {
        headers: {
          Authorization: 'Bearer ' + that.token
        }
      }).then(function (response) {
        if (response.data.status === 'success') {
          that.$router.push({
            name: 'users_index'
          });
        } else {
          console.log(response.data);

          for (var error in response.data.messages) {
            that.$set(that.errors, error, response.data.messages[error]);
          }
        }
      })["catch"](function (errorResponse) {
        console.log(errorResponse.response, errorResponse);

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
    isAdmin: function isAdmin() {
      return this.$store.getters.getProfile === 'admin';
    }
  },
  mounted: function mounted() {
    if (this.isAdmin()) {
      this.getUser();
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/Users/Edit.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Users/Edit.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_42efdfba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=42efdfba& */ "./resources/js/Pages/Users/Edit.vue?vue&type=template&id=42efdfba&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Users/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Edit_vue_vue_type_template_id_42efdfba___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_42efdfba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Users/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Users/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Users/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Users/Edit.vue?vue&type=template&id=42efdfba&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Users/Edit.vue?vue&type=template&id=42efdfba& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_42efdfba___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_42efdfba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_42efdfba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=42efdfba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Edit.vue?vue&type=template&id=42efdfba&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Edit.vue?vue&type=template&id=42efdfba&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Edit.vue?vue&type=template&id=42efdfba& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
        { staticClass: "col-12 col-lg-8 offset-0 offset-lg-2 box-container" },
        [
          _c("h1", { staticClass: "mb-4" }, [_vm._v("Munkat??rs adatai")]),
          _vm._v(" "),
          _c("div", { staticClass: "mb-3 text-end" }, [
            _c(
              "button",
              { staticClass: "btn btn-danger", on: { click: _vm.deleteUser } },
              [_vm._v("Munkat??rs t??rl??se")]
            )
          ]),
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
                _c("label", { attrs: { for: "name" } }, [
                  _vm._v("Munkat??rs neve:")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.name,
                      expression: "form.name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", id: "name" },
                  domProps: { value: _vm.form.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "form-text text-danger" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.hasError("name")) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-3" }, [
                _c("label", { attrs: { for: "email" } }, [
                  _vm._v("Munkat??rs E-mail c??me:")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.email,
                      expression: "form.email"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "email", id: "email" },
                  domProps: { value: _vm.form.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "email", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "form-text text-danger" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.hasError("email")) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-3" }, [
                _c("label", { attrs: { for: "phone" } }, [
                  _vm._v("Munkat??rs telefonsz??ma:")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.phone,
                      expression: "form.phone"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", id: "phone" },
                  domProps: { value: _vm.form.phone },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "phone", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "form-text text-danger" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.hasError("phone")) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-3" }, [
                _c("label", { attrs: { for: "status" } }, [_vm._v("St??tusz:")]),
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
                      _vm._v("Akt??v")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "inactive" } }, [
                      _vm._v("Inakt??v")
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
              _c("div", { staticClass: "mb-3" }, [
                _c("label", { attrs: { for: "profile" } }, [
                  _vm._v("Jogosults??g:")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.profile,
                        expression: "form.profile"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "profile" },
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
                          "profile",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "user" } }, [
                      _vm._v("Munkat??rs")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "admin" } }, [
                      _vm._v("Admin")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-text text-danger" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.hasError("profile")) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-end mt-4" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn",
                      attrs: { to: { name: "users_index" } }
                    },
                    [_vm._v("M??gsem")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("Ment??s")]
                  )
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("h2", [_vm._v("Munkat??rs g??pj??rm??vei")]),
          _vm._v(" "),
          _c("div", { staticClass: "table-responsive" }, [
            _c("table", { staticClass: "table table-striped table-hover" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.cars, function(car, index) {
                  return _c("tr", [
                    _c("td", [_vm._v(_vm._s(car.carTypeName))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(car.license))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(car.km))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(car.vintage))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-info",
                            attrs: {
                              to: { name: "cars_edit", params: { id: car.id } }
                            }
                          },
                          [_vm._v("R??szletek")]
                        )
                      ],
                      1
                    )
                  ])
                }),
                0
              )
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Aut?? T??pus")]),
        _vm._v(" "),
        _c("th", [_vm._v("Rendsz??m")]),
        _vm._v(" "),
        _c("th", [_vm._v("Km ??ra ??ll??s")]),
        _vm._v(" "),
        _c("th", [_vm._v("??vj??rat")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);