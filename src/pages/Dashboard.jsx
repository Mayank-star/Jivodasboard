import { Box } from "@mui/material";
import ConsultationChart from "../components/ConsultationChart";
import Details from "../components/Details";
import EmployeeStats from "../components/EmployeeStats";
import GenderCards from "../components/GenderCards";
import PsychologistChart from "../components/PsychologistChart";
import InvoicesChart from "../components/InvoicesChart";
import Dietician from "../components/Dietician";


const Dashboard = () => {
  return (
    <>
      {/* Details Card */}
       <Details/>

      {/* Employee  Stats */}
      <EmployeeStats/>

      {/* Gender cards */}
       <GenderCards/>

       <Box p={2}>
        <ConsultationChart />
       </Box>

      <Box p={2}>
        <PsychologistChart/>
      </Box>
      
      <Box p={2}>
        <Dietician/>
      </Box>
      
      <Box p={2}>
        <InvoicesChart/>
      </Box>

  

    </>
    

  );
};

export default Dashboard;
