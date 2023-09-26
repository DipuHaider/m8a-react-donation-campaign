import { useLoaderData, useNavigate, useParams } from "react-router-dom";

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
        <div>
            {/* <button onClick={handleGoBack}>Go back</button> */}
            <div className="grid grid-cols-4">
                    {donation.title}
            </div>
        </div>
    );
};

export default DonationDetail;