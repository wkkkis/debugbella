import { Footer, Layout } from "./containers";
import { Route, Switch } from "react-router-dom";
import { NewsDetails, ProductCarousel, NewsCart } from "./components";
import {
    AboutUs,
    Favorite,
    Main,
    Products,
    Delivery,
    PageNotFound,
    Favourites,
    Category,
    CollectionPage,
    OrderProcessing,
    Profile,
    MyOrders,
} from "./Pages";


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
                    <Route exact path="/news_details/" component={NewsDetails}/>
                    <Route exact path="/collections" component={CollectionPage}/>
                    <Route exact path="/details" component={Products} />
                    <Route exact path="/notFound" component={PageNotFound} />
                    <Route exact path="/favourites" component={Favourites} />
                    <Route exact path="/category" component={Category} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/prodCarousel" component={ProductCarousel} />
                    <Route exact path="/order" component={OrderProcessing} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/myOrders" component={MyOrders} />
                </Switch>
            </Layout>
            <Footer />
        </>
    );
}

export default App;
