"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9181],{59181:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});var a=t(47313),o=t(17739),s=t(98501),i=t(46417);const l={wAnnouncementsOverLay:{position:"fixed",zIndex:99999,top:0,right:0,bottom:0,left:0},blurBg:{position:"absolute"},backgroundWhite:{backgroundColor:"white"},setFont:{fontSize:24,color:"black"}};class r extends a.PureComponent{constructor(){super(...arguments),this.state={announcementData:null,announcementDataKeys:null,timeStamp:Math.floor(Date.now()/1e3),imageError:!1},this.timeInterval=null,this.onLoadAnnouncements=()=>{const{newApi:e}=this.props;let n=e.announcements,t=Object.keys(n).map((e=>n[e]));this.setState({announcementData:n,announcementDataKeys:t,timeStamp:Math.floor(Date.now()/1e3),imageError:!1},(()=>this.announcementTimeIntervalData()))},this.announcementTimeIntervalData=()=>{this.timeInterval&&clearInterval(this.timeInterval);const{announcementDataKeys:e,announcementData:n}=this.state;null!=e&&null!=n&&(this.timeInterval=(0,o.IS)((()=>this.onLoadAnnouncements()),1e4))}}componentDidMount(){this.onLoadAnnouncements()}render(){const{announcementDataKeys:e,timeStamp:n,imageError:t}=this.state;return(0,i.jsx)(a.Fragment,{children:null!==e?e.map(((e,a)=>{const{timeIntervalRepeatOnce:r,announcementTimeInterval:c,announcementEndTime:m}=(0,o.Js)(n,e.showAt,e.endAt,e.every,a);if((0===r||r<10&&r>=0)&&n>=c){let o="".concat(s.ho).concat(e.mediaFile);return e.mediaFile.includes("https://cloud.socialwalls.com/")&&(o=e.mediaFile),(0,i.jsxs)("div",{id:"wAnnouncementsOverLay",style:{display:isNaN(m)||n<=m?"":"none",...l.wAnnouncementsOverLay},children:[(0,i.jsx)("div",{className:"blur-bg",style:l.blurBg}),(0,i.jsx)("div",{className:"wAnnouncementsOverLay","data-color":"#000000","data-font":"font26","data-fontsize":"24px","data-cardcolor":"#ffffff",children:(0,i.jsx)("div",{className:"cstmModalPopup taggModalShow anouncementModal disModalPopup modal-text-image fade in",children:(0,i.jsx)("div",{className:"taggModal",style:window.innerWidth>768?{left:0,right:0,top:0,margin:0}:{},children:(0,i.jsxs)("div",{className:"taggModalContent",children:[t||""==e.mediaFile?null:(0,i.jsx)("div",{className:"taggImageHolder centerAlign ".concat(window.innerWidth>768?"instaMainImg":""),style:2===e.type?{width:"100%"}:{},children:(0,i.jsx)("img",{src:o,onError:()=>this.setState({imageError:!0}),className:"img-responsive",alt:""})}),1===e.type||4===e.type?(0,i.jsx)("div",{className:"taggContentHolder social-icon-pos-bottom",style:{...l.backgroundWhite,position:2===e.type||4===e.type?"absolute":"inherit",width:t||""==e.mediaFile?"100%":"50%"},children:(0,i.jsx)("div",{className:"setFont",style:l.setFont,children:e.description})}):null]})})})})]},a)}return null})):null})}}}}]);