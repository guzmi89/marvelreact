import { useEffect, useState } from "react"

export default function useDarkMode() {
    const valor = localStorage.theme === 'dark' ? 'dark' : 'light'

    const [theme, setTheme] = useState(valor);
    const colorTheme = theme === 'light' ? 'dark' : 'light'
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.theme = theme;
    }, [theme], colorTheme)
    return [colorTheme, setTheme];
}