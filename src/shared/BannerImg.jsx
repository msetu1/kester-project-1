import './bannerImg.css';
const BannerImg = ({subHeading,heading}) => {
    return (
        <div className='section-bg'>
            <div className='max-w-7xl mx-auto pt-72 pb-32 mb-10 text-white'>
            <h1 className='uppercase text-xl mb-4'>{subHeading}</h1>
            <h1 className='text-6xl font-bold uppercase'>{heading}</h1>
           
            </div>
        </div>
    );
};

export default BannerImg;