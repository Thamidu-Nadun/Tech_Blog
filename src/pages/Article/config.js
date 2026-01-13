const themes = {
    dracula: () => import('./themes/dracula-dark.css'),
    andromeda: () => import('./themes/andromeda.css'),
    vira: () => import('./themes/vira.css'),
};

/**
 * Load a PrismJS theme dynamically.
 * @param {string} theme 
 */
export const loadTheme = async (theme) => {
    const loader = themes[theme];
    if (!loader) {
        throw new Error(`Theme "${theme}" is not supported.`);
    }
    await loader();
};

/**
 * Supported programming languages for syntax highlighting.
 */
const languages = {
    javascript: () => import('prismjs/components/prism-javascript'),
    python: () => import('prismjs/components/prism-python'),
    java: () => import('prismjs/components/prism-java'),
    rust: () => import('prismjs/components/prism-rust'),
    c: () => import('prismjs/components/prism-c'),
    cpp: () => import('prismjs/components/prism-cpp'),
    dart: () => import('prismjs/components/prism-dart'),
    jsx: () => import('prismjs/components/prism-jsx'),
    tsx: () => import('prismjs/components/prism-tsx'),
    typescript: () => import('prismjs/components/prism-typescript'),
    ruby: () => import('prismjs/components/prism-ruby'),
    go: () => import('prismjs/components/prism-go'),
    css: () => import('prismjs/components/prism-css'),
    bash: () => import('prismjs/components/prism-bash'),
    json: () => import('prismjs/components/prism-json'),
    markup: () => import('prismjs/components/prism-markup'),
    php: async () => {
        await import('prismjs/components/prism-markup');
        await import('prismjs/components/prism-markup-templating');
        await import('prismjs/components/prism-php');
    },
    http: () => import('prismjs/components/prism-http'),
    asm: () => import('prismjs/components/prism-nasm'),
};


/**
 * Load a PrismJS language dynamically.
 * @param {string} lang 
 */
export const languageHighlightLoader = async (lang) => {
    const loader = languages[lang];
    if (!loader) {
        throw new Error(`Language "${lang}" is not supported.`);
    }
    await loader;
};

export const loadAllLanguages = async () => {
    await Promise.all(
        Object.values(languages).map((loader) => loader())
    );
};