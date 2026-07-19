<h1 align="center">⚛️ React.js Learning Journey</h1>

<p align="center">
  25 topics, 6 phases — from JSX fundamentals to five different authentication strategies.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
  <img src="https://img.shields.io/badge/Auth0-EB5424?style=for-the-badge&logo=auth0&logoColor=white" />
</p>

<p align="center">
  Built while training as a <b>MERN Stack Developer Trainee</b> at <b>ZACoders</b>, under the mentorship of <b>Muhammad Raheel</b>.
</p>

---

## 🧭 Learning Architecture

Rather than a flat list, the repo is structured as a progression — each phase depends on the concepts learned in the one before it.

```
PHASE 1 · FOUNDATIONS
  JSX, components, and passing data
  → 01-react-basics-fundamentals · 02-props · 03-props-drilling
        │
        ▼
PHASE 2 · HOOKS & STATE
  Managing state, side effects, and global data
  → 04-Hooks · 09-UseEffect · 11-UseContextHook · 12-MoreOnHooks · 13-CustomHook
        │
        ▼
PHASE 3 · APPLIED MINI-PROJECTS
  Putting concepts into real, working apps
  → 05-form-handling-two-way-binding · 06-NotesApp · 07-LocalStorage
  → 08-ApiCalling · 10-GalleryProject
        │
        ▼
PHASE 4 · ADVANCED PATTERNS
  Scaling structure: routing, code-splitting, resilience
  → 14-HOC · 15-ReactRouterDom · 16-LazyLoading · 17-ErrorBoundary
        │
        ▼
PHASE 5 · FORMS & VALIDATION
  Schema-validated forms + full CRUD w/ search & pagination
  → 18-ReactHookForm · 19-Yup · 20-CURD
        │
        ▼
PHASE 6 · AUTHENTICATION
  Five auth strategies compared, side by side
  → 21-Auth-localStorage · 22-Auth-Cookies · 23-Auth-token
  → 24-Auth-jwtToken · 25-Auth0
```

---

## 🗂️ Folder Structure

```
04-react-js/
│
├── 01-react-basics-fundamentals/     # JSX, components, the React mental model
├── 02-props/                         # Passing data between components
├── 03-props-drilling/                # The props-drilling problem
│
├── 04-Hooks/                         # Introduction to React Hooks
├── 09-UseEffect/                     # Side effects & component lifecycle
├── 11-UseContextHook/                # Global state via Context API
├── 12-MoreOnHooks/                   # Deeper dive into built-in hooks
├── 13-CustomHook/                    # Building your own reusable hooks
│
├── 05-form-handling-two-way-binding/ # Controlled inputs, two-way binding
├── 06-NotesApp/                      # Mini project: state + forms
├── 07-LocalStorage/                  # Persisting state in the browser
├── 08-ApiCalling/                    # Fetching data from external APIs
├── 10-GalleryProject/                # Applied project: API + effects
│
├── 14-HOC/                           # Higher-Order Components pattern
├── 15-ReactRouterDom/                # Client-side routing
├── 16-LazyLoading/                   # Code-splitting, lazy components
├── 17-ErrorBoundary/                 # Graceful error handling
│
├── 18-ReactHookForm/                 # Forms + Zod schema validation
├── 19-Yup/                           # Schema validation with Yup
├── 20-CURD/                          # Full CRUD, search & pagination
│
├── 21-Auth-localStorage/             # Auth strategy 1: localStorage
├── 22-Auth-Cookies/                  # Auth strategy 2: cookies
├── 23-Auth-token/                    # Auth strategy 3: token-based
├── 24-Auth-jwtToken/                 # Auth strategy 4: JWT
└── 25-Auth0/                         # Auth strategy 5: Auth0
```

---

## 🔐 Authentication, Compared

The last phase isn't just "add login" — it's five implementations of the same problem, side by side, so the trade-offs are actually visible:

| Strategy | Folder | Where the session lives |
|---|---|---|
| LocalStorage | `21-Auth-localStorage` | Browser storage, client-managed |
| Cookies | `22-Auth-Cookies` | HTTP cookie, server-set |
| Token-based | `23-Auth-token` | Bearer token attached per request |
| JWT | `24-Auth-jwtToken` | Signed, stateless JSON Web Token |
| Auth0 | `25-Auth0` | Delegated to a third-party identity provider |

---

## 🛠️ Tech Stack

- **Library:** React.js
- **Routing:** React Router DOM
- **Forms & Validation:** React Hook Form, Zod, Yup
- **Auth:** LocalStorage, Cookies, Tokens, JWT, Auth0
- **State:** useState, useContext, custom hooks, HOCs

---

## ▶️ Getting Started

```bash
git clone https://github.com/Eman-Nazir/04-react-js.git
cd 04-react-js/<folder-name>
npm install
npm run dev
```

Each numbered folder is an independent mini-project — `cd` into whichever topic you want to explore and run it on its own.

---

## 🙋‍♀️ About

Built by **Eman Nazir** — BS Computer Science student, MERN Stack Developer Trainee at **ZACoders**, and creator of the **#100DaysOfWebDevelopment** learning series on LinkedIn.

📌 `#100DaysOfWebDevelopment` `#ReactJS` `#MERNStack` `#ZACoders`
