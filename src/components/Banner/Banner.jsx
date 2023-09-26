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
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> */}
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