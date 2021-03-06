import React, { Component  } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import logo from "./logo.png";
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="container ">
                        <nav className="navbar navbar-expand-lg navbar-dark">
                            <a class="navbar-brand" href="https://github.com/DIvyanshSC" target="_blank">
                                <img src={logo} width="30" height="30" alt="google.com" />
                            </a>
                            <Link to="/" className="navbar-brand text-white">MERN-Stack Todo App</Link>
                            <div className="collpase navbar-collapse">
                                <ul className="navbar-nav mr-auto">
                                    <li className="navbar-item">
                                        <Link to="/" className="nav-link text-white">Todos</Link>
                                    </li>
                                    <li className="navbar-item">
                                        <Link to="/create" className="nav-link text-white">Create Todo</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <br/>
                        <Route path="/" exact component={TodosList} />
                        <Route path="/edit/:id" component={EditTodo} />
                        <Route path="/create" component={CreateTodo} />
                    </div>
                </Router>
            </div>
        );
    }
};
export default App;