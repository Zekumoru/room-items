import AddRoomFab from './components/AddRoomFab';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useAppSelector } from './app/store';
import RoomList from './features/room-items/RoomList';

function App() {
  const rooms = useAppSelector((state) => state.room.rooms);

  return (
    <div className="App p-4">
      <AddRoomFab />

      {rooms.length === 0 ? (
        <main className="min-h-screen grid place-content-center">
          <div>No rooms yet.</div>
        </main>
      ) : (
        <main>
          <RoomList rooms={rooms} />
        </main>
      )}

      <ToastContainer position="bottom-center" autoClose={2000} />
    </div>
  );
}

export default App;
