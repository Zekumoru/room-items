import RoomListItem from './RoomListItem';
import RoomIdProvider from './contexts/RoomIdContext';
import IRoom from './room.types';

type RoomListProps = {
  rooms: IRoom[];
};

const RoomList = ({ rooms }: RoomListProps) => {
  return (
    <ul className="flex flex-col gap-2">
      {rooms.map((room) => (
        <RoomIdProvider key={room.id} roomId={room.id}>
          <RoomListItem room={room} />
        </RoomIdProvider>
      ))}
    </ul>
  );
};

export default RoomList;
