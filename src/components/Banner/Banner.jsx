const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/zPVNgKX/banner.jpg)'}}>
            <div className="hero-overlay bg-opacity-90 bg-white"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-4xl ">
                        <h1 className="mb-5 text-5xl font-bold text-donation-dark">I Grow By Helping People In Need</h1>
                        <div className="form-control">
                            <div className="input-group justify-center">
                                <input type="text" placeholder="Search here…" className="input input-bordered" />
                                <button className="btn btn-square text-white bg-donation-primary border-donation-primary w-[80px] text-sm font-semibold capitalize">Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;