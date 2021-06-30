import { Footer, Layout } from "./containers";
import { Route, Switch } from "react-router-dom";
import {
    AboutUs,
    Favorite,
    Main,
    NewsCart,
    Products,
    Delivery,
    PageNotFound,
    Favourites,
    Category,
} from "./Pages";
import NewsDetails from "./components/NewsDetails/NewsDetails";
<<<<<<< HEAD


=======
>>>>>>> 55aa8b0997baed9db4aca3e08cf631f401e3a8ca
function App() {
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
                    <Route exact path="/details" component={Products} />
                    <Route exact path="/notFound" component={PageNotFound} />
                    <Route exact path="/favourites" component={Favourites} />
                    <Route exact path="/category" component={Category} />
                </Switch>
            </Layout>
            <Footer />
        </>
    );
}

export default App;
