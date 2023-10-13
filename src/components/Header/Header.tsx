import { FC } from "react";
import { HeaderWrapper, Parag } from "./stylesHeader";

const Header: FC = () => {
	return (
		<>
			<HeaderWrapper>Вільна нитка</HeaderWrapper>
			<Parag>
				Ми виробляємо етнічний одяг, сорочки, за індивідуальним замовленням, який ми відшиваємо і
				вишиваємо за власним дизайном і кроєм. Маємо власну колекцію сорочок з кожного регіону
				України. віднови вишиванку своєї бабусі. Час бути вільною.
			</Parag>
		</>
	);
};

export default Header;
