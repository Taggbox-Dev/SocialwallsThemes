"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2230],{82230:(e,a,n)=>{n.r(a),n.d(a,{MediaBaseUrl:()=>m,baseUrl:()=>u,default:()=>h});var s=n(72791),l=n(70188),c=n(80184);const t=s.lazy((()=>n.e(9919).then(n.bind(n,59919)))),o=s.lazy((()=>n.e(1965).then(n.bind(n,91965)))),r=s.lazy((()=>n.e(854).then(n.bind(n,70854)))),i=s.lazy((()=>n.e(5171).then(n.bind(n,95171)))),d=s.lazy((()=>n.e(119).then(n.bind(n,80119)))),g="".concat(l.lS,"uploaded/"),m="".concat(l.ho,"react-app/media/"),u=e=>"".concat(m)+e,p=e=>{let{isDisplay:a,Banner:n}=e;switch(n.bannerType){case 2:return(0,c.jsxs)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(t,{isDisplay:a,Banner:n})]});case 3:return(0,c.jsxs)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(o,{isDisplay:a,Banner:n})]});case 4:return(0,c.jsxs)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(r,{isDisplay:a,Banner:n})]});case 5:return(0,c.jsxs)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(i,{isDisplay:a,Banner:n})]});default:return(0,c.jsx)(c.Fragment,{})}};class h extends s.PureComponent{render(){const{isDisplay:e,Banner:a,BannerImage:n,LogoImage:t,CustomBannerImage:o,wall:r}=this.props,i=t&&t.newName?t.newName:"",m=n&&n.newName?n.newName:"";if(e||r.product){let e=t&&t.newName?!i||null!==i&&void 0!==i&&i.includes("logo_bnr")||null!==i&&void 0!==i&&i.includes(l.lS)?4==a.bannerType?"":u("banner/logo_bnr-".concat(a.bannerType,".svg")):"".concat(l.lS).concat(t.path?t.path:"/").concat(t.newName):"",s="".concat(o.path?o.newName:"/"),c="".concat(l.lS).concat(n.path?n.path:"/").concat(m||"");o&&Object.keys(o).length>0&&m&&o.newName.includes(l.ho),t&&Object.keys(t).length>0&&i&&i.includes(l.ho)&&(e=String(i).replace(g,"")),n&&Object.keys(n).length>0&&m&&m.includes(l.ho)&&(c=String(n.newName).replace(g,"")),a.CustomBannerImage=s,a.LogoImage=e,n&&"object"===typeof n&&(n.image=c)}else a.CustomBannerImage&&a.CustomBannerImage.includes(l.ho)&&(a.CustomBannerImage.includes("".concat(l.ho,"uploaded/"))?a.CustomBannerImage=String(a.CustomBannerImage).replace("".concat(l.ho,"uploaded/"),""):a.CustomBannerImage.includes("".concat(l.lS,"uploaded/"))&&(a.CustomBannerImage=String(a.CustomBannerImage).replace("".concat(l.lS,"uploaded/"),""))),a.LogoImage&&a.LogoImage.includes(l.ho)&&(a.LogoImage.includes("".concat(l.ho,"uploaded/"))?a.LogoImage=String(a.LogoImage).replace("".concat(l.ho,"uploaded/"),""):a.LogoImage.includes("".concat(l.lS,"uploaded/"))&&(a.LogoImage=String(a.LogoImage).replace("".concat(l.lS,"uploaded/"),""))),n.image&&n.image.includes(l.ho)&&(n.image.includes("".concat(l.ho,"uploaded/"))?n.image=String(n.image).replace("".concat(l.ho,"uploaded/"),""):n.image.includes("".concat(l.lS,"uploaded/"))&&(n.image=String(n.image).replace("".concat(l.lS,"uploaded/"),"")));return(0,c.jsxs)("div",{className:"tb_wall_header__",children:[n.status||1!=a.status?"":(0,c.jsx)(p,{isDisplay:e,Banner:a}),1==n.status&&n.newName&&""!==n.image.split("".concat(l.lS,"uploaded/"))[1]?(0,c.jsxs)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(d,{ImageUrl:n.image})]}):""]})}}}}]);
//# sourceMappingURL=2230.1e5698d0.chunk.js.map