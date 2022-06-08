import React, { useState } from  'react';

const AddingForm = (props) => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [summation, setSummation] = useState(0);
    
    const AddingForm = (e) => {
        e.preventDefault();
        const newSum = { number1, number2 };
         setSummation(parseInt(number1)+parseInt(number2));
    
    };

        return( 
            <>
            <div>Hello-dania</div>
            <div>Summation Page</div>
        <form onSubmit={ AddingForm }>
            <div>
                <label>Number1: </label> 
                <input type="number" onChange={ (e) => setNumber1(e.target.value) } />
            </div>
            <div>
                <label>Number2 </label> 
                <input type="number" onChange={ (e) => setNumber2(e.target.value) } />
            </div>
        
            <input type="submit" value="Add" />
        </form>
        <label>{summation}</label>
        </>
   )
        };   


export default AddingForm;