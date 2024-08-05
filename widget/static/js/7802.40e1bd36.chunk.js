"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7802],{17802:(e,t,i)=>{i.r(t),i.d(t,{default:()=>j});var s=i(47313),a=i(17739),n=i(98501);const l=s.createContext({}),o=!0;function c(e){let{baseColor:t,highlightColor:i,width:s,height:a,borderRadius:n,circle:l,direction:c,duration:h,enableAnimation:r=o}=e;const d={};return"rtl"===c&&(d["--animation-direction"]="reverse"),"number"===typeof h&&(d["--animation-duration"]="".concat(h,"s")),r||(d["--pseudo-element-display"]="none"),"string"!==typeof s&&"number"!==typeof s||(d.width=s),"string"!==typeof a&&"number"!==typeof a||(d.height=a),"string"!==typeof n&&"number"!==typeof n||(d.borderRadius=n),l&&(d.borderRadius="50%"),"undefined"!==typeof t&&(d["--base-color"]=t),"undefined"!==typeof i&&(d["--highlight-color"]=i),d}function h(e){let{count:t=1,wrapper:i,className:a,containerClassName:n,containerTestId:h,circle:r=!1,style:d,...m}=e;var u,p,g;const w=s.useContext(l),v={...m};for(const[s,l]of Object.entries(m))"undefined"===typeof l&&delete v[s];const x={...w,...v,circle:r},b={...d,...c(x)};let f="react-loading-skeleton";a&&(f+=" ".concat(a));const j=null!==(u=x.inline)&&void 0!==u&&u,y=[],k=Math.ceil(t);for(let l=0;l<k;l++){let e=b;if(k>t&&l===k-1){const i=null!==(p=e.width)&&void 0!==p?p:"100%",s=t%1,a="number"===typeof i?i*s:"calc(".concat(i," * ").concat(s,")");e={...e,width:a}}const i=s.createElement("span",{className:f,style:e,key:l},"\u200c");j?y.push(i):y.push(s.createElement(s.Fragment,{key:l},i,s.createElement("br",null)))}return s.createElement("span",{className:n,"data-testid":h,"aria-live":"polite","aria-busy":null!==(g=x.enableAnimation)&&void 0!==g?g:o},i?y.map(((e,t)=>s.createElement(i,{key:t},e))):y)}var r=i(46417);const d=e=>{let{height:t}=e;return(0,r.jsxs)("div",{className:"post",children:[(0,r.jsx)("div",{className:"tb_slide_w_half",children:(0,r.jsx)("div",{className:"makeBgImg",children:(0,r.jsx)(h,{style:{height:"calc(85vh - 80px)",marginTop:"5vh"}})})}),(0,r.jsx)("div",{className:"tb_slide_w_half",children:(0,r.jsx)("div",{className:"skeletonContent",children:(0,r.jsxs)("div",{className:"skeltoncss",children:[(0,r.jsxs)("div",{className:"section-one-skel",children:[(0,r.jsx)(h,{circle:!0,height:100,width:100}),(0,r.jsx)("h4",{children:(0,r.jsxs)("div",{className:"skel-span-m",children:[(0,r.jsx)("p",{children:(0,r.jsx)(h,{height:15})}),(0,r.jsx)("p",{children:(0,r.jsx)(h,{height:15})}),(0,r.jsx)("p",{className:"s-sket-m",children:(0,r.jsx)(h,{height:15})})]})})]}),(0,r.jsxs)("div",{className:"section-two-skel",children:[(0,r.jsx)(h,{circle:!0,height:80,width:80}),(0,r.jsxs)("div",{className:"skel-span-m2",children:[(0,r.jsx)("p",{children:(0,r.jsx)(h,{height:15})}),(0,r.jsx)("p",{className:"sket-two-m",children:(0,r.jsx)(h,{height:15})})]})]})]})})})]})},m=s.lazy((()=>Promise.all([i.e(6390),i.e(622),i.e(510),i.e(8086)]).then(i.bind(i,84252))));let u=null,p=null,g=null,w=null,v=null,x=null,b=null;class f extends s.PureComponent{constructor(){super(...arguments),this.state={isLoading:!0,isAnimation:!0,isActiveIndex:-1,activeData:null,activeVideoLength:0,active:"",newImage:"",getHeight:0,wHeight:window.innerHeight,BannerImageHeight:0,checkThemeheight:!1,slideTheme:!1},this.resizeUpdate=()=>{b=setTimeout((()=>{this.setState({wHeight:window.innerHeight},(()=>this.onFullscreenChange())),(0,a.OX)()}),300)},this.clearData=()=>{this.clearTime()},this.clearTime=()=>{this.setState({activeVideoLength:1}),window.removeEventListener("resize",this.resizeUpdate),x&&clearTimeout(x),u&&clearTimeout(u),p&&clearTimeout(p),w&&clearTimeout(w),g&&clearTimeout(g),v&&clearTimeout(v),b&&clearTimeout(b)},this.onFullscreenChange=()=>{const{heightUpdate:e}=this.props;e(),this.setState({wHeight:window.innerHeight}),u=setTimeout((()=>this.setState({checkThemeheight:!0})),100)},this.onChangeNextData=()=>{const{postData:e,completeDataObject:t,wall:i}=this.props,{isActiveIndex:s,activeVideoLength:n}=this.state,{Personalization:l,ThemeRule:o}=i,c=e.postData;let h=[];if(c&&c.length>0&&e.postData.map((e=>{(l.postAuthor||l.postTime||!o.hideContent||t[e].postFileNew)&&8177693==t[e].id&&h.push(t[e])})),0===n){const e=s>=h.length-1?0:s+1,t=h[e],i=0!==e,n=(0,a.V2)(t.networkId,t.carausel,t.file,t.postFileNew);this.setState({isActiveIndex:e,activeData:t,active:"",newImage:n,isAnimation:i},(()=>{this.onRepeatLoad(),(0,a.OX)()}))}},this.onRepeatLoad=()=>{const{wall:e}=this.props,t=e.Personalization.slideDelay,i=t?1e3*(t||10):5e3,{activeVideoLength:s}=this.state;0===s&&(p=setTimeout((()=>this.setState({active:"active"})),200),g=setTimeout((()=>this.setState({isAnimation:!1})),700),w&&clearTimeout(w),v&&clearTimeout(v),v=setTimeout((()=>this.setState({isLoading:!1},(()=>this.onChangeNextData()))),i))},this.getVideoDuration=e=>{const{activeData:t}=this.state;3!==t.type&&5!==t.type||(this.setState({activeVideoLength:1}),w=setTimeout((()=>{this.setState({activeVideoLength:0}),this.onChangeNextData()}),1e3*Math.floor(e)))},this.updateNewImage=e=>this.setState({newImage:e.target.src})}componentDidMount(){window.addEventListener("resize",(()=>this.setState({wHeight:window.innerHeight},(()=>this.resizeUpdate())))),this.resizeUpdate(),window.clearData=this.clearData,this.onChangeNextData(),x=setTimeout((()=>this.setState({slideTheme:!0})),300)}componentWillReceiveProps(){this.onFullscreenChange()}componentWillUnmount(){this.clearTime()}render(){const{wall:e,themeHeight:t}=this.props,{Personalization:i,ThemeRule:a}=e,{activeData:l,isActiveIndex:o,active:c,newImage:h,wHeight:u,checkThemeheight:p}=this.state;var g="",w={},v="".concat(!a.hideContent||i.postTime||i.postAuthor?"tb_slide_w_half":"tb_slide_w_full"),x="tb_slide_w_half";if(l&&l.id){1===l.type?(v="hidden",x="tb_slide_w_full",g="onlyTextPost"):4!==l.type&&5!==l.type||(g="postTypeImg");var b="makeBgImg";3!==l.type&&5!==l.type||(b="blackBgVideo"),w=l.file?{backgroundImage:"url(".concat(h,"),url(").concat(n.V4,")")}:{backgroundImage:"url(".concat(n.do,"/images/blank.jpg)")};var f="";0===a.blurBackground&&(w={backgroundColor:a.blurColor,filter:"blur(0px)",WebkitFilter:"blur(0px)",MozFilter:"blur(0px)",opacity:1},f="blurRemoved")}return p?e&&(0,r.jsx)("div",{id:"wPosts",className:"theme".concat(a.themeId," themeSlidShows zoomSlidShow"),style:{height:u-(t+1),backgroundColor:e.Background.transparent?"#000":e.Background.color},children:(0,r.jsxs)("div",{className:"".concat([74,76].includes(a.themeId)?"tb_slide_show_wrapper":"tb_slide_show_wrapper_no_padding"),children:[(0,r.jsx)("div",{className:"grid-sizer flatCard"}),l&&l.id&&(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(d,{}),children:c?(0,r.jsxs)(s.Suspense,{children:[(0,r.jsx)(m,{updateNewImage:this.updateNewImage,activeData:l,typeClass:g,blurStyle:w,blurClass:f,mediaClass:b,columnLeftClass:v,columnRightClass:x,wall:e,getVideoDuration:this.getVideoDuration,activeIndex:o,active:c})," "]}):null})]})}):null}}const j=f}}]);