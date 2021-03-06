var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');
var uuid = require('node-uuid');
var moment = require('moment');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set search text', () => {
            var action = {
                type:'SET_SEARCH_TEXT',
                searchText: 'dog'
            }
            var res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        })
    });

    describe('showCompletedReducer', () => {
        it('should set show completed', () => {
            var action = {
                type:'TOGGLE_SHOW_COMPLETED',
            }
            var res = reducers.showCompletedReducer(df(false), df(action));

            expect(res).toEqual(true);
        })
    });

    describe('toodosReducer', () => {
        it('should add new todo', () => {
            var action = {
                type:'ADD_TODO',
                text:'walk the dog'
            }
            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        })

        it('should toggle todo', () => {

             var todos = [
                 {
                     id:10,
                     text:'eat breakfast',
                     completed:false,
                     createdAt: moment().unix(),
                     completedAt: undefined
                 }
             ]

            var action = {
                type:'TOGGLE_TODO',
                id:10
            }

            var res = reducers.todosReducer(df(todos), df(action));
            expect(res[0].completed).toEqual(true);
            expect(res[0].completedAt).toExist();
        })
    });
})
