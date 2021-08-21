import '../styling/FancyButton.css'

interface FancyButtonProps {
  className?: string;
  text?: string;
  disabled?: boolean;
  onButtonClick?: any;
  children?: any,
}

const FancyButton = (props:FancyButtonProps) => {
  return (
    <button 
      className={props.className ? "fancy-button " + props.className : "fancy-button"}
      disabled={props.disabled}
      onClick={props.onButtonClick}
    >
      {props.children !== undefined ? props.children : <div>{props.text}</div>}
    </button>
  );
}

export default FancyButton;