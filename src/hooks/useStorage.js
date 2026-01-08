const useStorage = () => {
    const getItem = key => localStorage.getItem(key);
    const setItem = (key, data) => localStorage.setItem(key, data);
    const removeItem = key => localStorage.removeItem(key);

    return { getItem, setItem, removeItem };
}

export default useStorage;