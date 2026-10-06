# kyleengibous.com

Personal site and blog built with [Hugo](https://gohugo.io/) and deployed on [Netlify](https://www.netlify.com/).

The theme lives directly in this repo (`layouts/`, `assets/`) — no theme submodule or external dependencies.

## Run locally

1. Install Hugo **extended** (version pinned in `netlify.toml`) — https://gohugo.io/installation/
1. Clone: `git clone https://github.com/kengibous/engiblog.git`
1. Run `hugo server` and open http://localhost:1313

## Writing a post

```sh
hugo new content posts/my-new-post.md
```

Set `draft = false` when it's ready. Optional front matter: `description`, `tags`, `lastmod` (shows "Updated <date>"), `toc = true/false` (table of contents; automatic for long posts), `comments = false` (hides Disqus).

## Layout

| Path | What |
| --- | --- |
| `content/` | Pages and posts (Markdown) |
| `layouts/` | Hugo templates |
| `assets/css/main.css` | Design tokens + styles (light/dark) |
| `assets/css/syntax.css` | Code highlighting (`hugo gen chromastyles`) |
| `assets/css/custom.css` | Your overrides, loaded last |
| `assets/icons/` | SVG icons ([Bootstrap Icons](https://icons.getbootstrap.com/), MIT) |
| `static/` | Files copied as-is (avatar, favicons) |

## Netlify

Analytics: set `goatcounter` in `hugo.toml` to your [GoatCounter](https://www.goatcounter.com) site code. It only loads on production builds.

`/llms.txt` (an index of the site for AI tools, see https://llmstxt.org) is generated on every build from `layouts/home.llms.txt` — no manual updates needed.

`netlify.toml` sets the build command, Hugo version, deploy-preview base URLs, security/caching headers and redirects.
The contact form uses Netlify Forms (`data-netlify="true"`) with reCAPTCHA and a honeypot field.
