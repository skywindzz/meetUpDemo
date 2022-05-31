import class from './MeetUpItem.module.css'

function MeetUpItems(props) { 
  return (
    <li className={class.item}>
      <div className={class.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={ class.content }>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.descirption}</p>
      </div>
      <div className={ class.actions}>
        <button>To Favorites</button>
      </div>
    </li>
  );
}

export default MeetUpItems;