(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[6443,9239,5790,5810],{98255:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var i=a(47313),s=a(89239),l=a(55790),o=a(25810),n=a(46417);class r extends i.PureComponent{render(){var t,e,a;const{ThemeRule:i,postData:r}=this.props,c=null!==(t=null===r||void 0===r?void 0:r.createdAt)&&void 0!==t?t:"",d=null!==(e=null===r||void 0===r?void 0:r.author)&&void 0!==e?e:"",h=null!==(a=null===r||void 0===r?void 0:r.network)&&void 0!==a?a:"",m={color:i.authorColor,fontFamily:i.authorFont,fontStyle:i.authorFontVariant},u={backgroundColor:i.authorColor},p=!(!r||!i.postAuthor||d.isInstaUser),g=!(!i.postAuthor||!i.postTime);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"tb_mwf_author_wrapper",children:[p||i.postTime?(0,n.jsxs)("div",{className:"tb_mwf_author ".concat(64!=i.themeId||r.file?null:"no-image"),children:[p?(0,n.jsx)(s.default,{network:h,author:d,authorClass:"tb_mwf_author_profile"},d.username):"",(0,n.jsxs)("div",{className:"tb_mwf_author_info",children:[p?(0,n.jsx)("div",{className:"tb_mwf_authorname tb-cTBfont-".concat(i.authorFontVariant?i.authorFontVariant:null),style:m,children:(0,n.jsx)("strong",{children:d.name})}):"",(0,n.jsxs)("div",{className:"tb_mwf_post_info",children:[p&&![74,76,77].includes(i.themeId)?(0,n.jsx)("div",{className:"tb_mwf_username tb-cTBfont-".concat(i.authorFontVariant),style:m,children:d.username}):"",g&&p?(0,n.jsx)("div",{className:"tb_mwf_seprator",style:u,children:" "}):"",i.postTime?(0,n.jsx)(l.default,{postTime:c,timeClass:"tb_mwf_time",authorNameStyle:m}):""]})]})]}):null,h.id&&i.socialAction?(0,n.jsx)("div",{className:"tb_mwf_social_",style:{borderBottom:78==i.themeId?"60px solid ".concat(1==i.iconType?i.iconColor:h.color):"inherit"},children:(0,n.jsx)(o.default,{networkClass:"tb_mwf_social_ico",network:h,ThemeRule:i})}):null]})," "]})}}},89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var i=a(47313),s=a(17739),l=a(98935),o=a(46417);class n extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:a,network:i}=this.props;return(0,o.jsx)("div",{className:a,children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(a,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,s.P)(e.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,o.jsx)(l.Z,{authorClass:a,username:e.name,network:i,color:null===i.id?"#000":i.color})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});a(47313);var i=a(46417);const s=t=>{let{username:e,network:a}=t;return(0,i.jsx)("img",{className:"tb_nc_author_profile__",src:"https://ui-avatars.com/api/?name=".concat(function(t){if(t){var e=t.match(/[A-Za-z]/);return e?e[0]:""}return""}(e),"&background=000&color=fff&length=1"),alt:e,width:44,height:44})}},32929:(t,e,a)=>{"use strict";a.d(e,{Z:()=>p});var i=a(47313),s=a(64516),l=a(71843),o=a.n(l);const n=t=>{let{url:e,allowFullScreen:a,position:s,display:l,height:n,width:r,overflow:c,styles:d,onLoad:h,onMouseOver:m,onMouseOut:u,scrolling:p,id:g,frameBorder:_,ariaHidden:w,sandbox:y,allow:b,className:f,title:v,ariaLabel:x,ariaLabelledby:j,name:T,target:k,loading:D,importance:N,referrerpolicy:I,allowpaymentrequest:P,src:C,key:S}=t;const R=o()({src:C||e,target:k||null,style:{position:s||null,display:l||"initial",overflow:c||null},scrolling:p||null,allowpaymentrequest:P||null,importance:N||null,sandbox:y&&[...y].join(" ")||null,loading:D||null,styles:d||null,name:T||null,className:f||null,allowFullScreen:"allowFullScreen",referrerpolicy:I||null,title:v||null,allow:b||null,id:g||null,"aria-labelledby":j||null,"aria-hidden":w||null,"aria-label":x||null,width:r||null,height:n||null,onLoad:h||null,onMouseOver:m||null,onMouseOut:u||null,key:S||"iframe"});let U=Object.create(null);for(let i of Object.keys(R))null!=R[i]&&(U[i]=R[i]);for(let i of Object.keys(U.style))null==U.style[i]&&delete U.style[i];if(U.styles)for(let i of Object.keys(U.styles))U.styles.hasOwnProperty(i)&&(U.style[i]=U.styles[i]),Object.keys(U.styles).pop()==i&&delete U.styles;if(a)if("allow"in U){const t=U.allow.replace("fullscreen","");U.allow="fullscreen ".concat(t.trim()).trim()}else U.allow="fullscreen";return _>=0&&(U.style.hasOwnProperty("border")||(U.style.border=_)),i.createElement("iframe",Object.assign({},U))};var r=a(20510),c=a.n(r),d=a(17739),h=a(46417);const m=!(0,d.eN)();class u extends i.PureComponent{constructor(t){super(t),this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.handleDuration=t=>{const{getVideoDuration:e,wall:a}=this.props;([74,76,77].includes(a.ThemeRule.themeId)&&1===a.Personalization.playFullVideo||t<a.Personalization.slideDelay)&&e(t)},this.state={imgUrl:t.itemData.postFileNew,videoLoaded:!1},this.myRef=i.createRef()}componentDidMount(){const{itemData:t,getVideoDuration:e,wall:a}=this.props,i=document.getElementById("".concat(t.id,"-media-player"));i&&[74,76,77].includes(a.ThemeRule.themeId)&&i.addEventListener("loadedmetadata",(()=>{e(i.duration<a.Personalization.slideDelay||1===a.Personalization.playFullVideo?i.duration:a.Personalization.slideDelay)})),a.isDisplay&&i&&!m&&(i.controls=!1,i.autoplay=!0,i.setAttribute("webkit-playsinline","webkit-playsinline"),i.setAttribute("playsinline","playsinline"),i.setAttribute("muted",""),i.preload="auto")}render(){const{itemData:t,wall:e,autoplayVideo:a=!0}=this.props,{id:i}=e.Wall,{imgUrl:l,videoLoaded:o}=this.state,{type:r,network:d,imageList:u,link:p,filterId:g,mediaUrl:_,stories:w,postFileNew:y,networkId:b,mediaClip:f}=t,v=t.id,x=e.isDisplay,j=3===r||5===r,T=2===r||4===r,k=!!(t.mediaClip&&"undefined"!=t.mediaClip&&String(t.mediaClip).length>0),D=!(x||!j||!e.ThemeRule.autoPlay||!k),N=7===d.id,I=!!(u&&u.length>0),P=I&&j?"tb_fc_multi_images_ico_bottom":"tb_fc_multi_images_ico";t.mediaUrl=(x||D)&&k?t.mediaClip:t.mediaUrl;const C=x?!m||a:D,S=!x&&(!!(e.User&&Object.keys(e.User).length>0)&&143031==e.User.id);return(0,h.jsxs)("div",{className:"tb_fc_media_wrap mediaHolder".concat(v),role:"img","aria-label":"Post Image",style:{height:"100%",background:"#000000"},children:[I&&!x?(0,h.jsx)("div",{className:"".concat(P," tb__icon tb-multiple"),children:" "}):null,j&&!x?N?(0,h.jsx)("div",{className:"tb_fc_youtube_ico tb__icon tb-youtube",children:" "}):(0,h.jsx)("div",{className:"tb_fc_video_ico tb__icon tb-reels",children:" "}):null,T?(0,h.jsx)("img",{loading:"lazy",src:l,"data-link":p,"data-load":"0","data-network":d.id,"data-wall-id":i,"data-item-id":v,"data-filter-id":g,onLoad:this.onLoad,draggable:!1,onError:t=>(0,s.ht)(t),style:{height:"100%"},width:"300px",height:"300px"}):p&&b&&30==b&&p.indexOf("vk")>=0?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(n,{className:"tb-detail-image-iframe",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",src:"".concat(_,"&autoplay=1&mute=1"),allowFullScreen:"true",style:{width:"100%!important"},"data-filter-id":g,"data-stories":w,"data-type":"video","data-network":b,"data-link":p,"data-item-id":v,"data-load":0,draggable:!1,height:"1000",width:"1000"})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{loading:"lazy",src:y,"data-load":"0","data-network":d.id,"data-wall-id":i,"data-item-id":v,"data-filter-id":g,onLoad:this.onLoad,draggable:!1,onError:t=>{(0,s.ht)(t)},style:{width:"100%",height:"100%"},width:"300px",height:"300px"}),(0,h.jsx)("div",{className:"card_video__01",style:{display:o?"none":"block",opacity:o?0:1,width:"100%",height:"100%"},children:3!=b?(0,h.jsx)("video",{poster:y,id:"".concat(t.id,"-media-player"),ref:this.myRef,src:a?"".concat(t.mediaUrl):null,autoPlay:C,"webkit-playsinline":C,playsinline:C,muted:!0,loop:1,onError:t=>{this.setState({videoLoaded:!0})},"data-type":"video","data-network":b,"data-filter-id":g,"data-link":p,"data-load":0,"data-tb":e.UserDetail.db_table,"data-wall-id":e.Wall.id,"data-item-id":v,"data-owner-id":e.Wall.owner,height:"400",width:"400",controls:S},"".concat(this.props.keyRender,"-media-player")):(0,h.jsx)(c(),{poster:y,onDuration:this.handleDuration,style:{display:"contents",width:"".concat(4.8,"vw"),height:"".concat(.3*9,"vw")},className:"tb_post_vid_005",url:"".concat(f&&"undefined"!=f&&String(f).length>0?f:_),playing:!!x,loop:!0,playsinline:!0,config:{file:{attributes:{playsInline:!0}}},muted:!0,controls:S,onReady:t=>x?this.setState({videoLoaded:!1}):null},"".concat(this.props.keyRender,"-media-player"))})]})]},"".concat(t.mediaUrl,"--").concat(v))}}const p=(0,i.memo)(u)},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var i=a(47313),s=a(46417);const l=i.lazy((()=>a.e(5867).then(a.bind(a,95867))));class o extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a}=this.props;return 1===a.iconType&&(7!==t.id&&4!==t.id)?(0,s.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:[69,65].includes(a.themeId)&&"#ffffff "==a.iconColor?"#000":a.iconColor},children:(0,s.jsx)("div",{})}):(0,s.jsxs)(i.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:[" ",(0,s.jsx)(l,{network:t,ThemeRule:a,networkClass:e})]})}}},24816:(t,e,a)=>{"use strict";a.d(e,{d:()=>o});var i=a(47313),s=a(17739),l=a(46417);function o(t){return class extends i.Component{constructor(t){super(t),this.cardRef=i.createRef(null),this.startLoadingVideo=t=>{const{itemData:e,wall:a}=this.props;if(a&&a.ThemeRule&&Object.keys(a.ThemeRule).length>0&&3==e.type||5==e.type){const e=a.ThemeRule.themeId,l=!(0,s.eN)();try{if(l&&window.innerWidth>920&&e&&[62,63,64,65,66,69,70,73].includes(parseInt(e))){let e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.setState({autoplay:!0}):this.setState({autoplay:!1})}))}),{rootMargin:"50px",threshold:1});t.current&&e.observe(t.current)}else this.setState({autoplay:!0})}catch(i){this.setState({autoplay:!0})}}},this.state={autoplay:!1}}componentDidMount(){this.startLoadingVideo(this.cardRef)}render(){return(0,l.jsx)(t,{...this.state,...this.props,cardRef:this.cardRef})}}}},30584:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var i=a(47313),s=a(91523),l=a(16390),o=a(46417);const n=a(77560),r=(t,e)=>(0,o.jsx)(s.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,l.ZP)(t)}),c=t=>{let{data:e,content:a,Personalization:i,ThemeRule:s}=t;const c={color:i.hashtag_color,fontWeight:"bold",backgroundColor:1==i.hashtag_background_status?i.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,o.jsx)(o.Fragment,{children:1===i.hashtag_highlight&&0===i.hashtag_feed&&0===i.hashtag_all?(0,l.ZP)(a):1===i.hashtag_highlight&&0===i.hashtag_feed&&1===i.hashtag_all?r(window.slackdown.parse(n(a,/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:c,children:["#",t]}))),e.slackMember),s):1===i.hashtag_highlight&&1===i.hashtag_feed&&0===i.hashtag_all?r(window.slackdown.parse(n(a,e.hash.hashString,((t,e)=>(0,o.jsx)("strong",{className:"tb_text_hashtag",style:c,children:t}))),e.slackMember),s):1===i.hashtag_highlight&&1===i.hashtag_feed&&1===i.hashtag_all?r(window.slackdown.parse(n(a,/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:c,children:["#",t]},e))),e.slackMember),s):r(window.slackdown.parse(a,e.slackMember),s)}):(0,o.jsx)(o.Fragment,{children:1===i.hashtag_highlight&&0===i.hashtag_feed&&0===i.hashtag_all?(0,l.ZP)(a):1===i.hashtag_highlight&&0===i.hashtag_feed&&1===i.hashtag_all?n((0,l.ZP)(a),/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:c,children:["#",t]}))):1===i.hashtag_highlight&&1===i.hashtag_feed&&0===i.hashtag_all?n((0,l.ZP)(a),e.hash.hashString,((t,e)=>(0,o.jsx)("strong",{className:"tb_text_hashtag",style:c,children:t}))):1===i.hashtag_highlight&&1===i.hashtag_feed&&1===i.hashtag_all?n((0,l.ZP)(a),/#(\w+)/g,((t,e)=>(0,o.jsxs)("strong",{className:"tb_text_hashtag",style:c,children:["#",t]},e))):r(a,s)})},d=(0,i.memo)(c)},33305:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var i=a(47313),s=a(16390),l=a(17739),o=a(30584),n=a(46417);class r extends i.PureComponent{constructor(t){super(t),this.updateText=()=>{const{ThemeRule:t}=this.props;[74,76,77].includes(t.themeId)&&((0,l.OX)(t.trimcontent),setTimeout((()=>this.setState({loadContent:!0})),100))},this.state={loadContent:![74,76,77].includes(t.ThemeRule.themeId)}}render(){const{ThemeRule:t,personalization:e,item:a,contentTitle:i,largeBlock:r,wall:c}=this.props,{loadContent:d}=this.state,h=t.font_varient?t.font_varient.split("-"):{},m=h.length>1?h[1]:"",u=3==t.captionFontWeight?"bold":2==t.captionFontWeight?"600":1==t.captionFontWeight?"100":h.length>0?h[0].includes("regular")?"normal":h[0]:"",p=t.css_font?t.css_font:"",g="".concat(t.fontSize&&![74,76,77,68].includes(t.themeId)?"".concat(t.fontSize,"px"):"inherit"),_={color:t.fontColor,fontWeight:u,fontFamily:p,fontStyle:m},w={font:68!=t.themeId?"".concat(m):"",WebkitLineClamp:t.trimcontent?r?10:78==t.themeId?6:3:"",display:t.trimcontent?"-webkit-box":"block",fontSize:g},y=c.isDisplay||20==a.network.id?a.content:(0,l.Fx)(a.content);return(0,n.jsx)("div",{id:"tb-ss-post--card".concat(a.id),className:"post-card-outer tb-cTBfont- ".concat(t.font_varient),"aria-label":"Post Content",style:_,children:(0,n.jsx)("div",{className:"resize",style:w,onLoad:this.updateText(),children:d?(0,n.jsxs)(n.Fragment,{children:[i?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,s.ZP)(i)}):null,(0,n.jsx)(o.Z,{data:a,content:y,Personalization:e,ThemeRule:t},a.id),"   "]}):null})})}}},90905:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});var i=a(47313),s=a(46417);const l=t=>{let{network:e}=t;const{className:a,color:i}={3:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#1b74e4"},4:{className:"tb_rating_ico__ tb__icon tb-rating tb-google-rating",color:"#F8B90C"},19:{className:"tb_rating_ico__ tb__icon tb-rating tb-yelp-rating",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-rating tb-airbnb-rating",color:"#ff385c"},29:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#613983"}}[e.id]||{className:"tb_rating_ico__ tb__icon tb-rating",color:"#F8B90C"};return(0,s.jsx)("div",{className:a,style:{color:i},"tb-network":e.id})};class o extends i.PureComponent{render(){const{rating:t,network:e}=this.props;return(0,s.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>(0,s.jsx)(l,{network:e},a))):null})}}},55790:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var i=a(47313),s=a(17739),l=a(46417);const o=t=>{const{postTime:e,timeClass:a,authorNameStyle:o}=t,n=(0,i.useMemo)((()=>(0,s.Sy)(e)),[]);return(0,l.jsx)("div",{className:a,style:o,children:n})},n=(0,i.memo)(o)},7087:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>I});var i=a(47313),s=a(61395),l=a.n(s),o=a(43411),n=a(98255),r=a(32929),c=a(33305),d=a(90905),h=a(25810),m=a(80381),u=a(46417);class p extends i.PureComponent{render(){const{itemData:t,clickToShowPopUp:e,itemIndex:a,wall:s,autoplay:l,cardRef:o,intractiveData:p}=this.props,{Personalization:g,ThemeRule:_}=s,w=[2,3,4,5].includes(t.type),y=!(!_.postAuthor||t.author.isInstaUser),b=t.network,f=s.Personalization.interactive;return(0,u.jsx)("div",{className:"tb_mwf_post_wrapper ".concat(f?"intractive_on":""),"data-id":t.id,"tb-network":b.icon,ref:o,children:(0,u.jsxs)("div",{className:"tb_mwf_post_in",onClick:e(a,t),children:[(0,u.jsxs)("div",{className:"tb_mwf_post_media_wrapp",children:[w||65==_.themeId?null:(0,u.jsxs)("div",{className:"tb_mwf_social_top_",children:[(0,u.jsx)(h.default,{networkClass:"tb_mwf_social_center_ico",network:b,ThemeRule:_})," "]}),w?(0,u.jsx)(r.Z,{itemData:t,wall:s,autoplayVideo:l},"image_".concat(t.id,"_").concat(a)):null,t.rating?(0,u.jsx)("div",{className:"tb_mwf_rating__ ".concat(29===b.id?"tb_mwf_onsite_rating__":""),children:(0,u.jsx)(d.Z,{rating:t.rating,network:b})}):null]}),_.captionStatus?null:(0,u.jsxs)("div",{className:_.postAuthor||_.socialAction||_.postTime?"tb_mwf_contant_wrapper":"",children:[y||_.postTime||b.id&&_.socialAction?(0,u.jsx)(n.Z,{postData:t,ThemeRule:_}):null,_.hideContent||[65,63].includes(_.themeId)?null:(0,u.jsx)(c.Z,{item:t,ThemeRule:_,personalization:g,contentTitle:t.contentTitle,wall:s},t.id)]}),!s.isDisplay&&f?(0,i.createElement)(m.Z,{isCard:!0,postId:t.id,intractiveData:p,userDetail:s.UserDetail,wallId:s.Wall,interactiveCount:t.interactiveCount,isDisplay:s.isDisplay,interactive:f,interactiveStatus:s.Personalization.interactiveStatus,key:Math.random()*t.id}):null]})})}}const g=(0,o.$j)((t=>({modalPop:t.modalPop})))(p);var _,w,y=!1,b=0,f=0,v=0;const x=t=>({80:60,70:40,50:30,30:20,20:10}[t]||20);class j extends i.PureComponent{constructor(t){var e;super(t),e=this,this.scrollDiv_init=t=>{if(!this.state.slideWall){const e="marqueecontainer";w=document.getElementById(e),63==t&&(y=!1),(w||{}).scrollTop=0,b=0,this.onScrollData(),this.onScrollWPosts(t)}},this.onScrollData=()=>{const{wall:t}=this.props;if(t.Personalization.scrollDelay){const e=x(t.Personalization.scrollDelay);v=setInterval(this.scrollDiv,e)}},this.onScrollWPosts=t=>{const{themeHeight:e,wall:a}=this.props;w=document.getElementById("marqueecontainer");var i=document.getElementById("wPosts");if(i)if(window.innerHeight>i.clientHeight){var s=window.innerHeight,l=i.clientHeight;i.setAttribute("style","position: relative; margin-bottom: ".concat(a.isDisplay?s:0,"px; min-height:").concat(l,"px"))}else w.setAttribute("style","overflow: auto; height : calc(100vh - ".concat(e&&a.isDisplay?e+(a.isEditor?6:0):0,"px)"))},this.scrollDiv=()=>{const{themeId:t}=this.props.wall.ThemeRule;v&&clearInterval(v),y?63==t?(y=!y||0!=(w||{}).scrollTop,(w||{}).scrollTop=b,b--):((w||{}).scrollTop=b=0,y=!1):((w||{}).scrollTop=b,b++,y=(w||{}).scrollTop>=(w||{}).scrollHeight-(w||{}).offsetHeight-300),this.onScrollData()},this.pauseDiv=t=>{v&&clearInterval(v),_&&clearTimeout(_),_=setTimeout((()=>this.resumeDiv()),5e3)},this.resumeDiv=()=>{const{wall:t}=this.props;w=document.getElementById("wPosts"),b=(w||{}).scrollTop,v=setInterval(this.scrollDiv,x(t.Personalization.scrollDelay))},this.clearData=()=>{this.clearTime()},this.clearTime=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e.props.wall.isDisplay&&e.setState({slideWall:t?0:1}),v&&clearInterval(v),v&&(v=0),_&&clearTimeout(_),f&&clearTimeout(f),y&&(y=!1),b&&(b=0)},this.state={slideWall:0}}componentDidMount(){const{wall:t}=this.props;if(t.isDisplay&&!t.product){window.clearData=this.clearData;const{themeId:e}=t.ThemeRule,a=document.querySelector(".waterfall-theme");a&&a.addEventListener("wheel",(t=>t.preventDefault()),{passive:!1}),f=setTimeout((()=>{this.scrollDiv_init(e)}),2e3)}}componentDidUpdate(t,e){const{postData:a,wall:i}=t;i.ThemeRule.themeId!=this.props.wall.ThemeRule.themeId&&(y=!1,b&&(b=0)),a!=this.props.postData&&(this.clearTime(1),this.scrollDiv_init(i.ThemeRule.themeId))}componentWillUnmount(){const t=document.querySelector(".waterfall-theme");t&&t.removeEventListener("mousewheel",(t=>t.preventDefault()),!1),this.clearTime()}render(){return(0,u.jsx)(u.Fragment,{children:{...this.props.children}})}}const T=(0,i.memo)(j);var k=a(24816),D=a(17739);class N extends i.PureComponent{constructor(t){var e;super(t),e=this,this.responsiveUpdate=null,this.heightMange=null,this.themeheight=function(){const{heightUpdate:t,wall:a}=e.props;(a.isDisplay||a.product)&&(a.isDisplay&&t(),e.heightMange=setTimeout((()=>e.setState({checkThemeheight:!0})),100))},this.onResponsiveTheme=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{wall:a}=e.props,i=document.querySelector(".tb_app_container");if(i){const s=i.clientWidth-(a.isDisplay?1:8);if(s>0){let t=null,i=null,l=null,o=null;const n=a.Personalization.minimumPostWidth;t=s/n,l=s%n,i=l/Math.trunc(t),o=t>=1?n+i:n-i,e.setState({postWidth:o})}else t||setTimeout((()=>e.onResponsiveTheme()),1e3)}},this.state={postWidth:0,checkThemeheight:!t.wall.isDisplay&&!t.wall.product,productUpdate:0}}componentDidMount(){this.responsiveUpdate=setTimeout((()=>this.onResponsiveTheme()),1e3),window.addEventListener("resize",(()=>{this.props.isDisplay&&this.themeheight(),this.onResponsiveTheme()})),(this.props.wall.isDisplay||this.props.wall.product)&&this.themeheight(1)}componentDidUpdate(t,e){const{wall:a}=this.props,{isDisplay:i,isEditor:s,Personalization:l,Banner:o,BannerImage:n}=a,r=(0,D.Qe)(),c=o.bannerUpdate!=t.wall.Banner.bannerUpdate||o.banner_position!=t.wall.Banner.banner_position||n.status!=t.wall.BannerImage.status;a.product!=t.wall.product&&this.setState({productUpdate:Math.random()}),a.product&&(this.responsiveUpdate=setTimeout((()=>this.onResponsiveTheme()),2e3)),s&&i&&(r||l.minimumPostWidth!=t.wall.Personalization.minimumPostWidth||this.props.themeUpdate||c)&&(this.responsiveUpdate=setTimeout((()=>{r||l.minimumPostWidth!=t.wall.Personalization.minimumPostWidth?this.onResponsiveTheme(1):this.themeheight()}),2e3))}componentWillUnmount(){this.responsiveUpdate&&clearTimeout(this.responsiveUpdate),this.heightMange&&clearTimeout(this.heightMange),window.removeEventListener("resize",this.themeheight)}render(){let{checkThemeheight:t,postWidth:e,productUpdate:a}=this.state,{postData:i,completeDataObject:s,wall:o,clickToShowPopUp:n,themeHeight:r,intractiveData:c}=this.props,{ThemeRule:d}=o;const{themeId:h}=d,m={backgroundColor:d.cardColor,padding:"".concat(d.spacing,"px"),borderRadius:"".concat(d.borderRadius,"px")};return(0,u.jsx)(u.Fragment,{children:t?(0,u.jsx)(T,{...this.props,children:(0,u.jsx)("div",{id:o.isDisplay?null:"".concat(62==h?"casecade":63==h?"focus":64==h?"exhibit":"pixel","_").concat(h),className:"".concat(66==h?"themeSquare":""," themeModrnWatrFall ").concat(o.isDisplay?"display":"widget"," ").concat(78==h?"roundeageTheme":""," waterfall-theme"),children:(0,u.jsx)("div",{id:"marqueecontainer",style:{overflow:o.isDisplay?"auto":"inherit",height:o.isDisplay?"calc(100vh - ".concat(r+4,"px)"):"auto"},children:(0,u.jsx)(l(),{id:"wPosts",className:"theme".concat(h),tabIndex:"0","aria-label":"There are ".concat(i&&i.length>0?i.length:0," posts in the feed"),elementType:"div",options:{percentPosition:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!0,enableResizableChildren:!0,children:i&&i.map(((t,a)=>{const i=s[t],l=o.displayEmbed||133693==o.Wall.owner?g:(0,k.d)(g);let r=!1;return e&&i&&Object.keys(i).length>0&&(66==h&&i.postFileNew?r=!0:66==h||!i.postFileNew&&o.ThemeRule.hideContent&&!i.rating||(r=!0)),r?(0,u.jsx)("div",{id:'"postId'.concat(i.id),className:"feedId".concat(i.feedId," postItem item flatCard   ").concat(65==h?"pixel65":"","  ").concat(i.network.name,"Taggbox ").concat(i.theme48&&"onlyTextCard"===i.theme48.class1?"onlyTextCard":""," completeFadeIn"),"data-post-id":i.id,"data-highlight":i.highlight,"data-pin":i.pin,style:{padding:d.padding/2,width:(i.highlight,e),margin:0,minWidth:0,left:0,top:0},"data-created":i.createdAt,children:(0,u.jsx)("div",{className:"post",style:m,children:(0,u.jsx)("div",{className:"postContent",children:(0,u.jsx)(l,{wall:o,itemData:i,itemIndex:a,clickToShowPopUp:n,intractiveData:c},a)})})},a):null}))})})})},a):null})}}const I=N},50247:()=>{}}]);