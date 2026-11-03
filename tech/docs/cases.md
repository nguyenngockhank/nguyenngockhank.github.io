# AI Cases 




## AGENTS.md 

```
# Project Instructions

## Before Working
1. Read docs/index.md.
2. Identify the relevant domain and execution flow.
3. Inspect the actual source files before making assumptions.
4. Check related tests and dependencies.

## Architecture
- Follow existing module boundaries.
- Do not introduce new abstractions without justification.
- Prefer existing utilities and hooks.

## After Changes
- Run relevant tests.
- Update architecture documentation if behavior or boundaries changed.
- Regenerate structural indexes when source structure changes.
```

## docs/index.md

docs/index.md – Điểm khởi đầu kiến thức
Đây là file giúp Agent định hướng.

```
# Codebase Knowledge Index

## Architecture
- [System Overview](architecture/overview.md)
- [Module Map](architecture/module-map.md)
- [Dependencies](architecture/dependency-map.md)

## Domains
- [Authentication](domains/authentication.md)
- [Social](domains/social.md)
- [Subscription](domains/subscription.md)

## Execution Flows
- [App Startup](flows/app-startup.md)
- [Purchase](flows/purchase-flow.md)

## Generated Indexes
- File Index: generated/file-index.json
- Symbol Index: generated/symbol-index.json
- Dependency Graph: generated/dependency-graph.json

## Instructions
Always verify documentation against actual source code.
```