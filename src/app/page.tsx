import Header from "@/app/components/Header/Header";
import About from "@/app/components/About/About";
import Footer from "@/app/components/Footer/Footer";
import Services from "@/app/pages/services/Services";
import Contact from "@/app/components/Contact/Contact";
import Carousel from "@/app/components/carousel/CarouselReview";

export default function Home() {

    const images = [
        "/reviewsImages/1.png",
        "/reviewsImages/2.png",
        "/reviewsImages/3.png",
        "/reviewsImages/4.png",
        "/reviewsImages/5.png",
        "/reviewsImages/6.png",
        "/reviewsImages/7.png",
        "/reviewsImages/8.png",
        "/reviewsImages/9.png",
        "/reviewsImages/10.png",
        "/reviewsImages/11.png",
    ];

    return (
        <div>
            <div id="header">
                <div className="fullPageHeader">
                    <Header />
                </div>
            </div>
            <div id="about">
                <div className="fullPageAbout">
                    <About />
                </div>
            </div>
            <div id="services">
                <div className="fullPageServices">
                    <Services />
                </div>
            </div>
            <div id="reviews">
                <div className="fullPageReviews">
                    <Carousel images={images}/>
                </div>
            </div>
            <div id="contact">
                <div className="fullPageContact">
                    <Contact/>
                </div>
            </div>
            <div id="footer">
                <div>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}
