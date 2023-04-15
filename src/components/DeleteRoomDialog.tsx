import { useAppDispatch } from '../app/store';
import { DialogCloseFn } from '../contexts/DialogContext';
import IRoom from '../features/room-items/room.types';
import { roomActions } from '../features/room-items/roomSlice';

type DeleteRoomDialogProps = {
  room: IRoom;
  close: DialogCloseFn;
};

const DeleteRoomDialog = ({ room, close }: DeleteRoomDialogProps) => {
  const dispatch = useAppDispatch();

  const deleteRoom = () => {
    dispatch(roomActions.delete(room.id));
    close();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        deleteRoom();
      }}
      className="bg-white shadow w-72 p-4 rounded"
    >
      <div className="capitalize font-semibold text-lg mb-1">
        Delete room {room.id}?
      </div>

      <div className="mt-2.5 flex gap-2 justify-end">
        <button
          type="button"
          onClick={close}
          className="py-2 px-4 rounded font-medium"
        >
          Close
        </button>

        <button className="py-2 px-4 bg-red-700 text-white rounded font-semibold">
          Delete Room
        </button>
      </div>
    </form>
  );
};

export default DeleteRoomDialog;
