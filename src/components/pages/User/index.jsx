import { useState, useEffect } from "react";
import styles from "../../layout/OptionStyles/index.module.css";
import { NavOption } from "../../layout/NavOption";
import { RenderPropsAdd } from "../../layout/OptionProps/renderPropsAdd";
import { RenderPropsList } from "../../layout/OptionProps/renderPropsList";
import { ContainerOption } from "../../layout/ContainerOption";
import { Link } from "react-router-dom";
import { FaEraser, FaEdit } from "react-icons/fa";
import loadingImg from "../../../img/loading.svg";
import { FetchApiResource } from "../../../function";
import { FetchApiResourceId } from "../../../function/Edit";
export function User({ show, load, handleShow }) {
  const inputs = [{ name: "Type the name of the User", type: "text" }];
  const typesLinks = {
    nameList: "List of User",
    nameAdd: "New User",
    nameAEdit: "Edit User",
    nameData: "user",
    nameService: "Service",
    data: "users",
  };
  const [valueId, setValueId] = useState();
  const [productInputs, setProductInputs] = useState(inputs);
  const { resource } = FetchApiResource("users");
  function handleEdit(e, id) {
    e.preventDefault();
    setValueId(id);
    handleShow(2);
  }

  function handleDelete(e) {
    if (confirm("are you sure you want to delete this service?")) {
    } else {
      e.preventDefault();
    }
  }
  setTimeout(() => {
    load.setloading(false);
  }, 1000);
  return (
    <ContainerOption styles={styles}>
      <NavOption typesLinks={typesLinks} handleShow={handleShow} />
      {load.loading ? (
        <div className={styles.divloading}>
          <img src={loadingImg}></img>
        </div>
      ) : (
        <>
          {show == 1 ? (
            <RenderPropsList>
              <ul>
                {resource.map((prop) => {
                  return (
                    <li key={prop.id}>
                      <div className={styles.serviceProps}>
                        <span className={styles.serviceSpan}>
                          Name of the {typesLinks.nameData}:
                          <span> {prop.name}</span>
                        </span>
                        {/* <span className={styles.serviceSpan}>
                      Name of the {typesLinks.nameService}:
                      <span> {prop.name}</span>
                    </span> */}
                        <span className={styles.serviceSpan}>
                          Date of creation: <span>{prop.createAt}</span>
                        </span>
                        {prop.updateAt && (
                          <span className={styles.serviceSpan}>
                            Date of update: <span>{prop.updateAt}</span>
                          </span>
                        )}
                      </div>
                      <div>
                        {/* <button className={styles.serviceActionEdit}>Edit</button>
                    <button className={styles.serviceActionDelete}>
                      Delete
                    </button> */}
                        <Link
                          onClick={handleDelete}
                          to={`/${typesLinks.data}/delete/${prop.id}`}
                        >
                          <FaEraser className={styles.delete} />
                        </Link>
                        <Link
                          onClick={(e) => {
                            handleEdit(e, prop.id);
                          }}
                          to={`/users/add/${prop.id}`}
                        >
                          <FaEdit className={styles.edit} />
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </RenderPropsList>
          ) : (
            <RenderPropsAdd
              inputs={productInputs}
              //selectOption={services}
              style={styles}
              typesLinks={typesLinks}
              urlname="users"
              valueId={valueId}
              resourceData={FetchApiResourceId}
              handleShow={handleShow}
            />
          )}
        </>
      )}
    </ContainerOption>
  );
}
