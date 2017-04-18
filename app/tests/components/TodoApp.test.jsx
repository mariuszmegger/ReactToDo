var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    })

    it('should add todo to the todos state on hanndleAddTodo', () => {

        var todoText = 'test text';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos:[]});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    })

    it('should change completed value in cliked todo  component', () => {

        var todos = [
            {
                id:'sdfsadfas',
                text:'do Something',
                completed: false,
                createdAt: 0,
                completedAt: undefined
            },
        ];

        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos:todos});
        expect(todoApp.state.todos[0].completed).toBe(false);
        expect(todoApp.state.todos[0].completedAt).toNotExist();
        todoApp.handleToggle(todos[0].id);

        expect(todoApp.state.todos[0].completed).toBe(true);
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    })

    it('should remove completedAt from  data object when completed app is clicked', () => {

        var todos = [
            {
                id:'sdfsadfas',
                text:'do Something',
                completed: true,
                createdAt: 1492511805,
                completedAt: 1492511885
            },
        ];

        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos:todos});
        expect(todoApp.state.todos[0].completed).toBe(true);
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
        todoApp.handleToggle(todos[0].id);

        expect(todoApp.state.todos[0].completed).toBe(false);
        expect(todoApp.state.todos[0].completedAt).toNotExist();
    })
})
