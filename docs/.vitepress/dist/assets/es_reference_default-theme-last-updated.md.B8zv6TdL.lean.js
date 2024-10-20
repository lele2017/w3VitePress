import{_ as e,c as i,a2 as t,o as s}from"./chunks/framework.CGR1JVSF.js";const u=JSON.parse('{"title":"Última Actualización","description":"","frontmatter":{},"headers":[],"relativePath":"es/reference/default-theme-last-updated.md","filePath":"es/reference/default-theme-last-updated.md","lastUpdated":1718108051000}'),n={name:"es/reference/default-theme-last-updated.md"};function l(d,a,o,r,p,c){return s(),i("div",null,a[0]||(a[0]=[t(`<h1 id="last-updated" tabindex="-1">Última Actualización <a class="header-anchor" href="#last-updated" aria-label="Permalink to &quot;Última Actualización {#last-updated}&quot;">​</a></h1><p>La hora en que se actualizó el contenido por última vez se mostrará en la esquina inferior derecha de la página. Para habilitar, agregue la opción <code>lastUpdated</code> en su confirguración.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Necesitas hacer un <em>commit</em> en el archivo markdown para ver el clima actualizado.</p></div><h2 id="site-level-config" tabindex="-1">Configuración a nivel de sitio <a class="header-anchor" href="#site-level-config" aria-label="Permalink to &quot;Configuración a nivel de sitio {#site-level-config}&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  lastUpdated: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="frontmatter-config" tabindex="-1">Configuración Frontmatter <a class="header-anchor" href="#frontmatter-config" aria-label="Permalink to &quot;Configuración Frontmatter {#frontmatter-config}&quot;">​</a></h2><p>Esto se puede desactivar por página usando la opción <code>lastUpdated</code> en frontmatter:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lastUpdated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><p>Consulte <a href="./default-theme-config#lastupdated">Tema Personalizado: Última Actualización</a> para obtener más. Cualquier valor positivo a nivel de tema también habilitará la funcionalidad a menos que esté explícitamente deshabilitado a nivel de página o sitio.</p>`,9)]))}const m=e(n,[["render",l]]);export{u as __pageData,m as default};
