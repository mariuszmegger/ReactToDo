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

describe('filterTodos', () => {
    var todos = [
        {
            id:23,
            text:'test all files1',
            completed: true
        },
        {
            id:24,
            text:'this is boring ',
            completed: false
        },
        {
            id:25,
            text:'Eat',
            completed: true
        }
    ];

    it('should return all items if showCompleted is true', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, true, '');
        expect(filteredTodos.length).toBe(3);
    });

    it('should return 2 items if showCompleted is false', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, false, '');
        expect(filteredTodos.length).toBe(1);
    });

    it('should return searched items by search text', () => {
        var searchText = 'this';
        var filteredTodos = TodoAPI.filterTodos(todos, true, searchText);
        expect(filteredTodos.length).toBe(1);
    });

    it('should return all items if searchText is empty', () => {
        var searchText = '';
        var filteredTodos = TodoAPI.filterTodos(todos, true, searchText);
        expect(filteredTodos.length).toBe(3);
    });

    it('should sort by completed status', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, true, '');
        expect(filteredTodos[0].completed).toEqual(todos[1].completed);
    });

})


});
