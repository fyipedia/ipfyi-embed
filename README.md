# ipfyi-embed

[![npm](https://img.shields.io/npm/v/ipfyi-embed)](https://www.npmjs.com/package/ipfyi-embed)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/ipfyi-embed)

Embed **IPFYI** widgets — networks, glossary terms, interactive tools, and inline elements — on any website. **8 widget types**, zero dependencies, Shadow DOM style isolation, 4 built-in themes (light, dark, sepia, auto), 2 styles (modern, clean), and live data from the [IPFYI](https://ipfyi.com) database.

Every widget includes a "Powered by IPFYI" backlink directing readers to the full reference.

> **Try the interactive widget builder at [widget.ipfyi.com](https://widget.ipfyi.com)**

## Quick Start

```html
<!-- Place widget div where you want it to appear -->
<div data-ipfyi="entity" data-slug="asn" data-theme="light"></div>

<!-- Load the embed script once, anywhere on the page -->
<script src="https://cdn.jsdelivr.net/npm/ipfyi-embed@1/dist/embed.min.js"></script>
```

That's it. The widget fetches data from the IPFYI API and renders with full style isolation.

## Widget Types

| Type | Usage | Description |
|------|-------|-------------|
| `entity` | `<div data-ipfyi="entity" data-slug="..."></div>` | Entity detail card — cable, ASN, or status code |
| `glossary` | `<div data-ipfyi="glossary" data-slug="..."></div>` | Glossary term definition with cross-references |
| `search` | `<div data-ipfyi="search" data-slug="..."></div>` | Search box linking to the full database |
| `compare` | `<div data-ipfyi="compare" data-slug="..."></div>` | Side-by-side entity comparison |
| `faq` | `<div data-ipfyi="faq" data-slug="..."></div>` | FAQ accordion with expand/collapse |
| `isp` | `<div data-ipfyi="isp" data-slug="..."></div>` | ISP detail card — name, type, country, ASN count, IP blocks |
| `ip-range` | `<div data-ipfyi="ip-range" data-slug="..."></div>` | IP range card — CIDR, host count, version, ASN |
| `asn-badge` | `<div data-ipfyi="asn-badge" data-slug="..."></div>` | Inline ASN category colored badge (cloud/isp/cdn/enterprise) |

## Widget Options

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-ipfyi` | entity, compare, glossary, search, faq, [tools] | required | Widget type |
| `data-slug` | e.g. "asn" | — | Entity slug from the IPFYI database |
| `data-theme` | light, dark, sepia, auto | light | Visual theme (`auto` follows OS preference) |
| `data-style-variant` | modern, clean | modern | Widget design style |
| `data-size` | default, compact, large | default | Widget size |
| `data-placeholder` | any string | "Search Networks..." | Search box placeholder |

## Themes

```html
<!-- Light (default) -->
<div data-ipfyi="entity" data-slug="asn" data-theme="light"></div>

<!-- Dark -->
<div data-ipfyi="entity" data-slug="asn" data-theme="dark"></div>

<!-- Sepia -->
<div data-ipfyi="entity" data-slug="asn" data-theme="sepia"></div>

<!-- Auto — follows OS dark/light preference -->
<div data-ipfyi="entity" data-slug="asn" data-theme="auto"></div>
```

## Styles

```html
<!-- Modern (default) — gradient header, rounded cards, accent colors -->
<div data-ipfyi="entity" data-slug="asn" data-style-variant="modern"></div>

<!-- Clean — minimal borders, data-first aesthetic -->
<div data-ipfyi="entity" data-slug="asn" data-style-variant="clean"></div>
```

## Web Components (Custom Elements)

```html
<ipfyi-entity slug="asn" theme="light"></ipfyi-entity>
<ipfyi-compare slug-a="item-a" slug-b="item-b"></ipfyi-compare>
<ipfyi-search placeholder="Search Networks..."></ipfyi-search>

<script src="https://cdn.jsdelivr.net/npm/ipfyi-embed@1/dist/embed.min.js"></script>
```

Use `style-variant` (not `style`) to avoid conflicts with the HTML reserved `style` attribute.

## CDN Options

### jsDelivr (recommended)

```html
<script src="https://cdn.jsdelivr.net/npm/ipfyi-embed@1/dist/embed.min.js"></script>
```

### Specific version

```html
<script src="https://cdn.jsdelivr.net/npm/ipfyi-embed@1.0.0/dist/embed.min.js"></script>
```

### npm (for bundlers)

```bash
npm install ipfyi-embed
```

```javascript
import 'ipfyi-embed';
```

## Technical Details

- **Shadow DOM**: Complete style isolation — no CSS conflicts with your site
- **Zero dependencies**: No jQuery, React, or any external library
- **2 styles**: Modern (accent gradients) and Clean (minimal, data-first)
- **4 themes**: Light, Dark, Sepia, Auto (OS preference detection)
- **CORS**: IPFYI API has CORS enabled for all origins
- **MutationObserver**: Works with dynamically added elements (SPAs)
- **IntersectionObserver**: Lazy loading — widgets only fetch when entering viewport (200px margin)
- **Rich Snippets**: DefinedTerm JSON-LD injected for glossary widgets
- **Bundle size**: Tree-shaken per site — only includes tools available on IPFYI

## Learn More About Networks

Visit [ipfyi.com](https://ipfyi.com) — IPFYI is a comprehensive networks reference with interactive tools, guides, and developer resources.

- **API docs**: [ipfyi.com/developers/](https://ipfyi.com/developers/)
- **Widget builder**: [widget.ipfyi.com](https://widget.ipfyi.com)
- **npm package**: [npmjs.com/package/ipfyi-embed](https://www.npmjs.com/package/ipfyi-embed)
- **GitHub**: [github.com/fyipedia/ipfyi-embed](https://github.com/fyipedia/ipfyi-embed)

## Network FYI Family

Part of [FYIPedia](https://fyipedia.com) — open-source developer tools ecosystem. Network FYI covers cables, IP networks, and protocol status codes. Hub: [wirefyi.com](https://wirefyi.com).

| Site | Domain | Focus | Package |
|------|--------|-------|---------|
| CableFYI | [cablefyi.com](https://cablefyi.com) | 151 cables, connectors, standards, compatibility | [npm](https://www.npmjs.com/package/cablefyi-embed) |
| **IPFYI** | [ipfyi.com](https://ipfyi.com) | ASN, ISP, IP ranges, network infrastructure | **[npm](https://www.npmjs.com/package/ipfyi-embed)** |
| StatusCodeFYI | [statuscodefyi.com](https://statuscodefyi.com) | HTTP/SMTP/gRPC status codes, protocols, debugging | [npm](https://www.npmjs.com/package/statuscodefyi-embed) |
| TLDFYI | [tldfyi.com](https://tldfyi.com) | TLD registry, domain extensions (coming soon) | Coming soon |

## FYIPedia Developer Tools

| Package | PyPI | npm | Description |
|---------|------|-----|-------------|
| colorfyi | [PyPI](https://pypi.org/project/colorfyi/) | [npm](https://www.npmjs.com/package/@fyipedia/colorfyi) | Color conversion, WCAG contrast, harmonies — [colorfyi.com](https://colorfyi.com) |
| emojifyi | [PyPI](https://pypi.org/project/emojifyi/) | [npm](https://www.npmjs.com/package/emojifyi) | Emoji encoding & metadata for 3,953 emojis — [emojifyi.com](https://emojifyi.com) |
| unitfyi | [PyPI](https://pypi.org/project/unitfyi/) | [npm](https://www.npmjs.com/package/unitfyi) | Unit conversion, 220 units — [unitfyi.com](https://unitfyi.com) |
| fyipedia | [PyPI](https://pypi.org/project/fyipedia/) | — | Unified CLI for all FYI tools — [fyipedia.com](https://fyipedia.com) |

## Embed Widget

Embed [IPFYI](https://ipfyi.com) widgets on any website with [ipfyi-embed](https://widget.ipfyi.com):

```html
<script src="https://cdn.jsdelivr.net/npm/ipfyi-embed@1/dist/embed.min.js"></script>
<div data-ipfyi="entity" data-slug="example"></div>
```

Zero dependencies · Shadow DOM · 4 themes (light/dark/sepia/auto) · [Widget docs](https://widget.ipfyi.com)

## License

MIT — see [LICENSE](./LICENSE).

Built with care by [FYIPedia](https://fyipedia.com).
