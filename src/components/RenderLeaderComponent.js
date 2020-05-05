import React from 'react';
import { Media } from 'reactstrap';

function RenderLeader({ leaders }) {
    if (leaders != null) {
        return (
            <div>
                {leaders.map((leader) => (
                    <div key={leader.id} className="col-12 mt-5">
                        <Media tag="li">
                            <Media left middle>
                                <Media object src={leader.image} alt={leader.name} />
                            </Media>
                            <Media body className="ml-5">
                                <Media heading> {leader.name}</Media>
                                <h3>{leader.designation}</h3>
                                <p>{leader.description}</p>
                            </Media>
                        </Media>
                    </div>
                ))}
            </div>
        );
    } else {
        return (<div></div>);
    }
}

export default RenderLeader;