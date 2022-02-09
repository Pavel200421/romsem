import React from 'react';
import { Admin, Resource,fetchUtils } from 'react-admin';
import ReviewList from "./ReviewList";
import ReviewEdit from "./ReviewEdit";
import ReviewCreate from "./ReviewCreate";
import authProvider from "./authProvider";
import { createBrowserHistory as createHistory } from 'history';
import simpleRestProvider from 'ra-data-simple-rest';

const history = createHistory();

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const { token } = JSON.parse(localStorage.getItem('auth'));
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};
const dataProvider = simpleRestProvider('http://localhost:3000', httpClient);

const Administrator = () => {
    return (
        <div>
            <Admin authProvider={authProvider} dataProvider={dataProvider}>
                <Resource name="reviews" list={ReviewList} edit={ReviewEdit} create={ReviewCreate}/>
            </Admin>
        </div>
    );
};

export default Administrator;