import { Footer, Layout } from "./containers";
import { Route, Switch } from "react-router-dom";
import { NewsDetails } from "./components";
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
    MyOrders,
} from "./Pages";
<<<<<<< HEAD
// import Layout from './containers/Layout/Layout'
import NewsDetails from "./components/NewsDetails/NewsDetails";
<<<<<<< HEAD
import Order from "./Pages/Order/Order";
import Modal  from "./containers/Modal/Modal";
import Hit from "./components/Hit/Hit"
=======
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import Basket from "./Pages/Basket/Basket";

=======
>>>>>>> 9f4f25b8e00e2647d1ee20105858d0de6efbd890

>>>>>>> f3ec6b2776bb67ad86c35c6107a535a232fd74dd
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
<<<<<<< HEAD
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/prodCarousel" component={ProductCarousel} />
=======
                    <Route exact path="/order" component={OrderProcessing} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/myOrders" component={MyOrders} />
>>>>>>> 9f4f25b8e00e2647d1ee20105858d0de6efbd890
                </Switch>
            </Layout>
<<<<<<< HEAD

            {/* <Modal /> */}
           <Hit />
=======
            <Footer />
>>>>>>> f3ec6b2776bb67ad86c35c6107a535a232fd74dd
        </>
    );
}

export default App;
