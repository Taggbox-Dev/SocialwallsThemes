(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[589],{66538:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>p});var o=n(47313),s=n(97914),i=n(43411),a=n(98501),c=n(40475),r=n(35179),_=n(46417);class l extends o.PureComponent{render(){const{UgcSettings:t,id:e,tagShopWallId:n}=this.props;var o=window.ugcSuite||window.location.href.includes("ugcSuite=1")?{ugcSuite:1}:{};const i=Object.keys(o).length>0?"&ugcSuite=1":"",c=!(n||!r.ig),l=t.onsite_qr_code_status||""!=t.onsite_qr_code_btn_text?t.onsite_qr_code_btn_text:"",p=r.ig?"".concat(a.oC,"/").concat(e,"/onsite-upload").concat(c?"?wall=1":""):"".concat(r.bX&&!r.aL?a.Nf:a.nn,"/").concat(e,"?onsite-upload=true").concat(i),d=r.bX&&!r.aL?l.length<31?"tb_snap_btn_wall tb_snap_btn_wall_v":"tb_snap_btn_wall":"",u=null!==t&&void 0!==t&&t.onsite_overlay_poisition?" tb_pos-".concat(t.onsite_overlay_poisition):null;return!t.onsite_status||!r.ig&&!t.onsite_button_status||1!=t.onsite_qr_code_status&&""===l?null:(0,_.jsx)("div",{className:"tb_onsite_upload_btn_wrap ".concat(d).concat(u),children:(0,_.jsxs)("div",{className:"tb_onsite_upload_btn",children:[(0,_.jsx)("div",{className:"tb_snap_btn_bg",style:{opacity:r.bX?.7:null},children:(0,_.jsx)("div",{})}),(0,_.jsx)("div",{className:"tb_onsite_btn",onClick:()=>window.editor||window.location.href.includes("editor=1")?this.props.onSitePopup(!1):this.props.onSitePopup(!0),children:(0,_.jsxs)("div",{className:"tb_onsite_qr_btn_wrap",children:[1==t.onsite_qr_code_status?(0,_.jsx)("div",{className:"tb_onsite_qr_code",children:(0,_.jsx)(s.ZP,{level:"L",size:60,value:p})}):null,""!==l?(0,_.jsx)("div",{className:"tb_onsite_btn_txt tb-cTBfont-".concat(t.onsite_font_varient_btn),children:l}):""]})})]})})}}const p=(0,i.$j)((t=>({modalPop:t.modalPop})),(t=>({onSitePopup:e=>t((0,c.wg)(e))})))(l)},61729:(t,e,n)=>{"use strict";var o=n(79165);function s(){}function i(){}i.resetWarningCache=s,t.exports=function(){function t(t,e,n,s,i,a){if(a!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:s};return n.PropTypes=n,n}},75192:(t,e,n)=>{t.exports=n(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);