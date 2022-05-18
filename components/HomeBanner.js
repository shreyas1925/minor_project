// import Image from "next/image";
import headerStyles from "../styles/HomeBanner.module.css";

const HomeBanner = () => {
    return (
        <div
            className="relative h-[310px] sm:h-[400px] md:h-[510px] xl:h-[710px] 2xl:h-[700
    px]"
        >
            <div className={headerStyles.image}>
            </div>

            <div className="banner_main absolute top-1/2  w-full text-center">
                <p className="text-lg font-bold text-white ">
                    Minor project for NIE Men's Hostel
                </p>
                <button
                    className="bg-blue-500 text-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl
        active:scale-90 transition duration-150"
                >
                    Connect
                </button>
            </div>
        </div>
    );
};

export default HomeBanner;
