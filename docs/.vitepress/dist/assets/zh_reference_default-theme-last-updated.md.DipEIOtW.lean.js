import{_ as e,c as t,a2 as s,o as i}from"./chunks/framework.CGR1JVSF.js";const k=JSON.parse('{"title":"最后更新于","description":"","frontmatter":{},"headers":[],"relativePath":"zh/reference/default-theme-last-updated.md","filePath":"zh/reference/default-theme-last-updated.md","lastUpdated":1704773074000}'),l={name:"zh/reference/default-theme-last-updated.md"};function n(d,a,p,r,h,o){return i(),t("div",null,a[0]||(a[0]=[s(`<h1 id="last-updated" tabindex="-1">最后更新于 <a class="header-anchor" href="#last-updated" aria-label="Permalink to &quot;最后更新于 {#last-updated}&quot;">​</a></h1><p>最近一条内容的更新时间会显示在页面右下角。要启用它，请将 <code>lastUpdated</code> 选项添加到配置中。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>你必须提交 markdown 文件才能看到最后更新时间。</p></div><h2 id="site-level-config" tabindex="-1">全局配置 <a class="header-anchor" href="#site-level-config" aria-label="Permalink to &quot;全局配置 {#site-level-config}&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  lastUpdated: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="frontmatter-config" tabindex="-1">frontmatter 配置 <a class="header-anchor" href="#frontmatter-config" aria-label="Permalink to &quot;frontmatter 配置 {#frontmatter-config}&quot;">​</a></h2><p>可以使用 frontmatter 上的 <code>lastUpdated</code> 选项单独禁用某个页面的最后更新展示：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lastUpdated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><p>另请参阅<a href="./default-theme-config#lastupdated">默认主题：最后更新时间</a> 了解更多详细信息。主题级别的任何 <a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy" target="_blank" rel="noreferrer">truthy</a> 值也将启用该功能，除非在站点或页面级别明确禁用。</p>`,9)]))}const u=e(l,[["render",n]]);export{k as __pageData,u as default};
