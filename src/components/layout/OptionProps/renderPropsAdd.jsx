import { useState } from "react";
import { Navigate } from "react-router-dom";
import { v4 } from "uuid";
import imag from "../../../img/savings.svg";
export function RenderPropsAdd({
  style,
  inputs,
  selectOption,
  typesLinks,
  urlname,
  valueId,
  resourceData,
  handleShow,
}) {
  const { resourceId, setResourceId } = resourceData(`${urlname}/${valueId}`);
  const [name, setName] = useState();
  const [massage, setMassage] = useState(false);

  const bodyObjectEdit = {
    name: resourceId.name,
    createAt: resourceId.createAt,
    updateAt: new Date(),
  };

  const handleNameEdit = (e) => {
    setResourceId({ ...resourceId, name: e.target.value });
  };

  const handleSubmitEdit = (e) => {
    const inputForm = document.querySelector(`input`);
    e.preventDefault();
    console.log(typeof resourceId.name);
    if (resourceId.name === "") {
      inputForm.style.border = "2px solid red";
      inputForm.placeholder = `Type some name of ${typesLinks.nameData} please...`;
    } else {
      fetch(`http://localhost:3000/${urlname}/${valueId}`, {
        method: "put",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(bodyObjectEdit),
      });
      inputForm.style.border = "2px solid #ffbb33";
      setMassage(true);
      setTimeout(() => {
        setMassage(false);
        handleShow(1);
      }, 1200);
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const bodyObject = {
    id: v4,
    name,
    createAt: new Date(),
  };
  const handleSubmit = (e) => {
    const inputForm = document.querySelector(`input`);
    e.preventDefault();
    console.log(name);
    if (name === undefined) {
      inputForm.style.border = "2px solid red";
      inputForm.placeholder = `Type some name of ${typesLinks.nameData} please...`;
    } else {
      fetch(`http://localhost:3000/${urlname}`, {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(bodyObject),
      });
      inputForm.style.border = "2px solid #ffbb33";
      inputForm.placeholder = `${inputs[0].name}`;
      setMassage(true);
      setTimeout(() => {
        setMassage(false);
        handleShow(1);
      }, 1200);
      setName("");
    }
  };
  return (
    <div>
      <div className={style.serviceImg}>
        <img src={imag} />
      </div>
      <form>
        {valueId ? (
          <>
            {massage && (
              <div className={style.massageSend}>
                Edited {typesLinks.nameData}
              </div>
            )}
            <input
              value={resourceId.name}
              name="name"
              onChange={handleNameEdit}
              type="text"
            />
            <div>
              <button onClick={handleSubmitEdit}>Edit</button>
            </div>
          </>
        ) : (
          inputs.map((input) => {
            return (
              <>
                {massage && (
                  <div className={style.massageSend}>
                    Sent {typesLinks.nameData}
                  </div>
                )}
                <input
                  value={resourceId.name}
                  onChange={handleName}
                  type={input.text}
                  placeholder={input.name}
                />
                <div>
                  <button onClick={handleSubmit}>Add</button>
                </div>
              </>
            );
          })
        )}
      </form>
    </div>
  );
}
