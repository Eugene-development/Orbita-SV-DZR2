export const get = async ({ params }) => {
    const { idHead } = params;
    const domain = import.meta.env.VITE_API_CRUD;
    const url = `${ domain }/get-head/${ idHead }`;
    const headers = {
        Authorization: `Bearer ${ import.meta.env.VITE_TOKEN }`
    }
    const res = await fetch(url, { headers });
    const rubrics = await res.json();
    return { body: { rubrics } }
}
