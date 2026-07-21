/*
 * 公共导航模板 — 全站统一引用（wuxia 子页与 blog 根目录页均可用）
 * 用法：在 <body> 开头放 <div id="siteNav"></div><script src="wuxia/nav.js"></script>
 * 样式自包含（字面量，单处维护），并根据当前页面所在目录自动适配链接前缀，
 * 当前页根据 URL 自动高亮。
 */
(function () {
  // ===== 自包含样式（字面量，单处维护，不依赖页面变量）=====
  var CSS = ''
    + '.nav{position:sticky;top:0;z-index:100;background:rgba(250,247,240,0.92);'
    + 'backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);'
    + 'border-bottom:1px solid #d9ceb8;padding:0 24px;}'
    + '.nav-inner{max-width:1080px;margin:0 auto;display:flex;'
    + 'align-items:center;justify-content:space-between;height:56px;}'
    + '.nav-logo{font-family:"Noto Serif SC","KaiTi","STKaiti","楷体","Songti SC",serif;'
    + 'font-size:18px;font-weight:700;letter-spacing:2px;color:#c43a31;'
    + 'text-decoration:none;display:flex;align-items:center;gap:8px;}'
    + '.nav-logo::before{content:"";display:inline-block;width:6px;height:6px;'
    + 'background:#c43a31;border-radius:50%;}'
    + '.nav-links{display:flex;gap:24px;list-style:none;}'
    + '.nav-links a{font-size:13px;font-weight:600;letter-spacing:1.5px;'
    + 'color:#6b5e4f;text-decoration:none;transition:color .2s;}'
    + '.nav-links a:hover,.nav-links a.active{color:#c43a31;}'
    + '@media(max-width:480px){.nav-links{gap:12px;font-size:11px;}}';

  var st = document.createElement('style');
  st.textContent = CSS;
  document.head.appendChild(st);

  // ===== 位置自适应：根据当前页面所在目录决定链接前缀 =====
  var parts  = location.pathname.split('/').filter(Boolean);
  var last   = parts[parts.length - 1] || 'index.html';
  var parent = parts.length >= 2 ? parts[parts.length - 2] : '';
  var inWuxia = (parent === 'wuxia');

  var P   = inWuxia ? '' : 'wuxia/';                 // 子页面路径前缀
  var idx = inWuxia ? '../index.html' : 'index.html';
  var abt = inWuxia ? '../about.html' : 'about.html';

  // ===== 导航项（单一来源，新增页面只需改这里）=====
  var LINKS = [
    { t: '首页',   u: idx },
    { t: '文章',   u: P + 'articles.html' },
    { t: '兵器谱', u: inWuxia ? 'bingqipu.html' : 'wuxia/bingqipu.html' },
    { t: '藏书阁', u: P + 'books.html' },
    { t: '读书笔记', u: P + 'reading-notes.html' },
    { t: '摄影',   u: P + 'photography.html' },
    { t: '图录',   u: P + 'gallery.html' },
    { t: '关于',   u: abt },
  ];

  function isActive(u) {
    if (u === idx) return last === 'index.html';
    return u.split('/').pop() === last;
  }

  var html = '<nav class="nav"><div class="nav-inner">'
    + '<a href="' + idx + '" class="nav-logo">张单单 · 江湖</a>'
    + '<ul class="nav-links">';
  LINKS.forEach(function (l) {
    html += '<li><a href="' + l.u + '"'
      + (isActive(l.u) ? ' class="active"' : '') + '>' + l.t + '</a></li>';
  });
  html += '</ul></div></nav>';

  var el = document.getElementById('siteNav');
  if (el) el.innerHTML = html;
})();
