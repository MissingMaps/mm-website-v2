---

# Missing Maps Website v2

This repository contains the next-generation Missing Maps website built with **Jekyll**, multilingual content support, and **Decap CMS** for content editing. The site is deployed via **GitHub Pages** and served at **[https://www.missingmaps.org](https://www.missingmaps.org)**.

Last updated: January 2026
Status: Production-ready (mm-website-v2)

---

# 📌 Project Overview

* **Framework:** Jekyll (Ruby)
* **Hosting:** GitHub Pages (custom domain)
* **CMS:** Decap (GitHub backend)
* **Languages:** English, French, Czech, Spanish
* **Content Types:** Blog posts, Projects

This repo replaces the legacy Missing Maps site while maintaining compatibility with existing content and asset structures.

---

# 🌍 Site Configuration (Jekyll)

```yaml
url: "https://www.missingmaps.org"
baseurl: ""
permalink: pretty
markdown: kramdown
highlighter: rouge

plugins:
  - jekyll-environment-variables
  - jekyll-paginate-v2

pagination:
  enabled: true
  per_page: 9
  sort_field: "date"
  sort_reverse: true
  trail:
    before: 2
    after: 2

collections_dir: collections
collections:
  posts:
    output: true
    permalink: /blog/:path/
  projects:
    output: true
    permalink: /projects/:path/

languages: [en, fr, cs, es]
default_lang: en
```

The site is deployed at the domain root, therefore **baseurl is empty**.

---

# 🎨 Theme & Design Configuration

Design tokens, colors, fonts, logos, and header/footer behavior are defined in `_config.yml`.

Key theme features:

* Custom color palette 
* Self-hosted Satoshi font family
* Fixed header navigation
* Open Graph + Twitter metadata
* Multilingual navigation and menus
* Optional dark mode (currently disabled)
* Configurable footer and bottom menu

Logos are stored in:

```
/assets/images/logo/
```

Fonts are stored in:

```
/assets/fonts/
```

---

# 📝 Content Structure

This site is organized around **Jekyll collections**, **static pages**, and **language-aware routing**.

```
collections/
  _posts/      → Blog posts
  _projects/   → Project pages
pages/ → English (default) static pages (Markdown)
_data/ → Menus, settings, translations, structured content
assets/ → Images, uploads, CSS, JS, fonts
```

Permalinks:

* Blog: `/blog/{slug}/`
* Projects: `/projects/{slug}/`

## Languages & Translations

Languages enabled:
- `en` (default)
- `fr`
- `cs`
- `es`

### Translation files

Translations live in one of the following locations (depending on feature/module):

1) **Data-based translations (recommended for UI strings):**
```
_data/i18n/
en.yml
fr.yml
cs.yml
es.yml
```

2) **Language folders (used for localized pages and routes):**
   
```
fr/
cs/
es/
```

### How content is organized by language

- **English (default)** content lives in:
  - `pages/` (Markdown files)
  - `collections/_posts/` and `collections/_projects/`

- **Translated pages** are typically created inside the language folders:
  - `fr/...`
  - `cs/...`
  - `es/...`

- **Shared content types** (blog/projects) remain in collections and are rendered with language-aware templates and i18n labels.

### Adding a new language

1. Add the language code to `_config.yml`:
   - `languages: [en, fr, cs, es, xx]`
2. Add a translation file:
   - `_data/i18n/xx.yml`
3. (Optional) Create a language folder for localized pages:
   - `xx/`
4. Ensure menu labels exist for the new language in the i18n file.

---

# ✍️ Accessing Admin Backend (Decap CMS)

Anyone with **write access** to the GitHub repository can edit content via the CMS.

Admin interface:

```
https://www.missingmaps.org/admin/
```

## Adding an Editor (GitHub Collaborator)

1. Open the repository on GitHub
2. Go to **Settings → Collaborators**
3. Click **Add people**
4. Enter GitHub username or email
5. Assign permissions:

| Permission | Access                    |
| ---------- | ------------------------- |
| Read       | ❌ Cannot edit content     |
| Write      | ✅ Can edit via Decap      |
| Admin      | ⚠️ Full repository control |

Once invited and accepted:

* Editor logs in via GitHub OAuth
* Content can be created and published via Decap

---

# 🚀 Deployment (GitHub Pages)

Deployment is handled via **GitHub Pages** with a custom domain.

## Domain

```
https://www.missingmaps.org
```

## Deployment Mode

* Source: GitHub Pages (branch or GitHub Actions depending on workflow)
* CNAME managed via GitHub Pages settings
* HTTPS enforced via GitHub Pages SSL

### Migration Note

The legacy site repository (`missingmaps.github.io`) remains online to serve historical assets and prevent broken links.

---

# 🤖 GitHub Actions Workflows

This repository includes CI/CD automation for building, testing, and deploying the site.

## 📦 deploy.yml — Build & Deploy Pipeline

**Triggers:**

* Push to main/master/publish branches
* Pull requests

**Features:**

* Ruby and Node.js environment setup
* Dependency caching for faster builds
* Jekyll build pipeline
* Multilingual site generation (4 languages)
* Automated deployment to GitHub Pages
* Build artifact retention for debugging

---

## 🧪 test.yml — Pull Request Validation

**Triggers:** Pull requests

**Checks:**

* Translation YAML validation
* Language directory structure checks
* Content generation tests for all languages
* Feed (RSS/XML) generation validation
* Asset exclusion checks
* Translation completeness verification

---

## 🔒 security.yml — Security & Dependency Monitoring

**Triggers:**

* Weekly schedule (Sundays)
* Dependency file changes
* Manual workflow dispatch

**Features:**

* NPM security audit
* Ruby bundler-audit scanning
* Outdated dependency reporting
* Code quality linting
* Automated vulnerability alerts
  n

---

# 🔁 Dependabot Configuration

Automated dependency updates are configured in:

```
.github/dependabot.yml
```

Update schedule:

* **NPM packages:** Weekly (grouped PRs)
* **Ruby gems:** Weekly with security priority
* **GitHub Actions:** Weekly updates

PR management:

* Auto-assigned to maintainers
* Grouped by dev vs production dependencies

---

# 🌱 Branch Strategy

| Branch            | Purpose                                  |
| ----------------- | ---------------------------------------- |
| `publish`         | Production deployment to missingmaps.org |
| `main` / `master` | Development branch                       |
| Feature branches  | PR testing and review                    |

---

# 📊 Monitoring & Maintenance

* GitHub Actions status badges in README
* Automated CI failure notifications
* Security vulnerability alerts
* Build artifacts retained for debugging (30 days)

---

# 🛠️ Local Development

```bash
bundle install
bundle exec jekyll serve
```

Local preview:

```
http://localhost:4000
```

---

# ⚠️ Important Notes

* Only **one repository can own the custom domain at a time** in GitHub Pages.
* The legacy repository must NOT contain a `CNAME` for missingmaps.org.
* Hardcoded historical assets remain hosted in the legacy repo to avoid broken URLs.
* Always test via the GitHub Pages preview URL before switching the domain.

---

# 📩 Contact

For technical issues or maintainership questions:

**Missing Maps Tech Team**
Email: [info@hotosm.org](mailto:info@hotosm.org)

---
