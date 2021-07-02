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
    CollectionPage,
    OrderProcessing,
    Profile,
} from "./Pages";
import NewsDetails from "./components/NewsDetails/NewsDetails";
import Order from "./Pages/Order/Order";
import Modal  from "./containers/Modal/Modal";
import Hit from "./components/Hit/Hit"
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
                    <Route
                        exact
                        path="/collections"
                        component={CollectionPage}
                    />
                    <Route exact path="/details" component={Products} />
                    <Route exact path="/notFound" component={PageNotFound} />
                    <Route exact path="/favourites" component={Favourites} />
                    <Route exact path="/category" component={Category} />
                    <Route exact path="/order" component={OrderProcessing} />
                    <Route exact path="/profile" component={Profile} />
                </Switch>
            </Layout>

            {/* <Modal /> */}
           <Hit />
        </>
    );
}

export default App;
