(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5555,9239,5790,5810],{19142:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>p});var s=a(47313),l=a(92789),i=a.n(l),n=a(98255),o=a(33305),r=a(32929),d=a(80381),h=a(17739),c=a(46417);class m extends s.PureComponent{constructor(){var t;super(...arguments),t=this,this.state={themeHeightMange:this.props.themeHeight,randomkey:0,themeHeightCheck:!this.props.wall.isDisplay},this.onFullscreenChange=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{themeHeight:a,heightUpdate:s}=t.props;e&&t.setState({themeHeightCheck:!0}),setTimeout((()=>{s(),t.setState({themeHeightMange:a,randomkey:Math.random()})}),100)}}componentDidMount(){const{wall:t,themeHeight:e}=this.props;t.isDisplay&&(window.addEventListener("resize",(()=>this.setState({themeHeightMange:e})),(()=>this.onFullscreenChange)),document.addEventListener("fullscreenchange",(()=>this.setState({themeHeightMange:e})),(()=>this.onFullscreenChange),!1),this.setState({themeHeightMange:e},(()=>this.onFullscreenChange(1))))}componentDidUpdate(t,e){const{wall:a,themeHeight:s}=this.props;a.isDisplay&&((0,h.hz)()?a.Banner.bannerUpdate==t.wall.Banner.bannerUpdate&&a.Banner.banner_position==t.wall.Banner.banner_position&&a.BannerImage.status==t.wall.BannerImage.status||this.onFullscreenChange():this.setState({themeHeightMange:s}))}render(){const{itemData:t,ThemeRule:e,personalization:a,clickToShowPopUp:l,itemIndex:i,wall:h,keyRender:m,id:u,intractiveData:p}=this.props,{themeHeightMange:g,themeHeightCheck:_}=this.state;let w=!![2,3,4,5].includes(t.type);const y={backgroundColor:e.cardColor},b=32==e.numberOfCoumn?4:8==e.numberOfCoumn?2:3,f=h.Personalization.interactive,x={padding:"".concat(e.padding/2,"px"),height:h.isDisplay?"".concat((window.innerHeight-g)/b,"px"):""},v={borderRadius:"".concat(e.borderRadius,"px")};return(0,c.jsxs)(c.Fragment,{children:[" ",_?(0,c.jsx)("div",{id:u,className:"tb_ap_post_wrapper ".concat(f?"intractive_on":""," "),"tb-network":t.network.id,style:x,children:(0,c.jsx)("div",{className:"tb_ap_post_in","data-aos":null!==t&&void 0!==t&&t.stopAnimation?null:"zoom-in-up","data-aos-delay":"0","data-aos-duration":"2000","data-aos-offset":"0",onClick:l(i,t),children:(0,c.jsxs)("div",{className:"tb_ap_post_media_wrapp",style:v,children:[w?(0,c.jsx)(r.Z,{keyRender:m,itemData:t,wall:h},"".concat(m,"-media")):"",(0,c.jsx)("div",{className:"overlay-main","data-aos":"zoom-in","data-aos-easing":"ease-out-cubic","data-aos-delay":"2000","data-aos-duration":"2000","data-aos-offset":"0",children:(0,c.jsxs)("div",{className:"tb_ap_post_overlay",style:y,children:[e.captionStatus||65==e.themeId?null:(0,c.jsxs)("div",{className:"tb_mwf_contant_wrapper",children:[66==e.themeId?(0,c.jsx)(n.Z,{ThemeRule:e,postData:t}):null,e.hideContent||63==e.themeId?null:(0,c.jsx)(o.Z,{item:t,wall:h,ThemeRule:e,personalization:a,contentTitle:t.contentTitle},t.id)]}),66!=e.themeId?(0,c.jsx)(n.Z,{ThemeRule:e,postData:t}):null,(0,c.jsx)("div",{})]})}),!h.isDisplay&&f?(0,s.createElement)(d.Z,{isCard:!0,postId:t.id,intractiveData:p,userDetail:h.UserDetail,wallId:h.Wall,interactiveCount:t.interactiveCount,isDisplay:h.isDisplay,interactive:f,interactiveStatus:h.Personalization.interactiveStatus,key:Math.random()*t.id}):null]},"".concat(i,"-media"))})}):null," "]})}}class u extends s.PureComponent{constructor(){super(...arguments),this.state={postData:[],postDataUpdate:[],postDataContent:[],tempArray:[],rowCount:0,slideData:0},this.dataFilter=t=>{const{wall:e}=this.props,a=t&&t.length>0&&t.map(((t,e)=>this.props.completeDataObject[t])),s=e.ThemeRule.numberOfCoumn&&e.ThemeRule.numberOfCoumn>5?e.ThemeRule.numberOfCoumn:6,l=a&&a.map(((t,e)=>e<s&&t.postFileNew?{...t,stopAnimation:!0}:t)),i=l&&l.filter((t=>t.file&&""!=t.file&&t));e.isDisplay?this.setState({postDataContent:i.filter(((t,e)=>e<s)),tempArray:a.slice(0,s),postDataUpdate:i,rowCount:s},(()=>this.addClass())):this.setState({postDataContent:i,tempArray:a.slice(0,s),postDataUpdate:i,rowCount:s})},this.clearData=()=>this.setState({slideData:1}),this.addClass=()=>{const{postDataUpdate:t,rowCount:e,slideData:a}=this.state,{postData:s,wall:l}=this.props;if(e<t.length&&!a)for(let i=1;i<=t.length;i++)setTimeout((()=>{const{postDataContent:t,postDataUpdate:a,tempArray:l}=this.state;let n=[...a];const o=(i-1)%e,r=a.length-i;let d=a[r];if(r<t.length&&(d=l.pop()),n[o]=d,a[o]=d,this.setState((t=>({...t,postDataContent:n.slice(0,e),postDataUpdate:a}))),i==a.length){const t=s&&s.length>0&&s.map(((t,e)=>this.props.completeDataObject[t])),a=t.map(((t,a)=>a<e?{...t,stopAnimation:!0}:t));this.setState({postDataContent:a.filter(((t,a)=>a<e)),tempArray:t.slice(0,e),postDataUpdate:a,rowCount:e},(()=>this.addClass()))}}),l.ThemeRule.slideDelay?1e3*l.ThemeRule.slideDelay*i:1e4*i)}}componentDidMount(){window.clearData=this.clearData,i().init(),this.dataFilter(this.props.postData)}componentWillReceiveProps(t){const{postData:e}=t;e&&e.length!=this.state.postData.length&&this.setState({postData:e},(()=>{this.props.wall.isDisplay||this.dataFilter(this.state.postData)}))}render(){const{wall:t,clickToShowPopUp:e,onClickToCTA:a,heightUpdate:s,themeHeight:l,intractiveData:i}=this.props,{postDataContent:n}=this.state,o=t.ThemeRule.numberOfCoumn&&t.ThemeRule.numberOfCoumn>5?t.ThemeRule.numberOfCoumn:8;return n&&n.length>0?(0,c.jsx)("div",{id:"".concat(66==t.ThemeRule.themeId?"squre":67==t.ThemeRule.themeId?"pixel":"reels","_").concat(t.ThemeRule.themeId),className:"tb_ap_post_container clearfix ".concat(t.isDisplay?"display":"embed"),children:(0,c.jsx)("div",{className:"tb_ap_post_row",children:(0,c.jsx)("div",{className:"tb_ap_post_small ".concat(6==o?"size3x2":18==o?"size6x3":32==o?"size8x6":"size4x2"),children:n.map(((n,o)=>(0,c.jsx)(m,{heightUpdate:s,themeHeight:l,ownerId:t.Wall.owner,itemData:n,itemIndex:o,personalization:t.Personalization,ThemeRule:t.ThemeRule,wall:t,clickToShowPopUp:e,onClickToCTA:a,intractiveData:i},n.id)))})})},n):null}}const p=u},89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var s=a(47313),l=a(17739),i=a(98935),n=a(46417);class o extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:a,network:s}=this.props;return(0,n.jsx)("div",{className:a,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(a,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,l.P)(e.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(i.Z,{authorClass:a,username:e.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});a(47313);var s=a(46417);const l=t=>{let{username:e,network:a}=t;return(0,s.jsx)("img",{className:"tb_nc_author_profile__",src:"https://ui-avatars.com/api/?name=".concat(function(t){if(t){var e=t.match(/[A-Za-z]/);return e?e[0]:""}return""}(e),"&background=000&color=fff&length=1"),alt:e,width:44,height:44})}},98255:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(47313),l=a(89239),i=a(55790),n=a(25810),o=a(46417);class r extends s.PureComponent{render(){var t,e,a;const{ThemeRule:s,postData:r}=this.props,d=null!==(t=null===r||void 0===r?void 0:r.createdAt)&&void 0!==t?t:"",h=null!==(e=null===r||void 0===r?void 0:r.author)&&void 0!==e?e:"",c=null!==(a=null===r||void 0===r?void 0:r.network)&&void 0!==a?a:"",m={color:s.authorColor,fontFamily:s.authorFont,fontStyle:s.authorFontVariant},u={backgroundColor:s.authorColor},p=!(!r||!s.postAuthor||h.isInstaUser),g=!(!s.postAuthor||!s.postTime);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"tb_mwf_author_wrapper",children:[p||s.postTime?(0,o.jsxs)("div",{className:"tb_mwf_author",children:[p?(0,o.jsx)(l.default,{network:c,author:h,authorClass:"tb_mwf_author_profile"},h.username):"",(0,o.jsxs)("div",{className:"tb_mwf_author_info",children:[p?(0,o.jsx)("div",{className:"tb_mwf_authorname tb-cTBfont-".concat(s.authorFontVariant?s.authorFontVariant:null),style:m,children:(0,o.jsx)("strong",{children:h.name})}):"",(0,o.jsxs)("div",{className:"tb_mwf_post_info",children:[p&&![74,76,77].includes(s.themeId)?(0,o.jsx)("div",{className:"tb_mwf_username tb-cTBfont-".concat(s.authorFontVariant),style:m,children:h.username}):"",g&&p?(0,o.jsx)("div",{className:"tb_mwf_seprator",style:u,children:" "}):"",s.postTime?(0,o.jsx)(i.default,{postTime:d,timeClass:"tb_mwf_time",authorNameStyle:m}):""]})]})]}):null,c.id&&s.socialAction?(0,o.jsx)("div",{className:"tb_mwf_social_",style:{borderBottom:78==s.themeId?"60px solid ".concat(1==s.iconType?s.iconColor:c.color):"inherit"},children:(0,o.jsx)(n.default,{networkClass:"tb_mwf_social_ico",network:c,ThemeRule:s})}):null]})," "]})}}},32929:(t,e,a)=>{"use strict";a.d(e,{Z:()=>m});var s=a(47313),l=a(64516),i=a(71843),n=a.n(i);const o=t=>{let{url:e,allowFullScreen:a,position:l,display:i,height:o,width:r,overflow:d,styles:h,onLoad:c,onMouseOver:m,onMouseOut:u,scrolling:p,id:g,frameBorder:_,ariaHidden:w,sandbox:y,allow:b,className:f,title:x,ariaLabel:v,ariaLabelledby:k,name:C,target:j,loading:D,importance:T,referrerpolicy:N,allowpaymentrequest:S,src:R,key:F}=t;const P=n()({src:R||e,target:j||null,style:{position:l||null,display:i||"initial",overflow:d||null},scrolling:p||null,allowpaymentrequest:S||null,importance:T||null,sandbox:y&&[...y].join(" ")||null,loading:D||null,styles:h||null,name:C||null,className:f||null,allowFullScreen:"allowFullScreen",referrerpolicy:N||null,title:x||null,allow:b||null,id:g||null,"aria-labelledby":k||null,"aria-hidden":w||null,"aria-label":v||null,width:r||null,height:o||null,onLoad:c||null,onMouseOver:m||null,onMouseOut:u||null,key:F||"iframe"});let I=Object.create(null);for(let s of Object.keys(P))null!=P[s]&&(I[s]=P[s]);for(let s of Object.keys(I.style))null==I.style[s]&&delete I.style[s];if(I.styles)for(let s of Object.keys(I.styles))I.styles.hasOwnProperty(s)&&(I.style[s]=I.styles[s]),Object.keys(I.styles).pop()==s&&delete I.styles;if(a)if("allow"in I){const t=I.allow.replace("fullscreen","");I.allow="fullscreen ".concat(t.trim()).trim()}else I.allow="fullscreen";return _>=0&&(I.style.hasOwnProperty("border")||(I.style.border=_)),s.createElement("iframe",Object.assign({},I))};var r=a(20510),d=a.n(r),h=a(46417);class c extends s.PureComponent{constructor(t){super(t),this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.handleDuration=t=>{const{getVideoDuration:e,wall:a}=this.props;([74,76,77].includes(a.ThemeRule.themeId)&&1===a.Personalization.playFullVideo||t<a.Personalization.slideDelay)&&e(t)},this.state={imgUrl:t.itemData.postFileNew,videoLoaded:!1},this.myRef=s.createRef()}componentDidMount(){const{itemData:t,getVideoDuration:e,wall:a}=this.props,s=document.getElementById("".concat(t.id,"-media-player"));s&&[74,76,77].includes(a.ThemeRule.themeId)&&s.addEventListener("loadedmetadata",(()=>{e(s.duration<a.Personalization.slideDelay||1===a.Personalization.playFullVideo?s.duration:a.Personalization.slideDelay)}))}render(){const{itemData:t,wall:e,autoplayVideo:a=!0}=this.props,{id:s}=e.Wall,{imgUrl:i,videoLoaded:n}=this.state,{type:r,network:c,imageList:m,link:u,filterId:p,mediaUrl:g,stories:_,postFileNew:w,networkId:y,mediaClip:b}=t,f=t.id,x=e.isDisplay,v=3===r||5===r,k=2===r||4===r,C=!!(t.mediaClip&&"undefined"!=t.mediaClip&&String(t.mediaClip).length>0),j=!(x||!v||!e.ThemeRule.autoPlay||!C),D=7===c.id,T=!!(m&&m.length>0),N=T&&v?"tb_fc_multi_images_ico_bottom":"tb_fc_multi_images_ico";t.mediaUrl=(x||j)&&C?t.mediaClip:t.mediaUrl;const S=x?a:j,R=!x&&(!!(e.User&&Object.keys(e.User).length>0)&&143031==e.User.id);return(0,h.jsxs)("div",{className:"tb_fc_media_wrap mediaHolder".concat(f),role:"img","aria-label":"Post Image",style:{height:"100%",background:"#000000"},children:[T&&!x?(0,h.jsx)("div",{className:"".concat(N," tb__icon tb-multiple"),children:" "}):null,v&&!x?D?(0,h.jsx)("div",{className:"tb_fc_youtube_ico tb__icon tb-youtube",children:" "}):(0,h.jsx)("div",{className:"tb_fc_video_ico tb__icon tb-reels",children:" "}):null,k?(0,h.jsx)("img",{loading:"lazy",src:i,"data-link":u,"data-load":"0","data-network":c.id,"data-wall-id":s,"data-item-id":f,"data-filter-id":p,onLoad:this.onLoad,draggable:!1,onError:t=>(0,l.ht)(t),style:{height:"100%"},width:"300px",height:"300px"}):u&&y&&30==y&&u.indexOf("vk")>=0?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(o,{className:"tb-detail-image-iframe",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",src:"".concat(g,"&autoplay=1&mute=1"),allowFullScreen:"true",style:{width:"100%!important"},"data-filter-id":p,"data-stories":_,"data-type":"video","data-network":y,"data-link":u,"data-item-id":f,"data-load":0,draggable:!1,height:"1000",width:"1000"})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{loading:"lazy",src:w,"data-load":"0","data-network":c.id,"data-wall-id":s,"data-item-id":f,"data-filter-id":p,onLoad:this.onLoad,draggable:!1,onError:t=>{(0,l.ht)(t)},style:{width:"100%",height:"100%"},width:"300px",height:"300px"}),(0,h.jsx)("div",{className:"card_video__01",style:{display:n?"none":"block",opacity:n?0:1,width:"100%",height:"100%"},children:3!=y?(0,h.jsx)("video",{poster:w,id:"".concat(t.id,"-media-player"),ref:this.myRef,src:a?"".concat(t.mediaUrl):null,autoPlay:S,"webkit-playsinline":S,playsinline:S,muted:!0,loop:1,onError:t=>{this.setState({videoLoaded:!0})},"data-type":"video","data-network":y,"data-filter-id":p,"data-link":u,"data-load":0,"data-tb":e.UserDetail.db_table,"data-wall-id":e.Wall.id,"data-item-id":f,"data-owner-id":e.Wall.owner,height:"400",width:"400",controls:R},"".concat(this.props.keyRender,"-media-player")):(0,h.jsx)(d(),{poster:w,onDuration:this.handleDuration,style:{display:"contents",width:"".concat(4.8,"vw"),height:"".concat(.3*9,"vw")},className:"tb_post_vid_005",url:"".concat(b&&"undefined"!=b&&String(b).length>0?b:g),playing:!!x,loop:!0,muted:!0,controls:R,onReady:t=>x?this.setState({videoLoaded:!1}):null},"".concat(this.props.keyRender,"-media-player"))})]})]})}}const m=(0,s.memo)(c)},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(47313),l=a(46417);const i=s.lazy((()=>a.e(5867).then(a.bind(a,95867))));class n extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a}=this.props;return 1===a.iconType&&(7!==t.id&&4!==t.id)?(0,l.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:a.iconColor},children:(0,l.jsx)("div",{})}):(0,l.jsxs)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[" ",(0,l.jsx)(i,{network:t,ThemeRule:a,networkClass:e})]})}}},30584:(t,e,a)=>{"use strict";a.d(e,{Z:()=>h});var s=a(47313),l=a(91523),i=a(16390),n=a(46417);const o=a(77560),r=t=>(0,n.jsx)(l.default,{children:(0,i.ZP)(t)}),d=t=>{let{data:e,content:a,Personalization:s}=t;const l={color:s.hashtag_color,fontWeight:"bold",backgroundColor:1==s.hashtag_background_status?s.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,n.jsx)(n.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,i.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?r(window.slackdown.parse(o(a,/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:l,children:["#",t]}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?r(window.slackdown.parse(o(a,e.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:l,children:t}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?r(window.slackdown.parse(o(a,/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:l,children:["#",t]},e))),e.slackMember)):r(window.slackdown.parse(a,e.slackMember))}):(0,n.jsx)(n.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,i.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?o((0,i.ZP)(a),/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:l,children:["#",t]}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?o((0,i.ZP)(a),e.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:l,children:t}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?o((0,i.ZP)(a),/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:l,children:["#",t]},e))):r(a)})},h=(0,s.memo)(d)},33305:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(47313),l=a(16390),i=a(17739),n=a(30584),o=a(46417);class r extends s.PureComponent{constructor(t){super(t),this.updateText=()=>{const{ThemeRule:t}=this.props;[74,76,77].includes(t.themeId)&&((0,i.OX)(t.trimcontent),setTimeout((()=>this.setState({loadContent:!0})),100))},this.state={loadContent:![74,76,77].includes(t.ThemeRule.themeId)}}render(){const{ThemeRule:t,personalization:e,item:a,contentTitle:s,largeBlock:r,wall:d}=this.props,{loadContent:h}=this.state,c=t.font_varient?t.font_varient.split("-"):{},m=c.length>1?c[1]:"",u=3==t.captionFontWeight?"bold":2==t.captionFontWeight?"600":1==t.captionFontWeight?"100":c.length>0?c[0].includes("regular")?"normal":c[0]:"",p=t.css_font?t.css_font:"",g="".concat(t.fontSize&&![74,76,77,68].includes(t.themeId)?"".concat(t.fontSize,"px"):"inherit"),_={color:t.fontColor,fontWeight:u,fontFamily:p,fontStyle:m},w={font:68!=t.themeId?"".concat(m):"",WebkitLineClamp:t.trimcontent?r?10:78==t.themeId?6:3:"",display:t.trimcontent?"-webkit-box":"block",fontSize:g},y=d.isDisplay||20==a.network.id?a.content:(0,i.Fx)(a.content);return(0,o.jsx)("div",{id:"tb-ss-post--card".concat(a.id),className:"post-card-outer tb-cTBfont- ".concat(t.font_varient),"aria-label":"Post Content",style:_,children:(0,o.jsx)("div",{className:"resize",style:w,onLoad:this.updateText(),children:h?(0,o.jsxs)(o.Fragment,{children:[s?(0,o.jsx)("div",{className:"tb_bold_txt__",children:(0,l.ZP)(s)}):null,(0,o.jsx)(n.Z,{data:a,content:y,Personalization:e},a.id),"   "]}):null})})}}},55790:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var s=a(47313),l=a(17739),i=a(46417);const n=t=>{const{postTime:e,timeClass:a,authorNameStyle:n}=t,o=(0,s.useMemo)((()=>(0,l.Sy)(e)),[]);return(0,i.jsx)("div",{className:a,style:n,children:o})},o=(0,s.memo)(n)},50247:()=>{}}]);