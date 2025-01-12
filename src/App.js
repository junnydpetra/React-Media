import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Card from "./components/Card";
import Category, { categories, categoryFilter } from "./components/Category";

function App() {
  return (
    <>
      <Header />
      <Banner image="favorites" />
      <Container>
        
          <Category category={categories[0]}>
            { categoryFilter(0).map((video) => <Card video_id={video.id} key={video.id} />)}
          </Category>
          <Category category={categories[1]}>
            { categoryFilter(1).map((video) => <Card video_id={video.id} key={video.id} />)}
          </Category>
          <Category category={categories[2]}>
            { categoryFilter(2).map((video) => <Card video_id={video.id} key={video.id} />)}
          </Category>

      </Container>
      <Footer />
    </>
  );
}

export default App;