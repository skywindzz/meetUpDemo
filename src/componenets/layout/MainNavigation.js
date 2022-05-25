import { Link } from 'react-router-dom';
//why you need Link, if you use the usually javascript a href, it sends a request to the server and get the page yiour reuested, however since you've already load the whole app with react, you can use this Link tag to tell react to show the component when needed.

function MainNavigation() {
  return (
    <header>
      <div>React meetup</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All meetups</Link>
          </li>
          <li>
            <Link to='/favorites'>Favorites</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Add new meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
