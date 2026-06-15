# ClaudeTddCoach

> A hands-on TDD practice environment where Claude acts as your pair-programming coach — keeping you honest through every Red-Green-Refactor cycle.

---

## What and Why

**What it is:** A TypeScript project (Vitest) structured as a collection of TDD exercises. Each exercise starts with a failing test and a skeleton implementation. Your job is to make it green — one small step at a time.

**Why it exists:** Reading about Test-Driven Development is easy. Actually doing it — resisting the urge to write too much code, staying in the cycle, writing the test *first* — is hard. This project pairs you with Claude as a navigator and TDD coach to practice the discipline in real time.

Claude's role is not to write code for you. It watches what you type, calls out when you drift from the cycle, and nudges you back to the smallest possible next step.

---

## How It Works

The session runs as **pair programming** with three roles:

| Role | Who | What they do |
|------|-----|-------------|
| **Driver** | You | Write all code and tests, run the tests |
| **Navigator** | Claude | Read the output, give directional guidance |
| **TDD Coach** | Claude | Name the current TDD phase, say what to do next and why |

### The TDD Cycle

```
        ┌─────────────┐
        │  Write a    │
        │ failing test│
        └──────┬──────┘
               │
               ▼
        ┌─────────────┐
        │  RED: test  │◄──────────────────┐
        │   fails     │                   │
        └──────┬──────┘                   │
               │                          │
               ▼                          │
        ┌─────────────┐                   │
        │ Write just  │                   │
        │ enough code │                   │
        └──────┬──────┘                   │
               │                          │
               ▼                          │
        ┌─────────────┐    Refactor?      │
        │ GREEN: test │──────────────────►┘
        │   passes    │
        └─────────────┘
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) v16+
- npm (bundled with Node)

---

## Getting Started

```bash
# Run all tests once
npm test

# Run tests in watch mode (recommended while coding)
.\node_modules\.bin\vitest.cmd

# Run a single kata
.\node_modules\.bin\vitest.cmd fizzBuzzKata
```

> **Note:** `npx vitest` and `npm install` may not work in all environments (e.g. corporate proxy). Use the direct `.cmd` path above if they don't.

---

## Project Structure

Each TDD exercise lives in its own named subfolder, keeping source and tests separate:

```
ClaudeTddCoach/
├── todoListKata/
│   ├── src/              ← your implementation (gitignored — stays local)
│   ├── tests/
│   │   └── todoList.test.ts
│   └── REQUIREMENTS.md  ← rules + ordered test list
├── fizzBuzzKata/
│   ├── src/              ← your implementation (gitignored — stays local)
│   ├── tests/
│   │   └── fizzBuzz.test.ts
│   └── REQUIREMENTS.md  ← rules + ordered test list
├── vitest.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

> **GitHub policy:** `src/` directories are gitignored. Only tests and `REQUIREMENTS.md` are committed — solutions stay on your machine.

Vitest discovers all test files via `vitest.config.ts` (`**/tests/**/*.test.ts`).

---

## Adding a New Exercise

Before writing any code, follow the kata startup ritual:

Kata folders are named `*Kata` (e.g. `fizzBuzzKata`, `todoListKata`).

1. **Ask Claude to create the folder and write `REQUIREMENTS.md`** with:
   - The rules of the kata
   - A prioritised test list (simplest → most complex)

2. **Review the test list** with Claude — no big jumps between steps

3. **You write the first failing test** in `tests/myKata.test.ts` — test #1 from the list

4. **You write a minimal skeleton** in `src/myKata.ts` — just enough for the test to compile and fail

Then follow the Red → Green → Refactor cycle for each remaining test.

**Example — FizzBuzz:**
```
fizzBuzzKata/
├── src/
│   └── fizzBuzz.ts       ← you write the skeleton (after the test, stays local)
├── tests/
│   └── fizzBuzz.test.ts  ← you write test #1 first (committed to GitHub)
└── REQUIREMENTS.md       ← Claude creates this
```

---

## Running Tests

```bash
# Run all exercises once
npm test

# Run a single kata
.\node_modules\.bin\vitest.cmd fizzBuzzKata

# Watch mode (recommended while coding)
.\node_modules\.bin\vitest.cmd

# Run with coverage report
.\node_modules\.bin\vitest.cmd --coverage

# Lint for code smells (run before refactoring)
npm run lint
```

---

## Reference

- [Claude Code TDD: AI-Assisted Test-Driven Dev Guide](https://claude-world.com/articles/claude-code-tdd-workflow) — the article this project is based on
