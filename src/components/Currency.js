import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const currency = () =>{
    const {choosenCurrency } = useContext(AppContext);

return (
<div className='alert alert-secondary'>Currency $(Default)
{
   <select name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
   <option value="$">$ Dollar</option>
   <option value="£">£ Pound</option>
   <option value="€">€ Euro</option>
    <option value="₹">₹ Ruppee</option>
  </select>	}
  </div>
  );}
export default currency;


