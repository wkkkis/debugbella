import { Footer, Header } from "./containers";
import { Route, Switch } from "react-router-dom";
import {
    AboutUs,
    Favorite,
    Main,
    NewsCart,
    Products,
    Delivery,
    PageNotFound,
} from "./Pages";

function App() {
    return (
        <>
            <Header />
            <div>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/favourite" component={Favorite} />
                    <Route exact path="/delivery" component={Delivery} />
                    <Route exact path="/news" component={NewsCart} />
                    <Route exact path="/about" component={AboutUs} />
                    <Route exact path="/details" component={Products} />
                    <Route exact path="/notFound" component={PageNotFound} />
                </Switch>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default App;
