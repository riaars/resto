interface DropdownProps {
  title: string;
  content: string[];
  onClick: (item: string, category: string) => void;
  selectedOption: string;
}
function Dropdown(props: DropdownProps) {
  return (
    <div className="dropdown">
      <button className="dropdown-button">
        {" "}
        {props.selectedOption ? props.selectedOption : `Select ${props.title}`}
      </button>
      <div className="dropdown-content">
        {props.content.map((item: string) => (
          <div
            className="option-list"
            onClick={() => props.onClick(item, props.title)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
