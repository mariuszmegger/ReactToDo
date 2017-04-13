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
    })

    it('should change completed value in cliked todo  component', () => {

        var todos = [
            {
                id:'sdfsadfas',
                text:'do Something',
                completed: false
            },
        ];

        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos:todos});
        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(todos[0].id);

        expect(todoApp.state.todos[0].completed).toBe(true);
    })
})
