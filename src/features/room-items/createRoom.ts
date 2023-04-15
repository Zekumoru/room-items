import IRoom, { IRoomItem } from './room.types';
import roomItemsData from '../../room-items-data.json';

const createRoomItem = (name: string): IRoomItem => {
  return {
    name,
    checked: false,
  };
};

const createRoom = (id: string): IRoom => {
  return {
    id,
    items: roomItemsData.items.sort().map(createRoomItem),
  };
};

export default createRoom;
export { createRoomItem };
