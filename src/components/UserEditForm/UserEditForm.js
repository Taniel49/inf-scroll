import React from 'react';
import {useDispatch} from "react-redux";

function UserEditForm({isShowForm, formContent}) {
    const dispatch = useDispatch();

    const firstNameRef = React.useRef('');
    const lastNameRef = React.useRef('');
    const ageRef = React.useRef('');
    const emailRef = React.useRef('');

    React.useEffect(() => {
        firstNameRef.current.value = formContent.firstName;
        lastNameRef.current.value = formContent.lastName;
        ageRef.current.value = formContent.age;
        emailRef.current.value = formContent.email;
    }, [formContent]);

    function updateUser(firstName, lastName, age, email, id) {
        dispatch({
            type: 'UPDATE_USER', payload: {
                id: id,
                firstName: firstName,
                lastName: lastName,
                age: age,
                email: email
            }
        })
    }

    function submitUserForm(evt) {
        evt.preventDefault();

        updateUser(firstNameRef.current.value,
            lastNameRef.current.value,
            ageRef.current.value,
            emailRef.current.value,
            formContent.id)
    }

    return (
        <form className={`Form ${isShowForm ? 'Form-visible' : ''}`} onSubmit={submitUserForm}>
            <div>
                <span>Name:</span>
                <input required={true}
                       type='text'
                       ref={firstNameRef}/>
            </div>
            <div>
                <span>Surname:</span>
                <input required={true}
                       type='text'
                       ref={lastNameRef}/>
            </div>
            <div>
                <span>Age:</span>
                <input required={true}
                       type='text'
                       ref={ageRef}/>
            </div>
            <div>
                <span>Email:</span>
                <input required={true}
                       type='text'
                       ref={emailRef}/>
            </div>
            <button type='submit'>Edit</button>
        </form>
    );
}

export default UserEditForm;
