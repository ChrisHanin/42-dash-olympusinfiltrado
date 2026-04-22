import Card from './components/card';

function App() {
  return (
    <>
      <header className="header">
          <h1>QTech Dash</h1>
          <p>Tu Agregador de Juegos Favorito</p>
      </header>
      <main className="app">
        <section className="card">
          <h1>QTech Dash</h1>
          <p>React is now configured with Vite.</p>
                  <Card />
        </section>
      </main>
    </>

  );
}

export default App;
