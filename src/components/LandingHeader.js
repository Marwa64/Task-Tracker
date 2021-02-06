import { ReactComponent as Hero} from './hero.svg';

const LandingHeader = (props) => {

    return (
      <div className="headerContainer">
        <header className="landingHeader">
          <div className="landingTitleContainer">
            <h2>Task Tracker</h2>
            <p>Keep track of all your tasks from now on, from work-related tasks to daily tasks. And set a reminder to receive
            an email when the deadline is near!</p>
          </div>
          <span><Hero className="hero"/></span>
        </header>
      </div>
    )
}

export default LandingHeader;
