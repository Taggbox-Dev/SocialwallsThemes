(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[323,8342,9239,5790,5810],{22990:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>m});var i=a(47313),s=a(20510),o=a.n(s),n=a(98501),l=(a(62245),a(89239),a(55790),a(25810),a(46417));var r=a(17739),d=a(16031),h=a.n(d);const c=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class u extends i.Component{constructor(t){super(t),this.handlePlay=()=>{this.setState({isPlaying:!0})},this.onMediaLoad=async t=>{if(t.mediaHeight&&t.mediaWidth)this.setState({mediaSize:{height:t.mediaHeight,width:t.mediaWidth}});else try{const{width:e,height:a}=await(0,r.O5)(t.postFile);this.setState({mediaSize:{height:a,width:e}})}catch(e){this.setState({mediaSize:{height:100,width:100}})}},this.state={imageError:!1,windowWidth:window.innerWidth,windowHeight:window.innerHeight,mediaSize:{height:400,width:400},animate:!1,itemData:null,isPlaying:!1}}componentDidMount(){this.onLoadAnimation()}componentDidUpdate(t){h().isEqual(t.itemData,this.props.itemData)||(this.setState({itemData:this.props.itemData,animate:!1}),this.onLoadAnimation())}onLoadAnimation(){setTimeout((()=>{this.setState({animate:!0}),this.onMediaLoad(this.props.itemData)}),1e3)}render(){const{itemData:t,wall:e}=this.props,{imageError:a,windowHeight:i,windowWidth:s,mediaSize:r,animate:d,isPlaying:h}=this.state,u=s>i?((i-400)/50).toFixed():((i/2-200)/50).toFixed(),m=1!==t.type,g=3===t.type||5===t.type;let p="".concat(t.postFile);!(!a&&""!=t.mediaFile)||1==t.type&&t.type;const v=Math.min(s/r.width,i/r.height),_=r.height*v,w=r.width*v,f={paddingBottom:"".concat(100*_/w,"%")};return t.mediaFile.includes(n.ho)&&(p=t.postFile),(0,l.jsxs)("div",{id:"spotlight__",className:"sl_container",children:[(0,l.jsx)("div",{className:"sl_overlay_ ".concat(d?"sl_media_ani":""),style:{backgroundImage:"url(".concat(p,")")}}),(0,l.jsx)("div",{className:"sl_wrap",children:(0,l.jsx)("div",{className:"sl_wrap_row sl_only_text",children:m?(0,l.jsx)("div",{className:"sl_media_wrap ".concat(d?"sl_media_ani":""),style:{maxWidth:w},children:g?(0,l.jsxs)("div",{className:"sl_media_wrap_",style:f,children:[!h&&(0,l.jsx)("img",{src:t.postFile,alt:"Video Poster",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",cursor:"pointer",zIndex:1},onLoad:this.handlePlay}),(0,l.jsx)(o(),{url:c(t.mediaUrl,t.networkId),config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto",muted:!0,poster:t.postFile}},file:{forceVideo:!0,attributes:{muted:!0,poster:t.postFile}}},className:"sl_media_",loop:!0,autoPlay:!0,muted:!0,volume:1,playsinline:!0,playing:!0,height:"100%",width:"100%",controls:!1})]}):(0,l.jsx)("div",{className:"sl_media_wrap_",style:f,children:(0,l.jsx)("img",{className:"sl_media_",src:t.postFile,height:_,width:w})})}):null})})]})}}const m=(0,i.memo)(u)},89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var i=a(47313),s=a(17739),o=a(98935),n=a(46417);class l extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:a}=this.props;return(0,n.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:null!==t&&void 0!==t&&t.picture&&String(null===t||void 0===t?void 0:t.picture).includes("author.png")?" ":null===t||void 0===t?void 0:t.picture.replace(/[ ]+/g,""),alt:(0,s.P)(null===t||void 0===t?void 0:t.picture),width:44,height:44,onError:e=>{var i,s;const o="#ffffff"==(null===a||void 0===a?void 0:a.color)?"#000":null===a||void 0===a?void 0:a.color;e.target.src=null!==t&&void 0!==t&&t.errorPic?null===t||void 0===t?void 0:t.errorPic:"https://ui-avatars.com/api/?name=".concat(null===t||void 0===t||null===(i=t.name)||void 0===i?void 0:i.replace(/\s/g,""),"&background=").concat(null===(s=String(null===(null===a||void 0===a?void 0:a.id)?"#000":o))||void 0===s?void 0:s.replace("#",""),"&color=fff&length=1"),e.target.alt=null===t||void 0===t?void 0:t.name}},Math.random()):(0,n.jsx)(o.Z,{authorClass:e,username:null===t||void 0===t?void 0:t.name,network:a,color:null===(null===a||void 0===a?void 0:a.id)?"#000":null===a||void 0===a?void 0:a.color,errorPic:null===t||void 0===t?void 0:t.errorPic})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var i=a(47313),s=a(46417);const o=t=>{let{username:e,network:a,authorClass:i,errorPic:o}=t;const n="#ffffff"==(null===a||void 0===a?void 0:a.color)?"#000":null===a||void 0===a?void 0:a.color;return(0,s.jsx)("img",{className:"".concat(i,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(null===e||void 0===e?void 0:e.replace(/\s/g,""),"&background=").concat(String(null===(null===a||void 0===a?void 0:a.id)?"#000":n).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},n=(0,i.memo)(o)},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var i=a(47313),s=a(35179),o=a(46417);const n=i.lazy((()=>a.e(5867).then(a.bind(a,95867))));class l extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,isDefault:l,Personalization:r}=this.props,d=!!l&&(7!==(null===t||void 0===t?void 0:t.id)&&4!==(null===t||void 0===t?void 0:t.id)&&36!==(null===t||void 0===t?void 0:t.id)),h=s.ZQ&&36===(null===t||void 0===t?void 0:t.id)?"tagembed":(null===t||void 0===t?void 0:t.icon)||"";return d?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(h.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(i.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(n,{network:t,networkClass:e})]})}}},62245:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>d});var i=a(47313),s=a(16390),o=a(17739),n=a(35179),l=a(30584),r=a(46417);class d extends i.PureComponent{constructor(t){super(t),this.contentRef=i.createRef()}componentDidMount(){n.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){var t,e;const{contentClass:a,content:i,ThemeRule:d,font:h,personalization:c,item:u,contentTitle:m,readMore:g,maxLength:p,textAlign:v,maxLines:_,isReadMore:w}=this.props,f={WebkitLineClamp:_,textAlign:d.textAlignment};let x=20==(null===u||void 0===u||null===(t=u.network)||void 0===t?void 0:t.id)||n.bX&&!n.aL?i:(0,o.Fx)(i);12==(null===u||void 0===u||null===(e=u.network)||void 0===e?void 0:e.id)&&(x=(0,s.ZP)(x));const y="".concat(d.lineTrim?" tb_content_line-".concat(d.lineTrim):""),b="".concat(a," ").concat(w?"":y);return(0,r.jsxs)("div",{className:b,ref:this.contentRef,style:f,children:[m?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,s.ZP)(m)}):null,(0,r.jsx)(l.Z,{data:u,content:x,Personalization:c,ThemeRule:d})]})}}},30584:(t,e,a)=>{"use strict";a.d(e,{Z:()=>h});var i=a(47313),s=a(91523),o=a(16390),n=a(46417);const l=a(77560),r=(t,e)=>(0,n.jsx)(s.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,o.ZP)(t)}),d=t=>{var e;let{data:a,content:i,Personalization:s,ThemeRule:d}=t;const h={color:s.hashtag_color,fontWeight:"bold",backgroundColor:1==s.hashtag_background_status?s.hashtag_background_color:"transparent"};return 20==(null===a||void 0===a||null===(e=a.network)||void 0===e?void 0:e.id)&&window.slackdown?(0,n.jsx)(n.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(i):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?r(window.slackdown.parse(l(i,/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:h,children:["#",t]}))),a.slackMember),d):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?r(window.slackdown.parse(l(i,a.hash.hashString,((t,e)=>(0,n.jsx)("div",{className:"tb_text_hashtag",style:h,children:t}))),a.slackMember),d):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?r(window.slackdown.parse(l(i,/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:h,children:["#",t]},"".concat(a.id,"_").concat(e)))),a.slackMember),d):r(window.slackdown.parse(i,a.slackMember),d)}):(0,n.jsx)(n.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(i):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?l((0,o.ZP)(i),/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:h,children:["#",t]}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?l((0,o.ZP)(i),a.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:h,children:t}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?l((0,o.ZP)(i),/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:h,children:["#",t]},"".concat(a.id,"_").concat(e)))):r(i,d)})},h=(0,i.memo)(d)},55790:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var i=a(47313),s=a(17739),o=a(46417);const n=t=>{const{postTime:e,timeClass:a}=t;return(0,o.jsx)("div",{className:a,children:(0,s.Sy)(e)})},l=(0,i.memo)(n)},61729:(t,e,a)=>{"use strict";var i=a(79165);function s(){}function o(){}o.resetWarningCache=s,t.exports=function(){function t(t,e,a,s,o,n){if(n!==i){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function e(){return t}t.isRequired=t;var a={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:s};return a.PropTypes=a,a}},75192:(t,e,a)=>{t.exports=a(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},50247:()=>{}}]);