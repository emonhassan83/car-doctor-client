import img1 from '../../../assets/icons/group.svg'
import img2 from '../../../assets/icons/clock.svg'
import img3 from '../../../assets/icons/person.svg'
import img4 from '../../../assets/icons/Wrench.svg'
import img5 from '../../../assets/icons/check.svg'
import img6 from '../../../assets/icons/deliveryt.svg'

const CoreFeatures = () => {
    return (
        <div className="text-center mt-36">
            <h6 className="text-2xl text-orange-500 font-bold">Core Features</h6>
            <h2 className="text-5xl font-bold mt-5">Why Choose Us</h2>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-lg text-gray-500 mt-4">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-[50px]'>
                <div className='lg:w-[170px] lg:h-[156px] text-center'>
                    <img className='mx-auto' src={img1} alt="" />
                    <h6 className='text-lg font-bold mt-5'>Expert Team</h6>
                </div>
                <div className='lg:w-[170px] lg:h-[156px] text-center'>
                    <img className='mx-auto' src={img2} alt="" />
                    <h6 className='text-lg font-bold mt-5'>Timely Delivery</h6>
                </div>
                <div className='lg:w-[170px] lg:h-[156px] text-center'>
                    <img className='mx-auto' src={img3} alt="" />
                    <h6 className='text-lg font-bold mt-5'>24/7 Support</h6>
                </div>
                <div className='lg:w-[170px] lg:h-[156px] text-center'>
                    <img className='mx-auto' src={img4} alt="" />
                    <h6 className='text-lg font-bold mt-5'>Best Equipment</h6>
                </div>
                <div className='lg:w-[170px] lg:h-[156px] text-center'>
                    <img className='mx-auto' src={img5} alt="" />
                    <h6 className='text-lg font-bold mt-5'>100% Guranty</h6>
                </div>
                <div className='lg:w-[170px] lg:h-[156px] text-center'>
                    <img className='mx-auto' src={img6} alt="" />
                    <h6 className='text-lg font-bold mt-5'>Timely Delivery</h6>
                </div>
            </div>
        </div>
    );
};

export default CoreFeatures;