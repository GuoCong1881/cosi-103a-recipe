import React from 'react';
import "./Team.css"

export const TeamMember = ({ member }) => {
    return (
      <div className="team-member">
        <h2>{member.name}</h2>
        <p>{member.position}</p>
        <img src={member.image} alt={member.name} />
        <p>Favorite Food: {member.favFood}</p>
      </div>
    );
  };

const Team = () => {
    const welcomeMessage = ["Welcome to K's Kuisine! We are a team of four students passionate about food and technology. We are here to help you find the best recipes and ingredients for your next meal. We are excited to help you on your culinary journey! ", "Meet the team below:"]
    const teamMembers = [
        {
            name: 'Irene',
            position: 'Chief Executive Officer & Navigation Guru',
            image: 'https://cdn.vectorstock.com/i/500p/80/18/cartoon-happy-successful-confident-man-vector-33998018.avif',
            favFood: 'Ice Cream',
        },
        {
            name: 'Josh',
            position: 'Chief Operations Officer & Recipe Conneisseur',
            image: 'https://cdn.vectorstock.com/i/500p/40/40/cook-cooking-food-in-pot-cartoon-stick-figure-vector-41564040.avif',
            favFood: 'Pineapple Pizza',
        },
        {
            name: 'Emily',
            position: 'Chief Marketing Officer & Design Specialist',
            image: 'https://cdn.vectorstock.com/i/500p/62/52/painter-holding-brush-and-palette-panting-vector-40236252.avif',
            favFood: 'Ramen',
        },
        {
            name: 'Pranav',
            position: 'Chief Technology Officer & Testing Expert',
            image: 'https://cdn.vectorstock.com/i/500p/61/98/creative-person-typing-or-working-on-computer-vector-40236198.avif',
            favFood: 'Burgers',
        },
        // Add more team members here
    ];

    return (
        <div className="team-container">
            <h5>{welcomeMessage}</h5>
            {teamMembers.map((member, index) => (
                <TeamMember key={index} member={member} />
            ))}
        </div>
    );
};

export default Team;