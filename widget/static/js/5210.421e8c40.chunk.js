(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5210,8342,9239,5810],{95289:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>_});a(47313);var s=a(89239),n=a(62245),o=a(90905),r=a(25810),c=a(17739),l=a(35179),i=a(46417);const h=l.ZQ?null:200,_=t=>{let{itemData:e,personalization:a,ThemeRule:l,toggleDivs:_}=t;const d=e.rating>0?"tb_bt_rating_content":"tb_bt_content",g=1===e.type&&a.textDecorate?"tb_bt_text_decoration tb_bt_text_post":"",b=a.trimcontent?(0,c.Sv)(e.content,h):e.content,m=e.author.username&&e.author.username.length>0?"@".concat(e.author.username):"",u={color:l.authorColor},p=!!(e.ugc_products&&e.ugc_products.length>0),f=!(!p||0!==e.hotspot),x=!(!e.hotspot||!p);return(0,i.jsxs)("div",{id:"tb-bt-post-".concat(e.id),className:"tb_bt_post_in","tb-network":e.network.id,"tb-product":f?1:x?2:0,children:[(0,i.jsx)("div",{className:"tb_bt_close_btn",onClick:_,children:(0,i.jsx)("div",{className:"tb_bt_close_ico tb__icon tb-close-circle-line"})}),(0,i.jsx)(s.default,{author:e.author,network:e.network,authorClass:"tb_bt_author_profile"}),(0,i.jsxs)("div",{className:"tb_bt_post_info",children:[(0,i.jsxs)("div",{className:"tb_bt_author_info",children:[(0,i.jsx)("div",{className:"tb_bt_authorname",style:u,children:e.author.name}),(0,i.jsx)("div",{className:"tb_bt_username",style:u,children:m})]}),(0,i.jsx)("div",{className:"tb_bt_contant_wrapper",children:(0,i.jsx)(n.default,{contentClass:"".concat(d," ").concat(g),item:e,content:b,font:l,ThemeRule:l,personalization:a,contentTitle:e.contentTitle,textAlign:"left"})}),(0,i.jsx)("div",{className:"tb_bt_post_media_wrapp",children:(0,i.jsxs)("div",{className:"tb_bt_rating__",children:[(0,i.jsx)(o.Z,{rating:e.rating,network:e.network})," "]})}),(0,i.jsxs)("div",{className:"tb_bt_social_",children:[(0,i.jsx)(r.default,{networkClass:"tb_bt_social_ico",network:e.network,isDefault:1===l.iconType,ThemeRule:l}),(0,i.jsx)("div",{className:"tb_bt_network_name",children:e.network.name})]})]})]})}},89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var s=a(47313),n=a(17739),o=a(98935),r=a(46417);class c extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:a}=this.props;return(0,r.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,r.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,n.P)(t.picture),width:44,height:44,onError:e=>{const s="#ffffff"==a.color?"#000":a.color;e.target.src=t.errorPic?t.errorPic:"https://ui-avatars.com/api/?name=".concat(t.name.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":s).replace("#",""),"&color=fff&length=1"),e.target.alt=t.name}}):(0,r.jsx)(o.Z,{authorClass:e,username:t.name,network:a,color:null===a.id?"#000":a.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(47313),n=a(46417);const o=t=>{let{username:e,network:a,authorClass:s,errorPic:o}=t;const r="#ffffff"==a.color?"#000":a.color;return(0,n.jsx)("img",{className:"".concat(s,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":r).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},r=(0,s.memo)(o)},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var s=a(47313),n=a(35179),o=a(46417);const r=s.lazy((()=>a.e(5867).then(a.bind(a,95867))));class c extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,isDefault:c,Personalization:l}=this.props,i=!!c&&(7!==t.id&&4!==t.id&&36!==t.id),h=n.ZQ&&36==t.id?"tagembed":t.icon;return i?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(h.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(r,{network:t,networkClass:e})]})}}},62245:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});var s=a(47313),n=a(16390),o=a(17739),r=a(35179),c=a(30584),l=a(46417);class i extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){r.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:a,font:s,personalization:i,item:h,contentTitle:_,readMore:d,maxLength:g,textAlign:b,maxLines:m,isReadMore:u}=this.props,p={WebkitLineClamp:m,textAlign:a.textAlignment};let f=20==h.network.id||r.bX&&!r.aL?e:(0,o.Fx)(e);12==h.network.id&&(f=(0,n.ZP)(f));const x="".concat(a.lineTrim?" tb_content_line-".concat(a.lineTrim):""),w="".concat(t," ").concat(u?"":x);return(0,l.jsxs)("div",{className:w,ref:this.contentRef,style:p,children:[_?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,n.ZP)(_)}):null,(0,l.jsx)(c.Z,{data:h,content:f,Personalization:i,ThemeRule:a})]})}}},30584:(t,e,a)=>{"use strict";a.d(e,{Z:()=>h});var s=a(47313),n=a(91523),o=a(16390),r=a(46417);const c=a(77560),l=(t,e)=>(0,r.jsx)(n.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,o.ZP)(t)}),i=t=>{let{data:e,content:a,Personalization:s,ThemeRule:n}=t;const i={color:s.hashtag_color,fontWeight:"bold",backgroundColor:1==s.hashtag_background_status?s.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,r.jsx)(r.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?l(window.slackdown.parse(c(a,/#(\w+)/g,((t,e)=>(0,r.jsxs)("div",{className:"tb_text_hashtag",style:i,children:["#",t]}))),e.slackMember),n):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?l(window.slackdown.parse(c(a,e.hash.hashString,((t,e)=>(0,r.jsx)("div",{className:"tb_text_hashtag",style:i,children:t}))),e.slackMember),n):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?l(window.slackdown.parse(c(a,/#(\w+)/g,((t,a)=>(0,r.jsxs)("div",{className:"tb_text_hashtag",style:i,children:["#",t]},"".concat(e.id,"_").concat(a)))),e.slackMember),n):l(window.slackdown.parse(a,e.slackMember),n)}):(0,r.jsx)(r.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?c((0,o.ZP)(a),/#(\w+)/g,((t,e)=>(0,r.jsxs)("div",{className:"tb_text_hashtag",style:i,children:["#",t]}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?c((0,o.ZP)(a),e.hash.hashString,((t,e)=>(0,r.jsx)("div",{className:"tb_text_hashtag",style:i,children:t}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?c((0,o.ZP)(a),/#(\w+)/g,((t,a)=>(0,r.jsxs)("div",{className:"tb_text_hashtag",style:i,children:["#",t]},"".concat(e.id,"_").concat(a)))):l(a,n)})},h=(0,s.memo)(i)},90905:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});var s=a(47313),n=a(35179),o=a(46417);const r=t=>{let{network:e}=t;const a={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:n.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:n.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:s,color:r}=a[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:r},"tb-network":e.id,children:(0,o.jsx)("div",{})})},c=t=>{let{ThemeID:e}=t;const{className:a,color:s}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:a,style:{color:s},"tb-network":e})};class l extends s.PureComponent{render(){const{rating:t,network:e,ThemeID:a}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>a?(0,o.jsx)(c,{ThemeID:a},s):(0,o.jsx)(r,{network:e},s))):null})}}},50247:()=>{}}]);