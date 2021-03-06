import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ReactDOM from 'react-dom';
import App from './App';

const store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
