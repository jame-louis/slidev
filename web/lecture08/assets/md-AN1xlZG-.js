import{o as n,e as r,g as i,F as v,aj as g,n as m,t as o,r as b,z as y,b as u,w as k,d as _,v as h,x as z,T as l}from"./modules/vue-DLk4nEN5.js";import{u as x,f as w}from"./slidev/context-DDWznW3L.js";import{_ as j}from"./index-CKQ4BFgO.js";import{I as C}from"./slidev/default-BbsIbo65.js";import"./modules/shiki-DWU4f0zh.js";const $={class:"utility-examples"},B={class:"tabs"},E=["onClick"],F={class:"content"},L={class:"code-panel"},T={class:"preview-panel"},I=["innerHTML"],P={__name:"UtilityExamples",setup(c){x();const e=[{title:"间距工具",code:`<div class="m-0">无外边距</div>
<div class="m-1">0.25rem (4px)</div>
<div class="m-2">0.5rem (8px)</div>
<div class="m-3">1rem (16px)</div>
<div class="m-4">1.5rem (24px)</div>
<div class="m-5">3rem (48px)</div>

<!-- 方向修饰符 -->
<div class="mt-3">mt-3（上）</div>
<div class="mb-3">mb-3（下）</div>
<div class="ms-3">ms-3（左）</div>
<div class="me-3">me-3（右）</div>
<div class="mx-3">mx-3（左右）</div>
<div class="my-3">my-3（上下）</div>

<!-- 水平居中 -->
<div class="mx-auto" style="width: 200px;">
  mx-auto 水平居中
</div>`,preview:`
      <div style="margin-bottom:12px">
        <div style="display:inline-block;background:#ffc107">
          <div style="display:inline-block;background:#0d6efd;color:#fff;padding:4px 10px;margin:0">m-0</div>
        </div>
        <span style="font-size:12px;color:#666;margin-left:8px">无外边距</span>
      </div>
      <div style="margin-bottom:12px">
        <div style="display:inline-block;background:#ffc107">
          <div style="display:inline-block;background:#0d6efd;color:#fff;padding:4px 10px;margin:4px">m-1</div>
        </div>
        <span style="font-size:12px;color:#666;margin-left:8px">0.25rem (4px)</span>
      </div>
      <div style="margin-bottom:12px">
        <div style="display:inline-block;background:#ffc107">
          <div style="display:inline-block;background:#0d6efd;color:#fff;padding:4px 10px;margin:8px">m-2</div>
        </div>
        <span style="font-size:12px;color:#666;margin-left:8px">0.5rem (8px)</span>
      </div>
      <div style="margin-bottom:12px">
        <div style="display:inline-block;background:#ffc107">
          <div style="display:inline-block;background:#0d6efd;color:#fff;padding:4px 10px;margin:16px">m-3</div>
        </div>
        <span style="font-size:12px;color:#666;margin-left:8px">1rem (16px)</span>
      </div>
      <div style="margin-bottom:12px">
        <div style="display:inline-block;background:#ffc107">
          <div style="display:inline-block;background:#0d6efd;color:#fff;padding:4px 10px;margin-top:16px">mt-3（上）</div>
        </div>
        <div style="display:inline-block;background:#ffc107;margin-left:8px">
          <div style="display:inline-block;background:#198754;color:#fff;padding:4px 10px;margin-bottom:16px">mb-3（下）</div>
        </div>
      </div>
      <div style="padding:8px;background:#f8f9fa;border:1px dashed #adb5bd;border-radius:4px;text-align:center">
        <div style="display:inline-block;background:#0d6efd;color:#fff;padding:6px 16px;margin:0 auto;width:140px">mx-auto 居中</div>
      </div>
    `},{title:"Flexbox工具",code:`<!-- 水平对齐 -->
<div class="d-flex justify-content-start">
  <div>1</div><div>2</div><div>3</div>
</div>

<div class="d-flex justify-content-center">
  <div>1</div><div>2</div><div>3</div>
</div>

<div class="d-flex justify-content-end">
  <div>1</div><div>2</div><div>3</div>
</div>

<div class="d-flex justify-content-between">
  <div>1</div><div>2</div><div>3</div>
</div>

<!-- 垂直对齐 -->
<div class="d-flex align-items-start" style="height: 80px;">
  <div>顶部</div>
</div>

<div class="d-flex align-items-center" style="height: 80px;">
  <div>居中</div>
</div>

<div class="d-flex align-items-end" style="height: 80px;">
  <div>底部</div>
</div>`,preview:`
      <div style="margin-bottom:8px">
        <div style="display:flex;justify-content:flex-start;align-items:center;background:#f8f9fa;padding:6px 10px;border-radius:4px;font-size:11px">
          <div style="background:#0d6efd;color:#fff;padding:6px 14px;margin:3px;border-radius:4px">1</div>
          <div style="background:#0d6efd;color:#fff;padding:6px 14px;margin:3px;border-radius:4px">2</div>
          <div style="background:#0d6efd;color:#fff;padding:6px 14px;margin:3px;border-radius:4px">3</div>
          <span style="margin-left:10px;color:#6c757d">justify-content-start</span>
        </div>
      </div>
      <div style="margin-bottom:8px">
        <div style="display:flex;justify-content:center;align-items:center;background:#f8f9fa;padding:6px 10px;border-radius:4px;font-size:11px">
          <div style="background:#0d6efd;color:#fff;padding:6px 14px;margin:3px;border-radius:4px">1</div>
          <div style="background:#0d6efd;color:#fff;padding:6px 14px;margin:3px;border-radius:4px">2</div>
          <div style="background:#0d6efd;color:#fff;padding:6px 14px;margin:3px;border-radius:4px">3</div>
          <span style="margin-left:10px;color:#6c757d">justify-content-center</span>
        </div>
      </div>
      <div style="margin-bottom:8px">
        <div style="display:flex;justify-content:flex-end;align-items:center;background:#f8f9fa;padding:6px 10px;border-radius:4px;font-size:11px">
          <div style="background:#0d6efd;color:#fff;padding:6px 14px;margin:3px;border-radius:4px">1</div>
          <div style="background:#0d6efd;color:#fff;padding:6px 14px;margin:3px;border-radius:4px">2</div>
          <div style="background:#0d6efd;color:#fff;padding:6px 14px;margin:3px;border-radius:4px">3</div>
          <span style="margin-left:10px;color:#6c757d">justify-content-end</span>
        </div>
      </div>
      <div style="margin-bottom:8px">
        <div style="display:flex;justify-content:space-between;align-items:center;background:#f8f9fa;padding:6px 10px;border-radius:4px;font-size:11px">
          <div style="background:#0d6efd;color:#fff;padding:6px 14px;margin:3px;border-radius:4px">1</div>
          <div style="background:#0d6efd;color:#fff;padding:6px 14px;margin:3px;border-radius:4px">2</div>
          <div style="background:#0d6efd;color:#fff;padding:6px 14px;margin:3px;border-radius:4px">3</div>
          <span style="margin-left:10px;color:#6c757d">justify-content-between</span>
        </div>
      </div>
      <div style="margin-bottom:6px">
        <div style="display:flex;align-items:flex-start;background:#f8f9fa;padding:6px 10px;border-radius:4px;height:50px;font-size:11px">
          <div style="background:#198754;color:#fff;padding:6px 14px;margin:3px;border-radius:4px">顶部</div>
          <span style="margin-left:10px;color:#6c757d">align-items-start</span>
        </div>
      </div>
      <div style="margin-bottom:6px">
        <div style="display:flex;align-items:center;background:#f8f9fa;padding:6px 10px;border-radius:4px;height:50px;font-size:11px">
          <div style="background:#198754;color:#fff;padding:6px 14px;margin:3px;border-radius:4px">居中</div>
          <span style="margin-left:10px;color:#6c757d">align-items-center</span>
        </div>
      </div>
      <div>
        <div style="display:flex;align-items:flex-end;background:#f8f9fa;padding:6px 10px;border-radius:4px;height:50px;font-size:11px">
          <div style="background:#198754;color:#fff;padding:6px 14px;margin:3px;border-radius:4px">底部</div>
          <span style="margin-left:10px;color:#6c757d">align-items-end</span>
        </div>
      </div>
    `},{title:"颜色工具",code:`<!-- 文字颜色 -->
<p class="text-primary">.text-primary 主要色（蓝）</p>
<p class="text-secondary">.text-secondary 次要色（灰）</p>
<p class="text-success">.text-success 成功色（绿）</p>
<p class="text-danger">.text-danger 危险色（红）</p>
<p class="text-warning">.text-warning 警告色（黄）</p>
<p class="text-info">.text-info 信息色（青）</p>
<p class="text-dark">.text-dark 深色</p>
<p class="text-muted">.text-muted 淡化色</p>

<!-- 背景颜色 -->
<div class="p-2 bg-primary text-white">.bg-primary</div>
<div class="p-2 bg-secondary text-white">.bg-secondary</div>
<div class="p-2 bg-success text-white">.bg-success</div>
<div class="p-2 bg-danger text-white">.bg-danger</div>
<div class="p-2 bg-warning">.bg-warning</div>
<div class="p-2 bg-info">.bg-info</div>
<div class="p-2 bg-light">.bg-light</div>
<div class="p-2 bg-dark text-white">.bg-dark</div>`,preview:`
      <div style="display:flex;gap:16px">
        <div style="flex:1">
          <div style="font-size:11px;color:#6c757d;margin-bottom:6px;font-weight:600">文字颜色</div>
          <p style="margin:3px 0;font-size:12px;color:#0d6efd">.text-primary 主要色（蓝）</p>
          <p style="margin:3px 0;font-size:12px;color:#6c757d">.text-secondary 次要色（灰）</p>
          <p style="margin:3px 0;font-size:12px;color:#198754">.text-success 成功色（绿）</p>
          <p style="margin:3px 0;font-size:12px;color:#dc3545">.text-danger 危险色（红）</p>
          <p style="margin:3px 0;font-size:12px;color:#ffc107">.text-warning 警告色（黄）</p>
          <p style="margin:3px 0;font-size:12px;color:#0dcaf0">.text-info 信息色（青）</p>
          <p style="margin:3px 0;font-size:12px;color:#212529">.text-dark 深色</p>
          <p style="margin:3px 0;font-size:12px;color:#6c757d">.text-muted 淡化色</p>
        </div>
        <div style="flex:1">
          <div style="font-size:11px;color:#6c757d;margin-bottom:6px;font-weight:600">背景颜色</div>
          <div style="padding:5px 8px;margin-bottom:4px;background:#0d6efd;color:#fff;border-radius:3px;font-size:11px">.bg-primary</div>
          <div style="padding:5px 8px;margin-bottom:4px;background:#6c757d;color:#fff;border-radius:3px;font-size:11px">.bg-secondary</div>
          <div style="padding:5px 8px;margin-bottom:4px;background:#198754;color:#fff;border-radius:3px;font-size:11px">.bg-success</div>
          <div style="padding:5px 8px;margin-bottom:4px;background:#dc3545;color:#fff;border-radius:3px;font-size:11px">.bg-danger</div>
          <div style="padding:5px 8px;margin-bottom:4px;background:#ffc107;border-radius:3px;font-size:11px">.bg-warning</div>
          <div style="padding:5px 8px;margin-bottom:4px;background:#0dcaf0;border-radius:3px;font-size:11px">.bg-info</div>
          <div style="padding:5px 8px;margin-bottom:4px;background:#f8f9fa;border:1px solid #dee2e6;border-radius:3px;font-size:11px">.bg-light</div>
          <div style="padding:5px 8px;margin-bottom:4px;background:#212529;color:#fff;border-radius:3px;font-size:11px">.bg-dark</div>
        </div>
      </div>
    `}],d=b(0),s=y(()=>e[d.value]);return(a,t)=>(n(),r("div",$,[i("div",B,[(n(),r(v,null,g(e,(f,p)=>i("button",{key:p,class:m(["tab-btn",{active:d.value===p}]),onClick:N=>d.value=p},o(f.title),11,E)),64))]),i("div",F,[i("div",L,[i("pre",null,[i("code",null,o(s.value.code),1)])]),i("div",T,[t[0]||(t[0]=i("div",{class:"preview-label"},"实时效果",-1)),i("div",{class:"preview-inner",innerHTML:s.value.preview},null,8,I)])])]))}},H=j(P,[["__scopeId","data-v-ea78bae0"]]),M={class:"mt-4"},q={__name:"slides.md__slidev_40",setup(c){const{$clicksContext:e,$frontmatter:d}=x();return e.setup(),(s,a)=>{const t=H;return n(),u(C,h(z(l(w)(l(d),39))),{default:k(()=>[a[0]||(a[0]=i("h2",null,"间距、Flexbox、颜色工具",-1)),i("div",M,[_(t)])]),_:1},16)}}};export{q as default};
