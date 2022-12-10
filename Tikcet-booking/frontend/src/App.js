import './App.css';
import PageRoutes from './Components/routing/PageRoutes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <PageRoutes />
      <Footer />
    </div>
  );
}

export default App;
