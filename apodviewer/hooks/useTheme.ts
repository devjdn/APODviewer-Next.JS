import { useState, useEffect } from 'react';

const useTheme = () => {
    const [theme, setTheme] = useState<string>(() => {
        // Retrieve the stored theme or default to 'light'
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        // Get the existing class names
        const currentClassNames = document.body.className.split(' ').filter(Boolean);
        
        // Remove old theme class if it exists
        const updatedClassNames = currentClassNames.filter(className => className !== 'light' && className !== 'dark');
        
        // Add the new theme class
        updatedClassNames.push(theme);
        
        // Apply the updated class names to the body
        document.body.className = updatedClassNames.join(' ');

        // Store the theme in localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return { theme, toggleTheme };
};

export default useTheme;
