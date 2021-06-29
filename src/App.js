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

function App() {
    return (
        <>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/favourite" component={Favorite} />
                    <Route exact path="/delivery" component={Delivery} />
                    <Route exact path="/news" component={NewsCart} />
                    <Route exact path="/about" component={AboutUs} />
                    <Route exact path="/details" component={Products} />
                    <Route exact path="/notFound" component={PageNotFound} />
                    <Route exact path="/favourites" component={Favourites} />
                    <Route exact path="/category" component={Category} />
                </Switch>

                <Footer />
            </Layout>
  
        
        </>
    );
}

export default App;
