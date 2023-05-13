import img1 from '../../../assets/images/author/author1.png'
import img2 from '../../../assets/images/author/author2.png'
// import img3 from '../../../assets/icons/quote.svg'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const TestimonialSection = () => {
    return (
        <div className="text-center mt-36">
            <h6 className="text-2xl text-orange-500 font-bold">Testimonial</h6>
            <h2 className="text-5xl font-bold mt-5">What Customer Says</h2>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-lg text-gray-500 mt-4">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            <div className="grid lg:grid-cols-2 gap-6 mt-[50px]">
                <div className='lg:w-[558px] p-12'>
                    <div className='flex gap-5'>
                    <div>
                        <img className='w-14 rounded-full' src={img1} alt="" />
                    </div>
                    <div>
                        <h6 className='text-xl font-bold'>Henry Civil</h6>
                        <p className='text-gray-500 font-bold'>Businessman</p>
                    </div>
                    </div>
                    <div>
                        <p className='text-base text-gray-500 text-left my-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <Rating style={{ maxWidth: 120 }} value={5} />
                    </div>
                </div>
                <div className='lg:w-[558px] p-12'>
                    <div className='flex gap-5'>
                    <div>
                        <img className='w-14 rounded-full' src={img2} alt="" />
                    </div>
                    <div>
                        <h6 className='text-xl font-bold'>Henry Civil</h6>
                        <p className='text-gray-500 font-bold'>Businessman</p>
                    </div>
                    </div>
                    <div>
                        <p className='text-base text-gray-500 text-left my-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <Rating style={{ maxWidth: 120 }} value={5} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;