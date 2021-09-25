import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav/MainNav';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="App">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/series" component={Series}></Route>
            <Route path="/search" component={Search}></Route>
          </Switch>
        </Container>
      </div>

      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
