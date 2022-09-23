import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
    <Nav/>
    <Banner/>
    <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetFlixOriginals} isLargeRow/>
    <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
    <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
    <Row title="Comdey Movies" fetchURL={requests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchURL={requests.fetchHorroMovies}/>
    <Row title="Romance Movies" fetchURL={requests.fetchRomanticMovies}/>
    <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
