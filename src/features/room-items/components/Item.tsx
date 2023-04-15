import { useId } from 'react';
import { IRoomItem } from '../room.types';
import { useRoomId } from '../contexts/RoomIdContext';
import { useAppDispatch } from '../../../app/store';
import { roomActions } from '../roomSlice';

type ItemProps = {
  item: IRoomItem;
};

const Item = ({ item }: ItemProps) => {
  const id = useId();
  const roomId = useRoomId();
  const dispatch = useAppDispatch();

  const checkItem = (checked: boolean) => {
    dispatch(
      roomActions.checkItem({
        roomId,
        checked,
        itemName: item.name,
      })
    );
  };

  return (
    <li className="flex gap-2 items-center">
      <input
        type="checkbox"
        id={`checkbox-${item.name}-${id}`}
        className="w-4 h-4"
        checked={item.checked}
        onChange={(e) => checkItem(e.target.checked)}
      />
      <label
        className="flex-1 capitalize"
        htmlFor={`checkbox-${item.name}-${id}`}
      >
        {item.name}
      </label>
    </li>
  );
};

export default Item;
