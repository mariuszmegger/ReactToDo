var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    })

    it('should call handleSearch when value changed', () => {
        var spy = expect.createSpy();
        var todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
        var $el = $(ReactDOM.findDOMNode(todosearch));
        todosearch.refs.searchText.value = 'Search Todo';
        TestUtils.Simulate.change(todosearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false,'Search Todo');
    })

    it('should call handleSearch when checkbox value changed', () => {
        var spy = expect.createSpy();
        var todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
        var $el = $(ReactDOM.findDOMNode(todosearch));
        todosearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todosearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, '');
    })
})
