/* ipfyi-embed v1.0.0 | MIT | https://widget.ipfyi.com */

// src/styles/modern.ts
function getModernCSS() {
  return `
/* Modern: gradient accent header */
.networkfyi-header {
  background: linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 70%, #000));
  border-radius: 12px 12px 0 0;
  padding: 16px 20px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.networkfyi-header-title {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.networkfyi-header-subtitle {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

/* Icon area */
.networkfyi-img {
  width: 56px;
  height: 56px;
  border-radius: 8px;
  object-fit: cover;
  background: rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 24px;
  color: #fff;
  font-weight: 700;
}

.networkfyi-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* Body area */
.networkfyi-body {
  padding: 16px 20px;
}

/* Key-value rows \u2014 spacious */
.networkfyi-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.networkfyi-row:last-child {
  border-bottom: none;
}

.networkfyi-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--muted);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 30%;
}

.networkfyi-value {
  font-size: 13px;
  color: var(--text);
  text-align: right;
  word-break: break-word;
}

/* Section title */
.networkfyi-section-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 10px 0;
}

/* Tags \u2014 colored rounded badges */
.networkfyi-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--accent) 12%, transparent);
  color: var(--accent);
  margin: 2px 3px 2px 0;
  letter-spacing: 0.02em;
}

/* Link */
.networkfyi-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.networkfyi-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.networkfyi-link svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

/* Footer link row */
.networkfyi-footer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-top: 1px solid var(--border);
  gap: 8px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Card shared: stats row (horizontal flex)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.networkfyi-stats-row { display:flex; gap:12px; padding:10px 18px; border-bottom:1px solid var(--border); }
.networkfyi-stat { text-align:center; flex:1; }
.networkfyi-stat-value { font-size:18px; font-weight:700; color:var(--accent); }
.networkfyi-stat-label { font-size:9px; color:var(--muted); text-transform:uppercase; letter-spacing:0.03em; }

/* Card shared: stats grid (2x2 boxes) */
.networkfyi-stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; padding:10px 18px; border-bottom:1px solid var(--border); }
.networkfyi-stat-box { padding:6px 8px; background:color-mix(in srgb, var(--accent) 8%, var(--bg)); border-radius:8px; }
.networkfyi-stat-box-label { font-size:9px; color:color-mix(in srgb, var(--accent) 80%, var(--text)); text-transform:uppercase; }
.networkfyi-stat-box-value { font-size:13px; font-weight:700; color:var(--text); margin-top:1px; }

/* Card shared: key-value dotted rows */
.networkfyi-kv-rows { padding:10px 18px; border-bottom:1px solid var(--border); }
.networkfyi-kv-row { display:flex; justify-content:space-between; align-items:baseline; padding:4px 0; border-bottom:1px dotted var(--border); }
.networkfyi-kv-row:last-child { border-bottom:none; }
.networkfyi-kv-label { font-size:11px; color:var(--muted); }
.networkfyi-kv-value { font-size:11px; font-weight:600; color:var(--text); }

/* Card shared: pill tags */
.networkfyi-pills { display:flex; flex-wrap:wrap; gap:4px; padding:10px 18px; border-bottom:1px solid var(--border); }
.networkfyi-pill { padding:2px 8px; border-radius:10px; font-size:11px; font-weight:500; background:color-mix(in srgb, var(--accent) 10%, var(--bg)); color:var(--accent); }

/* Card shared: section label */
.networkfyi-section-label { font-size:10px; text-transform:uppercase; letter-spacing:0.05em; color:var(--accent); font-weight:600; margin-bottom:3px; }

/* Card shared: description */
.networkfyi-desc { padding:10px 18px; font-size:14px; color:var(--muted); line-height:1.5; border-bottom:1px solid var(--border); }

/* Card shared: view link */
.networkfyi-view-link { display:block; text-align:center; padding:10px 18px; border-bottom:1px solid var(--border); }
.networkfyi-view-link a { color:var(--link); text-decoration:none; font-size:12px; font-weight:500; display:inline-flex; align-items:center; gap:4px; }
.networkfyi-view-link a:hover { text-decoration:underline; }
.networkfyi-view-link svg { width:12px; height:12px; }

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Domain: code/status display (large number)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.networkfyi-code-display { padding:14px 18px; text-align:center; border-bottom:1px solid var(--border); }
.networkfyi-code-big { font-size:36px; font-weight:800; color:var(--accent); line-height:1; font-family:ui-monospace, 'SF Mono', monospace; }
.networkfyi-code-name { font-size:13px; color:var(--text); font-weight:600; margin-top:4px; }
.networkfyi-code-protocol { font-size:11px; color:var(--muted); margin-top:2px; }

/* Domain: speed bar visualization */
.networkfyi-speed-bar-wrap { padding:10px 18px; border-bottom:1px solid var(--border); }
.networkfyi-speed-bar-track { width:100%; height:8px; background:var(--surface); border-radius:4px; overflow:hidden; }
.networkfyi-speed-bar-fill { height:100%; border-radius:4px; transition:width 0.3s; }
.networkfyi-speed-bar-label { font-size:11px; color:var(--muted); margin-top:4px; display:flex; justify-content:space-between; }

/* Domain: connector arrow display */
.networkfyi-connector-arrow { display:flex; align-items:center; justify-content:center; gap:8px; padding:12px 18px; border-bottom:1px solid var(--border); font-size:13px; font-weight:600; color:var(--text); }
.networkfyi-connector-arrow-icon { color:var(--accent); font-size:16px; }

/* Domain: compatibility result */
.networkfyi-compat-result { padding:14px 18px; text-align:center; border-bottom:1px solid var(--border); }
.networkfyi-compat-status { font-size:14px; font-weight:700; margin-bottom:4px; }
.networkfyi-compat-detail { font-size:12px; color:var(--muted); }

/* Domain: scenario card */
.networkfyi-scenario-header { padding:12px 18px; border-bottom:1px solid var(--border); }
.networkfyi-scenario-title { font-size:14px; font-weight:700; color:var(--text); margin:0 0 6px 0; }
.networkfyi-scenario-meta { display:flex; gap:6px; align-items:center; flex-wrap:wrap; }

/* Domain: form inputs (compatibility tool) */
.networkfyi-tool-form { padding:12px 18px; border-bottom:1px solid var(--border); }
.networkfyi-tool-row { display:flex; gap:6px; align-items:center; margin-bottom:6px; }
.networkfyi-tool-row:last-child { margin-bottom:0; }
.networkfyi-tool-input { flex:1; padding:6px 10px; border:1px solid var(--input-border); border-radius:6px; background:var(--input-bg); color:var(--text); font-size:13px; font-family:inherit; outline:none; }
.networkfyi-tool-input:focus { border-color:var(--input-focus); box-shadow:0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent); }
.networkfyi-tool-label { font-size:11px; color:var(--muted); min-width:72px; }
.networkfyi-tool-btn { background:var(--accent); color:#fff; border:none; border-radius:6px; padding:7px 14px; font-size:13px; font-weight:500; cursor:pointer; font-family:inherit; transition:opacity 0.15s; }
.networkfyi-tool-btn:hover { opacity:0.9; }

/* Inline widget host */
:host([data-inline]) {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
  `;
}

// src/styles/clean.ts
function getCleanCSS() {
  return `
/* Clean: subtle top accent border instead of gradient header */
.networkfyi-header {
  border-top: 3px solid var(--accent);
  border-radius: 8px 8px 0 0;
  padding: 14px 18px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: color-mix(in srgb, var(--accent) 5%, var(--surface));
}

.networkfyi-header-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.networkfyi-header-subtitle {
  font-size: 12px;
  color: var(--muted);
  margin: 0;
}

/* Icon area \u2014 smaller, muted */
.networkfyi-img {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: color-mix(in srgb, var(--accent) 12%, var(--bg));
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 20px;
  color: var(--accent);
  font-weight: 700;
}

.networkfyi-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* Body area */
.networkfyi-body {
  padding: 14px 18px;
}

/* Key-value rows */
.networkfyi-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding: 6px 0;
  border-bottom: 1px solid var(--border);
}

.networkfyi-row:last-child {
  border-bottom: none;
}

.networkfyi-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--muted);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 30%;
}

.networkfyi-value {
  font-size: 13px;
  color: var(--text);
  text-align: right;
  word-break: break-word;
}

/* Section title */
.networkfyi-section-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 8px 0;
}

/* Tags \u2014 subtle pill badges */
.networkfyi-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 4px;
  background: var(--badge-bg);
  color: var(--badge-text);
  margin: 2px 3px 2px 0;
}

/* Link */
.networkfyi-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.networkfyi-link:hover {
  text-decoration: underline;
}

.networkfyi-link svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

/* Footer link row */
.networkfyi-footer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 18px;
  border-top: 1px solid var(--border);
  gap: 8px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Card shared: stats row (horizontal flex)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.networkfyi-stats-row { display:flex; gap:10px; padding:8px 16px; border-bottom:1px solid var(--border); }
.networkfyi-stat { text-align:center; flex:1; }
.networkfyi-stat-value { font-size:16px; font-weight:700; color:var(--accent); }
.networkfyi-stat-label { font-size:9px; color:var(--muted); text-transform:uppercase; letter-spacing:0.03em; }

/* Card shared: stats grid (2x2 boxes) */
.networkfyi-stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:6px; padding:8px 16px; border-bottom:1px solid var(--border); }
.networkfyi-stat-box { padding:5px 7px; background:var(--surface); border-radius:6px; }
.networkfyi-stat-box-label { font-size:9px; color:var(--muted); text-transform:uppercase; }
.networkfyi-stat-box-value { font-size:12px; font-weight:700; color:var(--text); margin-top:1px; }

/* Card shared: key-value dotted rows */
.networkfyi-kv-rows { padding:8px 16px; border-bottom:1px solid var(--border); }
.networkfyi-kv-row { display:flex; justify-content:space-between; align-items:baseline; padding:3px 0; border-bottom:1px dotted var(--border); }
.networkfyi-kv-row:last-child { border-bottom:none; }
.networkfyi-kv-label { font-size:11px; color:var(--muted); }
.networkfyi-kv-value { font-size:11px; font-weight:600; color:var(--text); }

/* Card shared: pill tags */
.networkfyi-pills { display:flex; flex-wrap:wrap; gap:4px; padding:8px 16px; border-bottom:1px solid var(--border); }
.networkfyi-pill { padding:2px 7px; border-radius:4px; font-size:11px; font-weight:500; background:var(--badge-bg); color:var(--badge-text); }

/* Card shared: section label */
.networkfyi-section-label { font-size:10px; text-transform:uppercase; letter-spacing:0.05em; color:var(--accent); font-weight:600; margin-bottom:3px; }

/* Card shared: description */
.networkfyi-desc { padding:8px 16px; font-size:13px; color:var(--muted); line-height:1.5; border-bottom:1px solid var(--border); }

/* Card shared: view link */
.networkfyi-view-link { display:block; text-align:center; padding:8px 16px; border-bottom:1px solid var(--border); }
.networkfyi-view-link a { color:var(--link); text-decoration:none; font-size:12px; font-weight:500; display:inline-flex; align-items:center; gap:4px; }
.networkfyi-view-link a:hover { text-decoration:underline; }
.networkfyi-view-link svg { width:12px; height:12px; }

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Domain: code/status display (large number)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.networkfyi-code-display { padding:12px 16px; text-align:center; border-bottom:1px solid var(--border); }
.networkfyi-code-big { font-size:28px; font-weight:700; color:var(--accent); line-height:1; font-family:ui-monospace, 'SF Mono', monospace; }
.networkfyi-code-name { font-size:12px; color:var(--text); font-weight:600; margin-top:3px; }
.networkfyi-code-protocol { font-size:10px; color:var(--muted); margin-top:2px; }

/* Domain: speed bar visualization */
.networkfyi-speed-bar-wrap { padding:8px 16px; border-bottom:1px solid var(--border); }
.networkfyi-speed-bar-track { width:100%; height:6px; background:var(--surface); border-radius:3px; overflow:hidden; }
.networkfyi-speed-bar-fill { height:100%; border-radius:3px; transition:width 0.3s; }
.networkfyi-speed-bar-label { font-size:10px; color:var(--muted); margin-top:3px; display:flex; justify-content:space-between; }

/* Domain: connector arrow display */
.networkfyi-connector-arrow { display:flex; align-items:center; justify-content:center; gap:6px; padding:10px 16px; border-bottom:1px solid var(--border); font-size:12px; font-weight:600; color:var(--text); }
.networkfyi-connector-arrow-icon { color:var(--accent); font-size:14px; }

/* Domain: compatibility result */
.networkfyi-compat-result { padding:12px 16px; text-align:center; border-bottom:1px solid var(--border); }
.networkfyi-compat-status { font-size:13px; font-weight:700; margin-bottom:3px; }
.networkfyi-compat-detail { font-size:11px; color:var(--muted); }

/* Domain: scenario card */
.networkfyi-scenario-header { padding:10px 16px; border-bottom:1px solid var(--border); }
.networkfyi-scenario-title { font-size:13px; font-weight:700; color:var(--text); margin:0 0 5px 0; }
.networkfyi-scenario-meta { display:flex; gap:5px; align-items:center; flex-wrap:wrap; }

/* Domain: form inputs (compatibility tool) */
.networkfyi-tool-form { padding:10px 16px; border-bottom:1px solid var(--border); }
.networkfyi-tool-row { display:flex; gap:6px; align-items:center; margin-bottom:5px; }
.networkfyi-tool-row:last-child { margin-bottom:0; }
.networkfyi-tool-input { flex:1; padding:5px 8px; border:1px solid var(--input-border); border-radius:4px; background:var(--input-bg); color:var(--text); font-size:12px; font-family:inherit; outline:none; }
.networkfyi-tool-input:focus { border-color:var(--input-focus); box-shadow:0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent); }
.networkfyi-tool-label { font-size:10px; color:var(--muted); min-width:64px; }
.networkfyi-tool-btn { background:var(--accent); color:#fff; border:none; border-radius:4px; padding:6px 12px; font-size:12px; font-weight:500; cursor:pointer; font-family:inherit; transition:opacity 0.15s; }
.networkfyi-tool-btn:hover { opacity:0.9; }

/* Clean: copy button \u2014 minimal style */
.networkfyi-copy-btn {
  background: var(--surface);
  color: var(--muted);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 3px 8px;
  font-size: 11px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  transition: all 0.15s;
  font-family: inherit;
}

.networkfyi-copy-btn:hover {
  background: var(--copy-bg);
  border-color: var(--input-focus);
  color: var(--text);
}

.networkfyi-copy-btn svg {
  width: 10px;
  height: 10px;
}

/* Inline widget host */
:host([data-inline]) {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
  `;
}

// src/themes.ts
function getStyleCSS(style) {
  switch (style) {
    case "clean":
      return getCleanCSS();
    case "modern":
    default:
      return getModernCSS();
  }
}
function getThemeCSS(accent, style = "modern") {
  return `
:host {
  display: block;
  --site-accent: ${accent};
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Size variants
   compact=280px, default=420px, large=720px
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.networkfyi-widget {
  box-sizing: border-box;
  min-width: 240px;
  max-width: 420px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  line-height: 1.6;
  transition: border-color 0.2s;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}

.networkfyi-widget:hover {
  border-color: color-mix(in srgb, var(--accent) 40%, var(--border));
}

.networkfyi-widget[data-size="compact"] {
  max-width: 280px;
  font-size: 13px;
}

.networkfyi-widget[data-size="default"] {
  max-width: 420px;
}

.networkfyi-widget[data-size="large"] {
  max-width: 720px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Light theme (default)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.networkfyi-widget[data-theme="light"] {
  --bg: #fff;
  --text: #1e293b;
  --border: #e2e8f0;
  --accent: var(--site-accent);
  --muted: #64748b;
  --surface: #f8fafc;
  --badge-bg: #f1f5f9;
  --badge-text: #374151;
  --link: var(--site-accent);
  --copy-bg: #f3f4f6;
  --copy-hover: #e5e7eb;
  --input-bg: #ffffff;
  --input-border: #d1d5db;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Dark theme
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.networkfyi-widget[data-theme="dark"] {
  --bg: #1a1a1a;
  --text: #f3f4f6;
  --border: #374151;
  --accent: var(--site-accent);
  --muted: #9ca3af;
  --surface: #111827;
  --badge-bg: #374151;
  --badge-text: #d1d5db;
  --link: color-mix(in srgb, var(--site-accent) 80%, #fff);
  --copy-bg: #374151;
  --copy-hover: #4b5563;
  --input-bg: #111111;
  --input-border: #4b5563;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Sepia theme
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.networkfyi-widget[data-theme="sepia"] {
  --bg: #f5f0e8;
  --text: #3d3529;
  --border: #d4c5a9;
  --accent: var(--site-accent);
  --muted: #8b7d6b;
  --surface: #ede8df;
  --badge-bg: #e8e0d0;
  --badge-text: #5c4f3d;
  --link: color-mix(in srgb, var(--site-accent) 70%, #3d3529);
  --copy-bg: #e8e0d0;
  --copy-hover: #ddd4c0;
  --input-bg: #f5f0e8;
  --input-border: #c4b49a;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(61, 53, 41, 0.12);
}

.networkfyi-widget *, .networkfyi-widget *::before, .networkfyi-widget *::after {
  box-sizing: border-box;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Loading state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.networkfyi-loading {
  padding: 20px 16px;
  text-align: center;
  color: var(--muted);
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.networkfyi-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: networkfyi-spin 0.7s linear infinite;
  display: inline-block;
  flex-shrink: 0;
}

@keyframes networkfyi-spin {
  to { transform: rotate(360deg); }
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Error state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.networkfyi-error {
  padding: 16px;
  color: var(--muted);
  font-size: 13px;
  text-align: center;
}

.networkfyi-error p {
  margin: 0 0 8px 0;
}

.networkfyi-error a {
  color: var(--link);
  text-decoration: none;
}

.networkfyi-error a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Badge (generic)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.networkfyi-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 4px;
  background: var(--badge-bg);
  color: var(--badge-text);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Search inputs
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.networkfyi-search-wrap {
  padding: 12px 16px;
}

.networkfyi-search-form {
  display: flex;
  gap: 8px;
}

.networkfyi-search-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--input-border);
  border-radius: 6px;
  background: var(--input-bg);
  color: var(--text);
  font-size: 13px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s;
}

.networkfyi-search-input:focus {
  border-color: var(--input-focus);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
}

.networkfyi-search-input::placeholder {
  color: var(--muted);
}

.networkfyi-search-btn {
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.15s;
  white-space: nowrap;
}

.networkfyi-search-btn:hover {
  opacity: 0.9;
}

.networkfyi-search-results {
  padding: 0 16px 12px;
}

.networkfyi-result-item {
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.networkfyi-result-item:last-child {
  border-bottom: none;
}

.networkfyi-result-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 3px 0;
}

.networkfyi-result-meta {
  font-size: 11px;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Powered by footer
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.networkfyi-powered {
  display: block;
  text-align: center;
  padding: 8px 16px;
  font-size: 11px;
  color: var(--muted);
  border-top: 1px solid var(--border);
}

.networkfyi-powered a {
  color: var(--link);
  text-decoration: none;
  font-weight: 500;
}

.networkfyi-powered a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Copy button
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.networkfyi-copy-btn {
  background: var(--copy-bg);
  color: var(--text);
  border: none;
  border-radius: 5px;
  padding: 4px 9px;
  font-size: 11px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: background 0.15s;
  font-family: inherit;
}

.networkfyi-copy-btn:hover {
  background: var(--copy-hover);
}

.networkfyi-copy-btn svg {
  width: 11px;
  height: 11px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Monospace (for values, codes, IPs)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.networkfyi-mono {
  font-family: ui-monospace, 'SF Mono', 'Cascadia Code', 'Consolas', monospace;
  font-size: 13px;
}

${getStyleCSS(style)}
  `;
}

// src/shadow.ts
function createShadow(el, config) {
  const widgetStyle = el.dataset.styleVariant || "modern";
  const shadow = el.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = getThemeCSS(config.accent, widgetStyle);
  shadow.appendChild(style);
  return shadow;
}
function resolveTheme(el) {
  const raw = el.dataset.theme || "light";
  if (raw === "auto") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return raw;
}
function createWidgetRoot(shadow, el, extraClass) {
  const theme = resolveTheme(el);
  const size = el.dataset.size || "default";
  const div = document.createElement("div");
  div.className = ["networkfyi-widget", extraClass].filter(Boolean).join(" ");
  div.setAttribute("data-theme", theme);
  div.setAttribute("data-size", size);
  shadow.appendChild(div);
  if (el.dataset.theme === "auto") {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      div.setAttribute("data-theme", e.matches ? "dark" : "light");
    });
  }
  return div;
}
function renderLoading(container) {
  container.innerHTML = `
    <div class="networkfyi-loading">
      <span class="networkfyi-spinner"></span>
      Loading\u2026
    </div>
  `;
}
function renderError(container, message, config) {
  container.innerHTML = `
    <div class="networkfyi-error">
      <p>${message}</p>
      <a href="https://${config.domain}" target="_blank" rel="noopener">
        Visit ${config.name}
      </a>
    </div>
  `;
}
var externalLinkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
function poweredByHTML(config) {
  return `<span class="networkfyi-powered">Powered by <a href="https://${config.domain}" target="_blank" rel="noopener">${config.name}</a></span>`;
}

// src/api.ts
var CACHE_TTL_MS = 5 * 60 * 1e3;
function cacheKey(url) {
  return `networkfyi_embed_${url}`;
}
function getFromCache(url) {
  try {
    const raw = sessionStorage.getItem(cacheKey(url));
    if (!raw) return null;
    const entry = JSON.parse(raw);
    if (Date.now() - entry.ts > CACHE_TTL_MS) {
      sessionStorage.removeItem(cacheKey(url));
      return null;
    }
    return entry.data;
  } catch (e) {
    return null;
  }
}
function setInCache(url, data) {
  try {
    const entry = { data, ts: Date.now() };
    sessionStorage.setItem(cacheKey(url), JSON.stringify(entry));
  } catch (e) {
  }
}
async function fetchAPI(baseUrl, path, params) {
  const base = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
  const relativePath = path.startsWith("/") ? path.slice(1) : path;
  const url = new URL(relativePath, base);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }
  const urlStr = url.toString();
  const cached = getFromCache(urlStr);
  if (cached !== null) return cached;
  const response = await fetch(urlStr, {
    headers: { Accept: "application/json" }
  });
  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${urlStr}`);
  }
  const data = await response.json();
  setInCache(urlStr, data);
  return data;
}

// src/cards/shared.ts
function esc(s) {
  if (!s) return "";
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function kvRow(label, value) {
  if (value === null || value === void 0 || value === "") return "";
  return `<div class="networkfyi-kv-row"><span class="networkfyi-kv-label">${esc(label)}</span><span class="networkfyi-kv-value">${esc(String(value))}</span></div>`;
}
function badge(text, bg, fg = "#fff") {
  return `<span class="networkfyi-badge" style="background:${bg};color:${fg}">${esc(text)}</span>`;
}
function renderGlossaryCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const name = String((_c = (_b = (_a = data.name) != null ? _a : data.term) != null ? _b : data.slug) != null ? _c : "");
  const definition = String((_d = data.definition) != null ? _d : "");
  const extended = String((_f = (_e = data.extended_definition) != null ? _e : data.extended_description) != null ? _f : "");
  const categoryLabel2 = String((_h = (_g = data.category_name) != null ? _g : data.category) != null ? _h : "");
  const slug = String((_i = data.slug) != null ? _i : "");
  const glossaryBase = config.site === "cablefyi" ? "terms" : "glossary";
  const termUrl = `https://${config.domain}/${glossaryBase}/${esc(slug)}/`;
  const glossaryUrl = `https://${config.domain}/glossary/`;
  const relatedTerms = data.related_terms;
  const relatedPills = relatedTerms && relatedTerms.length > 0 ? `<div class="networkfyi-pills">${relatedTerms.map(
    (rt) => `<a class="networkfyi-pill" href="https://${config.domain}/${glossaryBase}/${esc(rt.slug)}/" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;">${esc(rt.name)}</a>`
  ).join("")}</div>` : "";
  return `
    <div class="networkfyi-header">
      <div>
        <div class="networkfyi-header-title">${esc(name)}</div>
        ${categoryLabel2 ? `<span class="networkfyi-badge" style="background:${config.accent};color:#fff;margin-top:4px;display:inline-block;">${esc(categoryLabel2)}</span>` : ""}
      </div>
    </div>
    <div class="networkfyi-body" style="font-size:0.9rem;line-height:1.5;">
      ${esc(definition)}
    </div>
    ${extended ? `<div style="padding:0 18px 10px;font-size:0.85rem;color:var(--muted);line-height:1.5;">${esc(extended)}</div>` : ""}
    ${relatedPills}
    <div class="networkfyi-view-link"><a href="${termUrl}" target="_blank" rel="noopener">${esc(name)} ${externalLinkIcon}</a></div>
    <div class="networkfyi-view-link"><a href="${glossaryUrl}" target="_blank" rel="noopener">Full glossary on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}
function renderFAQCard(faqs, config) {
  if (!faqs || !faqs.length) return `<div class="networkfyi-body">No FAQs available.</div>${poweredByHTML(config)}`;
  const items = faqs.map(
    (faq) => `
    <details class="networkfyi-faq-item" style="border-bottom:1px solid var(--border);padding:10px 18px;">
      <summary style="cursor:pointer;font-size:0.9rem;font-weight:600;color:var(--text);list-style:none;display:flex;justify-content:space-between;align-items:center;">
        ${esc(faq.question)}
        <span style="flex-shrink:0;margin-left:8px;font-size:0.75rem;color:var(--muted);">+</span>
      </summary>
      <div style="margin-top:8px;font-size:0.85rem;color:var(--muted);line-height:1.5;">
        ${esc(faq.answer)}
      </div>
    </details>
  `
  ).join("");
  return `
    <div class="networkfyi-header">
      <div>
        <div class="networkfyi-header-title">Frequently Asked Questions</div>
        <div class="networkfyi-header-subtitle">${faqs.length} questions</div>
      </div>
    </div>
    ${items}
    ${poweredByHTML(config)}
  `;
}

// src/cards/cable.ts
function renderCableCard(data, config) {
  var _a, _b, _c, _d, _e, _f;
  const name = String((_a = data.name) != null ? _a : "");
  const slug = String((_b = data.slug) != null ? _b : "");
  const description = String((_c = data.description) != null ? _c : "");
  const connA = String((_d = data.connector_a) != null ? _d : "");
  const connB = String((_e = data.connector_b) != null ? _e : "");
  const maxRate = data.max_data_rate_gbps;
  const maxRes = String((_f = data.max_video_resolution) != null ? _f : "");
  const maxPower = data.max_power_delivery_watts;
  const maxLen = data.max_recommended_length_m;
  const standards = data.supported_standards;
  const cableUrl = `https://${config.domain}/cables/${esc(slug)}/`;
  const connectorDisplay = connA && connB ? `<div class="networkfyi-connector-arrow">
        <span>${esc(connA)}</span>
        <span class="networkfyi-connector-arrow-icon">\u2194</span>
        <span>${esc(connB)}</span>
      </div>` : "";
  const standardsPills = standards && standards.length > 0 ? `<div class="networkfyi-pills">${standards.map((s) => `<span class="networkfyi-pill">${esc(s)}</span>`).join("")}</div>` : "";
  return `
    <div class="networkfyi-header">
      <div class="networkfyi-img">\u{1F50C}</div>
      <div>
        <div class="networkfyi-header-title">${esc(name)}</div>
        <div class="networkfyi-header-subtitle">Cable</div>
      </div>
    </div>
    ${connectorDisplay}
    <div class="networkfyi-kv-rows">
      ${maxRate !== null && maxRate !== void 0 ? kvRow("Max Data Rate", `${maxRate} Gbps`) : ""}
      ${maxPower !== null && maxPower !== void 0 ? kvRow("Max Power", `${maxPower}W`) : ""}
      ${maxRes ? kvRow("Max Resolution", maxRes) : ""}
      ${maxLen !== null && maxLen !== void 0 ? kvRow("Max Length", `${maxLen}m`) : ""}
    </div>
    ${description ? `<div class="networkfyi-desc">${esc(description.length > 200 ? description.slice(0, 200) + "..." : description)}</div>` : ""}
    ${standardsPills}
    <div class="networkfyi-view-link"><a href="${cableUrl}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}

// src/compute/status.ts
function statusCategory(code) {
  if (code >= 100 && code < 200) return "informational";
  if (code >= 200 && code < 300) return "success";
  if (code >= 300 && code < 400) return "redirection";
  if (code >= 400 && code < 500) return "client-error";
  if (code >= 500 && code < 600) return "server-error";
  return "unknown";
}
function categoryColor(category) {
  switch (category) {
    case "informational":
      return "#3B82F6";
    // blue
    case "success":
      return "#10B981";
    // green
    case "redirection":
      return "#F59E0B";
    // amber
    case "client-error":
      return "#EF4444";
    // red
    case "server-error":
      return "#7C3AED";
    // violet
    default:
      return "#6B7280";
  }
}
function categoryLabel(category) {
  switch (category) {
    case "informational":
      return "Info";
    case "success":
      return "Success";
    case "redirection":
      return "Redirect";
    case "client-error":
      return "Client Error";
    case "server-error":
      return "Server Error";
    default:
      return "Unknown";
  }
}
var ASN_CATEGORY_COLORS = {
  cloud: "#3B82F6",
  isp: "#10B981",
  cdn: "#F59E0B",
  enterprise: "#6366F1",
  hosting: "#EC4899",
  exchange: "#14B8A6",
  education: "#8B5CF6",
  government: "#EF4444"
};
function asnCategoryColor(category) {
  return ASN_CATEGORY_COLORS[category.toLowerCase()] || "#6B7280";
}

// src/cards/asn.ts
function renderASNCard(data, config) {
  var _a, _b, _c, _d, _e, _f;
  const number = data.number;
  const name = String((_a = data.name) != null ? _a : "");
  const org = String((_b = data.org) != null ? _b : "");
  const countryCode = String((_c = data.country_code) != null ? _c : "");
  const category = String((_d = data.category) != null ? _d : "");
  const website = String((_e = data.website) != null ? _e : "");
  const description = String((_f = data.description) != null ? _f : "");
  const prefixCount = data.prefix_count;
  const asnUrl = `https://${config.domain}/asn/AS${number}/`;
  const catColor = asnCategoryColor(category);
  return `
    <div class="networkfyi-header">
      <div class="networkfyi-img" style="font-size:16px;">AS</div>
      <div>
        <div class="networkfyi-header-title">AS${esc(String(number))}</div>
        <div class="networkfyi-header-subtitle">${esc(name || org)}</div>
      </div>
    </div>
    <div class="networkfyi-stats-row">
      <div class="networkfyi-stat">
        <div class="networkfyi-stat-value">${esc(String(number))}</div>
        <div class="networkfyi-stat-label">ASN</div>
      </div>
      ${prefixCount !== null && prefixCount !== void 0 ? `<div class="networkfyi-stat">
            <div class="networkfyi-stat-value">${prefixCount.toLocaleString()}</div>
            <div class="networkfyi-stat-label">Prefixes</div>
          </div>` : ""}
      ${countryCode ? `<div class="networkfyi-stat">
            <div class="networkfyi-stat-value">${esc(countryCode)}</div>
            <div class="networkfyi-stat-label">Country</div>
          </div>` : ""}
    </div>
    <div class="networkfyi-kv-rows">
      ${org ? kvRow("Organization", org) : ""}
      ${category ? `<div class="networkfyi-kv-row"><span class="networkfyi-kv-label">Category</span><span class="networkfyi-kv-value">${badge(category, catColor)}</span></div>` : ""}
      ${website ? kvRow("Website", website) : ""}
    </div>
    ${description ? `<div class="networkfyi-desc">${esc(description.length > 200 ? description.slice(0, 200) + "..." : description)}</div>` : ""}
    <div class="networkfyi-view-link"><a href="${asnUrl}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}
function renderISPCard(data, config) {
  var _a, _b, _c, _d, _e, _f;
  const name = String((_a = data.name) != null ? _a : "");
  const slug = String((_b = data.slug) != null ? _b : "");
  const countryCode = String((_c = data.country_code) != null ? _c : "");
  const website = String((_d = data.website) != null ? _d : "");
  const description = String((_e = data.description) != null ? _e : "");
  const ispType = String((_f = data.isp_type) != null ? _f : "");
  const asnCount = data.asn_count;
  const ipBlockCount = data.ip_block_count;
  const ispUrl = `https://${config.domain}/isp/${esc(slug)}/`;
  return `
    <div class="networkfyi-header">
      <div class="networkfyi-img">\u{1F310}</div>
      <div>
        <div class="networkfyi-header-title">${esc(name)}</div>
        <div class="networkfyi-header-subtitle">${esc(ispType || "ISP")}</div>
      </div>
    </div>
    <div class="networkfyi-stats-row">
      ${asnCount !== null && asnCount !== void 0 ? `<div class="networkfyi-stat">
            <div class="networkfyi-stat-value">${asnCount.toLocaleString()}</div>
            <div class="networkfyi-stat-label">ASNs</div>
          </div>` : ""}
      ${ipBlockCount !== null && ipBlockCount !== void 0 ? `<div class="networkfyi-stat">
            <div class="networkfyi-stat-value">${ipBlockCount.toLocaleString()}</div>
            <div class="networkfyi-stat-label">IP Blocks</div>
          </div>` : ""}
      ${countryCode ? `<div class="networkfyi-stat">
            <div class="networkfyi-stat-value">${esc(countryCode)}</div>
            <div class="networkfyi-stat-label">Country</div>
          </div>` : ""}
    </div>
    <div class="networkfyi-kv-rows">
      ${ispType ? kvRow("Type", ispType) : ""}
      ${website ? kvRow("Website", website) : ""}
    </div>
    ${description ? `<div class="networkfyi-desc">${esc(description.length > 200 ? description.slice(0, 200) + "..." : description)}</div>` : ""}
    <div class="networkfyi-view-link"><a href="${ispUrl}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}
function renderIPRangeCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g;
  const slug = String((_a = data.slug) != null ? _a : "");
  const cidr = String((_b = data.cidr) != null ? _b : "");
  const networkAddr = String((_c = data.network_address) != null ? _c : "");
  const broadcastAddr = String((_d = data.broadcast_address) != null ? _d : "");
  const prefixLen = data.prefix_length;
  const hostCount = data.host_count;
  const version = data.version;
  const countryCode = String((_e = data.country_code) != null ? _e : "");
  const asnData = data.asn;
  const rangeUrl = `https://${config.domain}/ip-range/${esc(slug)}/`;
  const versionLabel = version === 4 ? "IPv4" : version === 6 ? "IPv6" : "";
  return `
    <div class="networkfyi-header">
      <div class="networkfyi-img" style="font-size:14px;">IP</div>
      <div>
        <div class="networkfyi-header-title networkfyi-mono">${esc(cidr)}</div>
        <div class="networkfyi-header-subtitle">${esc(versionLabel || "IP Range")}</div>
      </div>
    </div>
    <div class="networkfyi-kv-rows">
      ${networkAddr ? kvRow("Network", networkAddr) : ""}
      ${broadcastAddr ? kvRow("Broadcast", broadcastAddr) : ""}
      ${prefixLen !== null && prefixLen !== void 0 ? kvRow("Prefix Length", `/${prefixLen}`) : ""}
      ${hostCount !== null && hostCount !== void 0 ? kvRow("Host Count", hostCount.toLocaleString()) : ""}
      ${versionLabel ? kvRow("Version", versionLabel) : ""}
      ${countryCode ? kvRow("Country", countryCode) : ""}
      ${asnData ? kvRow("ASN", `AS${String((_g = (_f = asnData.number) != null ? _f : asnData.name) != null ? _g : "")}`) : ""}
    </div>
    <div class="networkfyi-view-link"><a href="${rangeUrl}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}

// src/cards/code.ts
function renderStatusCodeCard(data, config) {
  var _a, _b, _c, _d, _e, _f;
  const code = data.code;
  const name = String((_a = data.name) != null ? _a : "");
  const slug = String((_b = data.slug) != null ? _b : "");
  const description = String((_c = data.description) != null ? _c : "");
  const whenYouSeeIt = String((_d = data.when_you_see_it) != null ? _d : "");
  const protocol = data.protocol;
  const category = data.category;
  const relatedCodes = data.related_codes;
  const protocolName = protocol ? String((_e = protocol.name) != null ? _e : "") : "";
  const protocolSlug = protocol ? String((_f = protocol.slug) != null ? _f : "") : "";
  const cat = statusCategory(code);
  const color = categoryColor(cat);
  const catLabel = categoryLabel(cat);
  const codeUrl = protocolSlug ? `https://${config.domain}/${esc(protocolSlug)}/${esc(slug)}/` : `https://${config.domain}/codes/${esc(slug)}/`;
  return `
    <div class="networkfyi-header">
      <div class="networkfyi-img" style="background:${color};font-size:18px;">${code}</div>
      <div>
        <div class="networkfyi-header-title">${esc(name)}</div>
        <div class="networkfyi-header-subtitle">${esc(protocolName)} ${badge(catLabel, color)}</div>
      </div>
    </div>
    <div class="networkfyi-code-display">
      <div class="networkfyi-code-big" style="color:${color}">${code}</div>
      <div class="networkfyi-code-name">${esc(name)}</div>
      ${protocolName ? `<div class="networkfyi-code-protocol">${esc(protocolName)}</div>` : ""}
    </div>
    ${description ? `<div class="networkfyi-desc">${esc(description.length > 200 ? description.slice(0, 200) + "..." : description)}</div>` : ""}
    ${whenYouSeeIt ? `<div style="padding:10px 18px;border-bottom:1px solid var(--border);">
          <div class="networkfyi-section-label">When You See It</div>
          <div style="font-size:0.85rem;color:var(--muted);line-height:1.5;">${esc(whenYouSeeIt.length > 150 ? whenYouSeeIt.slice(0, 150) + "..." : whenYouSeeIt)}</div>
        </div>` : ""}
    ${relatedCodes && relatedCodes.length > 0 ? `<div class="networkfyi-pills">${relatedCodes.slice(0, 5).map((rc) => {
    var _a2;
    const rcCode = rc.code;
    const rcName = String((_a2 = rc.name) != null ? _a2 : "");
    const rcColor = categoryColor(statusCategory(rcCode));
    return badge(`${rcCode} ${rcName}`, rcColor);
  }).join(" ")}</div>` : ""}
    <div class="networkfyi-view-link"><a href="${codeUrl}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}

// src/widgets/entity.ts
function getEntityPath(config, slug) {
  switch (config.site) {
    case "cablefyi":
      return `cable/${slug}/`;
    case "ipfyi":
      return `asn/${slug}/`;
    case "statuscodefyi":
      return `code/${slug}/`;
    default:
      return `${config.entitySlug}/${slug}/`;
  }
}
function initEntityWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "networkfyi-entity-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "networkfyi-entity-widget");
  renderLoading(container);
  const path = getEntityPath(config, slug);
  fetchAPI(config.apiBase, path).then((data) => {
    var _a2;
    let html;
    switch (config.site) {
      case "cablefyi":
        html = renderCableCard(data, config);
        break;
      case "ipfyi":
        html = renderASNCard(data, config);
        break;
      case "statuscodefyi":
        html = renderStatusCodeCard(data, config);
        break;
      default: {
        const name = String((_a2 = data.name) != null ? _a2 : slug);
        const entityUrl = `https://${config.domain}/${config.entitySlug}/${esc(slug)}/`;
        html = `
            <div style="padding:16px;">
              <div style="font-size:1rem;font-weight:600;margin-bottom:8px;">${esc(name)}</div>
              <a href="${esc(entityUrl)}" target="_blank" rel="noopener"
                 style="color:${config.accent};text-decoration:none;font-size:0.85rem;">
                View on ${esc(config.name)} ${externalLinkIcon}
              </a>
            </div>
          `;
        break;
      }
    }
    container.innerHTML = html;
  }).catch(() => {
    renderError(container, `Unable to load "${esc(slug)}". Please try again later.`, config);
  });
}

// src/widgets/compare.ts
function initCompareWidget(el, config) {
  var _a, _b;
  const dataset = el.dataset;
  const slugA = (_a = dataset.slugA) != null ? _a : "";
  const slugB = (_b = dataset.slugB) != null ? _b : "";
  if (!slugA || !slugB) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "networkfyi-compare-widget");
    renderError(container2, "Missing data-slug-a and data-slug-b attributes.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "networkfyi-compare-widget");
  renderLoading(container);
  fetchAPI(config.apiBase, "compare/", { slug1: slugA, slug2: slugB }).then((data) => {
    var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const nameA = String((_b2 = (_a2 = data.name_a) != null ? _a2 : data.slug_a) != null ? _b2 : slugA);
    const nameB = String((_d = (_c = data.name_b) != null ? _c : data.slug_b) != null ? _d : slugB);
    const differences = data.differences;
    const summary = String((_e = data.summary) != null ? _e : "");
    const compareUrl = `https://${config.domain}/compare/?slug1=${encodeURIComponent(slugA)}&slug2=${encodeURIComponent(slugB)}`;
    let diffRows = "";
    if (differences && differences.length > 0) {
      diffRows = `<div class="networkfyi-kv-rows">`;
      for (const diff of differences.slice(0, 8)) {
        const label = String((_g = (_f = diff.field) != null ? _f : diff.label) != null ? _g : "");
        const valA = String((_i = (_h = diff.value_a) != null ? _h : diff.a) != null ? _i : "");
        const valB = String((_k = (_j = diff.value_b) != null ? _j : diff.b) != null ? _k : "");
        diffRows += `
            <div class="networkfyi-kv-row">
              <span class="networkfyi-kv-label">${esc(label)}</span>
              <span class="networkfyi-kv-value">${esc(valA)} vs ${esc(valB)}</span>
            </div>`;
      }
      diffRows += `</div>`;
    }
    container.innerHTML = `
        <div class="networkfyi-header">
          <div>
            <div class="networkfyi-header-title">${esc(nameA)} vs ${esc(nameB)}</div>
            <div class="networkfyi-header-subtitle">Comparison</div>
          </div>
        </div>
        <div class="networkfyi-stats-row">
          <div class="networkfyi-stat">
            <div class="networkfyi-stat-value" style="font-size:14px;">${esc(nameA)}</div>
            <div class="networkfyi-stat-label">A</div>
          </div>
          <div class="networkfyi-stat">
            <div class="networkfyi-stat-value" style="font-size:14px;">${esc(nameB)}</div>
            <div class="networkfyi-stat-label">B</div>
          </div>
        </div>
        ${diffRows}
        ${summary ? `<div class="networkfyi-desc">${esc(summary)}</div>` : ""}
        <div class="networkfyi-view-link"><a href="${esc(compareUrl)}" target="_blank" rel="noopener">Compare on ${esc(config.name)} ${externalLinkIcon}</a></div>
        ${poweredByHTML(config)}
      `;
  }).catch(() => {
    renderError(container, "Unable to load comparison data.", config);
  });
}

// src/rich-snippets.ts
function injectDefinedTerm(data, domain, siteName) {
  if (document.querySelector('script[data-networkfyi-snippet="term"]')) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: data.name,
    description: data.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: `${siteName} Glossary`,
      url: `https://${domain}/glossary/`
    }
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-networkfyi-snippet", "term");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}
function injectFAQPage(faqs, domain, _siteName) {
  if (document.querySelector('script[data-networkfyi-snippet="faq"]')) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    })),
    url: `https://${domain}/`
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-networkfyi-snippet", "faq");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

// src/widgets/glossary.ts
function initGlossaryWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "networkfyi-glossary-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "networkfyi-glossary-widget");
  renderLoading(container);
  const glossaryPath = `term/${slug}/`;
  fetchAPI(config.apiBase, glossaryPath).then((data) => {
    var _a2, _b, _c;
    container.innerHTML = renderGlossaryCard(data, config);
    if (el.dataset.noSnippet !== "true") {
      const name = String((_b = (_a2 = data.name) != null ? _a2 : data.term) != null ? _b : slug);
      const definition = String((_c = data.definition) != null ? _c : "");
      injectDefinedTerm({ name, definition }, config.domain, config.name);
    }
  }).catch(() => {
    renderError(
      container,
      `Unable to load glossary term "${esc(slug)}".`,
      config
    );
  });
}

// src/widgets/search.ts
var TYPE_LABELS = {
  cable: "Cable",
  connector: "Connector",
  standard: "Standard",
  asn: "ASN",
  isp: "ISP",
  "ip-range": "IP Range",
  code: "Status Code",
  protocol: "Protocol",
  scenario: "Scenario",
  spec: "Spec",
  glossary: "Glossary",
  term: "Glossary",
  guide: "Guide",
  faq: "FAQ"
};
var SEARCH_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
function initSearchWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const placeholder = (_a = dataset.placeholder) != null ? _a : `Search ${config.entityName}...`;
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "networkfyi-search-widget");
  let isOpen = false;
  let query = "";
  let results = [];
  let selectedIndex = -1;
  let debounceTimer = null;
  container.innerHTML = `
    <div class="networkfyi-search-wrap">
      <div class="networkfyi-search-form" style="position:relative;display:flex;align-items:center;">
        <span style="position:absolute;left:10px;color:var(--muted);pointer-events:none;">${SEARCH_ICON}</span>
        <input
          class="networkfyi-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="${esc(placeholder)}"
          aria-label="Search ${esc(config.name)}"
          aria-autocomplete="list"
          aria-expanded="false"
          role="combobox"
          style="padding-left:32px;"
        >
      </div>
      <div class="networkfyi-search-dropdown" role="listbox" hidden
           style="margin-top:4px;border:1px solid var(--border);border-radius:6px;background:var(--bg);box-shadow:var(--shadow);max-height:280px;overflow-y:auto;"></div>
    </div>
    ${poweredByHTML(config)}
  `;
  const input = container.querySelector(".networkfyi-search-input");
  const dropdown = container.querySelector(".networkfyi-search-dropdown");
  function getAllItems() {
    return Array.from(dropdown.querySelectorAll(".networkfyi-result-item"));
  }
  function setSelected(idx) {
    const items = getAllItems();
    items.forEach((item, i) => {
      if (i === idx) {
        item.style.background = `color-mix(in srgb, ${config.accent} 10%, var(--bg))`;
      } else {
        item.style.background = "";
      }
    });
    selectedIndex = idx;
  }
  function openDropdown() {
    isOpen = true;
    dropdown.hidden = false;
    input.setAttribute("aria-expanded", "true");
  }
  function closeDropdown() {
    isOpen = false;
    dropdown.hidden = true;
    input.setAttribute("aria-expanded", "false");
    selectedIndex = -1;
  }
  function renderDropdown() {
    var _a2, _b, _c, _d;
    if (results.length === 0) {
      dropdown.innerHTML = `<div style="padding:12px 14px;font-size:0.85rem;color:var(--muted);">No results for <strong>${esc(query)}</strong></div>`;
      return;
    }
    let html = "";
    for (const item of results) {
      const typeLabel = item.type ? (_a2 = TYPE_LABELS[item.type]) != null ? _a2 : item.type : null;
      const itemDesc = (_d = (_c = (_b = item.description) != null ? _b : item.excerpt) != null ? _c : item.subtitle) != null ? _d : "";
      const href = item.url ? item.url.startsWith("http") ? item.url : `https://${config.domain}${item.url}` : `https://${config.domain}/${config.entitySlug}/${esc(item.slug || "")}/`;
      html += `
        <a class="networkfyi-result-item"
           href="${esc(href)}" target="_blank" rel="noopener" role="option" tabindex="-1"
           style="display:block;padding:8px 14px;text-decoration:none;color:var(--text);border-bottom:1px solid var(--border);transition:background 0.1s;">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
            <span style="font-size:0.875rem;font-weight:500;">${esc(item.name)}</span>
            ${typeLabel ? `<span class="networkfyi-badge" style="flex-shrink:0;">${esc(typeLabel)}</span>` : ""}
          </div>
          ${itemDesc ? `<div style="font-size:0.75rem;color:var(--muted);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${esc(itemDesc)}</div>` : ""}
        </a>
      `;
    }
    dropdown.innerHTML = html;
  }
  async function doSearch(q) {
    var _a2;
    if (!q.trim()) {
      closeDropdown();
      return;
    }
    const searchUrl = `${config.apiBase}search/?q=${encodeURIComponent(q)}&limit=10`;
    try {
      const response = await fetch(searchUrl, { headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error(`Search failed: ${response.status}`);
      const data = await response.json();
      results = (_a2 = data.results) != null ? _a2 : [];
    } catch (e) {
      results = [];
    }
    renderDropdown();
    openDropdown();
    setSelected(-1);
  }
  input.addEventListener("input", () => {
    query = input.value;
    if (debounceTimer !== null) clearTimeout(debounceTimer);
    if (!query.trim()) {
      closeDropdown();
      return;
    }
    debounceTimer = setTimeout(() => {
      void doSearch(query);
    }, 300);
  });
  input.addEventListener("keydown", (e) => {
    if (!isOpen) return;
    const items = getAllItems();
    const total = items.length;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected(selectedIndex < total - 1 ? selectedIndex + 1 : 0);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected(selectedIndex > 0 ? selectedIndex - 1 : total - 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && items[selectedIndex]) {
        items[selectedIndex].click();
      } else {
        window.open(`https://${config.domain}${config.searchPath}?q=${encodeURIComponent(query)}`, "_blank", "noopener");
      }
    } else if (e.key === "Escape") {
      closeDropdown();
      input.blur();
    }
  });
  document.addEventListener("click", (e) => {
    if (isOpen && !el.contains(e.target)) closeDropdown();
  });
  input.addEventListener("focus", () => {
    input.style.borderColor = config.accent;
    input.style.boxShadow = `0 0 0 2px color-mix(in srgb, ${config.accent} 20%, transparent)`;
  });
  input.addEventListener("blur", () => {
    input.style.borderColor = "";
    input.style.boxShadow = "";
  });
}

// src/widgets/faq.ts
function initFAQWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "networkfyi-faq-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "networkfyi-faq-widget");
  renderLoading(container);
  const faqPath = `faqs/?topic=${encodeURIComponent(slug)}`;
  fetchAPI(config.apiBase, faqPath).then((data) => {
    let faqs;
    if (data.faqs && Array.isArray(data.faqs)) {
      faqs = data.faqs;
    } else if (data.results && Array.isArray(data.results)) {
      faqs = data.results;
    } else if (data.question && data.answer) {
      faqs = [{ question: String(data.question), answer: String(data.answer) }];
    } else {
      faqs = [];
    }
    container.innerHTML = renderFAQCard(faqs, config);
    if (el.dataset.noSnippet !== "true" && faqs.length > 0) {
      injectFAQPage(faqs, config.domain, config.name);
    }
  }).catch(() => {
    renderError(container, `Unable to load FAQs for "${esc(slug)}".`, config);
  });
}

// src/tools/isp.ts
function initISPTool(el, config) {
  var _a;
  const slug = (_a = el.dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "networkfyi-isp-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "networkfyi-isp-widget");
  renderLoading(container);
  fetchAPI(config.apiBase, `isp/${slug}/`).then((data) => {
    container.innerHTML = renderISPCard(data, config);
  }).catch(() => {
    renderError(container, `Unable to load ISP "${esc(slug)}".`, config);
  });
}

// src/tools/ip-range.ts
function initIPRangeTool(el, config) {
  var _a;
  const slug = (_a = el.dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "networkfyi-ip-range-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "networkfyi-ip-range-widget");
  renderLoading(container);
  fetchAPI(config.apiBase, `ip-range/${slug}/`).then((data) => {
    container.innerHTML = renderIPRangeCard(data, config);
  }).catch(() => {
    renderError(container, `Unable to load IP range "${esc(slug)}".`, config);
  });
}

// src/inline/asn-badge.ts
function initASNBadgeInline(el, config) {
  var _a, _b;
  const category = (_a = el.dataset.category) != null ? _a : "";
  const label = ((_b = el.textContent) == null ? void 0 : _b.trim()) || category;
  el.setAttribute("data-inline", "");
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "networkfyi-inline");
  container.setAttribute("data-theme", el.dataset.theme || "light");
  const color = asnCategoryColor(category);
  container.innerHTML = `
    <span class="networkfyi-badge" style="background:${color};color:#fff;font-size:11px;padding:2px 8px;">
      ${esc(label)}
    </span>
  `;
}

// src/_entry_ipfyi.ts
function initWidget(el, type, config) {
  const widgetStyle = el.dataset.styleVariant || "modern";
  void widgetStyle;
  switch (type) {
    case "entity":
      initEntityWidget(el, config);
      break;
    case "compare":
      initCompareWidget(el, config);
      break;
    case "glossary":
      initGlossaryWidget(el, config);
      break;
    case "search":
      initSearchWidget(el, config);
      break;
    case "faq":
      initFAQWidget(el, config);
      break;
    case "isp":
      initISPTool(el, config);
      break;
    case "ip-range":
      initIPRangeTool(el, config);
      break;
    case "asn-badge":
      initASNBadgeInline(el, config);
      break;
    default:
      break;
  }
}
function lazyInit(el, callback) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(el);
          callback();
        }
      });
    }, { rootMargin: "200px" });
    observer.observe(el);
  } else {
    callback();
  }
}
function processElement(el, config) {
  if (el.shadowRoot) return;
  const dataKey = config.attribute.replace("data-", "");
  const camelKey = dataKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const widgetType = el.dataset[camelKey];
  if (!widgetType) return;
  lazyInit(el, () => {
    if (!el.shadowRoot) initWidget(el, widgetType, config);
  });
}
function initAll(config) {
  document.querySelectorAll(`[${config.attribute}]`).forEach((el) => processElement(el, config));
}
(function bootstrap() {
  const config = '{"site":"ipfyi","name":"IPFYI","domain":"ipfyi.com","accent":"#334155","attribute":"data-ipfyi","apiBase":"https://ipfyi.com/api/v1/","searchPath":"/search/","entityName":"Networks","entitySlug":"asn"}';
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initAll(config));
  } else {
    initAll(config);
  }
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        var _a;
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        const el = node;
        if (el.hasAttribute(config.attribute)) processElement(el, config);
        (_a = el.querySelectorAll) == null ? void 0 : _a.call(el, `[${config.attribute}]`).forEach((child) => processElement(child, config));
      });
    });
  });
  observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
})();
function makeWidgetElement(widgetType, initFn, domainAttrs) {
  const observed = [...domainAttrs, "theme", "style-variant", "size"];
  return class extends HTMLElement {
    static get observedAttributes() {
      return observed;
    }
    connectedCallback() {
      if (this.shadowRoot) return;
      this._syncDataAttrs();
      initFn(this, '{"site":"ipfyi","name":"IPFYI","domain":"ipfyi.com","accent":"#334155","attribute":"data-ipfyi","apiBase":"https://ipfyi.com/api/v1/","searchPath":"/search/","entityName":"Networks","entitySlug":"asn"}');
    }
    attributeChangedCallback(_name, oldVal, newVal) {
      if (oldVal === newVal || !this.shadowRoot) return;
      const shadow = this.shadowRoot;
      while (shadow.firstChild) shadow.firstChild.remove();
      this._syncDataAttrs();
      initFn(this, '{"site":"ipfyi","name":"IPFYI","domain":"ipfyi.com","accent":"#334155","attribute":"data-ipfyi","apiBase":"https://ipfyi.com/api/v1/","searchPath":"/search/","entityName":"Networks","entitySlug":"asn"}');
    }
    _syncDataAttrs() {
      const attrKey = '{"site":"ipfyi","name":"IPFYI","domain":"ipfyi.com","accent":"#334155","attribute":"data-ipfyi","apiBase":"https://ipfyi.com/api/v1/","searchPath":"/search/","entityName":"Networks","entitySlug":"asn"}'.attribute.replace("data-", "");
      this.dataset[attrKey] = widgetType;
      for (const a of domainAttrs) {
        const val = this.getAttribute(a);
        if (val !== null) this.dataset[a] = val;
      }
      const theme = this.getAttribute("theme");
      if (theme !== null) this.dataset.theme = theme;
      const styleVariant = this.getAttribute("style-variant");
      if (styleVariant !== null) this.dataset.styleVariant = styleVariant;
      const size = this.getAttribute("size");
      if (size !== null) this.dataset.size = size;
    }
  };
}
(function registerElements() {
  if (typeof customElements === "undefined") return;
  const site = '{"site":"ipfyi","name":"IPFYI","domain":"ipfyi.com","accent":"#334155","attribute":"data-ipfyi","apiBase":"https://ipfyi.com/api/v1/","searchPath":"/search/","entityName":"Networks","entitySlug":"asn"}'.site;
  const defs = [
    [`${site}-entity`, initEntityWidget, ["slug"]],
    [`${site}-compare`, initCompareWidget, ["slug-a", "slug-b"]],
    [`${site}-glossary`, initGlossaryWidget, ["slug"]],
    [`${site}-search`, initSearchWidget, ["placeholder"]],
    [`${site}-faq`, initFAQWidget, ["slug"]],
    [`${site}-isp`, initISPTool, ["slug"]],
    [`${site}-ip-range`, initIPRangeTool, ["slug"]]
  ];
  for (const [tagName, initFn, attrs] of defs) {
    if (!customElements.get(tagName)) {
      const widgetType = tagName.slice(site.length + 1);
      customElements.define(tagName, makeWidgetElement(widgetType, initFn, attrs));
    }
  }
})();
