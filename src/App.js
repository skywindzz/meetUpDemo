import { Route } from 'react-router-dom';
import AllMeetupsPage from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";


function App() {
  return (

    <div>
      <Route path='/'>
        <AllMeetupsPage />
      </Route>
        
      <Route path='/favorites'>
        <Favorites />
      </Route>
    
      <Route path='/new-meetup'>
        <NewMeetup />
      </Route>
    </div>
  )
}

export default App;
