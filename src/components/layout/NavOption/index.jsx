export function NavOption({ handleShow, typesLinks }) {
  return (
    <div>
      <button onClick={() => handleShow(1)}>{typesLinks.nameList}</button>
      <button onClick={() => handleShow(2)}>{typesLinks.nameAdd}</button>
    </div>
  );
}
