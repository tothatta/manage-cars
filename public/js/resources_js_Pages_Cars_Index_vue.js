"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Cars_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cars/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cars/Index.vue?vue&type=script&lang=js& ***!
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'cars_index',
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
      filter: {
        type: '',
        license: '',
        user: ''
      },
      perPage: 10,
      total: 0,
      lastPage: 0,
      firstPage: 1,
      cars: [],
      errors: {},
      typeOptions: [],
      userOptions: [],
      currentPage: 1
    };
  },
  methods: {
    previousPage: function previousPage() {
      this.currentPage -= 1;
      this.getCars();
    },
    nextPage: function nextPage() {
      this.currentPage += 1;
      this.getCars();
    },
    getCars: function getCars() {
      var that = this;
      this.errors = {};
      var params = {};
      params = this.filter;
      params['page'] = this.currentPage;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/cars', {
        headers: {
          Authorization: 'Bearer ' + that.token
        },
        params: params
      }).then(function (response) {
        if (response.data.status === 'success') {
          that.cars = response.data.data.data;
          that.currentPage = response.data.data.current_page;
          that.total = response.data.data.total;
          that.lastPage = response.data.data.last_page;
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
    removeFilters: function removeFilters() {
      this.filter.type = '';
      this.filter.license = '';
      this.filter.user = '';
      this.getCars();
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
            that.$set(that.errors, error, response.data.messages[error]);
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
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/users?pagination=0', {
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

    this.getCars();
  }
});

/***/ }),

/***/ "./resources/js/Pages/Cars/Index.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Cars/Index.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_5cf1bb2b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=5cf1bb2b& */ "./resources/js/Pages/Cars/Index.vue?vue&type=template&id=5cf1bb2b&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Cars/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Index_vue_vue_type_template_id_5cf1bb2b___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_5cf1bb2b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Cars/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Cars/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Cars/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cars/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Cars/Index.vue?vue&type=template&id=5cf1bb2b&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Cars/Index.vue?vue&type=template&id=5cf1bb2b& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5cf1bb2b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5cf1bb2b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5cf1bb2b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=5cf1bb2b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cars/Index.vue?vue&type=template&id=5cf1bb2b&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cars/Index.vue?vue&type=template&id=5cf1bb2b&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cars/Index.vue?vue&type=template&id=5cf1bb2b& ***!
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
  return _c("div", { staticClass: "container mt-4 box-container" }, [
    _c("div", { staticClass: "row mb-3" }, [
      _c(
        "div",
        {
          staticClass:
            "col-12 d-flex justify-content-between align-items-center flex-wrap"
        },
        [
          _c("h1", [_vm._v("Gépjárművek")]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "btn btn-success",
              attrs: { to: { name: "cars_create" } }
            },
            [_vm._v("Új Gépjármű létrehozása")]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mb-3" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("h2", [
          _vm._v("\n                Szűrési lehetőségek\n            ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12 col-lg-4" }, [
            _c("label", { attrs: { for: "type" } }, [_vm._v("Típus")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.filter.type,
                    expression: "filter.type"
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
                      _vm.filter,
                      "type",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { value: "" } }, [_vm._v("Mind")]),
                _vm._v(" "),
                _vm._l(_vm.typeOptions, function(option, index) {
                  return _c("option", { domProps: { value: option.id } }, [
                    _vm._v(_vm._s(option.name))
                  ])
                })
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-lg-4" }, [
            _c("label", { attrs: { for: "license" } }, [_vm._v("Rendszám")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.filter.license,
                  expression: "filter.license"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "license" },
              domProps: { value: _vm.filter.license },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.filter, "license", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _vm.isAdmin()
            ? _c("div", { staticClass: "col-12 col-lg-4" }, [
                _c("label", { attrs: { for: "user" } }, [_vm._v("Munkatárs")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.filter.user,
                        expression: "filter.user"
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
                          _vm.filter,
                          "user",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [_vm._v("Mind")]),
                    _vm._v(" "),
                    _vm._l(_vm.userOptions, function(userOption, index) {
                      return _c(
                        "option",
                        { domProps: { value: userOption.id } },
                        [_vm._v(_vm._s(userOption.name))]
                      )
                    })
                  ],
                  2
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "col-12 d-flex justify-content-center justify-content-lg-end mt-3"
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary mr-3",
                  on: { click: _vm.getCars }
                },
                [_vm._v("Szűrés")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default",
                  on: { click: _vm.removeFilters }
                },
                [_vm._v("Szűrők törlése")]
              )
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "table-responsive" }, [
          _c("table", { staticClass: "table table-striped table-hover" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.cars, function(car, index) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(car.userName))]),
                  _vm._v(" "),
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
                        [_vm._v("Részletek")]
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
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-12" }, [
        _vm.lastPage > 1
          ? _c("div", { staticClass: "text-center" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: {
                    type: "button",
                    disabled: _vm.currentPage === _vm.firstPage
                  },
                  on: {
                    click: function($event) {
                      return _vm.previousPage()
                    }
                  }
                },
                [_vm._v("Previous page")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: {
                    type: "button",
                    disabled: _vm.currentPage === _vm.lastPage
                  },
                  on: {
                    click: function($event) {
                      return _vm.nextPage()
                    }
                  }
                },
                [_vm._v("Next page")]
              )
            ])
          : _vm._e()
      ])
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
        _c("th", [_vm._v("Munkatárs")]),
        _vm._v(" "),
        _c("th", [_vm._v("Autó Típus")]),
        _vm._v(" "),
        _c("th", [_vm._v("Rendszám")]),
        _vm._v(" "),
        _c("th", [_vm._v("Km óra állás")]),
        _vm._v(" "),
        _c("th", [_vm._v("Évjárat")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);