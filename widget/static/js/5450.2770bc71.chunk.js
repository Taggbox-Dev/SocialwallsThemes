(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5450,8342,9239,5790],{18870:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>dt});var a=n(47313),s=n(43411),o=n(11774);function r(t,e,n){return Array.prototype.slice.call(t,e,n)}function i(t){return t.bind.apply(t,[null].concat(r(arguments,1)))}function l(t){return requestAnimationFrame(t)}function c(t,e){return typeof e===t}var u=Array.isArray;function d(t){return u(t)?t:[t]}function h(t,e){d(t).forEach(e)}i(c,"function"),i(c,"string"),i(c,"undefined");var _=Object.keys;function p(t){return r(arguments,1).forEach((function(e){!function(t,e,n){if(t){var a=_(t);a=n?a.reverse():a;for(var s=0;s<a.length;s++){var o=a[s];if("__proto__"!==o&&!1===e(t[o],o))break}}}(e,(function(n,a){t[a]=e[a]}))})),t}var m=Math.min;var f="move",g="moved",b="updated",v="drag",w="dragged",x="scroll",j="scrolled",k="destroy";function P(t){var e=t?t.event.bus:document.createDocumentFragment(),n=function(){var t=[];function e(t,e,n){h(t,(function(t){t&&h(e,(function(e){e.split(" ").forEach((function(e){var a=e.split(".");n(t,a[0],a[1])}))}))}))}return{bind:function(n,a,s,o){e(n,a,(function(e,n,a){var r="addEventListener"in e,i=r?e.removeEventListener.bind(e,n,s,o):e.removeListener.bind(e,s);r?e.addEventListener(n,s,o):e.addListener(s),t.push([e,n,a,s,i])}))},unbind:function(n,a,s){e(n,a,(function(e,n,a){t=t.filter((function(t){return!!(t[0]!==e||t[1]!==n||t[2]!==a||s&&t[3]!==s)||(t[4](),!1)}))}))},dispatch:function(t,e,n){var a;return"function"===typeof CustomEvent?a=new CustomEvent(e,{bubbles:!0,detail:n}):(a=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!1,n),t.dispatchEvent(a),a},destroy:function(){t.forEach((function(t){t[4]()})),t.length=0}}}();return t&&t.event.on(k,n.destroy),p(n,{bus:e,on:function(t,a){n.bind(e,d(t).join(" "),(function(t){a.apply(a,u(t.detail)?t.detail:[])}))},off:i(n.unbind,e),emit:function(t){n.dispatch(e,t,r(arguments,1))}})}function y(t,e,n,a){var s,o,r=Date.now,i=0,c=!0,u=0;function d(){if(!c){if(i=t?m((r()-s)/t,1):1,n&&n(i),i>=1&&(e(),s=r(),a&&++u>=a))return h();l(d)}}function h(){c=!0}function _(){o&&cancelAnimationFrame(o),i=0,o=0,c=!0}return{start:function(e){!e&&_(),s=r()-(e?i*t:0),c=!1,l(d)},rewind:function(){s=r(),i=0,n&&n(i)},pause:h,cancel:_,set:function(e){t=e},isPaused:function(){return c}}}var C="slide";function T(t,e,n){return Array.prototype.slice.call(t,e,n)}function D(t){return t.bind(null,...T(arguments,1))}function I(t,e){return typeof e===t}function S(t){return!Z(t)&&I("object",t)}const N=Array.isArray;D(I,"function"),D(I,"string");const R=D(I,"undefined");function Z(t){return null===t}function A(t,e){var n;(n=t,N(n)?n:[n]).forEach(e)}const z=Object.keys;function E(t,e,n){if(t){let a=z(t);a=n?a.reverse():a;for(let n=0;n<a.length;n++){const s=a[n];if("__proto__"!==s&&!1===e(t[s],s))break}}return t}function L(t){return T(arguments,1).forEach((e=>{E(e,((n,a)=>{t[a]=e[a]}))})),t}function M(t,e,n){S(e)?E(e,((e,n)=>{M(t,n,e)})):A(t,(t=>{Z(n)||""===n?function(t,e){A(t,(t=>{A(e,(e=>{t&&t.removeAttribute(e)}))}))}(t,e):t.setAttribute(e,String(n))}))}const{min:O,max:F,floor:Q,ceil:H,abs:U}=Math;const W={speed:1,autoStart:!0,pauseOnHover:!0,pauseOnFocus:!0},q={startScroll:"Start auto scroll",pauseScroll:"Pause auto scroll"};function B(t,e,n){const{on:a,off:s,bind:o,unbind:r}=P(t),{translate:i,getPosition:l,toIndex:c,getLimit:u}=e.Move,{setIndex:d,getIndex:h}=e.Controller,{orient:_}=e.Direction,{toggle:p}=e.Elements,{Live:m}=e,{root:k}=t,T=function(t,e){var n;return function(){n||(n=y(e||0,(function(){t(),n=null}),null,1)).start()}}(e.Arrows.update,500);let D,I,N,Z,z,E,Q={};function H(){t.is("fade")||D||!1===n.autoScroll||(D=y(0,G),function(){Q.pauseOnHover&&o(k,"mouseenter mouseleave",(t=>{N="mouseenter"===t.type,V()}));Q.pauseOnFocus&&o(k,"focusin focusout",(t=>{Z="focusin"===t.type,V()}));Q.useToggleButton&&o(p,"click",(()=>{I?X():J()}));a(b,B),a([f,v,x],(()=>{z=!0,J(!1)})),a([g,w,j],(()=>{z=!1,V()}))}(),Q.autoStart&&("complete"===document.readyState?X():o(window,"load",X)))}function U(){D&&(D.cancel(),D=null,E=void 0,s([f,v,x,g,j]),r(k,"mouseenter mouseleave focusin focusout"),r(p,"click"))}function B(){const{autoScroll:t}=n;!1!==t?(Q=L({},Q,S(t)?t:{}),H()):U(),D&&!R(E)&&i(E)}function X(){K()&&(D.start(!0),m.disable(!0),Z=N=I=!1,$())}function J(){I||(I=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],$(),K()||(D.pause(),m.disable(!1)))}function V(){I||(N||Z||z?J(!1):X())}function G(){const a=l(),s=function(e){const n=Q.speed||1;e+=_(n),t.is(C)&&(e=function(t,e,n){const a=O(e,n),s=F(e,n);return O(F(a,t),s)}(e,u(!1),u(!0)));return e}(a);a!==s?(i(s),function(a){const{length:s}=t,o=(c(a)+s)%s;o!==h()&&(d(o),e.Slides.update(),e.Pagination.update(),"nearby"===n.lazyLoad&&e.LazyLoad.check())}(E=l())):(J(!1),Q.rewind&&t.go(Q.speed>0?0:e.Controller.getEnd())),T()}function $(){if(p){const s=I?"startScroll":"pauseScroll";e="is-active",a=!I,(t=p)&&A(e,(e=>{e&&t.classList[a?"add":"remove"](e)})),M(p,"aria-label",n.i18n[s]||q[s])}var t,e,a}function K(){return!D||D.isPaused()}return{setup:function(){const{autoScroll:t}=n;Q=L({},W,S(t)?t:{})},mount:H,destroy:U,play:X,pause:J,isPaused:K}}n(44084);var X=n(89239),J=n(55790),V=n(25810),G=n(35179),$=n(46417);const K=t=>{let{author:e,personalization:n,postTime:a,network:s,ThemeRule:o,font:r}=t;const i=!(!n.postAuthor||e.isInstaUser),l=!(!n.postAuthor||!n.postTime||e.isInstaUser);return(0,$.jsxs)("div",{className:"tb_c_m_author_wrapper ".concat(G.ZQ?"tb_c_m_author_wrapper_top":""),children:[(0,$.jsxs)("div",{className:"tb_c_m_author",children:[i?(0,$.jsx)(X.default,{network:s,author:e,authorClass:"tb_c_m_author_profile"}):"",(0,$.jsxs)("div",{className:"tb_c_m_author_info",children:[i?(0,$.jsx)("div",{className:"tb_c_m_authorname",children:e.name}):"",(0,$.jsxs)("div",{className:"tb_c_m_post_info",children:[i?(0,$.jsx)("div",{className:"tb_c_m_username",children:"@".concat(e.username)}):"",l?(0,$.jsx)("div",{className:"tb_c_m_seprator",children:" "}):"",n.postTime?(0,$.jsx)(J.default,{postTime:a,timeClass:"tb_c_m_time tb-cTBfont-".concat(o.font_varient),authorColor:o.authorColor}):""]})]})]}),G.ZQ?null:(0,$.jsx)("div",{className:"tb_c_m_social_",children:(0,$.jsx)(V.default,{networkClass:"tb_c_m_social__ico",network:s,isDefault:1===o.iconType,ThemeRule:o})})]})};var Y=n(81349),tt=n(84261),et=n(64442);const nt=a.lazy((()=>n.e(695).then(n.bind(n,10695)))),at=t=>{let{itemData:e,wallID:n,ThemeID:s,ThemeRule:o,ownerId:r,wall:i}=t;const l=(3===e.type||5===e.type)&&1==i.ThemeRule.autoPlay;!G.ig||e.hotspot;return(0,$.jsxs)("div",{className:"tb_c_m_media_wrap",children:[G.aL?(0,$.jsx)(a.Suspense,{fallback:(0,$.jsx)($.Fragment,{}),children:(0,$.jsx)(nt,{likeClass:"tb_c_m_like",postId:e.id,wallID:n,UserDetail:i.UserDetail})}):null,G.aL&&i.Personalization.interactive?(0,$.jsx)(Y.Z,{itemData:e,IconClass:"tb_c_m_media_icon",show:G.aL}):null,l?(0,$.jsx)(et.Z,{VideoClass:"tb_c_m_video",data:e,wallID:n,themeID:i.Personalization.widgetTheme,ownerId:r,size:1,isCover:!0,muted:!0,autoPlay:l,handleVideoEnded:()=>{}}):(0,$.jsx)(tt.default,{ImageClass:"tb_c_m_image",data:e,wallID:n,themeID:i.Personalization.widgetTheme,ownerId:r,size:1,ThemeRule:o,hotspot:!0})]})};var st=n(62245),ot=n(17739),rt=n(11502),it=n(5744);const lt=t=>{let{itemData:e,personalization:n,ThemeRule:a,clickToShowPopUp:s,itemIndex:o,wallID:r,ownerId:i,postSizeInPx:l,wall:c,isPadding:u,isRowCount:d}=t;const h=!!(!G.bX&&e.ugc_products&&e.ugc_products.length>0),_=!(!h||0!==e.hotspot),p=(""===a.postHover||a.postHover,2===e.type||3===e.type||4===e.type||5===e.type),m=n.trimcontent?(0,ot.Sv)(e.content,50):e.content,f=l.adjustWidth<250,g=!(!e.hotspot||!h),b=(!G.ig||e.hotspot,!a.hideContent),v=!_||0==b,w=!!_&&0!=b,x=0==a.postHover&&G.ig?"light":"dark",j=(G.Jx,G.Jx&&a.backgroundColor,G.bX?{padding:a.spacing}:null);return(0,$.jsx)("div",{id:"tb-hs-post-".concat(e.id),className:"tb_c_m_post_wrapper".concat(f?" tb_c_m_post_wrapper2x":""),"tb-network":e.network.id,"tb-product":_?1:g?2:0,style:{padding:n.padding/2},children:(0,$.jsx)("div",{className:"tb_c_m_post_in".concat(G.ig?" tb_c_m_post_ani":""),onClick:s(o,e),style:j,children:(0,$.jsxs)("div",{className:"tb_c_m_post_media_wrapp",children:[p?(0,$.jsx)(at,{itemData:e,wallID:r,wall:c,ownerId:i}):"",G.P2?(0,$.jsx)($.Fragment,{children:(0,$.jsxs)("div",{className:"tb_c_m_post_details",children:[(0,$.jsxs)("div",{className:"tb_c_m_contant_wrapper",children:[G.ig?(0,$.jsx)("div",{className:"tb_c_m_social_",children:(0,$.jsx)(V.default,{networkClass:"tb_c_m_social__ico",network:e.network,isDefault:1===a.iconType,ThemeRule:a,Personalization:n})}):null,w?(0,$.jsx)(rt.Z,{ThemeRule:a,btnClass:"tb_c_m_btn_wrap"}):null,v||1==e.type?(0,$.jsx)(st.default,{contentClass:"tb_c_m_content",item:e,content:m,font:a,ThemeRule:a,personalization:n,contentTitle:e.contentTitle,isNetwork:!0}):null]}),G.ig?null:(0,$.jsx)(K,{ownerId:i,postTime:e.createdAt,author:e.author,network:e.network,font:a,personalization:n,ThemeRule:a}),e.share.status?(0,$.jsx)(it.Z,{share:e.share,shareClass:"tb_c_m_share_container ".concat(G.ZQ?"tb_c_m_share_container_te":""),item:e,wallID:r,ownerId:i}):null]})}):null]})})})};var ct=n(40475);n(37210);class ut extends a.Component{constructor(t){super(t),this.requestData=()=>{const{appendData:t,wall:e,preRender:n,hasMoreData:a,getDataNextSteps:s}=this.props;a&&s(e.Wall.id,Math.floor(Date.now()/1e3),e.ThemeRule.numberOfPosts,t.networkID,t.after,n,t.heightEvent)},this.autoScrollSlider=(t,e,n,a)=>{const{wall:s}=this.props;if(1==s.Personalization.autoScrollStatus||G.ig){const e=G.ZQ?t._o.perPage+t.index:t.index;t.length-e===(G.ZQ?1:t._o.perPage)&&this.requestData()}},this.state={parent_id:"",postData:[]},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100);const{postData:t}=this.props;this.setState({postData:t})}shouldComponentUpdate(t,e){return this.props.postData!=t.postData}render(){const{postData:t,completeDataObject:e,wall:n,clickToShowPopUp:a,onClickToCTA:s,postSizeInPx:r,parentID:i,keyRender:l,loaderData:c}=this.props,u=i,d=n.ThemeRule.numberOfCoumn,h=n.ThemeRule.mobileColumn,_=n.ThemeRule.slidePost,p=n.ThemeRule.slideDuration,m=n.Personalization.autoScrollStatus;n.ThemeRule.multiRow&&0!==n.ThemeRule.multiRow&&n.ThemeRule.multiRow;var f=t;f=f.length<12?Array(15-f.length).fill(f).flat():f;const g=2==n.ThemeRule.multiRow?[1,2]:[1],b=G.aL||(null===g||void 0===g?void 0:g.length)>1?{}:{clones:0},v=Math.ceil(f.length/2),w=g.length>1?f.slice(0,v):f,x=f.slice(v),j=1!=m?!(Object.keys(b).length>0)&&(G.ig?"slide":"loop"):G.ig?"slide":"loop",k={start:0,type:"loop",rewind:!1,speed:1e3,interval:1===_?1e3*parseInt(p):5e3,perPage:d>0?d:G.ZQ?3:6,perMove:1,gap:0,autoplay:1===_,padding:0,pagination:!1,pauseOnHover:!1,arrows:!1,autoScroll:{speed:2==n.ThemeRule.multiRow?-1:1,pauseOnHover:!1},breakpoints:{560:{perPage:h>0?h:1},767:{perPage:h>0?h:2},991:{perPage:h>0?h:3},1200:{perPage:d>0?d:4},1400:{perPage:d>0?d:5},1600:{perPage:d>0?d:G.ZQ?3:6}}},P={...b,type:1!==m&&j,rewind:!0,perPage:d>0?d:G.ZQ?3:6,perMove:1,gap:0,padding:0,pagination:!1,arrows:!1,pauseOnHover:!1,autoScroll:{speed:1,pauseOnHover:!1},breakpoints:{560:{perPage:h>0?h:1},767:{perPage:h>0?h:2},991:{perPage:h>0?h:3},1200:{perPage:d>0?d:4},1400:{perPage:d>0?d:5},1600:{perPage:d>0?d:G.ZQ?3:6}}};return(0,$.jsx)($.Fragment,{children:(0,$.jsx)("div",{className:"tb_c_m_post_container",children:g.map(((t,l)=>{const c=2==t,d=c?x:w,h=c?P:k;return(0,$.jsx)(o.tv,{hasTrack:!1,id:"slider_".concat(t),className:"tb_c_m_post_slider slider_".concat(t),options:h,extensions:{AutoScroll:B},ref:t=>this.inputRefs[u]=t,onMove:this.autoScrollSlider,children:(0,$.jsx)(o.Gj,{children:(null===d||void 0===d?void 0:d.length)>0&&d.map(((t,l)=>{const c=e[t];return(0,$.jsx)(o.jw,{className:"tb_".concat(l),children:(0,$.jsx)("div",{className:"tb_c_m_col_wrap",children:(0,$.jsx)(lt,{parentID:i,ownerId:n.Wall.owner,wall:n,itemData:c,itemIndex:t,personalization:n.Personalization,ThemeRule:n.ThemeRule,clickToShowPopUp:a,wallID:n.Wall.id,onClickToCTA:s,postSizeInPx:r},t)})},"tb_".concat(l,"_").concat(l))}))})},l)}))})})}}const dt=(0,s.$j)((t=>({loaderData:t.loaderData})),(t=>({getDataNextSteps:(e,n,a,s,o,r,i,l)=>t((0,ct.Sx)(e,n,a,s,o,r,i,l))})))(ut)},89239:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>i});var a=n(47313),s=n(17739),o=n(98935),r=n(46417);class i extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:n}=this.props;return(0,r.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,r.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,s.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,r.jsx)(o.Z,{authorClass:e,username:t.name,network:n,color:null===n.id?"#000":n.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var a=n(47313),s=n(46417);const o=t=>{let{username:e,network:n,authorClass:a,errorPic:o}=t;const r="#ffffff"==n.color?"#000":n.color;return(0,s.jsx)("img",{className:"".concat(a,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===n.id?"#000":r).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},r=(0,a.memo)(o)},62245:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>c});var a=n(47313),s=n(16390),o=n(17739),r=n(35179),i=n(30584),l=n(46417);class c extends a.PureComponent{constructor(t){super(t),this.contentRef=a.createRef()}componentDidMount(){r.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:n,font:a,personalization:c,item:u,contentTitle:d,readMore:h,maxLength:_,textAlign:p,maxLines:m,isReadMore:f}=this.props,g={WebkitLineClamp:m,textAlign:n.textAlignment};let b=20==u.network.id||r.bX&&!r.aL?e:(0,o.Fx)(e);12==u.network.id&&(b=(0,s.ZP)(b));const v="".concat(n.lineTrim?" tb_content_line-".concat(n.lineTrim):""),w="".concat(t," ").concat(f?"":v);return(0,l.jsxs)("div",{className:w,ref:this.contentRef,style:g,children:[d?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,s.ZP)(d)}):null,(0,l.jsx)(i.Z,{data:u,content:b,Personalization:c})]})}}},30584:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var a=n(47313),s=n(91523),o=n(16390),r=n(46417);const i=n(77560),l=t=>(0,r.jsx)(s.default,{children:(0,o.ZP)(t)}),c=t=>{let{data:e,content:n,Personalization:a}=t;const s={color:a.hashtag_color,fontWeight:"bold",backgroundColor:1==a.hashtag_background_status?a.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,r.jsx)(r.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,o.ZP)(n):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?l(window.slackdown.parse(i(n,/#(\w+)/g,((t,e)=>(0,r.jsxs)("div",{className:"tb_text_hashtag",style:s,children:["#",t]}))),e.slackMember)):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?l(window.slackdown.parse(i(n,e.hash.hashString,((t,e)=>(0,r.jsx)("div",{className:"tb_text_hashtag",style:s,children:t}))),e.slackMember)):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?l(window.slackdown.parse(i(n,/#(\w+)/g,((t,n)=>(0,r.jsxs)("div",{className:"tb_text_hashtag",style:s,children:["#",t]},"".concat(e.id,"_").concat(n)))),e.slackMember)):l(window.slackdown.parse(n,e.slackMember))}):(0,r.jsx)(r.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,o.ZP)(n):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?i((0,o.ZP)(n),/#(\w+)/g,((t,e)=>(0,r.jsxs)("div",{className:"tb_text_hashtag",style:s,children:["#",t]}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?i((0,o.ZP)(n),e.hash.hashString,((t,e)=>(0,r.jsx)("div",{className:"tb_text_hashtag",style:s,children:t}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?i((0,o.ZP)(n),/#(\w+)/g,((t,n)=>(0,r.jsxs)("div",{className:"tb_text_hashtag",style:s,children:["#",t]},"".concat(e.id,"_").concat(n)))):(0,o.ZP)(n)})},u=(0,a.memo)(c)},5744:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var a=n(47313),s=n(40475),o=n(35179),r=n(46417);class i extends a.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:n,wallID:a,ownerId:r}=this.props;e.stopPropagation(),o.ZQ||(0,s.S5)({type:2,action:2,wall:a,feed:n.feedId,post:n.referenceId?n.referenceId:n.id,owner:r}),(0,s.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,r.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,r.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(o.ZQ?"tb-share-fill":"tb-share"),children:(0,r.jsx)("div",{})}),(0,r.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,r.jsx)("div",{})})}):"",t.twitter?(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,r.jsx)("div",{})})}):"",t.linkedin?(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,r.jsx)("div",{})})}):""]})]})}}},55790:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>i});var a=n(47313),s=n(17739),o=n(46417);const r=t=>{const{postTime:e,timeClass:n}=t;return(0,o.jsx)("div",{className:n,children:(0,s.Sy)(e)})},i=(0,a.memo)(r)},50247:()=>{}}]);