(function () {
  "use strict";

  const STORAGE_KEY = "yalin-degerlendirme:assessments:v1";
  const CURRENT_KEY = "yalin-degerlendirme:current:v1";
  const SCALE_LABELS = {
    0: "Yok / Uygulanmıyor",
    1: "Başlangıç seviyesi",
    2: "Gelişmekte",
    3: "İyi seviyede / Sistematik",
    4: "Mükemmel / Örnek uygulama",
  };

  /* ---------------- utilities ---------------- */
  function uid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return "id-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8);
  }

  function todayISO() {
    return new Date().toISOString().slice(0, 10);
  }

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function round1(n) {
    return Math.round(n * 10) / 10;
  }

  function cssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function showToast(msg) {
    const el = document.getElementById("toast");
    el.textContent = msg;
    el.classList.remove("hidden");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => el.classList.add("hidden"), 2200);
  }

  /* ---------------- data helpers ---------------- */
  const ALL_QUESTIONS = [];
  CATEGORIES.forEach((cat) => {
    cat.questions.forEach((q) => {
      ALL_QUESTIONS.push({ no: q.no, text: q.text, target: q.target, categoryId: cat.id, categoryNo: cat.no });
    });
  });

  function defaultTargets() {
    const t = {};
    ALL_QUESTIONS.forEach((q) => (t[q.no] = q.target));
    return t;
  }

  function blankScores() {
    const s = {};
    ALL_QUESTIONS.forEach((q) => (s[q.no] = null));
    return s;
  }

  function sampleScores() {
    const s = {};
    ALL_QUESTIONS.forEach((q) => (s[q.no] = SAMPLE_SCORES[q.no] != null ? SAMPLE_SCORES[q.no] : null));
    return s;
  }

  function makeAssessment(opts) {
    opts = opts || {};
    const now = Date.now();
    return {
      id: uid(),
      meta: {
        date: opts.date || todayISO(),
        no: opts.no || "",
        assessor: opts.assessor || "",
        plant: opts.plant || "",
      },
      scores: opts.scores || blankScores(),
      targets: opts.targets || defaultTargets(),
      actions: opts.actions || [],
      createdAt: now,
      updatedAt: now,
    };
  }

  /* ---------------- store ---------------- */
  const Store = {
    assessments: [],
    currentId: null,

    load() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        this.assessments = raw ? JSON.parse(raw) : [];
      } catch (e) {
        this.assessments = [];
      }
      this.currentId = localStorage.getItem(CURRENT_KEY) || null;

      if (this.assessments.length === 0) {
        const seed = makeAssessment({
          date: "2022-06-10",
          no: "Örnek-1",
          assessor: "Tülay Tek",
          plant: "Merkez Fabrika",
          scores: sampleScores(),
        });
        this.assessments.push(seed);
        this.currentId = seed.id;
      }
      if (!this.current()) {
        this.currentId = this.assessments[this.assessments.length - 1].id;
      }
      this.persist();
    },

    persist() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.assessments));
      localStorage.setItem(CURRENT_KEY, this.currentId);
    },

    current() {
      return this.assessments.find((a) => a.id === this.currentId) || null;
    },

    touch(a) {
      a.updatedAt = Date.now();
      this.persist();
    },

    add(a) {
      this.assessments.push(a);
      this.currentId = a.id;
      this.persist();
    },

    remove(id) {
      this.assessments = this.assessments.filter((a) => a.id !== id);
      if (this.assessments.length === 0) {
        const fresh = makeAssessment({});
        this.assessments.push(fresh);
      }
      if (this.currentId === id) {
        this.currentId = this.assessments[this.assessments.length - 1].id;
      }
      this.persist();
    },

    sorted() {
      return [...this.assessments].sort((a, b) => b.updatedAt - a.updatedAt);
    },
  };

  /* ---------------- computations ---------------- */
  function avg(values) {
    const v = values.filter((x) => x != null);
    if (v.length === 0) return null;
    return v.reduce((a, b) => a + b, 0) / v.length;
  }

  function categoryStats(assessment, cat) {
    const scoreVals = cat.questions.map((q) => assessment.scores[q.no]);
    const targetVals = cat.questions.map((q) => assessment.targets[q.no]);
    const scoreAvg = avg(scoreVals);
    const targetAvg = avg(targetVals);
    const answered = scoreVals.filter((x) => x != null).length;
    return {
      scoreAvg,
      targetAvg,
      gap: scoreAvg != null ? targetAvg - scoreAvg : null,
      answered,
      total: cat.questions.length,
    };
  }

  function factoryStats(assessment) {
    const perCat = CATEGORIES.map((c) => categoryStats(assessment, c));
    const scoreAvg = avg(perCat.map((c) => c.scoreAvg));
    const targetAvg = avg(perCat.map((c) => c.targetAvg));
    const totalAnswered = perCat.reduce((s, c) => s + c.answered, 0);
    const totalQuestions = perCat.reduce((s, c) => s + c.total, 0);
    return { scoreAvg, targetAvg, totalAnswered, totalQuestions, perCat };
  }

  function gapBadgeClass(gap) {
    if (gap == null) return "pill-warn";
    if (gap <= 0) return "pill-good";
    if (gap <= 1) return "pill-warn";
    return "pill-bad";
  }

  function actionStatus(action) {
    if (action.doneDate) return { label: "Tamamlandı", cls: "status-done" };
    if (action.targetDate && action.targetDate < todayISO()) return { label: "Gecikti", cls: "status-late" };
    return { label: "Açık", cls: "status-open" };
  }

  /* ---------------- rendering ---------------- */
  let activeView = "ozet";
  let activeCategoryId = CATEGORIES[0].id;

  function renderAll() {
    const a = Store.current();
    renderAssessmentSelect();
    renderMetaBar(a);
    renderSidebar(a);
    renderSummary(a);
    renderCategoryPanels(a);
    renderActionTable(a);
    renderRadar(a);
  }

  function renderAssessmentSelect() {
    const sel = document.getElementById("assessmentSelect");
    sel.innerHTML = "";
    Store.sorted().forEach((a) => {
      const opt = document.createElement("option");
      opt.value = a.id;
      const label = `${a.meta.no || "(no'suz)"} — ${a.meta.date || ""}${a.meta.assessor ? " · " + a.meta.assessor : ""}`;
      opt.textContent = label;
      if (a.id === Store.currentId) opt.selected = true;
      sel.appendChild(opt);
    });
  }

  function renderMetaBar(a) {
    document.getElementById("metaDate").value = a.meta.date || "";
    document.getElementById("metaNo").value = a.meta.no || "";
    document.getElementById("metaAssessor").value = a.meta.assessor || "";
    document.getElementById("metaPlant").value = a.meta.plant || "";
  }

  function renderSidebar(a) {
    const wrap = document.getElementById("categoryList");
    wrap.innerHTML = "";
    const fs = factoryStats(a);
    CATEGORIES.forEach((cat, idx) => {
      const stats = fs.perCat[idx];
      const item = document.createElement("div");
      item.className = "category-item" + (cat.id === activeCategoryId && activeView === "degerlendirme" ? " active" : "");
      item.dataset.catId = cat.id;
      const badgeColor =
        stats.scoreAvg == null ? cssVar("--text-dim") : stats.gap <= 0 ? cssVar("--success") : stats.gap <= 1 ? cssVar("--warn") : cssVar("--danger");
      item.innerHTML = `
        <div class="category-badge" style="background:${badgeColor}">${cat.no}</div>
        <div class="category-item-text">
          <span class="category-item-title">${cat.title}</span>
          <span class="category-item-score">${stats.scoreAvg != null ? round1(stats.scoreAvg) : "-"} / ${round1(stats.targetAvg)} · ${stats.answered}/${stats.total}</span>
        </div>`;
      item.addEventListener("click", () => {
        activeCategoryId = cat.id;
        switchView("degerlendirme");
        scrollToCategory(cat.id);
      });
      wrap.appendChild(item);
    });
  }

  function scrollToCategory(catId) {
    requestAnimationFrame(() => {
      const el = document.getElementById("panel-" + catId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      renderSidebarActiveOnly(catId);
    });
  }

  function renderSidebarActiveOnly(catId) {
    document.querySelectorAll(".category-item").forEach((el) => {
      el.classList.toggle("active", el.dataset.catId === catId);
    });
  }

  function renderSummary(a) {
    const fs = factoryStats(a);
    document.getElementById("factoryScore").textContent = fs.scoreAvg != null ? round1(fs.scoreAvg) : "-";
    document.getElementById("factoryTarget").textContent = round1(fs.targetAvg);
    const pct = fs.scoreAvg != null ? Math.min(100, (fs.scoreAvg / 4) * 100) : 0;
    document.getElementById("factoryBar").style.width = pct + "%";

    const completionPct = fs.totalQuestions ? Math.round((fs.totalAnswered / fs.totalQuestions) * 100) : 0;
    document.getElementById("completionValue").textContent = completionPct + "%";
    document.getElementById("completionCount").textContent = `${fs.totalAnswered} / ${fs.totalQuestions}`;

    let topGap = null;
    let topGapCat = null;
    fs.perCat.forEach((s, idx) => {
      if (s.gap != null && (topGap == null || s.gap > topGap)) {
        topGap = s.gap;
        topGapCat = CATEGORIES[idx];
      }
    });
    document.getElementById("topGapValue").textContent = topGap != null ? "+" + round1(topGap) : "-";
    document.getElementById("topGapLabel").textContent = topGapCat ? topGapCat.title : "Veri yok";

    const openActions = a.actions.filter((act) => actionStatus(act).label !== "Tamamlandı");
    document.getElementById("openActionsValue").textContent = openActions.length;
    document.getElementById("openActionsLabel").textContent = a.actions.length
      ? `${openActions.length} açık / ${a.actions.length} toplam`
      : "Aksiyon planı boş";

    const tbody = document.querySelector("#summaryTable tbody");
    tbody.innerHTML = "";
    CATEGORIES.forEach((cat, idx) => {
      const s = fs.perCat[idx];
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${cat.no}</td>
        <td><a class="row-link" data-cat-id="${cat.id}">${cat.title}</a></td>
        <td>${s.scoreAvg != null ? round1(s.scoreAvg) : "-"}</td>
        <td>${round1(s.targetAvg)}</td>
        <td>${s.gap != null ? '<span class="pill ' + gapBadgeClass(s.gap) + '">' + (s.gap > 0 ? "+" : "") + round1(s.gap) + "</span>" : "-"}</td>
        <td>${s.answered}/${s.total}</td>`;
      tr.querySelector(".row-link").addEventListener("click", () => {
        activeCategoryId = cat.id;
        switchView("degerlendirme");
        scrollToCategory(cat.id);
      });
      tbody.appendChild(tr);
    });
  }

  function renderCategoryPanels(a) {
    const wrap = document.getElementById("categoryPanels");
    wrap.innerHTML = "";
    CATEGORIES.forEach((cat) => {
      const stats = categoryStats(a, cat);
      const panel = document.createElement("div");
      panel.className = "category-panel";
      panel.id = "panel-" + cat.id;

      const head = document.createElement("div");
      head.className = "category-panel-head";
      head.innerHTML = `
        <div>
          <div class="category-panel-title">
            <h2>${cat.no}. ${cat.title}</h2>
            ${cat.altTitle ? '<span class="category-panel-alt">' + cat.altTitle + "</span>" : ""}
          </div>
          <div class="category-panel-people">${cat.people ? "Değerlendirmede yer alacak kişiler: " + cat.people : ""}</div>
        </div>
        <div class="category-panel-score">
          <span>${stats.scoreAvg != null ? round1(stats.scoreAvg) : "-"} / ${round1(stats.targetAvg)}</span>
          ${stats.gap != null ? '<span class="pill ' + gapBadgeClass(stats.gap) + '">' + (stats.gap > 0 ? "+" : "") + round1(stats.gap) + " fark</span>" : ""}
        </div>`;
      panel.appendChild(head);

      const list = document.createElement("div");
      list.className = "question-list";
      cat.questions.forEach((q) => {
        list.appendChild(buildQuestionRow(a, q));
      });
      panel.appendChild(list);

      const legend = document.createElement("div");
      legend.className = "scale-legend";
      legend.innerHTML = Object.entries(SCALE_LABELS)
        .map(([k, v]) => `<span><b>${k}</b> · ${v}</span>`)
        .join("");
      panel.appendChild(legend);

      wrap.appendChild(panel);
    });
  }

  function buildQuestionRow(a, q) {
    const row = document.createElement("div");
    row.className = "question-row";
    const currentScore = a.scores[q.no];
    const currentTarget = a.targets[q.no];
    const gap = currentScore != null ? currentTarget - currentScore : null;

    row.innerHTML = `
      <div class="question-no">${q.no}</div>
      <div class="question-text">${q.text}</div>
      <div class="question-controls">
        <div class="score-selector" data-qno="${q.no}">
          ${[0, 1, 2, 3, 4]
            .map(
              (n) =>
                `<button type="button" class="score-btn${currentScore === n ? " active" : ""}" data-val="${n}" title="${SCALE_LABELS[n]}">${n}</button>`
            )
            .join("")}
        </div>
        <div class="target-field">
          Hedef
          <input type="number" min="0" max="4" step="1" value="${currentTarget}" data-target-qno="${q.no}" />
        </div>
        <span class="gap-tag ${gap != null ? gapBadgeClass(gap) : ""}" data-gap-qno="${q.no}">
          ${gap != null ? (gap > 0 ? "+" + gap + " açık" : gap === 0 ? "hedefte" : gap + " üzerinde") : "beklemede"}
        </span>
      </div>`;

    row.querySelectorAll(".score-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const val = Number(btn.dataset.val);
        const assessment = Store.current();
        assessment.scores[q.no] = assessment.scores[q.no] === val ? null : val;
        Store.touch(assessment);
        renderAll();
        scrollToCategory(q.categoryId);
      });
    });

    row.querySelector("[data-target-qno]").addEventListener("change", (e) => {
      let val = Number(e.target.value);
      if (Number.isNaN(val)) val = 0;
      val = Math.max(0, Math.min(4, val));
      e.target.value = val;
      const assessment = Store.current();
      assessment.targets[q.no] = val;
      Store.touch(assessment);
      renderAll();
      scrollToCategory(q.categoryId);
    });

    return row;
  }

  function renderActionTable(a) {
    const tbody = document.getElementById("actionTableBody");
    tbody.innerHTML = "";
    if (a.actions.length === 0) {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td colspan="7" class="empty-state">Henüz aksiyon eklenmedi. "+ Aksiyon Ekle" ile başlayın.</td>`;
      tbody.appendChild(tr);
      return;
    }
    a.actions.forEach((act) => {
      const tr = document.createElement("tr");
      const status = actionStatus(act);
      const catOptions = CATEGORIES.map(
        (c) => `<option value="${c.no}" ${String(act.categoryNo) === String(c.no) ? "selected" : ""}>${c.no}. ${c.title}</option>`
      ).join("");
      tr.innerHTML = `
        <td><select data-field="categoryNo" data-id="${act.id}"><option value="">—</option>${catOptions}</select></td>
        <td><textarea data-field="text" data-id="${act.id}" rows="2" placeholder="Aksiyon açıklaması">${act.text || ""}</textarea></td>
        <td><input type="text" data-field="owner" data-id="${act.id}" value="${act.owner || ""}" placeholder="Sorumlu" /></td>
        <td><input type="date" data-field="targetDate" data-id="${act.id}" value="${act.targetDate || ""}" /></td>
        <td><input type="date" data-field="doneDate" data-id="${act.id}" value="${act.doneDate || ""}" /></td>
        <td><span class="pill ${status.cls === "status-done" ? "pill-good" : status.cls === "status-late" ? "pill-bad" : "pill-warn"}">${status.label}</span></td>
        <td><button class="icon-btn" data-remove="${act.id}" title="Sil">✕</button></td>`;
      tbody.appendChild(tr);
    });

    tbody.querySelectorAll("[data-field]").forEach((el) => {
      el.addEventListener("change", (e) => {
        const id = e.target.dataset.id;
        const field = e.target.dataset.field;
        const assessment = Store.current();
        const act = assessment.actions.find((x) => x.id === id);
        if (!act) return;
        act[field] = e.target.value;
        Store.touch(assessment);
        renderActionTable(assessment);
        renderSummary(assessment);
      });
    });
    tbody.querySelectorAll("[data-remove]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const assessment = Store.current();
        assessment.actions = assessment.actions.filter((x) => x.id !== btn.dataset.remove);
        Store.touch(assessment);
        renderActionTable(assessment);
        renderSummary(assessment);
      });
    });
  }

  /* ---------------- radar chart ---------------- */
  function renderRadar(a) {
    const canvas = document.getElementById("radarCanvas");
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const size = canvas.clientWidth || 640;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, size, size);

    const center = size / 2;
    const radius = size / 2 - 46;
    const n = CATEGORIES.length;
    const maxVal = 4;
    const fs = factoryStats(a);

    const gridColor = cssVar("--border") || "#ddd";
    const textColor = cssVar("--text-dim") || "#666";
    const primary = cssVar("--primary") || "#2f6fed";
    const warn = cssVar("--warn") || "#e0a72e";

    function pointFor(i, value) {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
      const r = (value / maxVal) * radius;
      return [center + r * Math.cos(angle), center + r * Math.sin(angle)];
    }

    // grid rings
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    for (let ring = 1; ring <= maxVal; ring++) {
      ctx.beginPath();
      for (let i = 0; i <= n; i++) {
        const [x, y] = pointFor(i % n, ring);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // axes + labels
    ctx.fillStyle = textColor;
    ctx.font = "11px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for (let i = 0; i < n; i++) {
      const [x, y] = pointFor(i, maxVal);
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.lineTo(x, y);
      ctx.stroke();
      const [lx, ly] = pointFor(i, maxVal + 0.55);
      ctx.fillText(String(CATEGORIES[i].no), lx, ly);
    }

    function drawPolygon(values, color, fillAlpha, dashed) {
      ctx.beginPath();
      values.forEach((v, i) => {
        const val = v == null ? 0 : v;
        const [x, y] = pointFor(i, val);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.closePath();
      if (dashed) ctx.setLineDash([4, 3]);
      else ctx.setLineDash([]);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();
      if (fillAlpha > 0) {
        ctx.fillStyle = color;
        ctx.globalAlpha = fillAlpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      ctx.setLineDash([]);
    }

    drawPolygon(
      fs.perCat.map((c) => c.targetAvg),
      warn,
      0,
      true
    );
    drawPolygon(
      fs.perCat.map((c) => c.scoreAvg),
      primary,
      0.18,
      false
    );
  }

  /* ---------------- view switching ---------------- */
  function switchView(view) {
    activeView = view;
    document.querySelectorAll(".view-btn").forEach((b) => b.classList.toggle("active", b.dataset.view === view));
    document.querySelectorAll(".view").forEach((v) => v.classList.toggle("active", v.id === "view-" + view));
    if (view === "ozet") renderRadar(Store.current());
    renderSidebarActiveOnly(view === "degerlendirme" ? activeCategoryId : "__none__");
  }

  /* ---------------- export / import ---------------- */
  function exportXlsx() {
    const a = Store.current();
    const fs = factoryStats(a);
    const wb = XLSX.utils.book_new();

    const summaryRows = [
      ["Yalın Değerlendirme"],
      ["Değerlendirme Tarihi", a.meta.date],
      ["Değerlendirme No", a.meta.no],
      ["Değerlendiren", a.meta.assessor],
      ["Fabrika / Birim", a.meta.plant],
      [],
      ["No", "Konu Başlığı", "Gerçekleşen", "Hedef", "Fark", "Cevaplanan/Toplam"],
    ];
    CATEGORIES.forEach((cat, idx) => {
      const s = fs.perCat[idx];
      summaryRows.push([
        cat.no,
        cat.title,
        s.scoreAvg != null ? round1(s.scoreAvg) : "",
        round1(s.targetAvg),
        s.gap != null ? round1(s.gap) : "",
        `${s.answered}/${s.total}`,
      ]);
    });
    summaryRows.push([]);
    summaryRows.push(["FABRİKA PUANI", "", fs.scoreAvg != null ? round1(fs.scoreAvg) : "", round1(fs.targetAvg)]);
    const summaryWs = XLSX.utils.aoa_to_sheet(summaryRows);
    XLSX.utils.book_append_sheet(wb, summaryWs, "Özet");

    CATEGORIES.forEach((cat) => {
      const rows = [["No", "Soru", "Puan", "Hedef"]];
      cat.questions.forEach((q) => {
        rows.push([q.no, q.text, a.scores[q.no], a.targets[q.no]]);
      });
      const ws = XLSX.utils.aoa_to_sheet(rows);
      ws["!cols"] = [{ wch: 8 }, { wch: 90 }, { wch: 8 }, { wch: 8 }];
      const sheetName = cat.title.slice(0, 31);
      XLSX.utils.book_append_sheet(wb, ws, sheetName);
    });

    const actionRows = [["Konu No", "Aksiyon", "Sorumlu", "Hedef Tarih", "Gerçekleşen Tarih", "Durum"]];
    a.actions.forEach((act) => {
      actionRows.push([act.categoryNo || "", act.text || "", act.owner || "", act.targetDate || "", act.doneDate || "", actionStatus(act).label]);
    });
    const actionWs = XLSX.utils.aoa_to_sheet(actionRows);
    XLSX.utils.book_append_sheet(wb, actionWs, "Aksiyon Planı");

    const filenameSafe = (a.meta.no || "degerlendirme").replace(/[^a-zA-Z0-9-_]+/g, "_");
    XLSX.writeFile(wb, `Yalin_Degerlendirme_${filenameSafe}.xlsx`);
    showToast("Excel dosyası indirildi");
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(Store.assessments, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "yalin-degerlendirme-yedek.json";
    link.click();
    URL.revokeObjectURL(url);
    showToast("Yedek indirildi");
  }

  function importJson(file) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        if (!Array.isArray(parsed)) throw new Error("Geçersiz yedek dosyası");
        parsed.forEach((incoming) => {
          const idx = Store.assessments.findIndex((x) => x.id === incoming.id);
          if (idx >= 0) Store.assessments[idx] = incoming;
          else Store.assessments.push(incoming);
        });
        if (parsed.length) Store.currentId = parsed[0].id;
        Store.persist();
        renderAll();
        showToast("Yedek yüklendi");
      } catch (e) {
        showToast("Yedek okunamadı: " + e.message);
      }
    };
    reader.readAsText(file);
  }

  /* ---------------- events ---------------- */
  function bindEvents() {
    document.querySelectorAll(".view-btn").forEach((btn) => {
      btn.addEventListener("click", () => switchView(btn.dataset.view));
    });

    ["metaDate", "metaNo", "metaAssessor", "metaPlant"].forEach((id) => {
      document.getElementById(id).addEventListener("input", (e) => {
        const a = Store.current();
        const field = id.replace("meta", "").toLowerCase();
        a.meta[field] = e.target.value;
        Store.touch(a);
        renderAssessmentSelect();
      });
    });

    document.getElementById("assessmentSelect").addEventListener("change", (e) => {
      Store.currentId = e.target.value;
      Store.persist();
      renderAll();
    });

    document.getElementById("btnNew").addEventListener("click", () => {
      const a = makeAssessment({ no: "Değ-" + (Store.assessments.length + 1), date: todayISO() });
      Store.add(a);
      renderAll();
      showToast("Yeni değerlendirme oluşturuldu");
    });

    const menuBtn = document.getElementById("btnMenu");
    const menuDropdown = document.getElementById("menuDropdown");
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      menuDropdown.classList.toggle("hidden");
    });
    document.addEventListener("click", () => menuDropdown.classList.add("hidden"));
    menuDropdown.addEventListener("click", (e) => e.stopPropagation());

    document.getElementById("btnLoadSample").addEventListener("click", () => {
      const a = makeAssessment({
        date: "2022-06-10",
        no: "Örnek-" + (Store.assessments.length + 1),
        assessor: "Tülay Tek",
        plant: "Merkez Fabrika",
        scores: sampleScores(),
      });
      Store.add(a);
      renderAll();
      menuDropdown.classList.add("hidden");
      showToast("Örnek veri yeni bir değerlendirme olarak eklendi");
    });

    document.getElementById("btnDuplicate").addEventListener("click", () => {
      const src = Store.current();
      const copy = clone(src);
      copy.id = uid();
      copy.meta.no = (src.meta.no || "Değerlendirme") + " (kopya)";
      copy.createdAt = Date.now();
      copy.updatedAt = Date.now();
      Store.add(copy);
      renderAll();
      menuDropdown.classList.add("hidden");
      showToast("Değerlendirme çoğaltıldı");
    });

    document.getElementById("btnExportXlsx").addEventListener("click", () => {
      exportXlsx();
      menuDropdown.classList.add("hidden");
    });
    document.getElementById("btnExportJson").addEventListener("click", () => {
      exportJson();
      menuDropdown.classList.add("hidden");
    });
    document.getElementById("fileImportJson").addEventListener("change", (e) => {
      if (e.target.files[0]) importJson(e.target.files[0]);
      menuDropdown.classList.add("hidden");
      e.target.value = "";
    });
    document.getElementById("btnPrint").addEventListener("click", () => {
      menuDropdown.classList.add("hidden");
      window.print();
    });
    document.getElementById("btnDelete").addEventListener("click", () => {
      if (Store.assessments.length <= 1) {
        showToast("Son değerlendirme silinemez");
        menuDropdown.classList.add("hidden");
        return;
      }
      if (confirm("Bu değerlendirmeyi silmek istediğinize emin misiniz?")) {
        Store.remove(Store.currentId);
        renderAll();
        showToast("Değerlendirme silindi");
      }
      menuDropdown.classList.add("hidden");
    });

    document.getElementById("btnAddAction").addEventListener("click", () => {
      const a = Store.current();
      a.actions.push({ id: uid(), categoryNo: "", text: "", owner: "", targetDate: "", doneDate: "" });
      Store.touch(a);
      renderActionTable(a);
      renderSummary(a);
    });

    window.addEventListener("resize", () => renderRadar(Store.current()));
  }

  /* ---------------- init ---------------- */
  Store.load();
  bindEvents();
  renderAll();
})();
