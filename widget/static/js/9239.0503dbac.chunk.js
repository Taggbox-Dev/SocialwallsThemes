"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9239],{89239:(r,e,t)=>{t.r(e),t.d(e,{default:()=>n});var a=t(47313),c=t(17739),o=t(98935),s=t(46417);class n extends a.PureComponent{constructor(r){super(r),this.state={isAuthorImagevalid:!0}}render(){const{author:r,authorClass:e,network:t}=this.props;return(0,s.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,s.jsx)("img",{className:"".concat(e,"__"),src:r.picture&&String(r.picture).includes("author.png")?" ":r.picture.replace(/[ ]+/g,""),alt:(0,c.P)(r.picture),width:44,height:44,onError:e=>{const a="#ffffff"==t.color?"#000":t.color;e.target.src=r.errorPic?r.errorPic:"https://ui-avatars.com/api/?name=".concat(r.name.replace(/\s/g,""),"&background=").concat(String(null===t.id?"#000":a).replace("#",""),"&color=fff&length=1"),e.target.alt=r.name}}):(0,s.jsx)(o.Z,{authorClass:e,username:r.name,network:t,color:null===t.id?"#000":t.color,errorPic:r.errorPic})},Math.random())}}},98935:(r,e,t)=>{t.d(e,{Z:()=>s});var a=t(47313),c=t(46417);const o=r=>{let{username:e,network:t,authorClass:a,errorPic:o}=r;const s="#ffffff"==t.color?"#000":t.color;return(0,c.jsx)("img",{className:"".concat(a,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===t.id?"#000":s).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},s=(0,a.memo)(o)}}]);