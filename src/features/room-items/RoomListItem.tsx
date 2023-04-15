import { useState } from 'react';
import ChevronLeft from '../../components/icons/ChevronLeft';
import ItemList from './components/ItemList';
import IRoom from './room.types';
import ChevronDown from '../../components/icons/ChevronDown';
import ChevronUp from '../../components/icons/ChevronUp';
import TrashIcon from '../../components/icons/TrashIcon';
import { useDialog } from '../../contexts/DialogContext';
import DeleteRoomDialog from '../../components/DeleteRoomDialog';
import XMarkIcon from '../../components/icons/XMarkIcon';
import ClearItemsDialog from '../../components/ClearItemsDialog';

type RoomListItemProps = {
  room: IRoom;
};

const RoomListItem = ({ room }: RoomListItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const [openDialog, closeDialog] = useDialog();
  const allItemsChecked = room.items.every((item) => item.checked);
  const numberOfCheckedItems = room.items.reduce(
    (count, value) => (value.checked ? count + 1 : count),
    0
  );

  const expand = () => {
    setExpanded(!expanded);
  };

  const openDeleteRoomDialog = () => {
    openDialog(<DeleteRoomDialog room={room} close={closeDialog} />);
  };

  const openClearItemsDialog = () => {
    openDialog(<ClearItemsDialog room={room} close={closeDialog} />);
  };

  return (
    <li className="shadow rounded overflow-hidden">
      <div
        onClick={expand}
        className={`rounded text-white px-4 py-2.5 font-semibold flex items-center ${
          allItemsChecked ? 'bg-green-800' : 'bg-primary-700'
        }`}
      >
        {room.id}
        {expanded ? (
          <ChevronDown className="h-5 w-5 ml-auto" strokeWidth={2.2} />
        ) : (
          <ChevronLeft className="h-5 w-5 ml-auto" strokeWidth={2.2} />
        )}
      </div>

      {expanded && (
        <div className="px-2.5">
          <button
            onClick={openClearItemsDialog}
            className="flex gap-0.5 font-medium items-center my-2.5 bg-neutral-200 rounded py-2.5 justify-center w-full"
          >
            <XMarkIcon strokeWidth={2} /> Clear
          </button>

          <button
            onClick={openDeleteRoomDialog}
            className="flex gap-1 items-center font-medium my-2.5 bg-red-700 text-white rounded py-2.5 justify-center w-full"
          >
            <TrashIcon strokeWidth={1.8} /> Delete room
          </button>

          <h2 className="font-semibold uppercase mb-1">
            Items{' '}
            <span className="font-medium text-neutral-600">
              ({numberOfCheckedItems}/{room.items.length})
            </span>
          </h2>
          <ItemList items={room.items} />

          <button className="w-full py-2" onClick={expand}>
            <ChevronUp className="h-6 w-6 mx-auto" />
          </button>
        </div>
      )}
    </li>
  );
};

export default RoomListItem;
