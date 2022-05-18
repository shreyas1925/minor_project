// import InstagramIcon from "@material-ui/icons/Instagram";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import TwitterIcon from "@material-ui/icons/Twitter";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="overflow-hidden grid grid-cols-1 md:grid-cols-4 gap-y-4 md:px-36 px-12 py-14 bg-gray-100 text-gray-600">
            <div className="space-y-4 text-md text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p>NIE Hostel</p>
                <p>NIE Hostel</p>
                <p>NIE Hostel</p>
                <p>NIE Hostel</p>
                <p>NIE Hostel</p>
            </div>
            <div className="space-y-4 text-md text-gray-800">
                <h5 className="font-bold">HOST</h5>
                <p>NIE Hostel</p>
                <p>NIE Hostel</p>
                <p>NIE Hostel</p>
                <p>NIE Hostel</p>
                <p>NIE Hostel</p>
            </div>

            <div className="space-y-4 text-md text-gray-800">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>NIE Hostel</p>
                <p>NIE Hostel</p>
                <p>NIE Hostel</p>
                <p>NIE Hostel</p>
            </div>

            <div className="space-y-4 text-md text-gray-800">
                <h5 className="font-bold">SUPPORT</h5>
                <p>NIE Hostel</p>
                <p>NIE Hostel</p>
                <p>NIE Hostel</p>
                <p>NIE Hostel</p>
                <p>NIE Hostel</p>
            </div>

            {/* <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold mt-3 mb-4">CONTACT US</h5>
                <div className="flex justify-between sm:m-4 cursor-pointer">
                    <a href="https://github.com/shreyas1925" target="_blank">
                        <GitHubIcon />
                    </a>
                    <Link href="/">
                        <InstagramIcon />
                    </Link>
                    <Link href="/">
                        <LinkedInIcon />
                    </Link>
                    <Link href="/">
                        <TwitterIcon />
                    </Link>
                </div>
            </div> */}

            <div className="space-y-4 text-md text-gray-800">
                <h5 className="font-semibold w-62 mt-5 md:w-screen">
                    &copy; Terms & Conditions | All Rights Reserved | 2022 NIE Men's Hostel
                </h5>
            </div>
        </div>
    );
};

export default Footer;
