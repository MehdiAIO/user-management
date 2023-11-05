import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './AddUser';
import Header from './Header';
import { store } from './redux';
import UpdateUser from './UpdateUser';
import UsersList from './UsersList';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path='/' index element={<UsersList/>}/>
            <Route path='/addUser' element={<AddUser/>}/>
            <Route path='/updateUser/:id' element={<UpdateUser/>}/>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
