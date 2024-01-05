import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import { all } from 'redux-saga/effects';
import rootReducer from './rootReducer';
import productSaga from './Product/productSaga';
import productNameSaga from './Product Name/productNameSaga';
import productTypeSaga from './Product Type/productTypeSaga';
import supplierSaga from './Supplier/supplierSaga';

function* rootSaga() {
    yield all([
      productSaga(),
      productNameSaga(),
      productTypeSaga(),
      supplierSaga(),
      // ... other sagas
    ]);
  }

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]

});

sagaMiddleware.run(rootSaga)

export default store;


