import './App.css';
import CityName from './Components/CityName';
import SearchResult from './Components/SearchResult';
import { useSelector } from 'react-redux';

function App() {

  var storeData = useSelector((state) =>{
    return state.Search
    })
const {isSearch} = storeData


  return (
    <div className="App">
    {!isSearch && <CityName/>}
    {isSearch && <SearchResult/>}
    </div>
  );
}

export default App;
