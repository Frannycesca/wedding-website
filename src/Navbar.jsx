import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Button, Toolbar, IconButton, Typography, makeStyles, withStyles, Link, AppBar, Box, Paper } from '@material-ui/core';
import { TabPanel, TabContext } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import Hotel from './Hotel.jsx';
import { Document, Page, View, StyleSheet } from 'react-pdf';
//import { Linking, Text, StyleSheet } from 'react-native';


// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#192394',
    Color: '#FFFFFF',
    
  },
  insidetab: {
    backgroundColor: "#FFFFFF"
  }
}));


const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#FF0000',
  },
})(Tabs);


const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#5F0F0F',
      opacity: 1,
    },
    '&$selected': {
      color: '#0099ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const navbarStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#000000',
    Color: '#FF00FF',
  },
  test: {
    backgroundColor: '#00FF00'
  },
}));


const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#009900',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

export default function Header() {
  const classes = useStyles();
  const classnavbarStyle = navbarStyle();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo2}>
        <TabContext value={value}>
          <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
            <StyledTab label="About us" value="1" />
            <StyledTab label="About our wedding" value="2" />
            <StyledTab label="Hotel" value="3" />
            <StyledTab label="Cool things in Richmond" value="4" />
            <StyledTab label="Gift Registry" value="5" />
          </StyledTabs>
          <Typography className={classes.padding} />
          <TabPanel value="1" className={classes.insidetab}>
            <p>Hello and welcome! This is where you can find all sorts of information regarding our wedding.</p>
            <a href="https://forms.gle/f9Wq7AqMMFimqwAj7">RSVP now!</a>
            <p>[[PUT BIO HERE]]</p>
          </TabPanel>
          <TabPanel value="2" className={classes.insidetab}>
            <p>Tab 2</p>
          </TabPanel>
          <TabPanel value="3" className={classes.insidetab}>
            <Hotel/>
          </TabPanel>
          <TabPanel value="4" className={classes.insidetab}>
            <p>Tab 4</p>
          </TabPanel>
          <TabPanel value="5" className={classes.insidetab}>
            <a href="https://smile.amazon.com/wedding/francesca-huber-benjamin-johnson-manakin-sabot-december-2020/registry/62Z9G1V1XCVG">Amazon gift registry</a>
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
}