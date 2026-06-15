# ClaudeTddCoach

> A hands-on TDD practice environment where Claude acts as your pair-programming coach — keeping you honest through every Red-Green-Refactor cycle.

---

## What and Why

**What it is:** A JavaScript project (Jest) structured as a collection of TDD exercises. Each exercise starts with a failing test and a skeleton implementation. Your job is to make it green — one small step at a time.

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
# Install dependencies
npm install

# Run all tests once
npm test

# Run tests in watch mode (recommended while coding)
npm test -- --watch
```

---

## Project Structure

Each TDD exercise lives in its own named subfolder, keeping source and tests separate:

```
ClaudeTddCoach/
├── todoListExample/
│   ├── src/
│   │   └── todoList.js       ← implementation (starts minimal)
│   └── tests/
│       └── todoList.test.js  ← your tests go here
├── package.json
└── README.md
```

Jest automatically discovers all test files matching `**/tests/**/*.test.js`.

---

## Adding a New Exercise

1. Create a new folder: `mkdir -p myExercise/src myExercise/tests`
2. Add a skeleton source file in `myExercise/src/`
3. Write your first failing test in `myExercise/tests/myExercise.test.js`
4. Use `require('../src/<file>')` to import from the test

Example:
```
fizzBuzzExample/
├── src/
│   └── fizzBuzz.js
└── tests/
    └── fizzBuzz.test.js
```

---

## Running Tests

```bash
# Run all exercises
npx jest

# Run a single exercise
npx jest --testPathPattern="todoListExample"

# Run with coverage report
npx jest --coverage

# Watch mode
npx jest --watch
```

---

## Reference

- [Claude Code TDD: AI-Assisted Test-Driven Dev Guide](https://claude-world.com/articles/claude-code-tdd-workflow) — the article this project is based on
