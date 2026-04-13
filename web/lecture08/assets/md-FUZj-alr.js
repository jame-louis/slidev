import{o as i,e as r,g as a,F as b,aj as g,n as x,t as c,r as u,z as m,b as h,w as y,d as _,v as w,x as k,T as d}from"./modules/vue-ay11y6SF.js";import{u as p,f as z}from"./slidev/context-BdDbqE1l.js";import{_ as N}from"./index-Di-nA1tJ.js";import{I as C}from"./slidev/default-rY9BvfqM.js";import"./modules/shiki-D6djOZTy.js";const j={class:"navbar-examples"},$={class:"tabs"},B=["onClick"],E={class:"content"},L={class:"code-panel"},T={class:"preview-panel"},I=["innerHTML"],P={__name:"NavbarExamples",setup(v){p();const t=[{title:"主色导航栏",code:`<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container">
    <a class="navbar-brand" href="#">数码商城</a>
    <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse" data-bs-target="#mainNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">首页</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">手机</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">电脑</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#"
            data-bs-toggle="dropdown">更多</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">配件</a></li>
            <li><a class="dropdown-item" href="#">服务</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">关于我们</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search"
          placeholder="搜索产品">
        <button class="btn btn-outline-light" type="submit">搜索</button>
      </form>
    </div>
  </div>
</nav>`,preview:`
      <nav style="display:flex;align-items:center;padding:10px 16px;background:#0d6efd;color:#fff;border-radius:6px 6px 0 0;font-size:12px">
        <div style="display:flex;align-items:center;justify-content:space-between;width:100%">
          <a href="#" style="color:#fff;text-decoration:none;font-weight:600;font-size:14px">数码商城</a>
          <div style="display:flex;align-items:center;gap:12px">
            <a href="#" style="color:#fff;text-decoration:none;font-weight:600">首页</a>
            <a href="#" style="color:rgba(255,255,255,0.85);text-decoration:none">手机</a>
            <a href="#" style="color:rgba(255,255,255,0.85);text-decoration:none">电脑</a>
            <a href="#" style="color:rgba(255,255,255,0.85);text-decoration:none">更多 ▼</a>
            <div style="display:flex;gap:6px">
              <input type="text" placeholder="搜索产品" style="padding:4px 8px;border:1px solid rgba(255,255,255,0.4);border-radius:4px;background:rgba(255,255,255,0.15);color:#fff;font-size:11px;width:90px">
              <button style="padding:4px 10px;border:1px solid #fff;border-radius:4px;background:transparent;color:#fff;font-size:11px;cursor:pointer">搜索</button>
            </div>
          </div>
        </div>
      </nav>
      <div style="padding:20px;background:#f8f9fa;border:1px solid #dee2e6;border-top:none;border-radius:0 0 6px 6px;text-align:center;color:#6c757d;font-size:12px">
        页面内容区域
      </div>
    `},{title:"深色导航栏",code:`<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">深色主题</a>
    <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse" data-bs-target="#darkNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="darkNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">首页</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">功能</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">定价</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`,preview:`
      <nav style="display:flex;align-items:center;padding:10px 16px;background:#212529;color:#fff;border-radius:6px;font-size:12px">
        <div style="display:flex;align-items:center;justify-content:space-between;width:100%">
          <a href="#" style="color:#fff;text-decoration:none;font-weight:600;font-size:14px">深色主题</a>
          <div style="display:flex;align-items:center;gap:12px">
            <a href="#" style="color:#fff;text-decoration:none;font-weight:600">首页</a>
            <a href="#" style="color:rgba(255,255,255,0.75);text-decoration:none">功能</a>
            <a href="#" style="color:rgba(255,255,255,0.75);text-decoration:none">定价</a>
          </div>
        </div>
      </nav>
    `},{title:"浅色导航栏",code:`<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">浅色主题</a>
    <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse" data-bs-target="#lightNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="lightNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">首页</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">功能</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">定价</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`,preview:`
      <nav style="display:flex;align-items:center;padding:10px 16px;background:#f8f9fa;color:#212529;border:1px solid #dee2e6;border-radius:6px;font-size:12px">
        <div style="display:flex;align-items:center;justify-content:space-between;width:100%">
          <a href="#" style="color:#212529;text-decoration:none;font-weight:600;font-size:14px">浅色主题</a>
          <div style="display:flex;align-items:center;gap:12px">
            <a href="#" style="color:#212529;text-decoration:none;font-weight:600">首页</a>
            <a href="#" style="color:#495057;text-decoration:none">功能</a>
            <a href="#" style="color:#495057;text-decoration:none">定价</a>
          </div>
        </div>
      </nav>
    `}],e=u(0),s=m(()=>t[e.value]);return(l,n)=>(i(),r("div",j,[a("div",$,[(i(),r(b,null,g(t,(f,o)=>a("button",{key:o,class:x(["tab-btn",{active:e.value===o}]),onClick:M=>e.value=o},c(f.title),11,B)),64))]),a("div",E,[a("div",L,[a("pre",null,[a("code",null,c(s.value.code),1)])]),a("div",T,[n[0]||(n[0]=a("div",{class:"preview-label"},"实时效果",-1)),a("div",{class:"preview-inner",innerHTML:s.value.preview},null,8,I)])])]))}},F=N(P,[["__scopeId","data-v-068cc1e4"]]),H={class:"mt-4"},A={__name:"slides.md__slidev_34",setup(v){const{$clicksContext:t,$frontmatter:e}=p();return t.setup(),(s,l)=>{const n=F;return i(),h(C,w(k(d(z)(d(e),33))),{default:y(()=>[l[0]||(l[0]=a("h2",null,"导航栏（Navbar）",-1)),a("div",H,[_(n)])]),_:1},16)}}};export{A as default};
