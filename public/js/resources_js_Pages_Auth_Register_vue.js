"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'register',
  data: function data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
        aszf: ''
      },
      errors: {}
    };
  },
  methods: {
    submitForm: function submitForm() {
      var _this = this;

      var that = this;
      this.errors = {};
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/registration", that.form).then(function (response) {
        if (response.data.status === 'success') {
          //Successful registration
          _this.$store.commit('login', [response.data.data.user.id, response.data.data.token, response.data.data.user.profile]);

          that.$router.push({
            name: 'cars_index'
          });
        } else {
          //Failed to register the user, show errors
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
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/Auth/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=e59c811e& */ "./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Auth/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=e59c811e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e& ***!
  \********************************************************************************************************************************************************************************************************************/
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
          _c("h1", { staticClass: "mb-4" }, [_vm._v("Regisztráció")]),
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
                _c("label", { attrs: { for: "name" } }, [_vm._v("Neve:")]),
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
                  _vm._v("E-mail címe:")
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
                  _vm._v("Telefonszáma:")
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
                _c("label", { attrs: { for: "password" } }, [
                  _vm._v("Jelszava")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.password,
                      expression: "form.password"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "password", id: "password" },
                  domProps: { value: _vm.form.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "password", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "form-text text-danger" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.hasError("password")) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-3" }, [
                _c("label", { attrs: { for: "password_confirmation" } }, [
                  _vm._v("Jelszó megerősítés")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.password_confirmation,
                      expression: "form.password_confirmation"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "password", id: "password_confirmation" },
                  domProps: { value: _vm.form.password_confirmation },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "password_confirmation",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "form-text text-danger" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.hasError("password_confirmation")) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-3" }, [
                _c(
                  "label",
                  { attrs: { for: "aszf" } },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.aszf,
                          expression: "form.aszf"
                        }
                      ],
                      attrs: { type: "checkbox", name: "aszf", id: "aszf" },
                      domProps: {
                        checked: Array.isArray(_vm.form.aszf)
                          ? _vm._i(_vm.form.aszf, null) > -1
                          : _vm.form.aszf
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.form.aszf,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(_vm.form, "aszf", $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.form,
                                  "aszf",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.form, "aszf", $$c)
                          }
                        }
                      }
                    }),
                    _vm._v(
                      "\n                        Regisztrációjával elfogadja az "
                    ),
                    _c("router-link", { attrs: { to: { name: "aszf" } } }, [
                      _vm._v("Átalános Szerződési Feltételeket")
                    ]),
                    _vm._v(" és "),
                    _c("router-link", { attrs: { to: { name: "data" } } }, [
                      _vm._v("Adatkezelési Nyilatkozatunkat.")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-text text-danger" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.hasError("aszf")) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "mt-4" }, [
                _c(
                  "p",
                  { staticClass: "form-text" },
                  [
                    _vm._v(
                      "\n                        Rendelkezik fiókkal? Kattintson "
                    ),
                    _c("router-link", { attrs: { to: { name: "login" } } }, [
                      _vm._v("ide")
                    ]),
                    _vm._v(" a bejelentkezéshez.\n                    ")
                  ],
                  1
                )
              ])
            ]
          )
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
    return _c("div", { staticClass: "text-end mt-4" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Regisztrálok")]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);