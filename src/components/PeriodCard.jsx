import { useState } from "react";
import {
  Card,
  Typography,
  CardContent,
  Box,
  Grid,
  Button,
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";
//import { useNavigate } from "react-router-dom";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import TimerOffIcon from "@mui/icons-material/TimerOff";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CloseIcon from "@mui/icons-material/Close";
export default function PeriodCard(props) {
  const mainPageIndex = 6;
  // const navigate=useNavigate();
  const [activePage, setActivePage] = useState(6);
  const handleCardTransition = (cardIndex) => {
    setActivePage(cardIndex);
  };
  function initialsAfterSpace(inputString) {
    // Split the input string into words
    const words = inputString.split(" ");

    // Use map to get the first letter of each word
    const initials = words.map((word) => word.charAt(0).toUpperCase());

    // Join the initials to form the result
    const result = initials.join("");

    return result;
  }

  return (
    <Grid style={{ position: "relative", height: "240px", width: "310px" }}>
      <motion.div
        style={{
          position: "absolute",
          top: "0%",
          left: "0%",
          zIndex: 0,
          opacity: 0,
        }}
        animate={{
          opacity: activePage === 1 ? 1 : 0,
          zIndex: activePage === 1 ? 1 : -1,
        }}
        transition={{ duration: 0.5 }}
      >
        <Card
          sx={{ width: "300px", height: "200px", background: "white", mb: 4 }}
        >
          <CardContent>
            <Grid
              container
              fullWidth
              mb={1}
              style={{ justifyContent: "space-between" }}
            >
              <Grid item sx={2}>
                <Box
                  sx={{
                    background: "#f1eeff",
                    textTransform: "capitalize",
                    border: "2px solid #6558d3",
                    borderRadius: 1,
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    padding: "0.5em 0.75em",
                    lineHeight: 1,
                  }}
                >
                  <Typography variant="h7" color="#6558d3">
                    {"teacher"}
                  </Typography>
                </Box>
              </Grid>
              <Grid item sx={4} style={{ color: "red" }}>
                <Button
                  onClick={() => handleCardTransition(mainPageIndex)}
                  style={{ color: "#ff0000" }}
                >
                  {/* edit_period/${getId(url)} */}
                  <CloseIcon />
                  Close
                </Button>
              </Grid>
              <Grid container fullWidth>
                <Grid item sx={12} p={1}>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "100%" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Teacher Name"
                      variant="outlined"
                    />
                    <Button type="submit" sx={4}>
                      UPDATE
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          top: "0%",
          left: "0%",
          zIndex: 0,
          opacity: 0
        }}
        animate={{
          opacity: activePage === 2 ? 1 : 0,
          zIndex: activePage === 2 ? 1 : -1,
        }}
        transition={{ duration: 0.5 }}
      >
        <Card
          sx={{
            width: "300px",
            height: "200px",
            background: "white",
            mb: 4,

          }}
        >
          <CardContent>
            <Grid
              container
              fullWidth
              mb={1}
              style={{ justifyContent: "space-between" }}
            >
              <Grid item sx={2}>
                <Box
                  sx={{
                    background: "#f1eeff",
                    textTransform: "capitalize",
                    border: "2px solid #6558d3",
                    borderRadius: 1,
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    padding: "0.5em 0.75em",
                    lineHeight: 1,
                  }}
                >
                  <Typography variant="h7" color="#6558d3">
                    {"Subject"}
                  </Typography>
                </Box>
              </Grid>
              <Grid item sx={4} style={{ color: "red" }}>
                <Button onClick={() => handleCardTransition(mainPageIndex)} style={{ color: "#ff0000" }}>
                  {/* edit_period/${getId(url)} */}
                  <CloseIcon />
                  Close
                </Button>
              </Grid>
              <Grid container fullWidth>
                <Grid item sx={12} p={1}>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "100%" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Subject Name"
                      variant="outlined"
                    />
                    <Button type="submit" sx={4}>
                      UPDATE
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          top: "0%",
          left: "0%", zIndex: 0, opacity: 0
        }}
        animate={{
          opacity: activePage === 3 ? 1 : 0,
          zIndex: activePage === 3 ? 1 : -1,
        }}
        transition={{ duration: 0.5 }}
      >
        <Card
          sx={{
            width: "300px",
            height: "200px",
            background: "white",
            mb: 4,

          }}
        >
          <CardContent>
            <Grid
              container
              fullWidth
              mb={1}
              style={{ justifyContent: "space-between" }}
            >
              <Grid item sx={2}>
                <Box
                  sx={{
                    background: "#f1eeff",
                    textTransform: "capitalize",
                    border: "2px solid #6558d3",
                    borderRadius: 1,
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    padding: "0.5em 0.75em",
                    lineHeight: 1,
                  }}
                >
                  <Typography variant="h7" color="#6558d3">
                    {"Lecture Room"}
                  </Typography>
                </Box>
              </Grid>
              <Grid item sx={4} style={{ color: "red" }}>
                <Button onClick={() => handleCardTransition(mainPageIndex)} style={{ color: "#ff0000" }}>
                  {/* edit_period/${getId(url)} */}
                  <CloseIcon />
                  Close
                </Button>
              </Grid>
              <Grid container fullWidth>
                <Grid item sx={12} p={1}>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "100%" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Room No"
                      variant="outlined"
                    />
                    <Button type="submit" sx={4}>
                      UPDATE
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        style={{ zIndex: 0, opacity: 0 }}
        animate={{
          position: "absolute",
          top: "0%",
          left: "0%",
          opacity: activePage === 4 ? 1 : 0,
          zIndex: activePage === 4 ? 1 : -1,
        }}
        transition={{ duration: 0.5 }}
      >
        <Card
          sx={{
            width: "300px",
            height: "200px",
            background: "white",
            mb: 4,
          }}
        >
          <CardContent>
            <Grid
              container
              fullWidth
              mb={1}
              style={{ justifyContent: "space-between" }}
            >
              <Grid item sx={2}>
                <Box
                  sx={{
                    background: "#f1eeff",
                    textTransform: "capitalize",
                    border: "2px solid #6558d3",
                    borderRadius: 1,
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    padding: "0.5em 0.75em",
                    lineHeight: 1,
                  }}
                >
                  <Typography variant="h7" color="#6558d3">
                    {"Start Period no"}
                  </Typography>
                </Box>
              </Grid>
              <Grid item sx={4} style={{ color: "red" }}>
                <Button onClick={() => handleCardTransition(mainPageIndex)} style={{ color: "#ff0000" }}>
                  {/* edit_period/${getId(url)} */}
                  <CloseIcon />
                  Close
                </Button>
              </Grid>
              <Grid container fullWidth>
                <Grid item sx={12} p={1}>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "100%" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Start Period"
                      variant="outlined"
                    />
                    <Button type="submit" sx={4}>
                      UPDATE
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          top: "0%",
          left: "0%",
          zIndex: 0, opacity: 0
        }}
        animate={{
          opacity: activePage === 5 ? 1 : 0,
          zIndex: activePage === 5 ? 1 : -1,
        }}
        transition={{ duration: 0.5 }}
      >
        <Card
          sx={{
            width: "300px",
            height: "200px",
            background: "white",
            mb: 4,

          }}
        >
          <CardContent>
            <Grid
              container
              fullWidth
              mb={1}
              style={{ justifyContent: "space-between" }}
            >
              <Grid item sx={2}>
                <Box
                  sx={{
                    background: "#f1eeff",
                    textTransform: "capitalize",
                    border: "2px solid #6558d3",
                    borderRadius: 1,
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    padding: "0.5em 0.75em",
                    lineHeight: 1,
                  }}
                >
                  
                  <Typography variant="h7" color="#6558d3">
                    {"No of Periods"}
                  </Typography>

                </Box>
              </Grid>
              <Grid item sx={4} style={{ color: "red" }}>
                <Button onClick={() => handleCardTransition(mainPageIndex)} style={{ color: "#ff0000" }}>
                  {/* edit_period/${getId(url)} */}
                  <CloseIcon />
                  Close
                </Button>
              </Grid>
              <Grid container fullWidth>
                <Grid item sx={12} p={1}>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "100%" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Num Period"
                      variant="outlined"
                    />
                    <Button type="submit" sx={4}>
                      UPDATE
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          top: "0%",
          left: "0%",
          zIndex: activePage === 6 ? 1 : 0,
          opacity: activePage === 6 ? 1 : 0,
        }}
        animate={{
          opacity: activePage === 6 ? 1 : 0,
          zIndex: activePage === 6 ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <Card sx={{ width: "300px", height: "200px", background: "white" }}>
          <CardContent>
            <Grid
              container
              fullWidth
              mb={1}
              style={{ justifyContent: "space-between" }}
            >
              <Grid item sx={2}>
                <Box
                  sx={{
                    background: "#f1eeff",
                    textTransform: "capitalize",
                    border: "2px solid #6558d3",
                    borderRadius: 1,
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    padding: "0.5em 0.75em",
                    lineHeight: 1,
                    cursor:'pointer'
                  }}
                >
                  
                  <Typography variant="h7" color="#6558d3" style={{cursor:'pointer'}} onClick={()=>handleCardTransition(3)}>
                    {props.session_type + " " + props.room_number}
                  </Typography>
                  
                  
                </Box>
              </Grid>
              <Grid item sx={4}>
                <Button onClick={() => navigate(`/`)}>
                  {/* edit_period/${getId(url)} */}
                  <EditNoteIcon />
                  Edit
                </Button>
              </Grid>
            </Grid>
            <Grid container fullWidth>
              <Grid item sx={6} p={1} style={{cursor:'pointer'}} onClick={()=>handleCardTransition(2)}>
                <Typography
                  variant="h7"
                  color="#000"
                  sx={{ fontFamily: "Poppins", fontWeight: "300" }}
                  gutterBottom
                >
                  {props.subject}
                </Typography>
              </Grid>
            </Grid>
            <Grid container fullWidth>
              <Grid item sx={1} p={1} color="lightgreen">
                <EngineeringIcon />
              </Grid>
              <Grid item sx={3} p={1} color="lightgreen">
                <Button onClick={() => handleCardTransition(1)}>
                  <Typography
                    variant="body2"
                    color="#000"
                    sx={{ fontFamily: "Spline Sans", fontWeight: "300" }}
                    gutterBottom
                  >
                    {/* {props.teacher_list?.map((t) => (
                  <span>{initialsAfterSpace(t) + " "}</span>
                ))} */}
                    <span>{initialsAfterSpace(props.teacher_list)}</span>
                  </Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container fullWidth>
              <Grid item sx={2} p={1} color="lightgreen" style={{cursor:'pointer'}} onClick={()=>handleCardTransition(4)}>
                <AccessAlarmIcon />
              </Grid>
              <Grid item sx={2} p={1} color="lightgreen">
                <Typography>{props.start_time}</Typography>
              </Grid>
              <Grid item sx={2} p={1} style={{cursor:'pointer'}} color="red" onClick={()=>handleCardTransition(5)}>
                <TimerOffIcon />
              </Grid>
              <Grid item sx={2} p={1} color="red">
                <Typography>{props.end_time}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  );
}
