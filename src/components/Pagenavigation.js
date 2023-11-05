import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const PageNavigation = ({ title }) => {
    return (
        <>
            <div className='container-fluid Page-navigation'>
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>/{title}
            </div>
        </>
    )
}

export default PageNavigation
