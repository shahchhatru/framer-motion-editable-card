import React ,{useEffect,useState} from "react";
import PeriodCard from "./PeriodCard";
import { Grid } from "@mui/material";

const Table = () => {
  
  return (
    <Grid
      container
      style={{
        background: "linear-gradient(to right, #8e2de2, #4a00e0)",
        width: "100%",
        height: "100vh",
        marginTop: 8,
        marginLeft: 4,
        marginRight: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding:4,
        borderRadius:4,
      }}
    >
      <Grid
        container
        style={{
          background: "#bb98ff",
          width: "80vw",
          height: "fit-content",
          borderRadius: 8,
          padding:8,
        }}
      >
        <PeriodCard
          teacher_list="Basanta Joshi"
          subject="Computer Networking"
          start_time="10:00"
          end_time="11:45"
          session_type="lecture"
          room_number="303"
          url="/edit"
        />
      </Grid>
    </Grid>
  );
};

export default Table;

