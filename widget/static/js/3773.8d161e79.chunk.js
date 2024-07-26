"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3773,3032],{53032:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var s=a(47313),n=a(98501),o=a(17739),r=a(46417);const l=s.lazy((()=>a.e(6538).then(a.bind(a,66538)))),i=s.lazy((()=>Promise.all([a.e(6390),a.e(6574)]).then(a.bind(a,15929)))),c=s.lazy((()=>Promise.all([a.e(6390),a.e(33)]).then(a.bind(a,1265)))),d=s.memo((e=>{let{error:t,wall:a}=e,l=t.errorWithMessage,d=!!window.editor||(!!window.location.pathname.includes("/editor")||window.location.href.includes("?editor"));const p=(0,o.oF)()||window.location.href.includes("social-wall")||window.location.href.includes("widget.socialwalls"),h=p?n.$e:n._r,u=o.QE[t.themeError.older_post]?o.QE[t.themeError.older_post]:"";if(l)return l&&Object.keys(l).length>0?"VISITOR_LIMIT_EXCEEDED"==l.type?(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(c,{title:"Page Views Limit Exceeded",description:"Oops! Seems Page Views Limit for the plan exceeded. If you are the owner of this Taggbox account, please click below link to access your account.",utm:"widgetinactive",button:'<a href="'.concat(h).concat(n.yL,'viewlimit" target="_blank" class="tb_error_btn_primary">Update Now</a>')})}):"SildeShow"==l.type?(0,r.jsxs)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[(0,r.jsx)(c,{title:null!==l&&void 0!==l&&l.heading?l.heading:"Social wall does not exist",description:null===l||void 0===l?void 0:l.message,utm:"widgetinactive"})," "]}):(0,r.jsxs)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[(0,r.jsx)(c,{title:null!==l&&void 0!==l&&l.heading?l.heading:"Social wall does not exist",description:null!==l&&void 0!==l&&l.message?null===l||void 0===l?void 0:l.message:"Oops! Seems like something went wrong. If you are the owner of this Taggbox account, please click below link to access your account.",utm:"widgetinactive",button:401!=(null===l||void 0===l?void 0:l.error_code)&&404!=(null===l||void 0===l?void 0:l.error_code)?'<a href="'.concat(h).concat(n.yL,'widgetinactive" target="_blank" class="tb_error_btn_primary">Access Now</a>'):null,error_code:null===l||void 0===l?void 0:l.error_code})," "]}):null;if(t.planLimit)return(0,r.jsxs)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[(0,r.jsx)(c,{title:"You're Running Extra Widgets/Feeds!",description:"To enjoy uninterrupted services,kindly revoke the additional widget/feed or upgrade your plan.",utm:"widgetinactive",button:'<a href="'.concat(h).concat(n.yL,'feedlimit" target="_blank" class="tb_error_btn_primary">Update Now</a>')})," "]});if(!t.themeError||!Object.keys(t.themeError).length)return l&&Object.keys(l).length>0?(0,r.jsx)(i,{error:t}):null;switch(t.themeError.error_code){case 201:return(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(i,{...t.themeError,wall:a,editor:d,title:"No Posts!",description:"If the Moderation is ON, approve the posts from the moderation section to make them appear on your widget. Else, there won\u2019t be any posts on your added feeds.",utm:"noposts"})});case 202:return(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(i,{...t.themeError,wall:a,editor:d,title:"No Feeds!",description:"Seems like you have not added any feed. Kindly add feed from your preferred social network",utm:"nofeeds"})});case 203:return(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(i,{...t.themeError,wall:a,editor:d,title:"Your Feed Status is Off!!",description:'Please <a target="'.concat(a.isEditor?"_self":"_blank",'" href="').concat(a.isEditor?"#":"".concat(h,"wall/index/").concat(a.Wall.id).concat(p?"?manage-feed=true":""),'" id="wallmanageFeed">Click here</a> to turn the status on! Or add another feed'),utm:"feedinactive"})});case 204:return(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(i,{...t.themeError,wall:a,editor:d,title:"Feed Not Authorized!",description:'It appears that you have not authorized any Feed. Please <a target="'.concat(a.isEditor?"_self":"_blank",'" href="').concat(a.isEditor?"#":"".concat(h,"moderation/index/").concat(a.Wall.id),'" rel="noopener noreferrer"  id="wallmanageFeed">Click here</a> to authorize now!'),utm:"feednotauthorized"})});case 205:return(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(i,{...t.themeError,wall:a,editor:d,title:"No Tweets/Posts!",description:'Currently, No Tweets/Posts are available on the entered <div class="tb_error_highlight">'.concat(u," ").concat(t.themeError.older_days,"</div>. The new Tweets/Posts will start appearing here."),utm:"notweets-posts"})});case 206:return(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(i,{...t.themeError,wall:a,editor:d,title:"No Tweets!",description:'No Tweets are available on the entered <div class="tb_error_highlight">'.concat(u," ").concat(t.themeError.older_days,"</div> All the upcoming tweets will appear here. <br>The Tweets are older than your chosen ").concat(2===t.themeError.older_post?7:1===t.themeError.older_post?30:null," days."),utm:"notweets-posts"})});case 207:return(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(i,{...t.themeError,wall:a,editor:d,title:"No Posts!",description:'It appears that all your posts are private. Please go to <a href="'.concat(h,"moderation/index/").concat(a.Wall.id,'" target="_blank" rel="noopener noreferrer">Moderation</a> and make them public.'),utm:"noposts"})});case 208:return(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(i,{...t.themeError,wall:a,editor:d,title:"No Posts!",description:"It appears that the available posts are older than your chosen ".concat(8!==t.themeError.older_days?t.themeError.older_days+" Days":(0,o.w5)(t.themeError.older_post),". All the new posts will start to appear here."),utm:"posts-days"})});case 209:return(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(i,{...t.themeError,wall:a,editor:d,title:"No Posts!",description:"It appears that there are no posts available with images or videos. The theme doesn\u2019t support text content.",utm:"nomedia-content"})});case 211:return(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(i,{...t.themeError,wall:a,editor:d,title:"No Posts!",description:"No posts are available on the entered ".concat(u," ").concat(t.themeError.older_days,". All Upcoming posts will appear here."),utm:"noposts"})});case 212:return(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(i,{...t.themeError,wall:a,editor:d,title:"No Posts!",description:"Only new posts from Instagram ".concat(u," ").concat(t.themeError.older_days," will appear here. Existing posts from Instagram ").concat(u," ").concat(t.themeError.older_days," can not be retrieved."),utm:"noinstagram-posts"})});case 213:return(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(i,{...t.themeError,wall:a,error:t,editor:d,title:"Your Social ".concat((0,o.oF)()?"":"Embed"," wall is Inactive."),description:"To enhance your ".concat((0,o.oF)()?"event":"website"," experience, re-activate your Social wall now"),utm:"feedinactive"})});default:return""}}));class p extends s.PureComponent{render(){const e={backgroundImage:"url(".concat(n.ho,"app/theme/display/images/nopost.png)")},{error:t,wall:a}=this.props,i=new URLSearchParams(window.location.search).get("preview"),c=(0,o.oF)();return(0,r.jsxs)(r.Fragment,{children:[i?document.body.classList.add("tb_previw-error"):null,(0,r.jsxs)("div",{className:"tb_error_page tb_error_theme_".concat(null!=a&&a?a.ThemeRule.themeId:"wall_error"),children:[(0,r.jsx)("div",{className:"tb_error_page_bg",style:e,children:" "}),a&&Object.keys(a).length>0&&a.UserRule.on_site_upload&&a.UgcSettings.onsite_button_status&&a.UgcSettings.onsite_status&&!c?(0,r.jsx)("div",{className:"tb_error_onsite_btn",children:(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(l,{UgcSettings:a.UgcSettings,id:a.Wall.id})})}):null,(0,r.jsx)(d,{error:t,wall:a})]})]})}}},63773:(e,t,a)=>{a.r(t),a.d(t,{default:()=>G});var s=a(47313),n=a(64516),o=a(43411),r=a(17739),l=a(98501),i=a(35179),c=a(64754),d=a(47699),p=a(46417);class h extends s.Component{constructor(e){super(e),this.updateIsUpgrade=()=>setTimeout((()=>{this.setState({isUpgradeHide:!0},(()=>this.upgradeScreenTimer()))}),1e4),this.upgradeScreenTimer=()=>{const{wall:e}=this.props;e.UserRule.branding&&setTimeout((()=>{this.setState({isUpgradeHide:!1},(()=>this.updateIsUpgrade()))}),6e4)},this.popupHeight=()=>{const e=document.getElementById("taggbox_main");if(e&&null!==e&&void 0!==e&&e.clientHeight&&(null===e||void 0===e?void 0:e.clientHeight)<300){document.getElementById("tb_upgrade_001").classList.add("resize_popup")}},this.onCreateCookies=e=>{const{cookies:t}=this.props;var a=new Date;a.setTime(a.getTime()+36e5),t.set("planUpgrade",a,{path:"/",expires:a})},this.state={isUpgradeHide:!0}}componentDidMount(){this.upgradeScreenTimer()}componentDidUpdate(){this.popupHeight()}render(){const{isUpgradeHide:e}=this.state,{wall:t}=this.props;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"tb_upgrade_001 ".concat(!e&&t.UserRule.branding?"tb_show_02_":""),children:(0,p.jsx)("div",{className:"tb_popup_wrap_002",children:(0,p.jsx)("div",{className:"tb_popup_wrap_in__",children:(0,p.jsxs)("div",{className:"tb_popup_body_",children:[(0,p.jsx)("div",{className:"tb_popup_img__003",children:(0,p.jsx)("img",{className:"tb_pop_up_img__02",src:"".concat("https://cloud.taggbox.com/display/themes","/images/upgrade.svg"),alt:"Taggbox"})}),(0,p.jsxs)("div",{className:"tb_pupup_content__003",children:[(0,p.jsx)("div",{className:"tb_title_004",children:"Want To Get Past This Pop-up ?"}),(0,p.jsx)("div",{className:"tb_pera__004",children:(0,p.jsxs)("p",{children:[" ",t.isDisplay?"Upgrade Your Plan Now & Personalize Your Social Wall By Eliminating The Social Wall Branding!":"To enhance your website experience, re-activate your Social wall now!"]})}),(0,p.jsx)("div",{className:"tb_popup_btn_004",children:(0,p.jsx)("a",{target:"_blank",className:"tb_btn__005",style:{color:"white"},href:"https://taggbox.com/price/display-price/",children:"Upgrade Now!"})})]})]})})})}),!e&&t.UserRule.branding?(0,p.jsx)("div",{className:"tb_pop_overlay__  tb_show_02_"}):null]})}}const u=(0,d.dB)(h);var m=a(34862),g=a(53032);class w extends s.PureComponent{constructor(){super(),this.enableFullScreen=e=>{let t=document.documentElement;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.setState({controlFullscreen:!1}),e.preventDefault()},this.state={controlFullscreen:!0}}componentDidMount(){this.fullScreen=setTimeout((()=>this.setState({controlFullscreen:!1})),5e3)}componentWillUnmount(){this.fullScreen&&clearTimeout(this.fullScreen)}render(){return this.state.controlFullscreen&&window.innerWidth<1920&&!m.tq&&!window.location.href.includes("studio=1")&&!(0,r.c$)()&&(0,r.KL)()&&(0,p.jsxs)("a",{id:"enableFullScreen",className:"commanBtn btn-sm triggerFullScreen",onClick:this.enableFullScreen,children:[(0,p.jsx)("i",{className:"fa fa-arrows-alt","aria-hidden":"true"}),"\xa0 Enable Full Screen"]})}}var b=a(25370);const x=s.lazy((()=>a.e(8257).then(a.bind(a,28257)))),S=s.lazy((()=>a.e(3779).then(a.bind(a,3779)))),j=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(1395),a.e(5022)]).then(a.bind(a,38577)))),k=s.lazy((()=>a.e(9146).then(a.bind(a,29146)))),f=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(1395),a.e(6017)]).then(a.bind(a,71325)))),_=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(1395),a.e(3080)]).then(a.bind(a,18017)))),D=s.lazy((()=>a.e(271).then(a.bind(a,30271)))),y=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(6358)]).then(a.bind(a,75577)))),T=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(1395),a.e(1562)]).then(a.bind(a,12465)))),P=s.lazy((()=>Promise.all([a.e(510),a.e(3912),a.e(807),a.e(6090)]).then(a.bind(a,56090)))),v=s.lazy((()=>Promise.all([a.e(1774),a.e(6254)]).then(a.bind(a,76254)))),I=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(510),a.e(1774),a.e(4337)]).then(a.bind(a,99641)))),U=s.lazy((()=>Promise.all([a.e(510),a.e(1774),a.e(1459)]).then(a.bind(a,21459)))),F=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(510),a.e(1774),a.e(543)]).then(a.bind(a,58614)))),E=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(510),a.e(1774),a.e(87)]).then(a.bind(a,94594)))),C=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(510),a.e(2789),a.e(8786),a.e(9142)]).then(a.bind(a,19142)))),z=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(510),a.e(1544),a.e(8786),a.e(1022)]).then(a.bind(a,31022)))),N=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(510),a.e(3912),a.e(807),a.e(1484),a.e(8786),a.e(6843)]).then(a.bind(a,56843)))),W=s.lazy((()=>a.e(7802).then(a.bind(a,17802)))),M=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(510),a.e(1395),a.e(8786),a.e(7087)]).then(a.bind(a,7087)))),H=s.lazy((()=>a.e(7552).then(a.bind(a,97552)))),R=s.lazy((()=>a.e(1256).then(a.bind(a,31256)))),L=(0,r.$d)(),A=s.memo((e=>{let{renderId:t,wall:a,postData:n,adjustWidth:o,languageSetting:r,clickToShowPopUp:l,onClickToCTA:i,onClickPopUpSlider:c,cardNumber:d,postSizeInPx:h,parentID:u,themeHeight:m,heightUpdate:w}=e;const{themeUpdate:b,isDisplay:x,Wall:S}=a,L=localStorage.getItem("intractivelike".concat(S.id))||[],A=!n.hasMoreData[0]||0!=n.hasMoreData[0].hasMoreData&&(!n.hasMoreData[n.appendData.networkID]||n.hasMoreData[n.appendData.networkID].hasMoreData),O=a.Personalization.slideDelay,B=a.ThemeRule.themeId,q=a.ThemeRule.numberOfCoumn;if(x)switch(B){case 62:case 63:case 65:case 66:case 78:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(M,{heightUpdate:w,themeHeight:m,...n,themeUpdate:b,hasMoreData:A,wall:a,languageSetting:r,clickToShowPopUp:l},b||0)});case 64:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(H,{heightUpdate:w,themeHeight:m,...n,hasMoreData:A,wall:a,languageSetting:r,clickToShowPopUp:l},q||5)});case 67:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,s.createElement)(C,{...n,heightUpdate:w,themeHeight:m,key:b||0,hasMoreData:A,wall:a,languageSetting:r,clickToShowPopUp:l,cardNumber:d})});case 68:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(z,{...n,heightUpdate:w,themeHeight:m,hasMoreData:A,wall:a,languageSetting:r,clickToShowPopUp:l,cardNumber:d},q||7)});case 69:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(R,{...n,heightUpdate:w,themeHeight:m,hasMoreData:A,wall:a,languageSetting:r,clickToShowPopUp:l,cardNumber:d},q||5)});case 70:case 71:case 72:case 73:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(N,{...n,postData:n,heightUpdate:w,themeHeight:m,wall:a,languageSetting:r,clickToShowPopUp:l,hasMoreData:A,renderId:t,parentID:u,postSizeInPx:h})});case 74:case 75:case 76:case 77:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,s.createElement)(W,{...n,postData:n,heightUpdate:w,themeHeight:m,key:O||5,hasMoreData:A,wall:a,languageSetting:r,clickToShowPopUp:l})})}else switch(B){case 3:return o?(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(k,{...n,hasMoreData:A,wall:a,adjustWidth:o,languageSetting:r,clickToShowPopUp:l,onClickToCTA:i})}):null;case 4:return o?(0,p.jsxs)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:[(0,p.jsx)(D,{...n,hasMoreData:A,wall:a,adjustWidth:o,languageSetting:r,clickToShowPopUp:l,cardNumber:d,onClickToCTA:i,postSizeInPx:h})," "]}):null;case 5:return o?(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(f,{...n,hasMoreData:A,wall:a,adjustWidth:o,languageSetting:r,clickToShowPopUp:l,onClickToCTA:i})}):null;case 6:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(P,{...n,wall:a,adjustWidth:o,languageSetting:r,clickToShowPopUp:l,onClickPopUpSlider:c,hasMoreData:A,renderId:t,onClickToCTA:i,parentID:u})});case 16:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(F,{...n,hasMoreData:A,wall:a,adjustWidth:o,languageSetting:r,clickToShowPopUp:l,onClickToCTA:i,postSizeInPx:h,onClickPopUpSlider:c,parentID:u})});case 19:return o?(0,p.jsxs)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:[(0,p.jsx)(j,{...n,hasMoreData:A,wall:a,adjustWidth:o,languageSetting:r,clickToShowPopUp:l,onClickToCTA:i})," "]}):null;case 20:return o?(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(_,{...n,hasMoreData:A,wall:a,adjustWidth:o,languageSetting:r,clickToShowPopUp:l,onClickToCTA:i})}):null;case 47:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(E,{...n,wall:a,adjustWidth:o,languageSetting:r,clickToShowPopUp:l,onClickPopUpSlider:c,hasMoreData:A,renderId:t,onClickToCTA:i,parentID:u})});case 49:return(0,p.jsx)(y,{...n,hasMoreData:A,wall:a,adjustWidth:o,languageSetting:r,clickToShowPopUp:l,onClickToCTA:i});case 50:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(T,{...n,hasMoreData:A,wall:a,adjustWidth:o,languageSetting:r,clickToShowPopUp:l,cardNumber:d,renderId:t,onClickToCTA:i,postSizeInPx:h})});case 52:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(I,{...n,hasMoreData:A,wall:a,adjustWidth:o,languageSetting:r,clickToShowPopUp:l,onClickToCTA:i})});case 55:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(v,{...n,hasMoreData:A,wall:a,adjustWidth:o,languageSetting:r,clickToShowPopUp:l,onClickToCTA:i,onClickPopUpSlider:c,parentID:u})});case 60:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(U,{...n,wall:a,hasMoreData:A,adjustWidth:o,languageSetting:r,clickToShowPopUp:l,onClickToCTA:i,onClickPopUpSlider:c,parentID:u})});case 62:case 63:case 64:case 65:case 66:case 78:case 74:case 75:case 76:case 77:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,s.createElement)(M,{...n,key:b||0,heightUpdate:w,themeHeight:m,hasMoreData:A,wall:a,languageSetting:r,clickToShowPopUp:l,intractiveData:L})});case 67:case 69:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,s.createElement)(C,{...n,key:b||0,hasMoreData:A,wall:a,languageSetting:r,clickToShowPopUp:l,cardNumber:d,intractiveData:L})});case 68:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(z,{...n,hasMoreData:A,wall:a,languageSetting:r,clickToShowPopUp:l,cardNumber:d,intractiveData:L},b||0)});case 70:case 71:case 72:case 73:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,s.createElement)(N,{...n,postData:n,heightUpdate:w,key:b||0,wall:a,themeHeight:m,languageSetting:r,clickToShowPopUp:l,hasMoreData:A,renderId:t,parentID:u,postSizeInPx:h,intractiveData:L})});case 74:case 75:case 76:case 77:return(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(g.default,{error:{themeError:{error_code:204},errorWithMessage:{message:"Silde Show theme doesn`t applicabled on widget",type:"SildeShow"}}})})}}));class O extends s.PureComponent{constructor(){super(...arguments),this.state={windowWidth:window.innerWidth,windowHeight:window.innerHeight,adjustWidth:0,cardNumber:0,postSizeInPx:0,isLoaded:!1,topBanner:0,topEditor:0,ticker:0,themeHeight:0},this.autoLoadEditorScrollData=e=>{const{wall:t,postData:a,loaderData:s}=this.props,n=t.ThemeRule.numberOfPosts;let o=document.getElementsByClassName("wall-editor");if(1==t.Personalization.autoScrollStatus&&l.R4.includes(t.ThemeRule.themeId)&&o.length>0){let e=o[0];if(document.body.scrollHeight+e.scrollTop>=e.scrollHeight-10&&(!s||!s.isShowMoreLoading)){const e=Math.floor(Date.now()/1e3);this.props.getDataNextSteps(t.Wall.id,e,n,a.appendData.networkID,a.appendData.after,a.appendData.heightEvent)}}},this.onResponsiveTheme=e=>{const{wall:t}=this.props;let{windowWidth:a}=this.state;a=2===e?a+165:a;let{adjustWidth:s,cardNumber:n}=(0,r.X8)(a,t);s=(100/a*s).toFixed(2),this.setState({adjustWidth:s,cardNumber:n,postSizeInPx:(0,r.X8)(a,t)})},this.autoLoadScrollData=e=>{const{wall:t,postData:a,loaderData:s}=this.props,n=t.ThemeRule.numberOfPosts,o=document.body,r=document.documentElement;if(1===t.Personalization.autoScrollStatus&&l.R4.includes(t.ThemeRule.themeId)){const e=Math.max(o.scrollHeight,o.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight);if(window.innerHeight+window.pageYOffset>=parseInt(e)-parseInt(50)&&(!s||!s.isShowMoreLoading)){const e=Math.floor(Date.now()/1e3);this.props.getDataNextSteps(t.Wall.id,e,n,a.appendData.networkID,a.appendData.after,a.appendData.heightEvent)}}},this.getPostWidth=(e,t)=>{let a=e/t,s=null,n=null;return n=e%t/Math.trunc(a),s=a>=1?t+n:t-n,s},this.onClickToShowPopup=(e,t)=>a=>this.onLoadPopUp(e,t),this.onClickPopUpSlider=(e,t)=>this.onLoadPopUp(e,t),this.onLoadPopUp=(e,t)=>{const{wall:a,languageSetting:s,postData:o}=this.props,{Personalization:l,ThemeRule:c}=a;if(m.tq&&window.innerWidth<920&&0===a.Personalization.mobilePopup){if("undefined"==t.link)return!1;window.open(t.link,"_blank")}else{let n=o.postData.map((e=>o.completeDataObject[e])).filter((e=>!String(e.id).includes("free_add_"))),i=(0,r.E6)(n,t.id,e);if(2===l.postFeatured){if("undefined"==t.link||""==t.link)return!1;window.open(t.link,"_blank")}else 3===l.postFeatured?window.open(l.customUrl,"_blank"):(1===l.postFeatured||L||a.product)&&this.props.showPopUP({type:"post",card:t,idArray:n,index:i,viewOnText:s.viewOnText,shareText:s.shareText,personalization:l,imgData:r.CC,ThemeRule:c,wall:a})}(0,n.S5)(i.nX?{action:2,wall:a.Wall.id,posts:[{feed:t.feedId,post:t.referenceId?t.referenceId:t.id}],owner:a.Wall.owner}:{action:2,wall:a.Wall.id,feed:t.feedId,post:t.referenceId?t.referenceId:t.id,owner:a.Wall.owner}),(0,n.Fv)("Tagbox","popupclick_","popup",t.link)},this.loadPopUpWithTimer=()=>{const{postData:e}=this.props;let t=e.postData.map((t=>e.completeDataObject[t]));setTimeout((()=>this.onLoadPopUp(1,t[0])),5e3)},this.onClickToCTA=e=>t=>{const{wall:a}=this.props;(0,n.S5)({action:2,wall:a.Wall.id,type:1,feed:e.feedId,post:e.referenceId?e.referenceId:e.id}),(0,n.Fv)("Tagbox","ctaClick","cta",e.cta&&e.cta.url?e.cta.url:"")},this.heightUpdate=()=>{const{isDisplay:e,isEditor:t}=this.props.wall;if(e||(0,r.fv)()){var a=0,s=0,n=0,o=0;setTimeout((()=>{const e=document.querySelector(".tb_wall_header__"),r=document.querySelector(".tb_onsite_upload_btn_wrap"),l=document.getElementById("kt_header"),i=document.getElementById("wtickerTop"),c=document.getElementById(i?"wtickerTop":"wtickerBottom");e&&(a=e.clientHeight),l&&t&&(s=l.clientHeight),c&&(n=c.clientHeight),r&&(o=r.clientHeight);const d=a+s+n+o;this.setState({themeHeight:d})}),t?1e3:500)}}}componentWillMount(){const{renderId:e}=this.props.renderId;this.setState({windowWidth:e?document.getElementById(e).clientWidth:window.innerWidth})}componentDidMount(){const{renderId:e}=this.props.renderId,{wall:t}=this.props;if(t.isDisplay&&(1==t.Personalization.postFeatured&&((0,r.fv)()||this.loadPopUpWithTimer(),this.heightUpdate()),document.querySelector("body").style.overflow="hidden"),!t.isDisplay)if(window.editor){let e=document.getElementsByClassName("wall-editor");e.length>0&&e[0].addEventListener("scroll",this.autoLoadEditorScrollData)}else window.addEventListener&&window.addEventListener("scroll",this.autoLoadScrollData)}componentDidUpdate(e){var t,a;(0,r.fv)()&&(null===(t=this.props.wall)||void 0===t?void 0:t.themeRender)!==(null===(a=e.wall)||void 0===a?void 0:a.themeRender)&&this.props.appData.postData.postData.length>32&&(this.props.appData.postData.postData=this.props.appData.postData.postData.slice(0,32),this.props.updateAppData(this.props.appData.postData))}componentWillUnmount(){window.addEventListener&&window.addEventListener("resize",this.onResponsiveTheme)}render(){const{wall:e,languageSetting:t,postData:a,containerSize:n,themewallData:o,parentID:r,brandingNetworks:l}=this.props,{ThemeRule:i,isDisplay:c,isEditor:d,themeRender:h}=e;return window.onResponsiveTheme=this.onResponsiveTheme,(0,p.jsxs)("div",{className:"tb_theme_container",children:[c&&!d?(0,p.jsx)(w,{}):null,(0,p.jsx)(A,{...this.props,...this.state,onResponsiveTheme:this.onResponsiveTheme,heightUpdate:this.heightUpdate,themewallData:o,clickToShowPopUp:this.onClickToShowPopup,onClickToCTA:this.onClickToCTA,onClickPopUpSlider:this.onClickPopUpSlider,parentID:r}),c||[70,71,73,74,75,76,77].includes(i.themeId)||!e.Personalization.loadMoreStatus?null:(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(x,{languageSetting:t,wall:e,appendData:a.appendData,postData:a},h)}),!c&&a.isFreeAdsStatus?(0,p.jsxs)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:[(0,p.jsx)(S,{containerSize:n,languageSetting:t,brandingNetworks:l,wallId:e.Wall.id})," "]}):null]})}}const B=(0,o.$j)((e=>({loaderData:e.loaderData,renderId:e.renderId,modalPop:e.modalPop,appData:e.appData})),(e=>({showPopUP:t=>e((0,n.Bm)(t)),getDataNextSteps:(t,a,s,o,r,l,i)=>e((0,n.Sx)(t,a,s,o,r,l,i)),updateAppData:t=>e({type:b.XD,payload:t})})))(O),q=s.lazy((()=>a.e(7535).then(a.bind(a,37535)))),X=s.lazy((()=>a.e(6538).then(a.bind(a,66538)))),Y=s.lazy((()=>a.e(7209).then(a.bind(a,67209)))),V=s.lazy((()=>a.e(9181).then(a.bind(a,59181)))),$=s.lazy((()=>a.e(1129).then(a.bind(a,41129)))),Q=s.lazy((()=>a.e(9796).then(a.bind(a,9796))));class K extends s.PureComponent{constructor(e){super(e),this.readAuthenticationCode=e=>{"socketData"==e.key&&e.newValue&&(localStorage.removeItem("socketData"),this.updateThemedata(JSON.parse(e.newValue)))},this.updateThemedata=e=>{e&&Object.keys(e).length>0&&("prepend"==e.type||"remove"==e.type)&&this.setState({updateData:Math.random()},(()=>this.props.updateDataTheme(e)))},this.state={containerSize:{width:null,height:null,updateData:0},parentID:""}}componentDidMount(){window.addEventListener("storage",this.readAuthenticationCode);const e=document.querySelector(".tb_app_container");this.setState({containerSize:{width:e?e.offsetWidth:null,height:e?e.offsetHeight:null}})}componentDidUpdate(){let e=document.querySelector(".tb_app_container");if(e){let t=r.b8?r.b8:e.parentNode.id;this.setState({parentID:t})}}componentWillUnmount(){window.removeEventListener("storage",this.readAuthenticationCode)}render(){const{wall:e,webFilters:t,postData:a,filter_tags:n,announcements:o}=this.props,{isDisplay:c,isEditor:d,ThemeRule:h,UgcSettings:m,Banner:g,CustomTicker:w,Background:b,CustomBannerImage:x,LogoImage:S,BannerImage:j}=e,k=!!(g&&Object.keys(g).length>0&&(1==g.status&&1==g.banner_position||1==j.status)),f=!!(g&&Object.keys(g).length>0&&1==g.status&&2==g.banner_position);[55,52,60,16,47].includes(h.themeId),t&&t.length,n&&n.length;let _=""!=t&&t?t.map((e=>{let{networkId:t}=e;return t})):null;b.image&&b.image.includes(l.ho)&&(b.image.includes("".concat(l.ho,"uploaded/"))?b.image=String(b.image).replace("".concat(l.ho,"uploaded/"),""):b.image.includes("".concat(l.lS,"uploaded/"))&&(b.image=String(b.image).replace(l.v3,"")));const D=b.transparent?{backgroundColor:"transparent"}:{backgroundImage:b.image?"url(".concat(b.image,")"):"",backgroundColor:b.color};return(0,p.jsxs)("div",{className:"tb_app_container temp-class",children:[k?(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(q,{wall:e,isDisplay:c,Banner:g,BannerImage:j,LogoImage:S,CustomBannerImage:x})}):null,c&&w&&Object.keys(w).length>0&&1===w.status&&"1"===w.ticker_position?(0,p.jsx)($,{CustomTicker:w,wall:e,UgcSettings:m}):null,(0,p.jsxs)("div",{className:"tb_app_wrapper",style:D,children:[!c&&e.UserRule.on_site_upload&&m.onsite_status&&m.onsite_button_status&&![74,75,76,77].includes(h.themeId)||i.nX&&e.UgcSettings.onsite_status?(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(X,{UgcSettings:m,id:e.Wall.id})}):null,(0,p.jsx)(B,{...this.props,brandingNetworks:_,containerSize:this.state.containerSize,parentID:this.state.parentID},e.product),a&&a.completeDataObject?(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(Y,{completeDataObject:a.completeDataObject,postData:a.postData})}):null,e&&e.UserRule.branding&&(!d||(0,r.Qe)())?(0,p.jsx)(u,{...this.props}):null,c&&(!d||window.location.href.includes("studio=1"))&&o&&Object.keys(o).length>0?(0,p.jsx)(V,{newApi:this.props}):null]}),f?(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(q,{wall:e,isDisplay:c,Banner:g,BannerImage:j,LogoImage:S,CustomBannerImage:x})}):null,c&&w&&Object.keys(w).length>0&&1===w.status&&"2"===w.ticker_position?(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(Q,{wall:e,UgcSettings:m})}):null]})}}const G=(0,o.$j)((e=>{if(!0===e.postHeight.manage_height){return{postHeight:e.postHeight.data.replace("px",""),renderId:e.renderId,modalPop:e.modalPop}}return{renderId:e.renderId}}),(e=>({managePostHeight:t=>e((0,n.B0)(t)),updateDataTheme:t=>e((0,c.ho)(t))})))(K)}}]);