import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import './DonationDetail.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DonationDetail = () => {

    const donations = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const donation = donations.find(donation => donation.id === idInt);

    const customButtonColor = {
        backgroundColor: donation.text_button_bg,
    }

    const notify = () => toast("Donation added successfully.!!!");

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        
        <div className="donationDetail-container relative items-center justify-center space-y-7">
            
            <div className="flex flex-col mt-32 relative">
                <img className="rounded-2xl w-full" src={donation.picture} alt={donation.title} />
                <div className="bg-donation-txt50 min-h-[130px] p-9 rounded-b-2xl absolute left-0 right-0 bottom-0">
                    <button onClick={notify} style={customButtonColor} className="rounded btn text-white border-none">Donate {donation.price}</button>
                    <ToastContainer />
                </div>
            </div>
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-donation-dark">{donation.title}</h1>
                <p className="text-donation-txt70 text-base font-normal leading-7 text-justify">{donation.description}</p>
            </div>
            <div>
                <button onClick={handleGoBack}>Go back</button>
            </div>
        </div>
    );
};

export default DonationDetail;