import Card from "../ui/Card";
import classes from './NewMeetUpForm.module.css';


function NewMeetUpForm(props) { 
  return (
    <Card>
      <form className={ classes.form }>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="test" required id="title" />
        </div>
      </form>
    </Card>
  )
} 

export default NewMeetUpForm;