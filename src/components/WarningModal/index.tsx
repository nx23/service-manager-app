import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import warningImg from '../../assets/Warning.svg'
import { style } from './style'
import { useTogglePythonService } from '../../context/TogglePythonService'

export default function WarningModal() {

  const {
    isWarningModalOpen,
    handleTogglePythonService,
    handleToggleWarningModal
  } = useTogglePythonService()

  function handleConfirm() {
    handleToggleWarningModal(isWarningModalOpen.name)
    handleTogglePythonService(isWarningModalOpen.name)
  }

  function handleCancel() {
    handleToggleWarningModal(isWarningModalOpen.name)
  }


  //window.addEventListener('message', evt => {
  //  if (evt.data.type === 'ERRO_NO_PROCESSO') {
  //    console.log(`FALHA NA ABERTURA DO ${evt.data.scriptName}`)
  //  }
  //});

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isWarningModalOpen.isOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isWarningModalOpen.isOpen}>
          <Box sx={style}>
            <Stack direction="row" spacing={5} alignItems={"center"}>
              <img src={warningImg} alt="Alerta"></img>
              <Typography id="transition-modal-title" variant="h3" component="h2">
                Aviso!
              </Typography>
            </Stack>
            <Stack direction="column" spacing={5} alignItems={"center"}>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                {`Você está prestes a encerrar o serviço ${isWarningModalOpen.name}, tem certeza disso ?`}
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