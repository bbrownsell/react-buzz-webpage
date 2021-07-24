import React from 'react';
import '../Meet/Meet.css';
import team1 from '../../Images/team1.jpg';
import team2 from '../../Images/team2.jpg';
import team3 from '../../Images/team3.jpg';
import team4 from '../../Images/team4.jpg';
import team5 from '../../Images/team5.jpg';
import team6 from '../../Images/team6.jpg';

const Meet = () => {
    return (
        <>
            <section className="meet-section">
                <div className="meet-heading">
                    <h1>Our Team</h1>
                    <p>Our methodical approach provides not only effective solutions, but we also provide creative answers and unparalleled services to challenges faced by our clients.</p>
                </div>
                <div className="meet-team">
                    <div className="team-image">
                        <img src={team1} alt="" className="image"/>
                        <h2>Connor Quinn</h2>
                        <p>President, CEO</p>
                    </div>
                    <div className="team-image">
                        <img src={team2} alt="" className="image"/>
                        <h2>Hunter Norton</h2>
                        <p>HR Manager</p>
                    </div>
                    <div className="team-image">
                        <img src={team3} alt="" className="image"/>
                        <h2>Betty Nilson</h2>
                        <p>Chief Accountant</p>
                    </div>
                    <div className="team-image">
                        <img src={team4} alt="" className="image"/>
                        <h2>Samuel Schick</h2>
                        <p>Sales Manager</p>
                    </div>
                    <div className="team-image">
                        <img src={team5} alt="" className="image"/>
                        <h2>Joe Alvarez</h2>
                        <p>Sales Manager</p>
                    </div>
                    <div className="team-image">
                        <img src={team6} alt="" className="image"/>
                        <h2>Roxie Swanson</h2>
                        <p>Vice President</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Meet
