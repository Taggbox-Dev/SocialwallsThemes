(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8086,9239,5790,5810],{98255:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var l=a(47313),s=a(89239),i=a(55790),o=a(25810),n=a(46417);class r extends l.PureComponent{render(){var t,e,a;const{ThemeRule:l,postData:r}=this.props,d=null!==(t=null===r||void 0===r?void 0:r.createdAt)&&void 0!==t?t:"",c=null!==(e=null===r||void 0===r?void 0:r.author)&&void 0!==e?e:"",h=null!==(a=null===r||void 0===r?void 0:r.network)&&void 0!==a?a:"",u={color:l.authorColor,fontFamily:l.authorFont,fontStyle:l.authorFontVariant},m={backgroundColor:l.authorColor},g=!(!r||!l.postAuthor||c.isInstaUser),p=!(!l.postAuthor||!l.postTime);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"tb_mwf_author_wrapper",children:[g||l.postTime?(0,n.jsxs)("div",{className:"tb_mwf_author ".concat(64!=l.themeId||r.file?null:"no-image"),children:[g?(0,n.jsx)(s.default,{network:h,author:c,authorClass:"tb_mwf_author_profile"},c.username):"",(0,n.jsxs)("div",{className:"tb_mwf_author_info",children:[g?(0,n.jsx)("div",{className:"tb_mwf_authorname tb-cTBfont-".concat(l.authorFontVariant?l.authorFontVariant:null),style:u,children:(0,n.jsx)("strong",{children:c.name})}):"",(0,n.jsxs)("div",{className:"tb_mwf_post_info",children:[g&&![74,76,77].includes(l.themeId)?(0,n.jsx)("div",{className:"tb_mwf_username tb-cTBfont-".concat(l.authorFontVariant),style:u,children:c.username}):"",p&&g?(0,n.jsx)("div",{className:"tb_mwf_seprator",style:m,children:" "}):"",l.postTime?(0,n.jsx)(i.default,{postTime:d,timeClass:"tb_mwf_time",authorNameStyle:u}):""]})]})]}):null,h.id&&l.socialAction?(0,n.jsx)("div",{className:"tb_mwf_social_",style:{borderBottom:78==l.themeId?"60px solid ".concat(1==l.iconType?l.iconColor:h.color):"inherit"},children:(0,n.jsx)(o.default,{networkClass:"tb_mwf_social_ico",network:h,ThemeRule:l})}):null]})," "]})}}},89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var l=a(47313),s=a(17739),i=a(98935),o=a(46417);class n extends l.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:a,network:l}=this.props;return(0,o.jsx)("div",{className:a,children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(a,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,s.P)(e.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,o.jsx)(i.Z,{authorClass:a,username:e.name,network:l,color:null===l.id?"#000":l.color})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});a(47313);var l=a(46417);const s=t=>{let{username:e,network:a}=t;return(0,l.jsx)("img",{className:"tb_nc_author_profile__",src:"https://ui-avatars.com/api/?name=".concat(function(t){if(t){var e=t.match(/[A-Za-z]/);return e?e[0]:""}return""}(e),"&background=000&color=fff&length=1"),alt:e,width:44,height:44})}},32929:(t,e,a)=>{"use strict";a.d(e,{Z:()=>g});var l=a(47313),s=a(64516),i=a(71843),o=a.n(i);const n=t=>{let{url:e,allowFullScreen:a,position:s,display:i,height:n,width:r,overflow:d,styles:c,onLoad:h,onMouseOver:u,onMouseOut:m,scrolling:g,id:p,frameBorder:_,ariaHidden:b,sandbox:y,allow:w,className:f,title:v,ariaLabel:x,ariaLabelledby:k,name:j,target:C,loading:N,importance:S,referrerpolicy:D,allowpaymentrequest:T,src:I,key:F}=t;const P=o()({src:I||e,target:C||null,style:{position:s||null,display:i||"initial",overflow:d||null},scrolling:g||null,allowpaymentrequest:T||null,importance:S||null,sandbox:y&&[...y].join(" ")||null,loading:N||null,styles:c||null,name:j||null,className:f||null,allowFullScreen:"allowFullScreen",referrerpolicy:D||null,title:v||null,allow:w||null,id:p||null,"aria-labelledby":k||null,"aria-hidden":b||null,"aria-label":x||null,width:r||null,height:n||null,onLoad:h||null,onMouseOver:u||null,onMouseOut:m||null,key:F||"iframe"});let R=Object.create(null);for(let l of Object.keys(P))null!=P[l]&&(R[l]=P[l]);for(let l of Object.keys(R.style))null==R.style[l]&&delete R.style[l];if(R.styles)for(let l of Object.keys(R.styles))R.styles.hasOwnProperty(l)&&(R.style[l]=R.styles[l]),Object.keys(R.styles).pop()==l&&delete R.styles;if(a)if("allow"in R){const t=R.allow.replace("fullscreen","");R.allow="fullscreen ".concat(t.trim()).trim()}else R.allow="fullscreen";return _>=0&&(R.style.hasOwnProperty("border")||(R.style.border=_)),l.createElement("iframe",Object.assign({},R))};var r=a(20510),d=a.n(r),c=a(17739),h=a(46417);const u=!(0,c.eN)();class m extends l.PureComponent{constructor(t){super(t),this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.handleDuration=t=>{const{getVideoDuration:e,wall:a}=this.props;([74,76,77].includes(a.ThemeRule.themeId)&&1===a.Personalization.playFullVideo||t<a.Personalization.slideDelay)&&e(t)},this.state={imgUrl:t.itemData.postFileNew,videoLoaded:!1},this.myRef=l.createRef()}componentDidMount(){const{itemData:t,getVideoDuration:e,wall:a}=this.props,l=document.getElementById("".concat(t.id,"-media-player"));l&&[74,76,77].includes(a.ThemeRule.themeId)&&l.addEventListener("loadedmetadata",(()=>{e(l.duration<a.Personalization.slideDelay||1===a.Personalization.playFullVideo?l.duration:a.Personalization.slideDelay)})),a.isDisplay&&l&&!u&&(l.controls=!1,l.autoplay=!0,l.setAttribute("webkit-playsinline","webkit-playsinline"),l.setAttribute("playsinline","playsinline"),l.setAttribute("muted",""),l.preload="auto")}render(){const{itemData:t,wall:e,autoplayVideo:a=!0}=this.props,{id:l}=e.Wall,{imgUrl:i,videoLoaded:o}=this.state,{type:r,network:c,imageList:m,link:g,filterId:p,mediaUrl:_,stories:b,postFileNew:y,networkId:w,mediaClip:f}=t,v=t.id,x=e.isDisplay,k=3===r||5===r,j=2===r||4===r,C=!!(t.mediaClip&&"undefined"!=t.mediaClip&&String(t.mediaClip).length>0),N=!(x||!k||!e.ThemeRule.autoPlay||!C),S=7===c.id,D=!!(m&&m.length>0),T=D&&k?"tb_fc_multi_images_ico_bottom":"tb_fc_multi_images_ico";t.mediaUrl=(x||N)&&C?t.mediaClip:t.mediaUrl;const I=x?!u||a:N,F=!x&&(!!(e.User&&Object.keys(e.User).length>0)&&143031==e.User.id);return(0,h.jsxs)("div",{className:"tb_fc_media_wrap mediaHolder".concat(v),role:"img","aria-label":"Post Image",style:{height:"100%",background:"#000000"},children:[D&&!x?(0,h.jsx)("div",{className:"".concat(T," tb__icon tb-multiple"),children:" "}):null,k&&!x?S?(0,h.jsx)("div",{className:"tb_fc_youtube_ico tb__icon tb-youtube",children:" "}):(0,h.jsx)("div",{className:"tb_fc_video_ico tb__icon tb-reels",children:" "}):null,j?(0,h.jsx)("img",{loading:"lazy",src:i,"data-link":g,"data-load":"0","data-network":c.id,"data-wall-id":l,"data-item-id":v,"data-filter-id":p,onLoad:this.onLoad,draggable:!1,onError:t=>(0,s.ht)(t),style:{height:"100%"},width:"300px",height:"300px"}):g&&w&&30==w&&g.indexOf("vk")>=0?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(n,{className:"tb-detail-image-iframe",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",src:"".concat(_,"&autoplay=1&mute=1"),allowFullScreen:"true",style:{width:"100%!important"},"data-filter-id":p,"data-stories":b,"data-type":"video","data-network":w,"data-link":g,"data-item-id":v,"data-load":0,draggable:!1,height:"1000",width:"1000"})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{loading:"lazy",src:y,"data-load":"0","data-network":c.id,"data-wall-id":l,"data-item-id":v,"data-filter-id":p,onLoad:this.onLoad,draggable:!1,onError:t=>{(0,s.ht)(t)},style:{width:"100%",height:"100%"},width:"300px",height:"300px"}),(0,h.jsx)("div",{className:"card_video__01",style:{display:o?"none":"block",opacity:o?0:1,width:"100%",height:"100%"},children:3!=w?(0,h.jsx)("video",{poster:y,id:"".concat(t.id,"-media-player"),ref:this.myRef,src:a?"".concat(t.mediaUrl):null,autoPlay:I,"webkit-playsinline":I,playsinline:I,muted:!0,loop:1,onError:t=>{this.setState({videoLoaded:!0})},"data-type":"video","data-network":w,"data-filter-id":p,"data-link":g,"data-load":0,"data-tb":e.UserDetail.db_table,"data-wall-id":e.Wall.id,"data-item-id":v,"data-owner-id":e.Wall.owner,height:"400",width:"400",controls:F},"".concat(this.props.keyRender,"-media-player")):(0,h.jsx)(d(),{poster:y,onDuration:this.handleDuration,style:{display:"contents",width:"".concat(4.8,"vw"),height:"".concat(.3*9,"vw")},className:"tb_post_vid_005",url:"".concat(f&&"undefined"!=f&&String(f).length>0?f:_),playing:!!x,loop:!0,playsinline:!0,config:{file:{attributes:{playsInline:!0}}},muted:!0,controls:F,onReady:t=>x?this.setState({videoLoaded:!1}):null},"".concat(this.props.keyRender,"-media-player"))})]})]},"".concat(t.mediaUrl,"--").concat(v))}}const g=(0,l.memo)(m)},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var l=a(47313),s=a(46417);const i=l.lazy((()=>a.e(5867).then(a.bind(a,95867))));class o extends l.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a}=this.props;return 1===a.iconType&&(7!==t.id&&4!==t.id)?(0,s.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:[69,65].includes(a.themeId)&&"#ffffff "==a.iconColor?"#000":a.iconColor},children:(0,s.jsx)("div",{})}):(0,s.jsxs)(l.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:[" ",(0,s.jsx)(i,{network:t,ThemeRule:a,networkClass:e})]})}}},30584:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var l=a(47313),s=a(91523),i=a(16390),o=a(46417);const n=a(77560),r=(t,e)=>(0,o.jsx)(s.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,i.ZP)(t)}),d=t=>{let{data:e,content:a,Personalization:l,ThemeRule:s}=t;const d={color:l.hashtag_color,fontWeight:"bold",backgroundColor:1==l.hashtag_background_status?l.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,o.jsx)(o.Fragment,{children:1===l.hashtag_highlight&&0===l.hashtag_feed&&0===l.hashtag_all?(0,i.ZP)(a):1===l.hashtag_highlight&&0===l.hashtag_feed&&1===l.hashtag_all?r(window.slackdown.parse(n(a,/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:d,children:["#",t]}))),e.slackMember),s):1===l.hashtag_highlight&&1===l.hashtag_feed&&0===l.hashtag_all?r(window.slackdown.parse(n(a,e.hash.hashString,((t,e)=>(0,o.jsx)("strong",{className:"tb_text_hashtag",style:d,children:t}))),e.slackMember),s):1===l.hashtag_highlight&&1===l.hashtag_feed&&1===l.hashtag_all?r(window.slackdown.parse(n(a,/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:d,children:["#",t]},e))),e.slackMember),s):r(window.slackdown.parse(a,e.slackMember),s)}):(0,o.jsx)(o.Fragment,{children:1===l.hashtag_highlight&&0===l.hashtag_feed&&0===l.hashtag_all?(0,i.ZP)(a):1===l.hashtag_highlight&&0===l.hashtag_feed&&1===l.hashtag_all?n((0,i.ZP)(a),/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:d,children:["#",t]}))):1===l.hashtag_highlight&&1===l.hashtag_feed&&0===l.hashtag_all?n((0,i.ZP)(a),e.hash.hashString,((t,e)=>(0,o.jsx)("strong",{className:"tb_text_hashtag",style:d,children:t}))):1===l.hashtag_highlight&&1===l.hashtag_feed&&1===l.hashtag_all?n((0,i.ZP)(a),/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:d,children:["#",t]},e))):r(a,s)})},c=(0,l.memo)(d)},33305:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var l=a(47313),s=a(16390),i=a(17739),o=a(30584),n=a(46417);class r extends l.PureComponent{constructor(t){super(t),this.updateText=()=>{const{ThemeRule:t}=this.props;[74,76,77].includes(t.themeId)&&((0,i.OX)(t.trimcontent),setTimeout((()=>this.setState({loadContent:!0})),100))},this.state={loadContent:![74,76,77].includes(t.ThemeRule.themeId)}}render(){const{ThemeRule:t,personalization:e,item:a,contentTitle:l,largeBlock:r,wall:d}=this.props,{loadContent:c}=this.state,h=t.font_varient?t.font_varient.split("-"):{},u=h.length>1?h[1]:"",m=3==t.captionFontWeight?"bold":2==t.captionFontWeight?"600":1==t.captionFontWeight?"100":h.length>0?h[0].includes("regular")?"normal":h[0]:"",g=t.css_font?t.css_font:"",p="".concat(t.fontSize&&![74,76,77,68].includes(t.themeId)?"".concat(t.fontSize,"px"):"inherit"),_={color:t.fontColor,fontWeight:m,fontFamily:g,fontStyle:u},b={font:68!=t.themeId?"".concat(u):"",WebkitLineClamp:t.trimcontent?r?10:78==t.themeId?6:3:"",display:t.trimcontent?"-webkit-box":"block",fontSize:p},y=d.isDisplay||20==a.network.id?a.content:(0,i.Fx)(a.content);return(0,n.jsx)("div",{id:"tb-ss-post--card".concat(a.id),className:"post-card-outer tb-cTBfont- ".concat(t.font_varient),"aria-label":"Post Content",style:_,children:(0,n.jsx)("div",{className:"resize",style:b,onLoad:this.updateText(),children:c?(0,n.jsxs)(n.Fragment,{children:[l?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,s.ZP)(l)}):null,(0,n.jsx)(o.Z,{data:a,content:y,Personalization:e,ThemeRule:t},a.id),"   "]}):null})})}}},90905:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});var l=a(47313),s=a(46417);const i=t=>{let{network:e}=t;const{className:a,color:l}={3:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#1b74e4"},4:{className:"tb_rating_ico__ tb__icon tb-rating tb-google-rating",color:"#F8B90C"},19:{className:"tb_rating_ico__ tb__icon tb-rating tb-yelp-rating",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-rating tb-airbnb-rating",color:"#ff385c"},29:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#613983"}}[e.id]||{className:"tb_rating_ico__ tb__icon tb-rating",color:"#F8B90C"};return(0,s.jsx)("div",{className:a,style:{color:l},"tb-network":e.id})};class o extends l.PureComponent{render(){const{rating:t,network:e}=this.props;return(0,s.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>(0,s.jsx)(i,{network:e},a))):null})}}},55790:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var l=a(47313),s=a(17739),i=a(46417);const o=t=>{const{postTime:e,timeClass:a,authorNameStyle:o}=t,n=(0,l.useMemo)((()=>(0,s.Sy)(e)),[]);return(0,i.jsx)("div",{className:a,style:o,children:n})},n=(0,l.memo)(o)},84252:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>h});var l=a(47313),s=a(32929),i=a(98255),o=a(33305),n=a(90905),r=a(80381),d=a(46417);class c extends l.Component{constructor(){super(...arguments),this.state={id:this.props.activeData.id},this.onZoomStyleLoad=()=>{const{mediaClass:t}=this.state,{ThemeRule:e}=this.props;this.setState({fade:"fade-in"}),setTimeout((()=>{"makeBgImg"===t&&this.setState({mediaClass:"".concat(t," ").concat(e&&74==e.themeId?" zoom2x":"")})}),3e3)},this.addNetwork=t=>{let e=document.querySelector(".scrlBarComan");e&&e.setAttribute("data-network",t)}}componentDidMount(){const{mediaClass:t,activeData:e}=this.props;this.setState({mediaClass:t,id:e.id},(()=>this.onZoomStyleLoad()))}componentDidUpdate(t,e){if(t.activeData.id!==e.id){const{mediaClass:e,activeData:a}=t;this.setState({mediaClass:e,id:a.id,fade:"",active:""},(()=>this.onZoomStyleLoad()))}}render(){var t;const{activeData:e,typeClass:a,blurStyle:c,blurClass:h,columnLeftClass:u,columnRightClass:m,active:g,wall:p,getVideoDuration:_}=this.props,{Personalization:b,ThemeRule:y}=p,{themeId:w}=y,{rating:f}=e,v=f>0?"tb_mwf_rating_content":"tb_mwf_content",x=1===e.type&&b.textDecorate?"tb_mwf_text_decoration tb_mwf_text_post":"",{mediaClass:k}=this.state,j=null!==(t=null===e||void 0===e?void 0:e.network)&&void 0!==t?t:"";let C="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)";return(0,d.jsx)(d.Fragment,{children:e?(0,d.jsxs)("div",{id:'"postId'.concat(e.id),className:"feedId".concat(e.feedId," postItem item ").concat(a," flatCard animated in autoBold appliedchLimit ").concat(g),children:[76==w?(0,d.jsx)("div",{className:"blur-bg tb_slide_bg_color__",style:{background:0==y.transparent?y.backgroundColor.isEmpty?2==e.networkId?C:j.color:y.backgroundColor:2==e.networkId?C:j.color}}):null,74==w?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"blur-bg tb_slide_bg_img_full__",style:c}),(0,d.jsx)("div",{className:"blur-bg tb_slide_bg_img_vid__ ".concat(h),style:c})]}):null,(0,d.jsxs)("div",{className:"post",children:[(0,d.jsx)("div",{className:u,style:1==e.type?{display:"none"}:[2,18].includes(e.networkId)?{textAlign:"center"}:{},children:(0,d.jsxs)("div",{className:k,style:c,children:[(0,l.createElement)(s.Z,{...this.props,key:e.id,getVideoDuration:_,itemData:{...e,postFile:String(e.postFile).replace("?w=600","?w=1200"),postFileNew:String(e.postFileNew).replace("?w=600","?w=1200")},wall:p}),!p.isDisplay&&p.Personalization.interactive?(0,l.createElement)(r.Z,{isCard:!0,postId:e.id,intractiveData:[],userDetail:p.UserDetail,wallId:p.Wall,interactiveCount:e.interactiveCount,isDisplay:p.isDisplay,interactive:p.Personalization.interactive,interactiveStatus:p.Personalization.interactiveStatus,key:Math.random()*e.id}):null]})}),!y.hideContent||b.postTime||b.postAuthor?(0,d.jsx)("div",{className:m,children:(0,d.jsx)("div",{className:"postContentCard",style:{backgroundColor:"".concat(74!=w?p.ThemeRule.cardColor:"")},children:(0,d.jsxs)("div",{className:"postContentClasic classicSlideshow ".concat(f&&29==e.network.id?"snapUp_rate":""),style:{padding:"".concat(p.ThemeRule.spacing,"px")},children:[(0,d.jsx)("div",{className:"socialIcons fadeInDown",children:(0,d.jsx)(i.Z,{ThemeRule:y})}),f?(0,d.jsx)(n.Z,{rating:f,network:e.network}):null,(0,d.jsxs)("div",{className:"fadeInUp",children:[y.hideContent?null:(0,d.jsx)(o.Z,{item:e,wall:p,contentClass:"".concat(v," ").concat(x),ThemeRule:y,personalization:b,contentTitle:e.contentTitle},e.id),(0,d.jsx)("div",{className:"autherDetails",children:(0,d.jsx)(i.Z,{postData:e,ThemeRule:y})})]})]})})}):null]})]}):null})}}const h=c},50247:()=>{}}]);