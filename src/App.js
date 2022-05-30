import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import MainNavigation from './componenets/layout/MainNavigation';

function App() {
  //Switch tells the differnt route only one of them will be displayed at the same time, if you don't do that the base path component and the other component path you call up will be display at the same time.

  //if you don't use exact on the home path, once switch function find the home path it will stop because it's the first on the list. If you want to stop that, you need to use exact on the home route so the function will keep on looking until it founds the exact name path.
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/' exact={true}>
          <AllMeetupsPage />
        </Route>

        <Route path='/favorites'>
          <Favorites />
        </Route>

        <Route path='/new-meetup'>
          <NewMeetup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
