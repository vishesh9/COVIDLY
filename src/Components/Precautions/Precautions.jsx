import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const PrecautionsComponent = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <main className="container fadeIn">
        <div className="header text-center">
          <h1>Precautions</h1>
        </div>
        <div className="row">
          <List className={classes.root}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src={require("../../assets/img/covidIcon.png")}
                />
              </ListItemAvatar>
              <ListItemText primary="Avoid close contact with people who are sick. Maintain at least three feet distance between yourself and anyone who is coughing or sneezing." />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src={require("../../assets/img/covidIcon.png")}
                />
              </ListItemAvatar>
              <ListItemText primary="Avoid touching your eyes, nose, and mouth." />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src={require("../../assets/img/covidIcon.png")}
                />
              </ListItemAvatar>
              <ListItemText primary="Stay home when you are sick." />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src={require("../../assets/img/covidIcon.png")}
                />
              </ListItemAvatar>
              <ListItemText primary="Cover your cough or sneeze with a tissue, then dispose of the tissue safely." />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src={require("../../assets/img/covidIcon.png")}
                />
              </ListItemAvatar>
              <ListItemText primary="Clean and disinfect frequently-touched objects and surfaces using a regular household cleaning spray or wipe." />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src={require("../../assets/img/covidIcon.png")}
                />
              </ListItemAvatar>
              <ListItemText primary=" Wearing a mask is not necessary unless you are taking care of an infected person. The Centers for Disease Control (CDC) does recommend that only infected people wear masks to prevent the spread of the virus." />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src={require("../../assets/img/covidIcon.png")}
                />
              </ListItemAvatar>
              <ListItemText primary="Wash your hands often with soap and water for at least 20 seconds, especially after going to the bathroom, before eating, and after blowing your nose, coughing, or sneezing." />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src={require("../../assets/img/covidIcon.png")}
                />
              </ListItemAvatar>
              <ListItemText primary="If soap and water are not readily available, use an alcohol-based hand sanitiser with at least 60% alcohol. Always wash hands with soap and water when hands are visibly dirty." />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src={require("../../assets/img/covidIcon.png")}
                />
              </ListItemAvatar>
              <ListItemText primary="If you have a fever, cough and difficulty breathing, seek medical attention immediately." />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src={require("../../assets/img/covidIcon.png")}
                />
              </ListItemAvatar>
              <ListItemText primary="Keep in mind the travel advisory set out by the Ministry of Health and Welfare." />
            </ListItem>
          </List>
        </div>
      </main>
    </React.Fragment>
  );
};

export default PrecautionsComponent;
