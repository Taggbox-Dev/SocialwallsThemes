"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7329],{83704:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var s=i(47313),a=i(31881),l=i.n(a),o=i(68375),r=(i(19161),i(46417));const d=()=>(0,r.jsxs)("div",{className:"uppy-Root uppy-StatusBar is-postprocessing","aria-hidden":"false",dir:"ltr",children:[(0,r.jsx)("div",{className:"uppy-StatusBar-progress is-indeterminate",role:"progressbar","aria-label":"100%","aria-valuetext":"100%","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"100",style:{width:"100%"}}),(0,r.jsxs)("div",{className:"uppy-StatusBar-content",children:[(0,r.jsx)("svg",{className:"uppy-StatusBar-spinner","aria-hidden":"true",focusable:"false",width:"14",height:"14",children:(0,r.jsx)("path",{d:"M13.983 6.547c-.12-2.509-1.64-4.893-3.939-5.936-2.48-1.127-5.488-.656-7.556 1.094C.524 3.367-.398 6.048.162 8.562c.556 2.495 2.46 4.52 4.94 5.183 2.932.784 5.61-.602 7.256-3.015-1.493 1.993-3.745 3.309-6.298 2.868-2.514-.434-4.578-2.349-5.153-4.84a6.226 6.226 0 0 1 2.98-6.778C6.34.586 9.74 1.1 11.373 3.493c.407.596.693 1.282.842 1.988.127.598.073 1.197.161 1.794.078.525.543 1.257 1.15.864.525-.341.49-1.05.456-1.592-.007-.15.02.3 0 0",fillRule:"evenodd"})}),"Uploading..."]})]});var n=i(30192),c=i.n(n),h=i(66266),p=i.n(h),u=i(35179);const m=class{constructor(e,t){let i="media/tmpimages/",s="cloud.tagbox.com";u.nX&&(i="ugc-suite/tmp/",s="cloud.tagbox.com"),this.uppy=new(c())({meta:{type:"avatar"},autoProceed:!0,debug:!0,allowMultipleUploads:!0,restrictions:{maxFileSize:104857600,maxNumberOfFiles:1,minNumberOfFiles:1,allowedFileTypes:["image/*","video/*"]},onBeforeFileAdded:e,onBeforeUpload:t}),this.uppy.use(p(),{params:{auth:{key:"0701d3d7f8d94e92a65a9cba388b1d96"},steps:{store:{robot:"/wasabi/store",bucket_region:"us-west-1",result:!0,bucket:s,key:"47ABVORKG52UYE1KB28S",secret:"pcaTfeokaz28geAAns08H3yaGbOVz6ILgTptu19v",path:i+"${file.id}.${file.ext}"}}},waitForEncoding:!0})}};var x=i(17739),g=i(98501);class f extends s.Component{constructor(){super(...arguments),this.state={isLoading:!1,selectedFile:null,selectedUrl:null,type:null,thumb_file:"",fileSize:!1,filemaxSize:0,throwError:!1,videoPath:"",fileSizeText:"",ext:null,size:0,fileName:null,mediaHeight:0,mediaWidth:0},this.beforeFileAdded=(e,t)=>{(0,x.AB)(1);const{size:i,sizeText:s}=(0,x.RD)(e.size);if(["GB","TB"].includes(s))this.setState({fileSize:!0,fileSizeText:"".concat(i).concat(s)},(()=>setTimeout((()=>this.setState({fileSize:!1,fileSizeText:""})),2e3))),(0,x.AB)(2);else if("MB"==s){const t=e.meta.type.includes("image")?4:5,a=4==t?15:100;if(i>=a)return this.setState({type:t,filemaxSize:a,fileSize:!0,fileSizeText:"".concat(i).concat(s)},(()=>setTimeout((()=>this.setState({fileSize:!1,fileSizeText:""})),5e3))),(0,x.AB)(2),!1}},this.beforeUpload=e=>{const t=Object.keys(e);if(t&&t.length>0&&e[t[0]]&&e[t[0]].meta&&e[t[0]].meta.type.includes("video")){try{const{onsite_token:i}=this.props;this.setState({isLoading:!0});const s=e[t[0]],a=new FormData;a.append("file",s.data),a.append("onsite_token",i),l().post(u.so,a).then((e=>{const{responseData:t}=e.data;t&&t.length>0&&(this.setState({videoPath:t[0].sscode,isLoading:!1,type:5,selectedFile:t[0].s3Url,selectedUrl:t[0].s3Url,thumb_file:t[0].s3ThumbUrl,ext:s.extension,size:s.size,fileName:s.name,mediaHeight:t[0].height,mediaWidth:t[0].width},(()=>this.onUpdateLocalState())),(0,x.AB)(2))})).catch((e=>{this.setState({isLoading:!1,throwError:!0},(()=>setTimeout((()=>this.setState({throwError:!1})),2e3))),this.uppyUploader.uppy.reset(),(0,x.AB)(2)}))}catch(i){this.setState({isLoading:!1,throwError:!0},(()=>setTimeout((()=>this.setState({throwError:!1})),2e3))),this.uppyUploader.uppy.reset(),(0,x.AB)(2)}return!1}},this.uppyUploader=new m(this.beforeFileAdded,this.beforeUpload),this.onUpdateLocalState=()=>{const{addPostImage:e,isActiveIndex:t}=this.props,{selectedUrl:i,type:s,thumb_file:a,videoPath:l,ext:o,size:r,fileName:d,mediaHeight:n,mediaWidth:c}=this.state;e(i,5===s?a:i,l,s,t,o,r,d,n,c),this.setState({selectedFile:null,selectedUrl:null,type:null,thumb_file:"",fileSize:!1,fileSizeText:"",videoPath:"",ext:null,size:0,fileName:null,mediaHeight:0,mediaWidth:0},(()=>this.uppyUploader.uppy.reset()))}}componentDidMount(){this.uppyUploader.uppy.on("transloadit:result",((e,t)=>{const i=t.meta.orientation&&"Rotate 90 CW"==t.meta.orientation?t.meta.width:t.meta.height,s=t.meta.orientation&&"Rotate 90 CW"==t.meta.orientation?t.meta.height:t.meta.width;let a="".concat(g.ho,"media/tmpimages/");u.nX&&(a="https://cloud.tagbox.com/ugc-suite/tmp/"),this.setState({type:t.mime.includes("video")?5:4,selectedFile:t.id,selectedUrl:"".concat(a).concat(t.id,".").concat(t.ext),ext:t.ext,size:t.size,fileName:t.name,mediaHeight:i,mediaWidth:s},(()=>this.onUpdateLocalState())),(0,x.AB)(2)})),this.uppyUploader.uppy.on("file-removed",((e,t)=>{(0,x.AB)(2)}))}render(){const{isLoading:e,fileSize:t,throwError:i,fileSizeText:s,filemaxSize:a,type:l}=this.state,{snapContent:n}=this.props;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.v0,{note:n.contentSize,uppy:this.uppyUploader.uppy,allowMultipleFiles:!1,locale:{strings:{dropHereOr:n.uploadText,browse:""}}}),(0,r.jsxs)("div",{className:"tb_onsite_uploader_status",children:[(0,r.jsx)(o.A_,{uppy:this.uppyUploader.uppy,hideUploadButton:!0,hideAfterFinish:!1,showProgressDetails:!0}),e?(0,r.jsx)(d,{}):null,t?(0,r.jsxs)("div",{className:"tb_onsite_uploader_limit_error submit_limit_size",style:{marginTop:5,display:"flex",alignItems:"center"},children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1",children:(0,r.jsxs)("g",{id:"Stockholm-icons-/-Code-/-Info-circle",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[(0,r.jsx)("rect",{id:"bound",x:"0",y:"0",width:"24",height:"24"}),(0,r.jsx)("circle",{id:"Oval-5",fill:"#db4b20",opacity:"0.3",cx:"12",cy:"12",r:"10"}),(0,r.jsx)("rect",{id:"Rectangle-9",fill:"#db4b20",x:"11",y:"10",width:"2",height:"7",rx:"1"}),(0,r.jsx)("rect",{id:"Rectangle-9-Copy",fill:"#db4b20",x:"11",y:"7",width:"2",height:"2",rx:"1"})]})}),n.limitErr.replace("--size--",s)]}):null,i?(0,r.jsxs)("div",{className:"tb_onsite_uploader_limit_error submit_limit_size",style:{marginTop:5,display:"flex",alignItems:"center"},children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1",children:(0,r.jsxs)("g",{id:"Stockholm-icons-/-Code-/-Info-circle",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[(0,r.jsx)("rect",{id:"bound",x:"0",y:"0",width:"24",height:"24"}),(0,r.jsx)("circle",{id:"Oval-5",fill:"#db4b20",opacity:"0.3",cx:"12",cy:"12",r:"10"}),(0,r.jsx)("rect",{id:"Rectangle-9",fill:"#db4b20",x:"11",y:"10",width:"2",height:"7",rx:"1"}),(0,r.jsx)("rect",{id:"Rectangle-9-Copy",fill:"#db4b20",x:"11",y:"7",width:"2",height:"2",rx:"1"})]})}),"Something went wrong , Please try again."]}):null]})]})}}const y=f}}]);