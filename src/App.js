import { Fragment, useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Libro from "./components/Libro";
import Header from "./components/Header";
import Agregar from "./components/Agregar";

const api = axios.create({
  baseURL: `http://104.236.122.79:5005`,
});

function App() {
  const [libros, setlibros] = useState([]);
  const [carga, setcarga] = useState(true)

  const cargarApi = () => {
    try {
      api.get("/book").then((respuesta) => {
        setlibros(respuesta.data);
        setcarga(false);
        console.log("Api consultada");
      });
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    cargarApi();

  }, [carga]);

  return (
    <Fragment>

    <Header titulo="App Libros"/>

    <Agregar setcarga={setcarga}/>

    <Libro libros={libros} setcarga={setcarga}/>

    </Fragment>
  );
}

export default App;
