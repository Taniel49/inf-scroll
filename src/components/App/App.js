import React from 'react';
import './App.css';
import UsersList from "../UsersList/UsersList";
import UserEditForm from "../UserEditForm/UserEditForm";

function App() {
    const [isShowForm, setIsShowForm] = React.useState(false);
    const [formContent, setFormContent] = React.useState({
        id: '',
        firstName: '',
        lastName: '',
        age: '',
        email: ''
    })

    function handleOpenForm(firstName, lastName, age, email, id) {
        setFormContent({
            id: id,
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email
        })
        setIsShowForm(true);
    }

    return (
        <div className="App">
            <UsersList handleOpenForm={handleOpenForm}
            />
            <UserEditForm isShowForm={isShowForm}
                          formContent={formContent}
            />
        </div>
    );
}

export default App;
