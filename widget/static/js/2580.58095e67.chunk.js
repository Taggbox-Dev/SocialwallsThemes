(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2580,9239,5790,5810],{89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var i=a(47313),s=a(17739),n=a(98935),o=a(46417);class l extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:a,network:i}=this.props;return(0,o.jsx)("div",{className:a,children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(a,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,s.P)(e.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,o.jsx)(n.Z,{authorClass:a,username:e.name,network:i,color:null===i.id?"#000":i.color})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});a(47313);var i=a(46417);const s=t=>{let{username:e,network:a}=t;return(0,i.jsx)("img",{className:"tb_nc_author_profile__",src:"https://ui-avatars.com/api/?name=".concat(function(t){if(t){var e=t.match(/[A-Za-z]/);return e?e[0]:""}return""}(e),"&background=000&color=fff&length=1"),alt:e,width:44,height:44})}},98255:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var i=a(47313),s=a(89239),n=a(55790),o=a(25810),l=a(46417);class r extends i.PureComponent{render(){var t,e,a;const{ThemeRule:i,postData:r}=this.props,c=null!==(t=null===r||void 0===r?void 0:r.createdAt)&&void 0!==t?t:"",d=null!==(e=null===r||void 0===r?void 0:r.author)&&void 0!==e?e:"",h=null!==(a=null===r||void 0===r?void 0:r.network)&&void 0!==a?a:"",p={color:i.authorColor,fontFamily:i.authorFont,fontStyle:i.authorFontVariant},u={backgroundColor:i.authorColor},m=!(!r||!i.postAuthor||d.isInstaUser),g=!(!i.postAuthor||!i.postTime);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"tb_mwf_author_wrapper",children:[m||i.postTime?(0,l.jsxs)("div",{className:"tb_mwf_author",children:[m?(0,l.jsx)(s.default,{network:h,author:d,authorClass:"tb_mwf_author_profile"},d.username):"",(0,l.jsxs)("div",{className:"tb_mwf_author_info",children:[m?(0,l.jsx)("div",{className:"tb_mwf_authorname tb-cTBfont-".concat(i.authorFontVariant?i.authorFontVariant:null),style:p,children:(0,l.jsx)("strong",{children:d.name})}):"",(0,l.jsxs)("div",{className:"tb_mwf_post_info",children:[m&&![74,76,77].includes(i.themeId)?(0,l.jsx)("div",{className:"tb_mwf_username tb-cTBfont-".concat(i.authorFontVariant),style:p,children:d.username}):"",g&&m?(0,l.jsx)("div",{className:"tb_mwf_seprator",style:u,children:" "}):"",i.postTime?(0,l.jsx)(n.default,{postTime:c,timeClass:"tb_mwf_time",authorNameStyle:p}):""]})]})]}):null,h.id&&i.socialAction?(0,l.jsx)("div",{className:"tb_mwf_social_",style:{borderBottom:78==i.themeId?"60px solid ".concat(1==i.iconType?i.iconColor:h.color):"inherit"},children:(0,l.jsx)(o.default,{networkClass:"tb_mwf_social_ico",network:h,ThemeRule:i})}):null]})," "]})}}},7138:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});var i=a(47313),s=a(46417);class n extends i.PureComponent{render(){const{cta:t,ctaClass:e,postCta:a,onClickToCTA:i,item:n}=this.props,o=!(!a||1!==a.status),l={color:o?a.color:t.color,backgroundColor:o?a.background:t.background};return(0,s.jsxs)("div",{className:e,style:l,onClick:e=>{e.stopPropagation(),i(n),window.open("".concat(o?a.url:t.url),"_blank")},children:[" ",o?a.text:t.text]})}}const o=n},32929:(t,e,a)=>{"use strict";a.d(e,{Z:()=>p});var i=a(47313),s=a(64516),n=a(71843),o=a.n(n),l=function(){return l=Object.assign||function(t){for(var e,a=1,i=arguments.length;a<i;a++)for(var s in e=arguments[a])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},l.apply(this,arguments)};const r=function(t){for(var e=t.url,a=t.allowFullScreen,s=t.position,n=t.display,r=t.height,c=t.width,d=t.overflow,h=t.styles,p=t.onLoad,u=t.onMouseOver,m=t.onMouseOut,g=t.scrolling,_=t.id,w=t.frameBorder,b=t.ariaHidden,f=t.sandbox,y=t.allow,v=t.className,x=t.title,k=t.ariaLabel,j=t.ariaLabelledby,D=t.name,C=t.target,N=t.loading,T=t.importance,S=t.referrerpolicy,I=t.allowpaymentrequest,P=t.src,R=o()({src:P||e,target:C||null,style:{position:s||null,display:n||"block",overflow:d||null},scrolling:g||null,allowpaymentrequest:I||null,importance:T||null,sandbox:f||null,loading:N||null,styles:h||null,name:D||null,className:v||null,referrerpolicy:S||null,title:x||null,allow:y||null,id:_||null,"aria-labelledby":j||null,"aria-hidden":b||null,"aria-label":k||null,width:c||null,height:r||null,onLoad:p||null,onMouseOver:u||null,onMouseOut:m||null}),F=Object.create(null),z=0,M=Object.keys(R);z<M.length;z++){var A=M[z];null!=R[A]&&(F[A]=R[A])}for(var U=0,H=Object.keys(F.style);U<H.length;U++){var O=H[U];null==F.style[O]&&delete F.style[O]}if(a)if("allow"in F){var W=F.allow.replace("fullscreen","");F.allow=("fullscreen "+W.trim()).trim()}else F.allow="fullscreen";return w>=0&&(F.style.hasOwnProperty("border")||(F.style.border=w)),i.createElement("iframe",l({},F))};var c=a(20510),d=a(46417);class h extends i.PureComponent{constructor(t){super(t),this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.handleDuration=t=>{const{getVideoDuration:e,wall:a}=this.props;([74,76,77].includes(a.ThemeRule.themeId)&&1===a.Personalization.playFullVideo||t<a.Personalization.slideDelay)&&e(t)},this.state={imgUrl:t.itemData.postFileNew,videoLoaded:!1},this.myRef=i.createRef()}componentDidMount(){const{itemData:t,getVideoDuration:e,wall:a}=this.props,i=document.getElementById("".concat(t.id,"-media-player"));i&&[74,76,77].includes(a.ThemeRule.themeId)&&i.addEventListener("loadedmetadata",(()=>{e(i.duration<a.Personalization.slideDelay||1===a.Personalization.playFullVideo?i.duration:a.Personalization.slideDelay)})),i&&(i.controls=!1,i.autoplay=!0,i.setAttribute("webkit-playsinline","webkit-playsinline"),i.setAttribute("playsinline","playsinline"),i.setAttribute("muted",""),i.preload="auto")}render(){const{itemData:t,wall:e,autoplayVideo:a=!0}=this.props,{id:i}=e.Wall,{imgUrl:n,videoLoaded:o}=this.state,{type:l,network:h,imageList:p,link:u,filterId:m,mediaUrl:g,stories:_,postFileNew:w,networkId:b,mediaClip:f}=t,y=t.id,v=e.isDisplay,x=3===l||5===l,k=2===l||4===l,j=!!(t.mediaClip&&"undefined"!=t.mediaClip&&String(t.mediaClip).length>0),D=!(v||!x||!e.ThemeRule.autoPlay||!j),C=7===h.id,N=!!(p&&p.length>0),T=N&&x?"tb_fc_multi_images_ico_bottom":"tb_fc_multi_images_ico";t.mediaUrl=(v||D)&&j?t.mediaClip:t.mediaUrl;const S=v?a:D,I=!v&&(!!(e.User&&Object.keys(e.User).length>0)&&143031==e.User.id);return(0,d.jsxs)("div",{className:"tb_fc_media_wrap mediaHolder".concat(y),role:"img","aria-label":"Post Image",style:{height:"100%",background:"#000000"},children:[N&&!v?(0,d.jsx)("div",{className:"".concat(T," tb__icon tb-multiple"),children:" "}):null,x&&!v?C?(0,d.jsx)("div",{className:"tb_fc_youtube_ico tb__icon tb-youtube",children:" "}):(0,d.jsx)("div",{className:"tb_fc_video_ico tb__icon tb-reels",children:" "}):null,k?(0,d.jsx)("img",{loading:"lazy",src:n,"data-link":u,"data-load":"0","data-network":h.id,"data-wall-id":i,"data-item-id":y,"data-filter-id":m,onLoad:this.onLoad,draggable:!1,onError:t=>(0,s.ht)(t),style:{height:"100%"},width:"300px",height:"300px"}):u&&b&&30==b&&u.indexOf("vk")>=0?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(r,{className:"tb-detail-image-iframe",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",src:"".concat(g,"&autoplay=1&mute=1"),allowFullScreen:"true",style:{width:"100%!important"},"data-filter-id":m,"data-stories":_,"data-type":"video","data-network":b,"data-link":u,"data-item-id":y,"data-load":0,draggable:!1,height:"1000",width:"1000"})}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("img",{loading:"lazy",src:w,"data-load":"0","data-network":h.id,"data-wall-id":i,"data-item-id":y,"data-filter-id":m,onLoad:this.onLoad,draggable:!1,onError:t=>{(0,s.ht)(t)},style:{width:"100%",height:"100%"},width:"300px",height:"300px"}),(0,d.jsx)("div",{className:"card_video__01",style:{display:o?"none":"block",opacity:o?0:1,width:"100%",height:"100%"},children:3!=b?(0,d.jsx)("video",{poster:w,id:"".concat(t.id,"-media-player"),ref:this.myRef,src:a?"".concat(t.mediaUrl):null,autoPlay:S,"webkit-playsinline":S,playsinline:S,muted:!0,loop:1,onError:t=>{this.setState({videoLoaded:!0})},"data-type":"video","data-network":b,"data-filter-id":m,"data-link":u,"data-load":0,"data-tb":e.UserDetail.db_table,"data-wall-id":e.Wall.id,"data-item-id":y,"data-owner-id":e.Wall.owner,height:"400",width:"400",controls:I},"".concat(this.props.keyRender,"-media-player")):(0,d.jsx)(c.Z,{poster:w,onDuration:this.handleDuration,style:{display:"contents",width:"".concat(4.8,"vw"),height:"".concat(.3*9,"vw")},className:"tb_post_vid_005",url:"".concat(f&&"undefined"!=f&&String(f).length>0?f:g),playing:!!v,loop:!0,playsinline:!0,config:{file:{attributes:{playsInline:!0}}},muted:!0,controls:I,onReady:t=>v?this.setState({videoLoaded:!1}):null},"".concat(this.props.keyRender,"-media-player"))})]})]},"".concat(t.mediaUrl,"--").concat(y))}}const p=(0,i.memo)(h)},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var i=a(47313),s=a(46417);const n=i.lazy((()=>a.e(5867).then(a.bind(a,95867))));class o extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a}=this.props;return 1===a.iconType&&(7!==t.id&&4!==t.id)?(0,s.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:a.iconColor},children:(0,s.jsx)("div",{})}):(0,s.jsxs)(i.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:[" ",(0,s.jsx)(n,{network:t,ThemeRule:a,networkClass:e})]})}}},24816:(t,e,a)=>{"use strict";a.d(e,{d:()=>o});var i=a(47313),s=a(17739),n=a(46417);function o(t){return class extends i.Component{constructor(t){super(t),this.cardRef=i.createRef(null),this.startLoadingVideo=t=>{const{itemData:e,wall:a}=this.props;if(a&&a.ThemeRule&&Object.keys(a.ThemeRule).length>0&&3==e.type||5==e.type){const e=a.ThemeRule.themeId,n=window.navigator.userAgent;console.log(n,"---device---");const o=!(0,s.eN)();try{if(o&&window.innerWidth>920&&e&&[62,63,64,65,66,69,70,73].includes(parseInt(e))&&"iPhone"!=n){let e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.setState({autoplay:!0}):this.setState({autoplay:!1})}))}),{rootMargin:"50px",threshold:1});t.current&&e.observe(t.current)}else this.setState({autoplay:!0})}catch(i){this.setState({autoplay:!0})}}},this.state={autoplay:!1}}componentDidMount(){this.startLoadingVideo(this.cardRef)}render(){return(0,n.jsx)(t,{...this.state,...this.props,cardRef:this.cardRef})}}}},30584:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var i=a(47313),s=a(91523),n=a(16390),o=a(46417);const l=a(77560),r=t=>(0,o.jsx)(s.default,{children:(0,n.ZP)(t)}),c=t=>{let{data:e,content:a,Personalization:i}=t;const s={color:i.hashtag_color,fontWeight:"bold",backgroundColor:1==i.hashtag_background_status?i.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,o.jsx)(o.Fragment,{children:1===i.hashtag_highlight&&0===i.hashtag_feed&&0===i.hashtag_all?(0,n.ZP)(a):1===i.hashtag_highlight&&0===i.hashtag_feed&&1===i.hashtag_all?r(window.slackdown.parse(l(a,/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:s,children:["#",t]}))),e.slackMember)):1===i.hashtag_highlight&&1===i.hashtag_feed&&0===i.hashtag_all?r(window.slackdown.parse(l(a,e.hash.hashString,((t,e)=>(0,o.jsx)("strong",{className:"tb_text_hashtag",style:s,children:t}))),e.slackMember)):1===i.hashtag_highlight&&1===i.hashtag_feed&&1===i.hashtag_all?r(window.slackdown.parse(l(a,/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:s,children:["#",t]},e))),e.slackMember)):r(window.slackdown.parse(a,e.slackMember))}):(0,o.jsx)(o.Fragment,{children:1===i.hashtag_highlight&&0===i.hashtag_feed&&0===i.hashtag_all?(0,n.ZP)(a):1===i.hashtag_highlight&&0===i.hashtag_feed&&1===i.hashtag_all?l((0,n.ZP)(a),/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:s,children:["#",t]}))):1===i.hashtag_highlight&&1===i.hashtag_feed&&0===i.hashtag_all?l((0,n.ZP)(a),e.hash.hashString,((t,e)=>(0,o.jsx)("strong",{className:"tb_text_hashtag",style:s,children:t}))):1===i.hashtag_highlight&&1===i.hashtag_feed&&1===i.hashtag_all?l((0,n.ZP)(a),/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:s,children:["#",t]},e))):r(a)})},d=(0,i.memo)(c)},33305:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var i=a(47313),s=a(16390),n=a(17739),o=a(30584),l=a(46417);class r extends i.PureComponent{constructor(t){super(t),this.updateText=()=>{const{ThemeRule:t}=this.props;[74,76,77].includes(t.themeId)&&((0,n.OX)(t.trimcontent),setTimeout((()=>this.setState({loadContent:!0})),100))},this.state={loadContent:![74,76,77].includes(t.ThemeRule.themeId)}}render(){const{ThemeRule:t,personalization:e,item:a,contentTitle:i,largeBlock:r,wall:c}=this.props,{loadContent:d}=this.state,h=t.font_varient?t.font_varient.split("-"):{},p=h.length>1?h[1]:"",u=3==t.captionFontWeight?"bold":2==t.captionFontWeight?"600":1==t.captionFontWeight?"100":h.length>0?h[0].includes("regular")?"normal":h[0]:"",m=t.css_font?t.css_font:"",g="".concat(t.fontSize&&![74,76,77,68].includes(t.themeId)?"".concat(t.fontSize,"px"):"inherit"),_={color:t.fontColor,fontWeight:u,fontFamily:m,fontStyle:p},w={font:68!=t.themeId?"".concat(p):"",WebkitLineClamp:t.trimcontent?r?10:78==t.themeId?6:3:"",display:t.trimcontent?"-webkit-box":"block",fontSize:g},b=c.isDisplay||20==a.network.id?a.content:(0,n.Fx)(a.content);return(0,l.jsx)("div",{id:"tb-ss-post--card".concat(a.id),className:"post-card-outer tb-cTBfont- ".concat(t.font_varient),"aria-label":"Post Content",style:_,children:(0,l.jsx)("div",{className:"resize",style:w,onLoad:this.updateText(),children:d?(0,l.jsxs)(l.Fragment,{children:[i?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,s.ZP)(i)}):null,(0,l.jsx)(o.Z,{data:a,content:b,Personalization:e},a.id),"   "]}):null})})}}},90905:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});var i=a(47313),s=a(46417);const n=t=>{let{network:e}=t;const{className:a,color:i}={3:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#1b74e4"},4:{className:"tb_rating_ico__ tb__icon tb-rating tb-google-rating",color:"#F8B90C"},19:{className:"tb_rating_ico__ tb__icon tb-rating tb-yelp-rating",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-rating tb-airbnb-rating",color:"#ff385c"},29:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#613983"}}[e.id]||{className:"tb_rating_ico__ tb__icon tb-rating",color:"#F8B90C"};return(0,s.jsx)("div",{className:a,style:{color:i},"tb-network":e.id})};class o extends i.PureComponent{render(){const{rating:t,network:e}=this.props;return(0,s.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>(0,s.jsx)(n,{network:e},a))):null})}}},55790:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var i=a(47313),s=a(17739),n=a(46417);const o=t=>{const{postTime:e,timeClass:a,authorNameStyle:o}=t,l=(0,i.useMemo)((()=>(0,s.Sy)(e)),[]);return(0,n.jsx)("div",{className:a,style:o,children:l})},l=(0,i.memo)(o)},56843:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>v});var i=a(47313),s=a(34862),n=a(43411),o=a(98255),l=a(7138),r=a(90905),c=a(17739),d=a(33305),h=a(32929),p=a(80381),u=a(46417);class m extends i.PureComponent{constructor(t){super(t),this.getSwiper=()=>{const t=document.getElementById("swiper-row");setTimeout((()=>{if(t){const e=t.clientHeight,a=20*e/100;this.setState({swiper:e-a})}}),10)},this.state={swiper:0},this.mediaHeight=i.createRef()}componentDidMount(){this.getSwiper(),window.addEventListener("resize",(()=>{this.getSwiper()}))}componentDidUpdate(t,e){this.props.wall.ThemeRule.themeId!=t.wall.ThemeRule.themeId&&this.getSwiper()}render(){var t;const{itemData:e,autoplay:a,cardRef:s,clickToShowPopUp:n,itemIndex:m,wall:g,ownerId:_,onClickToCTA:w,themeHeight:b,row:f,intractiveData:y}=this.props,{ThemeRule:v,Personalization:x}=g,k=g.Personalization.interactive,{themeId:j}=v,{swiper:D}=this.state,C=2===e.type||3===e.type||4===e.type||5===e.type,N=!!(e.rating&&e.rating>0),T={padding:v.padding/2,height:[71].includes(j)&&2==f?"50vh":""},S={backgroundColor:v.cardColor,padding:[67,68].includes(v.themeId)?v.spacing:[73].includes(v.themeId)?0:v.spacing,borderRadius:v.borderRadius},I=70!=v.themeId||e.file||N?null:"calc(100vh - ".concat(b+100,"px)"),P=e.rating>0?"tb_fc_rating_content":"tb_fc_content",R=1===e.type?"tb_fc_text_post":"",F=1===e.type&&x.textDecorate?"tb_fc_text_decoration":"",z=!!(null!==x&&void 0!==x&&x.cta.ctaStatus||null!==e&&void 0!==e&&null!==(t=e.cta)&&void 0!==t&&t.status),M=v.trimcontent?(0,c.Sv)(e.content,140):e.content,A=!(!v.postAuthor||e.author.isInstaUser),U=e.network;return(0,u.jsxs)(u.Fragment,{children:[!v.hideContent||e.postFileNew||N?(0,u.jsx)("div",{"item-id":e.id,id:"tb-hc-post-".concat(e.id),className:"tb_fc_post_wrapper ".concat(e.filename?"":"textPostCard","  ").concat(e.file||N||70!=v.themeId?"":"snapHeight"," ").concat(k?"intractive_on":""),onClick:n(m,e),"aria-label":"Wrapper",style:T,ref:s,children:(0,u.jsxs)("div",{className:"tb_fc_post_in",style:S,"aria-label":"Card Post",children:[C?(0,u.jsx)("div",{className:"tb_fc_post_media_wrapp",role:"img","aria-label":"Media Wrapper",children:(0,u.jsx)(h.Z,{ThemeRule:v,themeHeight:b,itemData:e,wall:g,autoplayVideo:a})}):null,N?(0,u.jsx)("div",{className:"tb_fc_rating__",style:{height:I,aspectRatio:e.file||70!=v.themeId?"auto":"1/1"},children:(0,u.jsx)(r.Z,{rating:e.rating,network:e.network})}):null,v.captionStatus?null:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"tb_fc_contant_wrapper ".concat(R),"aria-label":"Post Content Wrapper",children:[A||v.postTime||U.id&&v.socialAction?(0,u.jsx)(o.Z,{ownerId:_,postTime:e.createdAt,author:e.author,ThemeRule:v,rating:e.rating,postData:e}):null,z?(0,u.jsxs)("div",{className:"tb_fc_post_cta","aria-label":"CTA Wrapper",children:[(0,u.jsx)(l.Z,{ctaClass:"tb_fc_post_cta_btn",cta:x.cta,postCta:e.cta,item:e,onClickToCTA:w})," "]}):"",v.hideContent?null:(0,u.jsx)("div",{className:"tb_fc_content_wrapper__","aria-label":"Content Wrapper",style:{height:70!=v.themeId?I:!D||e.file||N||70!=v.themeId?"auto":D-10},children:(0,u.jsx)(d.Z,{contentClass:"".concat(P," ").concat(F),item:e,content:M,font:v.font,wall:g,ThemeRule:v,personalization:x,contentTitle:e.contentTitle})})]}),!g.isDisplay&&k?(0,i.createElement)(p.Z,{isCard:!0,postId:e.id,intractiveData:y,userDetail:g.UserDetail,wallId:g.Wall,interactiveCount:e.interactiveCount,isDisplay:g.isDisplay,interactive:k,interactiveStatus:g.Personalization.interactiveStatus,key:Math.random()*e.id}):null]})]})}):null," "]})}}var g=a(64516),_=a(83912),w=a(60807),b=a(24816);const f=t=>{const{inputRefs:e,inputName:a,themeId:i,row:s,numberOfCoumn:n,manageItemCount:o,slideDuration:l,mobileColumn:r,secondSildeData:c,trimContent:d,firstSildeData:h,completeDataObject:p,themeHeight:g,wall:f,postSizeInPx:y,clickToShowPopUp:v,onClickToCTA:x,requestData:k,type:j,isDisplay:D,postData:C,intractiveData:N}=t,T=2===j&&71==i&&D&&2==s?[1,2]:[1];return(0,u.jsx)(u.Fragment,{children:T.map(((t,j)=>{const T=0==j?h:c;return(0,u.jsx)(_.tq,{id:0==j&&"swiper-row",ref:t=>e[a]=t,style:{width:"100%"},onScroll:t=>k(t),onSlideChange:t=>k(t),onAutoplay:t=>k(t),navigation:{nextEl:".arrow-right",prevEl:".arrow-left"},speed:D&&71==i?8e3:1e3,loop:!0,grid:{rows:!D&&71==i&&2==s&&C.length>15?2:1},edgeSwipeDetection:!0,slidesPerView:n>0?n:o,allowTouchMove:!D,passiveListeners:!0,autoplay:{delay:71==i?1:l?1e3*l:5e3,disableOnInteraction:!1,reverseDirection:0!=j},breakpoints:{320:{slidesPerView:r>0?r:1,perMove:r>0?r:1},560:{slidesPerView:r>0?r:1,perMove:r>0?r:1},767:{slidesPerView:n>0?n-3:o,perMove:n>0?n-3:o},991:{slidesPerView:n>0?n:o,perMove:n>0?n:o}},modules:D?[w.pt,w.Gk,w.Rv]:[w.Gk,w.Rv,w.W_,w.rj],className:"tb_fc_post_slider splide2 ".concat(d?"tb_fc_fixed_height":""),children:T&&T.length>0&&T.map(((t,e)=>{const a=p[t],n=f.isDisplay?(0,b.d)(m):m;return(a.file||70==i)&&(0,u.jsx)(_.o5,{style:{margin:0,padding:0,height:2==s?"calc(".concat(100/s,"vh - ").concat(g/2,"px)"):"100%"},children:(0,u.jsx)(n,{wall:f,itemData:a,themeHeight:g,row:s,itemIndex:e,clickToShowPopUp:v,onClickToCTA:x,postSizeInPx:y,intractiveData:N},"hr_".concat(e))},"splide".concat(e))}))},j)}))})};class y extends i.PureComponent{constructor(t){super(t),this.requestData=()=>{const{appendData:t,wall:e,preRender:a,hasMoreData:i}=this.props;i&&this.props.getDataNextSteps(e.Wall.id,Math.floor(Date.now()/1e3),e.ThemeRule.numberOfPosts,t.networkID,t.after,a,t.heightEvent)},this.state={parent_id:"",checkextraHeight:this.props.isDisplay?0:1,wHeight:0},this.inputRefs={}}componentDidMount(){const{isDisplay:t}=this.props;t&&(window.addEventListener("resize",(()=>this.updatethemHeight()),(()=>this.props.heightUpdate())),this.updatethemHeight())}updatethemHeight(){this.props.heightUpdate(),this.setState({wHeight:window.innerHeight}),setTimeout((()=>this.setState({checkextraHeight:!0})),200)}componentWillMount(){const{renderId:t}=this.props.renderId;this.setState({windowWidth:t?document.getElementById(t).clientWidth:window.innerWidth}),this.props.isDisplay&&setTimeout((()=>this.setState({wHeight:Math.random()})),500)}componentDidUpdate(t,e){const{wall:a}=this.props;(a.isEditor&&a.Banner.bannerUpdate!=t.wall.Banner.bannerUpdate||a.Banner.banner_position!=t.wall.Banner.banner_position||a.BannerImage.status!=t.wall.BannerImage.status)&&this.updatethemHeight()}render(){const{postData:t,completeDataObject:e,wall:a,clickToShowPopUp:i,hasMoreData:n,onClickToCTA:o,parentID:l,postSizeInPx:r,themeHeight:c,intractiveData:d}=this.props,{isDisplay:h,ThemeRule:p,Personalization:m}=a,{checkextraHeight:g,wHeight:_}=this.state,{themeId:w,numberOfCoumn:b,mobileColumn:y}=p,v=10==m.slideDelay?5:m.slideDelay,x=!!p.trimcontent,k=!!(window.innerWidth<768||s.tq),j=t&&t.length?k?1:t.length>3?3:t.length:3,D=l,C=71==p.themeId?p.multiRow?p.multiRow:2:1,N=Math.floor(t.postData.length>0?t.postData.length/2:[]);let T=71==w&&2==C&&h&&t.postData.length>15?t.postData&&t.postData.length>0&&t.postData.slice(0,N):t.postData,S=t.postData&&t.postData.length>15&&t.postData.slice(N);if(b>=T.length){const t=b-T.length+1;for(let e=0;e<=t;e++)T=[...T,T[e]]}if(b>=S.length&&71==w&&2==C){const t=b-S.length+1;for(let e=0;e<t;e++)S=[...S,S[e]]}if(b)var I=0;const P=document.querySelector(".onsiteupload_top_position");return P&&(I=P.clientHeight+10),g?(0,u.jsxs)("div",{id:"".concat(70==w?"horizontal":71==w?"motion":72==w?"vertical":"reels","_").concat(w),className:"tb_fc_post_container ".concat(h?"display":"widget"),ref:this.sliderHeight,style:{paddingTop:"".concat(I,"px"),height:1==C&&71==w||t.postData.length<15?"":"calc(100vh - ".concat(c,"px)")},children:[(0,u.jsx)(f,{inputRefs:this.inputRefs,inputName:D,themeId:w,row:C,numberOfCoumn:b,manageItemCount:j,slideDuration:v,mobileColumn:y,postData:t,trimContent:x,firstSildeData:T,secondSildeData:S,completeDataObject:e,themeHeight:c,parentID:l,wall:a,postSizeInPx:r,clickToShowPopUp:i,onClickToCTA:o,type:71==w&&h&&2==C?2:1,isDisplay:h,postData:t.postData,intractiveData:d,requestData:this.requestData},_),h?null:(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_fc_arrow_wrapper_",role:"navigation","aria-label":"Slider Navigation Wrapper",children:[(0,u.jsx)("div",{role:"navigation",className:"tb_fc_arrow splide__arrow arrow-left arrow tb_fc_arrow_left__ tb__icon tb-arrow-left-alt","aria-labelledby":"Navigation Previous Slide",children:" "}),(0,u.jsx)("div",{role:"navigation",className:"tb_fc_arrow splide__arrow arrow-right arrow tb_fc_arrow_right__ tb__icon tb-arrow-right-alt",onClick:n?this.requestData:null,"aria-labelledby":"Navigation Next Slide",children:" "})]})})]},c):null}}const v=(0,n.$j)(null,(t=>({getDataNextSteps:(e,a,i,s,n,o,l,r)=>t((0,g.Sx)(e,a,i,s,n,o,l,r))})))(y)},50247:()=>{}}]);