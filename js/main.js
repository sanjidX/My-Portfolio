(function () {
  "use strict";
  var C = window.PORTFOLIO;
  if (!C) { return; }
  var $ = function (s) { return document.querySelector(s); };
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function ul(a) { return "<ul>" + a.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>"; }
  function put(id, html) { var e = $("#" + id); if (e) { e.innerHTML = html; } }
  function head(h, sub) { return "<h2>" + esc(h) + "</h2>" + (sub ? '<p class="sub">' + esc(sub) + "</p>" : ""); }

  /* ---------- illustrative visuals (generated SVG, no real client data) ---------- */
  function W(inner, label) {
    return '<svg viewBox="0 0 320 180" role="img" aria-label="' + esc(label) + '" xmlns="http://www.w3.org/2000/svg"><rect class="v-bg" width="320" height="180"/>' + inner + "</svg>";
  }
  function chip(x, y, w, t) {
    return '<rect class="v-chip" x="' + x + '" y="' + y + '" width="' + w + '" height="16" rx="8"/><text class="v-tb" x="' + (x + w / 2) + '" y="' + (y + 11) + '" text-anchor="middle">' + t + "</text>";
  }
  function wave(segs, lines) {
    var o = "", i, s, h, c, k;
    for (i = 0; i < 46; i++) {
      c = "v-a";
      for (k = 0; k < segs.length; k++) { if (i >= segs[k][0] && i < segs[k][1]) { c = segs[k][2]; } }
      h = 6 + Math.abs(Math.sin(i * 0.55) * 20 + Math.cos(i * 1.7) * 9);
      o += '<rect class="' + c + '" x="' + (12 + i * 6.6) + '" y="' + (62 - h / 2) + '" width="4" height="' + h + '" rx="2"/>';
    }
    segs.forEach(function (g) {
      var x1 = 12 + g[0] * 6.6, x2 = 12 + g[1] * 6.6 - 3;
      o += '<path class="v-ln" d="M' + x1 + " 100H" + x2 + '"/><text class="v-t" x="' + (x1 + x2) / 2 + '" y="113" text-anchor="middle">' + g[3] + "</text>";
    });
    lines.forEach(function (w, n) { o += '<rect class="v-m" x="14" y="' + (128 + n * 15) + '" width="' + w + '" height="7" rx="3.5"/>'; });
    return o;
  }
  var V = {
    video: function (sweep) {
      var m = [[48, "acceleration"], [160, "harsh braking"], [262, "cornering"]], o =
        '<polygon class="v-m" points="145,50 175,50 290,124 30,124"/><path class="v-ln" d="M160 50V124" stroke-dasharray="5 5"/>' +
        '<rect class="v-b" x="143" y="68" width="34" height="24" rx="4"/><rect class="v-box" x="136" y="62" width="48" height="36"/>' + chip(118, 42, 84, "harsh braking") +
        '<rect class="v-m" x="238" y="10" width="72" height="44" rx="6"/><circle class="v-a" cx="274" cy="28" r="9"/><text class="v-t" x="274" y="49" text-anchor="middle">driver cam</text>' +
        '<text class="v-t" x="12" y="20">road view</text><path class="v-ln" d="M16 150H304"/>';
      m.forEach(function (e) { o += '<rect class="v-b" x="' + (e[0] - 3) + '" y="143" width="6" height="14" rx="2"/><text class="v-t" x="' + e[0] + '" y="172" text-anchor="middle">' + e[1] + "</text>"; });
      return W(o + '<g class="' + (sweep ? "sweep" : "") + '"><rect class="v-a" x="45" y="136" width="2" height="28"/></g>', "Dashcam frame with an event tag and timeline");
    },
    transcript: function () {
      return W(wave([[0, 17, "v-a", "speaker 1"], [17, 31, "v-b", "speaker 2"], [31, 38, "v-b", "overlap"], [38, 46, "v-m", "[noise]"]], [250, 210, 170]) + chip(236, 8, 72, "DTMF tone"), "Audio waveform with speaker, overlap and noise tags");
    },
    noise: function () {
      return W(wave([[0, 22, "v-a", "speech"], [22, 34, "v-m", "noise"], [34, 46, "v-a", "speech"]], [250, 190]), "Audio waveform with speech and noise tags");
    },
    moderation: function () {
      var r = [[18, "hate speech", 80], [60, "PII", 40], [102, "med. misinfo", 80]], o = "";
      r.forEach(function (e, n) {
        o += '<rect class="v-m" x="16" y="' + e[0] + '" width="' + (190 - n * 14) + '" height="7" rx="3.5"/><rect class="v-m" x="16" y="' + (e[0] + 15) + '" width="' + (140 + n * 10) + '" height="7" rx="3.5"/>' + chip(224, e[0] + 2, e[2] + 4, e[1]) + '<path class="v-ln" d="M16 ' + (e[0] + 34) + "H304" + '"/>';
      });
      return W(o + '<text class="v-tb" x="16" y="166">3,700+ items reviewed</text>', "Text items with risk category labels");
    },
    voice: function () {
      var r = ["pronunciation", "clarity", "tone", "overall quality"], o = "";
      r.forEach(function (t, n) {
        var y = 34 + n * 30;
        o += '<circle class="v-a" cx="26" cy="' + (y - 3) + '" r="8"/><path d="M22 ' + (y - 3) + 'l3 3 6-6" stroke="#fff" stroke-width="2" fill="none"/><text class="v-tb" x="42" y="' + y + '">' + t + "</text>";
      });
      return W(o + '<circle cx="252" cy="82" r="38" fill="none" style="stroke:var(--a)" stroke-width="8"/><text x="252" y="88" text-anchor="middle" class="v-tb" style="font-size:18px">100%</text><text class="v-t" x="252" y="140" text-anchor="middle">guideline</text><text class="v-t" x="252" y="152" text-anchor="middle">adherence</text>', "Voiceover criteria checklist");
    },
    dataset: function () {
      var o = "", i, x, y;
      for (i = 0; i < 9; i++) {
        x = 16 + (i % 3) * 58; y = 18 + Math.floor(i / 3) * 46;
        o += '<rect class="v-m" x="' + x + '" y="' + y + '" width="52" height="40" rx="5"/><circle class="' + (i % 2 ? "v-b" : "v-a") + '" cx="' + (x + 14 + (i % 3) * 8) + '" cy="' + (y + 20) + '" r="9" opacity=".85"/>';
        if (i === 2 || i === 4 || i === 6) { o += '<rect class="v-a" x="' + (x + 24) + '" y="' + (y + 8) + '" width="22" height="24" rx="3"/>'; }
      }
      return W(o + '<path class="v-ln" d="M196 80H226M220 74l6 6-6 6"/><text class="v-tb" x="262" y="82" text-anchor="middle" style="font-size:18px">1,000+</text><text class="v-t" x="262" y="96" text-anchor="middle">samples / week</text><text class="v-t" x="16" y="170">composited and masked</text>', "Grid of composite image tiles with masked regions");
    }
  };
  var IC = {
    video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3z"/>',
    audio: '<path d="M4 10v4M8 6v12M12 3v18M16 8v8M20 11v2"/>',
    text: '<path d="M4 6h16M4 12h16M4 18h10"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-8 9"/>',
    qa: '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>'
  };

  V.hub = function () {
    var o = '<circle class="v-ln spin" cx="160" cy="90" r="64" stroke-dasharray="3 7"/><circle class="v-ln" cx="160" cy="90" r="36"/>' +
      '<path class="v-ln" d="M160 68V36M160 112V144M182 90H236M138 90H84"/><circle class="v-a" cx="160" cy="90" r="22"/>' +
      '<text class="v-tb" x="160" y="94" text-anchor="middle" style="fill:#fff">data</text>';
    [[130, 20, 60, "video"], [236, 82, 64, "audio"], [130, 144, 60, "text"], [20, 82, 64, "images"]].forEach(function (n, k) {
      o += '<g class="pulse" style="animation-delay:' + k * 0.8 + 's">' + chip(n[0], n[1], n[2], n[3]) + "</g>";
    });
    return W(o, "Data work across video, audio, text and images");
  };
  function rotate(el, list) {
    if (!el) { return; }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = list[0]; return; }
    var i = 0, j = 0, del = false;
    (function tick() {
      var w = list[i], d = del ? 35 : 70;
      j += del ? -1 : 1;
      el.textContent = w.slice(0, j);
      if (!del && j === w.length) { del = true; d = 1700; }
      else if (del && j === 0) { del = false; i = (i + 1) % list.length; d = 350; }
      setTimeout(tick, d);
    })();
  }

  var page = document.body.getAttribute("data-page"), base = page === "work" ? "index.html" : "";
  var p = C.profile, cats = C.work.categories;
  $("#logo").innerHTML = esc(p.short) + "<span>.</span>";
  $("#logo").setAttribute("href", base + "#hero");
  $("#menu").innerHTML = C.nav.map(function (n) { return '<a href="' + base + "#" + n.id + '">' + esc(n.label) + "</a>"; }).join("");

  if (page === "home") {
    put("hero", '<div class="wrap hero-in"><div><span class="status"><i></i>' + esc(p.status) + "</span>" +
      '<h1 class="name">' + esc(p.name) + '</h1><p class="rolebar" aria-hidden="true">I\'m a <span id="rot"></span><b class="caret"></b></p>' +
      '<p class="sr">I am a ' + esc(p.roles.join(", ")) + ".</p>" +
      '<p class="role">' + esc(p.tagline) + '</p><div class="cta" style="margin-bottom:0">' + C.ctas.map(function (c) {
        return '<a class="btn' + (c.primary ? " pri" : "") + '" href="' + esc(c.href) + '">' + esc(c.label) + "</a>";
      }).join("") + '</div></div><div><div class="hero-viz"><div class="viz">' + V.hub() + '</div></div><span class="cap mono">' + esc(C.hero.caption) + "</span></div></div>");
    rotate($("#rot"), p.roles);
    put("work", '<div class="wrap">' + head(C.work.heading, C.work.intro) + '<div class="fields">' + cats.map(function (f, n) {
      var ok = f.items.length > 0, inner = '<span class="fn mono">0' + (n + 1) + '</span><span class="badge">' + (ok ? f.items.length + (f.items.length > 1 ? " projects" : " project") : "Coming soon") + "</span><h3>" + esc(f.label) + "</h3>" +
        (ok ? "<p>" + esc(f.tagline) + '</p><ul class="fl">' + f.items.map(function (i) { return "<li>" + esc(i.title) + "</li>"; }).join("") + '</ul><span class="go">Explore projects <i>→</i></span>'
            : '<div class="sk"><b></b><b></b><b></b></div><span class="go off">Projects coming soon</span>');
      return ok ? '<a class="field reveal" href="work.html#' + f.id + '">' + inner + "</a>" : '<div class="field soon reveal" aria-disabled="true">' + inner + "</div>";
    }).join("") + "</div></div>");
    [].forEach.call(document.querySelectorAll("a.field"), function (c) {
      c.addEventListener("pointermove", function (e) {
        var r = c.getBoundingClientRect();
        c.style.setProperty("--mx", e.clientX - r.left + "px"); c.style.setProperty("--my", e.clientY - r.top + "px");
      });
    });
  }

  if (page === "work") {
    var wp = $("#workpage");
    var state = function () {
      var h = location.hash.replace("#", "").split("/"), f = cats[0], i = 0;
      cats.forEach(function (c) { if (c.id === h[0]) { f = c; } });
      f.items.forEach(function (it, k) { if (it.id === h[1]) { i = k; } });
      return { f: f, i: i };
    };
    var show = function () {
      var s = state(), f = s.f, n = f.items.length, it = f.items[s.i], list, body;
      document.title = f.label + " | " + p.name;
      var tabsH = cats.map(function (c) {
        return '<a class="tab" role="tab" href="#' + c.id + '" aria-selected="' + (c === f) + '">' + esc(c.label) + (c.items.length ? "" : " · soon") + "</a>";
      }).join("");
      if (n) {
        var pv = f.items[(s.i + n - 1) % n], nx = f.items[(s.i + 1) % n];
        list = f.items.map(function (x, k) {
          return '<a class="pi' + (k === s.i ? " on" : "") + '" href="#' + f.id + "/" + x.id + '"' + (k === s.i ? ' aria-current="true"' : "") + '><i class="mono">' + (k < 9 ? "0" : "") + (k + 1) + "</i><span><b>" + esc(x.title) + "</b><small>" + esc(x.org) + " · " + esc(x.period) + "</small></span></a>";
        }).join("");
        body = '<article class="pd"><div class="viz">' + V[it.visual](false) + '<span class="ill">Illustrative visual</span></div><div class="pbody"><span class="eyebrow mono">' + esc(it.type) + " · " + esc(it.period) + "</span><h2>" + esc(it.title) + '</h2><p class="meta">' + esc(it.org) + '</p><p style="margin-top:12px">' + esc(it.summary) + '</p><h3 class="sh">What I did</h3>' + ul(it.highlights) +
          (it.metrics ? '<div class="mets">' + it.metrics.map(function (m) { return "<div><b>" + esc(m.v) + "</b><span>" + esc(m.l) + "</span></div>"; }).join("") + "</div>" : "") +
          '<div class="tags">' + it.tags.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>" +
          (n > 1 ? '<div class="pnav"><a href="#' + f.id + "/" + pv.id + '">← ' + esc(pv.title) + '</a><a href="#' + f.id + "/" + nx.id + '">' + esc(nx.title) + " →</a></div>" : "") + "</div></article>";
      } else {
        list = [1, 2, 3].map(function () { return '<span class="pi ghost"><span class="sk"><b></b><b></b></span></span>'; }).join("");
        body = '<article class="pd soonpane"><h2>Projects coming soon</h2><p>Projects for this field are on the way.</p><div class="sk" style="max-width:360px;margin:24px auto 0"><b></b><b></b><b></b></div></article>';
      }
      wp.innerHTML = '<div class="wrap workpage"><a class="back" href="index.html#work">← Back to portfolio</a><div class="tabs" role="tablist" aria-label="Fields">' + tabsH + '</div><header class="fhead"><h1 class="ftitle">' + esc(f.label) + "</h1>" +
        (f.tagline ? '<p class="role">' + esc(f.tagline) + "</p>" : "") + '</header><div class="wk"><div class="plist" role="navigation" aria-label="Projects">' + list + "</div>" + body + '</div><p class="meta" style="margin-top:28px">' + esc(C.work.note) + "</p></div>";
      var on = wp.querySelector(".pi.on");
      if (on && on.scrollIntoView) { on.scrollIntoView({ block: "nearest", inline: "center" }); }
    };
    document.addEventListener("keydown", function (e) {
      var s = state(), n = s.f.items.length;
      if (n < 2 || (e.key !== "ArrowLeft" && e.key !== "ArrowRight")) { return; }
      location.hash = s.f.id + "/" + s.f.items[(s.i + (e.key === "ArrowRight" ? 1 : n - 1)) % n].id;
    });
    window.addEventListener("hashchange", show);
    show();
  }

  put("impact", '<div class="wrap">' + head(C.impact.heading) + '<div class="grid">' + C.impact.items.map(function (i) {
    var ring = i.pct ? '<svg class="ring" viewBox="0 0 96 96" aria-hidden="true"><circle class="t" cx="48" cy="48" r="42"/><circle class="f" cx="48" cy="48" r="42" transform="rotate(-90 48 48)" style="--d:' + (i.pct * 2.64) + '"/></svg>' : "";
    return '<div class="card imp reveal">' + ring + "<div><b>" + esc(i.value) + "</b><span>" + esc(i.label) + "</span></div></div>";
  }).join("") + "</div></div>");

  put("focus", '<div class="wrap">' + head(C.focus.heading) + '<div class="grid">' + C.focus.items.map(function (i) {
    return '<div class="card focus reveal"><div class="ico"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + IC[i.icon] + "</svg></div><h3>" + esc(i.title) + "</h3><p>" + esc(i.text) + "</p></div>";
  }).join("") + "</div></div>");

  put("process", '<div class="wrap">' + head(C.process.heading) + '<div class="steps">' + C.process.steps.map(function (s, n) {
    return '<div class="step reveal"><i>' + (n + 1) + "</i><h3>" + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></div>";
  }).join("") + "</div></div>");

  put("path", '<div class="wrap">' + head(C.path.heading) + '<div class="two">' + C.path.groups.map(function (g) {
    return '<div class="pg reveal"><h3>' + esc(g.label) + '</h3><ul class="clist">' + g.items.map(function (i) {
      return "<li><strong>" + esc(i.role) + '</strong><br><span class="meta">' + esc(i.org) + " · " + esc(i.period) + "</span><br>" + esc(i.line) + "</li>";
    }).join("") + "</ul></div>";
  }).join("") + "</div></div>");

  put("tools", '<div class="wrap">' + head(C.tools.heading) + '<div class="two">' + C.tools.groups.map(function (g) {
    return '<div class="reveal"><h3 class="meta" style="margin-bottom:8px">' + esc(g.name) + '</h3><div class="chips">' + g.list.map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") + "</div></div>";
  }).join("") + "</div></div>");

  var k = C.contact, links = [];
  if (k.email) { links.push('<a class="btn pri" href="mailto:' + esc(k.email) + '">Email me</a>'); }
  if (k.linkedin) { links.push('<a class="btn" href="' + esc(k.linkedin) + '" target="_blank" rel="noopener noreferrer">LinkedIn</a>'); }
  if (k.github) { links.push('<a class="btn" href="' + esc(k.github) + '" target="_blank" rel="noopener noreferrer">GitHub</a>'); }
  put("contact", '<div class="wrap reveal">' + head(k.heading, k.intro) + '<div class="cta" style="margin:0">' + links.join("") + "</div>" +
    (k.email ? '<p class="meta mono" style="margin-top:18px">' + esc(k.email) + "</p>" : "") + "</div>");
  $("#footer").textContent = "© " + new Date().getFullYear() + " " + p.name + " · " + p.location;

  var root = document.documentElement, tb = $("#theme");
  function setTheme(t) {
    root.setAttribute("data-theme", t);
    tb.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
    try { localStorage.setItem("theme", t); } catch (e) {}
  }
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  setTheme(saved === "light" ? "light" : "dark");
  tb.addEventListener("click", function () { setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark"); });

  var bg = $("#burger"), menu = $("#menu");
  function closeMenu() { menu.classList.remove("open"); bg.setAttribute("aria-expanded", "false"); }
  bg.addEventListener("click", function () { bg.setAttribute("aria-expanded", menu.classList.toggle("open")); });
  menu.addEventListener("click", closeMenu);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeMenu(); } });

  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } });
    }, { threshold: 0.12 });
    [].forEach.call(els, function (e) { io.observe(e); });
  } else {
    [].forEach.call(els, function (e) { e.classList.add("in"); });
  }
})();
