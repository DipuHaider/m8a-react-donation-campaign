import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';

const Donation = ({donation}) => {
    const{id, title, picture, category, card_bg, category_bg, text_button_bg} = donation;

    // const navigate = useNavigate();

    const donationStyle = {
        // border: '2px solid yellow',
        // padding: '10px',
        borderRadius: '20px',
        
    }
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
        <div style={donationStyle}>
            <Link to={`/${id}`}>
            {/* <Link to={`/${id}`}><button>donationDetailsButton</button></Link> */}
            {/* <button onClick={handleShowDonation}>Click to see details</button> */}
                <div style={cardBg} className="card w-96 border-none  p-0">
                {/* <div className="card w-96 border-none bg-slate-600 p-0"> */}
                    <figure className="">
                        <img src={picture} alt="Shoes" className="rounded-b-none" />
                    </figure>
                    <div className="card-body text-left">
                        <button style={customButtonColor} className="btn btn-sm">{category}</button>
                        <h2 style={titleColor} className="card-title">{title}</h2>
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