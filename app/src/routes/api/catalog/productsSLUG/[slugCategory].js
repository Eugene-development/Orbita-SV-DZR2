import pkg from 'lodash';
import axios from "axios";

const {forEach, find} = pkg;
export const get = async ({params, url}) => {
  const {slugCategory} = params;

  // let token;
  // for (let k of Object.entries(import.meta.env)) {
  //   if (k[0] === 'VITE_' + url.hostname) token = (k[1])
  // }
  // console.log(token)
  // const headers = {
  //   Authorization: `Bearer ${token}`
  // };

  const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
  };

  const domain = import.meta.env.VITE_API_CRUD;
  const pathAWS = import.meta.env.VITE_IMAGE_PRODUCTS

  const urlRubric = `${domain}/get-all-category/`;
  const categories = await axios(urlRubric, {headers});
  let id;
  forEach(categories.data, async function (value) {
    let obj = find(value, {"slug": slugCategory});
    return id = obj.id
  });

  const path = `${domain}/get-category/${id}`;
  const res = await fetch(path, {headers});
  const products = await res.json();
  return {body: {products, pathAWS}};
};

