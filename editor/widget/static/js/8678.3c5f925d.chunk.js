"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8678],{9066:(t,e,a)=>{a.r(e),a.d(e,{default:()=>u});var o=a(47313),s=a(43411),i=a(54201),l=a(56984),n=a(64516),d=a(46417);class r extends o.PureComponent{constructor(){super(...arguments),this.onShareFacebooklink=t=>e=>{window.open(t,"_target");const{item:a,wall:o}=this.props;(0,n.S5)({type:2,action:2,wall:o.Wall.id,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:o.Wall.owner}),(0,n.Fv)("Tagbox","popup_share_click","popup_share",o.Wall.id)},this.onTwitterClick=t=>{const{item:e,wall:a}=this.props;t&&((0,n.S5)({type:2,action:2,wall:a.Wall.id,feed:e.feedId,post:e.referenceId?e.referenceId:e.id,owner:a.Wall.owner}),(0,n.Fv)("Tagbox","popup_share_click","popup_share",a.Wall.id)),window.open(e.share.twitter,"_target")},this.linkedinShareCount=t=>e=>{const{item:a,wall:o}=this.props;(0,n.S5)({type:2,action:2,wall:o.Wall.id,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:o.Wall.owner}),(0,n.Fv)("Tagbox","popup_share_click","popup_share",o.Wall.id),window.open(t,"_target")}}componentDidMount(){window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)})),window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)}))}componentWillReceiveProps(t){window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)})),window.twttr&&window.twttr.ready((t=>{window.twttr.events.bind("tweet",this.onTwitterClick)}))}render(){const{sharePostPopUP:t,item:e,color:a}=this.props,o={color:a};return(0,d.jsx)("div",{className:"tb_post_modal_post_footer_social_",children:(0,d.jsxs)("div",{className:"tb_post_modal_share_ico",children:[(0,d.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,d.jsx)("div",{onClick:this.onShareFacebooklink(e.share.facebook),children:(0,d.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-facebook",style:o,children:" "})})}),(0,d.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,d.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-twitter",onClick:this.onTwitterClick,style:o})}),(0,d.jsx)("div",{className:"tb_post_modal_social_ico_list___",children:(0,d.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-linkedin",onClick:this.linkedinShareCount(e.share.linkedin),style:o})}),e.link?(0,d.jsx)("div",{className:"tb_post_modal_social_ico_list___",onClick:a=>t(e),children:(0,d.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-Mail",style:o,children:" "})}):null,e.link?(0,d.jsx)("div",{className:"tb_post_modal_social_ico_list___ tb_post_link__",onClick:t=>window.open(e.link,"_blank"),children:(0,d.jsx)("div",{className:"tb_post_modal_share_button tb__icon tb-link",style:o,children:" "})}):null]})})}}const _=(0,s.$j)(null,(t=>({sharePostPopUP:e=>t((0,n.K8)(e))})))(r);var c=a(40029),p=a(4154),h=a(17739),m=a(92789),b=a.n(m),w=(a(92389),a(80381));class v extends o.PureComponent{constructor(){super(...arguments),this.state={isEnable:0,eventData:{},shareText:"SHARE",viewOnText:"View on",currentIndex:null,completeData:{},personalization:{},url:null,platform:null,imgData:[],type:"",parentID:"",isRepeatingPost:!1,mediaSize:{height:500,width:500}},this.keyboardEvent=t=>{let e=this.state.currentIndex;39==t.keyCode||40==t.keyCode?(e+=1,this.featuredPopSliderChangeIndex(e)(t)):37==t.keyCode||38==t.keyCode?(e-=1,this.featuredPopSliderChangeIndex(e)(t)):27==t.keyCode&&this.closeWidgetPopUP()},this.onCloseModal=()=>{var t=document.querySelector("#tb_post_modal_modal-".concat(this.state.parentID));t&&t.classList.contains("tb_post_modal_show")&&(t.classList.remove("tb_post_modal_show"),this.setState({isEnable:0,currentIndex:null,type:""},this.props.closePopUP()));var e=document.getElementsByTagName("html");e&&e[0]&&(e[0].style.overflow="")},this.closeWidgetPopUP=t=>this.onCloseModal(),this.getWidgetPopUPEvent=t=>{t&&void 0!==t&&t.card&&("post"==t.type?this.setState({url:"",isEnable:1,eventData:t,currentIndex:t.index,completeData:t.idArray,viewOnText:t.viewOnText,shareText:t.shareText,imgData:t.imgData,personalization:t.personalization,type:t.type}):"submit-pic"==t.type&&this.setState({isEnable:1,type:t.type,windowParent:t}))},this.featuredPopSliderChangeIndex=t=>e=>{const{eventData:a,isRepeatingPost:o}=this.state;a.idArray.length-1!=t&&t!==a.idArray.length||o?t===a.idArray.length-1||t===a.idArray.length?this.setState({currentIndex:0,isRepeatingPost:!1}):-1===t?this.setState({currentIndex:a.idArray.length-1,isRepeatingPost:!1}):this.setState({currentIndex:t,isRepeatingPost:!1}):this.loadMore()},this.loadMore=()=>{const{wall:t,postData:e,postHeight:a}=this.props,{eventData:o,currentIndex:s}=this.state,i=!(e.hasMoreData&&Object.keys(e.hasMoreData).length>0)||(!e.hasMoreData[0]||0!=e.hasMoreData[0].hasMoreData)&&(!e.hasMoreData[e.appendData.networkID]||e.hasMoreData[e.appendData.networkID].hasMoreData);if(o.idArray.length-1==s&&this.setState({isRepeatingPost:!0}),i){const o=t.ThemeRule.numberOfPosts,s=Math.floor(Date.now()/1e3);this.props.managePostHeight(a),this.props.getDataNextSteps(t.Wall.id,s,o,e.appendData.networkID,e.appendData.after,e.appendData.heightEvent)}else this.setState({currentIndex:0})},this.popUpCloseClckOnWindow=()=>{document.addEventListener("click",(t=>{t.target.matches("#tb_post_modal_modal-".concat(this.state.parentID))&&this.onCloseModal()}))},this.mediaSize=t=>{this.setState({mediaSize:{height:t.height,width:t.width}})}}componentDidMount(){const{data:t}=this.props;let e=document.querySelector(".tb_app_container"),a=h.b8?h.b8:e.parentNode.id;this.setState({parentID:a}),this.getWidgetPopUPEvent(t),setTimeout((()=>{var e=document.querySelector("#tb_post_modal_modal-".concat(this.state.parentID));e&&e.classList.add("tb_post_modal_show"),void 0!=t.ThemeRule.themeId&&47==t.ThemeRule.themeId&&e&&(e.style.overflow="hidden")}));var o=document.getElementsByTagName("html");o&&o[0]&&(o[0].style.overflow="hidden"),this.popUpCloseClckOnWindow(),window.addEventListener&&window.addEventListener("keydown",this.keyboardEvent),b().init()}componentWillUnmount(){window.removeEventListener("keydown",this.keyboardEvent)}componentDidUpdate(){const t=this;let e=0;if(window.editor){let a=document.getElementById("tb_post_modal_modal-taggbox_main"),o=document.querySelector(".tb_post_modal_conetent"),s=document.querySelector(".tb_post_modal_nxt_btn"),i=document.querySelector(".tb_post_modal_prev_btn");a&&(o&&(o.onclick=()=>e=1),s&&(s.onclick=()=>e=1),i&&(i.onclick=()=>e=1),a.onclick=()=>{0==e&&t.onCloseModal(),e=0})}}componentWillReceiveProps(t){const{postData:e}=t;let{completeData:a,eventData:o}=this.state;if(a.length!=e.postData.length){let t=e.postData.map((t=>e.completeDataObject[t])),a=t&&Object.keys(t).length>0&&t.filter((t=>!String(t.id).includes("free_add_")));o.idArray=a,this.setState({completeData:a,eventData:o},(()=>{const{currentIndex:t}=this.state;this.setState({currentIndex:t+1})}))}else{!(e.hasMoreData&&Object.keys(e.hasMoreData).length>0)||(!e.hasMoreData[0]||0!=e.hasMoreData[0].hasMoreData)&&(!e.hasMoreData[e.appendData.networkID]||e.hasMoreData[e.appendData.networkID].hasMoreData)}}render(){const{wall:t,reportMediaPopUp:e,languageSetting:a,brandingNetworks:s}=this.props,{currentIndex:n,completeData:r,eventData:h,parentID:m,mediaSize:b}=this.state;let v=null;v=-1===n?r[h.idArray.length-1]:r[n];const u=1==t.Personalization.popupSlideShow,x=localStorage.getItem("intractivelike".concat(t.Wall.id))||[];return v&&m&&Object.keys(v).length>0?(0,d.jsx)("div",{className:"tb_post_modal_modal",id:"tb_post_modal_modal-".concat(m),children:(0,d.jsx)("div",{className:"tb_post_modal_modal_dialog",children:(0,d.jsxs)("div",{className:"tb_post_modal_conetent","data-aos":"zoom-in-up",children:[(0,d.jsxs)("div",{className:"tb_post_modal_modal_head",children:[(0,d.jsxs)("div",{className:"tb_post_modal_modal_header",children:[(0,d.jsx)("div",{className:"tb_post_modal_post_link_small",children:(0,d.jsx)("div",{className:"tb_post_modal_post_address",children:v.link?(0,d.jsxs)("div",{className:"tb_post_modal_view_link",onClick:t=>window.open(v.link,"_blank"),children:[(0,d.jsxs)("div",{className:"tb_post_modal_view",children:[a.viewOnText," ",v.network.name]}),(0,d.jsx)("div",{className:"tb_post_view_ico tb__icon tb-arrow-right-alt",children:" "})]}):null})}),(0,d.jsx)("div",{className:"tb_post_modal_close_wrap",children:(0,d.jsx)("div",{className:"tb_post_modal_close_btn",onClick:this.closeWidgetPopUP,children:(0,d.jsx)("div",{className:"tb_post_close_ico tb__icon tb-close-alt",children:" "})})})]}),u?(0,d.jsxs)("div",{className:"tb_post_modal_navigation tb_post_modal_nav_content ".concat(1===v.type?"tb_post_modal_text_nav__":null),children:[(0,d.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_prev_btn",onClick:this.featuredPopSliderChangeIndex(n-1),children:(0,d.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-left-alt",children:" "})}),(0,d.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_nxt_btn",onClick:this.featuredPopSliderChangeIndex(n+1),children:(0,d.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-right-alt",children:" "})})]}):null]}),(0,d.jsxs)("div",{className:"tb_post_modal_modal_body",style:{backgroundColor:t.ThemeRule.cardColor},children:[1!=v.type?(0,d.jsxs)("div",{className:"tb_post_modal_details_left",children:[u?(0,d.jsxs)("div",{className:"tb_post_modal_navigation tb_post_modal_nav_img",children:[(0,d.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_prev_btn",onClick:this.featuredPopSliderChangeIndex(n-1),children:(0,d.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-left-alt",children:" "})}),(0,d.jsx)("div",{className:"tb_post_modal_nav tb_post_modal_nxt_btn",onClick:this.featuredPopSliderChangeIndex(n+1),children:(0,d.jsx)("div",{className:"tb_post_nav tb__icon tb-arrow-right-alt",children:" "})})]}):null,(0,d.jsx)(i.Z,{data:v,wall:t,mediaSizeCallback:this.mediaSize})]}):null,(0,d.jsx)("div",{className:"tb_post_modal_details_right ".concat(1===v.type?"tb_post_modal_text__":""),style:{backgroundColor:v.font.cardColor},children:(0,d.jsxs)("div",{className:"tb_post_modal_content_wrap",children:[(0,d.jsxs)("div",{className:"tb_post_modal_post_detail_wrap",children:[(0,d.jsx)(l.Z,{wall:t,item:v,ThemeRule:t.ThemeRule,Personalization:t.Personalization,ownerId:t.Wall.owner},"author_".concat(v.id)),(0,d.jsx)(c.Z,{isDisplay:t.isDisplay,ThemeRule:t.ThemeRule,Personalization:t.Personalization,item:v,contentData:v.content,contentTitle:v.contentTitle,mediaSize:b},v.id)]}),(0,d.jsxs)("div",{className:"tb_post_modal_post_footer",children:[(0,d.jsxs)("div",{className:"tb_post_modal_report_socail",children:[(0,d.jsx)("div",{className:"tb_post_modal_post_footer_report",onClick:t=>e(v),children:(0,d.jsx)("div",{className:"tb_post_modal_post_report_media_btn_wrap__",children:(0,d.jsx)("div",{className:"tb_post_modal_post_report_media_btn__",style:{color:v.font.fontColor},children:"Report"})})}),(0,d.jsx)(_,{item:v,wall:t,color:t.ThemeRule.fontColor})]}),!t.isDisplay&&t.Personalization.interactive?(0,o.createElement)(w.Z,{isCard:null,postId:v.id,intractiveData:x,userDetail:t.UserDetail,wallId:t.Wall,interactiveCount:v.interactiveCount,isDisplay:t.isDisplay,interactive:t.Personalization.interactive,interactiveStatus:t.Personalization.interactiveStatus,key:v.id}):null]})]})}),t.UserRule.branding&&1==t.UserRule.branding?(0,d.jsx)(p.Z,{brandingNetworks:s,languageSetting:a,wallId:t.Wall.id}):null]})]})})}):null}}const u=(0,s.$j)((t=>({loaderData:t.loaderData,postHeight:t.postHeight.data})),(t=>({closePopUP:e=>t((0,n.zj)(e)),reportMediaPopUp:e=>t((0,n.SD)(e)),managePostHeight:e=>t((0,n.B0)(e)),getDataNextSteps:(e,a,o,s,i,l,d)=>t((0,n.Sx)(e,a,o,s,i,l,d))})))(v)},92389:()=>{}}]);