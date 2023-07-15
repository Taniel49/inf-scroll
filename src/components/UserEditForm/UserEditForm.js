function UserEditForm() {
    return (
        <form className='Form'>
            <div>
                <span>Name:</span>
                <input required={true}
                       type='text'/>
            </div>
            <div>
                <span>Surname:</span>
                <input required={true}
                       type='text'/>
            </div>
            <div>
                <span>Age:</span>
                <input required={true}
                       type='text'/>
            </div>
            <div>
                <span>Email:</span>
                <input required={true}
                       type='text'/>
            </div>
            <button type='submit'>Edit</button>
        </form>
    );
}

export default UserEditForm;
