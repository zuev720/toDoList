import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk(
    'toDo/fetchTasks',
    async (rejectWithValue) => {
        try {
            const response = await fetch('http://localhost:5000/api/toDo');

            if (response.status !== 200) {
                throw new Error('Server Error!');
            }
            return await response.json();

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const createTask = createAsyncThunk(
    'toDo/createTask',
    async (obj, rejectWithValue) => {
        try {
            const response = await fetch('http://localhost:5000/api/toDo', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(obj)
              });

            if (response.status !== 200) {
                throw new Error('Server Error!');
            }
            return await response.json();

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchFilterDataTable = createAsyncThunk(
  'toDo/fetchFilterTasks',
    async (obj, rejectWithValue) => {
        try {
            const {field, term, filterValue} = obj;

            const response = await fetch(`http://localhost:3001?field=${field}&term=${term}&filterValue=${filterValue}`);
            if (response.status !== 200) {
                throw new Error('Server Error!');
            }
            return await response.json();

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const toDoReducer = createSlice({
    name: 'toDo',
    initialState: {
        data: [],
        status: null,
        error: null
    },
    reducers: {
        sortTable: (state, action) => {
            const sortValue = action.payload;
            if (sortValue.field !== null && sortValue.status) {
                state.data.sort((a, b) => {
                    if (a[sortValue.field] < b[sortValue.field]) {
                        return (sortValue.status === 'up') ? -1 : 1;
                    }
                    if (a[sortValue.field] > b[sortValue.field]) {
                        return (sortValue.status === 'up') ? 1 : -1;
                    }
                    return 0;
                });
            }
        }
    },
    extraReducers: {
        [fetchTasks.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchTasks.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.data = action.payload;
        },
        [fetchTasks.rejected]: (state, action) => {
            state.error = action.payload;
            state.status = 'rejected';
        },
        [fetchFilterDataTable.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchFilterDataTable.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.data = action.payload;
        },
        [fetchFilterDataTable.rejected]: (state, action) => {
            state.error = action.payload;
            state.status = 'rejected';
        },
    }
});

export const {sortTable} = toDoReducer.actions;

export default toDoReducer.reducer;