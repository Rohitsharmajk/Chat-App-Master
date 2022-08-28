import React from 'react';
import { Switch} from 'react-router';
import 'rsuite/dist/styles/rsuite-default.css';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import { ProfileProvider } from './context/profile.context';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import './styles/main.scss'


function App() {
  return(
<ProfileProvider>
<Switch>
  <PublicRoute path='/signin'>
     <SignIn />
  </PublicRoute>
  <PrivateRoute path='/'>
     <Home />
  </PrivateRoute>
</Switch>
</ProfileProvider>
  )
}

export default App;
