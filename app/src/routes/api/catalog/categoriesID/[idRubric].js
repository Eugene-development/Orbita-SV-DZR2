export const get = async ({ params }) => {
    const { idRubric } = params;
    const domain = import.meta.env.VITE_API_CRUD;
    const url = `${ domain }/get-rubric/${ idRubric }`;
    const headers = {
        Authorization: `Bearer ${ import.meta.env.VITE_TOKEN }`
    }
    const res = await fetch(url, { headers });
    const categories = await res.json();
    return { body: { categories } }
}
