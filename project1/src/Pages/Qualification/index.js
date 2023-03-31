/*export default function Qualification(){
    return(
        <>
        This is Education Page of Apoorva
        </>
    )
}*/
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualification() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualification</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="RGR Siddhanthi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSPcHLQr7yXRS3xTzz-fDmcbo_3WbimLnvW5-w8r5IJQ&s" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institute of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                6.7% CGPA
              </Typography>
              {" — B.Tech Computer Science and Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sri Aadarsh" src="https://www.w3schools.com/howto/img_avatar.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Trinity Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                86% CGPA
              </Typography>
              {" — Intermediate studies with MPC"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sai SI" src="https://55knots.com.au/wp-content/uploads/2021/01/Zanj-Avatar-scaled.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="St.Ann's High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                8.5% CGPA
              </Typography>
              {' — Higher Secondory Education'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}