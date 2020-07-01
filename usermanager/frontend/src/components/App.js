import React, {Fragment} from "react";
import ReactDOM from "react-dom";

import UsersList from "../components/usersList/usersList"

class App extends React.Component {
    render() {
        return (
        <Fragment>
           <UsersList />
        </Fragment>
        );
    }
}

ReactDOM.render(<App /> , document.getElementById("root"));