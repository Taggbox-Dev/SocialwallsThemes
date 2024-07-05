/*! For license information please see 1774.92644942.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1774],{11774:(n,t,e)=>{e.d(t,{Gj:()=>re,jw:()=>ue,tv:()=>se});var i=e(47313);function o(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}var r="(prefers-reduced-motion: reduce)",s={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7};function u(n){n.length=0}function a(n,t,e){return Array.prototype.slice.call(n,t,e)}function c(n){return n.bind.apply(n,[null].concat(a(arguments,1)))}var l=setTimeout,f=function(){};function d(n){return requestAnimationFrame(n)}function p(n,t){return typeof t===n}function h(n){return!b(n)&&p("object",n)}var v=Array.isArray,g=c(p,"function"),m=c(p,"string"),y=c(p,"undefined");function b(n){return null===n}function w(n){return n instanceof HTMLElement}function E(n){return v(n)?n:[n]}function _(n,t){E(n).forEach(t)}function S(n,t){return n.indexOf(t)>-1}function x(n,t){return n.push.apply(n,E(t)),n}function P(n,t,e){n&&_(t,(function(t){t&&n.classList[e?"add":"remove"](t)}))}function k(n,t){P(n,m(t)?t.split(" "):t,!0)}function C(n,t){_(t,n.appendChild.bind(n))}function A(n,t){_(n,(function(n){var e=(t||n).parentNode;e&&e.insertBefore(n,t)}))}function L(n,t){return w(n)&&(n.msMatchesSelector||n.matches).call(n,t)}function M(n,t){var e=n?a(n.children):[];return t?e.filter((function(n){return L(n,t)})):e}function D(n,t){return t?M(n,t)[0]:n.firstElementChild}var N=Object.keys;function z(n,t,e){if(n){var i=N(n);i=e?i.reverse():i;for(var o=0;o<i.length;o++){var r=i[o];if("__proto__"!==r&&!1===t(n[r],r))break}}return n}function O(n){return a(arguments,1).forEach((function(t){z(t,(function(e,i){n[i]=t[i]}))})),n}function j(n){return a(arguments,1).forEach((function(t){z(t,(function(t,e){v(t)?n[e]=t.slice():h(t)?n[e]=j({},h(n[e])?n[e]:{},t):n[e]=t}))})),n}function R(n,t){E(t||N(n)).forEach((function(t){delete n[t]}))}function I(n,t){_(n,(function(n){_(t,(function(t){n&&n.removeAttribute(t)}))}))}function T(n,t,e){h(t)?z(t,(function(t,e){T(n,e,t)})):_(n,(function(n){b(e)||""===e?I(n,t):n.setAttribute(t,String(e))}))}function F(n,t,e){var i=document.createElement(n);return t&&(m(t)?k(i,t):T(i,t)),e&&C(e,i),i}function W(n,t,e){if(y(e))return getComputedStyle(n)[t];b(e)||(n.style[t]=""+e)}function G(n,t){W(n,"display",t)}function U(n){n.setActive&&n.setActive()||n.focus({preventScroll:!0})}function X(n,t){return n.getAttribute(t)}function B(n,t){return n&&n.classList.contains(t)}function H(n){return n.getBoundingClientRect()}function Y(n){_(n,(function(n){n&&n.parentNode&&n.parentNode.removeChild(n)}))}function q(n){return D((new DOMParser).parseFromString(n,"text/html").body)}function K(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function J(n,t){return n&&n.querySelector(t)}function V(n,t){return t?a(n.querySelectorAll(t)):[]}function Q(n,t){P(n,t,!1)}function Z(n){return n.timeStamp}function $(n){return m(n)?n:n?n+"px":""}var nn="splide",tn="data-splide";function en(n,t){if(!n)throw new Error("[splide] "+(t||""))}var on=Math.min,rn=Math.max,sn=Math.floor,un=Math.ceil,an=Math.abs;function cn(n,t,e){return an(n-t)<e}function ln(n,t,e,i){var o=on(t,e),r=rn(t,e);return i?o<n&&n<r:o<=n&&n<=r}function fn(n,t,e){var i=on(t,e),o=rn(t,e);return on(rn(i,n),o)}function dn(n){return+(n>0)-+(n<0)}function pn(n,t){return _(t,(function(t){n=n.replace("%s",""+t)})),n}function hn(n){return n<10?"0"+n:""+n}var vn={};function gn(){var n=[];function t(n,t,e){_(n,(function(n){n&&_(t,(function(t){t.split(" ").forEach((function(t){var i=t.split(".");e(n,i[0],i[1])}))}))}))}return{bind:function(e,i,o,r){t(e,i,(function(t,e,i){var s="addEventListener"in t,u=s?t.removeEventListener.bind(t,e,o,r):t.removeListener.bind(t,o);s?t.addEventListener(e,o,r):t.addListener(o),n.push([t,e,i,o,u])}))},unbind:function(e,i,o){t(e,i,(function(t,e,i){n=n.filter((function(n){return!!(n[0]!==t||n[1]!==e||n[2]!==i||o&&n[3]!==o)||(n[4](),!1)}))}))},dispatch:function(n,t,e){var i;return"function"===typeof CustomEvent?i=new CustomEvent(t,{bubbles:true,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,true,!1,e),n.dispatchEvent(i),i},destroy:function(){n.forEach((function(n){n[4]()})),u(n)}}}var mn="mounted",yn="ready",bn="move",wn="moved",En="shifted",_n="click",Sn="active",xn="inactive",Pn="visible",kn="hidden",Cn="slide:keydown",An="refresh",Ln="updated",Mn="resize",Dn="resized",Nn="drag",zn="dragging",On="dragged",jn="scroll",Rn="scrolled",In="destroy",Tn="arrows:mounted",Fn="arrows:updated",Wn="pagination:mounted",Gn="pagination:updated",Un="navigation:mounted",Xn="autoplay:play",Bn="autoplay:playing",Hn="autoplay:pause",Yn="lazyload:loaded";function qn(n){var t=n?n.event.bus:document.createDocumentFragment(),e=gn();return n&&n.event.on(In,e.destroy),O(e,{bus:t,on:function(n,i){e.bind(t,E(n).join(" "),(function(n){i.apply(i,v(n.detail)?n.detail:[])}))},off:c(e.unbind,t),emit:function(n){e.dispatch(t,n,a(arguments,1))}})}function Kn(n,t,e,i){var o,r,s=Date.now,u=0,a=!0,c=0;function l(){if(!a){if(u=n?on((s()-o)/n,1):1,e&&e(u),u>=1&&(t(),o=s(),i&&++c>=i))return f();d(l)}}function f(){a=!0}function p(){r&&cancelAnimationFrame(r),u=0,r=0,a=!0}return{start:function(t){!t&&p(),o=s()-(t?u*n:0),a=!1,d(l)},rewind:function(){o=s(),u=0,e&&e(u)},pause:f,cancel:p,set:function(t){n=t},isPaused:function(){return a}}}var Jn="ArrowLeft",Vn="ArrowRight",Qn="ArrowUp",Zn="ArrowDown",$n="ttb",nt={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Qn,Vn],ArrowRight:[Zn,Jn]};var tt="role",et="tabindex",it="aria-controls",ot="aria-current",rt="aria-selected",st="aria-label",ut="aria-labelledby",at="aria-hidden",ct="aria-orientation",lt="aria-roledescription",ft="aria-live",dt="aria-relevant",pt=[tt,et,"disabled",it,ot,st,ut,at,ct,lt],ht=nn,vt="splide__track",gt="splide__list",mt="splide__slide",yt=mt+"--clone",bt="splide__arrows",wt="splide__arrow",Et=wt+"--prev",_t=wt+"--next",St="splide__pagination",xt=St+"__page",Pt="splide__progress__bar",kt="splide__toggle",Ct="is-active",At="is-prev",Lt="is-next",Mt="is-visible",Dt="is-loading",Nt="is-focus-in",zt=[Ct,Mt,At,Lt,Dt,Nt],Ot={slide:mt,clone:yt,arrows:bt,arrow:wt,prev:Et,next:_t,pagination:St,page:xt,spinner:"splide__spinner"};var jt="touchstart mousedown",Rt="touchmove mousemove",It="touchend touchcancel mouseup";var Tt="slide",Ft="loop",Wt="fade";function Gt(n,t,e,i){var o,r=qn(n),s=r.on,u=r.emit,a=r.bind,l=n.Components,f=n.root,d=n.options,p=d.isNavigation,h=d.updateOnMove,v=d.i18n,g=d.pagination,m=d.slideFocus,y=l.Direction.resolve,b=X(i,"style"),w=X(i,st),E=e>-1,_=D(i,".splide__slide__container"),S=V(i,d.focusableNodes||"");function x(){var o=n.splides.map((function(n){var e=n.splide.Components.Slides.getAt(t);return e?e.slide.id:""})).join(" ");T(i,st,pn(v.slideX,(E?e:t)+1)),T(i,it,o),T(i,tt,m?"button":""),m&&I(i,lt)}function k(){o||C()}function C(){if(!o){var e=n.index;!function(){var n=A();n!==B(i,Ct)&&(P(i,Ct,n),T(i,ot,p&&n||""),u(n?Sn:xn,L))}(),function(){var t=function(){if(n.is(Wt))return A();var t=H(l.Elements.track),e=H(i),o=y("left"),r=y("right");return sn(t[o])<=un(e[o])&&sn(e[r])<=un(t[r])}(),e=!t&&(!A()||E);n.state.is([4,5])||T(i,at,e||"");T(S,et,e?-1:""),m&&T(i,et,e?-1:0);t!==B(i,Mt)&&(P(i,Mt,t),u(t?Pn:kn,L));if(!t&&document.activeElement===i){var o=l.Slides.getAt(n.index);o&&U(o.slide)}}(),P(i,At,t===e-1),P(i,Lt,t===e+1)}}function A(){var i=n.index;return i===t||d.cloneStatus&&i===e}var L={index:t,slideIndex:e,slide:i,container:_,isClone:E,mount:function(){E||(i.id=f.id+"-slide"+hn(t+1),T(i,tt,g?"tabpanel":"group"),T(i,lt,v.slide),T(i,st,w||pn(v.slideLabel,[t+1,n.length]))),a(i,"click",c(u,_n,L)),a(i,"keydown",c(u,Cn,L)),s([wn,En,Rn],C),s(Un,x),h&&s(bn,k)},destroy:function(){o=!0,r.destroy(),Q(i,zt),I(i,pt),T(i,"style",b),T(i,st,w||"")},update:C,style:function(n,t,e){W(e&&_||i,n,t)},isWithin:function(e,i){var o=an(e-t);return E||!d.rewind&&!n.is(Ft)||(o=on(o,n.length-o)),o<=i}};return L}var Ut={passive:!1,capture:!0};var Xt={Spacebar:" ",Right:Vn,Left:Jn,Up:Qn,Down:Zn};function Bt(n){return n=m(n)?n:n.key,Xt[n]||n}var Ht="keydown";var Yt="data-splide-lazy",qt="data-splide-lazy-srcset";var Kt=[" ","Enter"];var Jt=Object.freeze({__proto__:null,Media:function(n,t,e){var i=n.state,o=e.breakpoints||{},s=e.reducedMotion||{},u=gn(),a=[];function c(n){n&&u.destroy()}function l(n,t){var e=matchMedia(t);u.bind(e,"change",f),a.push([n,e])}function f(){var t=i.is(7),o=e.direction,r=a.reduce((function(n,t){return j(n,t[1].matches?t[0]:{})}),{});R(e),d(r),e.destroy?n.destroy("completely"===e.destroy):t?(c(!0),n.mount()):o!==e.direction&&n.refresh()}function d(t,o){j(e,t),o&&j(Object.getPrototypeOf(e),t),i.is(1)||n.emit(Ln,e)}return{setup:function(){var n="min"===e.mediaQuery;N(o).sort((function(t,e){return n?+t-+e:+e-+t})).forEach((function(t){l(o[t],"("+(n?"min":"max")+"-width:"+t+"px)")})),l(s,r),f()},destroy:c,reduce:function(n){matchMedia(r).matches&&(n?j(e,s):R(e,N(s)))},set:d}},Direction:function(n,t,e){return{resolve:function(n,t,i){var o="rtl"!==(i=i||e.direction)||t?i===$n?0:-1:1;return nt[n]&&nt[n][o]||n.replace(/width|left|right/i,(function(n,t){var e=nt[n.toLowerCase()][o]||n;return t>0?e.charAt(0).toUpperCase()+e.slice(1):e}))},orient:function(n){return n*("rtl"===e.direction?1:-1)}}},Elements:function(n,t,e){var i,o,r,s=qn(n),a=s.on,c=s.bind,l=n.root,f=e.i18n,d={},p=[],h=[],v=[];function m(){i=w("."+vt),o=D(i,"."+gt),en(i&&o,"A track/list element is missing."),x(p,M(o,".splide__slide:not(."+yt+")")),z({arrows:bt,pagination:St,prev:Et,next:_t,bar:Pt,toggle:kt},(function(n,t){d[t]=w("."+n)})),O(d,{root:l,track:i,list:o,slides:p}),function(){var n=l.id||(r=nn,""+r+hn(vn[r]=(vn[r]||0)+1)),t=e.role;var r;l.id=n,i.id=i.id||n+"-track",o.id=o.id||n+"-list",!X(l,tt)&&"SECTION"!==l.tagName&&t&&T(l,tt,t);T(l,lt,f.carousel),T(o,tt,"presentation")}(),b()}function y(n){var t=pt.concat("style");u(p),Q(l,h),Q(i,v),I([i,o],t),I(l,n?t:["style",lt])}function b(){Q(l,h),Q(i,v),h=E(ht),v=E(vt),k(l,h),k(i,v),T(l,st,e.label),T(l,ut,e.labelledby)}function w(n){var t=J(l,n);return t&&function(n,t){if(g(n.closest))return n.closest(t);for(var e=n;e&&1===e.nodeType&&!L(e,t);)e=e.parentElement;return e}(t,".splide")===l?t:void 0}function E(n){return[n+"--"+e.type,n+"--"+e.direction,e.drag&&n+"--draggable",e.isNavigation&&n+"--nav",n===ht&&Ct]}return O(d,{setup:m,mount:function(){a(An,y),a(An,m),a(Ln,b),c(document,"touchstart mousedown keydown",(function(n){r="keydown"===n.type}),{capture:!0}),c(l,"focusin",(function(){P(l,Nt,!!r)}))},destroy:y})},Slides:function(n,t,e){var i=qn(n),o=i.on,r=i.emit,s=i.bind,a=t.Elements,l=a.slides,f=a.list,d=[];function p(){l.forEach((function(n,t){v(n,t,-1)}))}function h(){b((function(n){n.destroy()})),u(d)}function v(t,e,i){var o=Gt(n,e,i,t);o.mount(),d.push(o)}function y(n){return n?x((function(n){return!n.isClone})):d}function b(n,t){y(t).forEach(n)}function x(n){return d.filter(g(n)?n:function(t){return m(n)?L(t.slide,n):S(E(n),t.index)})}return{mount:function(){p(),o(An,h),o(An,p),o([mn,An],(function(){d.sort((function(n,t){return n.index-t.index}))}))},destroy:h,update:function(){b((function(n){n.update()}))},register:v,get:y,getIn:function(n){var i=t.Controller,o=i.toIndex(n),r=i.hasFocus()?1:e.perPage;return x((function(n){return ln(n.index,o,o+r-1)}))},getAt:function(n){return x(n)[0]},add:function(n,t){_(n,(function(n){if(m(n)&&(n=q(n)),w(n)){var i=l[t];i?A(n,i):C(f,n),k(n,e.classes.slide),function(n,t){var e=V(n,"img"),i=e.length;i?e.forEach((function(n){s(n,"load error",(function(){--i||t()}))})):t()}(n,c(r,Mn))}})),r(An)},remove:function(n){Y(x(n).map((function(n){return n.slide}))),r(An)},forEach:b,filter:x,style:function(n,t,e){b((function(i){i.style(n,t,e)}))},getLength:function(n){return n?l.length:d.length},isEnough:function(){return d.length>e.perPage}}},Layout:function(n,t,e){var i,o,r=qn(n),s=r.on,u=r.bind,a=r.emit,l=t.Slides,f=t.Direction.resolve,d=t.Elements,p=d.root,v=d.track,g=d.list,m=l.getAt,y=l.style;function b(){o=null,i=e.direction===$n,W(p,"maxWidth",$(e.width)),W(v,f("paddingLeft"),E(!1)),W(v,f("paddingRight"),E(!0)),w()}function w(){var n=H(p);o&&o.width===n.width&&o.height===n.height||(W(v,"height",function(){var n="";i&&(en(n=_(),"height or heightRatio is missing."),n="calc("+n+" - "+E(!1)+" - "+E(!0)+")");return n}()),y(f("marginRight"),$(e.gap)),y("width",e.autoWidth?null:$(e.fixedWidth)||(i?"":S())),y("height",$(e.fixedHeight)||(i?e.autoHeight?null:S():_()),!0),o=n,a(Dn))}function E(n){var t=e.padding,i=f(n?"right":"left");return t&&$(t[i]||(h(t)?0:t))||"0px"}function _(){return $(e.height||H(g).width*e.heightRatio)}function S(){var n=$(e.gap);return"calc((100%"+(n&&" + "+n)+")/"+(e.perPage||1)+(n&&" - "+n)+")"}function x(n,t){var e=m(n);if(e){var i=H(e.slide)[f("right")],o=H(g)[f("left")];return an(i-o)+(t?0:P())}return 0}function P(){var n=m(0);return n&&parseFloat(W(n.slide,f("marginRight")))||0}return{mount:function(){b(),u(window,"resize load",function(n,t){var e;return function(){e||(e=Kn(t||0,(function(){n(),e=null}),null,1)).start()}}(c(a,Mn))),s([Ln,An],b),s(Mn,w)},listSize:function(){return H(g)[f("width")]},slideSize:function(n,t){var e=m(n||0);return e?H(e.slide)[f("width")]+(t?0:P()):0},sliderSize:function(){return x(n.length-1,!0)-x(-1,!0)},totalSize:x,getPadding:function(n){return parseFloat(W(v,f("padding"+(n?"Right":"Left"))))||0}}},Clones:function(n,t,e){var i,o=qn(n),r=o.on,s=o.emit,a=t.Elements,c=t.Slides,l=t.Direction.resolve,f=[];function d(){(i=v())&&(!function(t){var i=c.get().slice(),o=i.length;if(o){for(;i.length<t;)x(i,i);x(i.slice(-t),i.slice(0,t)).forEach((function(r,s){var u=s<t,l=function(t,i){var o=t.cloneNode(!0);return k(o,e.classes.clone),o.id=n.root.id+"-clone"+hn(i+1),o}(r.slide,s);u?A(l,i[0].slide):C(a.list,l),x(f,l),c.register(l,s-t+(u?0:o),r.index)}))}}(i),s(Mn))}function p(){Y(f),u(f)}function h(){i<v()&&s(An)}function v(){var i=e.clones;if(n.is(Ft)){if(!i){var o=e[l("fixedWidth")]&&t.Layout.slideSize(0);i=o&&un(H(a.track)[l("width")]/o)||e[l("autoWidth")]&&n.length||2*e.perPage}}else i=0;return i}return{mount:function(){d(),r(An,p),r(An,d),r([Ln,Mn],h)},destroy:p}},Move:function(n,t,e){var i,o=qn(n),r=o.on,s=o.emit,u=n.state.set,a=t.Layout,c=a.slideSize,l=a.getPadding,f=a.totalSize,d=a.listSize,p=a.sliderSize,h=t.Direction,v=h.resolve,g=h.orient,m=t.Elements,b=m.list,w=m.track;function E(){t.Controller.isBusy()||(t.Scroll.cancel(),_(n.index),t.Slides.update())}function _(n){S(k(n,!0))}function S(t,e){if(!n.is(Wt)){var i=e?t:function(t){if(n.is(Ft)){var e=g(t-C()),i=L(!1,t)&&e<0,o=L(!0,t)&&e>0;(i||o)&&(t=x(t,o))}return t}(t);W(b,"transform","translate"+v("X")+"("+i+"px)"),t!==i&&s(En)}}function x(n,t){var e=n-A(t),i=p();return n-=g(i*(un(an(e)/i)||1))*(t?1:-1)}function P(){S(C()),i.cancel()}function k(t,i){var o=g(f(t-1)-function(n){var t=e.focus;return"center"===t?(d()-c(n,!0))/2:+t*c(n)||0}(t));return i?function(t){e.trimSpace&&n.is(Tt)&&(t=fn(t,0,g(p()-d())));return t}(o):o}function C(){var n=v("left");return H(b)[n]-H(w)[n]+g(l(!1))}function A(n){return k(n?t.Controller.getEnd():0,!!e.trimSpace)}function L(n,t){t=y(t)?C():t;var e=!0!==n&&g(t)<g(A(!1)),i=!1!==n&&g(t)>g(A(!0));return e||i}return{mount:function(){i=t.Transition,r([mn,Dn,Ln,An],E)},move:function(n,t,e,o){var r=C();n!==t&&function(n){var t=g(x(C(),n));return n?t>=0:t<=b["scroll"+v("Width")]-H(w)[v("width")]}(n>t)&&(P(),S(x(r,n>t),!0)),u(4),s(bn,t,e,n),i.start(t,(function(){u(3),s(wn,t,e,n),o&&o()}))},jump:_,translate:S,shift:x,cancel:P,toIndex:function(n){for(var e=t.Slides.get(),i=0,o=1/0,r=0;r<e.length;r++){var s=e[r].index,u=an(k(s,!0)-n);if(!(u<=o))break;o=u,i=s}return i},toPosition:k,getPosition:C,getLimit:A,exceededLimit:L,reposition:E}},Controller:function(n,t,e){var i,o,r,s=qn(n).on,u=t.Move,a=u.getPosition,l=u.getLimit,f=u.toPosition,d=t.Slides,p=d.isEnough,h=d.getLength,v=n.is(Ft),g=n.is(Tt),b=c(x,!1),w=c(x,!0),E=e.start||0,_=E;function S(){i=h(!0),o=e.perMove,r=e.perPage;var n=fn(E,0,i-1);n!==E&&(E=n,u.reposition())}function x(n,t){var e=o||(D()?1:r),i=P(E+e*(n?-1:1),E,!(o||D()));return-1===i&&g&&!cn(a(),l(!n),1)?n?0:C():t?i:k(i)}function P(t,o,s){if(p()){var u=C(),c=function(t){if(g&&"move"===e.trimSpace&&t!==E)for(var i=a();i===f(t,!0)&&ln(t,0,n.length-1,!e.rewind);)t<E?--t:++t;return t}(t);c!==t&&(o=t,t=c,s=!1),t<0||t>u?t=ln(0,t,o,!0)||ln(u,o,t,!0)?A(L(t)):v?s?t<0?-(i%r||r):i:t:e.rewind?t<0?u:0:-1:s&&t!==o&&(t=A(L(o)+(t<o?-1:1)))}else t=-1;return t}function k(n){return v?(n+i)%i||0:n}function C(){return rn(i-(D()||v&&o?1:r),0)}function A(n){return fn(D()?n:r*n,0,C())}function L(n){return D()?n:sn((n>=C()?i-1:n)/r)}function M(n){n!==E&&(_=E,E=n)}function D(){return!y(e.focus)||e.isNavigation}function N(){return n.state.is([4,5])&&!!e.waitForTransition}return{mount:function(){S(),s([Ln,An],S)},go:function(n,t,e){if(!N()){var i=function(n){var t=E;if(m(n)){var e=n.match(/([+\-<>])(\d+)?/)||[],i=e[1],o=e[2];"+"===i||"-"===i?t=P(E+ +(""+i+(+o||1)),E):">"===i?t=o?A(+o):b(!0):"<"===i&&(t=w(!0))}else t=v?n:fn(n,0,C());return t}(n),o=k(i);o>-1&&(t||o!==E)&&(M(o),u.move(i,o,_,e))}},scroll:function(n,e,i,o){t.Scroll.scroll(n,e,i,(function(){M(k(u.toIndex(u.getPosition()))),o&&o()}))},getNext:b,getPrev:w,getAdjacent:x,getEnd:C,setIndex:M,getIndex:function(n){return n?_:E},toIndex:A,toPage:L,toDest:function(n){var t=u.toIndex(n);return g?fn(t,0,C()):t},hasFocus:D,isBusy:N}},Arrows:function(n,t,e){var i,o,r=qn(n),s=r.on,u=r.bind,a=r.emit,l=e.classes,f=e.i18n,d=t.Elements,p=t.Controller,h=d.arrows,v=d.track,g=h,m=d.prev,y=d.next,b={};function w(){!function(){var n=e.arrows;!n||m&&y||(g=h||F("div",l.arrows),m=x(!0),y=x(!1),i=!0,C(g,[m,y]),!h&&A(g,v));m&&y&&(O(b,{prev:m,next:y}),G(g,n?"":"none"),k(g,o=bt+"--"+e.direction),n&&(s([wn,An,Rn],P),u(y,"click",c(S,">")),u(m,"click",c(S,"<")),P(),T([m,y],it,v.id),a(Tn,m,y)))}(),s(Ln,E)}function E(){_(),w()}function _(){r.destroy(),Q(g,o),i?(Y(h?[m,y]:g),m=y=null):I([m,y],pt)}function S(n){p.go(n,!0)}function x(n){return q('<button class="'+l.arrow+" "+(n?l.prev:l.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(e.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function P(){var t=n.index,e=p.getPrev(),i=p.getNext(),o=e>-1&&t<e?f.last:f.prev,r=i>-1&&t>i?f.first:f.next;m.disabled=e<0,y.disabled=i<0,T(m,st,o),T(y,st,r),a(Fn,m,y,e,i)}return{arrows:b,mount:w,destroy:_}},Autoplay:function(n,t,e){var i,o,r=qn(n),s=r.on,u=r.bind,a=r.emit,c=Kn(e.interval,n.go.bind(n,">"),(function(n){var t=f.bar;t&&W(t,"width",100*n+"%"),a(Bn,n)})),l=c.isPaused,f=t.Elements,d=t.Elements,p=d.root,h=d.toggle,v=e.autoplay,g="pause"===v;function m(){l()&&t.Slides.isEnough()&&(c.start(!e.resetProgress),o=i=g=!1,w(),a(Xn))}function y(n){void 0===n&&(n=!0),g=!!n,w(),l()||(c.pause(),a(Hn))}function b(){g||(i||o?y(!1):m())}function w(){h&&(P(h,Ct,!g),T(h,st,e.i18n[g?"play":"pause"]))}function E(n){var i=t.Slides.getAt(n);c.set(i&&+X(i.slide,"data-splide-interval")||e.interval)}return{mount:function(){v&&(!function(){e.pauseOnHover&&u(p,"mouseenter mouseleave",(function(n){i="mouseenter"===n.type,b()}));e.pauseOnFocus&&u(p,"focusin focusout",(function(n){o="focusin"===n.type,b()}));h&&u(h,"click",(function(){g?m():y(!0)}));s([bn,jn,An],c.rewind),s(bn,E)}(),h&&T(h,it,f.track.id),g||m(),w())},destroy:c.cancel,play:m,pause:y,isPaused:l}},Cover:function(n,t,e){var i=qn(n).on;function o(n){t.Slides.forEach((function(t){var e=D(t.container||t.slide,"img");e&&e.src&&r(n,e,t)}))}function r(n,t,e){e.style("background",n?'center/cover no-repeat url("'+t.src+'")':"",!0),G(t,n?"none":"")}return{mount:function(){e.cover&&(i(Yn,c(r,!0)),i([mn,Ln,An],c(o,!0)))},destroy:c(o,!1)}},Scroll:function(n,t,e){var i,o,r=qn(n),s=r.on,u=r.emit,a=n.state.set,l=t.Move,f=l.getPosition,d=l.getLimit,p=l.exceededLimit,h=l.translate,v=1;function g(n,e,r,s,d){var p=f();if(b(),r){var h=t.Layout.sliderSize(),g=dn(n)*h*sn(an(n)/h)||0;n=l.toPosition(t.Controller.toDest(n%h))+g}var w=cn(p,n,1);v=1,e=w?0:e||rn(an(n-p)/1.5,800),o=s,i=Kn(e,m,c(y,p,n,d),1),a(5),u(jn),i.start()}function m(){a(3),o&&o(),u(Rn)}function y(t,i,o,r){var s=f(),u=(t+(i-t)*function(n){var t=e.easingFunc;return t?t(n):1-Math.pow(1-n,4)}(r)-s)*v;h(s+u),n.is(Tt)&&!o&&p()&&(v*=.6,an(u)<10&&g(d(p(!0)),600,!1,void 0,!0))}function b(){i&&i.cancel()}function w(){i&&!i.isPaused()&&(b(),m())}return{mount:function(){s(bn,b),s([Ln,An],w)},destroy:b,scroll:g,cancel:w}},Drag:function(n,t,e){var i,o,r,s,u,a,c,l,d=qn(n),p=d.on,v=d.emit,g=d.bind,m=d.unbind,y=n.state,b=t.Move,w=t.Scroll,E=t.Controller,_=t.Elements.track,S=t.Media.reduce,x=t.Direction,P=x.resolve,k=x.orient,C=b.getPosition,A=b.exceededLimit,M=!1;function D(){var n=e.drag;U(!n),s="free"===n}function N(n){if(a=!1,!c){var t=G(n);!function(n){var t=e.noDrag;return!L(n,".splide__pagination__page, ."+wt)&&(!t||!L(n,t))}(n.target)||!t&&n.button||(E.isBusy()?K(n,!0):(l=t?_:window,u=y.is([4,5]),r=null,g(l,Rt,z,Ut),g(l,It,O,Ut),b.cancel(),w.cancel(),R(n)))}}function z(t){if(y.is(6)||(y.set(6),v(Nn)),t.cancelable)if(u){b.translate(i+I(t)/(M&&n.is(Tt)?5:1));var o=T(t)>200,r=M!==(M=A());(o||r)&&R(t),a=!0,v(zn),K(t)}else(function(n){return an(I(n))>an(I(n,!0))})(t)&&(u=function(n){var t=e.dragMinThreshold,i=h(t),o=i&&t.mouse||0,r=(i?t.touch:+t)||10;return an(I(n))>(G(n)?r:o)}(t),K(t))}function O(i){y.is(6)&&(y.set(3),v(On)),u&&(!function(i){var o=function(t){if(n.is(Ft)||!M){var e=T(t);if(e&&e<200)return I(t)/e}return 0}(i),r=function(n){return C()+dn(n)*on(an(n)*(e.flickPower||600),s?1/0:t.Layout.listSize()*(e.flickMaxPages||1))}(o),u=e.rewind&&e.rewindByDrag;S(!1),s?E.scroll(r,0,e.snap):n.is(Wt)?E.go(k(dn(o))<0?u?"<":"-":u?">":"+"):n.is(Tt)&&M&&u?E.go(A(!0)?">":"<"):E.go(E.toDest(r),!0);S(!0)}(i),K(i)),m(l,Rt,z),m(l,It,O),u=!1}function j(n){!c&&a&&K(n,!0)}function R(n){r=o,o=n,i=C()}function I(n,t){return W(n,t)-W(F(n),t)}function T(n){return Z(n)-Z(F(n))}function F(n){return o===n&&r||o}function W(n,t){return(G(n)?n.changedTouches[0]:n)["page"+P(t?"Y":"X")]}function G(n){return"undefined"!==typeof TouchEvent&&n instanceof TouchEvent}function U(n){c=n}return{mount:function(){g(_,Rt,f,Ut),g(_,It,f,Ut),g(_,jt,N,Ut),g(_,"click",j,{capture:!0}),g(_,"dragstart",K),p([mn,Ln],D)},disable:U,isDragging:function(){return u}}},Keyboard:function(n,t,e){var i,o,r=qn(n),s=r.on,u=r.bind,a=r.unbind,c=n.root,f=t.Direction.resolve;function d(){var n=e.keyboard;n&&(i="global"===n?window:c,u(i,Ht,v))}function p(){a(i,Ht)}function h(){var n=o;o=!0,l((function(){o=n}))}function v(t){if(!o){var e=Bt(t);e===f(Jn)?n.go("<"):e===f(Vn)&&n.go(">")}}return{mount:function(){d(),s(Ln,p),s(Ln,d),s(bn,h)},destroy:p,disable:function(n){o=n}}},LazyLoad:function(n,t,e){var i=qn(n),o=i.on,r=i.off,s=i.bind,a=i.emit,l="sequential"===e.lazyLoad,f=[mn,An,wn,Rn],d=[];function p(){u(d),t.Slides.forEach((function(n){V(n.slide,"[data-splide-lazy], [data-splide-lazy-srcset]").forEach((function(t){var i=X(t,Yt),o=X(t,qt);if(i!==t.src||o!==t.srcset){var r=e.classes.spinner,s=t.parentElement,u=D(s,"."+r)||F("span",r,s);d.push([t,n,u]),t.src||G(t,"none")}}))})),l&&m()}function h(){(d=d.filter((function(t){var i=e.perPage*((e.preloadPages||1)+1)-1;return!t[1].isWithin(n.index,i)||v(t)}))).length||r(f)}function v(n){var t=n[0];k(n[1].slide,Dt),s(t,"load error",c(g,n)),T(t,"src",X(t,Yt)),T(t,"srcset",X(t,qt)),I(t,Yt),I(t,qt)}function g(n,t){var e=n[0],i=n[1];Q(i.slide,Dt),"error"!==t.type&&(Y(n[2]),G(e,""),a(Yn,e,i),a(Mn)),l&&m()}function m(){d.length&&v(d.shift())}return{mount:function(){e.lazyLoad&&(p(),o(An,p),l||o(f,h))},destroy:c(u,d)}},Pagination:function(n,t,e){var i,o,r=qn(n),s=r.on,l=r.emit,f=r.bind,d=t.Slides,p=t.Elements,h=t.Controller,v=h.hasFocus,g=h.getIndex,m=h.go,y=t.Direction.resolve,b=[];function w(){i&&(Y(p.pagination?a(i.children):i),Q(i,o),u(b),i=null),r.destroy()}function E(n){m(">"+n,!0)}function _(n,t){var e=b.length,i=Bt(t),o=S(),r=-1;i===y(Vn,!1,o)?r=++n%e:i===y(Jn,!1,o)?r=(--n+e)%e:"Home"===i?r=0:"End"===i&&(r=e-1);var s=b[r];s&&(U(s.button),m(">"+r),K(t,!0))}function S(){return e.paginationDirection||e.direction}function x(n){return b[h.toPage(n)]}function P(){var n=x(g(!0)),t=x(g());if(n){var e=n.button;Q(e,Ct),I(e,rt),T(e,et,-1)}if(t){var o=t.button;k(o,Ct),T(o,rt,!0),T(o,et,"")}l(Gn,{list:i,items:b},n,t)}return{items:b,mount:function t(){w(),s([Ln,An],t),e.pagination&&d.isEnough()&&(s([bn,jn,Rn],P),function(){var t=n.length,r=e.classes,s=e.i18n,u=e.perPage,a=v()?t:un(t/u);k(i=p.pagination||F("ul",r.pagination,p.track.parentElement),o=St+"--"+S()),T(i,tt,"tablist"),T(i,st,s.select),T(i,ct,S()===$n?"vertical":"");for(var l=0;l<a;l++){var h=F("li",null,i),g=F("button",{class:r.page,type:"button"},h),m=d.getIn(l).map((function(n){return n.slide.id})),y=!v()&&u>1?s.pageX:s.slideX;f(g,"click",c(E,l)),e.paginationKeyboard&&f(g,"keydown",c(_,l)),T(h,tt,"presentation"),T(g,tt,"tab"),T(g,it,m.join(" ")),T(g,st,pn(y,l+1)),T(g,et,-1),b.push({li:h,button:g,page:l})}}(),P(),l(Wn,{list:i,items:b},x(n.index)))},destroy:w,getAt:x,update:P}},Sync:function(n,t,e){var i=e.isNavigation,o=e.slideFocus,r=[];function s(){n.splides.forEach((function(t){t.isParent||(c(n,t.splide),c(t.splide,n))})),i&&function(){var t=qn(n),e=t.on;e(_n,f),e(Cn,d),e([mn,Ln],l),r.push(t),t.emit(Un,n.splides)}()}function a(){r.forEach((function(n){n.destroy()})),u(r)}function c(n,t){var e=qn(n);e.on(bn,(function(n,e,i){t.go(t.is(Ft)?i:n)})),r.push(e)}function l(){T(t.Elements.list,ct,e.direction===$n?"vertical":"")}function f(t){n.go(t.index)}function d(n,t){S(Kt,Bt(t))&&(f(n),K(t))}return{setup:function(){n.options={slideFocus:y(o)?i:o}},mount:s,destroy:a,remount:function(){a(),s()}}},Wheel:function(n,t,e){var i=qn(n).bind,o=0;function r(i){if(i.cancelable){var r=i.deltaY,s=r<0,u=Z(i),a=e.wheelMinThreshold||0,c=e.wheelSleep||0;an(r)>a&&u-o>c&&(n.go(s?"<":">"),o=u),function(i){return!e.releaseWheel||n.state.is(4)||-1!==t.Controller.getAdjacent(i)}(s)&&K(i)}}return{mount:function(){e.wheel&&i(t.Elements.track,"wheel",r,Ut)}}},Live:function(n,t,e){var i=qn(n).on,o=t.Elements.track,r=e.live&&!e.isNavigation,s=F("span","splide__sr");function u(n){r&&T(o,ft,n?"off":"polite")}return{mount:function(){r&&(u(!t.Autoplay.isPaused()),T(o,dt,"additions"),s.textContent="\u2026",i(Xn,c(u,!0)),i(Hn,c(u,!1)),i([wn,Rn],c(C,o,s)))},disable:u,destroy:function(){I(o,[ft,dt]),Y(s)}}}}),Vt={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Ot,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Qt(n,t,e){var i=qn(n).on;return{mount:function(){i([mn,An],(function(){l((function(){t.Slides.style("transition","opacity "+e.speed+"ms "+e.easing)}))}))},start:function(n,e){var i=t.Elements.track;W(i,"height",$(H(i).height)),l((function(){e(),W(i,"height","")}))},cancel:f}}function Zt(n,t,e){var i,o=qn(n).bind,r=t.Move,s=t.Controller,u=t.Scroll,a=t.Elements.list,l=c(W,a,"transition");function f(){l(""),u.cancel()}return{mount:function(){o(a,"transitionend",(function(n){n.target===a&&i&&(f(),i())}))},start:function(t,o){var a=r.toPosition(t,!0),c=r.getPosition(),f=function(t){var i=e.rewindSpeed;if(n.is(Tt)&&i){var o=s.getIndex(!0),r=s.getEnd();if(0===o&&t>=r||o>=r&&0===t)return i}return e.speed}(t);an(a-c)>=1&&f>=1?e.useScroll?u.scroll(a,f,!1,o):(l("transform "+f+"ms "+e.easing),r.translate(a,!0),i=o):(r.jump(t),o())},cancel:f}}var $t=function(){function n(t,e){this.event=qn(),this.Components={},this.state=function(n){var t=n;return{set:function(n){t=n},is:function(n){return S(E(n),t)}}}(1),this.splides=[],this._o={},this._E={};var i=m(t)?J(document,t):t;en(i,i+" is invalid."),this.root=i,e=j({label:X(i,st)||"",labelledby:X(i,ut)||""},Vt,n.defaults,e||{});try{j(e,JSON.parse(X(i,tn)))}catch(o){en(!1,"Invalid JSON")}this._o=Object.create(j({},e))}var t,e,i,r=n.prototype;return r.mount=function(n,t){var e=this,i=this.state,o=this.Components;return en(i.is([1,7]),"Already mounted!"),i.set(1),this._C=o,this._T=t||this._T||(this.is(Wt)?Qt:Zt),this._E=n||this._E,z(O({},Jt,this._E,{Transition:this._T}),(function(n,t){var i=n(e,o,e._o);o[t]=i,i.setup&&i.setup()})),z(o,(function(n){n.mount&&n.mount()})),this.emit(mn),k(this.root,"is-initialized"),i.set(3),this.emit(yn),this},r.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},r.go=function(n){return this._C.Controller.go(n),this},r.on=function(n,t){return this.event.on(n,t),this},r.off=function(n){return this.event.off(n),this},r.emit=function(n){var t;return(t=this.event).emit.apply(t,[n].concat(a(arguments,1))),this},r.add=function(n,t){return this._C.Slides.add(n,t),this},r.remove=function(n){return this._C.Slides.remove(n),this},r.is=function(n){return this._o.type===n},r.refresh=function(){return this.emit(An),this},r.destroy=function(n){void 0===n&&(n=!0);var t=this.event,e=this.state;return e.is(1)?qn(this).on(yn,this.destroy.bind(this,n)):(z(this._C,(function(t){t.destroy&&t.destroy(n)}),!0),t.emit(In),t.destroy(),n&&u(this.splides),e.set(7)),this},t=n,(e=[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&o(t.prototype,e),i&&o(t,i),Object.defineProperty(t,"prototype",{writable:!1}),n}();$t.defaults={},$t.STATES=s;var ne=[[mn,"onMounted"],[yn,"onReady"],[bn,"onMove"],[wn,"onMoved"],[_n,"onClick"],[Sn,"onActive"],[xn,"onInactive"],[Pn,"onVisible"],[kn,"onHidden"],[An,"onRefresh"],[Ln,"onUpdated"],[Mn,"onResize"],[Dn,"onResized"],[Nn,"onDrag"],[zn,"onDragging"],[On,"onDragged"],[jn,"onScroll"],[Rn,"onScrolled"],[In,"onDestroy"],[Tn,"onArrowsMounted"],[Fn,"onArrowsUpdated"],[Wn,"onPaginationMounted"],[Gn,"onPaginationUpdated"],[Un,"onNavigationMounted"],[Xn,"onAutoplayPlay"],[Bn,"onAutoplayPlaying"],[Hn,"onAutoplayPause"],[Yn,"onLazyLoadLoaded"]];function te(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.filter(Boolean).join(" ")}function ee(n){return null!==n&&"object"===typeof n}function ie(n,t){if(Array.isArray(n)&&Array.isArray(t))return n.length===t.length&&!n.some(((n,e)=>!ie(n,t[e])));if(ee(n)&&ee(t)){const e=Object.keys(n),i=Object.keys(t);return e.length===i.length&&!e.some((e=>!Object.prototype.hasOwnProperty.call(t,e)||!ie(n[e],t[e])))}return n===t}function oe(n,t){const e=n;return function(n,t){if(n){const e=Object.keys(n);for(let i=0;i<e.length;i++){const o=e[i];if("__proto__"!==o&&!1===t(n[o],o))break}}}(t,((n,t)=>{Array.isArray(n)?e[t]=n.slice():ee(n)?e[t]=oe(ee(e[t])?e[t]:{},n):e[t]=n})),e}var re=n=>{let{children:t,className:e,...o}=n;return i.createElement("div",{className:te("splide__track",e),...o},i.createElement("ul",{className:"splide__list"},t))},se=class extends i.Component{constructor(){super(...arguments),this.splideRef=i.createRef(),this.slides=[]}componentDidMount(){const{options:n,extensions:t,transition:e}=this.props,{current:i}=this.splideRef;i&&(this.splide=new $t(i,n),this.bind(this.splide),this.splide.mount(t,e),this.options=oe({},n||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){if(!this.splide)return;const{options:n}=this.props;n&&!ie(this.options,n)&&(this.splide.options=n,this.options=oe({},n));const t=this.getSlides();var e,i;e=this.slides,i=t,(e.length!==i.length||e.some(((n,t)=>n!==i[t])))&&(this.splide.refresh(),this.slides=t)}sync(n){var t;null==(t=this.splide)||t.sync(n)}go(n){var t;null==(t=this.splide)||t.go(n)}getSlides(){var n;if(this.splide){const t=null==(n=this.splide.Components.Elements)?void 0:n.list.children;return t&&Array.prototype.slice.call(t)||[]}return[]}bind(n){ne.forEach((t=>{let[e,i]=t;const o=this.props[i];"function"===typeof o&&n.on(e,(function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];o(n,...e)}))}))}omit(n,t){return t.forEach((t=>{Object.prototype.hasOwnProperty.call(n,t)&&delete n[t]})),n}render(){const{className:n,tag:t="div",hasTrack:e=!0,children:o,...r}=this.props;return i.createElement(t,{className:te("splide",n),ref:this.splideRef,...this.omit(r,["options",...ne.map((n=>n[1]))])},e?i.createElement(re,null,o):o)}},ue=n=>{let{children:t,className:e,...o}=n;return i.createElement("li",{className:te("splide__slide",e),...o},t)}}}]);