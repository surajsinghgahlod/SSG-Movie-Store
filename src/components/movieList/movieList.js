// import React, {useEffect, useState} from "react"
// import "./movieList.css"
// import { useParams } from "react-router-dom"
// import Cards from "../card/card"

// const MovieList = () => {
    
//     const [movieList, setMovieList] = useState([])
//     const {type} = useParams()

//     useEffect(() => {
//         getData()
//     }, [])

//     useEffect(() => {
//         getData()
//     }, [type])

//     const getData = () => {
//         fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
//         .then(res => res.json())
//         .then(data => setMovieList(data.results))
//     }

//     return (
//         <div className="movie__list">
//             <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
//             <div className="list__cards">
//                 {
//                     movieList.map(movie => (
//                         <Cards movie={movie} />
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default MovieList

// import React, { useEffect, useState } from "react";
// import "./movieList.css";
// import { useParams } from "react-router-dom";
// import Cards from "../card/card";

// const MovieList = () => {
//   const [movieList, setMovieList] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const { type } = useParams();

//   useEffect(() => {
//     setCurrentPage(1);
//     getData();
//   }, [type]);

//   useEffect(() => {
//     getData();
//   }, [type, currentPage]);

//   const getData = () => {
//     fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${currentPage}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setMovieList(data.results);
//         setTotalPages(data.total_pages);
//       });
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   return (
//     <div className="movie__list">
//       <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
//       <div className="list__cards">
//         {movieList.map((movie) => (
//           <Cards key={movie.id} movie={movie} />
//         ))}
//       </div>
//       <div className="pagination-buttons">
//         <button onClick={handlePrevPage} disabled={currentPage === 1}>
//           Previous
//         </button>
//         {Array.from({ length: totalPages > 5 ? 5 : totalPages }, (_, index) => (
//           <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? "active" : ""}>
//             {index + 1}
//           </button>
//         ))}
//         <button onClick={handleNextPage} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MovieList;



// MovieList.js

// MovieList.js

import React, { useEffect, useState } from "react";
import "./movieList.css"; // Import the CSS file
import { useParams } from "react-router-dom";
import Cards from "../card/card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { type } = useParams();

  useEffect(() => {
    setCurrentPage(1);
    getData();
  }, [type]);

  useEffect(() => {
    getData();
  }, [type, currentPage]);

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
        setTotalPages(data.total_pages);
      });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="pagination-btn-wrapper">
        <div className="pagination-buttons">
            <button onClick={handlePrevPage} disabled={currentPage === 1} className="page-changer-btn">
                <i class="fa fa-backward" aria-hidden="true"></i>
            </button>
            {Array.from({ length: totalPages > 5 ? 5 : totalPages }, (_, index) => (
            <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`pagination-button ${currentPage === index + 1 ? "active" : ""}`}
            >
                {index + 1}
            </button>
            ))}
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className="page-changer-btn">
                <i class="fa fa-forward" aria-hidden="true"></i>
            </button>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
