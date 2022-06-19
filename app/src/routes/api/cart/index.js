import axios from "axios";

export const get = async () => {
  const domain = import.meta.env.VITE_API_CRUD;
  const url = `${ domain }/get-cart/`;
  const headers = {
    Authorization: `Bearer ${ import.meta.env.VITE_TOKEN }`
  }
  const res = await axios(url, { headers });
  const product = await res.json();
  const pathAWS = import.meta.env.VITE_IMAGE_PRODUCTS
  return { body: { product, pathAWS } }
}
