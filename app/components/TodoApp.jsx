var React = require('react');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');


var TodoApp = React.createClass({
    getInitialState: function(){
        return {
            todos: [
                {
                    id:1,
                    text: 'walk the dog'
                },
                {
                    id:2,
                    text:'clean the yard'
                },
                {
                    id:3,
                    text:'clean the dishes'
                },
                {
                    id:4,
                    text:'play with cats'
                }
            ]
        }
    },
    handleAddTodo: function(text){
        alert(text);
    },
    render: function(){
        var {todos} = this.state;
        return (
            <div>
                <div className="row">
                    <div className="column small-centered medium-12 large-12">ToDo</div>
                    <div className="column small-centered medium-6 large-4">
                        <TodoList todos={todos}/>
                        <AddTodoForm handleAddTodo={this.handleAddTodo}/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;
