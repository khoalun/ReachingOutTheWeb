import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] ='application/json';

axios.interceptors.request.use(request =>{
    console.log(request);
    //Edit request// add header, do stuffs like that
    return request; //always, otherwise u block the request
}, error => {
    console.log(error);
    return Promise.reject(error);
}); //will affect all requests sent from anywhere from ur app

axios.interceptors.response.use(respone =>{
    console.log(respone);
    return respone; 
}, error => {
    console.log(error);
    return Promise.reject(error);
}); 

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
