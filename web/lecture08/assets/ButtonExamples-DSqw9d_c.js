import{o as a,e as r,j as u,g as t,F as l,aj as p,n as d,t as c,r as m,z as g}from"./modules/vue-ay11y6SF.js";import{u as v}from"./slidev/context-BdDbqE1l.js";import{_ as y}from"./index-Di-nA1tJ.js";const _={class:"button-examples"},f={class:"tabs"},x=["onClick"],w={class:"content"},h={class:"code-panel"},k={class:"preview-panel"},S=["innerHTML"],B={__name:"ButtonExamples",setup(D){v();const s=[{title:"对比示例",code:`<!-- 原生样式 -->
<button style="padding: 10px 20px; background: #007bff;
  color: white; border: none; border-radius: 4px;
  cursor: pointer; font-size: 16px;">原生按钮</button>

<!-- Bootstrap -->
<button class="btn btn-primary">Bootstrap按钮</button>`,preview:`
      <div style="margin-bottom:16px">
        <div style="font-size:12px;color:#666;margin-bottom:8px">原生样式按钮：</div>
        <button style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">原生按钮</button>
      </div>
      <div>
        <div style="font-size:12px;color:#666;margin-bottom:8px">Bootstrap按钮：</div>
        <button class="btn btn-primary">Bootstrap按钮</button>
      </div>
    `},{title:"实心按钮",code:`<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>`,preview:`
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-success">Success</button>
      <button class="btn btn-danger">Danger</button>
      <button class="btn btn-warning">Warning</button>
      <button class="btn btn-info">Info</button>
      <button class="btn btn-light">Light</button>
      <button class="btn btn-dark">Dark</button>
    `},{title:"轮廓按钮",code:`<button class="btn btn-outline-primary">Primary</button>
<button class="btn btn-outline-secondary">Secondary</button>
<button class="btn btn-outline-success">Success</button>
<button class="btn btn-outline-danger">Danger</button>
<button class="btn btn-outline-warning">Warning</button>
<button class="btn btn-outline-info">Info</button>`,preview:`
      <button class="btn btn-outline-primary">Primary</button>
      <button class="btn btn-outline-secondary">Secondary</button>
      <button class="btn btn-outline-success">Success</button>
      <button class="btn btn-outline-danger">Danger</button>
      <button class="btn btn-outline-warning">Warning</button>
      <button class="btn btn-outline-info">Info</button>
    `},{title:"按钮大小",code:`<button class="btn btn-primary btn-lg">大按钮（btn-lg）</button>
<button class="btn btn-primary">默认大小</button>
<button class="btn btn-primary btn-sm">小按钮（btn-sm）</button>`,preview:`
      <button class="btn btn-primary btn-lg">大按钮（btn-lg）</button>
      <button class="btn btn-primary">默认大小</button>
      <button class="btn btn-primary btn-sm">小按钮（btn-sm）</button>
    `}],n=m(1),b=g(()=>s[n.value]);return(z,e)=>(a(),r("div",_,[u(" Tabs "),t("div",f,[(a(),r(l,null,p(s,(i,o)=>t("button",{key:o,class:d(["tab-btn",{active:n.value===o}]),onClick:C=>n.value=o},c(i.title),11,x)),64))]),u(" Content: left code, right preview "),t("div",w,[t("div",h,[t("pre",null,[t("code",null,c(b.value.code),1)])]),t("div",k,[e[0]||(e[0]=t("div",{class:"preview-label"},"实时效果",-1)),t("div",{class:"preview-inner",innerHTML:b.value.preview},null,8,S)])])]))}},W=y(B,[["__scopeId","data-v-ab8dc9f3"]]);export{W as _};
