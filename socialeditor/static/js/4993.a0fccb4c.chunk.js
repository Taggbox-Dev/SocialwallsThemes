(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4993,5867,4261,8342,9239,5790,5810],{89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(47313),a=s(17739),o=s(98935),c=s(46417);class n extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,c.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,c.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:e=>{var i,a;const o="#ffffff"==s.color?"#000":s.color;e.target.src=t.errorPic?t.errorPic:"https://ui-avatars.com/api/?name=".concat(null===t||void 0===t||null===(i=t.name)||void 0===i?void 0:i.replace(/\s/g,""),"&background=").concat(null===(a=String(null===s.id?"#000":o))||void 0===a?void 0:a.replace("#",""),"&color=fff&length=1"),e.target.alt=t.name}},Math.random()):(0,c.jsx)(o.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var i=s(47313),a=s(46417);const o=t=>{let{username:e,network:s,authorClass:i,errorPic:o}=t;const c="#ffffff"==s.color?"#000":s.color;return(0,a.jsx)("img",{className:"".concat(i,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":c).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},c=(0,i.memo)(o)},7138:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var i=s(47313),a=s(46417);class o extends i.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:i,item:o}=this.props,c=!(!s||1!==s.status);return(0,a.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),i(o),window.open("".concat(c?s.url:t.url),"_blank")},children:[" ",c?s.text:t.text]})}}const c=o},97915:(t,e,s)=>{"use strict";s.d(e,{Z:()=>_});var i=s(47313),a=s(43411),o=s(83773),c=s(6119),n=s(17739),r=s(46417);const l=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,s=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",i=t.product_price>0||t.product_discount>0?"".concat(s,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(i,"\n        </a>")};class h extends i.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,i=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return i.status?(0,r.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,n.i1)();return(0,r.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ ".concat(0==i.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,r.jsx)(l,{children:(0,r.jsx)(c.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const _=(0,a.$j)((t=>({appData:t.appData})))(h)},84261:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>d});var i=s(47313),a=(s(43635),s(97915)),o=s(2406),c=s(17739),n=s(98501),r=s(35179),l=s(46417);class d extends i.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const s=document.querySelector(".track".concat(this.props.data.id));s&&(s.setAttribute("data-height",e),s.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:s}=await(0,o.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t,size:{height:parseInt(s),width:parseInt(t)}})}catch(s){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(s){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100},isVisible:!1},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:s})}componentDidMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:s});try{this.observer=new IntersectionObserver((t=>{let[e]=t;e.isIntersecting&&(this.setState({isVisible:e.isIntersecting}),this.observer.disconnect())}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){const{ImageClass:t,data:e,wallID:s,themeID:i,ownerId:o,hotspot:d}=this.props,{imgUrl:h,paddingBottom:_,size:m,fixedPaddingBottom:u,imgSize:p,noPadding:b,isVisible:v}=this.state,g={paddingBottom:"".concat(this.props.size?1==this.props.size?null:u:_,"%")},x={backgroundImage:"url(".concat(p.small,")")};if(m.width>m.height)var j="100%",w="".concat(m.height/m.width*100,"%");else w="100%",j="".concat(m.width/m.height*100,"%");const f=!!(e.hotspot&&e.ugc_products.length>0&&d),N={width:f&&this.props.size?j:null,height:f&&this.props.size?w:null};return(0,l.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:g,ref:this.videoRef,children:[f?(0,l.jsx)("div",{className:"tb_blur_bg_",style:x}):null,(0,l.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:N,children:[f?(0,l.jsx)(a.Z,{product:e.ugc_products}):null,(0,l.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:v?p.small:e.postFileNew,srcSet:v?r.bX&&b?"".concat(p.large,", 991w ").concat(p.small,", 480w"):null:e.postFileNew,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":i,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(n.do,"/media/images/error/no-image.svg")},alt:(0,c.P)(h)})]})]})}}},64442:(t,e,s)=>{"use strict";s.d(e,{Z:()=>_});var i=s(47313),a=s(2406),o=s(20510),c=s.n(o),n=s(43635),r=s(35179),l=(s(17739),s(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class h extends i.Component{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:s,isCover:i,controls:a,autoPlay:o,handleVideoEnded:h,muted:_,themeID:m,intervalTime:u}=this.props,{paddingBottom:p,videoLoaded:b,isVisible:v}=this.state,g={small:e.postFileNew,large:e.filename,orignal:e.file},x=[74,76,77].includes(m),j={paddingBottom:"".concat(x&&r.bX?null:p,"%")},w=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl,f=new URLSearchParams(window.location.search),N=f.has("editor")&&"1"===f.get("editor")&&f.has("personalize")&&"1"===f.get("personalize")&&f.has("preview")&&"1"===f.get("preview"),k=f.has("embed")&&"true"===f.get("embed");return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:j,ref:this.videoRef,children:(0,l.jsx)(c(),{className:"".concat(t," video").concat(e.id),url:d(w,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:e.postFileNew}},file:{attributes:{preload:"metadata",poster:e.postFileNew}}},loop:!(r.bX&&!r.aL&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{!k||e.stories&&0!=e.stories||(0,n.ib)(t,e.id),x&&h&&setTimeout((()=>{h()}),1e3*u)},autoPlay:!r.bX||N&&!k||null==e.mediaClip?!(r.bX&&N&&!k&&(null==e.mediaClip||""==e.mediaClip))&&o:v,muted:_,volume:o?1:0,playsinline:!0,onReady:t=>{r.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:r.ig||r.bX&&(!N||k)?v:!(r.bX&&N&&!k)&&o,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(x?g.large:g.small,")"),backgroundSize:i?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}const _=(0,i.memo)(h)},81349:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});s(47313);var i=s(35179),a=s(95867),o=s(46417);const c=t=>{const{itemData:e,IconClass:s,isCenter:c,hideVideo:n,show:r}=t,l=3===e.type||5===e.type,d=7===e.network.id,h=!!(e.imageList&&e.imageList.length>0),_=1===e.isAudio,m=!!(e.ugc_products&&e.ugc_products.length>0),u=(0,o.jsx)(a.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),p=(0,o.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,o.jsx)("div",{})}),b=(0,o.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,o.jsx)("div",{})}),v=(0,o.jsx)("div",{className:"tb__icon tb-".concat(i.bX?"reel-fill tb_reel_ico":"video tb_video_ico"),children:(0,o.jsx)("div",{})}),g=(0,o.jsx)("div",{className:"tb_play_ico tb__icon tb-play",children:(0,o.jsx)("div",{})}),x=(0,o.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,o.jsx)("div",{})}),j=(0,o.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,o.jsx)("div",{})});return r?(0,o.jsxs)(o.Fragment,{children:[c&&(d||l)?(0,o.jsxs)("div",{className:"".concat(s," tb__media_ico_c"),children:[l&&!d?j:"",l&&d?u:""]}):null,m||h||l?(0,o.jsxs)("div",{className:"".concat(s," tb__media_ico_"),children:[m?x:"",h?p:"",c||!l||d||n?"":_?b:i.ZQ?g:v]}):null]}):null}},95867:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(47313),a=s(35179),o=s(46417);const c=i.memo((t=>{let{network:e,networkClass:s}=t;const i="".concat(s," tb__icon tb_ico_default");switch(e.id){case 1:return(0,o.jsx)("div",{className:"".concat(i," tb-twitter")});case 2:case 18:return(0,o.jsx)("div",{className:"".concat(i," tb-instagram-default"),children:(0,o.jsx)("div",{})});case 3:return(0,o.jsx)("div",{className:"".concat(i," tb-facebook"),children:(0,o.jsx)("div",{})});case 4:return(0,o.jsxs)("div",{className:"".concat(i," tb-google-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});case 5:return(0,o.jsx)("div",{className:"".concat(i," tb-pinterest"),children:(0,o.jsx)("div",{})});case 6:return(0,o.jsxs)("div",{className:"".concat(i," tb-flickr-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 7:return(0,o.jsxs)("div",{className:"".concat(i," tb-youtube-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 8:return(0,o.jsx)("div",{className:"".concat(i," tb-vimeo"),children:(0,o.jsx)("div",{})});case 10:return(0,o.jsx)("div",{className:"".concat(i," tb-linkedin"),children:(0,o.jsx)("div",{})});case 11:return(0,o.jsx)("div",{className:"".concat(i," tb-tumblr"),children:(0,o.jsx)("div",{})});case 12:return(0,o.jsx)("div",{className:"".concat(i," tb-rss"),children:(0,o.jsx)("div",{})});case 15:return(0,o.jsx)("div",{className:"".concat(i," tb-workplace"),children:(0,o.jsx)("div",{})});case 19:return(0,o.jsx)("div",{className:"".concat(i," tb-yelp"),children:(0,o.jsx)("div",{})});case 20:return(0,o.jsxs)("div",{className:"".concat(i," tb-slack-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,o.jsx)("div",{})})]});case 21:return(0,o.jsx)("div",{className:"".concat(i," tb-yammer"),children:(0,o.jsx)("div",{})});case 23:return(0,o.jsx)("div",{className:"".concat(i," tb-airbnb"),children:(0,o.jsx)("div",{})});case 25:return(0,o.jsx)("div",{className:"".concat(i," tb-soundcloud"),children:(0,o.jsx)("div",{})});case 26:return(0,o.jsxs)("div",{className:"".concat(i," tb-giphy-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 28:return a.ZQ?(0,o.jsxs)("div",{className:"".concat(i," tb-capterra-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,o.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 29:return a.ZQ?(0,o.jsx)("div",{className:"".concat(i," tb-etsy"),children:(0,o.jsx)("div",{})}):(0,o.jsx)("div",{className:"".concat(i," tb-onsite-upload"),children:(0,o.jsx)("div",{})});case 30:case 32:return(0,o.jsx)("div",{className:"".concat(i," tb-vk"),children:(0,o.jsx)("div",{})});case 31:return(0,o.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 33:return(0,o.jsxs)("div",{className:"".concat(i," tb-trustpilot-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 34:return(0,o.jsxs)("div",{className:"".concat(i," tb-amazon-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 35:return(0,o.jsx)("div",{className:"".concat(i," tb-tripadvisor"),children:(0,o.jsx)("div",{})});case 36:return(0,o.jsxs)("div",{className:"".concat(i," tb-tagembed-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})})]});case 37:return(0,o.jsxs)("div",{className:"".concat(i," tb-aliexpress-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});default:return""}}));class n extends i.PureComponent{render(){return(0,o.jsx)(c,{...this.props})}}},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(47313),a=s(35179),o=s(46417);const c=i.lazy((()=>s.e(5867).then(s.bind(s,95867))));class n extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:n,Personalization:r}=this.props,l=!!n&&(7!==(null===t||void 0===t?void 0:t.id)&&4!==(null===t||void 0===t?void 0:t.id)&&36!==(null===t||void 0===t?void 0:t.id)),d=a.ZQ&&36===(null===t||void 0===t?void 0:t.id)?"tagembed":(null===t||void 0===t?void 0:t.icon)||"";return l?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(i.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(c,{network:t,networkClass:e})]})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var i=s(47313),a=s(16390),o=s(17739),c=s(35179),n=s(30584),r=s(46417);class l extends i.PureComponent{constructor(t){super(t),this.contentRef=i.createRef()}componentDidMount(){c.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){var t,e;const{contentClass:s,content:i,ThemeRule:l,font:d,personalization:h,item:_,contentTitle:m,readMore:u,maxLength:p,textAlign:b,maxLines:v,isReadMore:g}=this.props,x={WebkitLineClamp:v,textAlign:l.textAlignment};let j=20==(null===_||void 0===_||null===(t=_.network)||void 0===t?void 0:t.id)||c.bX&&!c.aL?i:(0,o.Fx)(i);12==(null===_||void 0===_||null===(e=_.network)||void 0===e?void 0:e.id)&&(j=(0,a.ZP)(j));const w="".concat(l.lineTrim?" tb_content_line-".concat(l.lineTrim):""),f="".concat(s," ").concat(g?"":w);return(0,r.jsxs)("div",{className:f,ref:this.contentRef,style:x,children:[m?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(m)}):null,(0,r.jsx)(n.Z,{data:_,content:j,Personalization:h,ThemeRule:l})]})}}},30584:(t,e,s)=>{"use strict";s.d(e,{Z:()=>d});var i=s(47313),a=s(91523),o=s(16390),c=s(46417);const n=s(77560),r=(t,e)=>(0,c.jsx)(a.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,o.ZP)(t)}),l=t=>{var e;let{data:s,content:i,Personalization:a,ThemeRule:l}=t;const d={color:a.hashtag_color,fontWeight:"bold",backgroundColor:1==a.hashtag_background_status?a.hashtag_background_color:"transparent"};return 20==(null===s||void 0===s||null===(e=s.network)||void 0===e?void 0:e.id)&&window.slackdown?(0,c.jsx)(c.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,o.ZP)(i):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?r(window.slackdown.parse(n(i,/#(\w+)/g,((t,e)=>(0,c.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]}))),s.slackMember),l):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?r(window.slackdown.parse(n(i,s.hash.hashString,((t,e)=>(0,c.jsx)("div",{className:"tb_text_hashtag",style:d,children:t}))),s.slackMember),l):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?r(window.slackdown.parse(n(i,/#(\w+)/g,((t,e)=>(0,c.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]},"".concat(s.id,"_").concat(e)))),s.slackMember),l):r(window.slackdown.parse(i,s.slackMember),l)}):(0,c.jsx)(c.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,o.ZP)(i):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?n((0,o.ZP)(i),/#(\w+)/g,((t,e)=>(0,c.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?n((0,o.ZP)(i),s.hash.hashString,((t,e)=>(0,c.jsx)("strong",{className:"tb_text_hashtag",style:d,children:t}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?n((0,o.ZP)(i),/#(\w+)/g,((t,e)=>(0,c.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]},"".concat(s.id,"_").concat(e)))):r(i,l)})},d=(0,i.memo)(l)},90905:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var i=s(47313),a=s(35179),o=s(46417);const c=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:i,color:c}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:i,style:{color:c},"tb-network":e.id,children:(0,o.jsx)("div",{})})},n=t=>{let{ThemeID:e}=t;const{className:s,color:i}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:i},"tb-network":e})};class r extends i.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,i)=>s?(0,o.jsx)(n,{ThemeID:s},i):(0,o.jsx)(c,{network:e},i))):null})}}},5744:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var i=s(47313),a=s(43635),o=s(35179),c=s(46417);class n extends i.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:s,wallID:i,ownerId:c}=this.props;e.stopPropagation(),o.ZQ||(0,a.S5)({type:2,action:2,wall:i,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:c}),(0,a.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,c.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,c.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(o.ZQ?"tb-share-fill":"tb-share"),children:(0,c.jsx)("div",{})}),(0,c.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,c.jsx)("div",{})})}):"",t.twitter?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,c.jsx)("div",{})})}):"",t.linkedin?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,c.jsx)("div",{})})}):""]})]})}}},32675:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});var i=s(47313),a=(s(35179),s(17739)),o=s(46417);const c=(t,e,s)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,a.ok)(e)):s,n=(t,e,s)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,a.ok)(e)):s,r=t=>{let{arialbl:e,hrefClick:s,Icon:i,count:c}=t;return(0,o.jsx)("div",{className:"tb_social_action__list",children:(0,o.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(s,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,o.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(i),children:" "}),c>0?(0,o.jsx)("div",{className:"tb_social_action_counts__",children:(0,a.sy)(c)}):""]})})};class l extends i.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:s,ThemeID:i}=this.props,l={color:3===i?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,h=3===d||10===d||7===d?"like":"heart",_=!![1,2,3,7,8,9,10,18].includes(d),m=![29,19].includes(d),u=t.network.name?t.network.name:"";return(0,o.jsx)(o.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,o.jsx)("div",{className:s,children:(0,o.jsxs)("div",{className:"tb_social_action__",children:[_?(0,o.jsx)(r,{arialbl:u,hrefClick:c(d,t.postId,t.link),Icon:h,iconColorStyle:l,count:t.like_count}):null,m?(0,o.jsx)(r,{arialbl:u,hrefClick:n(d,t.postId,t.link),Icon:"comment",iconColorStyle:l,count:t.comment_count}):null,1===d?(0,o.jsx)(r,{arialbl:u,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,a.ok)(t.postId)),Icon:"retweet",iconColorStyle:l,count:t.comment_count}):null,(0,o.jsx)(r,{arialbl:u,hrefClick:t.link,Icon:"eye",iconColorStyle:l,count:0})]})}):""})}}},55790:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(47313),a=s(17739),o=s(46417);const c=t=>{const{postTime:e,timeClass:s}=t;return(0,o.jsx)("div",{className:s,children:(0,a.Sy)(e)})},n=(0,i.memo)(c)},18017:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>T});var i=s(47313),a=s(61395),o=s.n(a),c=s(17739),n=s(35179),r=s(89239),l=s(55790),d=s(25810),h=s(46417);const _=t=>{let{author:e,personalization:s,postTime:i,network:a,ThemeRule:o,font:c,mediaType:_,ownerId:m}=t;const u=!(!s.postAuthor||e.isInstaUser),p=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,h.jsxs)("div",{className:"tb_mc_author_wrapper",children:[(0,h.jsxs)("div",{className:"tb_mc_author",children:[u?(0,h.jsx)(r.default,{network:a,author:e,authorClass:"tb_mc_author_profile"},e.username):"",(0,h.jsxs)("div",{className:"tb_mc_author_info",children:[u?(0,h.jsx)("div",{className:"tb_mc_authorname",children:e.name}):"",(0,h.jsxs)("div",{className:"tb_mc_post_info",children:[u?(0,h.jsx)("div",{className:"tb_mc_username",children:e.username&&e.username.length>0?"@".concat(e.username):""}):"",p?(0,h.jsx)("div",{className:"tb_mc_seprator",children:" "}):"",s.postTime?(0,h.jsx)(l.default,{postTime:i,timeClass:"tb_mc_time tb-cTBfont-".concat(o.font_varient)}):""]})]})]}),_&&a.id||n.ZQ?(0,h.jsx)("div",{className:"tb_mc_social_",children:(0,h.jsx)(d.default,{networkClass:"tb_mc_social_ico",network:a,isDefault:1===o.iconType,ThemeRule:o})}):null]})};var m=s(81349),u=s(84261),p=s(64442);const b=t=>{let{itemData:e,wallID:s,ownerId:i,wall:a}=t;const o=3===e.type||5===e.type,c=!(!n.ZQ||!o||a.Personalization.mobilePopup||a.Personalization.postFeatured),r=!(!o||28===e.network.id||1!=a.ThemeRule.autoPlay),l=!!n.ZQ&&(!!a.ThemeRule.aspectImageRatio&&a.ThemeRule.aspectImageRatio);return(0,h.jsxs)("div",{className:"tb_mc_media_wrap",children:[c?null:(0,h.jsx)(m.Z,{itemData:e,IconClass:"tb_mc_media_icon",show:!0,isCenter:n.ZQ}),r||c?(0,h.jsx)(p.Z,{VideoClass:"tb_mc_video",data:e,wallID:s,themeID:a.Personalization.widgetTheme,ownerId:i,size:l,isCover:!0,controls:!0,autoPlay:!1,muted:!0}):(0,h.jsx)(u.default,{ImageClass:"tb_mc_image",data:e,wallID:s,themeID:a.Personalization.widgetTheme,ownerId:i,size:l,ThemeRule:a.ThemeRule})]})};var v=s(62245),g=s(5744),x=s(7138),j=s(90905),w=s(32675);const f=n.ZQ?null:200;class N extends i.PureComponent{constructor(t){super(t),this.postTrack=i.createRef()}componentDidMount(){n.nX&&(0,c.YN)(this.postTrack)}render(){const{itemData:t,personalization:e,adjustWidth:s,ThemeRule:i,clickToShowPopUp:a,itemIndex:o,wallID:r,ownerId:l,onClickToCTA:m,wall:u}=this.props,p=!(n.ZQ&&(0,c.mD)(52)||1===t.type),N=t.rating>0,k=t.rating>0?"tb_mc_rating_content":"tb_mc_content",y=1===t.type&&t.content&&String(t.content).length>0&&e.textDecorate?"tb_mc_text_decoration tb_mc_text_post":"",C=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status),I=e.trimcontent?(0,c.Sv)(t.content,f):t.content;return(0,h.jsx)("div",{className:"tb_mc_post_wrapper",ref:this.postTrack,"data-id":t.id,style:{width:"".concat(s,"%"),padding:e.padding/2},"tb-network":t.network.icon,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,"tab-index":0,"area-label":I,role:"article",children:(0,h.jsx)("div",{className:"tb_mc_post_wrap_in ".concat(n.ZQ&&(0,c.mD)(52)?"te_mc_post_wrap_in":""),children:(0,h.jsxs)("div",{className:"tb_mc_post_in",onClick:a(o,t),children:[n.ZQ&&(0,c.mD)(20)?(0,h.jsx)("div",{className:"tb_mc_author_container",children:(0,h.jsx)(_,{ownerId:l,mediaType:p,postTime:t.createdAt,author:t.author,network:t.network,font:i,personalization:e,ThemeRule:i})}):null,(0,h.jsxs)("div",{className:"tb_mc_post_media_wrapp",children:[t.share.status?(0,h.jsx)(g.Z,{share:t.share,shareClass:"tb_mc_share_container",item:t,wallID:r,ownerId:l}):null,p?(0,h.jsx)(b,{itemData:t,wallID:r,ownerId:l,ThemeRule:i,wall:u}):null]}),(0,h.jsxs)("div",{className:"tb_mc_contant_wrapper",children:[n.ZQ||p||!(0,c.mD)(20)?null:(0,h.jsxs)("div",{className:"tb_mc_social_top_",children:[" ",(0,h.jsx)(d.default,{networkClass:"tb_mc_social_center_ico",network:t.network,isDefault:1===i.iconType,ThemeRule:i})," "]}),(0,h.jsxs)("div",{className:"tb_mc_content_wrap ".concat((0,c.mD)(52)?"tb_mc_content_wrap_fixed":""),children:[N?(0,h.jsxs)("div",{className:"tb_mc_rating__ ".concat(29===t.network.id?"tb_mc_onsite_rating__":""),children:[(0,h.jsx)(j.Z,{rating:t.rating,network:t.network})," "]}):null,C&&!n.ZQ?(0,h.jsxs)("div",{className:"tb_mc_post_cta",children:[(0,h.jsx)(x.Z,{ctaClass:"tb_mc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:m})," "]}):null,!(t.content&&String(t.content).length>0)||i.hideContent&&p?null:(0,h.jsx)(v.default,{item:t,contentClass:"".concat(k," ").concat(y),content:I,font:i,ThemeRule:i,personalization:e,contentTitle:t.contentTitle})]}),C&&n.ZQ?(0,h.jsxs)("div",{className:"tb_mc_post_cta",children:[(0,h.jsx)(x.Z,{ctaClass:"tb_mc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:m})," "]}):null,!n.ZQ||(0,c.mD)(52)?(0,h.jsx)(_,{ownerId:l,mediaType:p,postTime:t.createdAt,author:t.author,network:t.network,font:i,personalization:e,ThemeRule:i}):null]}),i.socialAction&&!(0,c.mD)(52)?(0,h.jsx)(w.Z,{itemData:t,ThemeRule:i,ThemeID:e.widgetTheme,actionClass:"tb_mc_social_action__"}):null]})})})}}const k=N;var y=s(43411),C=s(43635);class I extends i.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>this.editorHeight(),this.editorHeight=()=>{var t=document.querySelector(".tb_mc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentWillMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:s,wall:i,clickToShowPopUp:a,onClickToCTA:c}=this.props,{loadData:n}=this.state;return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(o(),{className:"tb_mc_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_mc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:n?t&&t.length>0&&t.map(((t,o)=>{const n=e[t];return(0,h.jsx)(k,{ownerId:i.Wall.owner,itemData:n,itemIndex:o,adjustWidth:s,personalization:i.Personalization,ThemeRule:i.ThemeRule,clickToShowPopUp:a,wallID:i.Wall.id,onClickToCTA:c,wall:i},"modern_card".concat(n.id))})):null})})}}const T=(0,y.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,C.B0)(e))})))(I)},2406:(t,e,s)=>{"use strict";e.Ad=void 0;var i=s(84228);var a=s(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var o=s(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const i=s(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,a)=>{if("undefined"===typeof window)return a(i.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(i.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const c=new Image;c.addEventListener("load",(()=>{o&&window.clearTimeout(o),s({width:c.naturalWidth,height:c.naturalHeight})})),c.addEventListener("error",(t=>{o&&window.clearTimeout(o),a("".concat(t.type,": ").concat(t.message))})),c.src=t,e.timeout&&(o=window.setTimeout((()=>a(i.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,s){"use strict";var i=this&&this.__awaiter||function(t,e,s,i){return new(s||(s=Promise))((function(a,o){function c(t){try{r(i.next(t))}catch(e){o(e)}}function n(t){try{r(i.throw(t))}catch(e){o(e)}}function r(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(c,n)}r((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=s(47313),o=s(65786);e.useImageSize=(t,e)=>{const[s,c]=(0,a.useState)(null),[n,r]=(0,a.useState)(!1),[l,d]=(0,a.useState)(null);return(0,a.useEffect)((()=>{i(void 0,void 0,void 0,(function*(){r(!0),c(null);try{const{width:s,height:i}=yield(0,o.getImageSize)(t,e);c({width:s,height:i})}catch(l){d(l.toString())}finally{r(!1)}}))}),[t,e]),[s,{loading:n,error:l}]}},50247:()=>{}}]);