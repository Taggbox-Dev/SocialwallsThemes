"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4261],{97915:(t,e,i)=>{i.d(e,{Z:()=>u});var a=i(47313),o=i(43411),s=i(83773),d=i(6119),n=i(17739),r=i(46417);const c=(0,s.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),h=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,i=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",a=t.product_price>0||t.product_discount>0?"".concat(i,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(a,"\n        </a>")};class l extends a.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,a=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return a.status?(0,r.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const o=(0,n.i1)();return(0,r.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(o),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(i==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ ".concat(0==a.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,r.jsx)(c,{children:(0,r.jsx)(d.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(o),clickable:!0,html:h(t.UgcProduct)})})]},e)}))}):null}}const u=(0,o.$j)((t=>({appData:t.appData})))(l)},84261:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var a=i(47313),o=i(40475),s=i(97915),d=i(2406),n=i(17739),r=i(98501),c=i(35179),h=i(46417);class l extends a.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const i=document.querySelector(".track".concat(this.props.data.id));i&&(i.setAttribute("data-height",e),i.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:i}=await(0,d.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t,size:{height:parseInt(i),width:parseInt(t)}})}catch(i){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(i){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:i}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:i})}componentDidMount(){const{data:t,hotspot:e,size:i}=this.props;!i||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:i})}render(){const{ImageClass:t,data:e,wallID:i,themeID:a,ownerId:d,hotspot:l}=this.props,{imgUrl:u,paddingBottom:p,size:g,fixedPaddingBottom:_,imgSize:m,noPadding:w}=this.state,f={paddingBottom:"".concat(this.props.size?1==this.props.size?null:_:p,"%")},v={backgroundImage:"url(".concat(m.small,")")};if(g.width>g.height)var b="100%",S="".concat(g.height/g.width*100,"%");else S="100%",b="".concat(g.width/g.height*100,"%");const I=!!(e.hotspot&&e.ugc_products.length>0&&l),y={width:I&&this.props.size?b:null,height:I&&this.props.size?S:null};return(0,h.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:f,children:[I?(0,h.jsx)("div",{className:"tb_blur_bg_",style:v}):null,(0,h.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:y,children:[I?(0,h.jsx)(s.Z,{product:e.ugc_products}):null,(0,h.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:m.small,srcSet:c.bX&&w?"".concat(m.large,", 991w ").concat(m.small,", 480w"):null,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":i,"data-owner-id":d,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":a,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/error/no-image.svg"),(0,o.ht)(t)},alt:(0,n.P)(u)})]})]})}}},2406:(t,e,i)=>{e.Ad=void 0;var a=i(84228);var o=i(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return o.getImageSize}});var s=i(22537)},84228:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const a=i(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,o)=>{if("undefined"===typeof window)return o(a.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return o(a.ErrorMessage.URL_IS_NOT_DEFINED);let s=null;const d=new Image;d.addEventListener("load",(()=>{s&&window.clearTimeout(s),i({width:d.naturalWidth,height:d.naturalHeight})})),d.addEventListener("error",(t=>{s&&window.clearTimeout(s),o("".concat(t.type,": ").concat(t.message))})),d.src=t,e.timeout&&(s=window.setTimeout((()=>o(a.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,i){var a=this&&this.__awaiter||function(t,e,i,a){return new(i||(i=Promise))((function(o,s){function d(t){try{r(a.next(t))}catch(e){s(e)}}function n(t){try{r(a.throw(t))}catch(e){s(e)}}function r(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(d,n)}r((a=a.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const o=i(47313),s=i(65786);e.useImageSize=(t,e)=>{const[i,d]=(0,o.useState)(null),[n,r]=(0,o.useState)(!1),[c,h]=(0,o.useState)(null);return(0,o.useEffect)((()=>{a(void 0,void 0,void 0,(function*(){r(!0),d(null);try{const{width:i,height:a}=yield(0,s.getImageSize)(t,e);d({width:i,height:a})}catch(c){h(c.toString())}finally{r(!1)}}))}),[t,e]),[i,{loading:n,error:c}]}}}]);