import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utilities/localstorage";
import './Donations.css';


const Donations = () => {
    const donations = useLoaderData();

    const [donatedDonations, setDonatedDonations] = useState([]);
    const [dataLength, setDataLength] = useState([4]);

    useEffect( () => {
        const storedDonationIds = getStoredDonation();
        if(donations.length > 0){
            const donationsDonated = [];
            for(const id of storedDonationIds){
                const donation = donations.find(donation => donation.id === id);
                if(donation){
                    donationsDonated.push(donation);
                }
            }
            setDonatedDonations(donationsDonated);
        }
    }, [])
    
    return (
        <div className="donations-container">
            <div className="donations-div">
                {
                    donatedDonations.slice(0, dataLength).map(donation => <div key={donation.id}>
                        
                        <div className="card card-side p-0 border-none" style={{ backgroundColor: donation.card_bg }}>
                        <figure><img src={donation.picture} alt={donation.title} className="h-[205px]"/></figure>
                            <div className="text-left p-4 space-y-2">
                                <button style={{ backgroundColor: donation.card_bg, color: donation.text_button_bg }} className="btn btn-xs border-none">{donation.category}</button>
                                <h2 className="font-semibold text-xl">{donation.title}</h2>
                                <h2 style={{color: donation.text_button_bg }}>{donation.price}</h2>
                                <Link to={`/${donation.id}`}><button style={{backgroundColor: donation.text_button_bg }} className="rounded btn btn-sm text-white border-none mt-3">View Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
                
            </div>
            <div className="donationsBtn-div text-center flex justify-center items-center  my-12">
                <div className={dataLength == donatedDonations.length && 'hidden'}>
                <button onClick={() => setDataLength(donatedDonations.length)} className="rounded btn btn-sm text-white border-none mt-3 bg-donation-primary w-20">see all</button>
                </div>
            </div>
        </div>
    );
};

export default Donations;