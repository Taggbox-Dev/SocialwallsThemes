"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[16,9239,5790],{66538:(t,e,s)=>{s.r(e),s.d(e,{default:()=>_});var a=s(47313),o=s(97914),n=s(43411),i=s(98501),l=s(43635),r=s(35179),c=s(46417);class d extends a.PureComponent{render(){const{UgcSettings:t,id:e,tagShopWallId:s}=this.props;var a=window.ugcSuite||window.location.href.includes("ugcSuite=1")?{ugcSuite:1}:{};const n=Object.keys(a).length>0?"&ugcSuite=1":"",l=!(s||!r.ig),d=t.onsite_qr_code_status||""!=t.onsite_qr_code_btn_text?t.onsite_qr_code_btn_text:"",_=r.ig?"".concat(i.oC,"/").concat(e,"/onsite-upload").concat(l?"?wall=1":""):"".concat(r.bX&&!r.aL?i.Nf:i.nn,"/").concat(e,"?onsite-upload=true").concat(n),p=r.bX&&!r.aL?d.length<31?"tb_snap_btn_wall tb_snap_btn_wall_v":"tb_snap_btn_wall":"",h=null!==t&&void 0!==t&&t.onsite_overlay_poisition?" tb_pos-".concat(t.onsite_overlay_poisition):null;return!t.onsite_status||!r.ig&&!t.onsite_button_status||1!=t.onsite_qr_code_status&&""===d?null:(0,c.jsx)("div",{className:"tb_onsite_upload_btn_wrap ".concat(p).concat(h),children:(0,c.jsxs)("div",{className:"tb_onsite_upload_btn",children:[(0,c.jsx)("div",{className:"tb_snap_btn_bg",style:{opacity:r.bX?.7:null},children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_onsite_btn",onClick:()=>window.editor||window.location.href.includes("editor=1")||window.location.href.includes("preview=1")||window.location.href.includes("display.socialwalls.com")?this.props.onSitePopup(!1):this.props.onSitePopup(!0),children:(0,c.jsxs)("div",{className:"tb_onsite_qr_btn_wrap",children:[1==t.onsite_qr_code_status?(0,c.jsx)("div",{className:"tb_onsite_qr_code",children:(0,c.jsx)(o.ZP,{level:"L",size:60,value:_})}):null,""!==d?(0,c.jsx)("div",{className:"tb_onsite_btn_txt tb-cTBfont-".concat(t.onsite_font_varient_btn),children:d}):""]})})]})})}}const _=(0,n.$j)((t=>({modalPop:t.modalPop})),(t=>({onSitePopup:e=>t((0,l.wg)(e))})))(d)},89239:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});var a=s(47313),o=s(17739),n=s(98935),i=s(46417);class l extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,i.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,i.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,o.P)(t.picture),width:44,height:44,onError:e=>{const a="#ffffff"==s.color?"#000":s.color;e.target.src=t.errorPic?t.errorPic:"https://ui-avatars.com/api/?name=".concat(t.name.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":a).replace("#",""),"&color=fff&length=1"),e.target.alt=t.name}},Math.random()):(0,i.jsx)(n.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,s)=>{s.d(e,{Z:()=>i});var a=s(47313),o=s(46417);const n=t=>{let{username:e,network:s,authorClass:a,errorPic:n}=t;const i="#ffffff"==s.color?"#000":s.color;return(0,o.jsx)("img",{className:"".concat(a,"__"),src:n||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":i).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},i=(0,a.memo)(n)},55790:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});var a=s(47313),o=s(17739),n=s(46417);const i=t=>{const{postTime:e,timeClass:s}=t;return(0,n.jsx)("div",{className:s,children:(0,o.Sy)(e)})},l=(0,a.memo)(i)},91744:(t,e,s)=>{s.r(e),s.d(e,{default:()=>P});var a=s(47313),o=s(43411),n=s(11774),i=s(44084),l=s(89239),r=s(55790),c=s(25810),d=s(35179),_=s(46417);const p=t=>{let{author:e,personalization:s,postTime:a,network:o,ThemeRule:n,font:i}=t;const p=!(!s.postAuthor||e.isInstaUser),h=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,_.jsxs)("div",{className:"tb_gt_author_wrapper ".concat(d.ZQ?"tb_gt_author_wrapper_top":""),children:[(0,_.jsxs)("div",{className:"tb_gt_author",children:[p?(0,_.jsx)(l.default,{network:o,author:e,authorClass:"tb_gt_author_profile"}):"",(0,_.jsxs)("div",{className:"tb_gt_author_info",children:[p?(0,_.jsx)("div",{className:"tb_gt_authorname",children:e.name}):"",(0,_.jsxs)("div",{className:"tb_gt_post_info",children:[p?(0,_.jsx)("div",{className:"tb_gt_username",children:"@".concat(e.username)}):"",h?(0,_.jsx)("div",{className:"tb_gt_seprator",children:" "}):"",s.postTime?(0,_.jsx)(r.default,{postTime:a,timeClass:"tb_gt_time tb-cTBfont-".concat(n.font_varient),authorColor:n.authorColor}):""]})]})]}),d.ZQ?null:(0,_.jsx)("div",{className:"tb_gt_social_",children:(0,_.jsx)(c.default,{networkClass:"tb_gt_social__ico",network:o,isDefault:1===n.iconType,ThemeRule:n})})]})};var h=s(81349),u=s(84261),m=s(64442);const g=a.lazy((()=>Promise.resolve().then(s.bind(s,25810)))),w=t=>{let{itemData:e,wallID:s,ThemeID:o,ownerId:n,wall:i}=t;const l=!e.hotspot,r=!(3!==e.type&&5!==e.type||1!=i.ThemeRule.autoPlay&&d.ig);return(0,_.jsxs)("div",{className:"tb_gt_media_wrap",children:[d.ZQ?(0,_.jsx)("div",{className:"tb_gt_social_top_",children:(0,_.jsx)(a.Suspense,{fallback:(0,_.jsx)(_.Fragment,{}),children:(0,_.jsx)(g,{networkClass:"tb_gt_social__ico",network:e.network,isDefault:1===i.ThemeRule.iconType,ThemeRule:i.ThemeRule})})}):null,(0,_.jsx)(h.Z,{itemData:e,IconClass:"tb_gt_media_icon",show:l}),r?(0,_.jsx)(m.Z,{VideoClass:"tb_gt_video",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:n,size:100,isCover:!0,muted:!0}):(0,_.jsx)(u.default,{ImageClass:"tb_gt_image",data:e,wallID:s,themeID:o,ownerId:n,size:100,hotspot:!!e.hotspot})]})};var b=s(17739),x=s(11502);const j=a.lazy((()=>Promise.all([s.e(6390),s.e(622),s.e(8342)]).then(s.bind(s,62245)))),v=d.ZQ?null:200,f=t=>{let{itemData:e,personalization:s,ThemeRule:o,clickToShowPopUp:n,itemIndex:i,wallID:l,ownerId:r,postSizeInPx:h,wall:u}=t;const m=1!==e.type,g=s.trimcontent?(0,b.Sv)(e.content,v):e.content,f=h.adjustWidth<250,T=0==o.postHover&&d.ig?"light":"dark",D=!!(e.hotspot&&e.ugc_products.length>0),I=!!(d.ig&&!e.hotspot&&e.ugc_products.length>0);return(0,_.jsx)("div",{id:"tb-hs-post-".concat(e.id),className:"tb_gt_post_wrapper".concat(f?" tb_gt_post_wrapper2x":""),"tb-network":e.network.id,"tb-product":I?1:D?2:0,children:(0,_.jsx)("div",{className:"tb_gt_post_in".concat(d.ig?" tb_gt_post_ani":""),onClick:n(i,e),children:(0,_.jsxs)("div",{className:"tb_gt_post_media_wrapp",children:[m?(0,_.jsx)(w,{itemData:e,wallID:l,wall:u,ownerId:r}):"",D?null:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"tb_gt_post_details",children:[d.ig?(0,_.jsx)("div",{className:"tb_gt_social_",children:(0,_.jsx)(c.default,{networkClass:"tb_gt_social__ico",network:e.network,isDefault:1===o.iconType,ThemeRule:o,Personalization:s})}):null,I?(0,_.jsx)(x.Z,{ThemeRule:o,btnClass:"tb_gt_btn_wrap"}):null,d.ig?null:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:"tb_gt_contant_wrapper",children:o.hideContent&&1!=e.type?"":(0,_.jsx)(a.Suspense,{fallback:(0,_.jsx)(_.Fragment,{}),children:(0,_.jsx)(j,{contentClass:"tb_gt_content",item:e,content:g,font:o,ThemeRule:o,personalization:s,contentTitle:e.contentTitle})})}),(0,_.jsx)(a.Suspense,{fallback:(0,_.jsx)(_.Fragment,{}),children:(0,_.jsx)(p,{ownerId:r,postTime:e.createdAt,author:e.author,network:e.network,font:o,personalization:s,ThemeRule:o})})]})]}),(0,_.jsx)("div",{className:"tb_gt_post_overlay tb_gt_post_overlay-".concat(T),children:(0,_.jsx)("div",{})})]})]})})})};var T=s(66538);class D extends a.Component{constructor(t){super(t),this.state={snapBtnSize:0,sizeClass:""},this.updateDimensions=this.updateDimensions.bind(this)}componentDidMount(){window.addEventListener("resize",this.updateDimensions),this.updateDimensions()}componentWillUnmount(){window.removeEventListener("resize",this.updateDimensions)}componentDidUpdate(){this.updateDimensions()}updateDimensions(){const{className:t,wall:e}=this.props,s=this.divRef.offsetWidth;s!==this.state.snapBtnSize&&(s<200&&s>150?this.setState({sizeClass:"".concat(t,"-3x")}):s<150&&s>120?this.setState({sizeClass:"".concat(t,"-2x")}):s<120&&s>0&&this.setState({sizeClass:"".concat(t,"-1x")}),this.setState({snapBtnSize:s}))}render(){const{className:t,wall:e}=this.props,{sizeClass:s}=this.state;return(0,_.jsx)("div",{className:"".concat(t," ").concat(s),ref:t=>{this.divRef=t},children:(0,_.jsx)(T.default,{UgcSettings:e.UgcSettings,id:e.Wall.id,tagShopWallId:e.Wall.wallId})})}}const I=t=>{let{wall:e,itemData:s,completeDataObject:o,parentID:n,itemIndex:i,clickToShowPopUp:l,onClickToCTA:r,postSizeInPx:c,isOnsite:d}=t;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"tb_gt_post_small",children:[d&&0==s[0]?(0,_.jsx)("div",{className:"tb_gt_post_wrapper tb_onsite_post__",children:(0,_.jsxs)(a.Suspense,{fallback:(0,_.jsx)(_.Fragment,{}),children:[" ",(0,_.jsx)(D,{className:"tb_gt_post_in",wall:e})," "]})}):(0,_.jsx)(f,{parentID:n,ownerId:e.Wall.owner,wall:e,itemData:o[s[0]],itemIndex:i,personalization:e.Personalization,ThemeRule:e.ThemeRule,clickToShowPopUp:l,wallID:e.Wall.id,onClickToCTA:r,postSizeInPx:c}),(0,_.jsx)(f,{parentID:n,ownerId:e.Wall.owner,wall:e,itemData:o[s[1]],itemIndex:i,personalization:e.Personalization,ThemeRule:e.ThemeRule,clickToShowPopUp:l,wallID:e.Wall.id,onClickToCTA:r,postSizeInPx:c})]}),(0,_.jsx)("div",{className:"tb_gt_post_large",children:(0,_.jsx)(f,{parentID:n,ownerId:e.Wall.owner,wall:e,itemData:o[s[2]],itemIndex:i,personalization:e.Personalization,ThemeRule:e.ThemeRule,clickToShowPopUp:l,wallID:e.Wall.id,onClickToCTA:r,postSizeInPx:c})})]})};var k=s(43635);s(37210);class C extends a.PureComponent{constructor(t){super(t),this.requestData=()=>{const{appendData:t,wall:e,preRender:s,hasMoreData:a}=this.props;a&&(0,k.Sx)(e.Wall.id,Math.floor(Date.now()/1e3),e.ThemeRule.numberOfPosts,t.networkID,t.after,s,t.heightEvent)},this.state={parent_id:""},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100)}render(){const{postData:t,completeDataObject:e,wall:s,clickToShowPopUp:a,onClickToCTA:o,postSizeInPx:l,parentID:r}=this.props,c=r,p=s.ThemeRule.numberOfCoumn,h=s.ThemeRule.mobileColumn,u=s.ThemeRule.slidePost,m=s.ThemeRule.slideDuration,g={grid:{rows:s.ThemeRule.multiRow},rewind:!0,speed:1e3,interval:1===u?1e3*parseInt(m):5e3,perPage:p>0?p:d.ZQ||d.ig?3:6,perMove:1,gap:0,autoplay:1===u,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:h>0?h:1},767:{perPage:h>0?h:2},991:{perPage:h>0?h:3},1200:{perPage:p>0?p:d.ig?3:4},1400:{perPage:p>0?p:d.ig?3:5},1600:{perPage:p>0?p:d.ZQ||d.ig?3:6}}};let w=[];const b=!!s.UgcSettings.onsite_status;for(let n=0;n<t.length;){let e=0==n&&b?2:3;const s=2==e?[0].concat(t.slice(n,n+e)):t.slice(n,n+e);w.push(s),n+=e}return w=w.length<9?Array(10).fill(w).flat():w,t&&t.length>2?(0,_.jsx)("div",{className:"tb_gt_post_container",children:(0,_.jsxs)(n.tv,{hasTrack:!1,className:"tb_gt_post_slider",options:g,extensions:{Grid:i.r},ref:t=>this.inputRefs[c]=t,children:[(0,_.jsx)(n.Gj,{children:w.map(((t,i)=>t&&3==t.length?(0,_.jsx)(n.jw,{id:"tb_gt-".concat(i),className:"tb_gt_post_row tb_".concat(i),idd:r,children:(0,_.jsx)(I,{parentID:r,ownerId:s.Wall.owner,wall:s,completeDataObject:e,itemIndex:i,personalization:s.Personalization,ThemeRule:s.ThemeRule,clickToShowPopUp:a,wallID:s.Wall.id,onClickToCTA:o,postSizeInPx:l,indexNo:i<6?i:"0",largeDiv:66.66,smallDiv:33.33,itemData:t,isOnsite:b})},i):null))}),(0,_.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_gt_arrow_wrapper_",children:[(0,_.jsx)("div",{className:"tb_gt_arrow splide__arrow splide__arrow--prev tb_gt_arrow tb_gt_arrow_left__ tb__icon tb-arrow-left-alt",children:(0,_.jsx)("div",{})}),(0,_.jsx)("div",{className:"tb_gt_arrow splide__arrow splide__arrow--next  tb_gt_arrow_right__ tb__icon tb-arrow-right-alt",onClick:this.requestData,children:(0,_.jsx)("div",{})})]})]})}):null}}const P=(0,o.$j)((t=>({})),(t=>({getDataNextSteps:(e,s,a,o,n,i,l,r)=>t((0,k.Sx)(e,s,a,o,n,i,l,r))})))(C)}}]);