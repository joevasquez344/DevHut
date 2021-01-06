import React, {useEffect, useState} from 'react'
import './Navbar.css';

import { renderNavbarContent } from '../../helpers/navbar';

const Navbar = (props) => {

    console.log('Props: ', props);
    


    useEffect(() => {

    }, [])
    return (
        <div className='navbar'>
            <h4>Dev Reminders</h4>
            <button>Logout</button>
        </div>
    )
}

export default Navbar
