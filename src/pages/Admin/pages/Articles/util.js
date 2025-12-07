const BASE_URL = 'http://localhost:8080/api/v1/';

const getArticleByCategoryId = async (categoryId) => {
    try {
        let res = await fetch(`${BASE_URL}articles/category?catId=${categoryId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        let data = await res.json();
        return data;
    } catch (error) {
        console.error(`Error fetching articles for category id ${categoryId}:`, error);
        return [];
    }
}

export { getArticleByCategoryId };