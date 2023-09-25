import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import Donation from "../Donation/Donation";

const Home = () => {
    
    const navigation = useNavigation();

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch('donations.json').then(res => res.json()).then(data => setDonations(data));
    }, []); 

    return (
        <div>
            <Header></Header>
            {
                navigation.state === 'loading' ? <p>Loading...</p> : <Outlet></Outlet>
            }
            <div className="bottle-container">
                {
                    donations.map(donation => <Donation
                        key={donation.id}
                        donation={donation}
                        // handleAddToCart={handleAddToCart}
                    ></Donation>)
                }
            </div>
        </div>
    );
};

export default Home;