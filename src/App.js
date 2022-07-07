import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './page/login';

function App() {
  return (
    <div className="App">
      <>
        <div style={{ 
        backgroundImage: `url("http://cdn30.us1.fansshare.com/image/backgroundforpictures/clean-backgrounds-for-powerpoint-1182947274.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',

        }}>

          <Login />
        </div>
      </>
    </div>
  );
}

export default App;
