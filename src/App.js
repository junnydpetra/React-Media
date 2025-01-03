import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Card from "./components/Card";
import videos from "./json/db.json";


function App() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>
        <h2>Calculus</h2>
        <section className="cards">

          { videos.map(video => <Card video_id={video.id} key={video.id} /> )}

        </section>
      </Container>
      <Footer />
    </>
  );
}

export default App;