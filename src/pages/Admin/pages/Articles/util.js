const BASE_URL = import.meta.env.VITE_API_URL;

const getArticles = async () => {
    try {
        let res = await fetch(`${BASE_URL}articles/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        let data = await res.json();
        // console.log("data", data);
        return data;
    } catch (error) {
        console.error("Error fetching articles:", error);
        return [];
    }
};

const getArticleByCategoryId = async (categoryId) => {
    try {
        let res = await fetch(`${BASE_URL}articles/category?catId=${categoryId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        let data = await res.json();
        return data;
    } catch (error) {
        console.error(
            `Error fetching articles for category id ${categoryId}:`,
            error,
        );
        return [];
    }
};

const saveArticle = async (article, isPublished, categoryId) => {
    let payload = {
        "title": article.title,
        "description": article.description,
        "coverImageUrl": article.image,
        "published": isPublished,
        "categoryId": categoryId || 1,
        "tags": article.tags,
        "body": article.content,
        "authorId": article.userId || 1,
        "publishedAt": article.date,
    }

    console.log("Payload to be sent:", payload);
    try {
        let res = await fetch(`${BASE_URL}articles/save`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        let data = await res.json();
        return data;
    } catch (error) {
        console.error("Error saving article:", error);
        return null;
    }
};

const deleteArticleById = async (articleId) => {
    try {
        let res = await fetch(`${BASE_URL}articles/delete/${articleId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        let data = await res.json();
        return data;
    } catch (error) {
        console.error(`Error deleting article with id ${articleId}:`, error);
        return null;
    }
};

export { getArticles, saveArticle, getArticleByCategoryId, deleteArticleById };
