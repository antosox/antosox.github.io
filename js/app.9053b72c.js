(function(e){function t(t){for(var s,a,i=t[0],u=t[1],l=t[2],p=0,d=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(s=!1)}s&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},r={app:0},o=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2683:function(e,t,n){e.exports=n.p+"img/video.-julien-lepers-agace-par-une-interrogation-sur-questions-pour-champion-parle-plus-ca.5f510d28.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",[n("router-view")],1)],1)},o=[],a={name:"App"},i=a,u=n("2877"),l=n("6544"),c=n.n(l),p=n("7496"),d=n("a75b"),f=Object(u["a"])(i,r,o,!1,null,null,null),m=f.exports;c()(f,{VApp:p["a"],VContent:d["a"]});var v=n("8c4f"),h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-row",[s("v-col",{attrs:{cols:12,lg:"6",md:"6","offset-lg":"3","offset-md":"3",sm:"4","offset-sm":"2"}},[s("div",{staticClass:"d-flex justify-center mb-3"},[s("v-img",{attrs:{src:n("2683"),width:"200",height:"300"}})],1),s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-text-field",{attrs:{rules:e.firstnameRules,label:"Prénom",rounded:"",filled:""},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}}),s("v-text-field",{attrs:{rules:e.nameRules,label:"Nom",rounded:"",filled:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),s("v-text-field",{attrs:{rules:e.companyRules,label:"Entreprise",rounded:"",filled:""},model:{value:e.company,callback:function(t){e.company=t},expression:"company"}}),s("v-btn",{staticClass:"mr-4",attrs:{rounded:"",disabled:e.valid,color:"success"},on:{click:e.validate}},[e._v(" Validate ")])],1)],1)],1)],1)},b=[],g=(n("b0c0"),n("16b2")),q=n("11c1"),x=n.n(q),y=new g["a"]("questionnaire"),j={props:{},data:function(){return{valid:!1,name:"",nameRules:[function(e){return!!e||"Nom requis"}],firstname:"",firstnameRules:[function(e){return!!e||"Prénom requis"}],company:"",companyRules:[function(e){return!!e||"Entreprise requise"}]}},methods:{validate:function(){if(this.$refs.form.validate()){this.snackbar=!0;var e=x()(),t=this.$router;y.put({_id:e,name:this.name,firstname:this.firstname,company:this.company}).then((function(e){t.push("/questionnaire/"+e.id)}))}}},updated:function(){this.name.length>0&&this.firstname.length>0&&this.company.length>0?this.valid=!1:this.valid=!0}},_=j,k=n("8336"),w=n("62ad"),O=n("4bd4"),S=n("adda"),V=n("0fd9"),C=n("8654"),N=Object(u["a"])(_,h,b,!1,null,"399dc245",null),P=N.exports;c()(N,{VBtn:k["a"],VCol:w["a"],VForm:O["a"],VImg:S["a"],VRow:V["a"],VTextField:C["a"]});var M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-stepper",{model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[n("v-stepper-header",e._l(e.questions,(function(t,s){return n("v-stepper-step",{key:s,attrs:{editable:"",complete:e.e1>s,step:s+1}},[e._v("Question "+e._s(s+1))])})),1),n("v-stepper-items",e._l(e.questions,(function(t,s){return n("v-stepper-content",{key:s,attrs:{step:s+1}},[n("questions",{key:s,attrs:{questions:t,qlenght:e.questions.length}}),e.e1<e.questions.length?n("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.nextStep()}}},[e._v(" Continuer ")]):e._e(),e.e1==e.questions.length?n("v-btn",{attrs:{color:"green"},on:{click:function(t){return e.endForm()}}},[e._v(" Valider ")]):e._e(),n("v-btn",{attrs:{text:""},on:{click:function(t){return e.backStep()}}},[e._v("Retour")])],1)})),1)],1)],1)},$=[],A=(n("fb6a"),n("4e82"),n("6e63")),E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"auto"}},[n("v-card-title",[e._v(e._s(e.questions.question))]),e._l(e.questions.reponses,(function(t,s){return n("v-checkbox",{key:s,staticClass:"mx-2",attrs:{label:t.text},model:{value:t.status,callback:function(n){e.$set(t,"status",n)},expression:"reponsePossible.status"}})}))],2)],1)},R=[],T={name:"Questions",props:["questions","key","qlenght"]},F=T,Q=n("b0af"),z=n("99d9"),B=n("ac7c"),J=Object(u["a"])(F,E,R,!1,null,"7bec4eca",null),H=J.exports;c()(J,{VCard:Q["a"],VCardTitle:z["a"],VCheckbox:B["a"]});var D=new g["a"]("questionnaire"),I={name:"Questionnaire",components:{Questions:H},data:function(){var e=JSON.parse(JSON.stringify(A.questions)),t=e.sort((function(){return.5-Math.random()}));return{nbrMaxQuestion:5,questions:t.slice(0,5),e1:1}},methods:{nextStep:function(){this.e1++},backStep:function(){this.e1--},endForm:function(){var e=this.$router,t=this;D.get(this.$route.params.id).then((function(e){return e.questions=t.questions,D.put(e)})).then((function(t){e.push("/Myscore/"+t.id)}))}}},G=I,K=n("7e85"),L=n("e516"),U=n("9c54"),W=n("56a4"),X=Object(u["a"])(G,M,$,!1,null,"005b3940",null),Y=X.exports;c()(X,{VBtn:k["a"],VStepper:K["a"],VStepperContent:L["a"],VStepperHeader:U["a"],VStepperItems:U["b"],VStepperStep:W["a"]});var Z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-row",[s("v-col",{attrs:{cols:12,lg:"6",md:"6","offset-lg":"3","offset-md":"3",sm:"4","offset-sm":"2"}},[s("div",{staticClass:"d-flex justify-center "},[s("div",{staticClass:"mb-3 text-center"},[s("p",[e._v("Votre Score est de")]),s("p",[e._v(e._s(e.score)+"/20")]),s("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.goToHome("/")}}},[e._v("Au Revoir et merci")]),s("br"),s("img",{attrs:{src:n("875f"),width:"500",height:"400"}})],1)])])],1)],1)},ee=[],te=(n("d81d"),n("b680"),new g["a"]("questionnaire")),ne={name:"Score",data:function(){return{score:0,total:0}},methods:{goToHome:function(e){this.$router.push(e)}},mounted:function(){var e=this;te.get(this.$route.params.id).then((function(t){return t.questions.map((function(t){e.score=t.reponses.length,e.total=t.reponses.length,t.reponses.map((function(t){t.status!=t.reponse&&e.score--}))})),e.score=(e.score/e.total*20).toFixed(2),t.score=e.score,te.put(t)}))}},se=ne,re=Object(u["a"])(se,Z,ee,!1,null,"4710d056",null),oe=re.exports;c()(re,{VBtn:k["a"],VCol:w["a"],VRow:V["a"]}),s["a"].use(v["a"]);var ae=[{path:"/",name:"login",component:P},{path:"/questionnaire/:id",name:"questionnaire",component:Y},{path:"/Myscore/:id",name:"myscore",component:oe}],ie=new v["a"]({mode:"history",base:"/",routes:ae}),ue=ie,le=n("9483");Object(le["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var ce=n("f309");s["a"].use(ce["a"]);var pe=new ce["a"]({icons:{iconfont:"mdi"}});s["a"].config.productionTip=!1,new s["a"]({router:ue,vuetify:pe,render:function(e){return e(m)}}).$mount("#app")},"6e63":function(e){e.exports=JSON.parse('{"name":"Mes Questions","questions":[{"question":"Qui est le plus beau ?","reponses":[{"text":"Antoine","status":false,"reponse":false},{"text":"Alexandre","status":false,"reponse":true},{"text":"Paul le Moche","status":false,"reponse":false},{"text":"Chuck Norris","status":false,"reponse":true}]},{"question":"Aimez-vous l\'entreprise ?","reponses":[{"text":"Oui","status":false,"reponse":true},{"text":"Non","status":false,"reponse":false}]},{"question":"Dans Minecraft combien de diamant faut-il pour faire une armure complete ?","reponses":[{"text":"12","status":false,"reponse":true},{"text":"24","status":false,"reponse":true},{"text":"Oui","status":false,"reponse":false},{"text":"ça dépends si on a déjà des bouts de construits","status":false,"reponse":true}]},{"question":"Si le roi d\'angleterre a mis sa culotte à l\'envers, est ce ça veut dire qu\'il peut uriner par les fesses ?","reponses":[{"text":"Oui","status":false,"reponse":true},{"text":"Non","status":false,"reponse":false},{"text":"Très Bonne question","status":false,"reponse":true}]},{"question":"Si Naruto ce lève à midi, est ce que ça veut dire qu\'il s\'appel Narutard ?","reponses":[{"text":"Oui","status":false,"reponse":true},{"text":"Non","status":false,"reponse":false},{"text":"Ca dépends de l\'heure à laquelle il c\'est couché","status":false,"reponse":true}]},{"question":"Pourquoi ?","reponses":[{"text":"Oui","status":false,"reponse":true},{"text":"Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres. Des gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez moi. Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée... Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste, parfois on ne trouve pas l’interlocuteur en face je dirais, le miroir qui vous aide à avancer. Alors ça n’est pas mon cas, comme je disais là, puisque moi au contraire, j’ai pu : et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie... je ne suis qu’amour ! Et finalement, quand beaucoup de gens aujourd’hui me disent « Mais comment fais-tu pour avoir cette humanité ? », et bien je leur réponds très simplement, je leur dis que c’est ce goût de l’amour ce goût donc qui m’a poussé aujourd’hui à entreprendre une construction mécanique, mais demain qui sait ? Peut-être simplement à me mettre au service de la communauté, à faire le don, le don de soi...","status":false,"reponse":true},{"text":"Afrique du Sud","status":false,"reponse":true}]}]}')},"875f":function(e,t,n){e.exports=n.p+"img/au_revoir.5b5078f8.gif"}});
//# sourceMappingURL=app.9053b72c.js.map