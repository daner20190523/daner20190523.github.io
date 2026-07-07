(function () {
  var FOOTER =
    '<div class="wuxia-divider">\u25c6 \u25c7 \u25c6 \u25c7 \u25c6</div>' +
    '<div class="footer"><div class="footer-left">' +
      '<span class="refs-label">\u4e66\u5c71\u5bfc\u822a</span>' +
      '<ul class="refs">' +
        '<li><a href="../index.html">\u2190 \u8fd4\u56de\u6c5f\u6e56</a></li>' +
        '<li><a href="reading-notes.html">\u8bfb\u4e66\u7b14\u8bb0</a></li>' +
        '<li><a href="articles.html">\u5168\u90e8\u6587\u7ae0</a></li>' +
        '<li><a href="../index.html#gallery">\u6b66\u6797\u56fe\u5f55</a></li>' +
      '</ul>' +
      '<div class="sig-line"></div>' +
      '<div class="sig-name">daner\u6280\u672f\u6808</div>' +
      '<div class="sig-sub">Tech Knowledge Card \u00b7 Web Edition \u00b7 Multi-source verified</div>' +
    '</div>' +
    '<div class="footer-right">' +
      '<img src="../qrcode_wechat.jpg" alt="\u5173\u6ce8\u516c\u4f17\u53f7 daner\u6280\u672f\u6808" class="qrcode-img" />' +
      '<span class="qrcode-hint">\u626b\u7801\u5173\u6ce8</span>' +
    '</div></div>';
  var el = document.getElementById("siteFooter");
  if (el) el.innerHTML = FOOTER;
})();
