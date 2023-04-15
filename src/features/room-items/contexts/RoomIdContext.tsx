import { ReactNode, createContext, useContext } from 'react';

const RoomIdContext = createContext('');

const useRoomId = () => {
  return useContext(RoomIdContext);
};

type RoomIdProviderProps = {
  roomId: string;
  children?: ReactNode;
};

const RoomIdProvider = ({ roomId, children }: RoomIdProviderProps) => {
  return (
    <RoomIdContext.Provider value={roomId}>{children}</RoomIdContext.Provider>
  );
};

export default RoomIdProvider;
export { useRoomId };
