"use strict";(globalThis.webpackChunkcomplianz_gdpr=globalThis.webpackChunkcomplianz_gdpr||[]).push([[9179],{99179:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var l=s(51609),a=s(86087);class n extends a.Component{constructor(){super(...arguments)}onChangeHandler(e){let t=this.props.fields,s=this.props.field;t[this.props.index].value=e,setChangedField(s.id,e),this.setState({fields:t})}render(){let e=this.props.field,t=e.value;return this.props.fields,(0,l.createElement)("div",{className:"components-base-control"},(0,l.createElement)("div",{className:"components-base-control__field"},(0,l.createElement)("label",{className:"components-base-control__label",htmlFor:e.id},e.label),(0,l.createElement)("input",{className:"components-text-control__input",type:"password",id:e.id,value:t,onChange:e=>this.onChangeHandler(e.target.value)})))}}const o=n}}]);