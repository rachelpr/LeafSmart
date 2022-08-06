import Nav from "./components/Nav";
import Events from "./components/Events"
import CityFacts from "./components/CityFacts";
import QoLData from "./components/QoLData";
import Search from "./components/Search";

import './styles/main.css';
import "./App.scss";


const App = () => {

  const handleOnSearchChange = (searchData) => {
    //response contains data such as {value: '5946768 53.55014 -113.46871', label: 'Edmonton, Alberta'}
      console.log(searchData);
  }

  return (
    <main className="layout">
      <section className="nav-bar">
        <Nav />
      </section>
      <hr className="sidebar__separator sidebar--centered" />
      <section className="widgets">
        <div>
          <h1 className="text-3xl font-bold underline text-purple-600 hover:bg-amber-50">Widgets</h1>
          <Search onSearchChange={handleOnSearchChange}/>
          <CityFacts />
          <Events />
          <QoLData />
        </div>
      </section>
    </main>
  );
};

export default App;
