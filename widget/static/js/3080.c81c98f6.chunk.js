(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3080,8342,9239,5790,5810,4261],{89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),o=a(17739),i=a(98935),n=a(46417);class r extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:a,network:s}=this.props;return(0,n.jsx)("div",{className:a,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(a,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,o.P)(e.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(i.Z,{authorClass:a,username:e.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});a(47313);var s=a(46417);const o=t=>{let{username:e,network:a}=t;return(0,s.jsx)("img",{className:"tb_nc_author_profile__",src:"https://ui-avatars.com/api/?name=".concat(function(t){if(t){var e=t.match(/[A-Za-z]/);return e?e[0]:""}return""}(e),"&background=000&color=fff&length=1"),alt:e,width:44,height:44})}},7138:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(47313),o=a(46417);class i extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:a,onClickToCTA:s,item:i}=this.props,n=!(!a||1!==a.status),r={color:n?a.color:t.color,backgroundColor:n?a.background:t.background};return(0,o.jsxs)("div",{className:e,style:r,onClick:e=>{e.stopPropagation(),s(i),window.open("".concat(n?a.url:t.url),"_blank")},children:[" ",n?a.text:t.text]})}}const n=i},84261:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var s=a(47313),o=a(64516),i=a(2406),n=a(17739),r=a(98501),c=a(46417);class l extends s.PureComponent{constructor(t){super(t),this.updateDimensions=()=>{let t=this.ImgWrap.current.getBoundingClientRect();t&&this.setState({newSize:{height:t.height.toFixed(),width:t.width.toFixed()}})},this.onMediaLoad=async t=>{const{data:e}=this.props,{imgUrl:a}=this.state;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({mediaSize:{height:e.mediaHeight,width:e.mediaWidth}});else try{const{width:t,height:e}=await(0,i.Ad)(a);this.setState({mediaSize:{height:e,width:t}})}catch(s){this.setState({loadError:!0,mediaSize:{height:100,width:100}})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,imgUrl:this.props.data.postFileNew,percentHeight:"100",newSize:{height:100,width:100},mediaSize:{height:100,width:100}},this.ImgWrap=s.createRef()}componentDidMount(){this.updateDimensions(),this.props.size||this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:a,themeID:s,ownerId:i,size:l}=this.props,{imgUrl:d,newSize:h,mediaSize:_}=this.state,m={paddingBottom:l?"".concat(l,"%"):100*_.height/_.width+"%"};return(0,c.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:m,ref:this.ImgWrap,children:(0,c.jsx)("img",{className:t,role:"img",src:d,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":a,"data-owner-id":i,"data-item-id":e.id,"data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,o.ht)(t)},alt:(0,n.P)(d)})})}}},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(47313),o=a(46417);const i=s.lazy((()=>a.e(5867).then(a.bind(a,95867))));class n extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a}=this.props;return 1===a.iconType&&(7!==t.id&&4!==t.id)?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(t.icon),style:{color:a.iconColor},children:(0,o.jsx)("div",{})}):(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(i,{network:t,ThemeRule:a,networkClass:e})]})}}},62245:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var s=a(47313),o=a(16390),i=a(17739),n=a(30584),r=a(46417);class c extends s.PureComponent{render(){const{contentClass:t,content:e,ThemeRule:a,font:c,personalization:l,item:d,contentTitle:h}=this.props;let _=20==d.network.id?e:(0,i.Fx)(e);return 12==d.network.id&&(_=(0,o.ZP)(_)),(0,r.jsxs)("div",{className:"".concat(t," tb-cTBfont- ").concat(a.font_varient),style:{fontFamily:a.css_font,fontSize:c.fontsize,color:c.fontColor},children:[h?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,o.ZP)(h)}):null,(0,r.jsxs)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(n.Z,{data:d,content:_,Personalization:l},_)]})]})}}},30584:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var s=a(47313),o=a(91523),i=a(16390),n=a(46417);const r=a(77560),c=t=>(0,n.jsx)(o.default,{children:(0,i.ZP)(t)}),l=t=>{let{data:e,content:a,Personalization:s}=t;const o={color:s.hashtag_color,fontWeight:"bold",backgroundColor:1==s.hashtag_background_status?s.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,n.jsx)(n.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,i.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?c(window.slackdown.parse(r(a,/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:o,children:["#",t]}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?c(window.slackdown.parse(r(a,e.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:o,children:t}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?c(window.slackdown.parse(r(a,/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:o,children:["#",t]},e))),e.slackMember)):c(window.slackdown.parse(a,e.slackMember))}):(0,n.jsx)(n.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,i.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?r((0,i.ZP)(a),/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:o,children:["#",t]}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?r((0,i.ZP)(a),e.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:o,children:t}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?r((0,i.ZP)(a),/#(\w+)/g,((t,e)=>(0,n.jsxs)("strong",{className:"tb_text_hashtag",style:o,children:["#",t]},e))):c(a)})},d=(0,s.memo)(l)},90905:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(47313),o=a(46417);const i=t=>{let{network:e}=t;const{className:a,color:s}={3:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#1b74e4"},4:{className:"tb_rating_ico__ tb__icon tb-rating tb-google-rating",color:"#F8B90C"},19:{className:"tb_rating_ico__ tb__icon tb-rating tb-yelp-rating",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-rating tb-airbnb-rating",color:"#ff385c"},29:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#613983"}}[e.id]||{className:"tb_rating_ico__ tb__icon tb-rating",color:"#F8B90C"};return(0,o.jsx)("div",{className:a,style:{color:s},"tb-network":e.id})};class n extends s.PureComponent{render(){const{rating:t,network:e}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>(0,o.jsx)(i,{network:e},a))):null})}}},5744:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(47313),o=a(64516),i=a(46417);class n extends s.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:a,wallID:s,ownerId:i}=this.props;e.stopPropagation(),(0,o.S5)({type:2,action:2,wall:s,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:i}),(0,o.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,i.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,i.jsx)("div",{className:"tb_share_button_ tb__icon tb-share-hover",children:" "}),(0,i.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook"})}):"",t.twitter?(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter"})}):"",t.linkedin?(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin"})}):""]})]})}}},32675:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var s=a(47313),o=a(46417);const i=(t,e,a)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat(atob(e)):a,n=(t,e,a)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat(atob(e)):a,r=t=>{let{arialbl:e,hrefClick:a,Icon:s,iconColorStyle:i,count:n}=t;return(0,o.jsx)("div",{className:"tb_social_action__list",children:(0,o.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(a,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,o.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(s),style:i,children:" "}),n>0?(0,o.jsx)("div",{className:"tb_social_action_counts__",style:i,children:n}):""]})})};class c extends s.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:a,ThemeID:s}=this.props,c={color:3===s?1===e.iconType?e.iconColor:t.network.color:e.fontColor},l=t.network.id,d=3===l||10===l||7===l?"like-alt":"heart-alt",h=!![1,2,3,7,8,9,10,18].includes(l),_=![29,19].includes(l),m=t.network.name?t.network.name:"";return(0,o.jsx)(o.Fragment,{children:29!==l&&26!==l&&23!==l&&6!==l&&5!==l&&11!==l&&12!==l&&15!==l&&20!==l&&21!==l?(0,o.jsx)("div",{className:a,children:(0,o.jsxs)("div",{className:"tb_social_action__",children:[h?(0,o.jsx)(r,{arialbl:m,hrefClick:i(l,t.postId,t.link),Icon:d,iconColorStyle:c,count:t.like_count}):null,_?(0,o.jsx)(r,{arialbl:m,hrefClick:n(l,t.postId,t.link),Icon:"comment",iconColorStyle:c,count:t.comment_count}):null,1===l?(0,o.jsx)(r,{arialbl:m,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat(atob(t.postId)),Icon:"retweet",iconColorStyle:c,count:t.comment_count}):null,(0,o.jsx)(r,{arialbl:m,hrefClick:t.link,Icon:"eye-alt",iconColorStyle:c,count:0})]})}):""})}}},55790:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),o=a(17739),i=a(46417);const n=t=>{const{postTime:e,timeClass:a,authorNameStyle:n}=t,r=(0,s.useMemo)((()=>(0,o.Sy)(e)),[]);return(0,i.jsx)("div",{className:a,style:n,children:r})},r=(0,s.memo)(n)},18017:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>C});var s=a(47313),o=a(61395),i=a.n(o),n=a(43411),r=a(89239),c=a(55790),l=a(25810),d=a(46417);const h=t=>{let{author:e,personalization:a,postTime:s,network:o,ThemeRule:i,font:n,mediaType:h,ownerId:_}=t;const m=e.username&&e.username.length>0?"@".concat(e.username):"",u={color:i.authorColor},p={backgroundColor:i.authorColor},g=!(!a.postAuthor||e.isInstaUser),b=!(!a.postAuthor||!a.postTime||e.isInstaUser);return(0,d.jsxs)("div",{className:"tb_mc_author_wrapper",children:[(0,d.jsxs)("div",{className:"tb_mc_author",children:[g||100231===_?(0,d.jsx)(r.default,{network:o,author:e,authorClass:"tb_mc_author_profile"},e.username):"",(0,d.jsxs)("div",{className:"tb_mc_author_info",children:[g||100231===_?(0,d.jsx)("div",{className:"tb_mc_authorname",style:u,children:e.name}):"",(0,d.jsxs)("div",{className:"tb_mc_post_info",children:[g?(0,d.jsx)("div",{className:"tb_mc_username",style:u,children:m}):"",b?(0,d.jsx)("div",{className:"tb_mc_seprator",style:p,children:" "}):"",a.postTime?(0,d.jsx)(c.default,{postTime:s,timeClass:"tb_mc_time",authorColor:i.authorColor}):""]})]})]}),h&&o.id?(0,d.jsx)("div",{className:"tb_mc_social_",children:(0,d.jsx)(l.default,{networkClass:"tb_mc_social_ico",network:o,ThemeRule:i,font:n})}):null]})};var _=a(84261);const m=t=>{let{itemData:e,wallID:a,ownerId:s}=t;const o=3===e.type||5===e.type,i=7===e.network.id,n=!!(e.imageList&&e.imageList.length>0),r=(e.imageList&&e.imageList.length)>0&&(3===e.type||5===e.type)?"tb_mc_multi_images_ico_bottom":"tb_mc_multi_images_ico",c=1===e.isAudio;return(0,d.jsxs)("div",{className:"tb_mc_media_wrap",children:[n?(0,d.jsx)("div",{className:"".concat(r," tb__icon tb-multiple"),children:" "}):"",o?i?(0,d.jsxs)("div",{className:"tb_mc_youtube_ico tb__icon tb-youtube-default",children:[(0,d.jsx)("div",{className:"tb_color_icon__ tb_d_youtube_path_1",children:(0,d.jsx)("div",{})}),(0,d.jsx)("div",{className:"tb_color_icon__ tb_d_youtube_path_2",children:(0,d.jsx)("div",{})})]}):c?(0,d.jsx)("div",{className:"tb_mc_audio_ico tb__icon tb-audio",children:(0,d.jsx)("div",{})}):(0,d.jsx)("div",{className:"tb_mc_video_ico tb__icon tb-video",children:(0,d.jsx)("div",{})}):"",(0,d.jsx)(_.default,{ImageClass:"tb_mc_image",data:e,wallID:a,ownerId:s,size:!1})]})};var u=a(62245),p=a(5744),g=a(7138),b=a(90905),w=a(32675),x=a(64516),f=a(17739),v=a(35179);class k extends s.PureComponent{constructor(t){super(t),this.postTrack=s.createRef()}componentDidMount(){v.nX&&(0,f.YN)(this.postTrack)}render(){const{itemData:t,personalization:e,adjustWidth:a,ThemeRule:s,clickToShowPopUp:o,itemIndex:i,wallID:n,ownerId:r,onClickToCTA:c}=this.props,_={width:"".concat(1==t.highlight?2*a:a,"%"),padding:e.padding/2},x={backgroundColor:t.font.cardColor},v=2===t.type||3===t.type||4===t.type||5===t.type,k=t.rating>0,j=t.rating>0?"tb_mc_rating_content":"tb_mc_content",y=1===t.type&&e.textDecorate?"tb_mc_text_decoration tb_mc_text_post":"",C=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status),N=e.trimcontent?(0,f.Sv)(t.content,200):t.content;return(0,d.jsx)("div",{className:"tb_mc_post_wrapper",ref:this.postTrack,"data-id":t.id,style:_,"tb-network":t.network.icon,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,"tab-index":0,"area-label":N,role:"article",children:(0,d.jsx)("div",{className:"tb_mc_post_wrap_in",children:(0,d.jsxs)("div",{className:"tb_mc_post_in",style:x,onClick:o(i,t),children:[(0,d.jsxs)("div",{className:"tb_mc_post_media_wrapp",children:[v?null:(0,d.jsxs)("div",{className:"tb_mc_social_top_",children:[" ",(0,d.jsx)(l.default,{networkClass:"tb_mc_social_center_ico",network:t.network,ThemeRule:s,font:t.font})," "]}),t.share.status?(0,d.jsx)(p.Z,{share:t.share,shareClass:"tb_mc_share_container",item:t,wallID:n,ownerId:r}):null,v?(0,d.jsx)(m,{itemData:t,wallID:n,ownerId:r}):null,k?(0,d.jsxs)("div",{className:"tb_mc_rating__ ".concat(29===t.network.id?"tb_mc_onsite_rating__":""),children:[(0,d.jsx)(b.Z,{rating:t.rating,network:t.network})," "]}):null]}),(0,d.jsxs)("div",{className:"tb_mc_contant_wrapper",children:[v&&C?(0,d.jsxs)("div",{className:"tb_mc_post_cta",children:[(0,d.jsx)(g.Z,{ctaClass:"tb_mc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:c})," "]}):null,1!==t.hideContent?(0,d.jsx)(u.default,{item:t,contentClass:"".concat(j," ").concat(y),content:N,font:t.font,ThemeRule:s,personalization:e,contentTitle:t.contentTitle}):null,!v&&C?(0,d.jsxs)("div",{className:"tb_mc_post_cta",children:[(0,d.jsx)(g.Z,{ctaClass:"tb_mc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:c})," "]}):null,(0,d.jsx)(h,{ownerId:r,mediaType:v,postTime:t.createdAt,author:t.author,network:t.network,font:t.font,personalization:e,ThemeRule:s})]}),s.socialAction?(0,d.jsx)(w.Z,{itemData:t,ThemeRule:s,ThemeID:e.widgetTheme,actionClass:"tb_mc_social_action__"}):null]})})})}}const j=(0,n.$j)((t=>({modalPop:t.modalPop})))(k);class y extends s.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>{this.editorHeight()},this.editorHeight=()=>{var t=document.querySelector(".tb_mc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentWillMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{completeDataObject:t,adjustWidth:e,wall:a,clickToShowPopUp:s,onClickToCTA:o}=this.props,{postData:n}=this.props,{loadData:r}=this.state;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(i(),{className:"tb_mc_post_container",tabIndex:"0","aria-label":"There are ".concat(n&&n.length>0?n.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_mc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:r?n&&n.length>0&&n.map(((i,n)=>{const r=t[i];return(0,d.jsx)(j,{ownerId:a.Wall.owner,itemData:r,itemIndex:n,adjustWidth:1==r.highlight?2*e:e,personalization:a.Personalization,ThemeRule:a.ThemeRule,clickToShowPopUp:s,wallID:a.Wall.id,onClickToCTA:o},n)})):null})})}}const C=(0,n.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,x.B0)(e))})))(y)},61729:(t,e,a)=>{"use strict";var s=a(79165);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,a,o,i,n){if(n!==s){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function e(){return t}t.isRequired=t;var a={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return a.PropTypes=a,a}},75192:(t,e,a)=>{t.exports=a(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2406:(t,e,a)=>{"use strict";e.Ad=void 0;var s=a(84228);var o=a(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return o.getImageSize}});var i=a(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,a)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=a(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((a,o)=>{if("undefined"===typeof window)return o(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return o(s.ErrorMessage.URL_IS_NOT_DEFINED);let i=null;const n=new Image;n.addEventListener("load",(()=>{i&&window.clearTimeout(i),a({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{i&&window.clearTimeout(i),o("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(i=window.setTimeout((()=>o(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,a){"use strict";var s=this&&this.__awaiter||function(t,e,a,s){return new(a||(a=Promise))((function(o,i){function n(t){try{c(s.next(t))}catch(e){i(e)}}function r(t){try{c(s.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(n,r)}c((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const o=a(47313),i=a(65786);e.useImageSize=(t,e)=>{const[a,n]=(0,o.useState)(null),[r,c]=(0,o.useState)(!1),[l,d]=(0,o.useState)(null);return(0,o.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){c(!0),n(null);try{const{width:a,height:s}=yield(0,i.getImageSize)(t,e);n({width:a,height:s})}catch(l){d(l.toString())}finally{c(!1)}}))}),[t,e]),[a,{loading:r,error:l}]}},50247:()=>{}}]);