import './Nav.css';
import NavItem from './NavItem'
import React from 'react';

export default props => 
    <aside className="menu-area">
        <nav className='menu'>
            <NavItem link="#/" icon="home" label="Início"/>
            <NavItem link="#/users" icon="users" label="Usuário"/>
        </nav>
    </aside>