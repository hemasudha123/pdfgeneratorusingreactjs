import React from 'react'

function Tablemovies({ data }) {
  const Image64 = ({ data }) => <img style={{ width: "50px", height: '80px' }} src={`data:image/jpeg;base64,${data}`} alt='' />
  return (
    <div className="container">
      {data.length === 0 ? ("There are no movies") : (
        <table className="table" id="testTable">
          <thead>
            <tr>
              <th scope="col">Poster</th>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col">Available</th>
            </tr>
          </thead>
          <tbody>
            {data.map(el => (
              <tr key={el.imdbID}>
                <td>{el.Poster ? <Image64 data={el.Poster} /> : null}</td>
                <td>{el.imdbID}</td>
                <td>{el.Title}</td>
                <td>{el.Year}</td>
                <td>{el.Available ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>)}
    </div>
  )
}

export default Tablemovies;
