"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7918,5810],{64442:(e,t,i)=>{i.d(t,{Z:()=>p});var o=i(47313),a=i(2406),n=i(20510),s=i.n(n),r=i(43635),l=i(35179),d=(i(17739),i(46417));const c=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class h extends o.Component{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:i}=await(0,a.Ad)(t.postFileNew);this.setState({paddingBottom:100*i/e})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:e,data:t,wallID:i,isCover:o,controls:a,autoPlay:n,handleVideoEnded:h,muted:p,themeID:u,intervalTime:m}=this.props,{paddingBottom:g,videoLoaded:_,isVisible:v}=this.state,b={small:t.postFileNew,large:t.filename,orignal:t.file},w=[74,76,77].includes(u),I={paddingBottom:"".concat(w&&l.bX?null:g,"%")},f=null!==t&&void 0!==t&&t.loopStop?t.mediaUrl:t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl,x=new URLSearchParams(window.location.search),D=x.has("editor")&&"1"===x.get("editor")&&x.has("personalize")&&"1"===x.get("personalize")&&x.has("preview")&&"1"===x.get("preview"),S=x.has("embed")&&"true"===x.get("embed");return(0,d.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:I,ref:this.videoRef,children:(0,d.jsx)(s(),{className:"".concat(e," video").concat(t.id),url:c(f,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":i,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:t.postFileNew}},file:{attributes:{preload:"metadata",poster:t.postFileNew}}},loop:!(l.bX&&!l.aL&&null!==t&&void 0!==t&&t.loopStop),onError:e=>{!S||t.stories&&0!=t.stories||(0,r.ib)(e,t.id),w&&h&&setTimeout((()=>{h()}),1e3*m)},autoPlay:!l.bX||D&&!S||null==t.mediaClip?!(l.bX&&D&&!S&&(null==t.mediaClip||""==t.mediaClip))&&n:v,muted:p,volume:n?1:0,playsinline:!0,onReady:e=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig||l.bX&&(!D||S)?v:!(l.bX&&D&&!S)&&n,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(w?b.large:b.small,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}const p=(0,o.memo)(h)},25810:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});var o=i(47313),a=i(35179),n=i(46417);const s=o.lazy((()=>i.e(5867).then(i.bind(i,95867))));class r extends o.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:i,isDefault:r,Personalization:l}=this.props,d=!!r&&(7!==(null===e||void 0===e?void 0:e.id)&&4!==(null===e||void 0===e?void 0:e.id)&&36!==(null===e||void 0===e?void 0:e.id)),c=a.ZQ&&36===(null===e||void 0===e?void 0:e.id)?"tagembed":(null===e||void 0===e?void 0:e.icon)||"";return d?(0,n.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(c.replace(/fa-/g,"")),children:(0,n.jsx)("div",{})}):(0,n.jsxs)(o.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(s,{network:e,networkClass:t})]})}}},11502:(e,t,i)=>{i.d(t,{Z:()=>n});var o=i(17739),a=i(46417);const n=e=>{let{ThemeRule:t,btnClass:i}=e;const n={fontFamily:t.css_font};return(0,a.jsx)("div",{className:"tb_shop_btn_wrap ".concat(i),children:(0,a.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,o.mD)(4)||(0,o.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:n,children:t.shoppingText})})}},28751:(e,t,i)=>{i.d(t,{Z:()=>u});var o=i(47313),a=i(35179),n=i(84261),s=i(64442),r=i(81349),l=i(46417);const d=o.lazy((()=>i.e(695).then(i.bind(i,10695)))),c=e=>{let{itemData:t,wallID:i,wall:c,ownerId:h,isVisible:p}=e;const u=!(3!==t.type&&5!==t.type||!p),m=(3===t.type||5===t.type)&&1==c.ThemeRule.autoPlay;return(0,l.jsxs)("div",{className:"tb_g_r_media_wrap",children:[a.aL&&c.Personalization.interactive?(0,l.jsx)(o.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(d,{likeClass:"tb_g_r_like ".concat(c.ThemeRule.socialAction?"":"tb_g_r_like_bottom"),postId:t.id,wallID:i,UserDetail:c.UserDetail})}):null,a.aL?(0,l.jsx)(r.Z,{itemData:t,IconClass:"tb_g_r_media_icon",show:!0,hideVideo:!0}):null,u||m?(0,l.jsx)(s.Z,{VideoClass:"tb_g_r_video",data:t,wallID:i,themeID:c.Personalization.widgetTheme,ownerId:h,size:1,isCover:!0,autoPlay:!0,muted:!0}):(0,l.jsx)(n.default,{ImageClass:"tb_g_r_image",data:t,wallID:i,themeID:c.Personalization.widgetTheme,ownerId:h,size:1})]})};var h=i(17739);i(25810),i(11502);const p=o.lazy((()=>i.e(4770).then(i.bind(i,54770))));class u extends o.PureComponent{constructor(e){super(e),this.mediaHeight=o.createRef()}componentDidMount(){a.nX&&(0,h.YN)(this.mediaHeight)}render(){var e;const{itemData:t,itemIndex:i,wallID:n,ownerId:s,wall:r,isVisible:d,clickToShowPopUp:h,ThemeRule:u,personalization:m,adjustWidth:g}=this.props,_=!!(null!==t&&void 0!==t&&t.ugc_products&&(null===t||void 0===t||null===(e=t.ugc_products)||void 0===e?void 0:e.length)>0),v=(!a.ig||!_||null!==u&&void 0!==u&&u.hideContent,!(!a.ig||!_||0!==(null===t||void 0===t?void 0:t.hotspot))),b=!!(a.ig&&null!==t&&void 0!==t&&t.hotspot&&_);return(0,l.jsx)("div",{"item-id":t.id,id:"tb-g_r-post-".concat(t.id),className:"tb_g_r_post_wrapper",ref:this.mediaHeight,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,style:{width:"".concat(g,"%"),padding:r.Personalization.padding/2},"tb-product":v?1:b?2:0,children:(0,l.jsx)("div",{className:"tb_g_r_post_in tb_icon_animate ".concat(a.ig?"":"tb_g_r_post_in_animate"),onClick:h(i,t),children:(0,l.jsxs)("div",{className:"tb_g_r_post_media_wrapp",children:[(0,l.jsx)(c,{itemData:t,wallID:n,wall:r,ownerId:s,preload:0==i,isVisible:d}),(0,l.jsx)("div",{className:"tb_g_r_post_details",children:(0,l.jsx)(o.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(p,{ownerId:s,postTime:t.createdAt,author:t.author,network:t.network,font:u,personalization:m,ThemeRule:u})})})]})})})}}},34280:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var o=i(47313),a=(i(34862),i(43411)),n=i(61395),s=i.n(n),r=i(28751),l=(i(97529),i(47330),i(6940),i(65192),i(59606),i(98907),i(43635)),d=i(17739),c=i(35179),h=i(46417);const p=o.lazy((()=>i.e(2205).then(i.bind(i,32205))));class u extends o.Component{constructor(e){super(e),this.state={activeID:-1,newPostdata:[]},this.scrollInterval=null,this.componentDidMount=()=>{this.scrollInterval=setInterval((()=>this.onUpdateTimeInterVal()),3e3);const{heightUpdate:e}=this.props;setTimeout((()=>e()),1e3)},this.onUpdateTimeInterVal=()=>{const{activeID:e}=this.state,{cardNumber:t,wall:i}=this.props,o=(0,d.b)()?i.ThemeRule.mobileColumn||2:i.ThemeRule.numberOfCoumn,a=parseInt(e)+1;this.setState({activeID:parseInt(o)>=a?a:0})},this.inputRefs={}}componentWillMount(){const{cardNumber:e,postData:t,completeDataObject:i,adjustWidth:o,wall:a,postSize:n,clickToShowPopUp:s,onClickToCTA:r,postSizeInPx:l,numberOfCoumn:c}=this.props,{activeID:h}=this.state,p=(0,d.b)()?a.ThemeRule.mobileColumn||2:a.ThemeRule.numberOfCoumn,u=Array.from({length:p},(()=>[]));t.forEach(((e,t)=>u[t%p].push(e))),u.forEach((e=>{for(;e.length<3;){const t=u[Math.floor(Math.random()*p)],i=t[Math.floor(Math.random()*t.length)];e.push(i)}})),this.setState({newPostdata:u})}componentWillUnmount(){this.scrollInterval&&clearInterval(this.scrollInterval)}render(){const{postData:e,completeDataObject:t,wall:i,clickToShowPopUp:a,hasMoreData:n,parentID:l,keyRender:d,onClickToCTA:u,postSizeInPx:m,adjustWidth:g,numberOfCoumn:_}=this.props,{activeID:v,newPostdata:b}=this.state;return(0,h.jsxs)(h.Fragment,{children:[" ",c.aL?(0,h.jsx)(s(),{id:"pixel",className:"tb_g_r_post_container",tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_px_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:e&&e.length>0&&e.map(((e,o)=>{const n=t[e];return(0,h.jsx)(r.Z,{ownerId:i.Wall.owner,itemData:n,itemIndex:o,adjustWidth:g,personalization:i.Personalization,ThemeRule:i.ThemeRule,wallID:i.Wall.id,clickToShowPopUp:a,onClickToCTA:u,postSizeInPx:m,wall:i},"sqr_crd_".concat(o,"_").concat(e.id))}))}):(0,h.jsx)("div",{className:"tb_g_r_post_container",children:b.map(((e,n)=>(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(p,{pIndex:n,itemIds:e,activeID:v,completeDataObject:t,wall:i,onClickToCTA:u,postSizeInPx:m,cardCount:b.length,clickToShowPopUp:a},"exhi_".concat(n))})))})]})}}const m=(0,o.memo)((0,a.$j)((e=>({loaderData:e.loaderData})),(e=>({getDataNextSteps:(t,i,o,a,n,s,r,d)=>e((0,l.Sx)(t,i,o,a,n,s,r,d))})))(u))},2406:(e,t,i)=>{t.Ad=void 0;var o=i(84228);var a=i(65786);Object.defineProperty(t,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var n=i(22537)},84228:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorMessage=void 0,t.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getImageSize=void 0;const o=i(84228);t.getImageSize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,a)=>{if("undefined"===typeof window)return a(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!e)return a(o.ErrorMessage.URL_IS_NOT_DEFINED);let n=null;const s=new Image;s.addEventListener("load",(()=>{n&&window.clearTimeout(n),i({width:s.naturalWidth,height:s.naturalHeight})})),s.addEventListener("error",(e=>{n&&window.clearTimeout(n),a("".concat(e.type,": ").concat(e.message))})),s.src=e,t.timeout&&(n=window.setTimeout((()=>a(o.ErrorMessage.TIMEOUT)),t.timeout))}))}},22537:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){return new(i||(i=Promise))((function(a,n){function s(e){try{l(o.next(e))}catch(t){n(t)}}function r(e){try{l(o.throw(e))}catch(t){n(t)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,r)}l((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.useImageSize=void 0;const a=i(47313),n=i(65786);t.useImageSize=(e,t)=>{const[i,s]=(0,a.useState)(null),[r,l]=(0,a.useState)(!1),[d,c]=(0,a.useState)(null);return(0,a.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){l(!0),s(null);try{const{width:i,height:o}=yield(0,n.getImageSize)(e,t);s({width:i,height:o})}catch(d){c(d.toString())}finally{l(!1)}}))}),[e,t]),[i,{loading:r,error:d}]}},65192:()=>{},59606:()=>{},98907:()=>{}}]);