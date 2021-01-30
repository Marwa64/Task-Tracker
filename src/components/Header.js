import Button from './Button'

const Header = (props) => {

    return (
      <header>
        <h1>{props.title}</h1>
        <Button text="Add Task" onClick={props.displayForm}/>
      </header>
    )
}

export default Header;
