import axios from "axios";
import "./Registro.css";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../auth/AuthContext";
import { types } from "../../../types/Types";
import ImageUploader from "react-images-upload";
import { v4 as uuid } from 'uuid';

export const Registro = ({history}) => {
    const { dispatch } = useContext(AuthContext);

    const [isError, setIsError] = useState("");
    const [imguser, setImguser] = useState("");
    const [formname, setFormname] = useState("");
    const [formusername, setFormusername] = useState("");
    const [formpass, setFormpass] = useState("");
    const [formpassxtwo, setFormpassxtwo] = useState("");

    const lastPath = localStorage.getItem("lastPath") || "/";

    const convertToBase64 = (file) => {
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

    const handleRegistro = async (e) => {
        e.preventDefault();
        if (formpass == formpassxtwo) {
            setIsError("");

            const fotoID = uuid();
            const fotoextension =  imguser.type;
            const ext = fotoextension.split("/")[1]
            const nombreID = fotoID+"."+ext
            const img64 = await convertToBase64(imguser);
            
            console.log(types.bucketURL + nombreID);

            await axios.post(types.apiurl+"subirfoto",{
                id:nombreID,
                "foto":img64.split(",")[1]
            }).then(resp=>{
                axios.post(types.apiurl + "add-user",{
                    "name":formname,
                    "user":formusername,
                    "password":formpass,
                    "path":nombreID,
                    "base64":""
                }).then(respfoto =>{
                    let valresp = respfoto.data
                    console.log(valresp)
                    console.log(valresp.insertId)
                    dispatch({
                        type: types.login,
                        payload: {
                            name: formname,
                            user: formusername,
                            path: nombreID,
                            iduser: valresp.insertId
                        },
                    });
        
                    history.replace(lastPath);
                })
            })
        }
    };

    useEffect(() => {
        setImguser(
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/240px-User-avatar.svg.png"
        );
    }, []);

    return (
        <div className="container mt-5">
            <h1>Registro</h1>
            <hr />
            <form autoComplete="off">
               
                        <div className="form-group">
                            <label>Nombre Completo</label>
                            <input
                                type="ingrese su nombre de usuario"
                                autoComplete="off"
                                className="form-control"
                                name="name"
                                id="name"
                                value={formname}
                                onChange={(event) => {
                                    setFormname(event.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Username o email</label>
                            <input
                                type="ingrese su nombre"
                                autoComplete="off"
                                className="form-control"
                                name="user"
                                id="user"
                                value={formusername}
                                onChange={(event) => {
                                    setFormusername(event.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="pass"
                                value={formpass}
                                onChange={(event) => {
                                    setFormpass(event.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirmar Password</label>
                            <input
                                value={formpassxtwo}
                                onChange={(event) => {
                                    setFormpassxtwo(event.target.value);
                                }}
                                type="password"
                                className="form-control"
                                id="passxtwo"
                            />
                        </div>
                        <button
                            className="btn btn-outline-primary"
                            onClick={handleRegistro}
                        >
                            Registrarse
                        </button>

            </form>

            <div
                style={{
                    position: "absolute",
                    textAlign: "center",
                    paddingTop: 20,
                }}
            >
                {isError}
            </div>
        </div>
    );
};
