import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import {AccordionDetails, Button} from '@material-ui/core';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionActions from '@material-ui/core/AccordionActions';
import EditIcon from '@material-ui/icons/Edit';



const styles = theme => ({
  root: {
    width: '100%',
   // display: 'flex',
    alignItems: 'center',
    justify: 'center',
    textAlign: 'center',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  panel2:{
    width: '90%',
    justify: 'center',
  }
});

class App extends React.Component {
  // state = {
  //   expanded: null,
  // };

  // handleChange = panel => (event, expanded) => {
  //   this.setState({
  //     expanded: expanded ? panel : false,
  //   });
  // };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <br/>
        <h2><i><center>Let's review this data</center></i></h2>
        <center><b>This is where the usertable would go</b></center>
        <center>Row of user data</center>
        <center>Row of user data</center>
        <center>Row of user data</center>
        <center>Row of user data</center>
        <br/>
        <br/>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>First Host Site</Typography>
            <Typography className={classes.secondaryHeading}>Host Site Address</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Breaker 1</Typography>
                <Typography className={classes.secondaryHeading}>Breaker Info</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Device 1</Typography>
                        <Typography className={classes.secondaryHeading}>Device Info</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        The rest of the information about this device. Lorem Ipsem Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                         eros, vitae egestas augue. Duis vel est augue.
                      </AccordionDetails>
                      <AccordionActions>
                        <Button variant='contained'>
                          <EditIcon/>Edit Device
                        </Button>
                      </AccordionActions>
                    </Accordion>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Device 2</Typography>
                        <Typography className={classes.secondaryHeading}>Device Info</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      </AccordionDetails>
                      <AccordionActions>
                        <Button variant='contained'>
                          <EditIcon/>Edit Device
                        </Button>
                      </AccordionActions>
                    </Accordion>
                </AccordionDetails>
                <AccordionActions>
                  <Button variant='contained'>
                    <EditIcon/>Edit Breaker
                  </Button>
                </AccordionActions>
              </Accordion>  
          </AccordionDetails>
          <AccordionDetails>
          <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Breaker 1</Typography>
                <Typography className={classes.secondaryHeading}>Breaker Info</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Device 1</Typography>
                        <Typography className={classes.secondaryHeading}>Device Info</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        The rest of the information about this device. Lorem Ipsem Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                         eros, vitae egestas augue. Duis vel est augue.
                      </AccordionDetails>
                      <AccordionActions>
                        <Button variant= 'contained'>
                          <EditIcon/> Edit Device
                        </Button>
                      </AccordionActions>
                    </Accordion>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Device 2</Typography>
                        <Typography className={classes.secondaryHeading}>Device Info</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      </AccordionDetails>
                      <AccordionActions>
                        <Button variant='contained'>
                          <EditIcon/>Edit Device
                        </Button>
                      </AccordionActions>
                    </Accordion>
                </AccordionDetails>
                <AccordionActions>
                        <Button variant='contained'>
                          <EditIcon/>Edit Breaker
                        </Button>
                      </AccordionActions>
              </Accordion>  
          </AccordionDetails>
          <AccordionActions>
            <Button variant='contained'>
              <EditIcon/>Edit Host Site
            </Button>
          </AccordionActions>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Second Host Site</Typography>
            <Typography className={classes.secondaryHeading}>
              You are currently not an owner
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>First Breaker Name</Typography>
                <Typography className={classes.secondaryHeading}>Breaker Limit</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Device 1</Typography>
                        <Typography className={classes.secondaryHeading}>Device Info</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        The rest of the information about this device. Lorem Ipsem Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                         eros, vitae egestas augue. Duis vel est augue.
                      </AccordionDetails>
                      <AccordionActions>
                        <Button variant='contained'>
                          <EditIcon/>Edit Device
                        </Button>
                      </AccordionActions>
                    </Accordion>
                    </AccordionDetails>
                    <AccordionDetails>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Device 2</Typography>
                        <Typography className={classes.secondaryHeading}>Device Info</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        The rest of the information about this device. Lorem Ipsem Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                        eros, vitae egestas augue. Duis vel est augue.
                      </AccordionDetails>
                      <AccordionActions>
                        <Button variant='contained'>
                          <EditIcon/>Edit Device
                        </Button>
                      </AccordionActions>
                    </Accordion>
                </AccordionDetails>
                <AccordionActions>
                <Button variant= 'contained'>
                  <EditIcon/> Edit Breaker
                </Button>
                </AccordionActions>
              </Accordion>  
          </AccordionDetails>
          <AccordionActions>
            <Button variant= 'contained'>
              <EditIcon/> Edit Host Site
            </Button>
          </AccordionActions>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Third Host Site</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
              eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
          <AccordionActions>
            <Button variant='contained'>
              <EditIcon/>Edit Host Site
            </Button>
          </AccordionActions>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Fourth Host Site</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
              eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
          <AccordionActions>
            <Button variant='contained'>
              <EditIcon/>Edit Host Site
            </Button>
          </AccordionActions>
        </Accordion>
        <br/>
        <Button
          size ="large"
          variant='contained'
          color ='primary'>
          Submit Onboarding
        </Button>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);


