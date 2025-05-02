import Slider from 'react-slick';

// Vite asset import fix for .hdr files
// @ts-ignore

const ImageSlider = () => {
    const images = [
        'https://source.unsplash.com/random/800x400?car1',
        'https://source.unsplash.com/random/800x400?car2',
        'https://source.unsplash.com/random/800x400?car3',
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-4">
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index}>
                        <img src={src} alt={`Slide ${index}`} className="rounded-xl w-full h-64 object-cover" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
