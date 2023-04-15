interface IRoomItem {
  name: string;
  checked: boolean;
}

interface IRoom {
  id: string;
  items: IRoomItem[];
}

export default IRoom;
export type { IRoomItem };
