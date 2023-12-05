import React, { useEffect, useState } from 'react'
import { addDoc, collection, deleteDoc, getDocs, doc } from 'firebase/firestore'
import { db } from '../firebase'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export const Crud = () => {
  const moviesCollectionRef = collection(db, 'movies')
  const [movies, setMovies] = useState([])
  const [title, setName] = useState("")
  const [year, setYear] = useState("")
  const [director, setDirector] = useState("")

  const getMovie = async () => {
    const data = await getDocs(moviesCollectionRef)
    setMovies(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
  }

  const createMovie = async () => {
    await addDoc(moviesCollectionRef, { title: title, year: year, director: director })
    getMovie()
  }

  const deleteMovie = async (id) => {
    const movieDoc = doc(db, 'movies', id)
    await deleteDoc(movieDoc)
    getMovie()
  }

  useEffect(() => {
    getMovie()
  }, [])
  return (
    <>
      <input type='string' placeholder='Nombre' value={title} onChange={(event) => setName(event.target.value)}></input>
      <input type='string' placeholder='Año' value={year} onChange={(event) => setYear(event.target.value)}></input>
      <input type='string' placeholder='Director' value={director} onChange={(event) => setDirector(event.target.value)}></input>
      <Button onClick={createMovie} variant="success" >Agregar</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Película</th>
            <th>Año</th>
            <th>Director</th>
          </tr>
        </thead>
        <tbody>
          {
            movies.map(movie => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.director}</td>
                <td>
                  <Button>Editar</Button>
                  <Button onClick={() => {deleteMovie(movie.id)}} variant='danger'>Eliminar</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  )
}

