import axios from 'axios';

const fetchTeamMembersData = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/users');

    const teamMembers = response.data.map((member) => ({
      name: member.username,
      imageSrc: member.avatar,
      role: member.role,
      team: member.team,
      description: member.description,
      socialLinks: member.socialLinks,
    }));
 console.log('teamMembers:-',teamMembers)
    return teamMembers;
  } catch (error) {
    console.error('Error fetching team members data:', error);
    return [];
  }
};

export default fetchTeamMembersData;
