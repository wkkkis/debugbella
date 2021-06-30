import { Footer, Layout } from "./containers";
import { Route, Switch } from "react-router-dom";
import {
<<<<<<< HEAD
  AboutUs,
  Favorite,
  Main,
  NewsCart,
  Products,
  Delivery,
  PageNotFound,
  Favourites,
  Category,
=======
    AboutUs,
    Favorite,
    Main,
    NewsCart,
    Products,
    Delivery,
    PageNotFound,
    Favourites,
    Category,
    CollectionPage,
>>>>>>> b68526f4aa74dbd50e0a13c5faff31d639707f6b
} from "./Pages";
import NewsDetails from "./components/NewsDetails/NewsDetails";

function App() {
<<<<<<< HEAD
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/favourite" component={Favorite} />
          <Route exact path="/delivery" component={Delivery} />
          <Route exact path="/news" component={NewsCart} />
          <Route exact path="/news_details/" component={NewsDetails} />
          <Route exact path="/details" component={Products} />
          <Route exact path="/notFound" component={PageNotFound} />
          <Route exact path="/favourites" component={Favourites} />
          <Route exact path="/category" component={Category} />
        </Switch>
      </Layout>
      {/*  <Footer /> */}
    </>
  );
=======
    return (
        <>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/about" component={AboutUs} />
                    <Route exact path="/favourite" component={Favorite} />
                    <Route exact path="/delivery" component={Delivery} />
                    <Route exact path="/news" component={NewsCart} />
                    <Route
                        exact
                        path="/news_details/"
                        component={NewsDetails}
                    />
                    <Route
                        exact
                        path="/collections"
                        component={CollectionPage}
                    />
                    <Route exact path="/details" component={Products} />
                    <Route exact path="/notFound" component={PageNotFound} />
                    <Route exact path="/favourites" component={Favourites} />
                    <Route exact path="/category" component={Category} />
                </Switch>
            </Layout>
           {/*  <Footer /> */}

        </>
    );
>>>>>>> b68526f4aa74dbd50e0a13c5faff31d639707f6b
}

export default App;
