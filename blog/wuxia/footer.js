/*
 * 公共页脚模板 — 所有 wuxia 子页面统一引用
 * 用法：在 <body> 结尾放 <footer id="siteFooter"></footer><script src="footer.js"></script>
 * 样式自包含（字面量，不依赖页面 :root 变量）。
 */
(function () {
  // ===== 自包含样式（字面量，单处维护，不依赖页面变量）=====
  var CSS = ''
    + '.footer-full{background:#1a1410;padding:56px 72px 48px;color:#b0aca4;'
    + 'display:grid;grid-template-columns:1fr auto;gap:48px;}'
    + '.footer-full .footer-left{min-width:0;}'
    + '.footer-full .refs-label{font-size:10px;font-weight:700;letter-spacing:3px;'
    + 'text-transform:uppercase;color:#5c5850;margin-bottom:18px;display:block;}'
    + '.footer-full .refs{list-style:none;margin-bottom:36px;}'
    + '.footer-full .refs li{font-size:12px;line-height:2;color:#7a756b;'
    + 'padding-left:18px;position:relative;margin-bottom:4px;word-break:break-all;}'
    + '.footer-full .refs li::before{content:"[·]";position:absolute;left:0;'
    + 'color:#4a4540;font-size:10px;}'
    + '.footer-full .refs li a{color:#7a756b;text-decoration:none;transition:color .2s;}'
    + '.footer-full .refs li a:hover{color:#d4b860;}'
    + '.footer-full .sig-line{width:40px;height:2px;background:#3a3530;margin-bottom:20px;}'
    + '.footer-full .sig-name{font-family:"Noto Serif SC","KaiTi","STKaiti","楷体","Songti SC",serif;'
    + 'font-size:22px;font-weight:700;color:#faf7f0;letter-spacing:2px;margin-bottom:4px;}'
    + '.footer-full .sig-sub{font-size:11px;letter-spacing:1px;color:#5c5850;}'
    + '.footer-full .footer-right{display:flex;flex-direction:column;'
    + 'align-items:center;justify-content:flex-end;gap:10px;}'
    + '.footer-full .qrcode-img{width:90px;height:90px;border-radius:6px;opacity:.88;'
    + 'border:1px solid rgba(180,180,170,.15);display:block;}'
    + '.footer-full .qrcode-hint{font-size:10px;letter-spacing:1.5px;color:#5c5850;}'
    + '@media(max-width:480px){'
    + '.footer-full{padding:40px 24px;grid-template-columns:1fr;}'
    + '.footer-full .footer-right{flex-direction:row;justify-content:flex-start;}}';

  var st = document.createElement('style');
  st.textContent = CSS;
  document.head.appendChild(st);

  // ===== 页脚 HTML（单一来源）=====
  var FOOTER =
    '<div class="footer-full"><div class="footer-left">' +
      '<span class="refs-label">书山导航</span>' +
      '<ul class="refs">' +
        '<li><a href="../index.html">← 返回江湖</a></li>' +
        '<li><a href="reading-notes.html">读书笔记</a></li>' +
        '<li><a href="books.html">藏书阁</a></li>' +
        '<li><a href="articles.html">全部文章</a></li>' +
        '<li><a href="../index.html#gallery">武林图录</a></li>' +
      '</ul>' +
      '<div class="sig-line"></div>' +
      '<div class="sig-name">daner技术栈</div>' +
      '<div class="sig-sub">Tech Knowledge Card · Web Edition · Multi-source verified</div>' +
    '</div>' +
    '<div class="footer-right">' +
      '<img src="../qrcode_wechat.jpg" alt="关注公众号 daner技术栈" class="qrcode-img" />' +
      '<span class="qrcode-hint">扫码关注</span>' +
    '</div></div>';

  var el = document.getElementById('siteFooter');
  if (el) el.innerHTML = FOOTER;
})();
