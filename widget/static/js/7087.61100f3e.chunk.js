"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7087],{24816:(e,t,i)=>{i.d(t,{d:()=>o});var s=i(47313),a=i(17739),n=i(46417);function o(e){return class extends s.Component{constructor(e){super(e),this.cardRef=s.createRef(null),this.startLoadingVideo=e=>{const{itemData:t,wall:i}=this.props;if(i&&i.ThemeRule&&Object.keys(i.ThemeRule).length>0&&3==t.type||5==t.type){const t=i.ThemeRule.themeId,n=!(0,a.eN)();try{if(n&&window.innerWidth>920&&t&&[62,63,64,65,66,69,70,73].includes(parseInt(t))){let t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.setState({autoplay:!0}):this.setState({autoplay:!1})}))}),{rootMargin:"50px",threshold:1});e.current&&t.observe(e.current)}else this.setState({autoplay:!0})}catch(s){this.setState({autoplay:!0})}}},this.state={autoplay:!1}}componentDidMount(){this.startLoadingVideo(this.cardRef)}render(){return(0,n.jsx)(e,{...this.state,...this.props,cardRef:this.cardRef})}}}},90905:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(47313),a=i(46417);const n=e=>{let{network:t}=e;const{className:i,color:s}={3:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#1b74e4"},4:{className:"tb_rating_ico__ tb__icon tb-rating tb-google-rating",color:"#F8B90C"},19:{className:"tb_rating_ico__ tb__icon tb-rating tb-yelp-rating",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-rating tb-airbnb-rating",color:"#ff385c"},29:{className:"tb_rating_ico__ tb__icon tb-rating",color:"#613983"}}[t.id]||{className:"tb_rating_ico__ tb__icon tb-rating",color:"#F8B90C"};return(0,a.jsx)("div",{className:i,style:{color:s},"tb-network":t.id})};class o extends s.PureComponent{render(){const{rating:e,network:t}=this.props;return(0,a.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:e?[...Array(e)].map(((e,i)=>(0,a.jsx)(n,{network:t},i))):null})}}},7087:(e,t,i)=>{i.r(t),i.d(t,{default:()=>P});var s=i(47313),a=i(61395),n=i.n(a),o=i(43411),l=i(98255),r=i(32929),c=i(33305),h=i(90905),d=i(25810),p=i(80381),m=i(46417);class u extends s.PureComponent{render(){const{itemData:e,clickToShowPopUp:t,itemIndex:i,wall:a,autoplay:n,cardRef:o,intractiveData:u}=this.props,{Personalization:g,ThemeRule:w}=a,_=[2,3,4,5].includes(e.type),v=!(!w.postAuthor||e.author.isInstaUser),b=e.network,D=a.Personalization.interactive;return(0,m.jsx)("div",{className:"tb_mwf_post_wrapper ".concat(D?"intractive_on":""),"data-id":e.id,"tb-network":b.icon,ref:o,children:(0,m.jsxs)("div",{className:"tb_mwf_post_in",onClick:t(i,e),children:[(0,m.jsxs)("div",{className:"tb_mwf_post_media_wrapp",children:[_||65==w.themeId?null:(0,m.jsxs)("div",{className:"tb_mwf_social_top_",children:[(0,m.jsx)(d.default,{networkClass:"tb_mwf_social_center_ico",network:b,ThemeRule:w})," "]}),_?(0,m.jsx)(r.Z,{itemData:e,wall:a,autoplayVideo:n}):null,e.rating?(0,m.jsx)("div",{className:"tb_mwf_rating__ ".concat(29===b.id?"tb_mwf_onsite_rating__":""),children:(0,m.jsx)(h.Z,{rating:e.rating,network:b})}):null]}),w.captionStatus?null:(0,m.jsxs)("div",{className:w.postAuthor||w.socialAction||w.postTime?"tb_mwf_contant_wrapper":"",children:[v||w.postTime||b.id&&w.socialAction?(0,m.jsx)(l.Z,{postData:e,ThemeRule:w}):null,w.hideContent||[65,63].includes(w.themeId)?null:(0,m.jsx)(c.Z,{item:e,ThemeRule:w,personalization:g,contentTitle:e.contentTitle,wall:a},e.id)]}),!a.isDisplay&&D?(0,s.createElement)(p.Z,{isCard:!0,postId:e.id,intractiveData:u,userDetail:a.UserDetail,wallId:a.Wall,interactiveCount:e.interactiveCount,isDisplay:a.isDisplay,interactive:D,interactiveStatus:a.Personalization.interactiveStatus,key:Math.random()*e.id}):null]})})}}const g=(0,o.$j)((e=>({modalPop:e.modalPop})))(u);var w,_,v=!1,b=0,D=0,T=0;const y=e=>({80:60,70:40,50:30,30:20,20:10}[e]||20);class f extends s.PureComponent{constructor(e){var t;super(e),t=this,this.scrollDiv_init=e=>{if(!this.state.slideWall){const t="marqueecontainer";_=document.getElementById(t),63==e&&(v=!1),(_||{}).scrollTop=0,b=0,this.onScrollData(),this.onScrollWPosts(e)}},this.onScrollData=()=>{const{wall:e}=this.props;if(e.Personalization.scrollDelay){const t=y(e.Personalization.scrollDelay);T=setInterval(this.scrollDiv,t)}},this.onScrollWPosts=e=>{const{themeHeight:t,wall:i}=this.props;_=document.getElementById("marqueecontainer");var s=document.getElementById("wPosts");if(s)if(window.innerHeight>s.clientHeight){var a=window.innerHeight,n=s.clientHeight;s.setAttribute("style","position: relative; margin-bottom: ".concat(i.isDisplay?a:0,"px; min-height:").concat(n,"px"))}else _.setAttribute("style","overflow: auto; height : calc(100vh - ".concat(t&&i.isDisplay?t+(i.isEditor?6:0):0,"px)"))},this.scrollDiv=()=>{const{themeId:e}=this.props.wall.ThemeRule;T&&clearInterval(T),v?63==e?(v=!v||0!=(_||{}).scrollTop,(_||{}).scrollTop=b,b--):((_||{}).scrollTop=b=0,v=!1):((_||{}).scrollTop=b,b++,v=(_||{}).scrollTop>=(_||{}).scrollHeight-(_||{}).offsetHeight-300),this.onScrollData()},this.pauseDiv=e=>{T&&clearInterval(T),w&&clearTimeout(w),w=setTimeout((()=>this.resumeDiv()),5e3)},this.resumeDiv=()=>{const{wall:e}=this.props;_=document.getElementById("wPosts"),b=(_||{}).scrollTop,T=setInterval(this.scrollDiv,y(e.Personalization.scrollDelay))},this.clearData=()=>{this.clearTime()},this.clearTime=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t.props.wall.isDisplay&&t.setState({slideWall:e?0:1}),T&&clearInterval(T),T&&(T=0),w&&clearTimeout(w),D&&clearTimeout(D),v&&(v=!1),b&&(b=0)},this.state={slideWall:0}}componentDidMount(){const{wall:e}=this.props;if(e.isDisplay&&!e.product){window.clearData=this.clearData;const{themeId:t}=e.ThemeRule,i=document.querySelector(".waterfall-theme");i&&i.addEventListener("wheel",(e=>e.preventDefault()),{passive:!1}),D=setTimeout((()=>{this.scrollDiv_init(t)}),2e3)}}componentDidUpdate(e,t){const{postData:i,wall:s}=e;s.ThemeRule.themeId!=this.props.wall.ThemeRule.themeId&&(v=!1,b&&(b=0)),i!=this.props.postData&&(this.clearTime(1),this.scrollDiv_init(s.ThemeRule.themeId))}componentWillUnmount(){const e=document.querySelector(".waterfall-theme");e&&e.removeEventListener("mousewheel",(e=>e.preventDefault()),!1),this.clearTime()}render(){return(0,m.jsx)(m.Fragment,{children:{...this.props.children}})}}const x=(0,s.memo)(f);var I=i(24816),j=i(17739);class R extends s.PureComponent{constructor(e){var t;super(e),t=this,this.responsiveUpdate=null,this.heightMange=null,this.themeheight=function(){const{heightUpdate:e,wall:i}=t.props;(i.isDisplay||i.product)&&(i.isDisplay&&e(),t.heightMange=setTimeout((()=>t.setState({checkThemeheight:!0})),100))},this.onResponsiveTheme=()=>{const{wall:e}=this.props,t=document.querySelector(".tb_app_container");if(t){const i=t.clientWidth-(e.isDisplay?1:8);if(i>0){let t=null,s=null,a=null,n=null;const o=e.Personalization.minimumPostWidth;t=i/o;let l=Math.trunc(t);a=i%o,s=a/l,n=t>=1?o+s:o-s,this.setState({postWidth:n})}}},this.state={postWidth:0,checkThemeheight:!e.wall.isDisplay&&!e.wall.product,productUpdate:0}}componentDidMount(){this.responsiveUpdate=setTimeout((()=>this.onResponsiveTheme()),1e3),window.addEventListener("resize",(()=>{this.props.isDisplay&&this.themeheight(),this.onResponsiveTheme()})),(this.props.wall.isDisplay||this.props.wall.product)&&this.themeheight(1)}componentDidUpdate(e,t){const{wall:i}=this.props,{isDisplay:s,isEditor:a,Personalization:n,Banner:o,BannerImage:l}=i,r=(0,j.Qe)(),c=o.bannerUpdate!=e.wall.Banner.bannerUpdate||o.banner_position!=e.wall.Banner.banner_position||l.status!=e.wall.BannerImage.status;i.product!=e.wall.product&&this.setState({productUpdate:Math.random()}),i.product&&(this.responsiveUpdate=setTimeout((()=>this.onResponsiveTheme()),2e3)),a&&s&&(r||n.minimumPostWidth!=e.wall.Personalization.minimumPostWidth||this.props.themeUpdate||c)&&(this.responsiveUpdate=setTimeout((()=>{this.onResponsiveTheme(),this.themeheight()}),2e3))}componentWillUnmount(){this.responsiveUpdate&&clearTimeout(this.responsiveUpdate),this.heightMange&&clearTimeout(this.heightMange),window.removeEventListener("resize",this.themeheight)}render(){let{checkThemeheight:e,postWidth:t,productUpdate:i}=this.state,{postData:s,completeDataObject:a,wall:o,clickToShowPopUp:l,themeHeight:r,intractiveData:c}=this.props,{ThemeRule:h}=o;const{themeId:d}=h,p={backgroundColor:h.cardColor,padding:"".concat(h.spacing,"px"),borderRadius:"".concat(h.borderRadius,"px")};return(0,m.jsx)(m.Fragment,{children:e?(0,m.jsx)(x,{...this.props,children:(0,m.jsx)("div",{id:o.isDisplay?null:"".concat(62==d?"casecade":63==d?"focus":64==d?"exhibit":"pixel","_").concat(d),className:"".concat(66==d?"themeSquare":""," themeModrnWatrFall ").concat(o.isDisplay?"display":"widget"," ").concat(78==d?"roundeageTheme":""," waterfall-theme"),children:(0,m.jsx)("div",{id:"marqueecontainer",style:{overflow:o.isDisplay?"auto":"inherit",height:o.isDisplay?"calc(100vh - ".concat(r+4,"px)"):"auto"},children:(0,m.jsx)(n(),{id:"wPosts",className:"theme".concat(d),tabIndex:"0","aria-label":"There are ".concat(s&&s.length>0?s.length:0," posts in the feed"),elementType:"div",options:{percentPosition:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!0,enableResizableChildren:!0,children:s&&s.map(((e,i)=>{const s=a[e],n=o.displayEmbed?g:(0,I.d)(g);let r=!1;return t&&s&&Object.keys(s).length>0&&(66==d&&s.postFileNew?r=!0:66==d||!s.postFileNew&&o.ThemeRule.hideContent&&!s.rating||(r=!0)),r?(0,m.jsx)("div",{id:'"postId'.concat(s.id),className:"feedId".concat(s.feedId," postItem item flatCard   ").concat(65==d?"pixel65":"","  ").concat(s.network.name,"Taggbox ").concat(s.theme48&&"onlyTextCard"===s.theme48.class1?"onlyTextCard":""," completeFadeIn"),"data-post-id":s.id,"data-highlight":s.highlight,"data-pin":s.pin,style:{padding:h.padding/2,width:(s.highlight,t),margin:0,minWidth:0,left:0,top:0},"data-created":s.createdAt,children:(0,m.jsx)("div",{className:"post",style:p,children:(0,m.jsx)("div",{className:"postContent",children:(0,m.jsx)(n,{wall:o,itemData:s,itemIndex:i,clickToShowPopUp:l,intractiveData:c},i)})})},i):null}))})})})},i):null})}}const P=R}}]);