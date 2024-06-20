"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3773,3032],{53032:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var s=a(47313),n=a(98501),r=a(17739),o=a(46417);const l=s.lazy((()=>a.e(6538).then(a.bind(a,66538)))),i=s.lazy((()=>Promise.all([a.e(6390),a.e(6574)]).then(a.bind(a,15929)))),c=s.lazy((()=>Promise.all([a.e(6390),a.e(33)]).then(a.bind(a,1265)))),d=s.memo((e=>{let{error:t,wall:a}=e,l=t.errorWithMessage,d=!!window.editor||(!!window.location.pathname.includes("/editor")||window.location.href.includes("?editor"));const p=(0,r.oF)()||window.location.href.includes("social-wall")||window.location.href.includes("widget.socialwalls"),h=p?n.$e:n._r;if(l)return l&&Object.keys(l).length>0?"VISITOR_LIMIT_EXCEEDED"==l.type?(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(c,{title:"Page Views Limit Exceeded",description:"Oops! Seems Page Views Limit for the plan exceeded. If you are the owner of this Taggbox account, please click below link to access your account.",utm:"widgetinactive",button:'<a href="'.concat(h).concat(n.yL,'viewlimit" target="_blank" class="tb_error_btn_primary">Update Now</a>')})}):"SildeShow"==l.type?(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[(0,o.jsx)(c,{title:null!==l&&void 0!==l&&l.message?l.message:"Wall Not exist",utm:"widgetinactive"})," "]}):(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[(0,o.jsx)(c,{title:null!==l&&void 0!==l&&l.message?l.message:"Wall Not exist",description:"Oops! Seems like something went wrong. If you are the owner of this Taggbox account, please click below link to access your account.",utm:"widgetinactive",button:'<a href="'.concat(h).concat(n.yL,'widgetinactive" target="_blank" class="tb_error_btn_primary">Access Now</a>')})," "]}):null;if(t.planLimit)return(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[(0,o.jsx)(c,{title:"You're Running Extra Widgets/Feeds!",description:"To enjoy uninterrupted services,kindly revoke the additional widget/feed or upgrade your plan.",utm:"widgetinactive",button:'<a href="'.concat(h).concat(n.yL,'feedlimit" target="_blank" class="tb_error_btn_primary">Update Now</a>')})," "]});if(!t.themeError||!Object.keys(t.themeError).length)return l&&Object.keys(l).length>0?(0,o.jsx)(i,{error:t}):null;switch(t.themeError.error_code){case 201:return(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(i,{...t.themeError,wall:a,editor:d,title:"No Posts!",description:"If the Moderation is ON, approve the posts from the moderation section to make them appear on your widget. Else, there won\u2019t be any posts on your added feeds.",utm:"noposts"})});case 202:return(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(i,{...t.themeError,wall:a,editor:d,title:"No Feeds!",description:"Seems like you have not added any feed. Kindly add feed from your preferred social network",utm:"nofeeds"})});case 203:return(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(i,{...t.themeError,wall:a,editor:d,title:"Your Feed Status is Off!!",description:'Please <a target="'.concat(a.isEditor?"_self":"_blank",'" href="').concat(a.isEditor?"#":"".concat(h,"wall/index/").concat(a.Wall.id).concat(p?"?manage-feed=true":""),'" id="wallmanageFeed">Click here</a> to turn the status on! Or add another feed'),utm:"feedinactive"})});case 204:return(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(i,{...t.themeError,wall:a,editor:d,title:"Feed Not Authorized!",description:'It appears that you have not authorized any Feed. Please <a target="_blank" href="'.concat(h,"moderation/index/").concat(a.Wall.id,'" rel="noopener noreferrer">Click here</a> to authorize now!'),utm:"feednotauthorized"})});case 205:return(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(i,{...t.themeError,wall:a,editor:d,title:"No Tweets/Posts!",description:'Currently, No Tweets/Posts are available on the entered <div class="tb_error_highlight">'.concat(r.QE[t.themeError.older_post]," ").concat(t.themeError.older_days,"</div>. The new Tweets/Posts will start appearing here."),utm:"notweets-posts"})});case 206:return(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(i,{...t.themeError,wall:a,editor:d,title:"No Tweets!",description:'No Tweets are available on the entered <div class="tb_error_highlight">'.concat(r.QE[t.themeError.older_post]," ").concat(t.themeError.older_days,"</div> All the upcoming tweets will appear here. <br>The Tweets are older than your chosen ").concat(2===t.themeError.older_post?7:1===t.themeError.older_post?30:null," days."),utm:"notweets-posts"})});case 207:return(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(i,{...t.themeError,wall:a,editor:d,title:"No Posts!",description:'It appears that all your posts are private. Please go to <a href="'.concat(h,"moderation/index/").concat(a.Wall.id,'" target="_blank" rel="noopener noreferrer">Moderation</a> and make them public.'),utm:"noposts"})});case 208:return(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(i,{...t.themeError,wall:a,editor:d,title:"No Posts!",description:"It appears that the available posts are older than your chosen ".concat(8!==t.themeError.older_days?t.themeError.older_days+" Days":(0,r.w5)(t.themeError.older_post),". All the new posts will start to appear here."),utm:"posts-days"})});case 209:return(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(i,{...t.themeError,wall:a,editor:d,title:"No Posts!",description:"It appears that there are no posts available with images or videos. The theme doesn\u2019t support text content.",utm:"nomedia-content"})});case 211:return(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(i,{...t.themeError,wall:a,editor:d,title:"No Posts!",description:"No posts are available on the entered ".concat(r.QE[t.themeError.older_post]," ").concat(t.themeError.older_days,". All Upcoming posts will appear here."),utm:"noposts"})});case 212:return(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(i,{...t.themeError,wall:a,editor:d,title:"No Posts!",description:"Only new posts from Instagram ".concat(r.QE[t.themeError.older_post]," ").concat(t.themeError.older_days," will appear here. Existing posts from Instagram ").concat(r.QE[t.themeError.older_post]," ").concat(t.themeError.older_days," can not be retrieved."),utm:"noinstagram-posts"})});default:return""}}));class p extends s.PureComponent{render(){const e={backgroundImage:"url(".concat(n.ho,"app/theme/display/images/nopost.png)")},{error:t,wall:a}=this.props,i=new URLSearchParams(window.location.search).get("preview"),c=(0,r.oF)();return(0,o.jsxs)(o.Fragment,{children:[i?document.body.classList.add("tb_previw-error"):null,(0,o.jsxs)("div",{className:"tb_error_page tb_error_theme_".concat(null!=a&&a?a.ThemeRule.themeId:"wall_error"),children:[(0,o.jsx)("div",{className:"tb_error_page_bg",style:e,children:" "}),a&&Object.keys(a).length>0&&a.UserRule.on_site_upload&&a.UgcSettings.onsite_button_status&&a.UgcSettings.onsite_status&&!c?(0,o.jsx)("div",{className:"tb_error_onsite_btn",children:(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(l,{UgcSettings:a.UgcSettings,id:a.Wall.id})})}):null,(0,o.jsx)(d,{error:t,wall:a})]})]})}}},63773:(e,t,a)=>{a.r(t),a.d(t,{default:()=>G});var s=a(47313),n=a(64516),r=a(43411),o=a(17739),l=a(98501),i=a(35179),c=a(64754),d=a(47699),p=a(46417);class h extends s.Component{constructor(e){super(e),this.updateIsUpgrade=()=>setTimeout((()=>{this.setState({isUpgradeHide:!0},(()=>this.upgradeScreenTimer()))}),15e3),this.upgradeScreenTimer=()=>{const{wall:e}=this.props;e.UserRule.branding||setTimeout((()=>{this.setState({isUpgradeHide:!1},(()=>this.updateIsUpgrade()))}),6e4)},this.onCreateCookies=e=>{const{cookies:t}=this.props;var a=new Date;a.setTime(a.getTime()+36e5),t.set("planUpgrade",a,{path:"/",expires:a})},this.state={isUpgradeHide:!0}}componentDidMount(){this.upgradeScreenTimer()}render(){const{isUpgradeHide:e}=this.state,{wall:t,see:a}=this.props;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"tb_upgrade_001 ".concat(!1===e&&t.UserRule.branding&&1!==a?"tb_show_02_":""),children:(0,p.jsx)("div",{className:"tb_popup_wrap_002",children:(0,p.jsx)("div",{className:"tb_popup_wrap_in__",children:(0,p.jsxs)("div",{className:"tb_popup_body_",children:[(0,p.jsx)("div",{className:"tb_popup_img__003",children:(0,p.jsx)("img",{className:"tb_pop_up_img__02",src:"".concat("https://cloud.taggbox.com/display/themes","/images/upgrade.svg"),alt:"Taggbox"})}),(0,p.jsxs)("div",{className:"tb_pupup_content__003",children:[(0,p.jsx)("div",{className:"tb_title_004",children:"Want To Get Past This Pop-up ?"}),(0,p.jsx)("div",{className:"tb_pera__004",children:(0,p.jsx)("p",{children:"Upgrade Your Plan Now & Personalize Your Social Wall By Eliminating The Taggbox Display Branding!"})}),(0,p.jsx)("div",{className:"tb_popup_btn_004",children:(0,p.jsx)("a",{target:"_blank",className:"tb_btn__005",style:{color:"white"},href:"https://taggbox.com/price/display-price/",children:"Upgrade Now!"})})]})]})})})}),!1===e&&t.UserRule.branding&&1!==a?(0,p.jsx)("div",{className:"tb_pop_overlay__  tb_show_02_"}):null]})}}const u=(0,d.dB)(h);var g=a(34862),m=a(53032);class w extends s.PureComponent{constructor(){super(),this.enableFullScreen=e=>{let t=document.documentElement;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.setState({controlFullscreen:!1}),e.preventDefault()},this.state={controlFullscreen:!0}}componentDidMount(){this.fullScreen=setTimeout((()=>this.setState({controlFullscreen:!1})),5e3)}componentWillUnmount(){this.fullScreen&&clearTimeout(this.fullScreen)}render(){return this.state.controlFullscreen&&window.innerWidth<1920&&!g.tq&&!window.location.href.includes("studio=1")&&!(0,o.c$)()&&(0,o.KL)()&&(0,p.jsxs)("a",{id:"enableFullScreen",className:"commanBtn btn-sm triggerFullScreen",onClick:this.enableFullScreen,children:[(0,p.jsx)("i",{className:"fa fa-arrows-alt","aria-hidden":"true"}),"\xa0 Enable Full Screen"]})}}const x=s.lazy((()=>a.e(8257).then(a.bind(a,28257)))),b=s.lazy((()=>a.e(3779).then(a.bind(a,3779)))),j=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(1395),a.e(5022)]).then(a.bind(a,38577)))),S=s.lazy((()=>a.e(9146).then(a.bind(a,29146)))),k=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(1395),a.e(6017)]).then(a.bind(a,71325)))),f=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(1395),a.e(3080)]).then(a.bind(a,18017)))),_=s.lazy((()=>a.e(271).then(a.bind(a,30271)))),y=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(6358)]).then(a.bind(a,75577)))),D=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(1395),a.e(1562)]).then(a.bind(a,12465)))),T=s.lazy((()=>Promise.all([a.e(510),a.e(3912),a.e(807),a.e(6090)]).then(a.bind(a,56090)))),P=s.lazy((()=>Promise.all([a.e(1774),a.e(6254)]).then(a.bind(a,76254)))),I=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(510),a.e(1774),a.e(4337)]).then(a.bind(a,99641)))),U=s.lazy((()=>Promise.all([a.e(510),a.e(1774),a.e(1459)]).then(a.bind(a,21459)))),F=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(510),a.e(1774),a.e(543)]).then(a.bind(a,58614)))),v=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(510),a.e(1774),a.e(87)]).then(a.bind(a,94594)))),C=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(510),a.e(2789),a.e(5555)]).then(a.bind(a,19142)))),E=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(510),a.e(9129),a.e(3927)]).then(a.bind(a,31022)))),z=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(510),a.e(3912),a.e(807),a.e(9395),a.e(2580)]).then(a.bind(a,56843)))),N=s.lazy((()=>a.e(7802).then(a.bind(a,17802)))),W=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(510),a.e(1395),a.e(6443)]).then(a.bind(a,7087)))),M=s.lazy((()=>a.e(7552).then(a.bind(a,97552)))),H=s.lazy((()=>a.e(1256).then(a.bind(a,31256)))),R=(0,o.$d)(),A=s.memo((e=>{let{renderId:t,wall:a,postData:n,adjustWidth:r,languageSetting:o,clickToShowPopUp:l,onClickToCTA:i,onClickPopUpSlider:c,cardNumber:d,postSizeInPx:h,parentID:u,themeHeight:g,heightUpdate:w}=e;const{themeUpdate:x,isDisplay:b,Wall:R}=a,A=localStorage.getItem("intractivelike".concat(R.id))||[],O=!n.hasMoreData[0]||0!=n.hasMoreData[0].hasMoreData&&(!n.hasMoreData[n.appendData.networkID]||n.hasMoreData[n.appendData.networkID].hasMoreData),L=a.Personalization.slideDelay,B=a.ThemeRule.themeId,q=a.ThemeRule.numberOfCoumn;if(b)switch(B){case 62:case 63:case 65:case 66:case 78:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(W,{heightUpdate:w,themeHeight:g,...n,themeUpdate:x,hasMoreData:O,wall:a,languageSetting:o,clickToShowPopUp:l})});case 64:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(M,{heightUpdate:w,themeHeight:g,...n,hasMoreData:O,wall:a,languageSetting:o,clickToShowPopUp:l},q||5)});case 67:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,s.createElement)(C,{...n,heightUpdate:w,themeHeight:g,key:x||0,hasMoreData:O,wall:a,languageSetting:o,clickToShowPopUp:l,cardNumber:d})});case 68:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(E,{...n,heightUpdate:w,themeHeight:g,hasMoreData:O,wall:a,languageSetting:o,clickToShowPopUp:l,cardNumber:d},q||7)});case 69:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(H,{...n,heightUpdate:w,themeHeight:g,hasMoreData:O,wall:a,languageSetting:o,clickToShowPopUp:l,cardNumber:d},q||5)});case 70:case 71:case 72:case 73:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(z,{...n,postData:n,heightUpdate:w,themeHeight:g,wall:a,languageSetting:o,clickToShowPopUp:l,hasMoreData:O,renderId:t,parentID:u,postSizeInPx:h})});case 74:case 75:case 76:case 77:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,s.createElement)(N,{...n,postData:n,heightUpdate:w,themeHeight:g,key:L||5,hasMoreData:O,wall:a,languageSetting:o,clickToShowPopUp:l})})}else switch(B){case 3:return r?(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(S,{...n,hasMoreData:O,wall:a,adjustWidth:r,languageSetting:o,clickToShowPopUp:l,onClickToCTA:i})}):null;case 4:return r?(0,p.jsxs)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:[(0,p.jsx)(_,{...n,hasMoreData:O,wall:a,adjustWidth:r,languageSetting:o,clickToShowPopUp:l,cardNumber:d,onClickToCTA:i,postSizeInPx:h})," "]}):null;case 5:return r?(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(k,{...n,hasMoreData:O,wall:a,adjustWidth:r,languageSetting:o,clickToShowPopUp:l,onClickToCTA:i})}):null;case 6:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(T,{...n,wall:a,adjustWidth:r,languageSetting:o,clickToShowPopUp:l,onClickPopUpSlider:c,hasMoreData:O,renderId:t,onClickToCTA:i,parentID:u})});case 16:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(F,{...n,hasMoreData:O,wall:a,adjustWidth:r,languageSetting:o,clickToShowPopUp:l,onClickToCTA:i,postSizeInPx:h,onClickPopUpSlider:c,parentID:u})});case 19:return r?(0,p.jsxs)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:[(0,p.jsx)(j,{...n,hasMoreData:O,wall:a,adjustWidth:r,languageSetting:o,clickToShowPopUp:l,onClickToCTA:i})," "]}):null;case 20:return r?(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(f,{...n,hasMoreData:O,wall:a,adjustWidth:r,languageSetting:o,clickToShowPopUp:l,onClickToCTA:i})}):null;case 47:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(v,{...n,wall:a,adjustWidth:r,languageSetting:o,clickToShowPopUp:l,onClickPopUpSlider:c,hasMoreData:O,renderId:t,onClickToCTA:i,parentID:u})});case 49:return(0,p.jsx)(y,{...n,hasMoreData:O,wall:a,adjustWidth:r,languageSetting:o,clickToShowPopUp:l,onClickToCTA:i});case 50:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(D,{...n,hasMoreData:O,wall:a,adjustWidth:r,languageSetting:o,clickToShowPopUp:l,cardNumber:d,renderId:t,onClickToCTA:i,postSizeInPx:h})});case 52:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(I,{...n,hasMoreData:O,wall:a,adjustWidth:r,languageSetting:o,clickToShowPopUp:l,onClickToCTA:i})});case 55:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(P,{...n,hasMoreData:O,wall:a,adjustWidth:r,languageSetting:o,clickToShowPopUp:l,onClickToCTA:i,onClickPopUpSlider:c,parentID:u})});case 60:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(U,{...n,wall:a,hasMoreData:O,adjustWidth:r,languageSetting:o,clickToShowPopUp:l,onClickToCTA:i,onClickPopUpSlider:c,parentID:u})});case 62:case 63:case 64:case 65:case 66:case 78:case 74:case 75:case 76:case 77:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,s.createElement)(W,{...n,key:x||0,hasMoreData:O,wall:a,languageSetting:o,clickToShowPopUp:l,intractiveData:A})});case 67:case 69:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,s.createElement)(C,{...n,key:x||0,hasMoreData:O,wall:a,languageSetting:o,clickToShowPopUp:l,cardNumber:d,intractiveData:A})});case 68:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(E,{...n,hasMoreData:O,wall:a,languageSetting:o,clickToShowPopUp:l,cardNumber:d,intractiveData:A},x||0)});case 70:case 71:case 72:case 73:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,s.createElement)(z,{...n,postData:n,key:x||0,wall:a,themeHeight:g,languageSetting:o,clickToShowPopUp:l,hasMoreData:O,renderId:t,parentID:u,postSizeInPx:h,intractiveData:A})});case 74:case 75:case 76:case 77:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(m.default,{error:{themeError:{error_code:204},errorWithMessage:{message:"Silde Show theme doesn`t applicabled on widget",type:"SildeShow"}}})})}}));class O extends s.PureComponent{constructor(){super(...arguments),this.state={windowWidth:window.innerWidth,windowHeight:window.innerHeight,adjustWidth:0,cardNumber:0,postSizeInPx:0,isLoaded:!1,topBanner:0,topEditor:0,ticker:0,themeHeight:0},this.autoLoadEditorScrollData=e=>{const{wall:t,postData:a,loaderData:s}=this.props,n=t.ThemeRule.numberOfPosts;let r=document.getElementsByClassName("wall-editor");if(1==t.Personalization.autoScrollStatus&&l.R4.includes(t.ThemeRule.themeId)&&r.length>0){let e=r[0];if(document.body.scrollHeight+e.scrollTop>=e.scrollHeight-10&&(!s||!s.isShowMoreLoading)){const e=Math.floor(Date.now()/1e3);this.props.getDataNextSteps(t.Wall.id,e,n,a.appendData.networkID,a.appendData.after,a.appendData.heightEvent)}}},this.onResponsiveTheme=e=>{const{wall:t}=this.props;let{windowWidth:a}=this.state;a=2===e?a+165:a;let{adjustWidth:s,cardNumber:n}=(0,o.X8)(a,t);s=(100/a*s).toFixed(2),this.setState({adjustWidth:s,cardNumber:n,postSizeInPx:(0,o.X8)(a,t)})},this.autoLoadScrollData=e=>{const{wall:t,postData:a,loaderData:s}=this.props,n=t.ThemeRule.numberOfPosts,r=document.body,o=document.documentElement;if(1===t.Personalization.autoScrollStatus&&l.R4.includes(t.ThemeRule.themeId)){const e=Math.max(r.scrollHeight,r.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight);if(window.innerHeight+window.pageYOffset>=parseInt(e)-parseInt(50)&&(!s||!s.isShowMoreLoading)){const e=Math.floor(Date.now()/1e3);this.props.getDataNextSteps(t.Wall.id,e,n,a.appendData.networkID,a.appendData.after,a.appendData.heightEvent)}}},this.getPostWidth=(e,t)=>{let a=e/t,s=null,n=null;return n=e%t/Math.trunc(a),s=a>=1?t+n:t-n,s},this.onClickToShowPopup=(e,t)=>a=>this.onLoadPopUp(e,t),this.onClickPopUpSlider=(e,t)=>this.onLoadPopUp(e,t),this.onLoadPopUp=(e,t)=>{const{wall:a,languageSetting:s,postData:r}=this.props,{Personalization:l,ThemeRule:c}=a;if(g.tq&&window.innerWidth<920&&0===a.Personalization.mobilePopup){if("undefined"==t.link)return!1;window.open(t.link,"_blank")}else{let n=r.postData.map((e=>r.completeDataObject[e])).filter((e=>!String(e.id).includes("free_add_"))),i=(0,o.E6)(n,t.id,e);if(2===l.postFeatured){if("undefined"==t.link||""==t.link)return!1;window.open(t.link,"_blank")}else 3===l.postFeatured?window.open(l.customUrl,"_blank"):(1===l.postFeatured||R)&&this.props.showPopUP({type:"post",card:t,idArray:n,index:i,viewOnText:s.viewOnText,shareText:s.shareText,personalization:l,imgData:o.CC,ThemeRule:c,wall:a})}(0,n.S5)(i.nX?{action:2,wall:a.Wall.id,posts:[{feed:t.feedId,post:t.referenceId?t.referenceId:t.id}],owner:a.Wall.owner}:{action:2,wall:a.Wall.id,feed:t.feedId,post:t.referenceId?t.referenceId:t.id,owner:a.Wall.owner}),(0,n.Fv)("Tagbox","popupclick_","popup",t.link)},this.loadPopUpWithTimer=()=>{const{postData:e}=this.props;let t=e.postData.map((t=>e.completeDataObject[t]));setTimeout((()=>this.onLoadPopUp(1,t[0])),5e3)},this.onClickToCTA=e=>t=>{const{wall:a}=this.props;(0,n.S5)({action:2,wall:a.Wall.id,type:1,feed:e.feedId,post:e.referenceId?e.referenceId:e.id}),(0,n.Fv)("Tagbox","ctaClick","cta",e.cta&&e.cta.url?e.cta.url:"")},this.heightUpdate=()=>{const{isDisplay:e,isEditor:t}=this.props.wall;if(e){var a=0,s=0,n=0;setTimeout((()=>{const e=document.querySelector(".tb_wall_header__"),r=document.getElementById("kt_header"),o=document.getElementById("wtickerTop"),l=document.getElementById(o?"wtickerTop":"wtickerBottom");e&&(a=e.clientHeight),r&&t&&(s=r.clientHeight),l&&(n=l.clientHeight);const i=a+s+n;this.setState({themeHeight:i})}),t?1e3:500)}}}componentWillMount(){const{renderId:e}=this.props.renderId;this.setState({windowWidth:e?document.getElementById(e).clientWidth:window.innerWidth})}componentDidMount(){const{renderId:e}=this.props.renderId,{wall:t}=this.props;t.isDisplay&&(1==t.Personalization.postFeatured&&(this.loadPopUpWithTimer(),this.heightUpdate()),document.querySelector("body").style.overflow="hidden")}componentWillUnmount(){window.addEventListener&&window.addEventListener("resize",this.onResponsiveTheme)}render(){const{wall:e,languageSetting:t,postData:a,containerSize:n,themewallData:r,parentID:o,brandingNetworks:i}=this.props,{ThemeRule:c,isDisplay:d,isEditor:h}=e;return window.onResponsiveTheme=this.onResponsiveTheme,(0,p.jsxs)("div",{className:"tb_theme_container",children:[d&&!h&&(0,p.jsx)(w,{}),(0,p.jsx)(A,{...this.props,...this.state,onResponsiveTheme:this.onResponsiveTheme,heightUpdate:this.heightUpdate,themewallData:r,clickToShowPopUp:this.onClickToShowPopup,onClickToCTA:this.onClickToCTA,onClickPopUpSlider:this.onClickPopUpSlider,parentID:o}),d||h||[70,71,73,74,75,76,77].includes(c.themeId)||1!==e.Personalization.loadMoreStatus||!l.AD.includes(e.Personalization.widgetTheme)?null:(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(x,{languageSetting:t,wall:e,appendData:a.appendData,postData:a})}),!d&&a.isFreeAdsStatus?(0,p.jsxs)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:[(0,p.jsx)(b,{containerSize:n,languageSetting:t,brandingNetworks:i,wallId:e.Wall.id})," "]}):null]})}}const L=(0,r.$j)((e=>({loaderData:e.loaderData,renderId:e.renderId,modalPop:e.modalPop,appData:e.appData})),(e=>({showPopUP:t=>e((0,n.Bm)(t)),getDataNextSteps:(t,a,s,r,o,l,i)=>e((0,n.Sx)(t,a,s,r,o,l,i))})))(O),B=s.lazy((()=>a.e(7535).then(a.bind(a,37535)))),q=s.lazy((()=>a.e(5755).then(a.bind(a,65755)))),Q=s.lazy((()=>a.e(6538).then(a.bind(a,66538)))),V=s.lazy((()=>a.e(7209).then(a.bind(a,67209)))),X=s.lazy((()=>a.e(9181).then(a.bind(a,59181)))),Y=s.lazy((()=>a.e(1129).then(a.bind(a,41129)))),$=s.lazy((()=>a.e(9796).then(a.bind(a,9796))));class K extends s.PureComponent{constructor(e){super(e),this.readAuthenticationCode=e=>{"socketData"==e.key&&e.newValue&&(localStorage.removeItem("socketData"),this.updateThemedata(JSON.parse(e.newValue)))},this.updateThemedata=e=>{e&&Object.keys(e).length>0&&("prepend"==e.type||"remove"==e.type)&&this.setState({updateData:Math.random()},(()=>this.props.updateDataTheme(e)))},this.state={containerSize:{width:null,height:null,updateData:0,see:!1},parentID:""}}componentDidMount(){window.addEventListener("storage",this.readAuthenticationCode);const e=document.querySelector(".tb_app_container");this.setState({containerSize:{width:e?e.offsetWidth:null,height:e?e.offsetHeight:null}})}componentDidUpdate(){let e=document.querySelector(".tb_app_container");if(e){let t=o.b8?o.b8:e.parentNode.id;this.setState({parentID:t})}}componentWillUnmount(){window.removeEventListener("storage",this.readAuthenticationCode)}render(){const{wall:e,webFilters:t,postData:a,languageSetting:n,filter_tags:r,announcements:o}=this.props,{isDisplay:c,isEditor:d,ThemeRule:h,UgcSettings:g,Banner:m,CustomTicker:w,Background:x,CustomBannerImage:b,LogoImage:j,BannerImage:S}=e,{see:k}=this.state,f=!!(m&&Object.keys(m).length>0&&(1==m.status&&1==m.banner_position||1==S.status)),_=!!(m&&Object.keys(m).length>0&&1==m.status&&2==m.banner_position),y=![55,52,60,16,47].includes(h.themeId),D=!!(t&&t.length>1),T=!!(r&&r.length>0);let P=""!=t&&t?t.map((e=>{let{networkId:t}=e;return t})):null;x.image&&(x.image.includes(l.ho)||x.image.includes("https://cloud.tagbox.com/"))&&(x.image=String(x.image).replace("https://cloud.taggbox.com/uploaded/",""));const I=x.transparent?{backgroundColor:"transparent"}:{backgroundImage:x.image?"url(".concat(x.image,")"):"",backgroundColor:x.color};return(0,p.jsxs)("div",{className:"tb_app_container temp-class",children:[f?(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(B,{isDisplay:c,Banner:m,BannerImage:S,LogoImage:j,CustomBannerImage:b})}):null,c&&w&&Object.keys(w).length>0&&1===w.status&&"1"===w.ticker_position&&(0,p.jsx)(Y,{CustomTicker:w,wall:e,UgcSettings:g}),(0,p.jsxs)("div",{className:"tb_app_wrapper",style:I,children:[!c&&e.UserRule.on_site_upload&&g.onsite_status&&g.onsite_button_status&&![74,75,76,77].includes(h.themeId)||i.nX&&e.UgcSettings.onsite_status?(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(Q,{UgcSettings:g,id:e.Wall.id})}):null,c||!y||!D&&!T||[70,71,73,74,75,76,77].includes(h.themeId)?null:(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(q,{wall:e,languageSetting:n,postData:a,webFilters:t,filter_tags:r,appendData:a.appendData,type:e.Personalization.filter_type})}),(0,p.jsx)(L,{...this.props,brandingNetworks:P,containerSize:this.state.containerSize,parentID:this.state.parentID}),a&&a.completeDataObject?(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(V,{completeDataObject:a.completeDataObject,postData:a.postData})}):null,c?(0,p.jsx)(u,{see:k,...this.props}):null,c&&!d&&o&&Object.keys(o).length>0&&(0,p.jsx)(X,{newApi:this.props})]}),_?(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(B,{isDisplay:c,Banner:m,BannerImage:S,LogoImage:j,CustomBannerImage:b})}):null,c&&w&&Object.keys(w).length>0&&1===w.status&&"2"===w.ticker_position&&(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)($,{wall:e,UgcSettings:g})})]})}}const G=(0,r.$j)((e=>{if(!0===e.postHeight.manage_height){return{postHeight:e.postHeight.data.replace("px",""),renderId:e.renderId,modalPop:e.modalPop}}return{renderId:e.renderId}}),(e=>({managePostHeight:t=>e((0,n.B0)(t)),updateDataTheme:t=>e((0,c.ho)(t))})))(K)}}]);