import {
  Modal,
  Paper,
  Typography,
  Button,
  Box,
} from "@mui/material";

function EmployeeModal({ open, onClose, onConfirm, title = "Success", message = "", closeText = "Close", confirmText = "Confirm", }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 350,
          p: 4,
          textAlign: "center",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>

        <Typography sx={{ mb: 3 }}>
          {message}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button variant="outlined" onClick={onClose}>
            {closeText}
          </Button>

          <Button variant="contained" onClick={onConfirm}>
            {confirmText}
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
}

export default EmployeeModal;