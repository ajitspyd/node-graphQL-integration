import React, { useState } from "react";
import { useQuery, useLazyQuery, gql, useMutation } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      age
      username
      nationality
    }
  }
`

const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
        name
        yearOfPublication
        isInTheaters
    }
  }
`

function DisplayData(){
    const { data } = useQuery(QUERY_ALL_USERS)
    const { data: movieData } = useQuery(QUERY_ALL_MOVIES);
    return <div>
        {
            data && data.users.map((user) => {
                return (
                    <div>
                    <h1>Name: {user.name}</h1>
                    <h1>Username: {user.username}</h1>
                    <h1>Age: {user.age}</h1>
                    <h1>Nationality: {user.nationality}</h1>
                    </div>
                );
            })
        }

        {
            movieData && movieData.movies.map((movie) => {
                return (
                    <div>
                    <h1>Movie Name: {movie.name}</h1>
                    </div>
                );
            })
        }
    </div>
}

export default DisplayData