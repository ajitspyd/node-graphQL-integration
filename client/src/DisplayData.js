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

const GET_MOVIE_BY_NAME = gql`
  query Movie($name: String!) {
    movie(name: $name) {
      name
      yearOfPublication
    }
  }
`;


const CREATE_USER_MUTATION = gql`
  mutation CreateUser($user: CreateUserInput!) {
    createUser(user: $user) {
      name
      id
    }
  }
`;

function DisplayData(){
    const [movieSearched, setMovieSearched] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [nationality, setNationality] = useState("");
    const [age, setAge] = useState(0);
    const { data, loading, refetch } = useQuery(QUERY_ALL_USERS);

    const { data: movieData } = useQuery(QUERY_ALL_MOVIES);
    const [
        fetchMovie,
        { data: movieSearchedData, error: movieError },
      ] = useLazyQuery(GET_MOVIE_BY_NAME);

    
    const [createUser] = useMutation(CREATE_USER_MUTATION);
    
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

        <input
          type="text"
          placeholder="Interstellar..."
          onChange={(event) => {
            setMovieSearched(event.target.value);
          }}
        />
        <button
          onClick={() => {
            fetchMovie({
              variables: {
                name: movieSearched,
              },
            });
          }}
        >
          Fetch Data
        </button>

        <div>
          {movieSearchedData && (
            <div>
              <h1>MovieName: {movieSearchedData.movie.name}</h1>
              <h1>
                Year Of Publication: {movieSearchedData.movie.yearOfPublication}
              </h1>{" "}
            </div>
          )}
          {movieError && <h1> There was an error fetching the data</h1>}
        </div>



        <h1> Create user</h1>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            const age = Number(event.target.value)
            setAge(age);
          }}
        />
        <input
          type="text"
          placeholder="Nationality..."
          onChange={(event) => {
            setNationality(event.target.value.toUpperCase());
          }}
        />
        <button
        onClick={() => {
          createUser({
            variables: {
              user: {
                name,
                username,
                age,
                nationality,
              },
            },
          }).catch((error) => {
            console.error('Error creating user:', error);
          });

          refetch();
        }}
      >
        Create User
      </button>
    </div>
}

export default DisplayData
