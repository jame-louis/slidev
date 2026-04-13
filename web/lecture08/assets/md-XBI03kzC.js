import{o as u,e as l,j as c,g as t,F as g,aj as v,n as f,t as i,r as y,z as x,b as w,w as h,ad as r,d as k,v as B,x as S,T as d}from"./modules/vue-DLk4nEN5.js";import{u as p,f as C}from"./slidev/context-BEizOYLS.js";import{_ as z}from"./index-Ber_MhNe.js";import{I as D}from"./slidev/default-BHqkaanL.js";import"./modules/shiki-DWU4f0zh.js";const I={class:"button-examples"},P={class:"tabs"},L=["onClick"],T={class:"content"},$={class:"code-panel"},E={class:"preview-panel"},N=["innerHTML"],V={__name:"ButtonExamples",setup(m){p();const s=[{title:"对比示例",code:`<!-- 原生样式 -->
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
    `}],n=y(1),e=x(()=>s[n.value]);return(o,b)=>(u(),l("div",I,[c(" Tabs "),t("div",P,[(u(),l(g,null,v(s,(_,a)=>t("button",{key:a,class:f(["tab-btn",{active:n.value===a}]),onClick:F=>n.value=a},i(_.title),11,L)),64))]),c(" Content: left code, right preview "),t("div",T,[t("div",$,[t("pre",null,[t("code",null,i(e.value.code),1)])]),t("div",E,[b[0]||(b[0]=t("div",{class:"preview-label"},"实时效果",-1)),t("div",{class:"preview-inner",innerHTML:e.value.preview},null,8,N)])])]))}},W=z(V,[["__scopeId","data-v-ab8dc9f3"]]),j={class:"mt-4"},G={__name:"slides.md__slidev_36",setup(m){const{$clicksContext:s,$frontmatter:n}=p();return s.setup(),(e,o)=>{const b=W;return u(),w(D,B(S(d(C)(d(n),35))),{default:h(()=>[o[0]||(o[0]=t("h2",null,"按钮（Button）",-1)),o[1]||(o[1]=t("p",null,[t("strong",null,"命名规律"),r("："),t("code",null,"btn"),r("（基础）+ "),t("code",null,"btn-{颜色}"),r(" + "),t("code",null,"btn-{大小}")],-1)),t("div",j,[k(b)])]),_:1},16)}}};export{G as default};
