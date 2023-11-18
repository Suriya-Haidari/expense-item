import "../UI/Card.css";
export default function card(props) {
  const classesName = "card " + props.className;
  return <div className={classesName}>{props.children}</div>;
}
