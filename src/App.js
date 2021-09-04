import { Route, Switch } from "react-router-dom";
import PicturesList from "./components/PicturesList/PicturesList";
import PicturePage from "./components/PicturePage/PicturePage";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={PicturesList} />
        <Route path="/:id/" component={PicturePage} />
      </Switch>
    </div>
  );
}

export default App;
