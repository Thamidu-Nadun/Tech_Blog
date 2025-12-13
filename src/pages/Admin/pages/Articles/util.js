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

export { getArticles, getArticleByCategoryId, deleteArticleById };
