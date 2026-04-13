import{o,e as l,g as e,F as f,aj as y,n as b,t as c,r as m,z as h,b as g,w as u,d as _,v as w,x as z,T as n}from"./modules/vue-DLk4nEN5.js";import{u as p,f as k}from"./slidev/context-DDWznW3L.js";import{_ as P}from"./index-CKQ4BFgO.js";import{I as j}from"./slidev/default-BbsIbo65.js";import"./modules/shiki-DWU4f0zh.js";const C={class:"card-examples"},$={class:"tabs"},B=["onClick"],E={class:"content"},L={class:"code-panel"},T={class:"preview-panel"},I=["innerHTML"],M={__name:"CardExamples",setup(v){p();const s=[{title:"基础卡片",code:`<div class="card" style="width: 18rem;">
  <div class="placeholder-img">产品图片</div>
  <div class="card-body">
    <h5 class="card-title">卡片标题</h5>
    <p class="card-text">
      卡片内容描述，可以包含一些简短的产品介绍或说明文字。
    </p>
    <a href="#" class="btn btn-primary">查看详情</a>
  </div>
</div>`,preview:`
      <div class="card" style="width: 16rem;">
        <div class="placeholder-img" style="height:140px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);">产品图片</div>
        <div class="card-body">
          <h5 class="card-title" style="margin:0 0 8px;font-size:1.1rem">卡片标题</h5>
          <p class="card-text" style="margin:0 0 12px;color:#6c757d;font-size:13px">卡片内容描述，可以包含一些简短的产品介绍或说明文字。</p>
          <a href="#" class="btn btn-primary" style="display:inline-block;padding:6px 14px;background:#0d6efd;color:#fff;text-decoration:none;border-radius:4px;font-size:13px">查看详情</a>
        </div>
      </div>
    `},{title:"卡片变体",code:`<div class="card text-center">
  <div class="card-header">特色功能</div>
  <div class="card-body">
    <h5 class="card-title">专业版</h5>
    <p class="card-text">包含所有高级功能。</p>
    <a href="#" class="btn btn-primary">立即升级</a>
  </div>
  <div class="card-footer text-muted">2天前更新</div>
</div>

<div class="card border-success">
  <div class="card-header bg-success text-white">成功状态</div>
  <div class="card-body text-success">
    <h5 class="card-title">任务完成</h5>
    <p class="card-text">您的订单已成功处理。</p>
  </div>
</div>

<div class="card text-white bg-primary">
  <div class="card-header">主题卡片</div>
  <div class="card-body">
    <h5 class="card-title">背景色卡片</h5>
    <p class="card-text">使用背景色类快速创建主题卡片。</p>
  </div>
</div>`,preview:`
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <div class="card text-center" style="width:10rem;border:1px solid #dee2e6;border-radius:6px;overflow:hidden">
          <div class="card-header" style="padding:8px 10px;background:#f8f9fa;border-bottom:1px solid #dee2e6;font-size:12px">特色功能</div>
          <div class="card-body" style="padding:10px">
            <h5 style="margin:0 0 6px;font-size:13px">专业版</h5>
            <p style="margin:0 0 8px;color:#6c757d;font-size:11px">包含所有高级功能。</p>
            <a href="#" class="btn btn-primary" style="display:inline-block;padding:4px 10px;background:#0d6efd;color:#fff;text-decoration:none;border-radius:4px;font-size:11px">立即升级</a>
          </div>
          <div class="card-footer text-muted" style="padding:6px 10px;background:#f8f9fa;border-top:1px solid #dee2e6;font-size:11px;color:#6c757d">2天前更新</div>
        </div>
        <div class="card border-success" style="width:10rem;border:1px solid #198754;border-radius:6px;overflow:hidden">
          <div style="padding:8px 10px;background:#198754;color:#fff;font-size:12px">成功状态</div>
          <div class="card-body" style="padding:10px;color:#198754">
            <h5 style="margin:0 0 6px;font-size:13px">任务完成</h5>
            <p style="margin:0;font-size:11px">您的订单已成功处理。</p>
          </div>
        </div>
        <div class="card text-white bg-primary" style="width:10rem;border-radius:6px;overflow:hidden;background:#0d6efd;color:#fff">
          <div style="padding:8px 10px;border-bottom:1px solid rgba(255,255,255,0.2);font-size:12px">主题卡片</div>
          <div style="padding:10px">
            <h5 style="margin:0 0 6px;font-size:13px">背景色卡片</h5>
            <p style="margin:0;font-size:11px;opacity:0.9">使用背景色类快速创建主题卡片。</p>
          </div>
        </div>
      </div>
    `},{title:"水平卡片",code:`<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <div class="placeholder-img" style="height: 100%;">图片</div>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">水平布局卡片</h5>
        <p class="card-text">
          使用栅格系统将图片和文字并排显示。
        </p>
        <p class="card-text">
          <small class="text-muted">最后更新3分钟前</small>
        </p>
      </div>
    </div>
  </div>
</div>`,preview:`
      <div class="card" style="max-width:320px;border:1px solid #dee2e6;border-radius:6px;overflow:hidden">
        <div style="display:flex">
          <div style="width:35%;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px">图片</div>
          <div style="width:65%;padding:12px">
            <h5 style="margin:0 0 6px;font-size:14px">水平布局卡片</h5>
            <p style="margin:0 0 6px;color:#6c757d;font-size:12px">使用栅格系统将图片和文字并排显示。</p>
            <p style="margin:0;font-size:11px;color:#6c757d">最后更新3分钟前</p>
          </div>
        </div>
      </div>
    `},{title:"产品卡片组",code:`<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <div class="placeholder-img">iPhone 15</div>
      <div class="card-body">
        <h5 class="card-title">iPhone 15</h5>
        <p class="card-text text-muted">最新款智能手机，搭载A17芯片</p>
        <div class="d-flex justify-content-between align-items-center">
          <span class="text-danger fw-bold fs-5">¥5999</span>
          <button class="btn btn-primary btn-sm">购买</button>
        </div>
      </div>
    </div>
  </div>
  <!-- 更多卡片... -->
</div>`,preview:`
      <div style="display:flex;gap:10px">
        <div class="card" style="width:9rem;border:1px solid #dee2e6;border-radius:6px;overflow:hidden">
          <div style="height:90px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%)">iPhone 15</div>
          <div style="padding:10px">
            <h5 style="margin:0 0 4px;font-size:13px">iPhone 15</h5>
            <p style="margin:0 0 8px;color:#6c757d;font-size:11px">最新款智能手机，搭载A17芯片</p>
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span style="color:#dc3545;font-weight:700;font-size:13px">¥5999</span>
              <button class="btn btn-primary" style="padding:3px 10px;background:#0d6efd;color:#fff;border:none;border-radius:4px;font-size:11px;cursor:pointer">购买</button>
            </div>
          </div>
        </div>
        <div class="card" style="width:9rem;border:1px solid #dee2e6;border-radius:6px;overflow:hidden">
          <div style="height:90px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;background:linear-gradient(135deg,#f093fb 0%,#f5576c 100%)">iPad Pro</div>
          <div style="padding:10px">
            <h5 style="margin:0 0 4px;font-size:13px">iPad Pro</h5>
            <p style="margin:0 0 8px;color:#6c757d;font-size:11px">M2芯片，专业创作工具</p>
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span style="color:#dc3545;font-weight:700;font-size:13px">¥6799</span>
              <button class="btn btn-primary" style="padding:3px 10px;background:#0d6efd;color:#fff;border:none;border-radius:4px;font-size:11px;cursor:pointer">购买</button>
            </div>
          </div>
        </div>
      </div>
    `}],d=m(0),i=h(()=>s[d.value]);return(a,t)=>(o(),l("div",C,[e("div",$,[(o(),l(f,null,y(s,(x,r)=>e("button",{key:r,class:b(["tab-btn",{active:d.value===r}]),onClick:H=>d.value=r},c(x.title),11,B)),64))]),e("div",E,[e("div",L,[e("pre",null,[e("code",null,c(i.value.code),1)])]),e("div",T,[t[0]||(t[0]=e("div",{class:"preview-label"},"实时效果",-1)),e("div",{class:"preview-inner",innerHTML:i.value.preview},null,8,I)])])]))}},A=P(M,[["__scopeId","data-v-a96eee7a"]]),F={class:"mt-4"},q={__name:"slides.md__slidev_37",setup(v){const{$clicksContext:s,$frontmatter:d}=p();return s.setup(),(i,a)=>{const t=A;return o(),g(j,w(z(n(k)(n(d),36))),{default:u(()=>[a[0]||(a[0]=e("h2",null,"卡片（Card）",-1)),e("div",F,[_(t)])]),_:1},16)}}};export{q as default};
