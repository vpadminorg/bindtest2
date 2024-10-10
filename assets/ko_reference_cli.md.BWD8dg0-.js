import{_ as e,c as t,o as a,aT as s}from"./chunks/framework.BJsh_s0X.js";const k=JSON.parse('{"title":"명령 줄 인터페이스","description":"","frontmatter":{},"headers":[],"relativePath":"ko/reference/cli.md","filePath":"ko/reference/cli.md","lastUpdated":1728556599000}'),d={name:"ko/reference/cli.md"},i=s('<h1 id="command-line-interface" tabindex="-1">명령 줄 인터페이스 <a class="header-anchor" href="#command-line-interface" aria-label="Permalink to &quot;명령 줄 인터페이스 {#command-line-interface}&quot;">​</a></h1><h2 id="vitepress-dev" tabindex="-1"><code>vitepress dev</code> <a class="header-anchor" href="#vitepress-dev" aria-label="Permalink to &quot;`vitepress dev`&quot;">​</a></h2><p>지정된 디렉토리를 루트로 사용하여 VitePress 개발 서버 시작. 기본값은 현재 디렉토리입니다. 현재 디렉토리에서 실행할 때는 <code>dev</code> 명령을 생략할 수도 있습니다.</p><h3 id="사용법" tabindex="-1">사용법 <a class="header-anchor" href="#사용법" aria-label="Permalink to &quot;사용법&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 현재 디렉토리에서 시작, `dev` 생략</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 서브 디렉토리에서 시작</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [root]</span></span></code></pre></div><h3 id="옵션" tabindex="-1">옵션 <a class="header-anchor" href="#옵션" aria-label="Permalink to &quot;옵션&quot;">​</a></h3><table tabindex="0"><thead><tr><th>옵션</th><th>설명</th></tr></thead><tbody><tr><td><code>--open [path]</code></td><td>시작 시 브라우저 열기 (<code>boolean | string</code>)</td></tr><tr><td><code>--port &lt;port&gt;</code></td><td>포트 지정 (<code>number</code>)</td></tr><tr><td><code>--base &lt;path&gt;</code></td><td>공개 기본 경로 (기본값: <code>/</code>) (<code>string</code>)</td></tr><tr><td><code>--cors</code></td><td>CORS 활성화</td></tr><tr><td><code>--strictPort</code></td><td>지정된 포트가 이미 사용 중인 경우 종료 (<code>boolean</code>)</td></tr><tr><td><code>--force</code></td><td>최적화기가 캐시를 무시하고 다시 번들링하도록 강제 (<code>boolean</code>)</td></tr></tbody></table><h2 id="vitepress-build" tabindex="-1"><code>vitepress build</code> <a class="header-anchor" href="#vitepress-build" aria-label="Permalink to &quot;`vitepress build`&quot;">​</a></h2><p>VitePress 사이트를 프로덕션 용으로 빌드합니다.</p><h3 id="사용법-1" tabindex="-1">사용법 <a class="header-anchor" href="#사용법-1" aria-label="Permalink to &quot;사용법&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [root]</span></span></code></pre></div><h3 id="옵션-1" tabindex="-1">옵션 <a class="header-anchor" href="#옵션-1" aria-label="Permalink to &quot;옵션&quot;">​</a></h3><table tabindex="0"><thead><tr><th>옵션</th><th>설명</th></tr></thead><tbody><tr><td><code>--mpa</code> (실험적)</td><td>클라이언트 측 수화 없이 <a href="./../guide/mpa-mode">MPA 모드</a>에서 빌드 (<code>boolean</code>)</td></tr><tr><td><code>--base &lt;path&gt;</code></td><td>공개 기본 경로 (기본값: <code>/</code>) (<code>string</code>)</td></tr><tr><td><code>--target &lt;target&gt;</code></td><td>트랜스파일 대상 (기본값: <code>&quot;modules&quot;</code>) (<code>string</code>)</td></tr><tr><td><code>--outDir &lt;dir&gt;</code></td><td><strong>cwd</strong>에 상대적인 출력 디렉토리 (기본값: <code>&lt;root&gt;/.vitepress/dist</code>) (<code>string</code>)</td></tr><tr><td><code>--minify [minifier]</code></td><td>미니화 활성화/비활성화하거나 사용할 미니화기를 지정 (기본값: <code>&quot;esbuild&quot;</code>) (<code>boolean | &quot;terser&quot; | &quot;esbuild&quot;</code>)</td></tr><tr><td><code>--assetsInlineLimit &lt;number&gt;</code></td><td>바이트 단위로 정적 자산 base64 인라인 임계값 (기본값: <code>4096</code>) (<code>number</code>)</td></tr></tbody></table><h2 id="vitepress-preview" tabindex="-1"><code>vitepress preview</code> <a class="header-anchor" href="#vitepress-preview" aria-label="Permalink to &quot;`vitepress preview`&quot;">​</a></h2><p>프로덕션 빌드를 로컬에서 미리 볼 수 있습니다.</p><h3 id="사용법-2" tabindex="-1">사용법 <a class="header-anchor" href="#사용법-2" aria-label="Permalink to &quot;사용법&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> preview</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [root]</span></span></code></pre></div><h3 id="옵션-2" tabindex="-1">옵션 <a class="header-anchor" href="#옵션-2" aria-label="Permalink to &quot;옵션&quot;">​</a></h3><table tabindex="0"><thead><tr><th>옵션</th><th>설명</th></tr></thead><tbody><tr><td><code>--base &lt;path&gt;</code></td><td>공개 기본 경로 (기본값: <code>/</code>) (<code>string</code>)</td></tr><tr><td><code>--port &lt;port&gt;</code></td><td>포트 지정 (<code>number</code>)</td></tr></tbody></table><h2 id="vitepress-init" tabindex="-1"><code>vitepress init</code> <a class="header-anchor" href="#vitepress-init" aria-label="Permalink to &quot;`vitepress init`&quot;">​</a></h2><p>현재 디렉토리에서 <a href="./../guide/getting-started#setup-wizard">설정 마법사</a> 시작.</p><h3 id="사용법-3" tabindex="-1">사용법 <a class="header-anchor" href="#사용법-3" aria-label="Permalink to &quot;사용법&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div>',23),o=[i];function r(n,c,l,h,p,b){return a(),t("div",null,o)}const g=e(d,[["render",r]]);export{k as __pageData,g as default};
