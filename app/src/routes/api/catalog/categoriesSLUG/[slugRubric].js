import pkg from 'lodash';
const { forEach, find } = pkg;
import axios from "axios";
export const get = async ({ params }) => {
  const { slugRubric } = params;
  const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
  };
  const domain = import.meta.env.VITE_API_CRUD;
  const urlRubric = `${domain}/get-all-rubric/`;
  const rubrics = await axios(urlRubric, { headers });
  let id;
  forEach(rubrics.data, async function(value) {
    let obj = find(value,{ "slug": slugRubric });
    return id = obj.id
  });
  const url = `${domain}/get-rubric/${id}`;
  const res = await fetch(url, { headers });
  const categories = await res.json();
  return { body: { categories } };
};
