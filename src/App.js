import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import ScrollToTop from './components/ScrollToTop';
import Gh from './pages/github/Gh';
import Rtdb from './pages/github/Rtdb'

function App() {
  return (
    
      <Router>
          <GlobalStyles />
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/products' component={Products} />
            <Route path='/ssddcodes' component={Gh}/>
            <Route path='/ssddrtdb' component={Rtdb}/>

          </Switch>
          <Footer />
      </Router>
  );
}

export default App;
