import React, { useState, useEffect } from "react";
import { Typography, Grid } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MapComponent from "./MapComponent";
import AboutCard from "../SubPackages/AboutCard";
import TeamSection from "../SubPackages/TeamSection";
import { defaultLocation, gradientColors, waypoints, zoom } from "./Util";
import {
  deleteTeamMember,
  fetchTeamMembersData,
  updateTeamMember,
} from "../ApiHandeller/FetchTeamMembersData";
import teamMembersData from "../SubPackages/TeamMembarData";
// import FeatureComingSoonOverlay from "../context/FeatureComingSoonOverlay";

const About = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      let TeamData;
      try {
        const membersData = await fetchTeamMembersData();
        if (membersData.length === 0) {
          TeamData = teamMembersData;
        } else {
          TeamData = membersData;
        }
        setTeamMembers(TeamData);
      } catch (error) {
        console.error("Error fetching team members data:", error);
      }
    };

    fetchMembers();
  }, []);

  const handleUpdate = async (id, updatedData) => {
    try {
      await updateTeamMember(id, updatedData);
      await fetchTeamMembersData(); // Refresh data
      toast.success("Member updated successfully!");
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Failed to update member.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTeamMember(id);
      await fetchTeamMembersData(); // Refresh data
      toast.success("Member deleted successfully!");
    } catch (error) {
      console.error("Deletion failed:", error);
      toast.error("Failed to delete member.");
    }
  };

  const getTeamMembers = (team) =>
    teamMembers.filter((member) => member.team === team);

  const toggleTeamDrawer = (team) => {
    setSelectedTeam(selectedTeam === team ? null : team);
  };

  const renderTeamMembers = (team, color) => (
    <div className={`team-section ${selectedTeam === team ? "active" : ""}`} >
      <TeamSection
        team={team}
        members={getTeamMembers(team)}
        color={color}
        toggleTeamDrawer={toggleTeamDrawer}
      />
      <Grid container spacing={2}>
        {selectedTeam === team &&
          getTeamMembers(team).map((member, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              style={{
                transform: "translate(0, 0)",
                transition: "transform 0.3s ease",
              }}
            >
              <AboutCard 
                member={member}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
                
                
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );

  return (
    <div className="about-container">
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>

      {renderTeamMembers("members", gradientColors[0])}
      {renderTeamMembers("mockTeam", gradientColors[1])}
      {renderTeamMembers("cordTeam", gradientColors[2])}

      <Typography variant="h4" gutterBottom>
        Our Location
      </Typography>
      {/* <FeatureComingSoonOverlay> */}
      <MapComponent center={defaultLocation} zoom={zoom} waypoints={waypoints} />

      {/* </FeatureComingSoonOverlay> */}


      <ToastContainer />
    </div>
  );
};

export default About;
