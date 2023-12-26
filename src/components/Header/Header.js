import React from 'react';
import {Link} from "react-router-dom";

function Header(){
    return <div className='header'>
        <Link to="/" className='title'>QUIZ-O-MANIA</Link>
    </div>
}
export default Header;