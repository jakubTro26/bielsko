var VueformMultiselect=function(e,t){"use strict";function l(e){return String(e).toLowerCase().trim()}function n(e){return-1!==[null,void 0,!1].indexOf(e)}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function u(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(e);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function o(t,u,i){var o=e.toRefs(t),c=o.options,s=o.mode,d=o.trackBy,v=o.limit,p=o.hideSelected,f=o.createTag,h=o.label,m=o.appendNewTag,y=o.multipleLabel,b=o.object,g=o.loading,w=o.delay,S=o.resolveOnLoad,V=o.minChars,k=o.filterResults,B=o.clearOnSearch,O=o.clearOnSelect,x=o.valueProp,M=o.canDeselect,N=o.max,P=i.internalValue,q=i.externalValue,T=i.search,C=i.blurSearch,K=i.clearSearch,D=i.update,j=i.blurInput,A=i.pointer,E=e.ref([]),R=e.ref([]),I=e.ref(!1),L=e.computed((function(){var e,t=R.value||[];return e=t,"[object Object]"===Object.prototype.toString.call(e)&&(t=Object.keys(t).map((function(e){var l,n=t[e];return r(l={},x.value,e),r(l,d.value,n),r(l,h.value,n),l}))),t=t.map((function(e,t){var l;return"object"===a(e)?e:(r(l={},x.value,t),r(l,d.value,e),r(l,h.value,e),l)})),E.value.length&&(t=t.concat(E.value)),t})),$=e.computed((function(){var e=L.value;return W.value.length&&(e=W.value.concat(e)),T.value&&k.value&&(e=e.filter((function(e){return-1!==l(e[d.value]).indexOf(l(T.value))}))),p.value&&(e=e.filter((function(e){return!ae(e)}))),v.value>0&&(e=e.slice(0,v.value)),e})),H=e.computed((function(){switch(s.value){case"single":return!n(P.value[x.value]);case"multiple":case"tags":return!n(P.value)&&P.value.length>0}})),F=e.computed((function(){return void 0!==y&&void 0!==y.value?y.value(P.value):P.value&&P.value.length>1?"".concat(P.value.length," options selected"):"1 option selected"})),_=e.computed((function(){return!L.value.length})),U=e.computed((function(){return L.value.length>0&&0==$.value.length})),W=e.computed((function(){var e;return!1!==f.value&&T.value?-1!==ne(T.value)?[]:[(e={},r(e,x.value,T.value),r(e,h.value,T.value),r(e,d.value,T.value),e)]:[]})),z=e.computed((function(){switch(s.value){case"single":return null;case"multiple":case"tags":return[]}})),G=e.computed((function(){return g.value||I.value})),J=function(e){switch("object"!==a(e)&&(e=le(e)),s.value){case"single":D(e);break;case"multiple":case"tags":D(P.value.concat(e))}u.emit("select",X(e))},Q=function(e){switch("object"!==a(e)&&(e=le(e)),s.value){case"single":Y();break;case"tags":case"multiple":D(P.value.filter((function(t){return t[x.value]!=e[x.value]})))}u.emit("deselect",X(e))},X=function(e){return b.value?e:e[x.value]},Y=function(){D(z.value)},Z=function(e){switch(s.value){case"single":return!n(P.value)&&P.value[x.value]==e[x.value];case"tags":case"multiple":return!n(P.value)&&-1!==P.value.map((function(e){return e[x.value]})).indexOf(e[x.value])}},ee=function(e){return!0===e.disabled},te=function(){return!(void 0===N||-1===N.value||!H.value&&N.value>0)&&P.value.length>=N.value},le=function(e){return L.value[L.value.map((function(e){return String(e[x.value])})).indexOf(String(e))]},ne=function(e){return L.value.map((function(e){return l(e[d.value])})).indexOf(l(e))},ae=function(e){return"tags"===s.value&&p.value&&Z(e)},re=function(e){E.value.push(e)},ue=function(){n(q.value)||(P.value=oe(q.value))},ie=function(e){I.value=!0,c.value(T.value).then((function(t){R.value=t,I.value=!1,"function"==typeof e&&e(t)}))},oe=function(e){return n(e)?"single"===s.value?{}:[]:b.value?e:"single"===s.value?le(e)||{}:e.filter((function(e){return!!le(e)})).map((function(e){return le(e)}))};if("single"!==s.value&&!n(q.value)&&!Array.isArray(q.value))throw new Error('v-model must be an array when using "'.concat(s.value,'" mode'));return c&&"function"==typeof c.value?S.value?ie(ue):1==b.value&&ue():(R.value=c&&c.value?c.value:[],ue()),w.value>-1&&e.watch(T,(function(e){e.length<V.value||(B.value&&(R.value=[]),setTimeout((function(){e==T.value&&(I.value=!0,c.value(T.value).then((function(t){e==T.value&&(R.value=t,A.value=$.value.filter((function(e){return!0!==e.disabled}))[0]||null),I.value=!1})))}),w.value))}),{flush:"sync"}),e.watch(q,(function(e){var t,l,a;if(n(e))P.value=oe(e);else switch(s.value){case"single":(b.value?e[x.value]!=P.value[x.value]:e!=P.value[x.value])&&(P.value=oe(e));break;case"multiple":case"tags":t=b.value?e.map((function(e){return e[x.value]})):e,l=P.value.map((function(e){return e[x.value]})),a=l.slice().sort(),t.length===l.length&&t.slice().sort().every((function(e,t){return e===a[t]}))||(P.value=oe(e))}}),{deep:!0}),e.watch((function(){return t.options}),(function(e){"function"!=typeof t.options&&(R.value=t.options)})),{filteredOptions:$,hasSelected:H,multipleLabelText:F,extendedOptions:L,noOptions:_,noResults:U,busy:G,select:J,deselect:Q,remove:function(e){Q(e)},clear:Y,isSelected:Z,isDisabled:ee,isMax:te,getOption:le,handleOptionClick:function(e){if(!ee(e))switch(s.value){case"single":if(Z(e))return void(M.value&&Q(e));J(e),C(),j();break;case"multiple":if(Z(e))return void Q(e);if(te())return;J(e),O.value&&K();break;case"tags":if(Z(e))return void Q(e);if(te())return;void 0===le(e[x.value])&&f.value&&(u.emit("tag",e[x.value]),m.value&&re(e),K()),O.value&&K(),J(e)}},resolveOptions:ie}}var c={name:"Multiselect",emits:["open","close","select","deselect","input","search-change","tag","update:modelValue","change"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1},id:{type:[String,Number],required:!1,default:"multiselect"},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:"label"},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},maxHeight:{type:Number,required:!1,default:160},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:!1},appendNewTag:{type:Boolean,required:!1,default:!0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1}},setup(t,l){const a=function(t,l){var n=e.toRefs(t),a=n.value,r=n.modelValue,u=n.mode;return{internalValue:e.ref("single"!==u.value?[]:{}),externalValue:void 0!==l.expose?r:a}}(t,l),r=function(t,l,n){var a=e.toRefs(t),r=a.searchable,u=a.id;return{multiselect:e.ref(null),tabindex:e.computed((function(){return r.value?-1:0})),blurInput:function(){document.getElementById(u.value).querySelector(".multiselect-input").blur()}}}(t),i={pointer:e.ref(null)},c=function(t,l,n){var a=e.toRefs(t),r=a.maxHeight,u=a.disabled,i=a.searchable,o=n.multiselect,c=e.ref(!1),s=e.computed((function(){return"".concat(r.value,"px")}));return{isOpen:c,contentMaxHeight:s,open:function(e){u.value||(c.value=!0,l.emit("open"))},close:function(){c.value=!1,l.emit("close")},handleInputMousedown:function(e){c.value&&!i.value&&(o.value.querySelector(".multiselect-input").dispatchEvent(new Event("blur")),o.value.querySelector(".multiselect-input").blur(),e.preventDefault())}}}(t,l,{multiselect:r.multiselect}),s=function(t,l,a){var r=e.toRefs(t),u=r.object,i=r.valueProp,o=r.mode,c=a.internalValue,s=function(e){return u.value||n(e)?e:Array.isArray(e)?e.map((function(e){return e[i.value]})):e[i.value]},d=function(e){return n(e)?"single"===o.value?{}:[]:e};return{update:function(e){c.value=d(e);var t=s(e);l.emit("change",t),l.emit("input",t),l.emit("update:modelValue",t)}}}(t,l,{internalValue:a.internalValue}),d=function(t,l,n){var a=e.toRefs(t),r=a.searchable,u=a.mode,i=n.internalValue,o=e.ref(null),c=e.ref(null),s=e.computed((function(){return o.value?"".concat(o.value.length,"ch"):"tags"===u.value&&-1===[null,void 0].indexOf(i.value)&&i.value.length?"1ch":"100%"}));return e.watch(o,(function(e){l.emit("search-change",e)})),{search:o,input:c,tagsSearchWidth:s,clearSearch:function(){o.value=""},blurSearch:function(){r.value&&c.value.blur()}}}(t,l,{internalValue:a.internalValue}),v=o(t,l,{externalValue:a.externalValue,internalValue:a.internalValue,search:d.search,blurSearch:d.blurSearch,clearSearch:d.clearSearch,update:s.update,blurInput:r.blurInput,pointer:i.pointer}),p=function(t,l,n){var a=e.toRefs(t),r=a.id,u=a.valueProp,i=n.filteredOptions,o=n.handleOptionClick,c=n.search,s=n.pointer,d=e.computed((function(){return i.value.filter((function(e){return!0!==e.disabled}))})),v=function(e){s.value=e},p=function(){s.value=d.value[0]||null},f=function(){s.value=null},h=function(){var e=document.getElementById(r.value).querySelector(".is-pointed");if(e){var t=e.parentElement;e.offsetTop+e.offsetHeight>t.clientHeight+t.scrollTop&&(t.scrollTop=e.offsetTop+e.offsetHeight-t.clientHeight),e.offsetTop<t.scrollTop&&(t.scrollTop=e.offsetTop)}};return e.watch(c,(function(e){p()})),{pointer:s,isPointed:function(e){return!!s.value&&s.value[u.value]==e[u.value]},setPointer:v,setPointerFirst:p,clearPointer:f,selectPointer:function(){s.value&&!0!==s.value.disabled?(o(s.value),f()):f()},forwardPointer:function(){if(null===s.value)v(d.value[0]||null);else{var t=d.value.map((function(e){return e[u.value]})).indexOf(s.value[u.value])+1;d.value.length<=t&&(t=0),v(d.value[t]||null)}e.nextTick((function(){h()}))},backwardPointer:function(){if(null===s.value)v(d.value[d.value.length-1]||null);else{var t=d.value.map((function(e){return e[u.value]})).indexOf(s.value[u.value])-1;t<0&&(t=d.value.length-1),v(d.value[t]||null)}e.nextTick((function(){h()}))}}}(t,0,{filteredOptions:v.filteredOptions,handleOptionClick:v.handleOptionClick,search:d.search,pointer:i.pointer}),f=function(t,l,n){var a=e.toRefs(t).mode,r=n.internalValue,i=n.update,o=n.close,c=n.clearPointer,s=n.search;return{handleBackspace:function(e){"single"!==a.value&&i(u(r.value).slice(0,-1))},handleEsc:function(e){o(),c(),e.target.blur()},handleSearchBackspace:function(e){""!==s.value&&e.stopPropagation()}}}(t,0,{internalValue:a.internalValue,update:s.update,close:c.close,clearPointer:p.clearPointer,search:d.search});return{...a,...c,...r,...i,...s,...d,...v,...p,...f}}};const s={class:"multiselect-single-label"},d={class:"multiselect-multiple-label"},v={key:2,class:"multiselect-search"},p={key:3,class:"multiselect-tags"},f={class:"multiselect-tag"},h={class:"multiselect-spinner"},m={class:"multiselect-no-options"},y={class:"multiselect-no-results"};return c.render=function(e,l,n,a,r,u){return t.openBlock(),t.createBlock("div",{class:["multiselect",[`is-${n.mode}`,{"is-open":e.isOpen,"is-searchable":n.searchable,"is-disabled":n.disabled,"no-caret":!n.caret}]],id:n.id,onKeydown:l[27]||(l[27]=t.withKeys(t.withModifiers((()=>{}),["prevent"]),["enter"])),ref:"multiselect"},[t.createVNode("div",{class:"multiselect-input",tabindex:e.tabindex,onMousedown:l[18]||(l[18]=(...t)=>e.handleInputMousedown&&e.handleInputMousedown(...t)),onFocus:l[19]||(l[19]=(...t)=>e.open&&e.open(...t)),onBlur:l[20]||(l[20]=(...t)=>e.close&&e.close(...t)),onKeyup:[l[21]||(l[21]=t.withKeys(((...t)=>e.handleEsc&&e.handleEsc(...t)),["esc"])),l[22]||(l[22]=t.withKeys(((...t)=>e.selectPointer&&e.selectPointer(...t)),["enter"]))],onKeydown:[l[23]||(l[23]=t.withKeys(t.withModifiers(((...t)=>e.handleBackspace&&e.handleBackspace(...t)),["prevent"]),["delete"])),l[24]||(l[24]=t.withKeys(t.withModifiers(((...t)=>e.backwardPointer&&e.backwardPointer(...t)),["prevent"]),["up"])),l[25]||(l[25]=t.withKeys(t.withModifiers(((...t)=>e.forwardPointer&&e.forwardPointer(...t)),["prevent"]),["down"]))]},[t.createCommentVNode(" Single label "),"single"==n.mode&&e.hasSelected&&!e.search&&e.internalValue?t.renderSlot(e.$slots,"singlelabel",{key:0,value:e.internalValue},(()=>[t.createVNode("div",s,t.toDisplayString(e.internalValue[n.label]),1)])):t.createCommentVNode("v-if",!0),t.createCommentVNode(" Multiple label "),"multiple"==n.mode&&e.hasSelected&&!e.search?t.renderSlot(e.$slots,"multiplelabel",{key:1,values:e.internalValue},(()=>[t.createVNode("div",d,t.toDisplayString(e.multipleLabelText),1)])):t.createCommentVNode("v-if",!0),t.createCommentVNode(" Search "),"tags"!==n.mode&&n.searchable&&!n.disabled?(t.openBlock(),t.createBlock("div",v,[t.withDirectives(t.createVNode("input",{"onUpdate:modelValue":l[1]||(l[1]=t=>e.search=t),onFocus:l[2]||(l[2]=t.withModifiers(((...t)=>e.open&&e.open(...t)),["stop"])),onBlur:l[3]||(l[3]=t.withModifiers(((...t)=>e.close&&e.close(...t)),["stop"])),onKeyup:[l[4]||(l[4]=t.withKeys(t.withModifiers(((...t)=>e.handleEsc&&e.handleEsc(...t)),["stop"]),["esc"])),l[5]||(l[5]=t.withKeys(t.withModifiers(((...t)=>e.selectPointer&&e.selectPointer(...t)),["stop"]),["enter"]))],onKeydown:[l[6]||(l[6]=t.withKeys(((...t)=>e.handleSearchBackspace&&e.handleSearchBackspace(...t)),["delete"])),l[7]||(l[7]=t.withKeys(t.withModifiers(((...t)=>e.backwardPointer&&e.backwardPointer(...t)),["stop"]),["up"])),l[8]||(l[8]=t.withKeys(t.withModifiers(((...t)=>e.forwardPointer&&e.forwardPointer(...t)),["stop"]),["down"]))],ref:"input"},null,544),[[t.vModelText,e.search]])])):t.createCommentVNode("v-if",!0),t.createCommentVNode(" Tags (with search) "),"tags"==n.mode?(t.openBlock(),t.createBlock("div",p,[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(e.internalValue,((a,r,u)=>(t.openBlock(),t.createBlock("span",{key:u},[t.renderSlot(e.$slots,"tag",{option:a,remove:e.remove,disabled:n.disabled},(()=>[t.createVNode("div",f,[t.createTextVNode(t.toDisplayString(a[n.label])+" ",1),n.disabled?t.createCommentVNode("v-if",!0):(t.openBlock(),t.createBlock("i",{key:0,onClick:l[9]||(l[9]=t.withModifiers((()=>{}),["prevent"])),onMousedown:t.withModifiers((t=>e.remove(a)),["prevent","stop"])},null,40,["onMousedown"]))])]))])))),128)),n.searchable&&!n.disabled?(t.openBlock(),t.createBlock("div",{key:0,class:"multiselect-search",style:{width:e.tagsSearchWidth}},[t.withDirectives(t.createVNode("input",{"onUpdate:modelValue":l[10]||(l[10]=t=>e.search=t),onFocus:l[11]||(l[11]=t.withModifiers(((...t)=>e.open&&e.open(...t)),["stop"])),onBlur:l[12]||(l[12]=t.withModifiers(((...t)=>e.close&&e.close(...t)),["stop"])),onKeyup:[l[13]||(l[13]=t.withKeys(t.withModifiers(((...t)=>e.handleEsc&&e.handleEsc(...t)),["stop"]),["esc"])),l[14]||(l[14]=t.withKeys(t.withModifiers(((...t)=>e.selectPointer&&e.selectPointer(...t)),["stop"]),["enter"]))],onKeydown:[l[15]||(l[15]=t.withKeys(((...t)=>e.handleSearchBackspace&&e.handleSearchBackspace(...t)),["delete"])),l[16]||(l[16]=t.withKeys(t.withModifiers(((...t)=>e.backwardPointer&&e.backwardPointer(...t)),["stop"]),["up"])),l[17]||(l[17]=t.withKeys(t.withModifiers(((...t)=>e.forwardPointer&&e.forwardPointer(...t)),["stop"]),["down"]))],style:{width:e.tagsSearchWidth},ref:"input"},null,36),[[t.vModelText,e.search]])],4)):t.createCommentVNode("v-if",!0)])):t.createCommentVNode("v-if",!0),t.createCommentVNode(" Placeholder "),t.withDirectives(t.createVNode("div",{class:"multiselect-placeholder"},t.toDisplayString(n.placeholder),513),[[t.vShow,n.placeholder&&!e.hasSelected&&!e.search]]),t.createVNode(t.Transition,{name:"multiselect-loading"},{default:t.withCtx((()=>[t.withDirectives(t.createVNode("div",h,null,512),[[t.vShow,e.busy]])])),_:1})],40,["tabindex"]),t.createCommentVNode(" Options "),t.createVNode(t.Transition,{name:"multiselect",onAfterLeave:e.clearSearch},{default:t.withCtx((()=>[t.withDirectives(t.createVNode("div",{class:"multiselect-options",style:{maxHeight:e.contentMaxHeight}},[t.renderSlot(e.$slots,"beforelist"),(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(e.filteredOptions,((a,r,u)=>(t.openBlock(),t.createBlock("a",{href:"",class:["multiselect-option",{"is-pointed":e.isPointed(a),"is-selected":e.isSelected(a),"is-disabled":e.isDisabled(a)}],key:u,onMousedown:l[26]||(l[26]=t.withModifiers((()=>{}),["prevent"])),onMouseenter:t=>e.setPointer(a),onClick:t.withModifiers((t=>e.handleOptionClick(a)),["stop","prevent"])},[t.renderSlot(e.$slots,"option",{option:a,search:e.search},(()=>[t.createVNode("span",null,t.toDisplayString(a[n.label]),1)]))],42,["onMouseenter","onClick"])))),128)),t.withDirectives(t.createVNode("span",null,[t.renderSlot(e.$slots,"nooptions",{},(()=>[t.createVNode("div",m,t.toDisplayString(n.noOptionsText),1)]))],512),[[t.vShow,e.noOptions]]),t.withDirectives(t.createVNode("span",null,[t.renderSlot(e.$slots,"noresults",{},(()=>[t.createVNode("div",y,t.toDisplayString(n.noResultsText),1)]))],512),[[t.vShow,e.noResults]]),t.renderSlot(e.$slots,"afterlist")],4),[[t.vShow,e.isOpen]])])),_:3},8,["onAfterLeave"])],42,["id"])},c.__file="src/Multiselect.vue",c}(Vue,Vue);