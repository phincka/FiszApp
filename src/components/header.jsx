import React from 'react';
import AddForm from './addForm';
import FormToggle from "./formToggle";

const Header = () => {
    return (
        <header className="header">
            <h2 className="header--title"><a href="./"> FiszApp </a></h2>
            <FormToggle title="Dodaj">
                <AddForm />
            </FormToggle>
        </header>
    );
}

export default Header