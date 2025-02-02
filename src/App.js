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
        
        { categories.map((category, index) => 
          <Category category={category}>
            { categoryFilter(index).map((video) => <Card video_id={video.id} key={video.id} />)}
          </Category>
        )}

      </Container>
      <Footer />
    </>
  );
}

export default App;