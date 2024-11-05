/*! For license information please see 6119.d0dbc900.chunk.js.LICENSE.txt */
(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[6119],{72884:(e,t)=>{var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=i(e,l(o)))}return e}function l(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)n.call(e,o)&&e[o]&&(t=i(t,o));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},6119:(e,t,o)=>{"use strict";o.d(t,{u:()=>Le});var n=o(47313);const r=Math.min,l=Math.max,i=Math.round,c=Math.floor,s=e=>({x:e,y:e}),a={left:"right",right:"left",bottom:"top",top:"bottom"},u={start:"end",end:"start"};function d(e,t,o){return l(e,r(t,o))}function f(e,t){return"function"===typeof e?e(t):e}function p(e){return e.split("-")[0]}function m(e){return e.split("-")[1]}function v(e){return"x"===e?"y":"x"}function y(e){return"y"===e?"height":"width"}function h(e){return["top","bottom"].includes(p(e))?"y":"x"}function g(e){return v(h(e))}function w(e){return e.replace(/start|end/g,(e=>u[e]))}function b(e){return e.replace(/left|right|bottom|top/g,(e=>a[e]))}function x(e){return"number"!==typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function _(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function E(e,t,o){let{reference:n,floating:r}=e;const l=h(t),i=g(t),c=y(i),s=p(t),a="y"===l,u=n.x+n.width/2-r.width/2,d=n.y+n.height/2-r.height/2,f=n[c]/2-r[c]/2;let v;switch(s){case"top":v={x:u,y:n.y-r.height};break;case"bottom":v={x:u,y:n.y+n.height};break;case"right":v={x:n.x+n.width,y:d};break;case"left":v={x:n.x-r.width,y:d};break;default:v={x:n.x,y:n.y}}switch(m(t)){case"start":v[i]-=f*(o&&a?-1:1);break;case"end":v[i]+=f*(o&&a?-1:1)}return v}async function S(e,t){var o;void 0===t&&(t={});const{x:n,y:r,platform:l,rects:i,elements:c,strategy:s}=e,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:m=0}=f(t,e),v=x(m),y=c[p?"floating"===d?"reference":"floating":d],h=_(await l.getClippingRect({element:null==(o=await(null==l.isElement?void 0:l.isElement(y)))||o?y:y.contextElement||await(null==l.getDocumentElement?void 0:l.getDocumentElement(c.floating)),boundary:a,rootBoundary:u,strategy:s})),g="floating"===d?{...i.floating,x:n,y:r}:i.reference,w=await(null==l.getOffsetParent?void 0:l.getOffsetParent(c.floating)),b=await(null==l.isElement?void 0:l.isElement(w))&&await(null==l.getScale?void 0:l.getScale(w))||{x:1,y:1},E=_(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:g,offsetParent:w,strategy:s}):g);return{top:(h.top-E.top+v.top)/b.y,bottom:(E.bottom-h.bottom+v.bottom)/b.y,left:(h.left-E.left+v.left)/b.x,right:(E.right-h.right+v.right)/b.x}}const T=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var o,n;const{x:r,y:l,placement:i,middlewareData:c}=t,s=await async function(e,t){const{placement:o,platform:n,elements:r}=e,l=await(null==n.isRTL?void 0:n.isRTL(r.floating)),i=p(o),c=m(o),s="y"===h(o),a=["left","top"].includes(i)?-1:1,u=l&&s?-1:1,d=f(t,e);let{mainAxis:v,crossAxis:y,alignmentAxis:g}="number"===typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return c&&"number"===typeof g&&(y="end"===c?-1*g:g),s?{x:y*u,y:v*a}:{x:v*a,y:y*u}}(t,e);return i===(null==(o=c.offset)?void 0:o.placement)&&null!=(n=c.arrow)&&n.alignmentOffset?{}:{x:r+s.x,y:l+s.y,data:{...s,placement:i}}}}};function A(e){return k(e)?(e.nodeName||"").toLowerCase():"#document"}function R(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function O(e){var t;return null==(t=(k(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function k(e){return e instanceof Node||e instanceof R(e).Node}function L(e){return e instanceof Element||e instanceof R(e).Element}function C(e){return e instanceof HTMLElement||e instanceof R(e).HTMLElement}function D(e){return"undefined"!==typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof R(e).ShadowRoot)}function N(e){const{overflow:t,overflowX:o,overflowY:n,display:r}=I(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(r)}function H(e){return["table","td","th"].includes(A(e))}function P(e){const t=W(),o=I(e);return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function W(){return!("undefined"===typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function B(e){return["html","body","#document"].includes(A(e))}function I(e){return R(e).getComputedStyle(e)}function F(e){return L(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function j(e){if("html"===A(e))return e;const t=e.assignedSlot||e.parentNode||D(e)&&e.host||O(e);return D(t)?t.host:t}function z(e){const t=j(e);return B(t)?e.ownerDocument?e.ownerDocument.body:e.body:C(t)&&N(t)?t:z(t)}function M(e,t,o){var n;void 0===t&&(t=[]),void 0===o&&(o=!0);const r=z(e),l=r===(null==(n=e.ownerDocument)?void 0:n.body),i=R(r);return l?t.concat(i,i.visualViewport||[],N(r)?r:[],i.frameElement&&o?M(i.frameElement):[]):t.concat(r,M(r,[],o))}function K(e){const t=I(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const r=C(e),l=r?e.offsetWidth:o,c=r?e.offsetHeight:n,s=i(o)!==l||i(n)!==c;return s&&(o=l,n=c),{width:o,height:n,$:s}}function V(e){return L(e)?e:e.contextElement}function q(e){const t=V(e);if(!C(t))return s(1);const o=t.getBoundingClientRect(),{width:n,height:r,$:l}=K(t);let c=(l?i(o.width):o.width)/n,a=(l?i(o.height):o.height)/r;return c&&Number.isFinite(c)||(c=1),a&&Number.isFinite(a)||(a=1),{x:c,y:a}}const U=s(0);function X(e){const t=R(e);return W()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:U}function Y(e,t,o,n){void 0===t&&(t=!1),void 0===o&&(o=!1);const r=e.getBoundingClientRect(),l=V(e);let i=s(1);t&&(n?L(n)&&(i=q(n)):i=q(e));const c=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==R(e))&&t}(l,o,n)?X(l):s(0);let a=(r.left+c.x)/i.x,u=(r.top+c.y)/i.y,d=r.width/i.x,f=r.height/i.y;if(l){const e=R(l),t=n&&L(n)?R(n):n;let o=e,r=o.frameElement;for(;r&&n&&t!==o;){const e=q(r),t=r.getBoundingClientRect(),n=I(r),l=t.left+(r.clientLeft+parseFloat(n.paddingLeft))*e.x,i=t.top+(r.clientTop+parseFloat(n.paddingTop))*e.y;a*=e.x,u*=e.y,d*=e.x,f*=e.y,a+=l,u+=i,o=R(r),r=o.frameElement}}return _({width:d,height:f,x:a,y:u})}const Z=[":popover-open",":modal"];function G(e){return Z.some((t=>{try{return e.matches(t)}catch(o){return!1}}))}function $(e){return Y(O(e)).left+F(e).scrollLeft}function J(e,t,o){let n;if("viewport"===t)n=function(e,t){const o=R(e),n=O(e),r=o.visualViewport;let l=n.clientWidth,i=n.clientHeight,c=0,s=0;if(r){l=r.width,i=r.height;const e=W();(!e||e&&"fixed"===t)&&(c=r.offsetLeft,s=r.offsetTop)}return{width:l,height:i,x:c,y:s}}(e,o);else if("document"===t)n=function(e){const t=O(e),o=F(e),n=e.ownerDocument.body,r=l(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),i=l(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let c=-o.scrollLeft+$(e);const s=-o.scrollTop;return"rtl"===I(n).direction&&(c+=l(t.clientWidth,n.clientWidth)-r),{width:r,height:i,x:c,y:s}}(O(e));else if(L(t))n=function(e,t){const o=Y(e,!0,"fixed"===t),n=o.top+e.clientTop,r=o.left+e.clientLeft,l=C(e)?q(e):s(1);return{width:e.clientWidth*l.x,height:e.clientHeight*l.y,x:r*l.x,y:n*l.y}}(t,o);else{const o=X(e);n={...t,x:t.x-o.x,y:t.y-o.y}}return _(n)}function Q(e,t){const o=j(e);return!(o===t||!L(o)||B(o))&&("fixed"===I(o).position||Q(o,t))}function ee(e,t,o){const n=C(t),r=O(t),l="fixed"===o,i=Y(e,!0,l,t);let c={scrollLeft:0,scrollTop:0};const a=s(0);if(n||!n&&!l)if(("body"!==A(t)||N(r))&&(c=F(t)),n){const e=Y(t,!0,l,t);a.x=e.x+t.clientLeft,a.y=e.y+t.clientTop}else r&&(a.x=$(r));return{x:i.left+c.scrollLeft-a.x,y:i.top+c.scrollTop-a.y,width:i.width,height:i.height}}function te(e,t){return C(e)&&"fixed"!==I(e).position?t?t(e):e.offsetParent:null}function oe(e,t){const o=R(e);if(!C(e)||G(e))return o;let n=te(e,t);for(;n&&H(n)&&"static"===I(n).position;)n=te(n,t);return n&&("html"===A(n)||"body"===A(n)&&"static"===I(n).position&&!P(n))?o:n||function(e){let t=j(e);for(;C(t)&&!B(t);){if(P(t))return t;t=j(t)}return null}(e)||o}const ne={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:n,strategy:r}=e;const l="fixed"===r,i=O(n),c=!!t&&G(t.floating);if(n===i||c&&l)return o;let a={scrollLeft:0,scrollTop:0},u=s(1);const d=s(0),f=C(n);if((f||!f&&!l)&&(("body"!==A(n)||N(i))&&(a=F(n)),C(n))){const e=Y(n);u=q(n),d.x=e.x+n.clientLeft,d.y=e.y+n.clientTop}return{width:o.width*u.x,height:o.height*u.y,x:o.x*u.x-a.scrollLeft*u.x+d.x,y:o.y*u.y-a.scrollTop*u.y+d.y}},getDocumentElement:O,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:n,strategy:i}=e;const c=[..."clippingAncestors"===o?function(e,t){const o=t.get(e);if(o)return o;let n=M(e,[],!1).filter((e=>L(e)&&"body"!==A(e))),r=null;const l="fixed"===I(e).position;let i=l?j(e):e;for(;L(i)&&!B(i);){const t=I(i),o=P(i);o||"fixed"!==t.position||(r=null),(l?!o&&!r:!o&&"static"===t.position&&r&&["absolute","fixed"].includes(r.position)||N(i)&&!o&&Q(e,i))?n=n.filter((e=>e!==i)):r=t,i=j(i)}return t.set(e,n),n}(t,this._c):[].concat(o),n],s=c[0],a=c.reduce(((e,o)=>{const n=J(t,o,i);return e.top=l(n.top,e.top),e.right=r(n.right,e.right),e.bottom=r(n.bottom,e.bottom),e.left=l(n.left,e.left),e}),J(t,s,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:oe,getElementRects:async function(e){const t=this.getOffsetParent||oe,o=this.getDimensions;return{reference:ee(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await o(e.floating)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:o}=K(e);return{width:t,height:o}},getScale:q,isElement:L,isRTL:function(e){return"rtl"===I(e).direction}};function re(e,t,o,n){void 0===n&&(n={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:a="function"===typeof ResizeObserver,layoutShift:u="function"===typeof IntersectionObserver,animationFrame:d=!1}=n,f=V(e),p=i||s?[...f?M(f):[],...M(t)]:[];p.forEach((e=>{i&&e.addEventListener("scroll",o,{passive:!0}),s&&e.addEventListener("resize",o)}));const m=f&&u?function(e,t){let o,n=null;const i=O(e);function s(){var e;clearTimeout(o),null==(e=n)||e.disconnect(),n=null}return function a(u,d){void 0===u&&(u=!1),void 0===d&&(d=1),s();const{left:f,top:p,width:m,height:v}=e.getBoundingClientRect();if(u||t(),!m||!v)return;const y={rootMargin:-c(p)+"px "+-c(i.clientWidth-(f+m))+"px "+-c(i.clientHeight-(p+v))+"px "+-c(f)+"px",threshold:l(0,r(1,d))||1};let h=!0;function g(e){const t=e[0].intersectionRatio;if(t!==d){if(!h)return a();t?a(!1,t):o=setTimeout((()=>{a(!1,1e-7)}),100)}h=!1}try{n=new IntersectionObserver(g,{...y,root:i.ownerDocument})}catch(w){n=new IntersectionObserver(g,y)}n.observe(e)}(!0),s}(f,o):null;let v,y=-1,h=null;a&&(h=new ResizeObserver((e=>{let[n]=e;n&&n.target===f&&h&&(h.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame((()=>{var e;null==(e=h)||e.observe(t)}))),o()})),f&&!d&&h.observe(f),h.observe(t));let g=d?Y(e):null;return d&&function t(){const n=Y(e);!g||n.x===g.x&&n.y===g.y&&n.width===g.width&&n.height===g.height||o();g=n,v=requestAnimationFrame(t)}(),o(),()=>{var e;p.forEach((e=>{i&&e.removeEventListener("scroll",o),s&&e.removeEventListener("resize",o)})),null==m||m(),null==(e=h)||e.disconnect(),h=null,d&&cancelAnimationFrame(v)}}const le=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:n,placement:r}=t,{mainAxis:l=!0,crossAxis:i=!1,limiter:c={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...s}=f(e,t),a={x:o,y:n},u=await S(t,s),m=h(p(r)),y=v(m);let g=a[y],w=a[m];if(l){const e="y"===y?"bottom":"right";g=d(g+u["y"===y?"top":"left"],g,g-u[e])}if(i){const e="y"===m?"bottom":"right";w=d(w+u["y"===m?"top":"left"],w,w-u[e])}const b=c.fn({...t,[y]:g,[m]:w});return{...b,data:{x:b.x-o,y:b.y-n}}}}},ie=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,n;const{placement:r,middlewareData:l,rects:i,initialPlacement:c,platform:s,elements:a}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:v,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:_=!0,...E}=f(e,t);if(null!=(o=l.arrow)&&o.alignmentOffset)return{};const T=p(r),A=p(c)===c,R=await(null==s.isRTL?void 0:s.isRTL(a.floating)),O=v||(A||!_?[b(c)]:function(e){const t=b(e);return[w(e),t,w(t)]}(c));v||"none"===x||O.push(...function(e,t,o,n){const r=m(e);let l=function(e,t,o){const n=["left","right"],r=["right","left"],l=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return o?t?r:n:t?n:r;case"left":case"right":return t?l:i;default:return[]}}(p(e),"start"===o,n);return r&&(l=l.map((e=>e+"-"+r)),t&&(l=l.concat(l.map(w)))),l}(c,_,x,R));const k=[c,...O],L=await S(t,E),C=[];let D=(null==(n=l.flip)?void 0:n.overflows)||[];if(u&&C.push(L[T]),d){const e=function(e,t,o){void 0===o&&(o=!1);const n=m(e),r=g(e),l=y(r);let i="x"===r?n===(o?"end":"start")?"right":"left":"start"===n?"bottom":"top";return t.reference[l]>t.floating[l]&&(i=b(i)),[i,b(i)]}(r,i,R);C.push(L[e[0]],L[e[1]])}if(D=[...D,{placement:r,overflows:C}],!C.every((e=>e<=0))){var N,H;const e=((null==(N=l.flip)?void 0:N.index)||0)+1,t=k[e];if(t)return{data:{index:e,overflows:D},reset:{placement:t}};let o=null==(H=D.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:H.placement;if(!o)switch(h){case"bestFit":{var P;const e=null==(P=D.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:P[0];e&&(o=e);break}case"initialPlacement":o=c}if(r!==o)return{reset:{placement:o}}}return{}}}},ce=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:n,placement:l,rects:i,platform:c,elements:s,middlewareData:a}=t,{element:u,padding:p=0}=f(e,t)||{};if(null==u)return{};const v=x(p),h={x:o,y:n},w=g(l),b=y(w),_=await c.getDimensions(u),E="y"===w,S=E?"top":"left",T=E?"bottom":"right",A=E?"clientHeight":"clientWidth",R=i.reference[b]+i.reference[w]-h[w]-i.floating[b],O=h[w]-i.reference[w],k=await(null==c.getOffsetParent?void 0:c.getOffsetParent(u));let L=k?k[A]:0;L&&await(null==c.isElement?void 0:c.isElement(k))||(L=s.floating[A]||i.floating[b]);const C=R/2-O/2,D=L/2-_[b]/2-1,N=r(v[S],D),H=r(v[T],D),P=N,W=L-_[b]-H,B=L/2-_[b]/2+C,I=d(P,B,W),F=!a.arrow&&null!=m(l)&&B!==I&&i.reference[b]/2-(B<P?N:H)-_[b]/2<0,j=F?B<P?B-P:B-W:0;return{[w]:h[w]+j,data:{[w]:I,centerOffset:B-I-j,...F&&{alignmentOffset:j}},reset:F}}}),se=(e,t,o)=>{const n=new Map,r={platform:ne,...o},l={...r.platform,_c:n};return(async(e,t,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:l=[],platform:i}=o,c=l.filter(Boolean),s=await(null==i.isRTL?void 0:i.isRTL(t));let a=await i.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:d}=E(a,n,s),f=n,p={},m=0;for(let v=0;v<c.length;v++){const{name:o,fn:l}=c[v],{x:y,y:h,data:g,reset:w}=await l({x:u,y:d,initialPlacement:n,placement:f,strategy:r,middlewareData:p,rects:a,platform:i,elements:{reference:e,floating:t}});u=null!=y?y:u,d=null!=h?h:d,p={...p,[o]:{...p[o],...g}},w&&m<=50&&(m++,"object"===typeof w&&(w.placement&&(f=w.placement),w.rects&&(a=!0===w.rects?await i.getElementRects({reference:e,floating:t,strategy:r}):w.rects),({x:u,y:d}=E(a,f,s))),v=-1)}return{x:u,y:d,placement:f,strategy:r,middlewareData:p}})(e,t,{...r,platform:l})};var ae=o(72884);const ue="react-tooltip-core-styles",de="react-tooltip-base-styles",fe={core:!1,base:!1};function pe(e){let{css:t,id:o=de,type:n="base",ref:r}=e;var l,i;if(!t||"undefined"==typeof document||fe[n])return;if("core"===n&&"undefined"!=typeof process&&(null===(l=null===process||void 0===process?void 0:{NODE_ENV:"production",PUBLIC_URL:"https://socialwalls.taggbox.com/widget",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})||void 0===l?void 0:l.REACT_TOOLTIP_DISABLE_CORE_STYLES))return;if("base"!==n&&"undefined"!=typeof process&&(null===(i=null===process||void 0===process?void 0:{NODE_ENV:"production",PUBLIC_URL:"https://socialwalls.taggbox.com/widget",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})||void 0===i?void 0:i.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;"core"===n&&(o=ue),r||(r={});const{insertAt:c}=r;if(document.getElementById(o))return void console.warn("[react-tooltip] Element with id '".concat(o,"' already exists. Call `removeStyle()` first"));const s=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.id=o,a.type="text/css","top"===c&&s.firstChild?s.insertBefore(a,s.firstChild):s.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t)),fe[n]=!0}const me=async e=>{let{elementReference:t=null,tooltipReference:o=null,tooltipArrowReference:n=null,place:r="top",offset:l=10,strategy:i="absolute",middlewares:c=[T(Number(l)),ie({fallbackAxisSideDirection:"start"}),le({padding:5})],border:s}=e;if(!t)return{tooltipStyles:{},tooltipArrowStyles:{},place:r};if(null===o)return{tooltipStyles:{},tooltipArrowStyles:{},place:r};const a=c;return n?(a.push(ce({element:n,padding:5})),se(t,o,{placement:r,strategy:i,middleware:a}).then((e=>{let{x:t,y:o,placement:n,middlewareData:r}=e;var l,i;const c={left:"".concat(t,"px"),top:"".concat(o,"px"),border:s},{x:a,y:u}=null!==(l=r.arrow)&&void 0!==l?l:{x:0,y:0},d=null!==(i={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]])&&void 0!==i?i:"bottom",f=s&&{borderBottom:s,borderRight:s};let p=0;if(s){const e="".concat(s).match(/(\d+)px/);p=(null==e?void 0:e[1])?Number(e[1]):1}return{tooltipStyles:c,tooltipArrowStyles:{left:null!=a?"".concat(a,"px"):"",top:null!=u?"".concat(u,"px"):"",right:"",bottom:"",...f,[d]:"-".concat(4+p,"px")},place:n}}))):se(t,o,{placement:"bottom",strategy:i,middleware:a}).then((e=>{let{x:t,y:o,placement:n}=e;return{tooltipStyles:{left:"".concat(t,"px"),top:"".concat(o,"px")},tooltipArrowStyles:{},place:n}}))},ve=(e,t)=>!("CSS"in window&&"supports"in window.CSS)||window.CSS.supports(e,t),ye=(e,t,o)=>{let n=null;const r=function(){for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];const c=()=>{n=null,o||e.apply(this,l)};o&&!n&&(e.apply(this,l),n=setTimeout(c,t)),o||(n&&clearTimeout(n),n=setTimeout(c,t))};return r.cancel=()=>{n&&(clearTimeout(n),n=null)},r},he=e=>null!==e&&!Array.isArray(e)&&"object"==typeof e,ge=(e,t)=>{if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every(((e,o)=>ge(e,t[o])));if(Array.isArray(e)!==Array.isArray(t))return!1;if(!he(e)||!he(t))return e===t;const o=Object.keys(e),n=Object.keys(t);return o.length===n.length&&o.every((o=>ge(e[o],t[o])))},we=e=>{if(!(e instanceof HTMLElement||e instanceof SVGElement))return!1;const t=getComputedStyle(e);return["overflow","overflow-x","overflow-y"].some((e=>{const o=t.getPropertyValue(e);return"auto"===o||"scroll"===o}))},be=e=>{if(!e)return null;let t=e.parentElement;for(;t;){if(we(t))return t;t=t.parentElement}return document.scrollingElement||document.documentElement},xe="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,_e="DEFAULT_TOOLTIP_ID",Ee={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},Se=(0,n.createContext)({getTooltipData:()=>Ee});function Te(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e;return(0,n.useContext)(Se).getTooltipData(e)}var Ae={tooltip:"core-styles-module_tooltip__3vRRp",fixed:"core-styles-module_fixed__pcSol",arrow:"core-styles-module_arrow__cvMwQ",noArrow:"core-styles-module_noArrow__xock6",clickable:"core-styles-module_clickable__ZuTTB",show:"core-styles-module_show__Nt9eE",closing:"core-styles-module_closing__sGnxF"},Re={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const Oe=e=>{let{forwardRef:t,id:o,className:r,classNameArrow:l,variant:i="dark",anchorId:c,anchorSelect:s,place:a="top",offset:u=10,events:d=["hover"],openOnClick:f=!1,positionStrategy:p="absolute",middlewares:m,wrapper:v,delayShow:y=0,delayHide:h=0,float:g=!1,hidden:w=!1,noArrow:b=!1,clickable:x=!1,closeOnEsc:_=!1,closeOnScroll:E=!1,closeOnResize:S=!1,openEvents:T,closeEvents:A,globalCloseEvents:R,imperativeModeOnly:O,style:k,position:L,afterShow:C,afterHide:D,content:N,contentWrapperRef:H,isOpen:P,defaultIsOpen:W=!1,setIsOpen:B,activeAnchor:I,setActiveAnchor:F,border:j,opacity:z,arrowColor:M,role:K="tooltip"}=e;var V;const q=(0,n.useRef)(null),U=(0,n.useRef)(null),X=(0,n.useRef)(null),Y=(0,n.useRef)(null),Z=(0,n.useRef)(null),[G,$]=(0,n.useState)({tooltipStyles:{},tooltipArrowStyles:{},place:a}),[J,Q]=(0,n.useState)(!1),[ee,te]=(0,n.useState)(!1),[oe,ne]=(0,n.useState)(null),le=(0,n.useRef)(!1),ie=(0,n.useRef)(null),{anchorRefs:ce,setActiveAnchor:se}=Te(o),ue=(0,n.useRef)(!1),[de,fe]=(0,n.useState)([]),pe=(0,n.useRef)(!1),ve=f||d.includes("click"),he=ve||(null==T?void 0:T.click)||(null==T?void 0:T.dblclick)||(null==T?void 0:T.mousedown),we=T?{...T}:{mouseenter:!0,focus:!0,click:!1,dblclick:!1,mousedown:!1};!T&&ve&&Object.assign(we,{mouseenter:!1,focus:!1,click:!0});const _e=A?{...A}:{mouseleave:!0,blur:!0,click:!1,dblclick:!1,mouseup:!1};!A&&ve&&Object.assign(_e,{mouseleave:!1,blur:!1});const Ee=R?{...R}:{escape:_||!1,scroll:E||!1,resize:S||!1,clickOutsideAnchor:he||!1};O&&(Object.assign(we,{mouseenter:!1,focus:!1,click:!1,dblclick:!1,mousedown:!1}),Object.assign(_e,{mouseleave:!1,blur:!1,click:!1,dblclick:!1,mouseup:!1}),Object.assign(Ee,{escape:!1,scroll:!1,resize:!1,clickOutsideAnchor:!1})),xe((()=>(pe.current=!0,()=>{pe.current=!1})),[]);const Se=e=>{pe.current&&(e&&te(!0),setTimeout((()=>{pe.current&&(null==B||B(e),void 0===P&&Q(e))}),10))};(0,n.useEffect)((()=>{if(void 0===P)return()=>null;P&&te(!0);const e=setTimeout((()=>{Q(P)}),10);return()=>{clearTimeout(e)}}),[P]),(0,n.useEffect)((()=>{if(J!==le.current)if(Z.current&&clearTimeout(Z.current),le.current=J,J)null==C||C();else{const e=(e=>{const t=getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay").match(/^([\d.]+)(ms|s)$/);if(!t)return 0;const[,o,n]=t;return Number(o)*("ms"===n?1:1e3)})();Z.current=setTimeout((()=>{te(!1),ne(null),null==D||D()}),e+25)}}),[J]);const Oe=e=>{$((t=>ge(t,e)?t:e))},ke=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;X.current&&clearTimeout(X.current),ee?Se(!0):X.current=setTimeout((()=>{Se(!0)}),e)},Le=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;Y.current&&clearTimeout(Y.current),Y.current=setTimeout((()=>{ue.current||Se(!1)}),e)},Ce=e=>{var t;if(!e)return;const o=null!==(t=e.currentTarget)&&void 0!==t?t:e.target;if(!(null==o?void 0:o.isConnected))return F(null),void se({current:null});y?ke():Se(!0),F(o),se({current:o}),Y.current&&clearTimeout(Y.current)},De=()=>{x?Le(h||100):h?Le():Se(!1),X.current&&clearTimeout(X.current)},Ne=e=>{let{x:t,y:o}=e;var n;const r={getBoundingClientRect:()=>({x:t,y:o,width:0,height:0,top:o,left:t,right:t,bottom:o})};me({place:null!==(n=null==oe?void 0:oe.place)&&void 0!==n?n:a,offset:u,elementReference:r,tooltipReference:q.current,tooltipArrowReference:U.current,strategy:p,middlewares:m,border:j}).then((e=>{Oe(e)}))},He=e=>{if(!e)return;const t=e,o={x:t.clientX,y:t.clientY};Ne(o),ie.current=o},Pe=e=>{var t;if(!J)return;const o=e.target;o.isConnected&&((null===(t=q.current)||void 0===t?void 0:t.contains(o))||[document.querySelector("[id='".concat(c,"']")),...de].some((e=>null==e?void 0:e.contains(o)))||(Se(!1),X.current&&clearTimeout(X.current)))},We=ye(Ce,50,!0),Be=ye(De,50,!0),Ie=e=>{Be.cancel(),We(e)},Fe=()=>{We.cancel(),Be()},je=(0,n.useCallback)((()=>{var e,t;const o=null!==(e=null==oe?void 0:oe.position)&&void 0!==e?e:L;o?Ne(o):g?ie.current&&Ne(ie.current):(null==I?void 0:I.isConnected)&&me({place:null!==(t=null==oe?void 0:oe.place)&&void 0!==t?t:a,offset:u,elementReference:I,tooltipReference:q.current,tooltipArrowReference:U.current,strategy:p,middlewares:m,border:j}).then((e=>{pe.current&&Oe(e)}))}),[J,I,N,k,a,null==oe?void 0:oe.place,u,p,L,null==oe?void 0:oe.position,g]);(0,n.useEffect)((()=>{var e,t;const o=new Set(ce);de.forEach((e=>{o.add({current:e})}));const n=document.querySelector("[id='".concat(c,"']"));n&&o.add({current:n});const r=()=>{Se(!1)},l=be(I),i=be(q.current);Ee.scroll&&(window.addEventListener("scroll",r),null==l||l.addEventListener("scroll",r),null==i||i.addEventListener("scroll",r));let s=null;Ee.resize?window.addEventListener("resize",r):I&&q.current&&(s=re(I,q.current,je,{ancestorResize:!0,elementResize:!0,layoutShift:!0}));const a=e=>{"Escape"===e.key&&Se(!1)};Ee.escape&&window.addEventListener("keydown",a),Ee.clickOutsideAnchor&&window.addEventListener("click",Pe);const u=[],d=e=>{J&&(null==e?void 0:e.target)===I||Ce(e)},f=e=>{J&&(null==e?void 0:e.target)===I&&De()},p=["mouseenter","mouseleave","focus","blur"],m=["click","dblclick","mousedown","mouseup"];Object.entries(we).forEach((e=>{let[t,o]=e;o&&(p.includes(t)?u.push({event:t,listener:Ie}):m.includes(t)&&u.push({event:t,listener:d}))})),Object.entries(_e).forEach((e=>{let[t,o]=e;o&&(p.includes(t)?u.push({event:t,listener:Fe}):m.includes(t)&&u.push({event:t,listener:f}))})),g&&u.push({event:"pointermove",listener:He});const v=()=>{ue.current=!0},y=()=>{ue.current=!1,De()};return x&&!he&&(null===(e=q.current)||void 0===e||e.addEventListener("mouseenter",v),null===(t=q.current)||void 0===t||t.addEventListener("mouseleave",y)),u.forEach((e=>{let{event:t,listener:n}=e;o.forEach((e=>{var o;null===(o=e.current)||void 0===o||o.addEventListener(t,n)}))})),()=>{var e,t;Ee.scroll&&(window.removeEventListener("scroll",r),null==l||l.removeEventListener("scroll",r),null==i||i.removeEventListener("scroll",r)),Ee.resize?window.removeEventListener("resize",r):null==s||s(),Ee.clickOutsideAnchor&&window.removeEventListener("click",Pe),Ee.escape&&window.removeEventListener("keydown",a),x&&!he&&(null===(e=q.current)||void 0===e||e.removeEventListener("mouseenter",v),null===(t=q.current)||void 0===t||t.removeEventListener("mouseleave",y)),u.forEach((e=>{let{event:t,listener:n}=e;o.forEach((e=>{var o;null===(o=e.current)||void 0===o||o.removeEventListener(t,n)}))}))}}),[I,je,ee,ce,de,T,A,R,ve,y,h]),(0,n.useEffect)((()=>{var e,t;let n=null!==(t=null!==(e=null==oe?void 0:oe.anchorSelect)&&void 0!==e?e:s)&&void 0!==t?t:"";!n&&o&&(n="[data-tooltip-id='".concat(o,"']"));const r=new MutationObserver((e=>{const t=[],r=[];e.forEach((e=>{if("attributes"===e.type&&"data-tooltip-id"===e.attributeName&&(e.target.getAttribute("data-tooltip-id")===o?t.push(e.target):e.oldValue===o&&r.push(e.target)),"childList"===e.type){if(I){const t=[...e.removedNodes].filter((e=>1===e.nodeType));if(n)try{r.push(...t.filter((e=>e.matches(n)))),r.push(...t.flatMap((e=>[...e.querySelectorAll(n)])))}catch(e){}t.some((e=>{var t;return!!(null===(t=null==e?void 0:e.contains)||void 0===t?void 0:t.call(e,I))&&(te(!1),Se(!1),F(null),X.current&&clearTimeout(X.current),Y.current&&clearTimeout(Y.current),!0)}))}if(n)try{const o=[...e.addedNodes].filter((e=>1===e.nodeType));t.push(...o.filter((e=>e.matches(n)))),t.push(...o.flatMap((e=>[...e.querySelectorAll(n)])))}catch(e){}}})),(t.length||r.length)&&fe((e=>[...e.filter((e=>!r.includes(e))),...t]))}));return r.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"],attributeOldValue:!0}),()=>{r.disconnect()}}),[o,s,null==oe?void 0:oe.anchorSelect,I]),(0,n.useEffect)((()=>{je()}),[je]),(0,n.useEffect)((()=>{if(!(null==H?void 0:H.current))return()=>null;const e=new ResizeObserver((()=>{setTimeout((()=>je()))}));return e.observe(H.current),()=>{e.disconnect()}}),[N,null==H?void 0:H.current]),(0,n.useEffect)((()=>{var e;const t=document.querySelector("[id='".concat(c,"']")),o=[...de,t];I&&o.includes(I)||F(null!==(e=de[0])&&void 0!==e?e:t)}),[c,de,I]),(0,n.useEffect)((()=>(W&&Se(!0),()=>{X.current&&clearTimeout(X.current),Y.current&&clearTimeout(Y.current)})),[]),(0,n.useEffect)((()=>{var e;let t=null!==(e=null==oe?void 0:oe.anchorSelect)&&void 0!==e?e:s;if(!t&&o&&(t="[data-tooltip-id='".concat(o,"']")),t)try{const e=Array.from(document.querySelectorAll(t));fe(e)}catch(e){fe([])}}),[o,s,null==oe?void 0:oe.anchorSelect]),(0,n.useEffect)((()=>{X.current&&(clearTimeout(X.current),ke(y))}),[y]);const ze=null!==(V=null==oe?void 0:oe.content)&&void 0!==V?V:N,Me=J&&Object.keys(G.tooltipStyles).length>0;return(0,n.useImperativeHandle)(t,(()=>({open:e=>{if(null==e?void 0:e.anchorSelect)try{document.querySelector(e.anchorSelect)}catch(t){return void console.warn('[react-tooltip] "'.concat(e.anchorSelect,'" is not a valid CSS selector'))}ne(null!=e?e:null),(null==e?void 0:e.delay)?ke(e.delay):Se(!0)},close:e=>{(null==e?void 0:e.delay)?Le(e.delay):Se(!1)},activeAnchor:I,place:G.place,isOpen:Boolean(ee&&!w&&ze&&Me)}))),ee&&!w&&ze?n.createElement(v,{id:o,role:K,className:ae("react-tooltip",Ae.tooltip,Re.tooltip,Re[i],r,"react-tooltip__place-".concat(G.place),Ae[Me?"show":"closing"],Me?"react-tooltip__show":"react-tooltip__closing","fixed"===p&&Ae.fixed,x&&Ae.clickable),onTransitionEnd:e=>{Z.current&&clearTimeout(Z.current),J||"opacity"!==e.propertyName||(te(!1),ne(null),null==D||D())},style:{...k,...G.tooltipStyles,opacity:void 0!==z&&Me?z:void 0},ref:q},ze,n.createElement(v,{className:ae("react-tooltip-arrow",Ae.arrow,Re.arrow,l,b&&Ae.noArrow),style:{...G.tooltipArrowStyles,background:M?"linear-gradient(to right bottom, transparent 50%, ".concat(M," 50%)"):void 0},ref:U})):null},ke=e=>{let{content:t}=e;return n.createElement("span",{dangerouslySetInnerHTML:{__html:t}})},Le=n.forwardRef(((e,t)=>{let{id:o,anchorId:r,anchorSelect:l,content:i,html:c,render:s,className:a,classNameArrow:u,variant:d="dark",place:f="top",offset:p=10,wrapper:m="div",children:v=null,events:y=["hover"],openOnClick:h=!1,positionStrategy:g="absolute",middlewares:w,delayShow:b=0,delayHide:x=0,float:_=!1,hidden:E=!1,noArrow:S=!1,clickable:T=!1,closeOnEsc:A=!1,closeOnScroll:R=!1,closeOnResize:O=!1,openEvents:k,closeEvents:L,globalCloseEvents:C,imperativeModeOnly:D=!1,style:N,position:H,isOpen:P,defaultIsOpen:W=!1,disableStyleInjection:B=!1,border:I,opacity:F,arrowColor:j,setIsOpen:z,afterShow:M,afterHide:K,role:V="tooltip"}=e;const[q,U]=(0,n.useState)(i),[X,Y]=(0,n.useState)(c),[Z,G]=(0,n.useState)(f),[$,J]=(0,n.useState)(d),[Q,ee]=(0,n.useState)(p),[te,oe]=(0,n.useState)(b),[ne,re]=(0,n.useState)(x),[le,ie]=(0,n.useState)(_),[ce,se]=(0,n.useState)(E),[ue,de]=(0,n.useState)(m),[fe,pe]=(0,n.useState)(y),[me,ye]=(0,n.useState)(g),[he,ge]=(0,n.useState)(null),[we,be]=(0,n.useState)(null),xe=(0,n.useRef)(B),{anchorRefs:_e,activeAnchor:Ee}=Te(o),Se=e=>null==e?void 0:e.getAttributeNames().reduce(((t,o)=>{var n;return o.startsWith("data-tooltip-")&&(t[o.replace(/^data-tooltip-/,"")]=null!==(n=null==e?void 0:e.getAttribute(o))&&void 0!==n?n:null),t}),{}),Ae=e=>{const t={place:e=>{var t;G(null!==(t=e)&&void 0!==t?t:f)},content:e=>{U(null!=e?e:i)},html:e=>{Y(null!=e?e:c)},variant:e=>{var t;J(null!==(t=e)&&void 0!==t?t:d)},offset:e=>{ee(null===e?p:Number(e))},wrapper:e=>{var t;de(null!==(t=e)&&void 0!==t?t:m)},events:e=>{const t=null==e?void 0:e.split(" ");pe(null!=t?t:y)},"position-strategy":e=>{var t;ye(null!==(t=e)&&void 0!==t?t:g)},"delay-show":e=>{oe(null===e?b:Number(e))},"delay-hide":e=>{re(null===e?x:Number(e))},float:e=>{ie(null===e?_:"true"===e)},hidden:e=>{se(null===e?E:"true"===e)},"class-name":e=>{ge(e)}};Object.values(t).forEach((e=>e(null))),Object.entries(e).forEach((e=>{let[o,n]=e;var r;null===(r=t[o])||void 0===r||r.call(t,n)}))};(0,n.useEffect)((()=>{U(i)}),[i]),(0,n.useEffect)((()=>{Y(c)}),[c]),(0,n.useEffect)((()=>{G(f)}),[f]),(0,n.useEffect)((()=>{J(d)}),[d]),(0,n.useEffect)((()=>{ee(p)}),[p]),(0,n.useEffect)((()=>{oe(b)}),[b]),(0,n.useEffect)((()=>{re(x)}),[x]),(0,n.useEffect)((()=>{ie(_)}),[_]),(0,n.useEffect)((()=>{se(E)}),[E]),(0,n.useEffect)((()=>{ye(g)}),[g]),(0,n.useEffect)((()=>{xe.current!==B&&console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")}),[B]),(0,n.useEffect)((()=>{"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:"core"===B,disableBase:B}}))}),[]),(0,n.useEffect)((()=>{var e;const t=new Set(_e);let n=l;if(!n&&o&&(n="[data-tooltip-id='".concat(o,"']")),n)try{document.querySelectorAll(n).forEach((e=>{t.add({current:e})}))}catch(e){console.warn('[react-tooltip] "'.concat(n,'" is not a valid CSS selector'))}const i=document.querySelector("[id='".concat(r,"']"));if(i&&t.add({current:i}),!t.size)return()=>null;const c=null!==(e=null!=we?we:i)&&void 0!==e?e:Ee.current,s=new MutationObserver((e=>{e.forEach((e=>{var t;if(!c||"attributes"!==e.type||!(null===(t=e.attributeName)||void 0===t?void 0:t.startsWith("data-tooltip-")))return;const o=Se(c);Ae(o)}))})),a={attributes:!0,childList:!1,subtree:!1};if(c){const e=Se(c);Ae(e),s.observe(c,a)}return()=>{s.disconnect()}}),[_e,Ee,we,r,l]),(0,n.useEffect)((()=>{(null==N?void 0:N.border)&&console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),I&&!ve("border","".concat(I))&&console.warn('[react-tooltip] "'.concat(I,'" is not a valid `border`.')),(null==N?void 0:N.opacity)&&console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),F&&!ve("opacity","".concat(F))&&console.warn('[react-tooltip] "'.concat(F,'" is not a valid `opacity`.'))}),[]);let Re=v;const Le=(0,n.useRef)(null);if(s){const e=s({content:(null==we?void 0:we.getAttribute("data-tooltip-content"))||q||null,activeAnchor:we});Re=e?n.createElement("div",{ref:Le,className:"react-tooltip-content-wrapper"},e):null}else q&&(Re=q);X&&(Re=n.createElement(ke,{content:X}));const Ce={forwardRef:t,id:o,anchorId:r,anchorSelect:l,className:ae(a,he),classNameArrow:u,content:Re,contentWrapperRef:Le,place:Z,variant:$,offset:Q,wrapper:ue,events:fe,openOnClick:h,positionStrategy:me,middlewares:w,delayShow:te,delayHide:ne,float:le,hidden:ce,noArrow:S,clickable:T,closeOnEsc:A,closeOnScroll:R,closeOnResize:O,openEvents:k,closeEvents:L,globalCloseEvents:C,imperativeModeOnly:D,style:N,position:H,isOpen:P,defaultIsOpen:W,border:I,opacity:F,arrowColor:j,setIsOpen:z,afterShow:M,afterHide:K,activeAnchor:we,setActiveAnchor:e=>be(e),role:V};return n.createElement(Oe,{...Ce})}));"undefined"!=typeof window&&window.addEventListener("react-tooltip-inject-styles",(e=>{e.detail.disableCore||pe({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",type:"core"}),e.detail.disableBase||pe({css:"\n.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}",type:"base"})}))}}]);