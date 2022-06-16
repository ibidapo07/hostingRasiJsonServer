import apiClient from "./client";

const itemsEndpoint = '/items';
const categoryEndpoint = '/category';
const listsEndpoint = '/lists';

const getItems = () => apiClient.get(itemsEndpoint);

const returnCategory = () => apiClient.get(categoryEndpoint);

const storeList = list => {

}

export default {getItems, returnCategory}