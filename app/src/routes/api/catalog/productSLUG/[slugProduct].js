import pkg from 'lodash';
const { forEach, find } = pkg;
import axios from "axios";
export const get = async ({ params }) => {
  const { slugProduct } = params;
  const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
  };
  const domain = import.meta.env.VITE_API_CRUD;
  const pathAWS = import.meta.env.VITE_IMAGE_PRODUCTS

  const urlProducts = `${domain}/get-all-product/`;
  const allProducts = await axios(urlProducts, { headers });
  let id;
  forEach(allProducts.data, async function(value) {
    let obj = find(value,{ "slug": slugProduct });
    return id = obj.id
  });

  const url = `${domain}/get-product/${id}`;
  const res = await fetch(url, { headers });
  const product = await res.json();
  return { body: { product, pathAWS} };
};
