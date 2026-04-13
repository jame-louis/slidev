import{o as a,e as t,j as v,g as l,F as x,aj as f,n as w,t as r,r as u,z as g,b as h,w as b,d as y,v as C,x as k,T as m}from"./modules/vue-ay11y6SF.js";import{u as n,f as T}from"./slidev/context-BdDbqE1l.js";import{_ as $}from"./index-Di-nA1tJ.js";import{I as z}from"./slidev/default-rY9BvfqM.js";import"./modules/shiki-D6djOZTy.js";const B={class:"grid-examples"},E={class:"tabs"},L=["onClick"],j={class:"content"},I={class:"code-panel"},N={class:"preview-panel"},P=["innerHTML"],S={__name:"GridExamples",setup(p){n();const o=[{title:"基础结构",code:`<div class="container">
  <div class="row">
    <div class="col">.col</div>
    <div class="col">.col</div>
    <div class="col">.col</div>
  </div>
</div>`,preview:`
      <div class="demo-box">
        <div class="row">
          <div class="col-demo">.col</div>
          <div class="col-demo alt">.col</div>
          <div class="col-demo alt2">.col</div>
        </div>
      </div>
    `},{title:"等宽分配",code:`<div class="row">
  <div class="col">1 of 2</div>
  <div class="col">2 of 2</div>
</div>
<div class="row mt-2">
  <div class="col">1 of 3</div>
  <div class="col">2 of 3</div>
  <div class="col">3 of 3</div>
</div>`,preview:`
      <div class="demo-box">
        <div class="row" style="margin-bottom:8px">
          <div class="col-demo">1 of 2</div>
          <div class="col-demo alt">2 of 2</div>
        </div>
        <div class="row">
          <div class="col-demo">1 of 3</div>
          <div class="col-demo alt">2 of 3</div>
          <div class="col-demo alt2">3 of 3</div>
        </div>
      </div>
    `},{title:"指定列宽",code:`<div class="row">
  <div class="col-8">col-8 (66.67%)</div>
  <div class="col-4">col-4 (33.33%)</div>
</div>
<div class="row mt-2">
  <div class="col-4">col-4 (33.33%)</div>
  <div class="col-4">col-4 (33.33%)</div>
  <div class="col-4">col-4 (33.33%)</div>
</div>`,preview:`
      <div class="demo-box">
        <div class="row" style="margin-bottom:8px">
          <div class="col-demo" style="flex:0 0 66.6667%;max-width:66.6667%">col-8</div>
          <div class="col-demo alt" style="flex:0 0 33.3333%;max-width:33.3333%">col-4</div>
        </div>
        <div class="row">
          <div class="col-demo" style="flex:0 0 33.3333%;max-width:33.3333%">col-4</div>
          <div class="col-demo alt" style="flex:0 0 33.3333%;max-width:33.3333%">col-4</div>
          <div class="col-demo alt2" style="flex:0 0 33.3333%;max-width:33.3333%">col-4</div>
        </div>
      </div>
    `},{title:"响应式布局",code:`<div class="row">
  <div class="col-12 col-md-6 col-lg-3">卡片1</div>
  <div class="col-12 col-md-6 col-lg-3">卡片2</div>
  <div class="col-12 col-md-6 col-lg-3">卡片3</div>
  <div class="col-12 col-md-6 col-lg-3">卡片4</div>
</div>`,preview:`
      <div class="demo-box">
        <div class="row">
          <div class="col-demo" style="flex:0 0 25%;max-width:25%"><small>col-lg-3</small><br>卡片1</div>
          <div class="col-demo alt" style="flex:0 0 25%;max-width:25%"><small>col-lg-3</small><br>卡片2</div>
          <div class="col-demo alt2" style="flex:0 0 25%;max-width:25%"><small>col-lg-3</small><br>卡片3</div>
          <div class="col-demo alt3" style="flex:0 0 25%;max-width:25%"><small>col-lg-3</small><br>卡片4</div>
        </div>
        <div style="margin-top:8px;font-size:11px;color:#6c757d;text-align:center">
          提示：在 Slidev 中固定显示桌面4列效果。实际在手机会变为1列，平板2列。
        </div>
      </div>
    `}],s=u(0),i=g(()=>o[s.value]);return(c,d)=>(a(),t("div",B,[v(" Tabs "),l("div",E,[(a(),t(x,null,f(o,(_,e)=>l("button",{key:e,class:w(["tab-btn",{active:s.value===e}]),onClick:G=>s.value=e},r(_.title),11,L)),64))]),v(" Content: left code, right preview "),l("div",j,[l("div",I,[l("pre",null,[l("code",null,r(i.value.code),1)])]),l("div",N,[d[0]||(d[0]=l("div",{class:"preview-label"},"实时效果",-1)),l("div",{class:"preview-inner",innerHTML:i.value.preview},null,8,P)])])]))}},V=$(S,[["__scopeId","data-v-10f98efe"]]),F={class:"mt-4"},A={__name:"slides.md__slidev_20",setup(p){const{$clicksContext:o,$frontmatter:s}=n();return o.setup(),(i,c)=>{const d=V;return a(),h(z,C(k(m(T)(m(s),19))),{default:b(()=>[c[0]||(c[0]=l("h2",null,"栅格系统的三层结构",-1)),l("div",F,[y(d)])]),_:1},16)}}};export{A as default};
