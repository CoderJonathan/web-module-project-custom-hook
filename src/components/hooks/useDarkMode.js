import useLocalStorage from "./useLocalStorage.js"

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("Dark Mode Toggle ON", false);

    return [darkMode, setDarkMode];
}

export default useDarkMode;