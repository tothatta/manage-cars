"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[447],{447:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});var r=s(669),a=s.n(r);function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const i={name:"users_edit",computed:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){o(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({},(0,s(629).rn)({loggedIn:function(t){return t.loggedIn},profile:function(t){return t.profile},token:function(t){return t.token}})),data:function(){return{form:{name:"",email:"",phone:"",status:"",profile:""},errors:{},userId:this.$route.params.id,cars:[]}},methods:{deleteUser:function(){var t=this;this.errors={},a().delete("/api/users/"+t.userId,{headers:{Authorization:"Bearer "+t.token}}).then((function(e){if("success"===e.data.status)t.$router.push({name:"users_index"});else for(var s in e.data.messages)t.$set(t.errors,s,e.data.messages[s])})).catch((function(e){for(var s in e.response.data.messages)t.$set(t.errors,s,e.response.data.messages[s])}))},getUser:function(){var t=this;this.errors={},a().get("/api/users/"+t.userId,{headers:{Authorization:"Bearer "+t.token}}).then((function(e){if("success"===e.data.status)t.form.name=e.data.data.name,t.form.email=e.data.data.email,t.form.phone=e.data.data.phone,t.form.status=e.data.data.status,t.form.profile=e.data.data.profile,t.cars=e.data.data.cars;else for(var s in e.data.messages)t.$set(t.errors,s,e.data.messages[s])})).catch((function(e){for(var s in e.response.data.messages)t.$set(t.errors,s,e.response.data.messages[s])}))},submitForm:function(){var t=this;this.errors={},a().put("/api/users/"+t.userId,t.form,{headers:{Authorization:"Bearer "+t.token}}).then((function(e){if("success"===e.data.status)t.$router.push({name:"users_index"});else for(var s in console.log(e.data),e.data.messages)t.$set(t.errors,s,e.data.messages[s])})).catch((function(e){for(var s in console.log(e.response,e),e.response.data.messages)t.$set(t.errors,s,e.response.data.messages[s])}))},hasError:function(t){for(var e in this.errors)if(t===e)return this.errors[e][0]},isAdmin:function(){return"admin"===this.$store.getters.getProfile}},mounted:function(){this.isAdmin()&&this.getUser()}};const l=(0,s(900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-12 col-lg-8 offset-0 offset-lg-2 box-container"},[s("h1",{staticClass:"mb-4"},[t._v("Munkatárs adatai")]),t._v(" "),s("div",{staticClass:"mb-3 text-end"},[s("button",{staticClass:"btn btn-danger",on:{click:t.deleteUser}},[t._v("Munkatárs törlése")])]),t._v(" "),s("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[s("div",{staticClass:"mb-3"},[s("label",{attrs:{for:"name"}},[t._v("Munkatárs neve:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),s("div",{staticClass:"form-text text-danger"},[t._v("\n                        "+t._s(t.hasError("name"))+"\n                    ")])]),t._v(" "),s("div",{staticClass:"mb-3"},[s("label",{attrs:{for:"email"}},[t._v("Munkatárs E-mail címe:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),s("div",{staticClass:"form-text text-danger"},[t._v("\n                        "+t._s(t.hasError("email"))+"\n                    ")])]),t._v(" "),s("div",{staticClass:"mb-3"},[s("label",{attrs:{for:"phone"}},[t._v("Munkatárs telefonszáma:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],staticClass:"form-control",attrs:{type:"text",id:"phone"},domProps:{value:t.form.phone},on:{input:function(e){e.target.composing||t.$set(t.form,"phone",e.target.value)}}}),t._v(" "),s("div",{staticClass:"form-text text-danger"},[t._v("\n                        "+t._s(t.hasError("phone"))+"\n                    ")])]),t._v(" "),s("div",{staticClass:"mb-3"},[s("label",{attrs:{for:"status"}},[t._v("Státusz:")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.status,expression:"form.status"}],staticClass:"form-control",attrs:{id:"status"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"status",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"active"}},[t._v("Aktív")]),t._v(" "),s("option",{attrs:{value:"inactive"}},[t._v("Inaktív")])]),t._v(" "),s("div",{staticClass:"form-text text-danger"},[t._v("\n                        "+t._s(t.hasError("status"))+"\n                    ")])]),t._v(" "),s("div",{staticClass:"mb-3"},[s("label",{attrs:{for:"profile"}},[t._v("Jogosultság:")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.profile,expression:"form.profile"}],staticClass:"form-control",attrs:{id:"profile"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"profile",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"user"}},[t._v("Munkatárs")]),t._v(" "),s("option",{attrs:{value:"admin"}},[t._v("Admin")])]),t._v(" "),s("div",{staticClass:"form-text text-danger"},[t._v("\n                        "+t._s(t.hasError("profile"))+"\n                    ")])]),t._v(" "),s("div",{staticClass:"text-end mt-4"},[s("router-link",{staticClass:"btn",attrs:{to:{name:"users_index"}}},[t._v("Mégsem")]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Mentés")])],1)]),t._v(" "),s("hr"),t._v(" "),s("h2",[t._v("Munkatárs gépjárművei")]),t._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-striped table-hover"},[t._m(0),t._v(" "),s("tbody",t._l(t.cars,(function(e,r){return s("tr",[s("td",[t._v(t._s(e.carTypeName))]),t._v(" "),s("td",[t._v(t._s(e.license))]),t._v(" "),s("td",[t._v(t._s(e.km))]),t._v(" "),s("td",[t._v(t._s(e.vintage))]),t._v(" "),s("td",[s("router-link",{staticClass:"btn btn-info",attrs:{to:{name:"cars_edit",params:{id:e.id}}}},[t._v("Részletek")])],1)])})),0)])])])])])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("Autó Típus")]),t._v(" "),s("th",[t._v("Rendszám")]),t._v(" "),s("th",[t._v("Km óra állás")]),t._v(" "),s("th",[t._v("Évjárat")]),t._v(" "),s("th")])])}],!1,null,null,null).exports}}]);