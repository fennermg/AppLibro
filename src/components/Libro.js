
import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: `http://104.236.122.79:5005`,
});

const Libro = ({ libros, setcarga }) => {

  if (libros === undefined) {
    return null;
  }

  const borrarLibro = async (e) => {
    e.preventDefault();

    try {
      let resultado = await api.delete(`/book/${e.target.id}`);
      console.log(resultado);
    } catch (error) {
      console.log(error);
    }

    setcarga(true);
  };


  const actualizarLibro = async (e) => {
    e.preventDefault();

    try {
      let resultado = await api.put(`/book/${e.target.id}`, {title : ':v'});
      console.log(resultado);
    } catch (error) {
      console.log(error);
    }

    setcarga(true);
  };

  return (
    <div className="container">
      <h1>Listado de libros</h1>
      {libros.map((libro) => (
        <div key={libro.id}>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Titulo: {libro.title}</h3>
              <p className="card-text">
                Año de publicacion:{" "}
                {libro.year === null ? "Desconocido" : libro.year}
              </p>
              <p className="card-text">
                Pais de publicacion:{" "}
                {libro.country === null ? "Desconocido" : libro.country}
              </p>
            </div>

            <button
              id={libro.id}
              className="btn btn-danger"
              onClick={borrarLibro}
            >
              Borrar
            </button>

            <button
              id={libro.id}
              className="btn btn-secondary"
              onClick={actualizarLibro}
            >
              Agregar :v
            </button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Libro;
