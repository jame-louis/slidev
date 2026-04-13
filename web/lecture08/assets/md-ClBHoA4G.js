import{_ as d}from"./slidev/VClick-wHzHqQsd.js";import{o as c,b as i,w as a,g as t,d as u,ad as s,v as _,x as m,T as o}from"./modules/vue-DLk4nEN5.js";import{I as p}from"./slidev/center-BPJnuyFx.js";import{u as f,f as x}from"./slidev/context-DDWznW3L.js";import{_ as v}from"./index-CKQ4BFgO.js";import"./modules/shiki-DWU4f0zh.js";const g={class:"anki-card"},k={__name:"slides.md__slidev_5",setup(y){const{$clicksContext:n,$frontmatter:r}=f();return n.setup(),(V,e)=>{const l=d;return c(),i(p,_(m(o(x)(o(r),4))),{default:a(()=>[t("div",g,[e[1]||(e[1]=t("div",{class:"anki-question"},[t("div",{class:"text-xl font-bold mb-4"},"安全读取 LocalStorage 的最佳实践是什么？"),t("div",{class:"text-gray-500 text-sm"},"点击显示答案 →")],-1)),u(l,null,{default:a(()=>[...e[0]||(e[0]=[t("div",{class:"anki-answer"},[t("pre",null,[t("code",{class:"language-js"},`function safeGet(key, defaultValue = null) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
}`)]),t("div",{class:"mt-2 text-sm text-gray-600"},[t("strong",null,"关键："),s("用 "),t("code",null,"try-catch"),s(" 包裹 JSON.parse，失败时返回默认值 ")])],-1)])]),_:1})])]),_:1},16)}}},C=v(k,[["__scopeId","data-v-bd82dcba"]]);export{C as default};
