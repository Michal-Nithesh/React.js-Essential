import './App.css';
import { useState, useEffect } from "react";

function GitHubUser( { name, location, avatar} ){
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt={name}/>
    </div>
  )
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/moonhighway`
    ).then((res) => res.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError)
  }, []);
  
  if(loading) return <h1>Loading...</h1>;
  if(error)
    return <pre>{JSON.stringify(error)}</pre>;
  if(data) return null;

    return(
      <GitHubUser 
        name={data.name}
        location={data.location}
        avatar={data.avatar}
      />
  )
}

export default App;
