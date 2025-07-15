import React from 'react';
import './ToggleTheme.css';

const ToggleTheme = ({ toggleTheme, currentTheme }) => {
    return (
        <div className="toggle-container">
            <span>Light</span>
            <label className="switch">
                <input type="checkbox" onChange={toggleTheme} checked={currentTheme === 'dark'} />
                <span className="slider round"></span>
            </label>
            <span>Dark</span>
        </div>
    );
};

export default ToggleTheme;
