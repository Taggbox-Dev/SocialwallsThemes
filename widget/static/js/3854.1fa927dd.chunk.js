"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3854],{90484:(e,o,t)=>{t.d(o,{p:()=>l});const l=e=>{const o={backgroundImage:1==e.transparent||5==e.bannerType?"none":"url(".concat(e.CustomBannerImage,")"),backgroundColor:1==e.transparent?"transparent":e.background_color,height:Number(e.banner_height)},t={backgroundColor:1==e.transparent?"transparent":e.background_color_two},l={color:e.subTitle_font_color,fontSize:"".concat(e.subTitle_font_size,"px"),fontFamily:e.subtitle_css_font},a=e.subtitle_font_varient,n={color:e.title_font_color,fontSize:"".concat(e.title_font_size,"px"),fontFamily:e.title_css_font},s=e.title_font_varient;var i=50;const c={height:1.8*(i=e.social_icon_size>50?50:e.social_icon_size),width:1.8*i},r={fontSize:i},_={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#1b74e4"},b={color:2===e.social_icon_color_status?e.social_icon_color:"#1b74e4"},d={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#000"},g={color:2===e.social_icon_color_status?e.social_icon_color:"#000"},u={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#E2306C"},h={color:2===e.social_icon_color_status?e.social_icon_color:"#E2306C"};return{bannerStyle:o,bannerStyleBgRight:t,subTitleStyle:l,titleStyle:n,iconAreaStyle:c,iconStyle:r,isFacebook:e.social_icons.includes("1"),isTwitter:e.social_icons.includes("2"),isInstagram:e.social_icons.includes("3"),facebookIconAreaStyle:_,facebookIconStyle:b,twitterIconAreaStyle:d,twitterIconStyle:g,instagramIconAreaStyle:u,instagramIconStyle:h,subTitleVarentClass:a,titleVarentClass:s}}},83854:(e,o,t)=>{t.r(o),t.d(o,{default:()=>i});t(47313);var l=t(17739),a=t(90484),n=t(98501),s=t(46417);const i=e=>{let{isDisplay:o,Banner:t}=e;const{bannerStyle:i,subTitleStyle:c,titleStyle:r,iconAreaStyle:_,iconStyle:b,isFacebook:d,isTwitter:g,isInstagram:u,facebookIconAreaStyle:h,facebookIconStyle:m,twitterIconAreaStyle:y,twitterIconStyle:p,instagramIconAreaStyle:S,instagramIconStyle:f,subTitleVarentClass:v,titleVarentClass:k}=(0,a.p)(t);var w=t.LogoImage;if(w&&String(w).length>0&&String(w).includes("banner/logo_bnr")&&String(w).includes(n.v3))w=String(t.LogoImage).replace(n.v3,"");else if(w.includes(n.v3)&&""===w.split(n.v3)[1])w=String(t.LogoImage).replace(n.v3,"");else if(w&&String(w).length>0){let e=w.split("/").pop();"logo_bnr-2.svg"!=e&&"logo_bnr-3.svg"!=e&&"logo_bnr-5.svg"!=e||(w="".concat(n.ho,"react-app/media/banner/logo_bnr-3.svg"))}var I=i;return I&&I.backgroundImage.includes("bg-bnr-3.png")&&I.backgroundImage.includes(n.v3)&&(I.backgroundImage=I.backgroundImage.replace(n.v3,"https://test.taggbox.com/widget/assets/media/banner/")),(0,s.jsx)("div",{className:"tb_wall_header_wrap__",style:I,children:(0,s.jsxs)("div",{className:"tb_header3_row__",children:[(0,s.jsx)("div",{className:"tb_header3_column_logo__",children:w?(0,s.jsx)("div",{className:"tb_header3_logo__",children:(0,s.jsx)("img",{loading:"lazy",className:"tb_header3_logo_img__",src:w,alt:(0,l.P)(w),width:180,height:52})}):""}),(0,s.jsx)("div",{className:"tb_header3_column_content__",children:(0,s.jsxs)("div",{className:"tb_header3_content__",children:[(0,s.jsx)("div",{className:"tb_header3_subtitle__ tb-cTBfont-".concat(v),style:c,children:t.subTitle}),(0,s.jsx)("div",{className:"tb_header3_title__ tb-cTBfont-".concat(k),style:r,children:t.title})]})}),(0,s.jsx)("div",{className:"tb_header3_column_icons__",children:1===t.social_icon_status?(0,s.jsxs)("div",{className:"tb_header3_social_icons__",children:[d?(0,s.jsx)("a",{onClick:()=>o?null:t.facebook_url&&window.open(t.facebook_url,"_blank"),className:"tb_header3_social_icon_list__","aria-label":"Facebook",style:{..._,...h},rel:"noopener noreferrer",children:(0,s.jsx)("div",{className:"tb_header3_social_icon__ tb__icon tb-facebook",style:{...b,...m},children:" "})}):null,g?(0,s.jsx)("a",{onClick:()=>o?null:t.twitter_url&&window.open(t.twitter_url,"_blank"),className:"tb_header3_social_icon_list__","aria-label":"Twitter",style:{..._,...y},rel:"noopener noreferrer",children:(0,s.jsx)("div",{className:"tb_header3_social_icon__ tb__icon tb-twitter",style:{...b,...p}})}):"",u?(0,s.jsx)("a",{onClick:()=>o?null:t.instagram_url&&window.open(t.instagram_url,"_blank"),className:"tb_header3_social_icon_list__","aria-label":"Instagram",style:{..._,...S},rel:"noopener noreferrer",children:(0,s.jsx)("div",{className:"tb_header3_social_icon__ tb__icon tb-instagram",style:{...b,...f},children:" "})}):""]}):null})]})})}}}]);