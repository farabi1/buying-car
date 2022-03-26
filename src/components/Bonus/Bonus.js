import React from 'react';
import './Bonus.css'

const Bonus = () => {
    return (
        <div className='bonus-container'>
            <h1>Question and Answer </h1>

            <div className="answer">
                <h2>Question 1 : How React work?</h2>
                <h3>Answer: For client-side application React apply a virtual DOM in JavaScript.when it needs to read or write to the DOM, it will use the virtual representation of it.Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. React DOM update the DOM to match the React elements.this is that because JavaScript is very fast and keep DOM tree in it to speed up its functional process.</h3>
                <h2>Question 2 : How useState work?</h2>
                <h3>Answer: useState is a Hook that allows us to have state variables in functional components.As we pass the initial state to this function and it returns a variable with the current state value and another function to update this value.Class components can have state and lifecycle methods.The useState hook is a special function that takes the initial state as an argument and returns property's.</h3>
            </div>
        </div>
    );
};

export default Bonus;