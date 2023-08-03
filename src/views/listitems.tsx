import * as React from 'react';
import { List } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Divider from '@mui/material/Divider';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <AddCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Upload Careers" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssessmentIcon />
      </ListItemIcon>
      <ListItemText primary="View Reports" />
    </ListItemButton>
  </React.Fragment>
);

interface ListItemsProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
export const ListItems: React.FC<ListItemsProps> = ({ setShowForm }) => {
    return (
      <List>
        <ListItemButton onClick={() => setShowForm(false)}>
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="View Careers" />
        </ListItemButton>  
        <ListItemButton onClick={() => setShowForm(true)}>
          <ListItemIcon>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Upload Careers" />
        </ListItemButton>
        <Divider sx={{ my: 1 }} />
        <ListSubheader component="div" inset>
           Saved reports
        </ListSubheader>
        {/* Add additional options for saved reports if needed */}
      </List>
    );
};