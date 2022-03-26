import React from 'react';
import './Bonus.css'

const Bonus = () => {
    return (
        <div className='bonus-container'>
            <h1>Question and Answer </h1>

            <div className="answer">
                <h2>Question 1 : How React work?</h2>
                <h3>Answer:</h3>
                <h2>Question 2 : Props vs State</h2>
                <h3>Answer:</h3>
                <h2>Question 3 : How useState work?</h2>
                <h3>Answer:</h3>
            </div>
        </div>
    );
};

export default Bonus;