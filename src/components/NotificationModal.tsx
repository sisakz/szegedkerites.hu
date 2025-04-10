import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

interface NotificationModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const NotificationModal = ({
  open,
  onClose,
  title,
  message,
}: NotificationModalProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{message}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Rendben
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NotificationModal;
