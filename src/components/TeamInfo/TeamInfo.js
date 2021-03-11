import { Button } from 'react-bootstrap';
import React from 'react';

import { Card } from 'react-bootstrap';
import { Link  } from 'react-router-dom';

const TeamInfo = (props) => {
   console.log(props);
    const{strTeamBadge,strTeam,idTeam}=props.team;
   
    return (
        <div className="col-md-4 my-3">
        <Card>
            <Card.Img variant="top" src={strTeamBadge} />
            <Card.Body>
                <div className="text-center">
                    <Card.Title>{strTeam}</Card.Title>
                    <Button as={Link}  to={`/Team/${idTeam}`} variant="primary">View Details</Button>
                    {/* <Link to={`/team/${idTeam}`}>Show detail{idTeam}</Link> */}
                    
                </div>
            </Card.Body>
        </Card>
        </div>
    );
};

export default TeamInfo;