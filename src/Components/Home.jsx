// import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import { Drawer, Grid, Typography } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { closeDrawerAfterDelay, toggleDrawer } from "../Components/Util";
// import Sidebar from "./Sidebar";
// import About from "./About";
// import HomePage from "./HomePage";
// import Notice from "./Notice";
// import Contact from "./Contact";
// import LoginPage from "./LoginPage";
// import MasterUploader from "./MasterUploader";
// import TopMostBar from "../SubPackages/TopMostBar";
// import LOGO from "../Images/Genral/LOGO.png";
// import Footer from "./Footer";
// import PdfListPage from "./PdfListPage";
// import ClassInfo from "./ClassInfo";
// import ErrorPg from "./ErrorPg";


// function Home() {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   useEffect(() => {
//     closeDrawerAfterDelay(isDrawerOpen, setIsDrawerOpen);
//   }, [isDrawerOpen]);

//   const isLargeScreen = window.innerWidth >= 768; // Adjust the breakpoint as needed

//   return (
//     <div>
//       {isLargeScreen ? (
//         <TopMostBar />
//       ) : (
//         <div>
//           <Grid padding={2}>
//             <MenuIcon
//               onClick={() => toggleDrawer(isDrawerOpen, setIsDrawerOpen)}
//               style={{ cursor: "pointer" , position:"fixed" }}
//               className="neon-top-bar"
//             />
//             <Typography className="neon-text" style={{position:"fixed", marginLeft:"1.5rem"}}>MENU</Typography>
//           </Grid>
//           <Grid container alignItems="center">
//             <Grid item>
//             <a href="https://apjec.org/" target="_blank" rel="noreferrer">

//               <img
//                 src={LOGO}
//                 alt="Logo"
//                 style={{
//                   maxWidth: "150px", // Adjust the maxWidth as needed
//                   height: "auto",
//                 }}

//               />
//                             </a>

//             </Grid>
//             <Grid item>
//               <Typography
//                 variant="h5"
//                 gutterBottom
//                 letterSpacing="2px"
//                 fontFamily={"Pacifico"}
//                 marginLeft="1rem"
//                 fontSize={{ xs: "2.8rem", sm: "2rem", md: "2.5rem" }}
//                 className="neon-text"
//               >
//                 <h1>APJEC</h1>
//               </Typography>
//             </Grid>
//           </Grid>
//           <Drawer
//             className="drawer"
//             variant="temporary"
//             open={isDrawerOpen}
//             onClose={() => toggleDrawer(isDrawerOpen, setIsDrawerOpen)}
//             classes={{
//               paper: "drawer-paper",
//             }}
//           >
//             <Sidebar />
//           </Drawer>
//         </div>
//       )}
//       <main className="content p-5">
//         <Routes>
//           {/* Route components */}
//           <Route path="/" element={<HomePage />} />
//           <Route path="*" element={<ErrorPg />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/notice" element={<Notice />} />
//           <Route path="/notice-uploader" element={<MasterUploader />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/downloads" element={<PdfListPage />} />
//           <Route path="/classes" element={<ClassInfo />} />


//     <Route path="/login" element={<LoginPage />} />


//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default Home;



// Home.jsx

import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Drawer, Grid, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { closeDrawerAfterDelay, toggleDrawer } from "../Components/Util";
import Sidebar from "./Sidebar";
import About from "./About";
import HomePage from "./HomePage";
import Notice from "./Notice";
import Contact from "./Contact";
import LoginPage from "./LoginPage";
import MasterUploader from "./MasterUploader";
import TopMostBar from "../SubPackages/TopMostBar";
import LOGO from "../Images/Genral/LOGO.png";
import Footer from "./Footer";
import PdfListPage from "./PdfListPage";
import ClassInfo from "./ClassInfo";
import ErrorPg from "./ErrorPg";
import "./Home.css"; // Import the main layout CSS file

function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    closeDrawerAfterDelay(isDrawerOpen, setIsDrawerOpen);
  }, [isDrawerOpen]);

  const isLargeScreen = window.innerWidth >= 768; // Adjust the breakpoint as needed

  

  return (
    <div>



      {isLargeScreen ? (
        <TopMostBar />
      ) : (
        <div>
          <Grid padding={2}>
            <MenuIcon
              onClick={() => toggleDrawer(isDrawerOpen, setIsDrawerOpen)}
              style={{ cursor: "pointer" , position:"fixed" }}
              className="neon-top-bar"
            />
            <Typography className="neon-text" style={{position:"fixed", marginLeft:"1.5rem"}}>MENU</Typography>
          </Grid>
          <Grid container alignItems="center">
            <Grid item>
            <a href="https://apjec.org/" target="_blank" rel="noreferrer">

              <img
                src={LOGO}
                alt="Logo"
                className="logo-image" // Apply the logo image class
              />
                            </a>

            </Grid>
            <Grid item>
              <Typography
                variant="h5"
                gutterBottom
                letterSpacing="2px"
                fontFamily={"Pacifico"}
                marginLeft="1rem"
                fontSize={{ xs: "2.8rem", sm: "2rem", md: "2.5rem" }}
                className="neon-text"
              >
                <h1>APJEC</h1>
              </Typography>
            </Grid>
          </Grid>
          <Drawer
            className="drawer"
            variant="temporary"
            open={isDrawerOpen}
            onClose={() => toggleDrawer(isDrawerOpen, setIsDrawerOpen)}
            classes={{
              paper: "drawer-paper",
            }}
          >
            <Sidebar />
          </Drawer>
        </div>
      )}
      <main className="content p-5">
        <Routes>
          {/* Route components */}

          
  

          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPg />} />
          <Route path="/about" element={<About />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notice-uploader" element={<MasterUploader />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/downloads" element={<PdfListPage />} />
          <Route path="/classes" element={<ClassInfo />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
