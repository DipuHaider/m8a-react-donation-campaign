import { useLoaderData, useNavigate } from "react-router-dom";

const DonationDetail = () => {

    const donation = useLoaderData();
    

    const navigate = useNavigate();

    const{id, title, price} = donation;
    console.log({id})

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h1>Donation detail</h1>
            <h2>length: 
            </h2>
            {id}{title}{price}
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default DonationDetail;