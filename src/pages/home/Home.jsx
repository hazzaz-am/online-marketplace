import { Carousel } from "../../components/Carousel";
import { TabCategories } from "../../components/TabCategories";

export const Home = () => {

	return (
		<div className="container px-6 py-10 mx-auto">
			<Carousel />
			<TabCategories />
		</div>
	);
};
