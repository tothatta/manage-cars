"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[400],{400:(t,e,s)=>{s.r(e),s.d(e,{default:()=>c});var r=s(669),a=s.n(r);function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const i={name:"cars_edit",computed:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){o(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({},(0,s(629).rn)({loggedIn:function(t){return t.loggedIn},profile:function(t){return t.profile},token:function(t){return t.token}})),data:function(){return{form:{car_type_id:"",license:"",km:"",vintage:"",status:"",user_id:""},errors:{},typeOptions:[],userOptions:[],carId:this.$route.params.id}},methods:{deleteCar:function(){var t=this;this.errors={},a().delete("/api/cars/"+t.carId,{headers:{Authorization:"Bearer "+t.token}}).then((function(e){if("success"===e.data.status)t.$router.push({name:"cars_index"});else for(var s in e.data.messages)t.$set(t.errors,s,e.data.messages[s])})).catch((function(e){for(var s in e.response.data.messages)t.$set(t.errors,s,e.response.data.messages[s])}))},getCar:function(){var t=this,e=this;this.errors={},a().get("/api/cars/"+e.carId,{headers:{Authorization:"Bearer "+e.token}}).then((function(s){if("success"===s.data.status)e.form.car_type_id=s.data.data.car_type_id,e.form.license=s.data.data.license,e.form.km=s.data.data.km,e.form.vintage=s.data.data.vintage,e.form.status=s.data.data.status,t.isAdmin()&&(e.form.user_id=s.data.data.user_id);else for(var r in s.data.messages)e.$set(e.errors,r,s.data.messages[r])})).catch((function(t){for(var s in t.response.data.messages)e.$set(e.errors,s,t.response.data.messages[s])}))},submitForm:function(){var t=this;this.errors={},a().put("/api/cars/"+t.carId,t.form,{headers:{Authorization:"Bearer "+t.token}}).then((function(e){if("success"===e.data.status)t.$router.push({name:"cars_index"});else for(var s in e.data.messages)t.$set(t.errors,s,e.data.messages[s])})).catch((function(e){for(var s in e.response.data.messages)t.$set(t.errors,s,e.response.data.messages[s])}))},hasError:function(t){for(var e in this.errors)if(t===e)return this.errors[e][0]},getCarTypes:function(){var t=this;this.errors={},a().get("/api/car-types",{headers:{Authorization:"Bearer "+t.token}}).then((function(e){if("success"===e.data.status)for(var s in e.data.data)t.typeOptions.push({id:e.data.data[s].id,name:e.data.data[s].name});else for(var r in e.data.messages)t.$set(t.errors,r,e.response.data.messages[r])})).catch((function(e){for(var s in e.response.data.messages)t.$set(t.errors,s,e.response.data.messages[s])}))},getUsers:function(){var t=this;this.errors={},a().get("/api/users",{headers:{Authorization:"Bearer "+t.token}}).then((function(e){if("success"===e.data.status)for(var s in e.data.data)t.userOptions.push({id:e.data.data[s].id,name:e.data.data[s].name});else for(var r in e.data.messages)t.$set(t.errors,r,e.data.messages[r])})).catch((function(e){for(var s in e.response.data.messages)t.$set(t.errors,s,e.response.data.messages[s])}))},isAdmin:function(){return"admin"===this.$store.getters.getProfile}},mounted:function(){this.getCarTypes(),this.isAdmin()&&this.getUsers(),this.getCar()}};const c=(0,s(900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-12 col-lg-6 offset-0 offset-lg-3 box-container"},[s("h1",{staticClass:"mb-4"},[t._v("Gépjármű szerkesztése")]),t._v(" "),s("div",{staticClass:"mb-3 text-end"},[s("button",{staticClass:"btn btn-danger",on:{click:t.deleteCar}},[t._v("Gépjármű törlése")])]),t._v(" "),s("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[s("div",{staticClass:"mb-3"},[s("label",{attrs:{for:"type"}},[t._v("Gépjármű típusa")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.car_type_id,expression:"form.car_type_id"}],staticClass:"form-control",attrs:{id:"type"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"car_type_id",e.target.multiple?s:s[0])}}},t._l(t.typeOptions,(function(e,r){return s("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])})),0),t._v(" "),s("div",{staticClass:"form-text text-danger"},[t._v("\n                        "+t._s(t.hasError("car_type_id"))+"\n                    ")])]),t._v(" "),s("div",{staticClass:"mb-3"},[s("label",{attrs:{for:"license"}},[t._v("Gépjármű rendszáma:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.license,expression:"form.license"}],staticClass:"form-control",attrs:{type:"text",id:"license"},domProps:{value:t.form.license},on:{input:function(e){e.target.composing||t.$set(t.form,"license",e.target.value)}}}),t._v(" "),s("div",{staticClass:"form-text text-danger"},[t._v("\n                        "+t._s(t.hasError("license"))+"\n                    ")])]),t._v(" "),s("div",{staticClass:"mb-3"},[s("label",{attrs:{for:"km"}},[t._v("Gépjármű Km óra állása:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.km,expression:"form.km"}],staticClass:"form-control",attrs:{type:"number",min:"0",id:"km"},domProps:{value:t.form.km},on:{input:function(e){e.target.composing||t.$set(t.form,"km",e.target.value)}}}),t._v(" "),s("div",{staticClass:"form-text text-danger"},[t._v("\n                        "+t._s(t.hasError("km"))+"\n                    ")])]),t._v(" "),s("div",{staticClass:"mb-3"},[s("label",{attrs:{for:"vintage"}},[t._v("Gépjármű évjárata:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.vintage,expression:"form.vintage"}],staticClass:"form-control",attrs:{type:"number",min:"1900",max:"2030",id:"vintage"},domProps:{value:t.form.vintage},on:{input:function(e){e.target.composing||t.$set(t.form,"vintage",e.target.value)}}}),t._v(" "),s("div",{staticClass:"form-text text-danger"},[t._v("\n                        "+t._s(t.hasError("vintage"))+"\n                    ")])]),t._v(" "),s("div",{staticClass:"mb-3"},[s("label",{attrs:{for:"status"}},[t._v("Státusz:")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.status,expression:"form.status"}],staticClass:"form-control",attrs:{id:"status"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"status",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"active"}},[t._v("Aktív")]),t._v(" "),s("option",{attrs:{value:"inactive"}},[t._v("Inaktív")])]),t._v(" "),s("div",{staticClass:"form-text text-danger"},[t._v("\n                        "+t._s(t.hasError("status"))+"\n                    ")])]),t._v(" "),t.isAdmin()?s("div",{staticClass:"mb-3"},[s("label",{attrs:{for:"user_id"}},[t._v("Munkatárs")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.user_id,expression:"form.user_id"}],staticClass:"form-control",attrs:{id:"user"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"user_id",e.target.multiple?s:s[0])}}},t._l(t.userOptions,(function(e,r){return s("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])})),0),t._v(" "),s("div",{staticClass:"form-text text-danger"},[t._v("\n                        "+t._s(t.hasError("car_type_id"))+"\n                    ")])]):t._e(),t._v(" "),s("div",{staticClass:"text-end mt-4"},[s("router-link",{staticClass:"btn",attrs:{to:{name:"cars_index"}}},[t._v("Mégsem")]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Mentés")])],1)])])])])}),[],!1,null,null,null).exports}}]);