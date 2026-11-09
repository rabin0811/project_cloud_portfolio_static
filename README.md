# project_cloud_portfolio_static

## Cloud Computing Static Portfolios

A collection of static portfolio and website versions created for cloud computing coursework.

## Verified

- **2026-11-08** — every variant served with `python -m http.server` and returned **HTTP 200**.
- All local HTML links and assets resolve after fixes.
- Fixed broken absolute paths in `potfoliyo/index.html`, `potfoliyo/contact.html`, and `potfoliyo/asstets/index.html`.
- Fixed the profile image path in `rabin-humagain/` (`assets/images/` → `assets/image/`).
- Replaced the empty `asstets/resume.pdf` with the real resume file.

## Variants

| Folder | Description |
|---|---|
| `frontend/potfoliyo/` | Portfolio version 1 |
| `frontend/static-potfoliyo/` | Portfolio version 2 |
| `frontend/rabin-humagain/` | Portfolio version 3 |
| `frontend/new-folder/` | Early website draft |
| `frontend/new-folder-2/` | Multi-page website draft |

Each variant has its own `index.html`.

## How to run

Pick a variant and serve its folder:

```powershell
cd D:\PROJECTS_READY\project_cloud_portfolio_static\frontend\potfoliyo
python -m http.server 8000
```

Then open <http://localhost:8000>.

For another variant, replace `potfoliyo` with `static-potfoliyo`, `rabin-humagain`, `new-folder`, or `new-folder-2`.

## Notes

- These are static sites. `potfoliyo/db.js` is a small optional database helper and is not required to view the static pages.
- Original location: `D:\Computers Files\4th sem\Cloud computing` (static portfolio folders).
- The original project folders are untouched.
