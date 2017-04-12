var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodoForm = require('AddTodoForm');

describe('AddTodoForm', () => {
    it('should exist', () => {
        expect(AddTodoForm).toExist();
    })

    it('should call handleAddTodo when valid new todo entered', () => {
        var spy = expect.createSpy();
        var addtodoform = TestUtils.renderIntoDocument(<AddTodoForm handleAddTodo={spy} />);
        var $el = $(ReactDOM.findDOMNode(addtodoform));
        addtodoform.refs.addTodoInput.value = 'New Todo';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith('New Todo');
    })


    it('should not call handleAddTodo when invalid new todo entered', () => {
        var spy = expect.createSpy();
        var addtodoform = TestUtils.renderIntoDocument(<AddTodoForm handleAddTodo={spy} />);
        var $el = $(ReactDOM.findDOMNode(addtodoform));
        addtodoform.refs.addTodoInput.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    })
})
