import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { Container } from '../../Theme/AboutTheme';
import aboutImageTop from '../../images/About/about_1.webp';
import aboutImageButtom from '../../images/About/about.webp';

const About = () => {
	return (
		<Container>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 2, md: 3 }}>
				<Grid xs={12} sm={6}>
					<Paper>
						<img src={aboutImageTop} alt="1" />
					</Paper>
				</Grid>
				<Grid xs={12} sm={6}>
					<Paper>
						Ми – соціальний бізнес, що вирішує соціальну проблему навчання і працевлаштування жінок
						з вразливих категорій, підтримку і відкритті власної швейної справи. Частину прибутку ми
						спрямовуємо на фінансування соціальних проектів. Ми робимо особливий одяг за
						індивідуальним замовленням, який може дозволити собі кожен, зберігаємо традицію
						символічного вишивання.
					</Paper>
				</Grid>
				<Grid xs={12} sm={6}>
					<Paper>
						<img src={aboutImageButtom} alt="1" />
					</Paper>
				</Grid>
				<Grid xs={12} sm={6}>
					<Paper>
						Соціальне підприємство &quot;Вільна нитка&quot; було створене на базі притулку для
						постраждалих від домашнього насильства в грудні 2021 року у вигляді швейно-вишивальної
						майстерні, з сучасним обладнанням. В нашій майстерні жінки з вразливих категорій
						навчаються на отримують оплачувані замовлення (багатодітні матері, пенсіонерки,
						постраждалі від війни, домашнього насильства). Зараз наша майстерня розташована у м.
						Вишгород, маємо плани по розширенні мережі майстерень.
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default About;
