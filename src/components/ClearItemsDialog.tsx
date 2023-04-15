import { useAppDispatch } from '../app/store';
import { DialogCloseFn } from '../contexts/DialogContext';
import IRoom from '../features/room-items/room.types';
import { roomActions } from '../features/room-items/roomSlice';

type ClearItemsDialogProps = {
  room: IRoom;
  close: DialogCloseFn;
};

const ClearItemsDialog = ({ room, close }: ClearItemsDialogProps) => {
  const dispatch = useAppDispatch();

  const clearCheckedItems = () => {
    dispatch(roomActions.clearItems(room.id));
    close();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="bg-white shadow w-72 p-4 rounded"
    >
      <div className="font-semibold text-lg mb-1">
        Clear items on {room.id}?
      </div>

      <div className="mt-2.5 flex gap-2 justify-end">
        <button
          type="button"
          onClick={close}
          className="py-2 px-4 rounded font-medium"
        >
          Close
        </button>

        <button
          onClick={clearCheckedItems}
          className="py-2 px-4 bg-red-700 text-white rounded font-semibold"
        >
          Clear items
        </button>
      </div>
    </form>
  );
};

export default ClearItemsDialog;
