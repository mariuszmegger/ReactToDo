var React = require('react');
var Todo = require('Todo');

var AddTodoForm = React.createClass({
    handleFormSubmit: function(e){
        e.preventDefault();
        var newTodoItem = this.refs.addTodoInput.value;
        if(newTodoItem.length >0){
            this.refs.addTodoInput.value = '';
            this.props.handleAddTodo(newTodoItem);
        }else{
            this.refs.addTodoInput.focus();
        }
    },
    render: function(){
        return(
            <div className="container__footer">
                <form onSubmit={this.handleFormSubmit}>
                    <div><input type="text" ref="addTodoInput" placeholder="Add new item"/></div>
                    <div><input className="button primary" type="submit" value="submit"/></div>
                </form>
            </div>
        );
    }
})

module.exports = AddTodoForm
