import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import rootReducer from './rootReducer';
import productSaga from './Product/productSaga';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]

});

sagaMiddleware.run(productSaga)

export default store;


