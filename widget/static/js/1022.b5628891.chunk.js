"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1022],{31022:(t,e,a)=>{a.r(e),a.d(e,{default:()=>v});var i=a(47313),n=a(98255),s=a(33305),o=a(32929),l=a(80381),r=a(46417);class c extends i.PureComponent{constructor(){var t;super(...arguments),t=this,this.state={themeHeightMange:this.props.themeHeight,randomkey:0,wHeight:window.innerHeight},this.heightManage=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t.setState({themeHeightMange:t.props.themeHeight,randomkey:e?Math.random():0}),t.props.heightUpdate()},this.onFullscreenChange=()=>setTimeout((()=>this.heightManage(1)),100)}componentDidMount(){const{wall:t}=this.props;t.isDisplay&&(window.addEventListener("resize",(()=>this.setState({wHeight:window.innerHeight},(()=>this.onFullscreenChange)))),document.addEventListener("fullscreenchange",this.onFullscreenChange,!1),this.heightManage())}componentDidUpdate(t,e){const{wall:a}=this.props;a.isDisplay&&(a.isEditor&&a.Banner.bannerUpdate!=t.wall.Banner.bannerUpdate||a.Banner.banner_position!=t.wall.Banner.banner_position||a.BannerImage.status!=t.wall.BannerImage.status?this.onFullscreenChange():this.heightManage())}render(){const{row:t,itemData:e,clickToShowPopUp:a,itemIndex:c,largeBlock:p,wall:h,intractiveData:d}=this.props,{ThemeRule:m,Personalization:u}=h,{themeHeightMange:g,wHeight:_}=this.state,w=!![2,3,4,5].includes(e.type),y={backgroundColor:m.cardColor},D=h.Personalization.interactive,v=h.isDisplay?[17,13].includes(m.numberOfCoumn)?4:[5,7,0].includes(m.numberOfCoumn)?2:3:0,b=h.isDisplay?(_-g)/v:0,f={padding:"".concat(m.padding/2,"px"),height:b?c||h.MobileView?"".concat(b,"px"):"calc(100vh - ".concat(g,"px)"):""};return e&&e.id?(0,r.jsx)("div",{id:"tb-sp-post-".concat(e.id).concat(t),className:"tb-sp-post-".concat(e.id," tb_ap_post_wrapper ").concat(h.isDisplay?"in-left":""," ").concat(D?"intractive_on":""),"tb-network":e.network.id,style:f,children:(0,r.jsx)("div",{className:"tb_ap_post_in",onClick:a(c,e),children:(0,r.jsxs)("div",{id:"media-outer-".concat(e.id),className:"tb_ap_post_media_wrapp",style:{borderRadius:"".concat(m.borderRadius,"px")},children:[w?(0,r.jsx)(o.Z,{itemData:e,wall:h}):"",(0,r.jsxs)("div",{className:"overlay-main",children:[m.captionStatus?null:(0,r.jsxs)("div",{className:"tb_ap_post_details postContentCard",children:[(0,r.jsx)(n.Z,{postData:e,ThemeRule:m}),(0,r.jsx)("div",{className:"tb_ap_contant_wrapper post-card-outer",style:{padding:"".concat(m.spacing,"px")},children:m.hideContent?"":(0,r.jsx)(s.Z,{wall:h,largeBlock:p,item:e,ThemeRule:m,personalization:u})})]}),(0,r.jsx)("div",{className:"tb_ap_post_overlay",style:y,children:(0,r.jsx)("div",{})})]}),!h.isDisplay&&D?(0,i.createElement)(l.Z,{isCard:!0,postId:e.id,intractiveData:d,userDetail:h.UserDetail,wallId:h.Wall,interactiveCount:e.interactiveCount,isDisplay:h.isDisplay,interactive:D,interactiveStatus:h.Personalization.interactiveStatus,key:Math.random()*e.id}):null]})})}):null}}var p=a(43411),h=a(64516),d=(a(92389),a(17739));const m=(0,d.tf)();function u(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}const g=i.memo((t=>{let{wall:e,itemIndex:a,row:i,clickToShowPopUp:n,onClickToCTA:s,itemData:o,largeBlock:l,heightUpdate:p,themeHeight:h,intractiveData:d}=t;return(0,r.jsx)(c,{row:i,wall:e,heightUpdate:p,themeHeight:h,itemData:o,largeBlock:l,itemIndex:a,clickToShowPopUp:n,onClickToCTA:s,intractiveData:d},a)}));var _,w,y;class D extends i.PureComponent{constructor(t){super(t),this.themeheight=()=>{y=setTimeout((()=>{this.props.heightUpdate(),this.setState({checkThemeheight:!0})}),200)},this.getAnimation=(t,e)=>{const{wall:a}=this.props,i=this;return w=setTimeout((()=>{const n=document.querySelectorAll(".tb_ap_post_row");if(n){n.forEach((t=>t.style.display="none"));if(document.querySelector(".tb_ap_post_row".concat(e-1))){document.querySelector(".tb_ap_post_row".concat(e-1)).style.display="block",((t,e,a,i)=>{const{ThemeRule:n}=a;let s=e-1,o=t[s];for(let l=0;l<o.length;l++)w=setTimeout((()=>{const a=document.getElementById("tb-sp-post-".concat(o[l].id).concat(s));if(a){const r=a.querySelector(".tb_ap_post_in .tb_ap_post_media_wrapp");if(Array.from(document.querySelectorAll(".tb_ap_post_media_wrapp")).map((t=>t.classList.remove("zoom-in-effect"))),Array.from(document.querySelectorAll(".overlay-main")).map((t=>t.classList.remove("aos-init","start"))),(!n.hideContent||n.postAuthor||n.postTime||n.socialAction)&&(r.classList.add("zoom-in-effect"),r.children[1].classList.add("aos-init","start"),(0,d.OX)("".concat(o[l].id).concat(s),1)),o.length==l+1){let a=e==t.length?1:e+1;i.getAnimation(t,a)}}}),(l+1)*(n.slideDelay&&n.slideDelay>=3?1e3*n.slideDelay:3e3))})(t,e,a,i);let n=t[e-1],s=document.querySelectorAll("video");s&&s.forEach((function(t){t.pause()})),n&&n.forEach((function(t,e){setTimeout((()=>{let e=document.querySelector(".mediaHolder".concat(t.id," .card_video__01 video"));e&&e.play()}),1500*(e+1))}))}}}),5e3),()=>clearTimeout(_)},this.dataFilter=()=>{const{postData:t,wall:e}=this.props,a=e.isDisplay?1==m?4:2==m?6:e.ThemeRule.numberOfCoumn?e.ThemeRule.numberOfCoumn:7:7,i=t&&t.length>0&&t.map(((t,e)=>this.props.completeDataObject[t])),n=i&&Object.keys(i).length>0&&i.map(((t,e)=>e<a?{...t,stopAnimation:!0}:t)),s=n&&Object.keys(n).length>0&&n.filter(((t,e)=>t.file&&""!=t.file&&t));let o=(0,d.td)(s,a),l=o.length>0?o[o.length-1]:0;if(s&&l.length<a){const t=((t,e)=>{let a=[];for(let i=0;i<e;i++)a.push(t[u(0,t.length-1)]);return a})(s,a-l.length);o[o.length-1]=[...l,...t]}this.setState({postDataUpdate:o})},this.onLoadMasonry=()=>{var t=document.querySelector(".tb_ap_post_container");t&&this.props.managePostHeight(t.style.height)},this.state={postData:[],postDataUpdate:[],count:1,key:1,checkThemeheight:!t.wall.isDisplay}}componentDidMount(){const{postData:t,wall:e}=this.props;this.setState({postData:t},(()=>this.onLoadMasonry())),this.dataFilter(),e.isDisplay&&this.themeheight()}componentDidUpdate(t,e){const{wall:a}=this.props,{postDataUpdate:i,key:n}=this.state;a.isDisplay&&a.isEditor&&(a.product!=t.wall.product||a.Banner.bannerUpdate!=t.wall.Banner.bannerUpdate||a.Banner.banner_position!=t.wall.Banner.banner_position||a.BannerImage.status!=t.wall.BannerImage.status||this.props.themeUpdate!=t.themeUpdate)&&this.props.heightUpdate(),a.isDisplay&&e.postDataUpdate.length!=i.length&&1==n&&this.getAnimation(i,1)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e},(()=>{this.props.wall.isDisplay||this.dataFilter()}))}componentWillUnmount(){w&&clearTimeout(w),y&&clearTimeout(y)}render(){const{wall:t,clickToShowPopUp:e,onClickToCTA:a,heightUpdate:i,themeHeight:n,intractiveData:s}=this.props,{postDataUpdate:o,checkThemeheight:l}=this.state;return l&&o&&o.length>0?(0,r.jsx)("div",{id:"focus_68",className:"tb_ap_post_container ".concat(t.isDisplay?"":"embed focus-embed"," clearfix"),children:o.map(((l,c)=>{var p;return(0,r.jsxs)("div",{className:"tb_ap_post_row ".concat(t.isDisplay?"tb_ap_post_row".concat(c):""," "),style:{display:0!=c&&t.isDisplay?"none":"block"},children:[m&&t.isDisplay?null:(0,r.jsx)("div",{className:"tb_ap_post_large",children:(0,r.jsx)("div",{id:null===(p=o[c][0])||void 0===p?void 0:p.id,row:c,index:1,completeAnimation:o[c].length,wall:t,children:(0,r.jsx)(g,{heightUpdate:i,themeHeight:n,row:c,wall:t,itemIndex:0,clickToShowPopUp:e,onClickToCTA:a,itemData:o[c][0],largeBlock:!0,intractiveData:s})})},c),(0,r.jsx)("div",{className:"tb_ap_post_small ".concat(t.isDisplay?"cards_".concat(t.ThemeRule.numberOfCoumn||7):""),children:o[c].map(((o,l)=>0!=l||[1,2].includes(m)?(0,r.jsx)("div",{id:null===o||void 0===o?void 0:o.id,row:c,index:l+1,wall:t,largeBlock:!1,children:(0,r.jsx)(g,{wall:t,row:c,heightUpdate:i,themeHeight:n,itemIndex:l,clickToShowPopUp:e,onClickToCTA:a,itemData:o,intractiveData:s})}):null))})]})}))}):null}}const v=(0,p.$j)(null,(t=>({managePostHeight:e=>t((0,h.B0)(e))})))(i.memo(D))},92389:()=>{}}]);