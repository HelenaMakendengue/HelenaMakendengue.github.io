import React from "react";
import { Route, Link } from "react-router-dom";

function Projects({match}) {

    return (
        <div className="projects-style">
            <h2>Projects</h2>
            <div className="navbar">
                <ul>
                    <li>
                    <Link className="nav-link" to={`${match.url}/web`}>Web</Link>
                    </li>
                    <li>
                    <Link className="nav-link" to={`${match.url}/mobile`}>Mobile</Link>
                    </li>
                    <li>
                    <Link className="nav-link" to={`${match.url}/unity`}>Unity</Link>
                    </li>
                    <li>
                    <Link className="nav-link" to={`${match.url}/misc`}>Misc.</Link>
                    </li>
                </ul>
            </div>
    
            <Route path={`${match.path}/:topicId`} component={Project} />
            <Route exact path={match.path}
                render={() => 
                    <h3>Pick a project type.</h3>
                }
            />
        </div>
    );
}

function Project({ match }) {
    return (
      <div>
        <h3>{match.params.topicId}</h3>
      </div>
    );
  }

export default Projects;