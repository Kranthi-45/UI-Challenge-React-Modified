import './App.css';
import { Footer } from './components/footer/Footer';
import { HomeContainer } from './components/home-container/HomeContainer';
import { TopMenu } from './components/top-menu/TopMenu';

function App() {
  return (
    <>
      <div data-testid="bg-image" id="bimg">
        <TopMenu />
        <div className="row">
          <div className="col-md-12">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <HomeContainer />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
