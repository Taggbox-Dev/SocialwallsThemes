(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1562,8342,9239,5790,5810,4261],{89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),i=a(17739),o=a(98935),n=a(46417);class r extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:a,network:s}=this.props;return(0,n.jsx)("div",{className:a,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(a,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,i.P)(e.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(o.Z,{authorClass:a,username:e.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>i});a(47313);var s=a(46417);const i=t=>{let{username:e,network:a}=t;return(0,s.jsx)("img",{className:"tb_nc_author_profile__",src:"https://ui-avatars.com/api/?name=".concat(function(t){if(t){var e=t.match(/[A-Za-z]/);return e?e[0]:""}return""}(e),"&background=000&color=fff&length=1"),alt:e,width:44,height:44})}},84261:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>d});var s=a(47313),i=a(64516),o=a(2406),n=a(17739),r=a(98501),l=a(46417);class d extends s.PureComponent{constructor(t){super(t),this.updateDimensions=()=>{let t=this.ImgWrap.current.getBoundingClientRect();t&&this.setState({newSize:{height:t.height.toFixed(),width:t.width.toFixed()}})},this.onMediaLoad=async t=>{const{data:e}=this.props,{imgUrl:a}=this.state;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({mediaSize:{height:e.mediaHeight,width:e.mediaWidth}});else try{const{width:t,height:e}=await(0,o.Ad)(a);this.setState({mediaSize:{height:e,width:t}})}catch(s){this.setState({loadError:!0,mediaSize:{height:100,width:100}})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,imgUrl:this.props.data.postFileNew,percentHeight:"100",newSize:{height:100,width:100},mediaSize:{height:100,width:100}},this.ImgWrap=s.createRef()}componentDidMount(){this.updateDimensions(),this.props.size||this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:a,themeID:s,ownerId:o,size:d}=this.props,{imgUrl:c,newSize:h,mediaSize:u}=this.state,p={paddingBottom:d?"".concat(d,"%"):100*u.height/u.width+"%"};return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:p,ref:this.ImgWrap,children:(0,l.jsx)("img",{className:t,role:"img",src:c,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":a,"data-owner-id":o,"data-item-id":e.id,"data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,i.ht)(t)},alt:(0,n.P)(c)})})}}},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(47313),i=a(46417);const o=s.lazy((()=>a.e(5867).then(a.bind(a,95867))));class n extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a}=this.props;return 1===a.iconType&&(7!==t.id&&4!==t.id)?(0,i.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:[69,65].includes(a.themeId)&&"#ffffff "==a.iconColor?"#000":a.iconColor},children:(0,i.jsx)("div",{})}):(0,i.jsxs)(s.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(o,{network:t,ThemeRule:a,networkClass:e})]})}}},62245:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var s=a(47313),i=a(16390),o=a(17739),n=a(30584),r=a(46417);class l extends s.PureComponent{render(){const{contentClass:t,content:e,ThemeRule:a,font:l,personalization:d,item:c,contentTitle:h}=this.props;let u=20==c.network.id?e:(0,o.Fx)(e);return 12==c.network.id&&(u=(0,i.ZP)(u)),(0,r.jsxs)("div",{className:"".concat(t," tb-cTBfont- ").concat(a.font_varient),style:{fontFamily:a.css_font,fontSize:l.fontsize,color:l.fontColor},children:[h?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(h)}):null,(0,r.jsxs)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(n.Z,{data:c,content:u,Personalization:d},u)]})]})}}},30584:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var s=a(47313),i=a(91523),o=a(16390),n=a(46417);const r=a(77560),l=(t,e)=>(0,n.jsx)(i.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,o.ZP)(t)}),d=t=>{let{data:e,content:a,Personalization:s,ThemeRule:i}=t;const d={color:s.hashtag_color,fontWeight:"bold",backgroundColor:1==s.hashtag_background_status?s.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,n.jsx)(n.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?l(window.slackdown.parse(r(a,/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:d,children:["#",t]}))),e.slackMember),i):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?l(window.slackdown.parse(r(a,e.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:d,children:t}))),e.slackMember),i):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?l(window.slackdown.parse(r(a,/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:d,children:["#",t]},e))),e.slackMember),i):l(window.slackdown.parse(a,e.slackMember),i)}):(0,n.jsx)(n.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?r((0,o.ZP)(a),/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:d,children:["#",t]}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?r((0,o.ZP)(a),e.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:d,children:t}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?r((0,o.ZP)(a),/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:d,children:["#",t]},e))):l(a,i)})},c=(0,s.memo)(d)},55790:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),i=a(17739),o=a(46417);const n=t=>{const{postTime:e,timeClass:a,authorNameStyle:n}=t,r=(0,s.useMemo)((()=>(0,i.Sy)(e)),[]);return(0,o.jsx)("div",{className:a,style:n,children:r})},r=(0,s.memo)(n)},12465:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>x});var s=a(47313),i=a(61395),o=a.n(i),n=a(89239),r=a(55790),l=a(46417);const d=t=>{let{author:e,personalization:a,postTime:s,network:i,ThemeRule:o,ownerId:d}=t;const c=e.username&&e.username.length>0?"@".concat(e.username):"",h={color:o.authorColor},u={backgroundColor:o.authorColor},p=!(!a.postAuthor||e.isInstaUser),m=!(!a.postAuthor||!a.postTime||e.isInstaUser);return(0,l.jsx)("div",{className:"tb_gp_author_wrapper",children:(0,l.jsxs)("div",{className:"tb_gp_author",children:[p||100231===d?(0,l.jsx)(n.default,{author:e,authorClass:"tb_gp_author_profile",network:i}):"",(0,l.jsxs)("div",{className:"tb_gp_author_info",children:[p||100231===d?(0,l.jsx)("div",{className:"tb_gp_authorname",style:h,children:e.name}):"",(0,l.jsxs)("div",{className:"tb_gp_post_info".concat(m?"":" tb_gp_post_info__"),children:[p||100231===d?(0,l.jsx)("div",{className:"tb_gp_username",style:h,children:c}):"",m?(0,l.jsx)("div",{className:"tb_gp_seprator",style:u,children:" "}):"",a.postTime?(0,l.jsx)(r.default,{postTime:s,timeClass:"tb_gp_time",authorColor:o.authorColor}):""]})]})]})})};var c=a(84261);class h extends s.PureComponent{constructor(t){super(t),this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={imgUrl:t.itemData.postFileNew}}componentDidMount(){const{itemData:t}=this.props;this.setState({imgUrl:t.postFileNew})}componentWillReceiveProps(t){const{itemData:e}=t;this.setState({imgUrl:e.postFileNew})}render(){const{itemData:t,wallID:e,themeID:a,ownerId:s}=this.props,i=3===t.type||5===t.type,o=7===t.network.id,n=!!(t.imageList&&t.imageList.length>0),r=!t.imageList||3!==t.type&&5!==t.type?"tb_gp_multi_images_ico":"tb_gp_multi_images_ico_bottom",d=1===t.isAudio;return(0,l.jsxs)("div",{className:"tb_gp_media_wrap",children:[n?(0,l.jsx)("div",{className:"".concat(r," tb__icon tb-multiple"),children:" "}):"",i?o?(0,l.jsxs)("div",{className:"tb_gp_youtube_ico tb__icon tb-youtube-default",children:[(0,l.jsx)("div",{className:"tb_color_icon__ tb_d_youtube_path_1",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_color_icon__ tb_d_youtube_path_2",children:(0,l.jsx)("div",{})})]}):d?(0,l.jsx)("div",{className:"tb_gp_audio_ico tb__icon tb-audio",children:(0,l.jsx)("div",{})}):(0,l.jsx)("div",{className:"tb_gp_video_ico tb__icon tb-video",children:(0,l.jsx)("div",{})}):"",(0,l.jsx)(c.default,{ImageClass:"tb_gp_image",data:t,wallID:e,themeID:a,ownerId:s,size:100})]})}}var u=a(62245),p=a(25810),m=a(17739),g=a(35179);class _ extends s.PureComponent{constructor(t){super(t),this.cardSize=s.createRef()}componentDidMount(){const t=document.querySelector(".tb_gp_post_container");setTimeout((()=>{this.cardSize.current.offsetWidth<250&&t.classList.add("tb_gp_post_wrapper2x"),this.cardSize.current.offsetWidth<120&&t.classList.add("tb_gp_post_wrapper1x"),g.nX&&(0,m.YN)(this.cardSize)}),100)}render(){const{itemData:t,personalization:e,adjustWidth:a,ThemeRule:s,clickToShowPopUp:i,itemIndex:o,wallID:n,ownerId:r}=this.props,c={backgroundColor:s.cardColor},m={width:"".concat(a,"%"),padding:e.padding/2},g={backgroundColor:t.font.cardColor},_=2===t.type||3===t.type||4===t.type||5===t.type,w=7===t.network.id;return(0,l.jsx)("div",{id:"tb-gp-post-".concat(t.id),"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,className:"tb_gp_post_wrapper",style:m,"tb-network":t.network.id,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(o)+1,",").concat(t.content),ref:this.cardSize,children:(0,l.jsx)("div",{className:"tb_gp_post_in",style:g,onClick:i(o,t),children:(0,l.jsxs)("div",{className:"tb_gp_post_media_wrapp",children:[_?(0,l.jsx)(h,{itemData:t,wallID:n,themeID:e.widgetTheme,ownerId:r}):"",w?"":(0,l.jsx)("div",{className:"tb_gp_contant_",children:(0,l.jsxs)("div",{className:"tb_gp_contant__in",children:[(0,l.jsxs)("div",{className:"tb_gp_content__",children:[(0,l.jsx)(d,{adjustWidth:a,postTime:t.createdAt,network:t.network,ownerId:r,author:t.author,font:t.font,personalization:e,ThemeRule:s}),t.hideContent?"":(0,l.jsx)(u.default,{item:t,contentClass:"tb_gp_content",content:t.content,font:t.font,ThemeRule:s,personalization:e,contentTitle:t.contentTitle})]}),(0,l.jsx)("div",{className:"tb_gp_post_overlay",style:c,children:(0,l.jsx)("div",{})})]})}),(0,l.jsx)("div",{className:"tb_gp_social_",children:w?"":(0,l.jsx)(p.default,{networkClass:"tb_gp_social__ico",network:t.network,ThemeRule:s,font:t.font})})]})})})}}var w=a(43411),f=a(64516);class b extends s.PureComponent{constructor(){super(...arguments),this.state={postData:[],windowWidth:window.innerWidth,containerWidth:0,loadData:0},this.onLoadMasonry=()=>{var t=document.querySelector(".tb_gp_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}},this.calculationData=(t,e,a,s)=>t>s&&t>s+a?{totalPostBestFit:s+a,isLastRow:!0}:{totalPostBestFit:s,isLastRow:!1}}componentDidMount(){const{postData:t,renderId:e}=this.props;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),e.renderId&&this.setState({windowWidth:document.getElementById(e.renderId).clientWidth})}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:a,wall:s,clickToShowPopUp:i,cardNumber:n,onClickToCTA:r}=this.props,{windowWidth:d,loadData:c}=this.state;var h={totalPostBestFit:0,isLastRow:!1};let u=0===s.ThemeRule.numberOfCoumn?Math.trunc(n)>5?5:Math.trunc(n):s.ThemeRule.numberOfCoumn;if(t.length>parseInt(n)){let e=parseInt(n);4===u?e=9:2===u?e=3:3===u?e=6:5===u&&(e=12),d<768&&(e=parseInt(n));let a=t.length/parseInt(e);h=parseInt(e)*parseInt(a),h=this.calculationData(t.length,e,u,h)}let p=0===s.ThemeRule.numberOfCoumn?Math.trunc(n)>5?5:Math.trunc(n)+1:s.ThemeRule.numberOfCoumn+1;return(0,l.jsx)(o(),{className:"tb_gp_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_gp_post_wrapper",resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:c?t&&t.length>0&&t.map(((t,o)=>{const n=e[t];let d=a;if(3===u&&p===o+1){d=2*a,p=p+2*u}else if(2===u&&p===o+1){d=2*a,p=p+(u+1)}else if(4===u&&p===o+1){d=2*a,p=p+(2*u+1)}else if(5===u&&p===o+1){d=2*a,p=p+(2*u+2)}return parseInt(h.totalPostBestFit)>=parseInt(o+1)||0===parseInt(h.totalPostBestFit)?(0,l.jsx)(_,{ownerId:s.Wall.owner,itemData:n,itemIndex:o,adjustWidth:d,personalization:s.Personalization,ThemeRule:s.ThemeRule,clickToShowPopUp:i,wallID:s.Wall.id,onClickToCTA:r},o):null})):null})}}const x=(0,w.$j)(null,(t=>({managePostHeight:e=>t((0,f.B0)(e))})))(b)},61729:(t,e,a)=>{"use strict";var s=a(79165);function i(){}function o(){}o.resetWarningCache=i,t.exports=function(){function t(t,e,a,i,o,n){if(n!==s){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function e(){return t}t.isRequired=t;var a={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:i};return a.PropTypes=a,a}},75192:(t,e,a)=>{t.exports=a(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2406:(t,e,a)=>{"use strict";e.Ad=void 0;var s=a(84228);var i=a(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return i.getImageSize}});var o=a(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,a)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=a(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((a,i)=>{if("undefined"===typeof window)return i(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return i(s.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const n=new Image;n.addEventListener("load",(()=>{o&&window.clearTimeout(o),a({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{o&&window.clearTimeout(o),i("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(o=window.setTimeout((()=>i(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,a){"use strict";var s=this&&this.__awaiter||function(t,e,a,s){return new(a||(a=Promise))((function(i,o){function n(t){try{l(s.next(t))}catch(e){o(e)}}function r(t){try{l(s.throw(t))}catch(e){o(e)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(n,r)}l((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const i=a(47313),o=a(65786);e.useImageSize=(t,e)=>{const[a,n]=(0,i.useState)(null),[r,l]=(0,i.useState)(!1),[d,c]=(0,i.useState)(null);return(0,i.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){l(!0),n(null);try{const{width:a,height:s}=yield(0,o.getImageSize)(t,e);n({width:a,height:s})}catch(d){c(d.toString())}finally{l(!1)}}))}),[t,e]),[a,{loading:r,error:d}]}},50247:()=>{}}]);