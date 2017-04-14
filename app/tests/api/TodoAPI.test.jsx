var expect = require('expect');
var TodoAPI = require('TodoAPi');

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });
    it('should exist', () => {
        expect(TodoAPI).toExist();
    })

describe('setTodosAPI', () => {
    it('should set valid todos array', () => {
        var todos = [{
            id:23,
            text:'test all files',
            completed: false
        }]
        TodoAPI.setTodos(todos);
        var actualTodos = JSON.parse(localStorage.getItem('todos'));
        expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
        var badTodos = {
            id:23,
            text:'test all files',
            completed: false
        };
        TodoAPI.setTodos(badTodos);
        var actualTodos = JSON.parse(localStorage.getItem('todos'));
        expect(actualTodos).toBe(null);
    })
});

describe('getTodos', () => {
    it('should return empty array for bad localstorage data', () => {
        var actualTodos = TodoAPI.getTodos();
        expect(actualTodos).toEqual([]);
    });
    it('should not return empty array for correct localstorage data', () => {
        var todos = [{
            id:23,
            text:'test all files',
            completed: true
        }]
        TodoAPI.setTodos(todos);
        var actualTodos = TodoAPI.getTodos();
        expect(actualTodos).toEqual(todos);
    });

})


});
