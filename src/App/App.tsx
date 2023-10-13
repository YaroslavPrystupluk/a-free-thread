import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import Theme from "../Theme/Theme";
import Hits from "../components/Hits";

const App = () => {
	return (
		<Theme>
			<BrowserRouter>
				<Header />
				<Hits />
			</BrowserRouter>
		</Theme>
	);
};

export default App;
