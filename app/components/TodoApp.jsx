var React = require('react');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState: function(){
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id:uuid(),
                    text: 'walk the dog'
                },
                {
                    id:uuid(),
                    text:'clean the yard'
                },
                {
                    id:uuid(),
                    text:'clean the dishes'
                },
                {
                    id:uuid(),
                    text:'play with cats'
                }
            ]
        }
    },
    handleAddTodo: function(text){
        var {todos} = this.state;
        this.setState({
            todos:[
                ...todos,
                {
                    id:uuid(),
                    text:text
                }
            ]
        })
    },
    handleSearch: function(showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function(){
        var {todos} = this.state;
        return (
            <div>
                <div className="row">
                    <div className="column small-centered medium-12 large-12">ToDo</div>
                    <div className="column small-centered medium-6 large-4">
                        <TodoSearch onSearch={this.handleSearch}/>
                        <TodoList todos={todos}/>
                        <AddTodoForm handleAddTodo={this.handleAddTodo}/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;
