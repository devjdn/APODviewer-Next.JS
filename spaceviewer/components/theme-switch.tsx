import React from 'react';
import useTheme from '@/hooks/useTheme'; // Adjust the import path based on your project structure
import { Sun, Moon } from 'lucide-react'; // Adjust the import based on the icon library

const ThemeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className={`theme-switcher ${theme}`}>
            {theme === 'light' ? (
                <Moon size={24} /> // Icon for dark mode (when the current theme is light)
            ) : (
                <Sun size={24} /> // Icon for light mode (when the current theme is dark)
            )}
             <p>{theme === 'light' ? 'Dark' : 'Light'} mode</p>
        </button>
    );
};

export default ThemeSwitcher;
