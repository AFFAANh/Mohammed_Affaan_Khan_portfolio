# Free GitHub Pages Deployment Guide

Yes, this portfolio can be deployed for free with GitHub Pages because it is a static Vite/React app. Vite builds the app into a static `dist/` folder, and GitHub Pages can host that output.

This guide uses GitHub Pages + GitHub Actions, which is the recommended path for Vite apps because the project needs a build step.

Official references:

- GitHub Pages publishing source docs: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- GitHub Pages custom workflows docs: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- Vite static deployment docs: https://vite.dev/guide/static-deploy

## 1. Choose Your GitHub Pages URL

You have two good options.

### Option A: Main Portfolio URL

Use this if you want:

```text
https://<YOUR_GITHUB_USERNAME>.github.io/
```

Create a GitHub repository named exactly:

```text
<YOUR_GITHUB_USERNAME>.github.io
```

For this option, your current `vite.config.ts` can stay as it is, because Vite's default `base` is `/`.

### Option B: Project URL

Use this if you want:

```text
https://<YOUR_GITHUB_USERNAME>.github.io/3d-portfolio/
```

Create a GitHub repository named:

```text
3d-portfolio
```

For this option, update `vite.config.ts` before deploying:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/3d-portfolio/",
});
```

Important: if your repository name is different, replace `/3d-portfolio/` with `/<YOUR_REPOSITORY_NAME>/`.

## 2. Create a Fresh Public Repository

Because this project started from someone else's cloned template, the safest public deployment is to create a fresh repository history.

Do not push the old `.git` history from the cloned template. A public GitHub repo can expose old commits, old files, and deleted files from history.

Recommended steps:

1. Go to https://github.com/new
2. Create a new public repository.
3. Do not initialize it with a README, `.gitignore`, or license because this project already has those files.
4. Copy the new repository URL. It will look like:

```text
https://github.com/<YOUR_GITHUB_USERNAME>/<REPOSITORY_NAME>.git
```

## 3. Prepare The Local Project

Open PowerShell in this project folder:

```powershell
cd D:\portfolio\3d-portfolio
```

Check that the app builds:

```powershell
npm run build
```

This project already built successfully after the portfolio conversion.

## 4. Reinitialize Git With Clean History

Only do this when you are ready to publish this portfolio as your own fresh repo.

Delete the old cloned template Git history:

```powershell
Remove-Item -Recurse -Force .git
```

Create a fresh Git history:

```powershell
git init
git branch -M main
git add .
git commit -m "Initial portfolio deployment"
```

Connect your new GitHub repository:

```powershell
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<REPOSITORY_NAME>.git
```

Push the code:

```powershell
git push -u origin main
```

## 5. Add The GitHub Actions Deployment Workflow

Create this file:

```text
.github/workflows/deploy.yml
```

Put this inside it:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v6

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload GitHub Pages artifact
        uses: actions/upload-pages-artifact@v4
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Then commit and push it:

```powershell
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

## 6. Enable GitHub Pages

On GitHub:

1. Open your repository.
2. Go to `Settings`.
3. In the left sidebar, click `Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Save if GitHub shows a save button.

After the workflow runs, GitHub will show the live Pages URL in the `Pages` settings and in the workflow deployment summary.

## 7. Check The Deployment

Go to the repository's `Actions` tab.

You should see a workflow named:

```text
Deploy to GitHub Pages
```

Open the latest run and check that both jobs pass:

```text
build
deploy
```

When deployment finishes, open:

```text
https://<YOUR_GITHUB_USERNAME>.github.io/
```

or:

```text
https://<YOUR_GITHUB_USERNAME>.github.io/<REPOSITORY_NAME>/
```

depending on which URL option you chose.

## 8. Common Problems And Fixes

### Blank Page Or Missing Assets

This usually means the Vite `base` is wrong.

For:

```text
https://<YOUR_GITHUB_USERNAME>.github.io/
```

use:

```ts
base: "/"
```

or omit `base`.

For:

```text
https://<YOUR_GITHUB_USERNAME>.github.io/3d-portfolio/
```

use:

```ts
base: "/3d-portfolio/"
```

### Action Fails At `npm ci`

Make sure `package-lock.json` is committed.

### Action Fails At `npm run build`

Run this locally and fix the error shown:

```powershell
npm run build
```

### Pages Shows 404

Check these:

1. Repository is public if you are on GitHub Free.
2. `Settings` -> `Pages` -> `Source` is set to `GitHub Actions`.
3. The workflow completed successfully in the `Actions` tab.
4. The URL includes the repository name if this is a project site.

## 9. After Every Future Change

After editing the portfolio:

```powershell
npm run build
git add .
git commit -m "Update portfolio"
git push
```

GitHub Actions will automatically rebuild and redeploy the site.

## 10. Quick Recommendation For This Portfolio

For the cleanest personal portfolio URL, create a repository named:

```text
<YOUR_GITHUB_USERNAME>.github.io
```

Then keep `vite.config.ts` as:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

Your site will deploy at:

```text
https://<YOUR_GITHUB_USERNAME>.github.io/
```
