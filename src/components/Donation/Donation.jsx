import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';

const Donation = ({donation}) => {
    const{id, title, picture, category, card_bg, category_bg, text_button_bg} = donation;

    // const navigate = useNavigate();

     const cardBg = {
        backgroundColor: card_bg,
     }
     const titleColor = {
        color: text_button_bg,
     }
     const customButtonColor = {
        color: text_button_bg,
        backgroundColor: category_bg,
     }


    // const handleShowDonation = () => {
    //     navigate(`/${id}`);
    // }

    return (
        <div>
            <Link to={`/${id}`}>
            {/* <Link to={`/${id}`}><button>donationDetailsButton</button></Link> */}
            {/* <button onClick={handleShowDonation}>Click to see details</button> */}
                <div style={cardBg} className="card border-none p-0 rounded-lg">
                {/* <div className="card w-96 border-none bg-slate-600 p-0"> */}
                    <figure className="">
                        <img src={picture} alt={title} className="rounded-b-none" />
                    </figure>
                    <div className="text-left p-4 justify-start space-y-2">
                        <button style={customButtonColor} className="btn btn-xs border-none">{category}</button>
                        <h2 style={titleColor} className="font-semibold text-xl">{title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Donation.propTypes = {
    donation: PropTypes.object
}

export default Donation;