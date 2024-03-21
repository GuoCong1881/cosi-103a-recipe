import { render, screen } from '@testing-library/react';
import Team from './Team';
import { TeamMember } from './Team';

test('renders team member details', () => {
    const member = {
      name: 'Test Member',
      position: 'Test Position',
      image: 'test-image.jpg',
    };
  
    render(<TeamMember member={member} />);
  
    // Check that the member name, position, and image are rendered
    expect(screen.getByText(member.name)).toBeInTheDocument();
    expect(screen.getByText(member.position)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: member.name })).toBeInTheDocument();
  });

test('renders team members', () => {
    render(<Team />);
  
    // Check that the team members are rendered
    const teamMembers = screen.getAllByRole('heading');
    expect(teamMembers).toHaveLength(5);
    
    // Check that the first team member's details are correct
    const firstMember = teamMembers[0];
    expect(screen.getByText('Phil Coulson', { container: firstMember })).toBeInTheDocument();
  });