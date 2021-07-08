import React from "react";
import { Footer, Layout } from "./containers";
import { Route, Switch } from "react-router-dom";
import { NewsDetails, ProductCarousel, NewsCart } from "./components";
import "./styles/global.module.scss";
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
    Order,
    SearchResults,
} from "./Pages";
<<<<<<< HEAD

import Confirmation from "./containers/NavigationMenuBar/Auth/Confirmation/Confirmation";
import RegisterForm from "./containers/NavigationMenuBar/Auth/Register/RegisterForm/RegisterForm";

=======
import RegisterForm from "./containers/NavigationMenuBar/Auth/Register/RegisterForm/RegisterForm";
>>>>>>> 044083d2432a4994abc23bf89ff4013eab558090
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
                    <Route exact path="/search" component={SearchResults} />
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
                    <Route exact path="/products" component={Products} />
                    <Route exact path="ordering" component={Order} />
                    <Route
                        exact
                        path="/prodCarousel"
                        component={ProductCarousel}
                    />
                    <Route exact path="/order" component={OrderProcessing} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/myOrders" component={MyOrders} />
                    <Route exact path="/re" component={RegisterForm} />
                </Switch>
            </Layout>
            <Footer />
        </>
    );
}

export default App;
