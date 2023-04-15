import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/store';
import { DialogCloseFn } from '../contexts/DialogContext';
import { roomActions } from '../features/room-items/roomSlice';
import { toast } from 'react-toastify';

type AddRoomDialogProps = {
  close: DialogCloseFn;
};

const AddRoomDialog = ({ close }: AddRoomDialogProps) => {
  const dispatch = useAppDispatch();
  const rooms = useAppSelector((state) => state.room.rooms);
  const [input, setInput] = useState('');

  const addRoom = () => {
    if (rooms.some((room) => room.id === input)) {
      toast.error('Room already exists!');
      return;
    }

    dispatch(roomActions.add(input));
    close();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addRoom();
      }}
      className="bg-white shadow w-72 p-4 rounded"
    >
      <div className="capitalize font-semibold text-lg mb-1">Enter Room</div>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full border-2 border-neutral-300 rounded px-2 py-1"
      />

      <div className="mt-2.5 flex gap-2 justify-end">
        <button
          type="button"
          onClick={close}
          className="py-2 px-4 rounded font-medium"
        >
          Close
        </button>

        <button className="py-2 px-4 bg-primary-700 text-white rounded font-semibold">
          Add Room
        </button>
      </div>
    </form>
  );
};

export default AddRoomDialog;
