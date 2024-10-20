import{_ as e,c as s,a2 as i,o}from"./chunks/framework.CGR1JVSF.js";const u=JSON.parse('{"title":"Layout","description":"","frontmatter":{},"headers":[],"relativePath":"es/reference/default-theme-layout.md","filePath":"es/reference/default-theme-layout.md","lastUpdated":1719410492000}'),n={name:"es/reference/default-theme-layout.md"};function t(l,a,d,p,r,c){return o(),s("div",null,a[0]||(a[0]=[i(`<h1 id="layout" tabindex="-1">Layout <a class="header-anchor" href="#layout" aria-label="Permalink to &quot;Layout {#layout}&quot;">​</a></h1><p>Puedes elegir el layout de la página definiendo una opción de <code>layout</code> para el <a href="./frontmatter-config">frontmatter</a> De la página. Hay tres opciones de layout: <code>doc</code>, <code>page</code> y <code>home</code>. Si no se especifica nada, la página será tratada como una página. <code>doc</code>.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">doc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h2 id="doc-layout" tabindex="-1">Layout del documento <a class="header-anchor" href="#doc-layout" aria-label="Permalink to &quot;Layout del documento {#doc-layout}&quot;">​</a></h2><p>La opción <code>doc</code> es el layout predeterminado y aplica estilo a todo el contenido de Markdown el aspecto de &quot;documentación&quot;. Funciona agrupando todo el contenido en la clase CSS <code>vp-doc</code>, y aplicando estilos a los elementos debajo de ella.</p><p>Casi todos los elementos genéricos como <code>p</code> o <code>h2</code>, recibirá un estilo especial. Por tanto, recuerda que si añades algún HTML contenido personalizado dentro del contenido Markdown, también se verá afectado por estos estilos.</p><p>También proporciona recursos de documentación específicos que se enumeran a continuación. Estas funciones solo están habilitadas en este layout.</p><ul><li>Editar link</li><li>Links Anterior y próximo.</li><li><em>Outline</em></li><li><a href="./default-theme-carbon-ads">Carbon Ads</a></li></ul><h2 id="page-layout" tabindex="-1">Layout de la Página <a class="header-anchor" href="#page-layout" aria-label="Permalink to &quot;Layout de la Página {#page-layout}&quot;">​</a></h2><p>La opción <code>page</code> se trata como una &#39;página en blanco&#39;. Markdown aún se procesará y todo <a href="./../guide/markdown">Extensiones Markdown</a> funcionará de la misma manera que el layout <code>doc</code>, pero esto no recibirá ningún estilo predeterminado.</p><p>El layout de la página le permitirá diseñar todo sin que el tema de VitePress afecte el marcado. Esto es útil cuando desea crear su propia página personalizada.</p><p>Tenga en cuenta que incluso en este mismo layout, la barra lateral seguirá apareciendo si la página tiene una configuración de barra lateral correspondiente.</p><h2 id="home-layout" tabindex="-1">Layout de Home <a class="header-anchor" href="#home-layout" aria-label="Permalink to &quot;Layout de Home {#home-layout}&quot;">​</a></h2><p>La opción <code>home</code> gerará un modelo de <em>&quot;Homepage&quot;</em>. En este layout podrás definir opciones extras, como <code>hero</code> y <code>features</code>, para personalizar todavá más el contenido. Visite <a href="./default-theme-home-page">Tema predeterminado: Página Inicial</a> para obter más detalles.</p><h2 id="no-layout" tabindex="-1">Sin Layout <a class="header-anchor" href="#no-layout" aria-label="Permalink to &quot;Sin Layout {#no-layout}&quot;">​</a></h2><p>Si no quieres ningún diseño, puedes pasar <code>layout: false</code> a través del frontmatter. Esta opción es útil si deseas una página de destino completamente personalizable (sin barra lateral, barra de navegacón o pie de página por defecto).</p><h2 id="custom-layout" tabindex="-1">Layout Personalizado <a class="header-anchor" href="#custom-layout" aria-label="Permalink to &quot;Layout Personalizado {#custom-layout}&quot;">​</a></h2><p>También puedes usar un layout personalizado:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">foo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div><p>Esto buscará un componente llamado <code>foo</code> registrado en contexto. Por ejemplo, puede registrar su componente globalmente en <code>.vitepress/theme/index.ts</code>:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DefaultTheme </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress/theme&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./Foo.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  extends: DefaultTheme,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  enhanceApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Foo)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,21)]))}const k=e(n,[["render",t]]);export{u as __pageData,k as default};
