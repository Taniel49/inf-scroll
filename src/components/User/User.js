function User({firstName, lastName, age, email, id, handleOpenForm}) {

    function openForm(){
        handleOpenForm(firstName, lastName, age, email, id)
    }

    return (
        <li>
            <button onClick={openForm}>{lastName + ' ' + firstName}</button>
        </li>
    );
}

export default User;
