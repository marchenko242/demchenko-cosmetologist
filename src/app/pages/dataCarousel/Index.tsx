// pages/index.tsx
import React from "react";
import PhotoCarousel from "@/app/components/carousel/CarouselReview";

const images = [
    "/reviewsImages/1.png",
    "https://thumbs.dreamstime.com/b/beautiful-view-nature-mountains-near-konigssee-lake-bavaria-germany-blue-sky-clouds-97444419.jpg",
    "https://st2.depositphotos.com/4317479/7411/i/450/depositphotos_74114631-stock-photo-early-morning-in-laseshina.jpg",
    "https://thumbs.dreamstime.com/b/aerial-view-lago-antorno-dolomites-lake-mountain-landscape-alps-peak-misurina-cortina-di-ampezzo-italy-reflected-103752677.jpg",
];

const Home: React.FC = () => {
    return (
        <div>
            <PhotoCarousel images={images} />
        </div>
    );
};

export default Home;
