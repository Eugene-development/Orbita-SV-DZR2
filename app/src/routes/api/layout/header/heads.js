export const get = async () => {
    const domain = import.meta.env.VITE_API_CRUD;
    const url = `${ domain }/get-all-head`;
    const headers = {
        Authorization: `Bearer ${ import.meta.env.VITE_TOKEN }`
    }
    const res = await fetch(url, { headers });
    const heads = await res.json();
    return { body: { heads } }
}
