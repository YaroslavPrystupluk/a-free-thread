import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import Hits from "../components/Hits";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
      <Hits />
		</BrowserRouter>
	);
};

export default App;
