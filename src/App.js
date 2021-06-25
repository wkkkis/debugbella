import { Footer, Header } from "./containers";
import { Route, Switch } from "react-router-dom";
import { AboutUs, Favorite, Main, News, Products } from "./Pages";

function App() {
    return (
        <>
            <Header />
            <div>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/favourite" component={Favorite} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/about" component={AboutUs} />
                    <Route exact path="/products" component={Products} />
                </Switch>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default App;
