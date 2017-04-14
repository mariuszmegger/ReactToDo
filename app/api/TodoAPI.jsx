var $ = require('jQuery');

module.exports = {
    setTodos: function(todos){
        if($.isArray(todos)){
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos:function(){
        var stringTodos = localStorage.getItem('todos');
        var todos = [];
        try{
            todos = JSON.parse(stringTodos);
        }catch(e){
            throw new Error('error in local storage data');
        }

        return $.isArray(todos) ? todos : [];
    },
    filterTodos: function(todos, showCompleted, searchText){
        var filteredTodos = todos;

        //Filter by show completed
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        //Filter by searchText
        if(searchText !== ''){
            filteredTodos = filteredTodos.filter((todo) => {
                return todo.text.toLowerCase().indexOf(searchText) !== -1 ? true : false;
            });
        }


        //Sort todos with non completed first
        filteredTodos.sort((a,b) => {
            if(!a.completed && b.completed){
                return -1;
            } else if(a.completed && !b.completed){
                return 1;
            } else{
                return 0;
            };
        })

        return filteredTodos
    }
}
