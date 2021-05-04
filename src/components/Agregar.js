import React, { useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: `http://104.236.122.79:5005`,
});

const Agregar = ({ setcarga }) => {
  const [libro, setlibro] = useState({
    title: "",
    year: "",
    country: "",
  });

  const { title, year, country } = libro;

  const obtenerInformacion = (e) => {
    setlibro({
      ...libro,
      [e.target.name]: e.target.value,
    });
  };

  const limpiar = () =>{
    setlibro({
        title: "",
        year: "",
        country: "",
    })
  }

  const agregarLibro = async (e) => {
    e.preventDefault();

    if (title.trim() === "" || year.trim() === "" || country.trim() === "") {
      console.log("Ha courrido un error");
      return;
    }

    try {
      //console.log(libro);
      let resultado = await api.post("/book", libro);
      console.log(resultado);
    } catch (error) {
      console.log(error);
    }

    setcarga(true);
    limpiar();
  };

  return (
    <div className="container formulario">
      <form onSubmit={agregarLibro}>
        <label className="form-label">Titulo</label>
        <input
          type="text"
          name="title"
          className="form-control"
          onChange={obtenerInformacion}
          value={title}
        />

        <label className="form-label">Año de publicacion</label>
        <input
          type="number"
          name="year"
          className="form-control"
          onChange={obtenerInformacion}
          value={year}
        />

        <label className="form-label">Pais de publicacion</label>
        <input
          type="text"
          name="country"
          className="form-control"
          onChange={obtenerInformacion}
          value={country}
        />

        <button type="submit" className="btn btn-success">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default Agregar;
