import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from "./components/Home/Home";
import TeamDetails from "./components/TeamDetails/TeamDetails";
import Footer from "./Footer/Footer";
import NoMatch from "./NoMatch/NoMatch";
function App() {
  return (
   <Router>
     <Switch>
     <Route path="/home">
      <Home />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/team/:idTeam/">
          <TeamDetails />
        </Route>


      <Route path="*">
        <NoMatch></NoMatch>
        </Route>


     </Switch>


     <Footer />
   </Router>
  );
}

export default App;
