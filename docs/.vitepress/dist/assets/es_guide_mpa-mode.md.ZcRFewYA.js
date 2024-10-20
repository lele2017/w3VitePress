import{_ as n,c as t,j as a,a as s,G as o,a2 as l,B as d,o as p}from"./chunks/framework.CGR1JVSF.js";const v=JSON.parse('{"title":"Modo MPA","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/mpa-mode.md","filePath":"es/guide/mpa-mode.md","lastUpdated":1717650360000}'),r={name:"es/guide/mpa-mode.md"},c={id:"mpa-mode",tabindex:"-1"};function h(k,e,g,m,E,u){const i=d("Badge");return p(),t("div",null,[a("h1",c,[e[0]||(e[0]=s("Modo MPA ")),o(i,{type:"warning",text:"experimental"}),e[1]||(e[1]=s()),e[2]||(e[2]=a("a",{class:"header-anchor",href:"#mpa-mode","aria-label":'Permalink to "Modo MPA <Badge type="warning" text="experimental" /> {#mpa-mode}"'},"​",-1))]),e[3]||(e[3]=l(`<p>El modo MPA (Aplicación de multiples páginas) puede ser habilitado por la linea de comandos con <code>vitepress build --mpa</code>, o a través de la configuración por la opción <code>mpa: true</code>.</p><p>En el modo MPA, todas las páginas son presentadas por defecto sin JavaScript incluído. Como resultado, el sitio en producción probablemente tendrá una marca de desempeño de visita inicial superior con herramientas de auditoría.</p><p>Sin embargo, debido a la ausencia de navegación SPA, los links entre páginas resultan en recargas de página completos. Navegaciones después de la carga en el modo MPA no parecerán tan instantáneos en comparación con el modo SPA.</p><p>También note que no tener JavaScript por defecto significa que está esencialmente utilizando Vue como modelo de lenguaje en el lado del servidor. Nungun manipulador de eventos será embutido en el navegador, entonces no habrá interactividad. Para cargar JavaScript en el lado del cliente, necesitará usar el tag especial <code>&lt;script client&gt;</code>:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> client</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;h1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;JavaScript en el lado del cliente!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># Hola</span></span></code></pre></div><p><code>&lt;script client&gt;</code> es una funcionalidad exclusiva VitePress, no una funcionalidad Vue. Funciona tanto en archivos <code>.md</code> como en archivos <code>.vue</code>, pero solo en el modo MPA. Scripts de cliente en todos los componentes del tema serán empaquetados juntos, mientras el script del cliente para una página específica será dividido solo para esa página.</p><p>Note que <code>&lt;script client&gt;</code> <strong>no es calificado como código de componente Vue</strong>: es procesado como un simple módulo JavaScript. Por esta razón, el modo MPA debe ser usado apenas si su sitio exige el mínimo absoluto de interactividad del lado del cliente.</p>`,7))])}const F=n(r,[["render",h]]);export{v as __pageData,F as default};
