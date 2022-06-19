import pkg from 'lodash';
const { forEach, find } = pkg;
import axios from "axios";
export const get = async ({ params }) => {
  const { slugHead } = params;
  const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
  };
  const domain = import.meta.env.VITE_API_CRUD;
  const urlHead = `${domain}/get-all-head/`;
  const heads = await axios(urlHead, { headers });
  let id;
  forEach(heads.data, async function(value) {
    let obj = find(value,{ "slug": slugHead });
    return id = obj.id
  });
  const url = `${domain}/get-head/${id}`;
  const res = await fetch(url, { headers });
  const rubrics = await res.json();
  return { body: { rubrics } };
};
