(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1917,4261,8342,9239,5790,5810],{89239:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var o=i(47313),n=i(17739),s=i(98935),a=i(46417);class l extends o.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:i}=this.props;return(0,a.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,a.jsx)("img",{className:"".concat(e,"__"),src:null!==t&&void 0!==t&&t.picture&&String(null===t||void 0===t?void 0:t.picture).includes("author.png")?" ":null===t||void 0===t?void 0:t.picture.replace(/[ ]+/g,""),alt:(0,n.P)(null===t||void 0===t?void 0:t.picture),width:44,height:44,onError:e=>{var o,n;const s="#ffffff"==(null===i||void 0===i?void 0:i.color)?"#000":null===i||void 0===i?void 0:i.color;e.target.src=null!==t&&void 0!==t&&t.errorPic?null===t||void 0===t?void 0:t.errorPic:"https://ui-avatars.com/api/?name=".concat(null===t||void 0===t||null===(o=t.name)||void 0===o?void 0:o.replace(/\s/g,""),"&background=").concat(null===(n=String(null===(null===i||void 0===i?void 0:i.id)?"#000":s))||void 0===n?void 0:n.replace("#",""),"&color=fff&length=1"),e.target.alt=null===t||void 0===t?void 0:t.name}},Math.random()):(0,a.jsx)(s.Z,{authorClass:e,username:null===t||void 0===t?void 0:t.name,network:i,color:null===(null===i||void 0===i?void 0:i.id)?"#000":null===i||void 0===i?void 0:i.color,errorPic:null===t||void 0===t?void 0:t.errorPic})},Math.random())}}},98935:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});var o=i(47313),n=i(46417);const s=t=>{let{username:e,network:i,authorClass:o,errorPic:s}=t;const a="#ffffff"==(null===i||void 0===i?void 0:i.color)?"#000":null===i||void 0===i?void 0:i.color;return(0,n.jsx)("img",{className:"".concat(o,"__"),src:s||"https://ui-avatars.com/api/?name=".concat(null===e||void 0===e?void 0:e.replace(/\s/g,""),"&background=").concat(String(null===(null===i||void 0===i?void 0:i.id)?"#000":a).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},a=(0,o.memo)(s)},97915:(t,e,i)=>{"use strict";i.d(e,{Z:()=>h});var o=i(47313),n=i(43411),s=i(83773),a=i(6119),l=i(17739),d=i(46417);const r=(0,s.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),c=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,i=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",o=t.product_price>0||t.product_discount>0?"".concat(i,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(o,"\n        </a>")};class u extends o.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,o=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return o.status?(0,d.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const n=(0,l.i1)();return(0,d.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(n),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(i==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,d.jsx)("div",{className:"tb_hotspot__ ".concat(0==o.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,d.jsx)(r,{children:(0,d.jsx)(a.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(n),clickable:!0,html:c(t.UgcProduct)})})]},e)}))}):null}}const h=(0,n.$j)((t=>({appData:t.appData})))(u)},84261:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var o=i(47313),n=(i(43635),i(97915)),s=i(2406),a=i(17739),l=i(98501),d=i(35179),r=i(46417);class c extends o.PureComponent{constructor(t){var e,i,n,a;super(t),this.onSetHeightWithWidth=(t,e)=>{const i=document.querySelector(".track".concat(this.props.data.id));i&&(i.setAttribute("data-height",e),i.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=(null===e||void 0===e?void 0:e.mediaHeight)&&null!==e&&void 0!==e&&e.mediaWidth&&""!=(null===e||void 0===e?void 0:e.mediaWidth))this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:i}=await(0,s.Ad)(null===e||void 0===e?void 0:e.postFileNew);this.setState({paddingBottom:100*i/t,size:{height:parseInt(i),width:parseInt(t)}})}catch(i){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(i){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:null===(e=this.props.data)||void 0===e?void 0:e.postFileNew,imgSize:{small:null===(i=t.data)||void 0===i?void 0:i.postFileNew,large:null===(n=t.data)||void 0===n?void 0:n.filename,orignal:null===(a=t.data)||void 0===a?void 0:a.file},size:{height:100,width:100},isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){var t;const{data:e,hotspot:i,size:o}=this.props;!o||null!==e&&void 0!==e&&e.hotspot&&(null===e||void 0===e||null===(t=e.ugc_products)||void 0===t?void 0:t.length)>0&&i?this.onMediaLoad():this.setState({paddingBottom:o})}componentDidMount(){var t;const{data:e,hotspot:i,size:o}=this.props;!o||null!==e&&void 0!==e&&e.hotspot&&(null===e||void 0===e||null===(t=e.ugc_products)||void 0===t?void 0:t.length)>0&&i?this.onMediaLoad():this.setState({fixedPaddingBottom:o});try{this.observer=new IntersectionObserver((t=>{let[e]=t;e.isIntersecting&&(this.setState({isVisible:e.isIntersecting}),this.observer.disconnect())}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(n){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){var t,e;const{ImageClass:i,data:o,wallID:s,themeID:c,ownerId:u,hotspot:h}=this.props,{imgUrl:v,paddingBottom:p,size:m,fixedPaddingBottom:_,imgSize:g,noPadding:b,isVisible:f}=this.state,w={paddingBottom:"".concat(this.props.size?1==this.props.size?null:_:p,"%")},x={backgroundImage:"url(".concat(g.small,")")};if(m.width>m.height)var y="100%",I="".concat(m.height/m.width*100,"%");else I="100%",y="".concat(m.width/m.height*100,"%");const j=!!(null!==o&&void 0!==o&&o.hotspot&&(null===o||void 0===o||null===(t=o.ugc_products)||void 0===t?void 0:t.length)>0&&h),k={width:j&&this.props.size?y:null,height:j&&this.props.size?I:null};return(0,r.jsxs)("div",{className:"".concat(i,"_wrap_ mediaHolder").concat(null===o||void 0===o?void 0:o.id),style:w,ref:this.videoRef,children:[j?(0,r.jsx)("div",{className:"tb_blur_bg_",style:x}):null,(0,r.jsxs)("div",{className:"".concat(i,"_wrap_in"),style:k,children:[j?(0,r.jsx)(n.Z,{product:o.ugc_products}):null,(0,r.jsx)("img",{className:"".concat(i," track").concat(null===o||void 0===o?void 0:o.id),role:"img",src:f?null===g||void 0===g?void 0:g.small:null===o||void 0===o?void 0:o.postFileNew,srcSet:f?d.bX&&b?"".concat(null===g||void 0===g?void 0:g.large,", 991w ").concat(null===g||void 0===g?void 0:g.small,", 480w"):null:null===o||void 0===o?void 0:o.postFileNew,height:300,width:300,"data-link":null===o||void 0===o?void 0:o.link,"data-load":"0","data-network":null===o||void 0===o||null===(e=o.network)||void 0===e?void 0:e.id,"data-wall-id":s,"data-owner-id":u,"data-item-id":null===o||void 0===o?void 0:o.id,"data-feed-id":null!==o&&void 0!==o&&o.feedId?null===o||void 0===o?void 0:o.feedId:"","data-filter-id":null===o||void 0===o?void 0:o.filterId,"theme-id":c,onLoad:this.onLoad,onError:null!==o&&void 0!==o&&o.stories?null:t=>{t.target.src="".concat(l.do,"/media/images/error/no-image.svg")},alt:(0,a.P)(v)})]})]})}}},64442:(t,e,i)=>{"use strict";i.d(e,{Z:()=>h});var o=i(47313),n=i(2406),s=i(20510),a=i.n(s),l=i(43635),d=i(35179),r=(i(17739),i(46417));const c=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class u extends o.Component{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:i}=await(0,n.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(null===t||void 0===t?void 0:t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(null===t||void 0===t?void 0:t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){var t,e;const{VideoClass:i,data:o,wallID:n,isCover:s,controls:u,autoPlay:h,handleVideoEnded:v,muted:p,themeID:m,intervalTime:_}=this.props,{paddingBottom:g,videoLoaded:b,isVisible:f}=this.state,w={small:null===o||void 0===o?void 0:o.postFileNew,large:null===o||void 0===o?void 0:o.filename,orignal:null===o||void 0===o?void 0:o.file},x=[74,76,77].includes(m),y={paddingBottom:"".concat(x&&d.bX?null:g,"%")},I=null!==o&&void 0!==o&&o.loopStop?null===o||void 0===o?void 0:o.mediaUrl:null!==o&&void 0!==o&&o.mediaClip&&String(null===o||void 0===o?void 0:o.mediaClip).length>0?null===o||void 0===o?void 0:o.mediaClip:null===o||void 0===o?void 0:o.mediaUrl,j=new URLSearchParams(window.location.search),k=j.has("editor")&&"1"===j.get("editor")&&j.has("personalize")&&"1"===j.get("personalize")&&j.has("preview")&&"1"===j.get("preview"),N=j.has("embed")&&"true"===j.get("embed");return(0,r.jsx)("div",{className:"".concat(i,"_wrap_ mediaHolder").concat(o.id),style:y,ref:this.videoRef,children:(0,r.jsx)(a(),{className:"".concat(i," video").concat(o.id),url:c(I,null===o||void 0===o||null===(t=o.network)||void 0===t?void 0:t.id),"data-type":"video","data-network":null===o||void 0===o||null===(e=o.network)||void 0===e?void 0:e.id,"data-link":null===o||void 0===o?void 0:o.link,"data-wall-id":n,"data-item-id":null===o||void 0===o?void 0:o.id,"data-feed-id":null!==o&&void 0!==o&&o.feedId?null===o||void 0===o?void 0:o.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:null===o||void 0===o?void 0:o.postFileNew}},file:{attributes:{preload:"metadata",poster:null===o||void 0===o?void 0:o.postFileNew}}},loop:!(d.bX&&!d.aL&&null!==o&&void 0!==o&&o.loopStop),onError:t=>{!N||null!==o&&void 0!==o&&o.stories&&0!=(null===o||void 0===o?void 0:o.stories)||(0,l.ib)(t,o.id),x&&v&&setTimeout((()=>{v()}),1e3*_)},autoPlay:!d.bX||k&&!N||null==(null===o||void 0===o?void 0:o.mediaClip)?!(d.bX&&k&&!N&&(null==(null===o||void 0===o?void 0:o.mediaClip)||""==(null===o||void 0===o?void 0:o.mediaClip)))&&h:f,muted:p,volume:h?1:0,playsinline:!0,onReady:t=>{d.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:d.ig||d.bX&&(!k||N)?f:!(d.bX&&k&&!N)&&h,height:"100%",width:"100%",controls:u||!1,style:{backgroundImage:"url(".concat(x?w.large:w.small,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:v||null})})}}const h=(0,o.memo)(u)},25810:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var o=i(47313),n=i(35179),s=i(46417);const a=o.lazy((()=>i.e(5867).then(i.bind(i,95867))));class l extends o.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:i,isDefault:l,Personalization:d}=this.props,r=!!l&&(7!==(null===t||void 0===t?void 0:t.id)&&4!==(null===t||void 0===t?void 0:t.id)&&36!==(null===t||void 0===t?void 0:t.id)),c=n.ZQ&&36===(null===t||void 0===t?void 0:t.id)?"tagembed":(null===t||void 0===t?void 0:t.icon)||"";return r?(0,s.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(c.replace(/fa-/g,"")),children:(0,s.jsx)("div",{})}):(0,s.jsxs)(o.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:[" ",(0,s.jsx)(a,{network:t,networkClass:e})]})}}},62245:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var o=i(47313),n=i(16390),s=i(17739),a=i(35179),l=i(30584),d=i(46417);class r extends o.PureComponent{constructor(t){super(t),this.contentRef=o.createRef()}componentDidMount(){a.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){var t,e;const{contentClass:i,content:o,ThemeRule:r,font:c,personalization:u,item:h,contentTitle:v,readMore:p,maxLength:m,textAlign:_,maxLines:g,isReadMore:b}=this.props,f={WebkitLineClamp:g,textAlign:r.textAlignment};let w=20==(null===h||void 0===h||null===(t=h.network)||void 0===t?void 0:t.id)||a.bX&&!a.aL?o:(0,s.Fx)(o);12==(null===h||void 0===h||null===(e=h.network)||void 0===e?void 0:e.id)&&(w=(0,n.ZP)(w));const x="".concat(r.lineTrim?" tb_content_line-".concat(r.lineTrim):""),y="".concat(i," ").concat(b?"":x);return(0,d.jsxs)("div",{className:y,ref:this.contentRef,style:f,children:[v?(0,d.jsx)("div",{className:"tb_bold_txt__",children:(0,n.ZP)(v)}):null,(0,d.jsx)(l.Z,{data:h,content:w,Personalization:u,ThemeRule:r})]})}}},30584:(t,e,i)=>{"use strict";i.d(e,{Z:()=>c});var o=i(47313),n=i(91523),s=i(16390),a=i(46417);const l=i(77560),d=(t,e)=>(0,a.jsx)(n.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,s.ZP)(t)}),r=t=>{var e;let{data:i,content:o,Personalization:n,ThemeRule:r}=t;const c={color:n.hashtag_color,fontWeight:"bold",backgroundColor:1==n.hashtag_background_status?n.hashtag_background_color:"transparent"};return 20==(null===i||void 0===i||null===(e=i.network)||void 0===e?void 0:e.id)&&window.slackdown?(0,a.jsx)(a.Fragment,{children:1===n.hashtag_highlight&&0===n.hashtag_feed&&0===n.hashtag_all?(0,s.ZP)(o):1===n.hashtag_highlight&&0===n.hashtag_feed&&1===n.hashtag_all?d(window.slackdown.parse(l(o,/#(\w+)/g,((t,e)=>(0,a.jsxs)("div",{className:"tb_text_hashtag",style:c,children:["#",t]}))),i.slackMember),r):1===n.hashtag_highlight&&1===n.hashtag_feed&&0===n.hashtag_all?d(window.slackdown.parse(l(o,i.hash.hashString,((t,e)=>(0,a.jsx)("div",{className:"tb_text_hashtag",style:c,children:t}))),i.slackMember),r):1===n.hashtag_highlight&&1===n.hashtag_feed&&1===n.hashtag_all?d(window.slackdown.parse(l(o,/#(\w+)/g,((t,e)=>(0,a.jsxs)("div",{className:"tb_text_hashtag",style:c,children:["#",t]},"".concat(i.id,"_").concat(e)))),i.slackMember),r):d(window.slackdown.parse(o,i.slackMember),r)}):(0,a.jsx)(a.Fragment,{children:1===n.hashtag_highlight&&0===n.hashtag_feed&&0===n.hashtag_all?(0,s.ZP)(o):1===n.hashtag_highlight&&0===n.hashtag_feed&&1===n.hashtag_all?l((0,s.ZP)(o),/#(\w+)/g,((t,e)=>(0,a.jsxs)("div",{className:"tb_text_hashtag",style:c,children:["#",t]}))):1===n.hashtag_highlight&&1===n.hashtag_feed&&0===n.hashtag_all?l((0,s.ZP)(o),i.hash.hashString,((t,e)=>(0,a.jsx)("strong",{className:"tb_text_hashtag",style:c,children:t}))):1===n.hashtag_highlight&&1===n.hashtag_feed&&1===n.hashtag_all?l((0,s.ZP)(o),/#(\w+)/g,((t,e)=>(0,a.jsxs)("div",{className:"tb_text_hashtag",style:c,children:["#",t]},"".concat(i.id,"_").concat(e)))):d(o,r)})},c=(0,o.memo)(r)},90905:(t,e,i)=>{"use strict";i.d(e,{Z:()=>d});var o=i(47313),n=i(35179),s=i(46417);const a=t=>{let{network:e}=t;const i={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:n.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:n.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:o,color:a}=i[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,s.jsx)("div",{className:o,style:{color:a},"tb-network":e.id,children:(0,s.jsx)("div",{})})},l=t=>{let{ThemeID:e}=t;const{className:i,color:o}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,s.jsx)("div",{className:i,style:{color:o},"tb-network":e})};class d extends o.PureComponent{render(){const{rating:t,network:e,ThemeID:i}=this.props;return(0,s.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,o)=>i?(0,s.jsx)(l,{ThemeID:i},o):(0,s.jsx)(a,{network:e},o))):null})}}},55790:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var o=i(47313),n=i(17739),s=i(46417);const a=t=>{const{postTime:e,timeClass:i}=t;return(0,s.jsx)("div",{className:i,children:(0,n.Sy)(e)})},l=(0,o.memo)(a)},5309:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>y});var o=i(47313),n=i(89239),s=i(55790),a=i(46417);class l extends o.PureComponent{render(){var t;const{author:e,personalization:i,postTime:o,network:l}=this.props,d=null!==e&&void 0!==e&&e.username&&(null===e||void 0===e||null===(t=e.username)||void 0===t?void 0:t.length)>0?"@".concat(null===e||void 0===e?void 0:e.username):"",r=!(null===i||void 0===i||!i.postAuthor||null!==e&&void 0!==e&&e.isInstaUser),c=!(null===i||void 0===i||!i.postAuthor||null===i||void 0===i||!i.postTime||null!==e&&void 0!==e&&e.isInstaUser);return(0,a.jsx)("div",{className:"tb_ss_author_wrapper",children:(0,a.jsxs)("div",{className:"tb_ss_author",children:[r?(0,a.jsx)(n.default,{author:e,authorClass:"tb_ss_author_profile",network:l}):"",(0,a.jsxs)("div",{className:"tb_ss_author_info",children:[r?(0,a.jsx)("div",{className:"tb_ss_authorname",children:null===e||void 0===e?void 0:e.name}):"",(0,a.jsxs)("div",{className:"tb_ss_post_info",children:[r?(0,a.jsx)("div",{className:"tb_ss_username",children:d}):"",c?(0,a.jsx)("div",{className:"tb_ss_seprator",children:" "}):"",null!==i&&void 0!==i&&i.postTime?(0,a.jsx)(s.default,{postTime:o,timeClass:"tb_ss_time"}):""]})]})]})})}}var d=i(35179),r=i(84261),c=i(64442);const u=o.lazy((()=>i.e(695).then(i.bind(i,10695)))),h=t=>{var e,i,n;let{itemData:s,wallID:l,ownerId:h,wall:v,autoPlay:p,handleVideoEnded:m,intervalTime:_}=t;const g=(3===(null===s||void 0===s?void 0:s.type)||5===(null===s||void 0===s?void 0:s.type))&&p;return(0,a.jsxs)("div",{className:"tb_ss_media_wrap",children:[d.aL&&null!==v&&void 0!==v&&null!==(e=v.Personalization)&&void 0!==e&&e.interactive?(0,a.jsx)(o.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(u,{postId:null===s||void 0===s?void 0:s.id,wallID:l,UserDetail:null===v||void 0===v?void 0:v.UserDetail})}):null,g?(0,a.jsx)(c.Z,{VideoClass:"tb_ss_video",data:s,wallID:l,themeID:null===v||void 0===v||null===(i=v.Personalization)||void 0===i?void 0:i.widgetTheme,ownerId:h,size:1,isCover:!0,controls:!1,autoPlay:!d.P2,muted:!0,handleVideoEnded:m,intervalTime:_}):(0,a.jsx)(r.default,{ImageClass:"tb_ss_image",data:s,wallID:l,themeID:null===v||void 0===v||null===(n=v.Personalization)||void 0===n?void 0:n.widgetTheme,ownerId:h,size:1,ThemeRule:null===v||void 0===v?void 0:v.ThemeRule})]})};var v=i(62245),p=i(90905),m=i(17739),_=i(25810);i(98501);class g extends o.PureComponent{constructor(t){super(t),this.updateIndex=()=>{const{handleSlideChange:t}=this.props;t()},this.updateHeight=()=>{this.contentRef.current&&this.setState({contentHeight:this.contentRef.current.offsetHeight})},this.state={contentHeight:0},this.contentRef=o.createRef()}componentDidMount(){this.updateHeight();const{currentIndex:t,intervalTime:e,itemIndex:i,itemData:o,personalization:n}=this.props;(t==i&&(2==(null===o||void 0===o?void 0:o.type)||4==(null===o||void 0===o?void 0:o.type)||3==(null===o||void 0===o?void 0:o.type)||5==(null===o||void 0===o?void 0:o.type)||1==(null===o||void 0===o?void 0:o.type)&&0==(null===n||void 0===n?void 0:n.playFullVideo))||1==(null===o||void 0===o?void 0:o.type)&&1==(null===n||void 0===n?void 0:n.playFullVideo))&&(this.intervalId=setTimeout(this.updateIndex,1e3*e)),window.addEventListener("resize",this.updateHeight)}componentWillUnmount(){window.removeEventListener("resize",this.updateHeight),clearInterval(this.intervalId)}componentWillReceiveProps(t){var e,i,o,n,s,a;const{itemIndex:l,personalization:r}=this.props;t.currentIndex!=l&&clearInterval(this.intervalId),(t.currentIndex==l&&!d.aL&&(2==(null===t||void 0===t||null===(e=t.itemData)||void 0===e?void 0:e.type)||4==(null===t||void 0===t||null===(i=t.itemData)||void 0===i?void 0:i.type)||(3==(null===t||void 0===t||null===(o=t.itemData)||void 0===o?void 0:o.type)||5==(null===t||void 0===t||null===(n=t.itemData)||void 0===n?void 0:n.type)||1==(null===t||void 0===t||null===(s=t.itemData)||void 0===s?void 0:s.type))&&0==(null===r||void 0===r?void 0:r.playFullVideo))||1==(null===t||void 0===t||null===(a=t.itemData)||void 0===a?void 0:a.type)&&1==(null===r||void 0===r?void 0:r.playFullVideo))&&(this.intervalId=setTimeout(this.updateIndex,1e3*t.intervalTime))}render(){var t,e;const{contentHeight:i}=this.state,{itemData:o,personalization:n,ThemeRule:s,wallID:d,ownerId:r,wall:c,autoPlay:u,intervalTime:g,itemIndex:b}=this.props,f=n.signageTheme,w=!(2!==(null===o||void 0===o?void 0:o.type)&&3!==(null===o||void 0===o?void 0:o.type)&&4!==(null===o||void 0===o?void 0:o.type)&&5!==(null===o||void 0===o?void 0:o.type)||!u),x=(2===(null===o||void 0===o?void 0:o.type)||4===(null===o||void 0===o?void 0:o.type))&&77==f,y=(null===o||void 0===o?void 0:o.rating)>0,I=(null===o||void 0===o?void 0:o.rating)>0?"tb_ss_rating_content":"tb_ss_content",j=1===(null===o||void 0===o?void 0:o.type)&&null!==n&&void 0!==n&&n.textDecorate?"tb_ss_text_decoration tb_ss_text_post":"",k=null!==n&&void 0!==n&&n.trimcontent?(0,m.Sv)(null===o||void 0===o?void 0:o.content,50):null===o||void 0===o?void 0:o.content,N=!(null===s||void 0===s||!s.socialAction),S=!(1==(null===o||void 0===o?void 0:o.type)||null===s||void 0===s||!s.hideContent||N),T={backgroundImage:"url(".concat(null===o||void 0===o?void 0:o.postFileNew,")")},P=74==f?" tb_mss_t":76==f?" tb_css_t":77==f?" tb_zss_t":"",C=(0,m.b)()?2:((i-350)/30).toFixed();return(0,a.jsxs)("div",{id:"tb-ss-post-".concat(null===o||void 0===o?void 0:o.id),className:"tb_ss_post_wrapper".concat(P),"tb-network":null===o||void 0===o||null===(t=o.network)||void 0===t?void 0:t.icon,children:[74==f?(0,a.jsx)("div",{className:"tb_ss_blur_bg",style:T,children:(0,a.jsx)("div",{})}):76==f?(0,a.jsx)("div",{className:"tb_ss_bg_color","data-network":null===o||void 0===o||null===(e=o.network)||void 0===e?void 0:e.id,style:{},children:(0,a.jsx)("div",{})}):null,(0,a.jsx)("div",{className:"tb_ss_post_article".concat(77==f?" tb_ss_post_article_full":"").concat(1===(null===o||void 0===o?void 0:o.type)?" tb_ss_text_article":"").concat(S?" tb_ss_media_article":""),children:(0,a.jsxs)("div",{className:"tb_ss_post_in",children:[w?(0,a.jsx)("div",{className:"tb_ss_post_media_wrapp ".concat(x?" tb_ss_post_animated_media":""),children:(0,a.jsx)(h,{itemData:{...o,postFileNew:null===o||void 0===o?void 0:o.filename,loopStop:1==(null===n||void 0===n?void 0:n.playFullVideo)},wallID:d,ownerId:r,ThemeRule:s,wall:c,autoPlay:!0,handleVideoEnded:1==(null===n||void 0===n?void 0:n.playFullVideo)?this.updateIndex:{},intervalTime:g})}):"",S?"":(0,a.jsx)("div",{className:"tb_ss_contant_wrapper",ref:this.contentRef,children:(0,a.jsxs)("div",{className:"tb_ss_contant_wrap_in",children:[N?(0,a.jsx)("div",{className:"tb_ss_social_",children:(0,a.jsx)(_.default,{networkClass:"tb_ss_social_ico",network:null===o||void 0===o?void 0:o.network,isDefault:1===(null===s||void 0===s?void 0:s.iconType),ThemeRule:s})}):"",y?(0,a.jsx)("div",{className:"tb_ss_rating_ _",children:(0,a.jsx)(p.Z,{rating:null===o||void 0===o?void 0:o.rating,network:null===o||void 0===o?void 0:o.network})}):"",null!==s&&void 0!==s&&s.hideContent?"":(0,a.jsx)(v.default,{contentClass:"".concat(I," ").concat(j),item:o,content:k,font:null===o||void 0===o?void 0:o.font,maxLines:C,ThemeRule:s,personalization:n,contentTitle:null===o||void 0===o?void 0:o.contentTitle}),(0,a.jsx)(l,{postTime:null===o||void 0===o?void 0:o.createdAt,author:null===o||void 0===o?void 0:o.author,network:null===o||void 0===o?void 0:o.network,font:null===o||void 0===o?void 0:o.font,personalization:n,ThemeRule:s},"img".concat(b,"_").concat(null===o||void 0===o?void 0:o.id))]})})]})})]})}}var b=i(43411),f=i(43635),w=i(11774);i(37210);class x extends o.PureComponent{constructor(t){super(t),this.state={currentIndex:0},this.handleSlideChange=()=>{const{currentIndex:t}=this.state,e=t+1;this.myRef&&this.myRef.current&&(e<this.myRef.current.slides.length?this.myRef.current.splide.go(e):this.myRef.current.splide.go(0))},this.myRef=o.createRef()}componentDidMount(){const{heightUpdate:t}=this.props;setTimeout((()=>t()),1e3)}componentDidUpdate(t,e){return t.postData!==this.props.postData||this.state.currentIndex!=e.currentIndex}render(){var t;const{postData:e,completeDataObject:i,wall:o,languageSetting:n,clickToShowPopUp:s,onClickToCTA:l}=this.props,d=(null===o||void 0===o||null===(t=o.Personalization)||void 0===t?void 0:t.slideDelay)||5,{currentIndex:r}=this.state;return(0,a.jsx)("div",{className:"tb_ss_post_container",children:(0,a.jsx)(w.tv,{hasTrack:!1,className:"tb_ss_slider_wrappper",options:{type:"fade",rewind:!0,speed:1e3,perPage:1,perMove:1,gap:0,autoplay:!1,pauseOnHover:!1,padding:0,pagination:!1,arrows:!1},ref:this.myRef,onActive:(t,e,i)=>this.setState({currentIndex:e.index}),children:(0,a.jsx)(w.Gj,{children:e&&(null===e||void 0===e?void 0:e.length)>0&&e.map(((t,e)=>{var n,s;const c=i[t];return(0,a.jsx)(w.jw,{children:(0,a.jsx)(g,{ownerId:null===o||void 0===o||null===(n=o.Wall)||void 0===n?void 0:n.owner,autoPlay:r==e,itemData:c,itemIndex:e,personalization:null===o||void 0===o?void 0:o.Personalization,ThemeRule:null===o||void 0===o?void 0:o.ThemeRule,wallID:null===o||void 0===o||null===(s=o.Wall)||void 0===s?void 0:s.id,onClickToCTA:l,wall:o,currentIndex:r,handleSlideChange:this.handleSlideChange,intervalTime:d})},e)}))})})})}}const y=(0,b.$j)((t=>({})),(t=>({managePostHeight:e=>t((0,f.B0)(e))})))(x)},61729:(t,e,i)=>{"use strict";var o=i(79165);function n(){}function s(){}s.resetWarningCache=n,t.exports=function(){function t(t,e,i,n,s,a){if(a!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function e(){return t}t.isRequired=t;var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:s,resetWarningCache:n};return i.PropTypes=i,i}},75192:(t,e,i)=>{t.exports=i(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2406:(t,e,i)=>{"use strict";e.Ad=void 0;var o=i(84228);var n=i(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return n.getImageSize}});var s=i(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const o=i(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,n)=>{if("undefined"===typeof window)return n(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return n(o.ErrorMessage.URL_IS_NOT_DEFINED);let s=null;const a=new Image;a.addEventListener("load",(()=>{s&&window.clearTimeout(s),i({width:a.naturalWidth,height:a.naturalHeight})})),a.addEventListener("error",(t=>{s&&window.clearTimeout(s),n("".concat(t.type,": ").concat(t.message))})),a.src=t,e.timeout&&(s=window.setTimeout((()=>n(o.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,i){"use strict";var o=this&&this.__awaiter||function(t,e,i,o){return new(i||(i=Promise))((function(n,s){function a(t){try{d(o.next(t))}catch(e){s(e)}}function l(t){try{d(o.throw(t))}catch(e){s(e)}}function d(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,l)}d((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const n=i(47313),s=i(65786);e.useImageSize=(t,e)=>{const[i,a]=(0,n.useState)(null),[l,d]=(0,n.useState)(!1),[r,c]=(0,n.useState)(null);return(0,n.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){d(!0),a(null);try{const{width:i,height:o}=yield(0,s.getImageSize)(t,e);a({width:i,height:o})}catch(r){c(r.toString())}finally{d(!1)}}))}),[t,e]),[i,{loading:l,error:r}]}},37210:()=>{},50247:()=>{}}]);