import toast from "react-hot-toast";
import { REACTION_TYPE } from "../../utils/reactions";

const API_URL = import.meta.env.VITE_API_URL;

const updateReaction = async (articleId, type) => {
    let reactionType = null;
    for (const [key, value] of Object.entries(REACTION_TYPE)) {
        if (value === type) {
            reactionType = key;
            break;
        }
    }

    try {
        let res = await fetch(`${API_URL}engagement/articles/reactions/engage/${articleId}`, {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(reactionType),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        let data = await res.json();
        if (res.ok) {
            toast.success('Reaction updated!');
        } else if (res.status === 403) {
            toast.error('Unauthorized! Please login to react.');
        } else {
            toast.error("Failed to update reaction.");
        }
        return data;
    } catch (error) {
        console.error('Error updating reaction:', error);
        return false;
    }
}

export { updateReaction };