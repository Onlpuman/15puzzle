import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer/counterSlice';
import fieldReducer from './reducer/fieldSlice';
import stopwatchReducer from './reducer/stopwatchSlice';
import themeReducer from './reducer/themeSlice';
const store = configureStore({
    reducer: {
        counter: counterReducer,
        field: fieldReducer,
        stopwatch: stopwatchReducer,
        theme: themeReducer,
    },
});
export default store;
