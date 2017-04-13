var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    })

    it('should call onToggle with element id when clicked ', () => {

        var todos =
            {
                id:'sdfsadfas',
                text:'do Something',
                completed: false
            }


        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todos} onToggle={spy} />);
        var $el = $(ReactDOM.findDOMNode(todo));
        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(todos.id);
    })

})
