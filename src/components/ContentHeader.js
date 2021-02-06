import Button from './Button'

const ContentHeader = (props) => {

    return (
      <header className="contentHeader">
        <h1>Task Tracker</h1>
        <Button text={props.headerButton.text} onClick={props.headerButton.onClick}/>
      </header>
    )
}

export default ContentHeader;
