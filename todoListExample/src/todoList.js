class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(text) {
    this.todos.push({ text });
  }

  getTodos() {
    return this.todos;
  }
}

module.exports = { TodoList };
