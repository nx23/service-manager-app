import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import warningImg from '../../assets/Warning.svg'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

interface IWarningModal {
  isWarningModalOpen: boolean;
  handleWarningModalClose: () => void;
  handleServiceRunning: () => void;
  handleServiceStopping: () => void;
}

export default function WarningModal(
  {
    isWarningModalOpen,
    handleServiceRunning,
    handleServiceStopping,
    handleWarningModalClose,
  }: IWarningModal
) {

  function handleConfirm() {
    handleServiceStopping()
    handleWarningModalClose()
  }

  function handleCancel() {
    handleServiceRunning()
    handleWarningModalClose()
  }

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isWarningModalOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isWarningModalOpen}>
          <Box sx={style}>
            <Stack direction="row" spacing={5} alignItems={"center"}>
              <img src={warningImg} alt="Alerta"></img>
              <Typography id="transition-modal-title" variant="h3" component="h2">
                Aviso!
              </Typography>
            </Stack>
            <Stack direction="column" spacing={5} alignItems={"center"}>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                {`Você está prestes a encerrar o serviço, tem certeza disso ?`}
              </Typography>
              <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 10 }}>
                <Button
                  variant="contained"
                  onClick={handleConfirm}
                  sx={{
                    background: "#27AE60",
                  }}>
                  Confirmar
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleCancel}
                >
                  Cancelar
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}