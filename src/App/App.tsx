import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import Hits from "../components/Hits";
import Collection from "../components/Collection";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Hits badge="Хіт" />
			<Hits badge="Новинка" />
			<Collection title="regions" />
		</BrowserRouter>
	);
};

export default App;
