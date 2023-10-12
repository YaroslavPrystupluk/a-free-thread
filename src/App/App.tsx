import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import Theme from "../Theme/Theme";

const App = () => {
	return (
		<Theme>
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		</Theme>
	);
};

export default App;
