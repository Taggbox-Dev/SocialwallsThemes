"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7535],{37535:(e,a,n)=>{n.r(a),n.d(a,{MediaBaseUrl:()=>g,baseUrl:()=>u,default:()=>h});var s=n(47313),l=n(98501),c=n(46417);const t=s.lazy((()=>n.e(3378).then(n.bind(n,3378)))),o=s.lazy((()=>n.e(3854).then(n.bind(n,83854)))),r=s.lazy((()=>n.e(7120).then(n.bind(n,87120)))),d=s.lazy((()=>n.e(5883).then(n.bind(n,65883)))),i=s.lazy((()=>n.e(704).then(n.bind(n,704)))),m="".concat(l.lS,"uploaded/"),g="".concat(l.ho,"react-app/media/"),u=e=>"".concat(g)+e,p=e=>{let{isDisplay:a,Banner:n}=e;switch(n.bannerType){case 2:return(0,c.jsxs)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(t,{isDisplay:a,Banner:n})]});case 3:return(0,c.jsxs)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(o,{isDisplay:a,Banner:n})]});case 4:return(0,c.jsxs)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(r,{isDisplay:a,Banner:n})]});case 5:return(0,c.jsxs)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(d,{isDisplay:a,Banner:n})]});default:return(0,c.jsx)(c.Fragment,{})}};class h extends s.PureComponent{render(){const{isDisplay:e,Banner:a,BannerImage:n,LogoImage:t,CustomBannerImage:o,wall:r}=this.props,d=t&&t.newName?t.newName:"",g=n&&n.newName?n.newName:"";if(e||r.product){let e=t&&t.newName?!d||null!==d&&void 0!==d&&d.includes("logo_bnr")||null!==d&&void 0!==d&&d.includes(l.lS)?4==a.bannerType?"":u("banner/logo_bnr-".concat(a.bannerType,".svg")):"".concat(l.lS).concat(t.path?t.path:"/").concat(t.newName):"",s="".concat(o.path?o.newName:"/"),c="".concat(l.lS).concat(n.path?n.path:"/").concat(g||"");o&&Object.keys(o).length>0&&g&&o.newName.includes(l.ho),t&&Object.keys(t).length>0&&d&&d.includes(l.ho)&&(e=String(d).replace(m,"")),n&&Object.keys(n).length>0&&g&&g.includes(l.ho)&&(c=String(n.newName).replace(m,"")),a.CustomBannerImage=s,a.LogoImage=e,n&&"object"===typeof n&&(n.image=c)}else a.CustomBannerImage&&a.CustomBannerImage.includes(l.ho)&&(a.CustomBannerImage.includes("".concat(l.ho,"uploaded/"))?a.CustomBannerImage=String(a.CustomBannerImage).replace("".concat(l.ho,"uploaded/"),""):a.CustomBannerImage.includes("".concat(l.lS,"uploaded/"))&&(a.CustomBannerImage=String(a.CustomBannerImage).replace("".concat(l.lS,"uploaded/"),""))),a.LogoImage&&a.LogoImage.includes(l.ho)&&(a.LogoImage.includes("".concat(l.ho,"uploaded/"))?a.LogoImage=String(a.LogoImage).replace("".concat(l.ho,"uploaded/"),""):a.LogoImage.includes("".concat(l.lS,"uploaded/"))&&(a.LogoImage=String(a.LogoImage).replace("".concat(l.lS,"uploaded/"),""))),n.image&&n.image.includes(l.ho)&&(n.image.includes("".concat(l.ho,"uploaded/"))?n.image=String(n.image).replace("".concat(l.ho,"uploaded/"),""):n.image.includes("".concat(l.lS,"uploaded/"))&&(n.image=String(n.image).replace("".concat(l.lS,"uploaded/"),"")));return(0,c.jsxs)("div",{className:"tb_wall_header__",children:[n.status||1!=a.status?"":(0,c.jsx)(p,{isDisplay:e,Banner:a}),1==n.status&&n.newName&&""!==n.newName.split("".concat(l.lS,"uploaded/"))[1]?(0,c.jsxs)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(i,{ImageUrl:n.newName})]}):""]})}}}}]);