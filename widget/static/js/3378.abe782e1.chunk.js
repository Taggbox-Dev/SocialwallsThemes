"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3378],{90484:(e,t,o)=>{o.d(t,{p:()=>l});const l=e=>{const t={backgroundImage:1==e.transparent||5==e.bannerType?"none":"url(".concat(e.CustomBannerImage,")"),backgroundColor:1==e.transparent?"transparent":e.background_color,height:e.banner_height},o={backgroundColor:1==e.transparent?"transparent":e.background_color_two},l={color:e.subTitle_font_color,fontSize:e.subTitle_font_size,fontFamily:"None"==e.subtitle_css_font?null:e.subtitle_css_font},a=e.subtitle_font_varient,n={color:e.title_font_color,fontSize:e.title_font_size,fontFamily:"None"==e.title_css_font?null:e.title_css_font},s=e.title_font_varient;var i=50;const c={height:1.8*(i=e.social_icon_size>50?50:e.social_icon_size),width:1.8*i},r={fontSize:i},_={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#1b74e4"},b={color:2===e.social_icon_color_status?e.social_icon_color:"#1b74e4"},d={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#000"},g={color:2===e.social_icon_color_status?e.social_icon_color:"#000"},u={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#E2306C"},h={color:2===e.social_icon_color_status?e.social_icon_color:"#E2306C"};return{bannerStyle:t,bannerStyleBgRight:o,subTitleStyle:l,titleStyle:n,iconAreaStyle:c,iconStyle:r,isFacebook:String(e.social_icons).includes("1"),isTwitter:String(e.social_icons).includes("2"),isInstagram:String(e.social_icons).includes("3"),facebookIconAreaStyle:_,facebookIconStyle:b,twitterIconAreaStyle:d,twitterIconStyle:g,instagramIconAreaStyle:u,instagramIconStyle:h,subTitleVarentClass:a,titleVarentClass:s}}},3378:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});o(47313);var l=o(17739),a=o(90484),n=o(98501),s=o(35179),i=o(46417);const c=e=>{let{Banner:t,LogoImage:o}=e;const{bannerStyle:c,subTitleStyle:r,titleStyle:_,iconAreaStyle:b,iconStyle:d,isFacebook:g,isTwitter:u,isInstagram:h,facebookIconAreaStyle:m,facebookIconStyle:y,twitterIconAreaStyle:S,twitterIconStyle:f,instagramIconAreaStyle:I,instagramIconStyle:k,subTitleVarentClass:v,titleVarentClass:p}=(0,a.p)(t);s.bX&&null!==o&&void 0!==o&&o.newName&&o.newName,s.aL&&null!==t&&void 0!==t&&t.LogoImage&&t.LogoImage;var w=t.LogoImage;if(w&&String(w).length>0&&String(w).includes("banner/logo_bnr")&&String(w).includes(n.lO))w=String(t.LogoImage).replace(n.lO,"");else if(w.includes(n.lO)&&""===w.split(n.lO)[1])w=String(t.LogoImage).replace(n.lO,"");else if(w&&String(w).length>0){let e=w.split("/").pop();"logo_bnr-2.svg"!=e&&"logo_bnr-3.svg"!=e&&"logo_bnr-5.svg"!=e||(w="".concat(n.ho,"react-app/media/banner/logo_bnr-2.svg"))}var N=c;return N&&N.backgroundImage.includes("bg-bnr-3.png")&&N.backgroundImage.includes(n.lO)&&(N.backgroundImage=N.backgroundImage.replace(n.lO,"https://test.taggbox.com/widget/assets/media/banner/")),(0,i.jsx)("div",{className:"tb_wall_header_wrap__",style:N,children:(0,i.jsxs)("div",{className:"tb_header2_row__",children:[(0,i.jsx)("div",{className:"tb_header2_column_logo__",children:w?(0,i.jsx)("div",{className:"tb_header2_logo__",children:(0,i.jsx)("img",{loading:"lazy",className:"tb_header2_logo_img__",src:w,alt:(0,l.P)(w),width:180,height:52})}):""}),(0,i.jsx)("div",{className:"tb_header2_column_icons__",children:1==t.social_icon_status?(0,i.jsxs)("div",{className:"tb_header2_social_icons__",children:[g?(0,i.jsx)("a",{href:t.facebook_url?(0,l.hd)(t.facebook_url):null,target:"_blank",className:"tb_header2_social_icon_list__","aria-label":"Facebook",style:{...b,...m},children:(0,i.jsx)("div",{className:"tb_header2_social_icon__ tb__icon tb-facebook",style:{...d,...y},children:" "})}):"",u?(0,i.jsx)("a",{href:t.twitter_url?(0,l.hd)(t.twitter_url):null,target:"_blank",className:"tb_header2_social_icon_list__","aria-label":"Twitter",style:{...b,...S},children:(0,i.jsx)("div",{className:"tb_header2_social_icon__ tb__icon tb-twitter",style:{...d,...f}})}):"",h?(0,i.jsx)("a",{href:t.instagram_url?(0,l.hd)(t.instagram_url):null,target:"_blank",className:"tb_header2_social_icon_list__","aria-label":"Instagram",style:{...b,...I},children:(0,i.jsx)("div",{className:"tb_header2_social_icon__ tb__icon tb-instagram",style:{...d,...k},children:" "})}):""]}):null}),(0,i.jsx)("div",{className:"tb_header2_column_content__",children:(0,i.jsxs)("div",{className:"tb_header2_content__",children:[(0,i.jsx)("div",{className:"tb_header2_subtitle__ tb-cTBfont-".concat(v),style:r,children:t.subTitle}),(0,i.jsx)("div",{className:"tb_header2_title__ tb-cTBfont-".concat(p),style:_,children:t.title})]})})]})})}}}]);