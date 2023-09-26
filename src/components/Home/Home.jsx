import { useEffect, useState } from "react";
import Donation from "../Donation/Donation";
import './Home.css';

const Home = () => {

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch('donations.json').then(res => res.json()).then(data => setDonations(data));
    }, []); 

    return (
        <div>
            
            <div className="donation-container">
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