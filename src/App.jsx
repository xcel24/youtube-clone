import { VideoCardGrid } from './components/VideoCardGrid';
import { Appbar } from './components/Appbar';

function App() {
  return (
    <>
      <div className='text-white'>
        <Appbar />
        <VideoCardGrid />
      </div>
    </>
  );
}

export default App;
