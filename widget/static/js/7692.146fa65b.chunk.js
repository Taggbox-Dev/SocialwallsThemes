(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7692,5810],{97915:(t,e,i)=>{"use strict";i.d(e,{Z:()=>p});var o=i(47313),a=i(43411),s=i(83773),n=i(6119),d=i(17739),r=i(46417);const c=(0,s.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),l=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,i=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",o=t.product_price>0||t.product_discount>0?"".concat(i,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(o,"\n        </a>")};class h extends o.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,o=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return o.status?(0,r.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,d.i1)();return(0,r.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(i==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ ".concat(0==o.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,r.jsx)(c,{children:(0,r.jsx)(n.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:l(t.UgcProduct)})})]},e)}))}):null}}const p=(0,a.$j)((t=>({appData:t.appData})))(h)},84261:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>h});var o=i(47313),a=i(40475),s=i(97915),n=i(2406),d=i(17739),r=i(98501),c=i(35179),l=i(46417);class h extends o.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const i=document.querySelector(".track".concat(this.props.data.id));i&&(i.setAttribute("data-height",e),i.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:i}=await(0,n.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t,size:{height:parseInt(i),width:parseInt(t)}})}catch(i){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(i){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:i}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:i})}componentDidMount(){const{data:t,hotspot:e,size:i}=this.props;!i||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:i})}render(){const{ImageClass:t,data:e,wallID:i,themeID:o,ownerId:n,hotspot:h}=this.props,{imgUrl:p,paddingBottom:u,size:g,fixedPaddingBottom:m,imgSize:_,noPadding:b}=this.state,v={paddingBottom:"".concat(this.props.size?1==this.props.size?null:m:u,"%")},f={backgroundImage:"url(".concat(_.small,")")};if(g.width>g.height)var w="100%",y="".concat(g.height/g.width*100,"%");else y="100%",w="".concat(g.width/g.height*100,"%");const S=!!(e.hotspot&&e.ugc_products.length>0&&h),I={width:S&&this.props.size?w:null,height:S&&this.props.size?y:null};return(0,l.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:v,children:[S?(0,l.jsx)("div",{className:"tb_blur_bg_",style:f}):null,(0,l.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:I,children:[S?(0,l.jsx)(s.Z,{product:e.ugc_products}):null,(0,l.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:_.small,srcSet:c.bX&&b?"".concat(_.large,", 991w ").concat(_.small,", 480w"):null,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":i,"data-owner-id":n,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":o,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,a.ht)(t)},alt:(0,d.P)(p)})]})]})}}},64442:(t,e,i)=>{"use strict";i.d(e,{Z:()=>h});var o=i(47313),a=i(2406),s=i(20510),n=i.n(s),d=i(40475),r=i(35179),c=(i(17739),i(46417));const l=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class h extends o.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:i}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:i,isCover:o,controls:a,autoPlay:s,handleVideoEnded:h,muted:p,themeID:u}=this.props,{paddingBottom:g,videoLoaded:m,isVisible:_}=this.state,b={small:e.postFileNew,large:e.filename,orignal:e.file},v=[74,76,77].includes(u),f={paddingBottom:"".concat(v&&r.bX?null:g,"%")},w=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,c.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:f,ref:this.videoRef,children:(0,c.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:l(w,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":i,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!(r.bX&&!r.aL&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{e.stories&&0!=e.stories||(0,d.ib)(t,e.id)},autoPlay:s,muted:p,volume:s?1:0,playsinline:!0,onReady:t=>{r.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:r.ig||r.bX?_:s,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(v?b.large:b.small,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}},25810:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>d});var o=i(47313),a=i(35179),s=i(46417);const n=o.lazy((()=>i.e(5867).then(i.bind(i,95867))));class d extends o.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:i,isDefault:d,Personalization:r}=this.props,c=!!d&&(7!==t.id&&4!==t.id&&36!==t.id),l=a.ZQ&&36==t.id?"tagembed":t.icon;return c?(0,s.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(l.replace(/fa-/g,"")),children:(0,s.jsx)("div",{})}):(0,s.jsxs)(o.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:[" ",(0,s.jsx)(n,{network:t,networkClass:e})]})}}},11502:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});var o=i(17739),a=i(46417);const s=t=>{let{ThemeRule:e,btnClass:i}=t;const s={fontFamily:e.css_font};return(0,a.jsx)("div",{className:"tb_shop_btn_wrap ".concat(i),children:(0,a.jsx)("div",{className:"tb_shop_btn".concat(e.postHover||(0,o.mD)(4)||(0,o.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:s,children:e.shoppingText})})}},24235:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});var o=i(17739),a=i(46417);const s=t=>{let{count:e}=t;return(0,a.jsxs)("div",{className:"tb_r_view",children:[(0,a.jsx)("div",{className:"tb__icon tb-eye",children:(0,a.jsx)("div",{})}),(0,o.sy)(e)]})}},61729:(t,e,i)=>{"use strict";var o=i(79165);function a(){}function s(){}s.resetWarningCache=a,t.exports=function(){function t(t,e,i,a,s,n){if(n!==o){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}function e(){return t}t.isRequired=t;var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:s,resetWarningCache:a};return i.PropTypes=i,i}},75192:(t,e,i)=>{t.exports=i(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2406:(t,e,i)=>{"use strict";e.Ad=void 0;var o=i(84228);var a=i(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var s=i(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const o=i(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,a)=>{if("undefined"===typeof window)return a(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(o.ErrorMessage.URL_IS_NOT_DEFINED);let s=null;const n=new Image;n.addEventListener("load",(()=>{s&&window.clearTimeout(s),i({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{s&&window.clearTimeout(s),a("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(s=window.setTimeout((()=>a(o.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,i){"use strict";var o=this&&this.__awaiter||function(t,e,i,o){return new(i||(i=Promise))((function(a,s){function n(t){try{r(o.next(t))}catch(e){s(e)}}function d(t){try{r(o.throw(t))}catch(e){s(e)}}function r(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(n,d)}r((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=i(47313),s=i(65786);e.useImageSize=(t,e)=>{const[i,n]=(0,a.useState)(null),[d,r]=(0,a.useState)(!1),[c,l]=(0,a.useState)(null);return(0,a.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){r(!0),n(null);try{const{width:i,height:o}=yield(0,s.getImageSize)(t,e);n({width:i,height:o})}catch(c){l(c.toString())}finally{r(!1)}}))}),[t,e]),[i,{loading:d,error:c}]}},65192:()=>{},59606:()=>{},98907:()=>{}}]);