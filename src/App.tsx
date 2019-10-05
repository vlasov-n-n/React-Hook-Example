import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import Alert from './components/Alert';
import { AlertProvider } from './context/alert/AlertProvider';
import { FirebaseProvider } from './context/firebase/FirebaseProvider';

const App: React.FC = () => {
  return (
    <FirebaseProvider>
      <AlertProvider>
        <BrowserRouter>
          <NavBar/>
          <div className="container pt-4">
            <Alert/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AlertProvider>
    </FirebaseProvider>
  );
};

export default App;
