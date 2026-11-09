# Cloud Portfolio Static Collection — Technical Notes

## Overview

Five static portfolio versions created during the cloud-computing module. They are preserved together so the evolution of the design and the different deployment experiments remain available.

## Variants

| Folder | Description |
|---|---|
| `frontend/potfoliyo/` | First portfolio version |
| `frontend/static-potfoliyo/` | Second portfolio version |
| `frontend/rabin-humagain/` | Third portfolio version |
| `frontend/new-folder/` | Early draft |
| `frontend/new-folder-2/` | Multi-page draft |

## Preview

Each variant has its own `index.html`. Open it directly, or serve the `frontend/` folder:

```powershell
cd frontend
python -m http.server 8083
```

Then open one of:

- <http://localhost:8083/potfoliyo/>
- <http://localhost:8083/static-potfoliyo/>
- <http://localhost:8083/rabin-humagain/>
- <http://localhost:8083/new-folder/>
- <http://localhost:8083/new-folder-2/>

## Verification evidence (2026-11-09)

| Check | Result |
|---|---|
| All five variants and their assets | HTTP 200 |
| Local links | Checked |

## Notes

- These are historical static versions; they are not a single unified application.
- Some variants may share duplicated assets or content.
- There is no backend or database.
- Host any variant independently on a static host.
