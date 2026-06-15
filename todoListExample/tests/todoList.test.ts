import { describe, test, expect } from 'vitest';
import { TodoList } from '../src/todoList';

describe('TodoList', () => {
  describe('addTodo', () => {
    test('should add a todo item', () => {
      const todoList = new TodoList();

      todoList.addTodo('Buy milk');

      const todos = todoList.getTodos();
      expect(todos).toHaveLength(1);
      expect(todos[0].text).toBe('Buy milk');
    });
  });
});
