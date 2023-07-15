import './App.css';
import UsersList from "../UsersList/UsersList";
import UserEditForm from "../UserEditForm/UserEditForm";

function App() {
    return (
        <div className="App">
            <UsersList/>
            <UserEditForm/>
        </div>
    );
}

export default App;
