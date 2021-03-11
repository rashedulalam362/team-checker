

import React , { useState, useEffect }from 'react'; 
import TeamInfo from '../TeamInfo/TeamInfo';



function App() {
  const[teams,setTeams]=useState([]);
  useEffect (()=>{
      
    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
    .then(res=>res.json())
    .then(data=>{
    
      setTeams(data.teams);
    })
    
  },[]);
  return (
    <div className="container">
    
     <div className="container mt-5">
     <div className="row">
     {
       teams?.map(team=><TeamInfo team={team}></TeamInfo>)
     }
     </div>

     </div>
   
   


    </div>
  );
}

export default App;