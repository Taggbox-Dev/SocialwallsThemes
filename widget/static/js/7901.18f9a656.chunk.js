(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7901],{17901:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>P});var s=i(47313),n=i(43411),a=i(46417);class o extends s.Component{constructor(){super(...arguments),this.state={uploadHide:!0},this.handleHide=e=>this.setState({uploadHide:!1})}render(){const{onClickToUpdateStep:e,isActiveIndex:t,isAddMoreActive:i,addCaption:s,item:n,onClickToUpdateMoreStep:o,defaultLabel:r}=this.props,{captionPH:l,captionErr:c,skipBtn:d,nextBtn:u}=r;return(0,a.jsxs)("div",{className:"tb_onsite_add_caption_tab",children:[(0,a.jsxs)("div",{className:"tb_onsite_form_group",children:[(0,a.jsx)("textarea",{className:"tb_onsite_form_control_textarea",rows:"2",placeholder:l,onChange:s(t),value:n&&n.caption?n.caption:""}),n.error?(0,a.jsxs)("div",{className:"tb_onsite_error",children:["* ",c]}):null]}),(0,a.jsxs)("div",{className:"tb_onsite_form_actions",style:n&&i?{justifyContent:"space-between"}:null,children:[n&&i?(0,a.jsx)("div",{className:"tb_onsite_btn_secondary",onClick:o(2),children:d}):null,(0,a.jsx)("div",{className:"tb_onsite_btn_primary",id:"tb_onsite_btn_id",onClick:e(2),children:u})]})]})}}const r=o;var l=i(97626);class c extends s.Component{render(){const{upload_image:e,onClickToRemove:t,onClickToEdit:i}=this.props;return(0,a.jsx)(a.Fragment,{children:e&&e.map(((e,s)=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"tb_onsite_post_area",children:[(0,a.jsxs)("div",{className:"tb_onsite_post_info",children:[e.thumb_file?(0,a.jsx)("div",{className:"tb_onsite_post_media",style:{backgroundImage:"url(".concat(e.thumb_file,")")}}):null,(0,a.jsxs)("div",{className:"tb_onsite_post_content_wrap",children:[(0,a.jsxs)("div",{className:"tb_onsite_post_content__",children:[" ",e.caption&&e.caption.length>0?e.caption:e.review&&e.review.length>0?e.review:null]}),""==e.caption&&e.rating||e.review&&e.review.length>0?(0,a.jsx)(l.Z,{edit:!1,count:5,size:20,value:e.rating}):null]})]}),(0,a.jsxs)("div",{className:"tb_onsite_post_actions",children:[(0,a.jsx)("div",{className:"tb_onsite_edit_post",onClick:i(s),children:(0,a.jsx)("div",{className:"tb_onsite_edit_icon tb__icon tb-edit",children:(0,a.jsx)("div",{})})}),(0,a.jsx)("div",{className:"tb_onsite_remove_post",onClick:t(s),children:(0,a.jsx)("div",{className:"tb_onsite_remove_icon tb__icon tb-delete",children:(0,a.jsx)("div",{})})})]})]})})))})}}const d=c;class u extends s.Component{render(){const{submitError:e,termsCheck:t,submitErrorMessage:i,wall:s,onClickToaddMore:n,onSubmitPostData:o,upload_image:r,onClickToRemove:l,isEdit:c,onTextName:u,onTextEmail:m,email:h,name:p,nameError:_,emailError:g,onClickToEdit:v,apiRequest:b,errorClickMore:f,defaultLabel:x}=this.props,{infoH:S,infoSubH:y,inputNL:j,inputNPH:E,inputNErr:w,inputEL:N,inputEPH:k,inputEErr:T,termsText:C,termsLT:M,onePostErr:P,detailErr:I,addMPBtn:A,submitBtn:U}=x;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"tb_onsite_box_title",children:[(0,a.jsx)("div",{className:"tb_onsite_title",children:S}),(0,a.jsxs)("div",{className:"tb_onsite_sub_heading",children:[(0,a.jsx)("div",{className:"tb_onsite_sup",children:"*"})," ",y]})]}),(0,a.jsx)("div",{className:"tb_onsite_box_body",children:(0,a.jsxs)("div",{className:"tb_onsite_tabs_content",children:[r&&r.length>0?(0,a.jsx)(d,{upload_image:r,onClickToRemove:l,isEdit:c,onClickToEdit:v}):null,(0,a.jsx)("div",{className:"tb_onsite_form",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"tb_onsite_form_group",children:[(0,a.jsxs)("div",{className:"tb_onsite_form_label",children:[j,(0,a.jsx)("div",{className:"tb_onsite_sup",children:"*"})]}),(0,a.jsx)("input",{type:"text",className:"tb_onsite_form_control",placeholder:E,onChange:u,value:p}),_?(0,a.jsx)("div",{className:"tb_onsite_error",children:w}):null]}),(0,a.jsxs)("div",{className:"tb_onsite_form_group",children:[(0,a.jsxs)("div",{className:"tb_onsite_form_label",children:[N,(0,a.jsx)("div",{className:"tb_onsite_sup",children:"*"})]}),(0,a.jsx)("input",{type:"email",className:"tb_onsite_form_control",placeholder:k,onChange:m,value:h}),g?(0,a.jsx)("div",{className:"tb_onsite_error",children:T}):null]}),[104746].includes(s.Wall.owner)?(0,a.jsxs)("div",{className:"tb_onsite_terms_condition",children:[(0,a.jsxs)("label",{style:{display:"flex"},children:[(0,a.jsx)("input",{onClick:e=>t(e.target.checked?1:0),className:"display-flex",type:"checkbox"}),(0,a.jsx)("span",{style:{marginLeft:"5px"},children:" I agree to CALM using my story for marketing purposes --"})]}),(0,a.jsx)("a",{style:{color:"#1154cc",fontWeight:"normal",fontSize:"11px",paddingLeft:"26px"},href:s.UgcSettings.onsite_term_url,target:"_blank",children:" click for more information on how your story will be used."})]}):(0,a.jsxs)("div",{className:"tb_onsite_terms_condition",children:[C,(0,a.jsxs)("a",{href:s.UgcSettings.onsite_term_url,target:"_blank",children:[" ",M," *"]})]}),e?(0,a.jsxs)("div",{className:"tb_onsite_error",children:["* ",i||(r&&0==r.length?P:I)]}):null,(0,a.jsxs)("div",{className:"tb_onsite_form_actions_footer",children:[(0,a.jsxs)("div",{className:"tb_onsite_btn_wrapper",children:[(0,a.jsxs)("div",{className:"tb_onsite_btn_secondary",onClick:n,children:["+ ",A]}),(0,a.jsxs)("div",{className:"tb_onsite_post_limits",children:[(0,a.jsx)("div",{className:"tb_onsite_sup",children:"*"})," Max 20 Posts"]})]}),(0,a.jsx)("div",{className:"tb_onsite_btn_primary".concat(b?" tb_onsite_spinner":""),onClick:o,children:s.UgcSettings.onsite_popup_btn_txt})]}),f?(0,a.jsx)("div",{className:"tb_onsite_error",children:"* Max 20 posts are allowed."}):null]})})]})})]})}}const m=u;class h extends s.Component{constructor(){super(...arguments),this.ratingChanged=e=>{const{isActiveIndex:t,addRatings:i}=this.props;i(e,t)}}render(){const{onClickToUpdateStep:e,isAddMoreActive:t,isActiveIndex:i,addReview:s,item:n,onClickToUpdateMoreStep:o,defaultLabel:r}=this.props,{reviewPH:c,reviewErr:d,skipBtn:u,nextBtn:m}=r;return(0,a.jsxs)("div",{className:"tb_onsite_add_caption_tab",children:[(0,a.jsxs)("div",{className:"tb_onsite_form_group",children:[(0,a.jsx)("textarea",{className:"tb_onsite_form_control_textarea",rows:"2",placeholder:c,onChange:s(i),value:n&&n.review?n.review:""}),n.error?(0,a.jsxs)("div",{className:"tb_onsite_error",children:["* ",d]}):null]}),(0,a.jsx)("div",{className:"tb_onsite_rating",children:(0,a.jsx)(l.Z,{size:24,count:5,onChange:this.ratingChanged,value:n&&n.rating?n.rating:0})}),(0,a.jsxs)("div",{className:"tb_onsite_form_actions",style:n&&t?{justifyContent:"space-between"}:null,children:[n&&t?(0,a.jsx)("div",{className:"tb_onsite_btn_secondary",onClick:o(2),children:u}):null,(0,a.jsx)("div",{className:"tb_onsite_btn_primary",id:"tb_onsite_btn_id",onClick:e(2),children:m})]})]})}}const p=h;var _=i(40475);const g=e=>{let{onClosePopUp:t}=e;return(0,a.jsx)("div",{className:"tb_onsite_close_btn_wrapper",onClick:t,children:(0,a.jsx)("div",{className:"tb_onsite_close_btn tb__icon tb-close-alt",children:(0,a.jsx)("div",{})})})},v=e=>{const{wall:t}=e;return t.UgcSettings&&t.UgcSettings.onsite_logo&&""!=t.UgcSettings.onsite_logo?(0,a.jsx)("div",{className:"tb_onsite_logo_wrap",children:(0,a.jsx)("img",{loading:"lazy",src:t.UgcSettings.onsite_logo,className:"tb_onsite_popup_logo",width:"400",height:"50",alt:"logo"})}):null},b=e=>{let{item:t,isActiveIndex:i,onClickToImageRemove:s}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{loading:"lazy",className:"tb_onsite_uploaded",src:t.thumb_file,height:"200",width:"300",alt:"Post"}),(0,a.jsx)("div",{className:"tb_onsite_remove_ico",onClick:s(i),children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,a.jsxs)("g",{"data-name":"Group 4331",transform:"translate(10956 -4533)",children:[(0,a.jsx)("rect",{id:"Rectangle_2069","data-name":"Rectangle 2069",width:"24",height:"24",transform:"translate(-10956 4533)",fill:"none",opacity:"0"}),(0,a.jsx)("g",{id:"Group_4324","data-name":"Group 4324",transform:"translate(-10952 4536)",children:(0,a.jsx)("path",{id:"Path_5188","data-name":"Path 5188",d:"M2.722,16.328A2,2,0,0,0,4.694,18h6.612a2,2,0,0,0,1.972-1.672L14,6H2ZM9,9.5A.5.5,0,0,1,9.5,9h1a.5.5,0,0,1,.5.5v5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5Zm-4,0A.5.5,0,0,1,5.5,9h1a.5.5,0,0,1,.5.5v5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5ZM15,2H11A2,2,0,0,0,9,0H7A2,2,0,0,0,5,2H1A1,1,0,0,0,1,4H15a1,1,0,0,0,0-2Z",fill:"#545454",fillRule:"evenodd"})})]})})})]})},f=s.lazy((()=>Promise.all([i.e(8349),i.e(7329)]).then(i.bind(i,83704))));class x extends s.Component{render(){const{updateImageWithData:e,isActiveIndex:t,addPostImage:i,item:n,onClickToImageRemove:o,onsite_token:r,defaultLabel:l}=this.props;return(0,a.jsx)("div",{className:"tb_onsite_add_caption_tab",children:(0,a.jsx)("div",{className:"tb_onsite_image_upload_box",children:(0,a.jsx)("div",{className:"tb_onsite_upload_box_content",children:n&&Object.keys(n).length>0&&n.thumb_file?(0,a.jsx)(b,{item:n,isActiveIndex:t,onClickToImageRemove:o}):(0,a.jsx)(s.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(f,{updateImageWithData:e,isActiveIndex:t,addPostImage:i,onsite_token:r,defaultLabel:l})})})})})}}const S=x;const y=function(e){const{wall:t}=e;return(0,a.jsx)("div",{className:"tb_success_post",children:(0,a.jsxs)("div",{className:"tb_success_post_box",children:[(0,a.jsx)("svg",{width:"70",height:"70",version:"1.1",viewBox:"0 0 700 700",xmlns:"http://www.w3.org/2000/svg",fill:"#6DC05E",children:(0,a.jsx)("path",{d:"m350 536.67c68.07 0 133.36-27.043 181.49-75.176 48.133-48.137 75.176-113.42 75.176-181.49s-27.043-133.36-75.176-181.49c-48.137-48.133-113.42-75.176-181.49-75.176s-133.36 27.043-181.49 75.176c-48.133 48.137-75.176 113.42-75.176 181.49s27.043 133.36 75.176 181.49c48.137 48.133 113.42 75.176 181.49 75.176zm-133.23-249.9c4.3711-4.3438 10.285-6.7852 16.449-6.7852 6.168 0 12.078 2.4414 16.453 6.7852l53.664 53.668 135.1-135.1c6.0078-5.1445 14.211-6.8945 21.793-4.6523 7.5859 2.2422 13.516 8.1758 15.758 15.758 2.2461 7.5859 0.49219 15.789-4.6523 21.797l-151.67 151.67 0.003907-0.003906c-4.375 4.3477-10.285 6.7852-16.453 6.7852-6.1641 0-12.078-2.4375-16.449-6.7852l-70-70c-4.418-4.3789-6.9023-10.344-6.9023-16.566 0-6.2188 2.4844-12.184 6.9023-16.566z"})}),(0,a.jsxs)("div",{className:"tb_onsite_success_title cTBfont-".concat(t.UgcSettings.onsite_font_varient_btn),style:{color:t.UgcSettings.onsite_thank_txt_color,fontFamily:t.UgcSettings.onsite_css_font_msg,fontSize:parseInt(t.UgcSettings.onsite_thank_fontSize)},children:[" ",t.UgcSettings.onsite_status?t.UgcSettings.onsite_succ_msg:"Thank you for sharing your amazing content with us."]}),(0,a.jsx)("button",{className:"tb_onsite_btn_primary",onClick:e.onClosePopUp,children:"Close"})]})})};var j=i(17739),E=i(30207),w=i.n(E),N=i(35179),k=i(98501);const T=e=>{switch(e){case"french":return{captionTabT:"Ajouter une l\xe9gende",reviewTabT:"Poster le commentaire",uploadText:"Choisir une photo / vid\xe9o (facultatif)",contentSize:"Taille de la vid\xe9o : 100 MB max | Taille de la photo : 15 MB max | Max 20 Post",limitErr:"Taille du fichier --size-- Limite d\xe9pass\xe9e.",captionPH:"Ajouter un message ici...",captionErr:"Veuillez ajouter une l\xe9gende.",reviewPH:"Ajoutez votre avis ici....",reviewErr:"Veuillez ajouter des commentaires et des notes.",skipBtn:"Sauter",nextBtn:" >>> ",infoH:"Remplir les informations suivantes. Merci !",infoSubH:"champ obligatoire",inputNL:"NOM/NAME",inputNPH:"Entrer le nom",inputNErr:"S'il vous pla\xeet entrez votre nom.",inputEL:"E-MAIL",inputEPH:"Entrer l'e-mail",inputEErr:"Veuillez saisir l'\xe9-mail correct.",termsText:"En cliquant sur ENVOYER, vous acceptez les ",termsLT:"termes et conditions d'utilisation",onePostErr:"Veuillez inclure au moins un post.",detailErr:"Veuillez v\xe9rifier tous les d\xe9tails.",addMPBtn:"Ajouter une autre photo",submitBtn:"ENVOYER"};case"spanish":return{captionTabT:"A\xf1adir un subt\xedtulo",reviewTabT:"Enviar opini\xf3n",uploadText:"Arrastre un video/imagen para cargar (opcional)",contentSize:"Tama\xf1o del v\xeddeo: M\xe1ximo 100 MB | Tama\xf1o de la foto: M\xe1ximo 15 MB | M\xe1ximo 20 publicaciones",limitErr:"Tama\xf1o del archivo --size-- L\xedmite excedido.",captionPH:"A\xf1ade tu t\xedtulo aqu\xed....",captionErr:"Por favor agregue t\xedtulo.",reviewPH:"A\xf1ade tu rese\xf1a aqu\xed....",reviewErr:"Por favor agregue rese\xf1as y calificaciones.",skipBtn:"Saltar",nextBtn:"Pr\xf3ximo",infoH:"Llene la siguiente informaci\xf3n",infoSubH:"Indica campo requerido",inputNL:"Su nombre",inputNPH:"Introduzca su nombre",inputNErr:"por favor, escriba su nombre.",inputEL:"Direcci\xf3n de correo electr\xf3nico",inputEPH:"Introduce tu correo electr\xf3nico",inputEErr:"Please enter correct email.",termsText:"Al hacer clic en Enviar, aceptas nuestro ",termsLT:"T\xe9rminos y condiciones",onePostErr:"Por favor incluya al menos una publicaci\xf3n.",detailErr:"Por favor verifique los detalles completos",addMPBtn:"Agregar m\xe1s publicaci\xf3n",submitBtn:"Enviar mensaje"};case"german":return{captionTabT:"Beschriftung hinzuf\xfcgen",reviewTabT:"Bewertung abschicken",uploadText:"Ziehen Sie ein Video/Bild zum Hochladen (optional)",contentSize:"Videogr\xf6\xdfe: Max. 100 MB | Fotogr\xf6\xdfe: Max. 15 MB | Maximal 20 Beitr\xe4ge",limitErr:"Dateigr\xf6\xdfe --size-- Limit \xfcberschritten",captionPH:"F\xfcgen Sie hier Ihre Bildunterschrift hinzu....",captionErr:"Bitte Bildunterschrift hinzuf\xfcgen.",reviewPH:"F\xfcgen Sie hier Ihre Bewertung hinzu....",reviewErr:"Bitte f\xfcgen Sie eine Rezension und Bewertungen hinzu.",skipBtn:"\xdcberspringen",nextBtn:"N\xe4chste",infoH:"F\xfcllen Sie die folgenden Informationen aus",infoSubH:"Zeigt ein erforderliches Feld an",inputNL:"IHR NAME",inputNPH:"Gib deinen Namen ein",inputNErr:"Bitte geben Sie Ihren Namen ein.",inputEL:"E-MAIL-ADRESSE",inputEPH:"Geben sie ihre E-Mail Adresse ein",inputEErr:"Bitte geben Sie die richtige E-Mail-Adresse ein.",termsText:"Indem Sie auf \u201eSenden\u201c klicken, stimmen Sie unserem zu ",termsLT:"Gesch\xe4ftsbedingungen",onePostErr:"Bitte f\xfcgen Sie mindestens einen Beitrag bei.",detailErr:"Bitte \xfcberpr\xfcfen Sie die vollst\xe4ndigen Details.",addMPBtn:"Weitere Beitr\xe4ge hinzuf\xfcgen",submitBtn:"BEITRAG ABSENDEN"};default:return{captionTabT:"Add Caption",reviewTabT:"Submit Review",uploadText:"Drag a video / image to upload (optional)",contentSize:"Video Size : Max 100MB | Photo Size : Max 15MB | Max 20 Posts",limitErr:"File Size --size-- Limit Exceeded.",captionPH:"Add your caption here....",captionErr:"Please add caption.",reviewPH:"Add your review here....",reviewErr:"Please add review and ratings.",skipBtn:"Skip",nextBtn:"Next",infoH:"Fill out the following information",infoSubH:"Indicates required field",inputNL:"YOUR NAME",inputNPH:"Enter Your Name",inputNErr:"Please enter your name.",inputEL:"EMAIL ADDRESS",inputEPH:"Enter Your Email",inputEErr:"Please enter correct email.",termsText:"By clicking on Submit, you are agreeing to our ",termsLT:"terms and conditions",onePostErr:"Please include atleast one post.",detailErr:"Please check complete details.",addMPBtn:"Add more Post",submitBtn:"SUBMIT POST"}}},C=e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase());class M extends s.Component{constructor(){super(...arguments),this.state={submitPost:!0,activeTab:1,isOpen:!0,step:1,wall_id:null,name:null,email:null,upload_image:[{file:null,caption:null,review:null,rating:0,error:!1,activeTab:1,type:1,thumb_file:"",videoPath:""}],receiveMail:!1,tandc:!0,nameError:!1,emailError:!1,submitErrorMessage:null,apiRequest:!1,isActiveIndex:0,isAddMoreActive:!1,isEdit:!1,submitError:!1,is_terms_check:0,errorClickMore:!1},this.handleNext=e=>this.setState({submitPost:!1}),this.hanleTab1=e=>this.setState({activeTab:1}),this.hanleTab2=e=>this.setState({activeTab:2}),this.onShowCloseSubmitPicPopUp=e=>{const{isOpen:t}=this.state;this.setState({isOpen:!t})},this.updateImageWithData=e=>{const{upload_image:t}=this.state;t&&t.length<20&&(t.push(e),this.setState({upload_image:t}))},this.onClickToaddMore=e=>{const{upload_image:t}=this.state,{wall:i}=this.props;if(t&&t.length<20){const e=3==i.UgcSettings.choose_content_category?2:1;t.push({file:null,caption:null,review:null,rating:0,error:!1,activeTab:e,type:1,thumb_file:"",videoPath:""}),this.setState({isAddMoreActive:!0,upload_image:t,isActiveIndex:0==t.length||1==t.length?0:parseInt(t.length)-1,step:1,activeTab:e,submitError:!1,errorClickMore:!1})}else t.length>=20&&this.setState({errorClickMore:!0})},this.onClickToUpdateMoreStep=e=>t=>{const{isAddMoreActive:i,isActiveIndex:s,upload_image:n}=this.state;i&&n[s]&&n.splice(s,1),this.setState({isAddMoreActive:!1,upload_image:n,step:e,isEdit:!1,isActiveIndex:n&&n.length>0&&parseInt(n.length)-1>0?parseInt(n.length)-1:0,activeTab:1,errorClickMore:!1})},this.onClickToUpdateStep=e=>t=>{var i=!1;const{upload_image:s,isActiveIndex:n,activeTab:a}=this.state;s&&s[n]&&(1==a?null==s[n].caption||""==s[n].caption||0==s[n].caption.trim().length?(s[n].error=!0,i=!0):s[n].error=!1:2==a&&(null==s[n].review||""==s[n].review||0==s[n].review.length||0==s[n].rating?(s[n].error=!0,i=!0):s[n].error=!1)),i?this.setState({upload_image:s}):this.setState({isAddMoreActive:!1,upload_image:s,step:e,isEdit:!1,activeTab:1,submitErrorMessage:null,errorClickMore:!1})},this.onSubmitPostData=e=>{const{name:t,email:i,upload_image:s,is_terms_check:n,tandc:a,receiveMail:o}=this.state,{wallId:r,modalPop:l,wall:c,feeds:d}=this.props;if(this.setState({submitError:!1}),a&&t&&t.length>0&&i&&i.length>0&&C(i)&&!i.includes("mailinator")&&s&&s.length>0&&a){this.setState({apiRequest:!0});var u=!!window.ugcSuite||!!window.location.href.includes("ugcSuite=1"),m={};u&&d&&d.length>0&&d.map((e=>{e&&e.Network&&Object.keys(e.Network).length>0&&29==e.Network.id&&e.value1&&(m={feedId:e.value1})}));const e={wall_id:null!==c&&void 0!==c&&c.Wall.wallId?null===c||void 0===c?void 0:c.Wall.wallId:r,name:t,email:i,upload_file:s,receive_mail:o,onsite_token:l.onsite_token,...m};[104746].includes(c.Wall.owner)&&(e.is_terms_check=n),(0,_.uM)(e).then((e=>{const{onsite_token:t,message:i}=e.data;if(!c.UgcSettings.onsite_moderation&&i){const e=w()("".concat(N.VZ),{transports:["websocket"],transport:["websocket"],upgrade:!0});var s=new Array;s.push(r),s.push(i[0].synced),e.emit("poststatus",s)}this.props.onsiteTokenUpdate(t),this.setState({step:3,apiRequest:!1},(()=>setTimeout((()=>{N.bX&&!N.P2&&(window.location.href="".concat(N.In).concat(r).concat(N.QC?"?embed=true":"")),this.props.onSitePopup(!1)}),5e4)),document.querySelector("html").style.overflow="auto")})).catch((e=>{const{message:t}=e.toJSON();t&&this.setState({submitError:!0,submitErrorMessage:t,apiRequest:!1}),console.error(e)}))}else null!=this.state.name&&0!=this.state.name.trim().length||this.setState({nameError:!0,apiRequest:!1}),null!=this.state.email&&0!=this.state.email.trim().length&&C(this.state.email)&&!i.includes("mailinator")||this.setState({emailError:!0,apiRequest:!1}),s&&0==s.length&&this.setState({submitError:!0})},this.addCaption=e=>t=>{const{upload_image:i}=this.state;i&&i[e]&&(i[e].caption=t.target.value,i[e].review="",i[e].rating=0,i[e].error=!1,i[e].activeTab=1,this.setState({upload_image:i}))},this.addReview=e=>t=>{const{upload_image:i}=this.state;i&&i[e]&&(i[e].review=t.target.value,i[e].caption="",i[e].error=!1,i[e].activeTab=2,this.setState({upload_image:i}))},this.addRatings=(e,t)=>{const{upload_image:i}=this.state;i&&i[t]&&(i[t].caption="",i[t].rating=e,i[t].error=!1,i[t].activeTab=2,this.setState({upload_image:i}))},this.addPostImage=(e,t,i,s,n,a,o,r,l,c)=>{const{upload_image:d}=this.state;d&&d[n]&&(d[n].file=e,d[n].thumb_file=t,d[n].videoPath=i,d[n].type=s,d[n].ext=a,d[n].size=o,d[n].fileName=r,d[n].mediaHeight=l,d[n].mediaWidth=c,this.setState({upload_image:d}))},this.onClickToRemove=e=>t=>{const{upload_image:i}=this.state;i&&i.length>0&&i.splice(e,1),this.setState({upload_image:i,errorClickMore:!1})},this.onClickToImageRemove=e=>t=>{const{upload_image:i}=this.state;i&&i[e]&&(i[e].file=null,i[e].thumb_file="",i[e].videoPath="",i[e].type=1,i[e].ext=null,i[e].size=0,i[e].fileName=null,i[e].mediaHeight=0,i[e].mediaWidth=0,this.setState({upload_image:i}),(0,j.AB)(2))},this.onClickToEdit=e=>t=>{const{upload_image:i}=this.state;let s=1;i&&i[e]&&(s=i[e].activeTab),this.setState({isActiveIndex:e,isEdit:!0,step:1,activeTab:s})},this.onTextName=e=>{this.setState({name:e.target.value,nameError:!1},(()=>{null!=this.state.name&&0!=this.state.name.length||this.setState({nameError:!0})}))},this.onTextEmail=e=>{this.setState({email:e.target.value,emailError:!1},(()=>{null!=this.state.email&&0!=this.state.email.length&&C(this.state.email)&&!this.state.email.includes("mailinator")||this.setState({emailError:!0})}))},this.onUpdatereceiveMail=e=>{const{receiveMail:t}=this.state;this.setState({receiveMail:!t})},this.onUpdatetandc=e=>{const{tandc:t}=this.state;this.setState({tandc:!t})},this.onClosePopUp=()=>{const{wallId:e}=this.props;N.bX&&!N.P2?window.location.href="".concat(N.In).concat(e).concat(N.QC?"?embed=true":""):(this.props.onSitePopup(!1),document.querySelector("html").style.overflow="auto")},this.termsCheck=e=>{this.setState({is_terms_check:e})}}componentDidMount(){const{wall:e}=this.props;this.setState({activeTab:3==e.UgcSettings.choose_content_category?2:1})}render(){const{activeTab:e,isActiveIndex:t,step:i,upload_image:s,isAddMoreActive:n,isEdit:o,name:l,email:c,receiveMail:d,tandc:u,nameError:h,emailError:_,apiRequest:b,submitError:f,submitErrorMessage:x,errorClickMore:j}=this.state,{wall:E,modalPop:w}=this.props,C={backgroundImage:"url(".concat(k.do,"/media/images/error/nopost.png?v=2)")},{onClosePopUp:M}=this,P=E&&E.UgcSettings&&Object.keys(E.UgcSettings).length>0&&E.UgcSettings.onsite_status;var I=T(P?E.UgcSettings.onsite_language:"en");return P&&I?(0,a.jsx)("div",{className:"onsite_submit_post_main",style:{backgroundImage:E.UgcSettings.onsite_background_image?"url(".concat(E.UgcSettings.onsite_background_image,")"):null,backgroundColor:E.UgcSettings.onsite_background_color},children:(0,a.jsx)("div",{className:"tb_onsite_post_inner",children:(0,a.jsx)("div",{className:"tb_onsite_upload_post",children:(0,a.jsxs)("div",{className:"tb_onsite_box",children:[(0,a.jsxs)("div",{className:"tb_onsite_box_header",children:[(0,a.jsx)(g,{onClosePopUp:M}),(0,a.jsx)(v,{wall:E})]}),1==i?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"tb_onsite_box_title",children:[(0,a.jsx)("div",{className:"tb_onsite_title",children:E.UgcSettings.onsite_status?E.UgcSettings.onsite_popup_title:"Share Your Images With Us"}),(0,a.jsx)("div",{className:"tb_onsite_sub_heading",children:E.UgcSettings.onsite_status?E.UgcSettings.onsite_popup_sub_heading:"Upload your image featuring our brand products and get a chance to feature in our UGC lookbook. "})]}),(0,a.jsxs)("div",{className:"tb_onsite_box_body",children:[N.ig||1==E.UgcSettings.choose_content_category?(0,a.jsxs)("div",{className:"tb_onsite_post_tabs",children:[1==E.UgcSettings.choose_content_category?(0,a.jsx)("div",{className:"tb_onsite_separator",children:"OR"}):null,(0,a.jsxs)("div",{className:"tb_onsite_tabs_nav",children:[N.ig||1==E.UgcSettings.choose_content_category||2==E.UgcSettings.choose_content_category?(0,a.jsx)("div",{className:"tb_onsite_tabs ".concat(1!=E.UgcSettings.choose_content_category?"active-single-tab":""," ").concat(1==e||2==E.UgcSettings.choose_content_category?" active":""),style:2==E.UgcSettings.choose_content_category?{width:"100%"}:{},onClick:this.hanleTab1,children:I.captionTabT}):null,N.ig||1==E.UgcSettings.choose_content_category||3==E.UgcSettings.choose_content_category?(0,a.jsx)("div",{className:"tb_onsite_tabs ".concat(1!=E.UgcSettings.choose_content_category?"active-single-tab":""," ").concat(2==e||3==E.UgcSettings.choose_content_category?" active":""),style:3==E.UgcSettings.choose_content_category?{width:"100%"}:{},onClick:this.hanleTab2,children:I.reviewTabT}):null]})]}):null,(0,a.jsxs)("div",{className:"tb_onsite_tabs_content",children:[(0,a.jsx)(S,{updateImageWithData:this.updateImageWithData,isActiveIndex:t,addPostImage:this.addPostImage,item:s[t],onClickToImageRemove:this.onClickToImageRemove,onsite_token:w.onsite_token,defaultLabel:I},s[t].thumb_file),1==e?(0,a.jsx)(r,{hasActive:this.handleNext,isActiveIndex:t,onClickToUpdateStep:this.onClickToUpdateStep,onClickToUpdateMoreStep:this.onClickToUpdateMoreStep,isAddMoreActive:n,addCaption:this.addCaption,item:s[t],defaultLabel:I}):(0,a.jsx)(p,{isActiveIndex:t,onClickToUpdateStep:this.onClickToUpdateStep,onClickToUpdateMoreStep:this.onClickToUpdateMoreStep,isAddMoreActive:n,addReview:this.addReview,item:s[t],addRatings:this.addRatings,defaultLabel:I})]})]})]}):2==i?(0,a.jsx)(m,{termsCheck:this.termsCheck,submitError:f,submitErrorMessage:x,onClickToaddMore:this.onClickToaddMore,onSubmitPostData:this.onSubmitPostData,upload_image:s,isEdit:o,onClickToRemove:this.onClickToRemove,onTextName:this.onTextName,onTextEmail:this.onTextEmail,name:l,email:c,receiveMail:d,tandc:u,onUpdatereceiveMail:this.onUpdatereceiveMail,nameError:h,emailError:_,wall:E,onClickToEdit:this.onClickToEdit,apiRequest:b,errorClickMore:j,defaultLabel:I}):3==i?(0,a.jsx)(y,{wall:E,onClosePopUp:M}):null]})})})}):(0,a.jsx)("div",{className:"onsite_submit_post_main",children:(0,a.jsxs)("div",{className:"tb_error_page wall_error",children:[(0,a.jsx)("div",{className:"tb_error_page_bg",style:C,children:" "}),(0,a.jsx)("div",{className:"tb_error_page_wrapper",children:(0,a.jsxs)("div",{className:"tb_error_content",children:[(0,a.jsx)("div",{className:"tb_error_title",children:"Thanks for Your Efforts!"}),(0,a.jsx)("div",{className:"tb_error_des",children:"Our review collection campaign has come to an end. We appreciate your interest. \ud83d\ude42"})]})})]})})}}const P=(0,n.$j)((e=>(void 0!=e.modalPop&&1==e.modalPop.onSiteIsShowPopUp&&(document.querySelector("html").style.overflow="hidden"),{modalPop:e.modalPop})),(e=>({onSitePopup:t=>e((0,_.wg)(t)),onsiteTokenUpdate:t=>e((0,_.q3)(t))})))(M)},61729:(e,t,i)=>{"use strict";var s=i(79165);function n(){}function a(){}a.resetWarningCache=n,e.exports=function(){function e(e,t,i,n,a,o){if(o!==s){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function t(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:n};return i.PropTypes=i,i}},75192:(e,t,i)=>{e.exports=i(61729)()},79165:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21827:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],s=!0,n=!1,a=void 0;try{for(var o,r=e[Symbol.iterator]();!(s=(o=r.next()).done)&&(i.push(o.value),!t||i.length!==t);s=!0);}catch(l){n=!0,a=l}finally{try{!s&&r.return&&r.return()}finally{if(n)throw a}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=(0,n.useState)(e.count),i=s(t,2),a=i[0],o=i[1],r=(0,n.useState)(e.size),l=s(r,2),c=l[0],d=l[1],u=(0,n.useState)(e.char),m=s(u,2),h=m[0],p=m[1],_=(0,n.useState)(e.color),g=s(_,2),v=g[0],b=g[1],f=(0,n.useState)(e.activeColor),x=s(f,2),S=x[0],y=x[1],j=(0,n.useState)(e.isHalf),E=s(j,2),w=E[0],N=E[1],k=(0,n.useState)(e.edit),T=s(k,2),C=T[0],M=T[1],P=(0,n.useState)(e.emptyIcon),I=s(P,2),A=I[0],U=I[1],H=(0,n.useState)(e.halfIcon),B=s(H,2),z=B[0],R=B[1],L=(0,n.useState)(e.filledIcon),O=s(L,2),D=O[0],q=O[1],W=(0,n.useState)(e.a11y),F=s(W,2),V=F[0],Z=F[1];return[{count:a,size:c,char:h,color:v,activeColor:S,isHalf:w,edit:C,emptyIcon:A,halfIcon:z,filledIcon:D,a11y:V},function(e){o(e.count),d(e.size),p(e.char),b(e.color),y(e.activeColor),N(e.isHalf),M(e.edit),U(e.emptyIcon),R(e.halfIcon),q(e.filledIcon),Z(e.a11y)}]};var n=i(47313)},97626:(e,t,i)=>{"use strict";var s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],s=!0,n=!1,a=void 0;try{for(var o,r=e[Symbol.iterator]();!(s=(o=r.next()).done)&&(i.push(o.value),!t||i.length!==t);s=!0);}catch(l){n=!0,a=l}finally{try{!s&&r.return&&r.return()}finally{if(n)throw a}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=i(47313),a=c(n),o=c(i(75192)),r=c(i(21827)),l=c(i(33972));function c(e){return e&&e.__esModule?e:{default:e}}var d={overflow:"hidden",position:"relative"};function u(e,t){return"\n    .react-stars-"+t+":before {\n      position: absolute;\n      overflow: hidden;\n      display: block;\n      z-index: 1;\n      top: 0; left: 0;\n      width: 50%;\n      content: attr(data-forhalf);\n      color: "+e+";\n  }"}function m(e){var t=(0,n.useState)(""),i=s(t,2),o=i[0],c=i[1],m=(0,n.useState)(0),h=s(m,2),p=h[0],_=h[1],g=(0,n.useState)([]),v=s(g,2),b=v[0],f=v[1],x=(0,n.useState)(!1),S=s(x,2),y=S[0],j=S[1],E=(0,r.default)(e),w=s(E,2),N=w[0],k=w[1],T=(0,n.useState)(0),C=s(T,2),M=C[0],P=C[1],I=(0,n.useState)(!1),A=s(I,2),U=A[0],H=A[1],B=(0,n.useState)(""),z=s(B,2),R=z[0],L=z[1];function O(e){"undefined"===typeof e&&(e=N.isHalf?Math.floor(p):Math.round(p));for(var t=[],i=0;i<N.count;i++)t.push({active:i<=e-1});return t}function D(e){if(N.edit){var t=Number(e.currentTarget.getAttribute("data-index"));if(N.isHalf){var i=q(e);H(i),i&&(t+=1),P(t)}else t+=1;!function(e){var t=b.filter((function(e){return e.active}));e!==t.length&&f(O(e))}(t)}}function q(e){var t=e.target.getBoundingClientRect(),i=e.clientX-t.left;return(i=Math.round(Math.abs(i)))>t.width/2}function W(){N.edit&&(F(p),f(O()))}function F(e){N.isHalf&&(H(function(e){return e%1===0}(e)),P(Math.floor(e)))}function V(e){if(N.edit){var t=Number(e.currentTarget.getAttribute("data-index")),i=void 0;if(N.isHalf){var s=q(e);H(s),s&&(t+=1),i=s?t:t+.5,P(t)}else i=t+=1;Z(i)}}function Z(t){t!==p&&(f(O(t)),_(t),e.onChange(t))}return(0,n.useEffect)((function(){var t,i;!function(){var t="react-stars";L(e.classNames+" "+t)}(),t=e.value,i=e.count,_(t<0||t>i?0:t),f(O(e.value)),k(e),c((Math.random()+"").replace(".","")),j(function(e){return!e.isHalf&&e.emptyIcon&&e.filledIcon||e.isHalf&&e.emptyIcon&&e.halfIcon&&e.filledIcon}(e)),P(Math.floor(e.value)),H(e.isHalf&&e.value%1<.5)}),[]),a.default.createElement("div",{className:"react-stars-wrapper-"+o,style:{display:"flex"}},a.default.createElement("div",{tabIndex:N.a11y&&N.edit?0:null,"aria-label":"add rating by typing an integer from 0 to 5 or pressing arrow keys",onKeyDown:function(e){if(N.a11y||N.edit){var t=e.key,i=p,s=Number(t);s?Number.isInteger(s)&&s>0&&s<=N.count&&(i=s):("ArrowUp"===t||"ArrowRight"===t)&&i<N.count?(e.preventDefault(),i+=N.isHalf?.5:1):("ArrowDown"===t||"ArrowLeft"===t)&&i>.5&&(e.preventDefault(),i-=N.isHalf?.5:1),F(i),Z(i)}},className:R,style:d},N.isHalf&&function(){return a.default.createElement("style",{dangerouslySetInnerHTML:{__html:y?(e=N.activeColor,"\n          span.react-stars-half > * {\n          color: "+e+";\n      }"):u(N.activeColor,o)}});var e}(),b.map((function(e,t){return a.default.createElement(l.default,{key:t,index:t,active:e.active,config:N,onMouseOver:D,onMouseLeave:W,onClick:V,halfStarHidden:U,halfStarAt:M,isUsingIcons:y,uniqueness:o})})),a.default.createElement("p",{style:{position:"absolute",left:"-200rem"},role:"status"},p)))}m.propTypes={classNames:o.default.string,edit:o.default.bool,half:o.default.bool,value:o.default.number,count:o.default.number,char:o.default.string,size:o.default.number,color:o.default.string,activeColor:o.default.string,emptyIcon:o.default.element,halfIcon:o.default.element,filledIcon:o.default.element,a11y:o.default.bool},m.defaultProps={edit:!0,half:!1,value:0,count:5,char:"\u2605",size:15,color:"gray",activeColor:"#ffd700",a11y:!0,onChange:function(){}},t.Z=m},33972:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e};t.default=function(e){var t=e.index,i=e.active,n=e.config,a=e.onMouseOver,l=e.onMouseLeave,c=e.onClick,d=e.halfStarHidden,u=e.halfStarAt,m=e.isUsingIcons,h=e.uniqueness,p=n.color,_=n.activeColor,g=n.size,v=n.char,b=n.isHalf,f=n.edit,x=n.halfIcon,S=n.emptyIcon,y=n.filledIcon,j="",E=!1;b&&!d&&u===t&&(j=m?"react-stars-half":"react-stars-"+h,E=!0);var w=s({},r,{color:i?_:p,cursor:f?"pointer":"default",fontSize:g+"px"});return o.default.createElement("span",{className:j,style:w,key:t,"data-index":t,"data-forhalf":y?t:v,onMouseOver:a,onMouseMove:a,onMouseLeave:l,onClick:c},m?i?y:!i&&E?x:S:v)};var n,a=i(47313),o=(n=a)&&n.__esModule?n:{default:n};var r={position:"relative",overflow:"hidden",cursor:"pointer",display:"block",float:"left"}}}]);