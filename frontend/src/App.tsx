import Header from "./components/Header";
import SalesCard from "./components/SalesCard/SalesCard";
/* todo componente renderizado em tela e uma funcao em JS */
function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
