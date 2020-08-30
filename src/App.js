import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import AccordionActions from '@material-ui/core/AccordionActions';


const styles = theme => ({
  root: {
    width: '100%',
   // display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'flex-end',
    direction: 'column'
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
            <Typography className={classes.heading}>Host Site 1</Typography>
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
                    </Accordion>
                </AccordionDetails>
              </Accordion>  
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Host site 2</Typography>
            <Typography className={classes.secondaryHeading}>
              You are currently not an owner
            </Typography>
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
                    </Accordion>
                    <Divider/>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Device 2</Typography>
                        <Typography className={classes.secondaryHeading}>Device Info</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        The rest of the information about this device. Lorem Ipsem Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                        eros, vitae egestas augue. Duis vel est augue.
                      </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
              </Accordion>  
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Advanced settings</Typography>
            <Typography className={classes.secondaryHeading}>
              Filtering has been entirely disabled for whole web server
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
              eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Personal data</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
              eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);


