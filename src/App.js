import Header from "./Components/Header";
import Main from "./Components/Main";
import Database from "./Database";

const App = () => {
    const data = Database.map((item) => {
        return (
            <Main
                key={item.id}
                img={item.img}
                country={item.country}
                location={item.location}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
            />
        );
    });
    return (
        <div className="container">
            <Header />
            {data}
        </div>
    );
    }

  export default App;
 