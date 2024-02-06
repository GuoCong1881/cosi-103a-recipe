import React from 'react';
import "./Team.css"

const TeamMember = ({ member }) => {
    return (
      <div className="team-member">
        <h2>{member.name}</h2>
        <p>{member.position}</p>
        <img src={member.image} alt={member.name} />
      </div>
    );
  };

const Team = () => {
    const teamMembers = [
        {
            name: 'Phil Coulson',
            position: 'Director of S.H.I.E.L.D.',
            image: 'https://pyxis.nymag.com/v1/imgs/c9e/349/c6dab6c01428485c3f89e0a377a24a7af6-26-clark-gregg-shield.2x.h473.w710.jpg',
        },
        {
            name: 'Daisy Johnson',
            position: 'S.H.I.E.L.D. Agent',
            image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/01/Daisy-Johnson-Quake-Agents-of-SHIELD.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
        },
        {
            name: 'Leo Fitz',
            position: 'S.H.I.E.L.D. Scientist',
            image: 'https://images.squarespace-cdn.com/content/v1/5a2c77d812abd9bc7ab2b450/971a70e5-5bfb-4672-85fe-499c0838f270/IAINDECAESTECKER32225.jpg',
        },
        {
            name: 'Jemma Simmons',
            position: 'S.H.I.E.L.D. Scientist',
            image: 'https://hallmark.brightspotcdn.com/dims4/default/83c9a02/2147483647/strip/true/crop/1093x1093+899+24/resize/300x300!/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fd1%2F6c%2F2206d2a27d1c847f092186b5949e%2Fday01-christmasattheplaza-0589-rt.jpg',
        },
        // Add more team members here
    ];

    return (
        <div className="team-container">
            {teamMembers.map((member, index) => (
                <TeamMember key={index} member={member} />
            ))}
        </div>
    );
};

export default Team;