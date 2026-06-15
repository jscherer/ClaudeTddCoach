interface Todo {
  text: string;
}

export class TodoList {
  private todos: Todo[] = [];

  addTodo(text: string): void {
    this.todos.push({ text });
  }

  getTodos(): Todo[] {
    return this.todos;
  }
}
