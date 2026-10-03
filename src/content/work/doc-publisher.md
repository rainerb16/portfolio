---
title: Publishing repo docs to SharePoint automatically
summary: I built a tool that copies each repo's documentation to our department's SharePoint site. Docs are written and reviewed in the repo. When they change on the main branch, SharePoint is updated automatically.
order: 3
stackLine: Node.js · GitHub Actions · Microsoft Graph
next: event-pipeline
nextLabel: Event pipeline case study
meta:
  role: Architect and developer
  scope: One shared tool · one workflow file per repo
  stack: Node.js, GitHub Actions, Microsoft Graph API, Entra ID, SharePoint
  status: In production
card:
  flow: [push to main, GitHub Action, doc publisher, SharePoint]
  highlight: 2
  points:
    - The repo is the single source of truth. SharePoint holds every repo's docs in one place.
    - Every repo uses the same short workflow file, which points to one shared tool.
    - SharePoint folders match each repo's folder structure. Links between docs keep working.
designCaption: On every push to main, the tool compares the repo's docs with SharePoint and changes only what's different.
diagram:
  width: 1096
  height: 432
  chain: [repo, action, publisher, sharepoint, staff]
  nodes:
    - { id: other, title: Other repos, sub: same workflow file, x: 248, y: 40, variant: dashed }
    - { id: repo, title: Repo docs, sub: docs/ folder · .md files, x: 32, y: 176 }
    - { id: action, title: GitHub Action, sub: runs on push to main, x: 248, y: 176 }
    - { id: publisher, title: Doc publisher, sub: compare & sync, x: 464, y: 176, variant: highlight }
    - { id: sharepoint, title: SharePoint, sub: same folders as the repo, x: 680, y: 176 }
    - { id: staff, title: Staff, sub: all docs in one place, x: 896, y: 176 }
    - { id: checks, title: Safety checks, sub: delete limit · folder owner, x: 464, y: 312, variant: dashed }
  edges:
    - { from: repo, to: action, fromSide: right, toSide: left, kind: main }
    - { from: action, to: publisher, fromSide: right, toSide: left, kind: main }
    - { from: publisher, to: sharepoint, fromSide: right, toSide: left, kind: main }
    - { from: sharepoint, to: staff, fromSide: right, toSide: left, kind: main }
    - { from: other, to: action, fromSide: bottom, toSide: top, kind: dashed }
    - { from: publisher, to: checks, fromSide: bottom, toSide: top, label: before any delete }
decisions:
  - title: Compare the whole folder every run
    text: Each run checks every doc, not only the files in the last push. A failed run is caught up by the next one, and a second run in a row changes nothing.
  - title: The repo is the source of truth
    text: Docs are edited in GitHub. If someone edits a doc directly in SharePoint, the next run puts the repo's version back.
  - title: Safety checks before deleting
    text: The tool only touches .md files in its own folder. It stops if it doesn't find any docs, if one run would delete more than five files, or if the folder belongs to another repo.
  - title: Secure sign-in
    text: GitHub signs in to Microsoft Entra with a short-lived token (OIDC) that is created for each run. Entra only trusts the main branch of each listed repo, and the app can only write to one SharePoint site.
outcomes:
  - All documentation is in one place on SharePoint, with the same folder structure as the repos.
  - Docs are reviewed in pull requests like code, and SharePoint is updated automatically.
  - A new repo is added with one workflow file.
azure:
  intro: Next steps I'd look at with Azure, based on what I'm studying.
  rows:
    - { now: Run results in the GitHub Actions log, azure: Failed runs raise an Azure Monitor alert }
    - { now: Client secret for local test runs, azure: Local runs use the developer's own Entra sign-in }
---

Each repo keeps its documentation in a `docs/` folder. The department also needed all of that documentation in one place on its SharePoint site, without keeping two copies up to date by hand.
