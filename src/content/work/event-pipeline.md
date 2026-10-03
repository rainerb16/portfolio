---
title: Event pipeline for business automations
summary: I replaced a set of separate integrations with one queue-based platform. Failed jobs retry automatically, and each automation has a runbook for the team that supports it.
order: 1
stackLine: Node.js · queues · Azure MySQL
next: business-app
nextLabel: Business app case study
meta:
  role: Architect and lead developer
  scope: 15 automations · 4 processes
  stack: Node.js, Redis queues, MySQL on Azure, Nginx, GitHub Actions
  status: In production
  result: About $5,000 a month saved
card:
  flow: [sources, receiver, queue / dept, worker, services]
  highlight: 2
  points:
    - The 15 automations save about $5,000 a month.
    - Incoming events are only queued. A separate worker runs the automations. If a job fails, it retries without affecting the others.
    - Duplicate events are detected and skipped. Test and production events are kept separate.
designCaption: Events go into a queue first. A worker then runs the automation.
diagram:
  width: 1096
  height: 432
  chain: [source, receiver, queues, worker, services]
  nodes:
    - { id: poller, title: Poller, sub: scheduled jobs, x: 248, y: 40 }
    - { id: source, title: Source systems, sub: field-service · HR, x: 32, y: 176 }
    - { id: receiver, title: Receiver, sub: validate · log · ack, x: 248, y: 176 }
    - { id: queues, title: Queues, sub: one per department, x: 464, y: 176, variant: highlight }
    - { id: worker, title: Worker, sub: runs automations, x: 680, y: 176 }
    - { id: services, title: Services, sub: field-service · email, x: 896, y: 176 }
    - { id: eventlog, title: Event log, sub: MySQL on Azure, x: 248, y: 312 }
    - { id: watchdog, title: Watchdog, sub: alerts on failure, x: 680, y: 312, variant: dashed }
  edges:
    - { from: source, to: receiver, fromSide: right, toSide: left, kind: main }
    - { from: receiver, to: queues, fromSide: right, toSide: left, kind: main }
    - { from: queues, to: worker, fromSide: right, toSide: left, kind: main }
    - { from: worker, to: services, fromSide: right, toSide: left, kind: main }
    - { from: source, to: poller, fromSide: top, toSide: left, label: 'no webhook: polled' }
    - { from: poller, to: queues, fromSide: right, toSide: top }
    - { from: receiver, to: eventlog, fromSide: bottom, toSide: top, label: every event }
    - { from: watchdog, to: worker, fromSide: top, toSide: bottom, kind: dashed, label: health }
decisions:
  - title: Queue first, then process
    text: The receiver and poller only add jobs to a queue. Failed jobs can retry, and one failing automation doesn't stop the others.
  - title: Duplicate checks
    text: Each event has an ID and is logged once. If the same event arrives again, it's skipped. No email is sent twice.
  - title: Separate test and production
    text: Each event is marked as test or production. Each environment rejects the other's events before anything is saved.
  - title: Few dependencies
    text: The platform uses eight runtime dependencies. Each one is used in a single module.
outcomes:
  - 15 automations now run on one platform. Together they save about $5,000 a month.
  - Automated tests and a security audit run on every pull request.
  - Each automation has a runbook, and the team has an on-call guide.
azure:
  intro: How each part could map to Azure services, based on what I'm studying.
  rows:
    - { now: Redis-backed queues, azure: Azure Service Bus queues }
    - { now: Worker and poller processes on a VM, azure: Azure Functions or Container Apps }
    - { now: Custom watchdog process, azure: Azure Monitor + Application Insights alerts }
    - { now: Secrets in environment files, azure: Key Vault with managed identity }
    - { now: Hand-provisioned servers, azure: Bicep templates in the same repo }
---

Each department needed its own automations: an alert when a job changed, a task when an appointment moved, an email when someone booked time off. Each one was built as a direct link between two systems.

With 15 of them, it was hard to tell what happened when a system went down, whether an event ran twice, or which script sent an email.
