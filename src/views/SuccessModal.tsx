import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6">Career Uploaded Successfully!</Typography>
        <Typography>Your career has been successfully uploaded.</Typography>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
