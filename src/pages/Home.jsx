import { Link } from 'react-router-dom';
import "../css/reset.css";
import "../css/styles.css";

function Home() {
    return (
        <div className="home">
            <div>
                <img src={`${import.meta.env.BASE_URL}images/bearInBasket.png`} alt="A teddy bear in a basket of peaches."></img>
            </div>
            <div className="intro">
                <h2>Well hello there!</h2>
                <div className="homeSummary">
                    <p>Welcome to Teddy Crunch Co., where we care about the coziness and cuteness of our snacks. You won't find a single thing here that doesn't meet that promise.</p>
                    <p>We started in 2025 after our CEO could not find a single cute snack anywhere. Do you know what it's like to need a cute snack, and not have one? No, you don't! Because you have us.</p>
                    <p>Have a look at our <Link to="/shop">Shop</Link>, and I bet you'll have a full cart soon enough!</p>
                </div>

            </div>
        </div>
    );
}

export default Home;