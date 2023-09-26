import { useLoaderData, useParams } from "react-router-dom";
import './DonationDetail.css';

const DonationDetail = () => {

    const donations = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const donation = donations.find(donation => donation.id === idInt);
    // console.log(id);
    console.log(donation);
    
    // const navigate = useNavigate();

    // const{id, title, price} = donation;
    // console.log({id})

    // const handleGoBack = () => {
    //     navigate(-1);
    // }

    return (
        
        <div className="donationDetail-container relative items-center justify-center">
            {/* <button onClick={handleGoBack}>Go back</button> */}
            <div className="flex flex-col mt-32 relative">
                <img className="rounded-2xl w-full" src={donation.picture} alt={donation.title} />
                <div className="bg-donation-txt50 min-h-[130px] p-9 rounded-b-2xl absolute left-0 right-0 bottom-0">
                <button className="bg-donation-primary rounded btn text-white">Donate {donation.price}</button>
                </div>
                
            </div>
            <div>
                    <h1>{donation.title}</h1>
                    <p>{donation.description}</p>
                </div>
        </div>
    );
};

export default DonationDetail;