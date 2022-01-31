import React, {useState} from 'react';
// import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';
import Agenda from './components/Agenda';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'flex',
  },
}));


const App = (props) => {
  const classes = useStyles();
  const [isPreviewShown, setPreviewShown] = useState(true);

    let handlePreview=(e)=>{
        e.preventDefault();

        setPreviewShown(true); // Here we change state
    }

  return (
    <div className={classes.wrapper}>
      <Agenda/>
      {/* <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">Video Chat</Typography>
      </AppBar> */}
      {/* <VideoPlayer /> */}
      
      <VideoPlayer />  
      <Sidebar>
        <Notifications />
      </Sidebar>
        {/* {props.render&& 
            <button type="submit" onClick={handlePreview}>Video Chat</button>
        } */}
        {/* {isPreviewShown && <VideoPlayer /> && <Sidebar>
        <Notifications />
      </Sidebar>} */}
      
    </div>
  );
};

export default App;
