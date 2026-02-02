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

* Custom color palette for light mode
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

Content is organized into **Jekyll collections, static pages, and language-specific directories**.

```
collections/
  _posts/        → Blog posts (multilingual via front-matter + i18n)
  _projects/     → Project pages
pages/            → English static pages (default language)
cs/               → Czech static pages
fr/               → French static pages
es/               → Spanish static pages
_data/
  i18n/           → Translation strings (YAML)
assets/            → Images, uploads, CSS, JS, fonts
```

### Permalinks

* Blog posts: `/blog/{slug}/`
* Projects: `/projects/{slug}/`
* Pages: `/{page-slug}/` (default language)
* Translated pages: `/{lang}/{page-slug}/`

---

# 🌐 Languages & Internationalization (i18n)

The site supports **four languages**:

| Code | Language          |
| ---- | ----------------- |
| `en` | English (default) |
| `fr` | French            |
| `cs` | Czech             |
| `es` | Spanish           |

## Translation Files

UI strings and navigation labels are stored in:

```
_data/i18n/
  en.yml
  fr.yml
  cs.yml
  es.yml
```

These files contain key/value translation mappings used across templates and components.

## Page & Collection Localization

* **English content** lives in `pages/` and `collections/`
* **Translated pages** live in language folders (`/fr`, `/cs`, `/es`)
* Blog posts and projects can use front-matter fields for localized content, or language-specific files depending on workflow.

## Default Language Behavior

```yaml
languages: [en, fr, cs, es]
default_lang: en
```

* English pages are served at the root (`/about/`)
* Other languages are prefixed (`/fr/about/`, `/cs/about/`, `/es/about/`)

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

# 🤖 GitHub Actions & CI/CD

At the moment, this repository uses **GitHub Pages default Jekyll builds** (Deploy from Branch).
No custom GitHub Actions workflows are configured yet.

If needed in the future, GitHub Actions can be added to:

* Lock Ruby and Node versions
* Run multilingual build validation
* Add linting and content checks
* Deploy via a dedicated `publish` branch

---

# 🔁 Dependencies & Update Policy

This project intentionally **pins Ruby and gem versions** in `Gemfile` to avoid compatibility surprises across contributors and CI.

Current Ruby & gem versions (pinned):

```ruby
source "https://rubygems.org"
ruby "3.4.1"

gem "jekyll", "= 4.4.1"
gem "jekyll-environment-variables", "= 1.0.1"
gem "jekyll-paginate-v2", "= 3.0.0"
gem "webrick", "= 1.9.1"
gem "csv", "= 3.3.5"
```

### Weekly API updates

Even though Ruby dependencies are pinned, the project may rely on **external APIs / data feeds** that are refreshed regularly.

* API/data updates are reviewed/updated **weekly every Monday at 06:00 UTC**
* When changing API integrations, validate output locally before pushing

---

# 🌱 Branch Strategy

Current branch setup:

| Branch | Purpose                           |
| ------ | --------------------------------- |
| `main` | Production and development branch |

At the moment, the project uses a **single-branch workflow**. If the project grows, a recommended future strategy is:

* `main` → development
* `publish` → production deployment
* `feature/*` → individual feature branches with Pull Requests

---

# 📊 Monitoring & Maintenance

Current setup (single-branch, Pages deploy):

* Verify the GitHub Pages build/deploy result after merges to `main`
* Run a local build (`bundle exec jekyll serve`) before opening a PR or merging
* Validate translation YAML files in `_data/i18n/` when editing labels

---

# 🔄 Updating Ruby & Jekyll Dependencies Safely

This project pins Ruby and gem versions to ensure reproducible builds. If dependencies need to be updated, follow this process carefully.

## 1) Update gems locally

```bash
bundle update
```

To update a specific gem only:

```bash
bundle update jekyll
bundle update jekyll-paginate-v2
```

## 2) Verify the site builds

```bash
bundle exec jekyll build
bundle exec jekyll serve
```

Check that:

* The site builds without warnings or errors
* Pagination works
* Multilingual routes load correctly
* No Liquid template errors appear

## 3) Commit lockfile changes

If using `Gemfile.lock`, commit it together with the Gemfile:

```bash
git add Gemfile Gemfile.lock
git commit -m "Update Ruby/Jekyll dependencies"
```

## 4) Deploy cautiously

* Test via the GitHub Pages preview URL before switching production domain
* Avoid updating Ruby and major Jekyll versions during active campaigns

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
