import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IRoom from './room.types';
import createRoom from './createRoom';

const ROOMS_KEY = 'rooms';

const loadRoomsFromLocalStorage = () => {
  const roomsJson = localStorage.getItem(ROOMS_KEY);

  if (roomsJson) {
    return JSON.parse(roomsJson) as IRoom[];
  }

  return [] as IRoom[];
};

const initialState = {
  rooms: loadRoomsFromLocalStorage(),
};

type CheckItemPayload = {
  roomId: string;
  itemName: string;
  checked: boolean;
};

const saveRoomsToLocalStorage = (rooms: IRoom[]) => {
  localStorage.setItem(ROOMS_KEY, JSON.stringify(rooms));
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.rooms.push(createRoom(action.payload));
      saveRoomsToLocalStorage(state.rooms);
    },
    delete: (state, action: PayloadAction<string>) => {
      const index = state.rooms.findIndex((room) => room.id === action.payload);
      state.rooms.splice(index, 1);
      saveRoomsToLocalStorage(state.rooms);
    },
    clearItems: (state, action: PayloadAction<string>) => {
      const room = state.rooms.find((room) => room.id === action.payload);
      if (!room) {
        throw new Error(
          `Could not clear items. Room is missing: ${action.payload}`
        );
      }

      room.items.forEach((item) => {
        item.checked = false;
      });
      saveRoomsToLocalStorage(state.rooms);
    },
    checkItem: (state, action: PayloadAction<CheckItemPayload>) => {
      const room = state.rooms.find(
        (room) => room.id === action.payload.roomId
      );
      if (!room) {
        throw new Error(
          `Could not check item. Room is missing: ${action.payload.roomId}`
        );
      }

      const item = room.items.find(
        (item) => item.name === action.payload.itemName
      );
      if (!item) {
        throw new Error(
          `Could not check item. Item is missing from room ${action.payload.roomId}: ${action.payload.itemName}`
        );
      }

      item.checked = action.payload.checked;
      saveRoomsToLocalStorage(state.rooms);
    },
  },
});

const roomReducer = roomSlice.reducer;

export default roomReducer;
export const roomActions = roomSlice.actions;
