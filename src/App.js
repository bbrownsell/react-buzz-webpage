import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Pages';
import Cards from './Components/Cards/Cards';
import About from './Components/About/About';
import Contact from './Components/Form/Form';
import Meet from './Components/Meet/Meet';
import Blog from './Components/Blog Section/Blog';




function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/cards" component={Cards}/>
        <Route path="/about-us" component={About}/>
        <Route path="/team" component={Meet}/>
        <Route path="/info" component={Blog}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
