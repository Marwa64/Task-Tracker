import Button from './Button'

const Header = (props) => {

    return (
      <header>
        <h1>{props.title}</h1>
        <Button text={props.headerButton.text} onClick={props.headerButton.onClick}/>
      </header>
    )
}

export default Header;
