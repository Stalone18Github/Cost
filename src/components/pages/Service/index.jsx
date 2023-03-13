import { useState, useEffect } from "react";
import styles from "../../layout/OptionStyles/index.module.css";
import { NavOption } from "../../layout/NavOption";
import { RenderPropsAdd } from "../../layout/OptionProps/renderPropsAdd";
import { RenderPropsList } from "../../layout/OptionProps/renderPropsList";
import { ContainerOption } from "../../layout/ContainerOption";
import { v4 } from "uuid";
import { FaEraser, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import loadingImg from "../../../img/loading.svg";
import { FetchApiResource } from "../../../function";
export function Service({ show, load, handleShow }) {
  const inputs = [{ name: "Type the name of the service", type: "text" }];
  const typesLinks = {
    nameList: "List of Service",
    nameAdd: "New Service",
    nameData: "service",
    data: "services",
  };
  const [servicesInputs, setServicesInputs] = useState(inputs);
  const [massage, setMassage] = useState(false);
  const { resource } = FetchApiResource("services");
  function handleDelete(e) {
    if (confirm("are you sure you want to delete this service?")) {
    } else {
      e.preventDefault();
    }
  }
  setTimeout(() => {
    load.setloading(false);
  }, 1100);
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
              {massage && (
                <div className={styles.massageSend}>
                  Sent {typesLinks.nameData}
                </div>
              )}
              <ul>
                {resource.map((prop) => {
                  console.log(prop);
                  return (
                    <li key={prop.id}>
                      <div className={styles.serviceProps}>
                        <span className={styles.serviceSpan}>
                          Name of the {typesLinks.nameData}:
                          <span> {prop.name}</span>
                        </span>
                        <span className={styles.serviceSpan}>
                          Date of creation: <span>{prop.createAt}</span>
                        </span>
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
                        <Link>
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
              inputs={servicesInputs}
              //selectOption={products}
              style={styles}
              typesLinks={typesLinks}
              urlname="services"
            />
          )}
        </>
      )}
    </ContainerOption>
  );
}
