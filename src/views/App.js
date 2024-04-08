import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/Mycomponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import ListUsers from './User/ListUsers';
import UserDetail from './User/UserDetail';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo" >
              <ListTodo />
            </Route>
            <Route path="/about" >
              <MyComponent />
            </Route>
            <Route path="/user" exact>
              <ListUsers />
            </Route>
            <Route path="/user/:id">
              <UserDetail />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
      </div>
    </BrowserRouter>
  );
}

export default App;
