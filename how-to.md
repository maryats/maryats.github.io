## Development Workflow

* Develop in the "hugo" branch.
  * See https://gohugo.io for docs on how to do so.
* Commit everything.
* Run `./deploy.sh`.
* Run the following:
  * `git add public`
  * `git commit -m “public”`
  * `git push`

## Directory Structure
The directory structure defines how Hugo generates the final website. See https://gohugo.io/getting-started/directory-structure for the core concepts. Project-specific details follow:

* **`archetypes/`**
* **`assets/`**
  * **`sass/`**
    * **`main.scss`** - Root style file that sets up utilities and imports subpage styles.
    * **`_variables.scss`** - Shared variables.
    * **`_mixins.scss`** - Shared mixins.
    * **`404.scss`** - 404 page styles.
    * **`about.scss`** - About page styles.
    * **`archive.scss`** - Portfolio archive page styles.
    * **`blog.scss`** - Blog page styles.
    * **`index.scss`** - Home page styles.
    * **`nav.scss`** - Navigation bar styles.
    * **`portfolio.scss`** - Portfolio gallery page styles.
    * **`social-links.scss`** - Styles the social links in the site footer.
* **`content/`**
  * **`about/`** - About page.
  * **`archive/`** - Archive page. Shows all pages under `portfolio/` that have `portfolio: false` and `draft: false`.
  * **`blog/`** - Blog page.
  * **`portfolio/`** - No index file; this gallery pages shows all projects with `portfolio: true` and `draft: false`. All project pages live under this directory.
  * **`_index.html`** - Home page html.
* **`layouts/`** - Layout definitions for each page.
  * **`_default/`**
  * **`about/`**
  * **`archive/`**
  * **`blog/`**
  * **`partials/`**
* **`public/`** - Nested Git repository used by `deploy.sh`. Don't modify this dir manually.
* **`resources/`** - Used for sass files.
* **`static/`** - All static assets; Hugo will copy these without modifying them.
  * **`about/`** - About page assets.
  * **`css/`** - Third-party CSS libraries.
  * **`favicons/`** - Website favicons.
  * **`icons/`** - SVGs.
  * **`images/`** - Non-SVG images used throughout the website.
  * **`js/`**
    * **`draw.js`** - Home page drawing functionality.
    * **`nav.js`** - Mobile navigation bar functionality.
  * **`portfolio/`** - Contains sub-directories with images for each project page. Each non-draft project page must have a `thumb.gif` in its sub-directory; these are used for the portfolio gallery page.
* **`deploy.sh`** - Commit changes, then run this script to generate the updated website to `public/`.
