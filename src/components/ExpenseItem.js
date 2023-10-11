
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) =>{
        const Decrease ={
            name:name,
            cost:10,
        };
            
        
    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td ><button type="button" class="btn btn-success" onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td ><button type="button" class="btn btn-danger" onClick={event => decreaseAllocation(props.name)}>-</button></td>
        <td ><TiDelete size='2em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;