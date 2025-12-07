const BASE_URL = import.meta.env.API_URL || 'http://localhost:8080/api/v1/';

/**
 * Fetches all categories from the API.
 * @returns {Promise<Array>} Array of categories
 */
const getCategories = async () => {
    try {
        let res = await fetch(`${BASE_URL}categories/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        let data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}

/**
 * Fetches a category by its ID from the API.
 * @param {string} id - The ID of the category to fetch.
 * @returns {Promise<Object|null>} The category object or null if not found.
 */
const getCategoryById = async (id) => {
    try {
        let res = await fetch(`${BASE_URL}categories/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        let data = await res.json();
        return data;
    } catch (error) {
        console.error(`Error fetching category with id ${id}:`, error);
        return null;
    }
}

/** * Updates a category by its ID.
 * @param {string} id - The ID of the category to update.
 * @param {Object} category - The category data to update.
 * @returns {Promise<Object|null>} The updated category object or null if update failed.
 */
const updateCategoryById = async (id, category) => {
    try {
        let res = await fetch(`${BASE_URL}categories/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": category.name,
                "description": category.description,
                "imageUrl": category.imageUrl
            }),
        });
        let data = await res.json();
        return data;
    } catch (error) {
        console.error(`Error updating category with id ${id}:`, error);
        return null;
    }
}

/** * Deletes a category by its ID.
 * @param {string} id - The ID of the category to delete.
 * @returns {Promise<Object|null>} The response object or null if deletion failed.
 */
const deleteCategoryById = async (id) => {
    try {
        let res = await fetch(`${BASE_URL}categories/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (res.status === 204) {
            return { message: 'Category deleted successfully' };
        }
        return null;
    } catch (error) {
        console.error(`Error deleting category with id ${id}:`, error);
        return null;
    }
}
export { getCategories, getCategoryById, updateCategoryById, deleteCategoryById };