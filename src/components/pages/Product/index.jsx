import { useEffect, useState } from "react";
import styles from "../../layout/OptionStyles/index.module.css";
import { NavOption } from "../../layout/NavOption";
import { RenderPropsAdd } from "../../layout/OptionProps/renderPropsAdd";
import { RenderPropsList } from "../../layout/OptionProps/renderPropsList";
import { ContainerOption } from "../../layout/ContainerOption";
import { FetchApiResource } from "../../../function";
import { FaEraser, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import loadingImg from "../../../img/loading.svg";
export function Product({ show, load, handleShow }) {
  const inputs = [{ name: "Type the name of the product", type: "text" }];
  const typesLinks = {
    nameList: "List of Product",
    nameAdd: "New Product",
    nameData: "product",
    nameService: "Service",
    data: "products",
  };
  const [productInputs, setProductInputs] = useState(inputs);
  const { resource } = FetchApiResource("products");
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
              inputs={productInputs}
              //selectOption={services}
              style={styles}
              typesLinks={typesLinks}
            />
          )}
        </>
      )}
    </ContainerOption>
  );
}
