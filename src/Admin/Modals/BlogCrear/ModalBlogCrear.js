import React, { useState } from "react";
import ReturnCrear from "./ReturnCrear";
import clienteAxios from "../../../config/clienteAxios";
import { useHome } from "../../../context/home-context";
import "../../Admin.css";
import { useToasts } from "react-toast-notifications";
function ModalBlogCrear(props) {
  const { addToast } = useToasts();
  const { obtenerBlogs, axiosConfig } = useHome();
  const { showCrear, setShowCrear } = props;
  const [Styles, setStyles] = useState();
  const [currentBlog, setCurrentBlog] = useState({
    title: "",
    description: "",
    description1: "",
    description2: "",
    description3: "",
    subtitle: "",
    subtitle2: "",
  });
  const [disabled, setDisabled] = useState(true);
  const handleClose = () => {
    setShowCrear(false);
  };
  const handleChange = (e) => {
    setCurrentBlog({ ...currentBlog, [e.target.name]: e.target.value });
    console.log(currentBlog);
    //const max = e.target.maxLength
    if (
      0 < e.target.value.length &&
      e.target.value.length < e.target.maxLength
    ) {
      setStyles({ outlineColor: "green" });
    } else {
      setStyles({ outlineColor: "red" });
    }
  };
  /*-------------------------------POST IMAGE----------------------------------------*/
  const [file, setFile] = useState();
  // eslint-disable-next-line
  const [blob, setBlob] = useState({
    blob: "",
  });

  const handleFile = async (e) => {
    // const blob = await convertToBlob(file)
    // console.log(blob)
    // setBlob({ blob: blob })
    setFile(e.target.files[0]);
    setDisabled(true);
  };

  const convertToBlob = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  // eslint-disable-next-line
  const submit = async () => {
    let image = file;
    let formdata = new FormData();
    if (image !== undefined) {
      formdata.set("image", image);
    }
    formdata.set("title", currentBlog.title);
    formdata.set("description", currentBlog.description);
    formdata.set("description1", currentBlog.description1);
    formdata.set("description2", currentBlog.description2);
    formdata.set("description3", currentBlog.description3);
    formdata.set("subtitle", currentBlog.subtitle);
    formdata.set("subtitle2", currentBlog.subtitle2);
    await clienteAxios
      .post("/publications", formdata)
      .then((res) => {
        console.log(res.data);
        obtenerBlogs();
        handleClose();
        addToast("Blog creado", {
          appearance: "success",
          autoDismiss: true,
        });
        setFile(null)
      })
      .catch((err) => {
        console.log("error post", "err");
        handleClose();
        addToast("err", {
          appearance: "error",
          autoDismiss: true,
        });
      });
  };
  const handleSubmit = async () => {
    const data = {
      title: currentBlog.title,
      description: currentBlog.description,
      description1: currentBlog.description1,
      description2: currentBlog.description2,
      description3: currentBlog.description3,
      subtitle: currentBlog.subtitle,
      subtitle2: currentBlog.subtitle2,
      file: file,
    };
    await clienteAxios
      .post("/publications", data)
      .then((res) => {
        console.log(res.data);
        obtenerBlogs();
        handleClose();
        addToast("Blog creado", {
          appearance: "success",
          autoDismiss: true,
        });
      })
      .catch((err) => {
        console.log("error post", err);
        handleClose();
        addToast("Error", {
          appearance: "error",
          autoDismiss: true,
        });
      });
  };
  return (
    <ReturnCrear
      disabled={disabled}
      submit={submit}
      showCrear={showCrear}
      handleClose={handleClose}
      handleChange={handleChange}
      Styles={Styles}
      handleFile={handleFile}
    />
  );
}

export default ModalBlogCrear;
