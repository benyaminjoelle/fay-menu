/* Fay by Haretna menu. Reads window.FAY_MENU (js/menu-data.js).
   Every tab is one page; swipe sideways or tap a tab.
   Photos: set img: 'images/name.jpg' on an item in menu-data.js, or tap the photo box on the phone to try one. */
(function () {
  'use strict';
  var D = window.FAY_MENU, C = D.config;
  var STR = {
    offers: ['Offers', 'العروض'], until: ['Until', 'حتى'], addPhoto: ['Add photo', 'أضف صورة'],
    hint: ['Tap a photo box to add a picture. Swipe to see the next section.', 'اضغط على مربع الصورة لإضافة صورة. اسحب لرؤية القسم التالي.'],
    s: ['S', 'ص'], m: ['M', 'و'], l: ['L', 'ك'], Best: ['Best seller', 'الأكثر طلباً']
  };
  var TAG = { 'new': ['New', 'جديد'], popular: ['Best seller', 'الأكثر طلباً'], seasonal: ['Winter', 'شتوي'] };
  var lang = 'ar', pendingKey = null, photos = {};
  var $ = function (id) { return document.getElementById(id); };
  var pager = $('pager'), tabsEl = $('tabs'), pick = $('pick');

  try { photos = JSON.parse(localStorage.getItem('fay-photos') || '{}'); } catch (e) { photos = {}; }
  try { var h = (location.hash || '').replace('#', ''); if (h === 'en' || h === 'ar') lang = h; else lang = localStorage.getItem('fay-lang') || 'ar'; } catch (e) {}
  if (lang !== 'en' && lang !== 'ar') lang = 'ar';

  function i() { return lang === 'ar' ? 1 : 0; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function num(n) { return n % 1 ? n.toFixed(2) : String(n); }
  function iso() { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function cur() { return C.currency[lang]; }
  var CAM = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h3l1.5-2h7L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>';

  function price(it) {
    var p = it.p;
    if (typeof p === 'number') return '<span class="one">' + (it.plus ? '+' : '') + num(p) + '<small>' + esc(cur()) + '</small></span>';
    return ['s', 'm', 'l'].filter(function (k) { return p[k] != null; }).map(function (k) {
      return '<span class="pill"><i>' + STR[k][i()] + '</i><b>' + num(p[k]) + '</b></span>';
    }).join('') + '<span class="one"><small>' + esc(cur()) + '</small></span>';
  }

  function itemHTML(it, key) {
    var src = photos[key] || it.img || '';
    var style = src ? ' style="background-image:url(\'' + esc(src) + '\')"' : '';
    var tags = (it.t || []).map(function (t) { return '<span class="badge">' + TAG[t][i()] + '</span>'; }).join('');
    return '<article class="item"><button type="button" class="photo' + (src ? ' has' : '') + '" data-key="' + esc(key) + '"' + style +
      ' aria-label="' + STR.addPhoto[i()] + '">' + CAM + '<span>' + STR.addPhoto[i()] + '</span></button>' +
      '<div class="info"><div class="name">' + esc(it.n[i()]) + tags + '</div>' +
      (it.d ? '<div class="desc">' + esc(it.d[i()]) + '</div>' : '') +
      '<div class="price">' + price(it) + '</div></div></article>';
  }

  function offersHTML() {
    var t = iso();
    var list = D.offers.filter(function (o) { return !o.until || o.until >= t; });
    if (!list.length) return '';
    return list.map(function (o) {
      var tag = o.price != null ? num(o.price) + ' ' + cur() + (o.was ? '<span class="was">' + num(o.was) + '</span>' : '') : (o.badge ? o.badge[i()] : '');
      return '<div class="offer">' + (tag ? '<span class="tag">' + tag + '</span>' : '') + '<h3>' + esc(o.title[i()]) + '</h3><p>' + esc(o.desc[i()]) + '</p>' +
        '<div class="meta">' + esc(o.when[i()]) + ' · ' + STR.until[i()] + ' ' + esc(o.until) + '</div></div>';
    }).join('');
  }

  function render(keep) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = 'Fay by Haretna Menu';
    $('hours').textContent = C.hours[lang];
    document.querySelectorAll('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });

    var pages = [], tabs = [];
    var off = offersHTML();
    if (off) { pages.push({ id: 'offers', html: '<div class="hint">' + STR.hint[i()] + '</div>' + off }); tabs.push(STR.offers[i()]); }
    D.categories.forEach(function (c) {
      var html = c.groups.map(function (g, gi) {
        return '<section>' + (g.name ? '<h2 class="group-title">' + esc(g.name[i()]) + '</h2>' : '') +
          '<div class="items">' + g.items.map(function (it, ii) { return itemHTML(it, c.id + '-' + gi + '-' + ii); }).join('') + '</div></section>';
      }).join('');
      if (c.id === 'addons') html += '<div class="note">' + esc(C.vat[lang]) + '</div><div class="note">' + esc(C.allergy[lang]) + '</div>';
      pages.push({ id: c.id, html: html }); tabs.push(c.name[i()]);
    });
    pager.innerHTML = pages.map(function (p, n) { return '<section class="page" id="pg-' + p.id + '" data-n="' + n + '">' + p.html + '</section>'; }).join('');
    tabsEl.innerHTML = tabs.map(function (t, n) { return '<button type="button" class="tab" role="tab" data-n="' + n + '" aria-selected="false">' + esc(t) + '</button>'; }).join('');
    observe();
    go(keep || 0, false);
  }

  var current = 0, io;
  function select(n) {
    current = n;
    tabsEl.querySelectorAll('.tab').forEach(function (b) {
      var on = +b.dataset.n === n; b.setAttribute('aria-selected', String(on));
      if (on) { var l = b.offsetLeft - tabsEl.offsetLeft, mid = l - (tabsEl.clientWidth - b.offsetWidth) / 2; tabsEl.scrollTo({ left: mid, behavior: 'smooth' }); }
    });
  }
  function observe() {
    if (io) io.disconnect();
    io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting && e.intersectionRatio > .6) select(+e.target.dataset.n); });
    }, { root: pager, threshold: [.6] });
    pager.querySelectorAll('.page').forEach(function (p) { io.observe(p); });
  }
  function go(n, smooth) {
    var pg = pager.querySelector('.page[data-n="' + n + '"]'); if (!pg) return;
    select(n);
    var w = pager.clientWidth, dir = lang === 'ar' ? -1 : 1;
    pager.scrollTo({ left: dir * n * w, behavior: smooth === false ? 'auto' : 'smooth' });
  }

  tabsEl.addEventListener('click', function (e) { var b = e.target.closest('.tab'); if (b) go(+b.dataset.n, true); });
  document.querySelector('.lang').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b || b.dataset.lang === lang) return;
    lang = b.dataset.lang; try { localStorage.setItem('fay-lang', lang); } catch (x) {}
    render(current);
  });
  window.addEventListener('resize', function () { go(current, false); });

  /* photos */
  pager.addEventListener('click', function (e) {
    var b = e.target.closest('.photo'); if (!b) return;
    pendingKey = b.dataset.key; pick.value = ''; pick.click();
  });
  pick.addEventListener('change', function () {
    var f = pick.files && pick.files[0]; if (!f || !pendingKey) return;
    var key = pendingKey, r = new FileReader();
    r.onload = function () {
      var im = new Image();
      im.onload = function () {
        var s = Math.min(1, 480 / Math.max(im.width, im.height)), cv = document.createElement('canvas');
        cv.width = Math.round(im.width * s); cv.height = Math.round(im.height * s);
        cv.getContext('2d').drawImage(im, 0, 0, cv.width, cv.height);
        photos[key] = cv.toDataURL('image/jpeg', .72);
        try { localStorage.setItem('fay-photos', JSON.stringify(photos)); } catch (x) {}
        var btn = pager.querySelector('.photo[data-key="' + key + '"]');
        if (btn) { btn.classList.add('has'); btn.style.backgroundImage = 'url(' + photos[key] + ')'; }
      };
      im.src = r.result;
    };
    r.readAsDataURL(f);
  });

  render(0);
})();
