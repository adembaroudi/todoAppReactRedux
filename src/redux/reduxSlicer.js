import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

const reduxSlicer = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveToDo: (state, action) => {
            state.todoList.push(action.payload)
        },
        deleteToDo: (state, action) => {
            state.todoList.splice(...action.payload)
        },

        editToDo: (state, action) => {
            state.todoList[action.payload.index] =
            {
                ...state.todoList[action.payload.index],
                item: action.payload.newInput
            }

        },
        editCheck: (state, action) => {
            state.todoList[action.payload]
                .done = !state.todoList[action.payload]
                    .done;

        }
    }
});

export const {
    saveToDo,
    deleteToDo,
    editToDo,
    editCheck

} = reduxSlicer.actions;
export const selectTodoList = state => state.todoList;
export default reduxSlicer.reducer