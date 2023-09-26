import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Donation = ({donation}) => {
    const{id, title, price} = donation;

    const navigate = useNavigate();

    const donationStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px'
    }

    const handleShowDonation = () => {
        navigate(`/${id}`);
    }

    return (
        <div style={donationStyle}>
            {id}{title}{price}
            <Link to={`/${id}`}><button>donationDetailsButton</button></Link>
            <button onClick={handleShowDonation}>Click to see details</button>
        </div>
    );
};

Donation.propTypes = {
    donation: PropTypes.object
}

export default Donation;