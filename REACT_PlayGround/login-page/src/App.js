import './App.css';
import { useState } from 'react';
import Login from './apps/login';
import Todo from './apps/Todo';
import Logins from './apps/Logins';
import Cards from './apps/Cards';
import Tabs from './apps/Tabs';
import Loginds from './apps/Loginds';
function App() {

  return (
    <>
    <Loginds/>
    <Login/>
    <Todo/>
    <Logins/>
    <Cards/>
    <Tabs/>
    </>
  );
}

export default App;
