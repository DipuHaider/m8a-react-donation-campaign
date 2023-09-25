const Donation = ({donation}) => {
    const{id, title, price} = donation;
    return (
        <div>
            {id}{title}{price}
        </div>
    );
};

export default Donation;