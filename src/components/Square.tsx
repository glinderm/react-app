import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export function Square({ value, onClick }) {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
}