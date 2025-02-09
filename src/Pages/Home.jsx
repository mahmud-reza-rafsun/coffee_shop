import Banner from "../components/Banner";
import ReuseableTitle from "../components/ReuseableTitle";

const Home = () => {
    return(
        <div>
            <Banner/>
            <ReuseableTitle title={'Browse Coffees by Category'} subtitle={'Choose your disired coffee category to browse throught specific coffees that fit in your test.'}/>
        </div>
    )
}

export default Home;