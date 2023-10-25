import {
	SubHeaderWrapper,
	OrnamentWrapper,
	SubHeaderTitle,
	SubHeaderParagraph,
} from './styleSubHeader';

const SubHeader = () => {
	return (
		<SubHeaderWrapper>
			<OrnamentWrapper />
			<section>
				<SubHeaderTitle>Вільна нитка</SubHeaderTitle>
				<SubHeaderParagraph>
					Ми виробляємо етнічний одяг, сорочки, за індивідуальним замовленням, який ми відшиваємо і
					вишиваємо за власним дизайном і кроєм. Маємо власну колекцію сорочок з кожного регіону
					України.
				</SubHeaderParagraph>
				<SubHeaderParagraph>
					Ми виробляємо етнічний одяг, сорочки, за індивідуальним замовленням, який ми відшиваємо і
					вишиваємо за власним дизайном і кроєм. Маємо власну колекцію сорочок з кожного регіону
					України.
				</SubHeaderParagraph>
			</section>
		</SubHeaderWrapper>
	);
};

export default SubHeader;
