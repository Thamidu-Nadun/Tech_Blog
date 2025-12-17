const BASE_URL = import.meta.env.VITE_API_URL || '';

const getArticle = async slug => {
    if (typeof slug != 'string') return null;
    try {
        const res = await fetch(`${BASE_URL}articles/slug?slug=${encodeURIComponent(slug)}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching article:', error);
        return null;
    }
}
export { getArticle };