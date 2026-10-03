---
title: A business app built on a separate data platform
summary: I designed and built the business app in a two-part system. A separate data platform collects and stores the business data. The app reads that data through a read-only API, and each part is updated and scaled separately.
order: 2
stackLine: Django REST · Vue 3 · MySQL
next: doc-publisher
nextLabel: Docs publishing case study
meta:
  role: Architect and lead developer for the business app. I didn't design the data platform.
  scope: Two apps · one read-only API
  stack: Django REST, Vue 3, MySQL, Nginx
  status: In production
card:
  flow: [ingestion, data platform, read-only /v1 API, business app]
  highlight: 2
  points:
    - The platform stores the business data. The app handles users, permissions and business rules.
    - If the platform is down, the app shows a message instead of an error, and a health check flags it.
    - Both run on one server today and can move to separate servers with a config change.
designCaption: The platform stores the data. The app reads it through a read-only API.
diagram:
  width: 1096
  height: 432
  chain: [source, platform, api, app, staff]
  bands:
    - { x: 232, y: 160, w: 632, h: 112, label: shared server }
  nodes:
    - { id: health, title: Health check, sub: every minute, x: 464, y: 40, variant: dashed }
    - { id: source, title: Field-service platform, sub: source of record, x: 32, y: 176 }
    - { id: platform, title: Data platform, sub: ingests & owns data, x: 248, y: 176 }
    - { id: api, title: /v1 API, sub: read-only · versioned, x: 464, y: 176, variant: highlight }
    - { id: app, title: Business app, sub: Django REST · Vue 3, x: 680, y: 176 }
    - { id: staff, title: Staff, sub: dashboards · pay rules, x: 896, y: 176 }
    - { id: canonical, title: Business data, sub: platform-owned, x: 248, y: 312 }
    - { id: appdb, title: App database, sub: users · roles · rules, x: 680, y: 312 }
  edges:
    - { from: source, to: platform, fromSide: right, toSide: left, kind: main }
    - { from: platform, to: api, fromSide: right, toSide: left, kind: main }
    - { from: api, to: app, fromSide: right, toSide: left, kind: main }
    - { from: app, to: staff, fromSide: right, toSide: left, kind: main }
    - { from: health, to: api, fromSide: bottom, toSide: top, kind: dashed }
    - { from: platform, to: canonical, fromSide: bottom, toSide: top }
    - { from: app, to: appdb, fromSide: bottom, toSide: top }
decisions:
  - title: Read data through an API
    text: The app doesn't connect to the platform's database. It reads data through a read-only API. Either side can be changed without breaking the other.
  - title: Handle outages
    text: If the platform is down, the app shows a "data unavailable" message instead of an error. A health check runs every minute and shows the outage on the monitoring page.
  - title: Role-based permissions
    text: Each endpoint checks the user's permissions. Admins manage roles in the app instead of in code.
  - title: Ready to split
    text: Both parts run on one server today. They can move to separate servers by changing one setting.
outcomes:
  - The data platform and the app are released separately.
  - Developers can test with production data, since the API is read-only.
  - Either part can be scaled or moved to the cloud independently.
azure:
  intro: How each part could map to Azure services, based on what I'm studying.
  rows:
    - {
        now: Both parts on one VM behind Nginx,
        azure: 'Two App Services (or Container Apps), scaled separately',
      }
    - { now: Read-only /v1 API with API keys, azure: Azure API Management in front of the platform }
    - { now: Minutely health-check job, azure: Application Insights availability tests and alerts }
    - { now: 'Shared MySQL server, separate schemas', azure: Separate Azure Database for MySQL servers }
---

Before the split, one app handled everything: importing data from the field-service platform, storing it, and running dashboards, pay rules and user management.

A change to a dashboard could break the data import, and a problem in one part could take down the whole app.
