# TodoList Kata

## Rules

Build a `TodoList` class that manages a list of todo items:

- `addTodo(text: string): void` — adds a new todo item with the given text
- `getTodos(): Todo[]` — returns all todos
- `completeTodo(text: string): void` — marks the matching todo as completed
- `getCompletedTodos(): Todo[]` — returns only completed todos
- `getPendingTodos(): Todo[]` — returns only incomplete todos
- `completedCount(): number` — returns the number of completed todos
- `pendingCount(): number` — returns the number of pending todos

Each `Todo` has at minimum: `text: string` and `completed: boolean`.

## Test List

Work through these in order — each one forces a small, specific change:

| # | Behaviour | Why |
|---|-----------|-----|
| 1 | `addTodo("Buy milk")` → list has 1 item with text `"Buy milk"` | first add |
| 2 | add two todos → list has 2 items | multiple items |
| 3 | new `TodoList` → `getTodos()` returns empty array | initial state |
| 4 | `completeTodo("Buy milk")` → item `.completed` is `true` | complete behaviour |
| 5 | complete a todo that doesn't exist → list unchanged | edge case |
| 6 | `getCompletedTodos()` → returns only completed items | filter completed |
| 7 | `getPendingTodos()` → returns only pending items | filter pending |
| 8 | complete all todos → `getPendingTodos()` returns `[]` | all done |
| 9 | `completedCount()` returns number of completed todos | count |
| 10 | `pendingCount()` returns number of pending todos | count |

## Starting Point

Test #1 is already written in `tests/todoList.test.ts` and the minimal skeleton is in `src/todoList.ts`.

Open the test file, pick test #2 from the list above, and write it as the next failing test.
