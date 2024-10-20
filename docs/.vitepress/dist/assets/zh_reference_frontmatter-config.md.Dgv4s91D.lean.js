import{_ as n,c as p,a2 as t,j as a,a as i,G as l,B as h,o as d}from"./chunks/framework.CGR1JVSF.js";const F=JSON.parse('{"title":"frontmatter 配置","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"zh/reference/frontmatter-config.md","filePath":"zh/reference/frontmatter-config.md","lastUpdated":1719410492000}'),k={name:"zh/reference/frontmatter-config.md"},o={id:"hero",tabindex:"-1"},r={id:"features",tabindex:"-1"};function c(g,s,u,y,E,m){const e=h("Badge");return d(),p("div",null,[s[6]||(s[6]=t(`<h1 id="frontmatter-config" tabindex="-1">frontmatter 配置 <a class="header-anchor" href="#frontmatter-config" aria-label="Permalink to &quot;frontmatter 配置 {#frontmatter-config}&quot;">​</a></h1><p>frontmatter 支持基于页面的配置。在每个 markdown 文件中，可以使用 frontmatter 配置来覆盖站点级别或主题级别的配置选项。此外，还有一些配置选项只能在 frontmatter 中定义。</p><p>示例用法：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Docs with VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">editLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div><p>可以通过 Vue 表达式中的 <code>$frontmatter</code> 全局变量访问 frontmatter 数据：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ $frontmatter.title }}</span></span></code></pre></div><h2 id="title" tabindex="-1">title <a class="header-anchor" href="#title" aria-label="Permalink to &quot;title&quot;">​</a></h2><ul><li>类型：<code>string</code></li></ul><p>页面的标题。它与 <a href="./site-config#title">config.title</a> 相同，并且覆盖站点级配置。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VitePress</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h2 id="titletemplate" tabindex="-1">titleTemplate <a class="header-anchor" href="#titletemplate" aria-label="Permalink to &quot;titleTemplate&quot;">​</a></h2><ul><li>类型：<code>string | boolean</code></li></ul><p>标题的后缀。它与 <a href="./site-config#titletemplate">config.titleTemplate</a> 相同，它会覆盖站点级别的配置。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">titleTemplate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Vite &amp; Vue powered static site generator</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h2 id="description" tabindex="-1">description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;description&quot;">​</a></h2><ul><li>类型：<code>string</code></li></ul><p>页面的描述。它与 <a href="./site-config#description">config.description</a> 相同，它会覆盖站点级别的配置。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VitePress</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h2 id="head" tabindex="-1">head <a class="header-anchor" href="#head" aria-label="Permalink to &quot;head&quot;">​</a></h2><ul><li>类型：<code>HeadConfig[]</code></li></ul><p>指定要为当前页面注入的额外 head 标签。将附加在站点级配置注入的头部标签之后。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">meta</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">description</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">hello</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">meta</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">keywords</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">super duper SEO</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HeadConfig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h2 id="default-theme-only" tabindex="-1">仅默认主题 <a class="header-anchor" href="#default-theme-only" aria-label="Permalink to &quot;仅默认主题 {#default-theme-only}&quot;">​</a></h2><p>以下 frontmatter 选项仅在使用默认主题时适用。</p><h3 id="layout" tabindex="-1">layout <a class="header-anchor" href="#layout" aria-label="Permalink to &quot;layout&quot;">​</a></h3><ul><li>类型：<code>doc | home | page</code></li><li>默认值：<code>doc</code></li></ul><p>指定页面的布局。</p><ul><li><code>doc</code>——它将默认文档样式应用于 markdown 内容。</li><li><code>home</code>——“主页”的特殊布局。可以添加额外的选项，例如 <code>hero</code> 和 <code>features</code>，以快速创建漂亮的落地页。</li><li><code>page</code>——表现类似于 <code>doc</code>，但它不对内容应用任何样式。当想创建一个完全自定义的页面时很有用。</li></ul><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">doc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div>`,30)),a("h3",o,[s[0]||(s[0]=i("hero ")),l(e,{type:"info",text:"home page only"}),s[1]||(s[1]=i()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#hero","aria-label":'Permalink to "hero <Badge type="info" text="home page only" />"'},"​",-1))]),s[7]||(s[7]=a("p",null,[i("当 "),a("code",null,"layout"),i(" 设置为 "),a("code",null,"home"),i(" 时，定义主页 hero 部分的内容。更多详细信息："),a("a",{href:"./default-theme-home-page"},"默认主题：主页"),i("。")],-1)),a("h3",r,[s[3]||(s[3]=i("features ")),l(e,{type:"info",text:"home page only"}),s[4]||(s[4]=i()),s[5]||(s[5]=a("a",{class:"header-anchor",href:"#features","aria-label":'Permalink to "features <Badge type="info" text="home page only" />"'},"​",-1))]),s[8]||(s[8]=t(`<p>定义当<code>layout</code> 设置为 <code>home</code> 时要在 features 部分中显示的项目。更多详细信息：<a href="./default-theme-home-page">默认主题：主页</a>。</p><h3 id="navbar" tabindex="-1">navbar <a class="header-anchor" href="#navbar" aria-label="Permalink to &quot;navbar&quot;">​</a></h3><ul><li>类型：<code>boolean</code></li><li>默认值：<code>true</code></li></ul><p>是否显示<a href="./default-theme-nav">导航栏</a>。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">navbar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h3 id="sidebar" tabindex="-1">sidebar <a class="header-anchor" href="#sidebar" aria-label="Permalink to &quot;sidebar&quot;">​</a></h3><ul><li>类型：<code>boolean</code></li><li>默认值：<code>true</code></li></ul><p>是否显示 <a href="./default-theme-sidebar">侧边栏</a>.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sidebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h3 id="aside" tabindex="-1">aside <a class="header-anchor" href="#aside" aria-label="Permalink to &quot;aside&quot;">​</a></h3><ul><li>类型：<code>boolean | &#39;left&#39;</code></li><li>默认值：<code>true</code></li></ul><p>定义侧边栏组件在 <code>doc</code> 布局中的位置。</p><p>将此值设置为 <code>false</code> 可禁用侧边栏容器。<br> 将此值设置为 <code>true</code> 会将侧边栏渲染到右侧。<br> 将此值设置为 <code>left</code> 会将侧边栏渲染到左侧。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">aside</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h3 id="outline" tabindex="-1">outline <a class="header-anchor" href="#outline" aria-label="Permalink to &quot;outline&quot;">​</a></h3><ul><li>类型：<code>number | [number, number] | &#39;deep&#39; | false</code></li><li>默认值：<code>2</code></li></ul><p>大纲中显示的标题级别。它与 <a href="./default-theme-config#outline">config.themeConfig.outline.level</a> 相同，它会覆盖站点级的配置。</p><h3 id="lastupdated" tabindex="-1">lastUpdated <a class="header-anchor" href="#lastupdated" aria-label="Permalink to &quot;lastUpdated&quot;">​</a></h3><ul><li>类型：<code>boolean | Date</code></li><li>默认值：<code>true</code></li></ul><p>是否在当前页面的页脚中显示<a href="./default-theme-last-updated">最后更新时间</a>的文本。如果指定了日期时间，则会显示该日期时间而不是上次 git 修改的时间戳。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lastUpdated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h3 id="editlink" tabindex="-1">editLink <a class="header-anchor" href="#editlink" aria-label="Permalink to &quot;editLink&quot;">​</a></h3><ul><li>类型：<code>boolean</code></li><li>默认值：<code>true</code></li></ul><p>是否在当前页的页脚显示<a href="./default-theme-edit-link">编辑链接</a>。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">editLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h3 id="footer" tabindex="-1">footer <a class="header-anchor" href="#footer" aria-label="Permalink to &quot;footer&quot;">​</a></h3><ul><li>类型：<code>boolean</code></li><li>默认值：<code>true</code></li></ul><p>是否显示<a href="./default-theme-footer">页脚</a>。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h3 id="pageclass" tabindex="-1">pageClass <a class="header-anchor" href="#pageclass" aria-label="Permalink to &quot;pageClass&quot;">​</a></h3><ul><li>类型：<code>string</code></li></ul><p>将额外的类名称添加到特定页面。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pageClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">custom-page-class</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><p>然后可以在 <code>.vitepress/theme/custom.css</code> 文件中自定义该特定页面的样式：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-page-class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 特定页面的样式 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,35))])}const f=n(k,[["render",c]]);export{F as __pageData,f as default};
