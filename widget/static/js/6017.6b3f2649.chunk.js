(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[6017,8342,9239,5790,5810,4261],{71325:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>f});var s=a(47313),i=a(61395),o=a.n(i),c=a(89239),n=a(55790),r=a(25810),l=a(46417);const _=t=>{let{author:e,personalization:a,postTime:s,network:i,ThemeRule:o,font:_,ownerId:d}=t;const h=e.username&&e.username.length>0?"@".concat(e.username):"",m={color:o.authorColor},u={backgroundColor:o.authorColor},g=!(!a.postAuthor||e.isInstaUser),p=!(!a.postAuthor||!a.postTime||e.isInstaUser);return(0,l.jsxs)("div",{className:"tb_cc_author_wrapper",children:[(0,l.jsxs)("div",{className:"tb_cc_author",children:[g||100231===d?(0,l.jsx)(c.default,{author:e,network:i,authorClass:"tb_cc_author_profile"}):"",(0,l.jsxs)("div",{className:"tb_cc_author_info",children:[g||100231===d?(0,l.jsx)("div",{className:"tb_cc_authorname",style:m,children:e.name}):"",(0,l.jsxs)("div",{className:"tb_cc_post_info",children:[g||100231===d?(0,l.jsx)("div",{className:"tb_cc_username",style:m,children:h}):"",p?(0,l.jsx)("div",{className:"tb_cc_seprator",style:u,children:" "}):"",a.postTime?(0,l.jsx)(n.default,{postTime:s,timeClass:"tb_cc_time",authorColor:o.authorColor}):""]})]})]}),(0,l.jsx)("div",{className:"tb_cc_social_",children:(0,l.jsx)(r.default,{networkClass:"tb_cc_social_ico",network:i,ThemeRule:o,font:_})})]})};var d=a(84261);const h=t=>{let{itemData:e,wallID:a,ownerId:s}=t;const i=3===e.type||5===e.type,o=7===e.network.id,c=!!(e.imageList&&e.imageList.length>0),n=(e.imageList&&e.imageList.length)>0&&(3===e.type||5===e.type)?"tb_cc_multi_images_ico_bottom":"tb_cc_multi_images_ico",r=1===e.isAudio;return(0,l.jsxs)("div",{className:"tb_cc_media_wrap",children:[c?(0,l.jsx)("div",{className:"".concat(n," tb__icon tb-multiple"),children:(0,l.jsx)("div",{})}):"",i?o?(0,l.jsxs)("div",{className:"tb_cc_youtube_ico tb__icon tb-youtube-default",children:[(0,l.jsx)("div",{className:"tb_color_icon__ tb_d_youtube_path_1",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_color_icon__ tb_d_youtube_path_2",children:(0,l.jsx)("div",{})})]}):r?(0,l.jsx)("div",{className:"tb_cc_audio_ico tb__icon tb-audio",children:(0,l.jsx)("div",{})}):(0,l.jsx)("div",{className:"tb_cc_video_ico tb__icon tb-video",children:(0,l.jsx)("div",{})}):"",(0,l.jsx)(d.default,{ImageClass:"tb_cc_image",data:e,wallID:a,ownerId:s,size:!1})]})};var m=a(62245),u=a(7138),g=a(90905);const p=t=>{let{itemData:e,ThemeRule:a}=t;const s=(t,e)=>{t.stopPropagation(),e()},i={color:a.fontColor},o=e.network.id,c=3===o||10===o?"like-alt":"heart-alt",n=1===o?"reply-alt":"comment",r=!(!e.share.status||[29,1,3,4,7,8,10,11].includes(o)),_=!![1,2,3,7,8,9,10,18,19,23,26,29,30].includes(o),d=![29,11,19,23,26,29,30].includes(o),h=![12,15,20,21,29,11,19,23,26,29,30].includes(o);return(0,l.jsx)(l.Fragment,{children:_||e.share.status?(0,l.jsxs)("div",{className:"tb_cc_social_actions_ ".concat(r?"tb_cc_social_share_only__":"tb_cc_social_actions_only__"),style:a.socialAction&&h?null:{justifyContent:"flex-end"},children:[a.socialAction?(0,l.jsx)(l.Fragment,{children:h?(0,l.jsxs)(l.Fragment,{children:[_?(0,l.jsx)("div",{className:"tb_cc_social_action__list",children:(0,l.jsxs)("div",{onClick:t=>s(t,(()=>window.open(((t,e,a)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat(atob(e)):a)(o,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,l.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-".concat(c),style:i,children:" "}),(0,l.jsx)("div",{className:"tb_cc_social_action_counts__",style:i,children:"Like"})]})}):null,d?(0,l.jsx)("div",{className:"tb_cc_social_action__list",children:(0,l.jsxs)("div",{onClick:t=>s(t,(()=>window.open(((t,e,a)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat(atob(e)):a)(o,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,l.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-".concat(n),style:i,children:" "}),(0,l.jsx)("div",{className:"tb_cc_social_action_counts__",style:i,children:1===o?"Reply":"Comment"})]})}):null,1===o?(0,l.jsx)("div",{className:"tb_cc_social_action__list",children:(0,l.jsxs)("div",{onClick:t=>s(t,(()=>window.open("https://twitter.com/intent/retweet?tweet_id=".concat(atob(e.postId)),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,l.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-retweet",style:i,children:" "}),(0,l.jsx)("div",{className:"tb_cc_social_action_counts__",style:i,children:"Retweet"})]})}):"",r?(0,l.jsx)("div",{className:"tb_cc_social_action__list",children:(0,l.jsxs)("div",{onClick:t=>s(t,(()=>window.open(e.link,"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,l.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-eye-alt",style:i,children:" "}),(0,l.jsx)("div",{className:"tb_cc_social_action_counts__",style:i,children:"View"})]})}):""]}):""}):"",e.share.status?(0,l.jsxs)("div",{className:"tb_cc_action_counts_wrap".concat(a.socialAction?"":" tb_cc_action_share_wrap"),children:[(0,l.jsx)("div",{className:"tb_cc_action_ico tb__icon tb-share-outline",style:i,children:" "}),(0,l.jsx)("div",{className:"tb_cc_action_counts",style:i,children:"Share"}),(0,l.jsx)("div",{className:"tb_cc_share_wrapper_dropdown",children:(0,l.jsxs)("div",{className:"tb_cc_share_icon_list",children:[e.share.facebook&&(0,l.jsxs)("div",{onClick:t=>s(t,(()=>window.open(e.share.facebook,"_blank"))),className:"tb_cc_share_list_in",children:[(0,l.jsx)("div",{className:"tb_cc_share_ico__ tb__icon tb-facebook",children:" "}),(0,l.jsx)("div",{className:"tb_cc_share_ico_txt",children:"Facebook"})]}),e.share.twitter&&(0,l.jsxs)("div",{onClick:t=>s(t,(()=>window.open(e.share.twitter,"_blank"))),className:"tb_cc_share_list_in",children:[(0,l.jsx)("div",{className:"tb_cc_share_ico__  tb__icon tb-twitter"}),(0,l.jsx)("div",{className:"tb_cc_share_ico_txt",children:"Twitter"})]}),e.share.linkedin&&(0,l.jsxs)("div",{onClick:t=>s(t,(()=>window.open(e.share.linkedin,"_blank"))),className:"tb_cc_share_list_in",children:[(0,l.jsx)("div",{className:"tb_cc_share_ico__ tb__icon tb-linkedin",children:" "}),(0,l.jsx)("div",{className:"tb_cc_share_ico_txt",children:"LinkedIn"})]})]})})]}):""]}):null})};var b=a(17739);const w=t=>{let{itemData:e,personalization:a,adjustWidth:s,ThemeRule:i,clickToShowPopUp:o,itemIndex:c,wallID:n,ownerId:r,onClickToCTA:d}=t;const w=2===e.type||3===e.type||4===e.type||5===e.type,x=e.rating>0,v=e.rating>0?"tb_cc_rating_content":"tb_cc_content",j=1===e.type&&a.textDecorate?"tb_cc_text_decoration tb_cc_text_post":"",f=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),k=!!(f||i.socialAction||i.shareOption),y=a.trimcontent?(0,b.Sv)(e.content,200):e.content;return(0,l.jsx)("div",{id:"tb-cc-post-".concat(e.id),className:"tb_cc_post_wrapper",style:{width:"".concat(s,"%"),padding:a.padding/2},"tb-network":e.network.icon,children:(0,l.jsxs)("div",{className:"tb_cc_post_in",style:{backgroundColor:e.font.cardColor},onClick:o(c,e),children:[(0,l.jsxs)("div",{className:"tb_cc_contant_wrapper",children:[(0,l.jsx)(_,{ownerId:r,postTime:e.createdAt,author:e.author,network:e.network,font:e.font,personalization:a,ThemeRule:i}),e.hideContent?"":(0,l.jsx)(m.default,{item:e,contentClass:"".concat(v," ").concat(j),content:y,font:e.font,ThemeRule:i,personalization:a,contentTitle:e.contentTitle}),x?(0,l.jsxs)("div",{className:"tb_cc_rating__",children:[(0,l.jsx)(g.Z,{rating:e.rating,network:e.network})," "]}):""]}),w?(0,l.jsx)("div",{className:"tb_cc_post_media_wrapp",children:(0,l.jsx)(h,{itemData:e,wallID:n,ownerId:r},"img".concat(c,"_").concat(e.id))}):"",k?(0,l.jsxs)("div",{className:"tb_cc_post_actions",children:[f?(0,l.jsxs)("div",{className:"tb_cc_post_cta",children:[(0,l.jsx)(u.Z,{ctaClass:"tb_cc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:d})," "]}):"",k?(0,l.jsx)(p,{itemData:e,ThemeRule:i}):""]}):""]})})};var x=a(43411),v=a(64516);class j extends s.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>{this.editorHeight()},this.editorHeight=()=>{var t=document.querySelector(".tb_cc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentDidMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:a,wall:s,languageSetting:i,clickToShowPopUp:c,onClickToCTA:n}=this.props,{loadData:r}=this.state;return(0,l.jsx)(o(),{className:"tb_cc_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_cc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:r?t&&t.length>0&&t.map(((o,r)=>{const _=e[o];return(0,l.jsx)(w,{ownerId:s.Wall.owner,itemData:_,itemIndex:r,adjustWidth:1==_.highlight?2*a:a,personalization:s.Personalization,ThemeRule:s.ThemeRule,completeDataObject:e,postData:t,languageSetting:i,wallID:s.Wall.id,clickToShowPopUp:c,onClickToCTA:n},"cls_crd_".concat(r,"_").concat(o.id))})):null})}}const f=(0,x.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,v.B0)(e))})))(j)},89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(47313),i=a(17739),o=a(98935),c=a(46417);class n extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:a,network:s}=this.props;return(0,c.jsx)("div",{className:a,children:this.state.isAuthorImagevalid?(0,c.jsx)("img",{className:"".concat(a,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,i.P)(e.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,c.jsx)(o.Z,{authorClass:a,username:e.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>i});a(47313);var s=a(46417);const i=t=>{let{username:e,network:a}=t;return(0,s.jsx)("img",{className:"tb_nc_author_profile__",src:"https://ui-avatars.com/api/?name=".concat(function(t){if(t){var e=t.match(/[A-Za-z]/);return e?e[0]:""}return""}(e),"&background=000&color=fff&length=1"),alt:e,width:44,height:44})}},7138:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var s=a(47313),i=a(46417);class o extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:a,onClickToCTA:s,item:o}=this.props,c=!(!a||1!==a.status),n={color:c?a.color:t.color,backgroundColor:c?a.background:t.background};return(0,i.jsxs)("div",{className:e,style:n,onClick:e=>{e.stopPropagation(),s(o),window.open("".concat(c?a.url:t.url),"_blank")},children:[" ",c?a.text:t.text]})}}const c=o},84261:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var s=a(47313),i=a(64516),o=a(2406),c=a(17739),n=a(98501),r=a(46417);class l extends s.PureComponent{constructor(t){super(t),this.updateDimensions=()=>{let t=this.ImgWrap.current.getBoundingClientRect();t&&this.setState({newSize:{height:t.height.toFixed(),width:t.width.toFixed()}})},this.onMediaLoad=async t=>{const{data:e}=this.props,{imgUrl:a}=this.state;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({mediaSize:{height:e.mediaHeight,width:e.mediaWidth}});else try{const{width:t,height:e}=await(0,o.Ad)(a);this.setState({mediaSize:{height:e,width:t}})}catch(s){this.setState({loadError:!0,mediaSize:{height:100,width:100}})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,imgUrl:this.props.data.postFileNew,percentHeight:"100",newSize:{height:100,width:100},mediaSize:{height:100,width:100}},this.ImgWrap=s.createRef()}componentDidMount(){this.updateDimensions(),this.props.size||this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:a,themeID:s,ownerId:o,size:l}=this.props,{imgUrl:_,newSize:d,mediaSize:h}=this.state,m={paddingBottom:l?"".concat(l,"%"):100*h.height/h.width+"%"};return(0,r.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:m,ref:this.ImgWrap,children:(0,r.jsx)("img",{className:t,role:"img",src:_,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":a,"data-owner-id":o,"data-item-id":e.id,"data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(n.do,"/media/images/no-image.svg"),(0,i.ht)(t)},alt:(0,c.P)(_)})})}}},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var s=a(47313),i=a(46417);const o=s.lazy((()=>a.e(5867).then(a.bind(a,95867))));class c extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a}=this.props;return 1===a.iconType&&(7!==t.id&&4!==t.id)?(0,i.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:a.iconColor},children:(0,i.jsx)("div",{})}):(0,i.jsxs)(s.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(o,{network:t,ThemeRule:a,networkClass:e})]})}}},62245:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),i=a(16390),o=a(17739),c=a(30584),n=a(46417);class r extends s.PureComponent{render(){const{contentClass:t,content:e,ThemeRule:a,font:r,personalization:l,item:_,contentTitle:d}=this.props;let h=20==_.network.id?e:(0,o.Fx)(e);return 12==_.network.id&&(h=(0,i.ZP)(h)),(0,n.jsxs)("div",{className:"".concat(t," tb-cTBfont- ").concat(a.font_varient),style:{fontFamily:a.css_font,fontSize:r.fontsize,color:r.fontColor},children:[d?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(d)}):null,(0,n.jsxs)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(c.Z,{data:_,content:h,Personalization:l},h)]})]})}}},30584:(t,e,a)=>{"use strict";a.d(e,{Z:()=>_});var s=a(47313),i=a(91523),o=a(16390),c=a(46417);const n=a(77560),r=t=>(0,c.jsx)(i.default,{children:(0,o.ZP)(t)}),l=t=>{let{data:e,content:a,Personalization:s}=t;const i={color:s.hashtag_color,fontWeight:"bold",backgroundColor:1==s.hashtag_background_status?s.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,c.jsx)(c.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?r(window.slackdown.parse(n(a,/#(\w+)/g,((t,e)=>(0,c.jsxs)("strong",{className:"tb_text_hashtag",style:i,children:["#",t]}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?r(window.slackdown.parse(n(a,e.hash.hashString,((t,e)=>(0,c.jsx)("strong",{className:"tb_text_hashtag",style:i,children:t}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?r(window.slackdown.parse(n(a,/#(\w+)/g,((t,e)=>(0,c.jsxs)("strong",{className:"tb_text_hashtag",style:i,children:["#",t]},e))),e.slackMember)):r(window.slackdown.parse(a,e.slackMember))}):(0,c.jsx)(c.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?n((0,o.ZP)(a),/#(\w+)/g,((t,e)=>(0,c.jsxs)("strong",{className:"tb_text_hashtag",style:i,children:["#",t]}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?n((0,o.ZP)(a),e.hash.hashString,((t,e)=>(0,c.jsx)("strong",{className:"tb_text_hashtag",style:i,children:t}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?n((0,o.ZP)(a),/#(\w+)/g,((t,e)=>(0,c.jsxs)("strong",{className:"tb_text_hashtag",style:i,children:["#",t]},e))):r(a)})},_=(0,s.memo)(l)},90905:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var s=a(47313),i=a(46417);const o=t=>{let{network:e}=t;const{className:a,color:s}={3:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#1b74e4"},4:{className:"tb_rating_ico__ tb__icon tb-rating tb-google-rating",color:"#F8B90C"},19:{className:"tb_rating_ico__ tb__icon tb-rating tb-yelp-rating",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-rating tb-airbnb-rating",color:"#ff385c"},29:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#613983"}}[e.id]||{className:"tb_rating_ico__ tb__icon tb-rating",color:"#F8B90C"};return(0,i.jsx)("div",{className:a,style:{color:s},"tb-network":e.id})};class c extends s.PureComponent{render(){const{rating:t,network:e}=this.props;return(0,i.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>(0,i.jsx)(o,{network:e},a))):null})}}},55790:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(47313),i=a(17739),o=a(46417);const c=t=>{const{postTime:e,timeClass:a,authorNameStyle:c}=t,n=(0,s.useMemo)((()=>(0,i.Sy)(e)),[]);return(0,o.jsx)("div",{className:a,style:c,children:n})},n=(0,s.memo)(c)},61729:(t,e,a)=>{"use strict";var s=a(79165);function i(){}function o(){}o.resetWarningCache=i,t.exports=function(){function t(t,e,a,i,o,c){if(c!==s){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function e(){return t}t.isRequired=t;var a={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:i};return a.PropTypes=a,a}},75192:(t,e,a)=>{t.exports=a(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2406:(t,e,a)=>{"use strict";e.Ad=void 0;var s=a(84228);var i=a(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return i.getImageSize}});var o=a(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,a)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=a(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((a,i)=>{if("undefined"===typeof window)return i(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return i(s.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const c=new Image;c.addEventListener("load",(()=>{o&&window.clearTimeout(o),a({width:c.naturalWidth,height:c.naturalHeight})})),c.addEventListener("error",(t=>{o&&window.clearTimeout(o),i("".concat(t.type,": ").concat(t.message))})),c.src=t,e.timeout&&(o=window.setTimeout((()=>i(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,a){"use strict";var s=this&&this.__awaiter||function(t,e,a,s){return new(a||(a=Promise))((function(i,o){function c(t){try{r(s.next(t))}catch(e){o(e)}}function n(t){try{r(s.throw(t))}catch(e){o(e)}}function r(t){var e;t.done?i(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(c,n)}r((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const i=a(47313),o=a(65786);e.useImageSize=(t,e)=>{const[a,c]=(0,i.useState)(null),[n,r]=(0,i.useState)(!1),[l,_]=(0,i.useState)(null);return(0,i.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){r(!0),c(null);try{const{width:a,height:s}=yield(0,o.getImageSize)(t,e);c({width:a,height:s})}catch(l){_(l.toString())}finally{r(!1)}}))}),[t,e]),[a,{loading:n,error:l}]}},50247:()=>{}}]);