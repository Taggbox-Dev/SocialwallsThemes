"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[695],{10695:(t,e,i)=>{i.r(e),i.d(e,{default:()=>n});var s=i(47313),a=i(43635),c=(i(15102),i(46417));class o extends s.Component{constructor(){super(...arguments),this.state={like:!1},this.onClickLike=t=>{t.stopPropagation();const{like:e}=this.state;this.setState({like:!e},(()=>this.onLikeSave()))},this.onLikeSave=()=>{const{postId:t,wallID:e,interactiveCount:i,UserDetail:s}=this.props,{like:c}=this.state,o=JSON.parse(localStorage.getItem("intractivelike".concat(e)))||[];if(c){const n={postId:t,action:c?"prepand":"remove",wallId:e,table_name:s.db_table};(0,a.cs)(n).then((s=>{var a=[];a=c?[...o,{count:i+1,cardId:t,wallID:e}]:o.filter((e=>e.cardId!=t)),localStorage.setItem("intractivelike".concat(e),JSON.stringify(a))})).catch((t=>{}))}}}componentDidMount(){const{postId:t,wallID:e,interactiveCount:i,UserDetail:s}=this.props,a=localStorage.getItem("intractivelike".concat(e));if(a){const e=JSON.parse(a)||[];if(e&&e.length>0){const i=e.filter((e=>e.cardId==t));(null===i||void 0===i?void 0:i.length)>0&&this.setState({like:!0})}}}render(){const{like:t}=this.state,{postId:e,likeClass:i}=this.props;return(0,c.jsx)("div",{className:"tb_like_ico".concat(t?" tb_animate":""," ").concat(i),onClick:this.onClickLike,"data-postid":e,children:(0,c.jsx)("div",{className:"tb__icon tb-".concat(t?"heart-fill":"heart"),children:(0,c.jsx)("div",{})})})}}const n=o},15102:()=>{}}]);