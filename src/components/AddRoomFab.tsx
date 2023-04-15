import { useDialog } from '../contexts/DialogContext';
import AddRoomDialog from './AddRoomDialog';
import Fab from './Fab';

const AddRoomFab = () => {
  const [openDialog, closeDialog] = useDialog();

  const openAddRoomDialog = () => {
    openDialog(<AddRoomDialog close={closeDialog} />);
  };

  return (
    <Fab
      onClick={openAddRoomDialog}
      className="bg-secondary-500 rounded-full h-12 w-12 text-2xl font-semibold"
    >
      <span className="relative -top-0.5">+</span>
    </Fab>
  );
};

export default AddRoomFab;
