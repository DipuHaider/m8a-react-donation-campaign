import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    
    const navigation = useNavigation();

    return (
        <div>
            <Header></Header>
            {
                navigation.state === 'loading' ? <p>Loading...</p> : <Outlet></Outlet>
            }
        </div>
    );
};

export default Home;