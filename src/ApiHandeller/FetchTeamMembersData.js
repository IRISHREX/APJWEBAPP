import axios from 'axios';

const localUrl = 'http://localhost:5000/api/users';
const productionUrl = 'https://tame-hospital-gown-mite.cyclic.app/api/users';

const baseUrl = window.location.host.includes('localhost') ? localUrl : productionUrl;

const fetchTeamMembersData = async () => {
  try {
    const response = await axios.get(baseUrl);
    const teamMembers = response.data.map((member) => ({
      id:member.id,
      name: member.username,
      imageSrc: member.avatar,
      role: member.role,
      team: member.team,
      email:member.email,
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

const fetchTeamMembersDataByEmail = async (email) => {
  console.log(email)
  try {
    const response = await axios.get(`${baseUrl}/${email}`);

    console.log('teamMembers:', response);
    return response?.data[0];
  } catch (error) {
    console.error('Error fetching team members data:', error);
    return [];
  }
};

const updateTeamMember = async (email, updatedData) => {
  try {
    console.log('Updating team member with ID:', email);
    console.log('Updated data:', updatedData);

    const response = await axios.put(`${baseUrl}/${email}`, updatedData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Update Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error updating team member:', error);
    throw error;
  }
};

const deleteTeamMember = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    console.log('Deleted team member:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting team member:', error);
    throw error;
  }
};

const getTeamMemberById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    const teamMember = {
      name: response.data.username,
      imageSrc: response.data.avatar,
      role: response.data.role,
      team: response.data.team,
      email:response.data.email,
      description: response.data.description,
      socialLinks: response.data.socialLinks,
      id: response.data.id,
    };

    console.log('Team member by ID:', teamMember);
    return teamMember;
  } catch (error) {
    console.error('Error fetching team member by ID:', error);
    throw error;
  }
};

export { fetchTeamMembersData, updateTeamMember, deleteTeamMember, getTeamMemberById ,fetchTeamMembersDataByEmail};
