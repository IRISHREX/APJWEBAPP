import axios from 'axios';

const localUrl = 'http://localhost:5000/api/users';
const productionUrl = 'https://tame-hospital-gown-mite.cyclic.app/api/users';

const fetchTeamMembersData = async () => {
  const isLocal = window.location.host.includes('localhost');
  const url = isLocal ? localUrl : productionUrl;

  try {
    const response = await axios.get(url);

    const teamMembers = response.data.map((member) => ({
      name: member.username,
      imageSrc: member.avatar,
      role: member.role,
      team: member.team,
      description: member.description,
      socialLinks: member.socialLinks,
    }));

    console.log('teamMembers:', teamMembers);
    return teamMembers;
  } catch (error) {
    console.error('Error fetching team members data:', error);
    return [];
  }
};

export default fetchTeamMembersData;
