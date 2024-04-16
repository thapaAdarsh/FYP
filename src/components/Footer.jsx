import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='Main_page'>
                <div className="main-row-1 ">

                </div>
            </div>
            <div className="footer p-3 md:hidden">
                <div className="first-col">
                    <div className="grid space-y-2">
                        <a href="" className="">
                            <img src="/img/" alt="" />
                            <p className="cursor-pointer text-lg font-light">Home</p>
                        </a>
                        <a href="">
                            <img src="" alt="" />
                            <p className="cursor-pointer text-lg font-light">Menu</p>
                        </a>
                        <a href="">
                            <img src="" alt="" />
                            <p className="cursor-pointer text-lg font-light">Table booking</p>
                        </a>
                        <a href="">
                            <img src="" alt="" />
                            <p className="cursor-pointer text-lg font-light">Exclusive Deals</p>
                        </a>
                        <a href="">
                            <img src="" alt="" />
                            <p className="cursor-pointer text-lg font-light">Nutritions calculator</p>
                        </a>
                    </div>
                </div>
                <div className="icons">
                    <div
                        className="icons flex space-x-6 justify-center xl:ml-40 mt-4 xl:mb-36 xl:mt-14 md:mt-6 md:justify-start md:mb-10">
                        <p className="border-t border-black w-16 xl:w-40 md:w-24 mt-4 md:hidden xl:hidden"></p>
                        <img src="/img/icons8-facebook-30.png" alt="" className="cursor-pointer" />
                        <img src="/img/icons8-instagram-30.png" alt="" className="cursor-pointer" />
                        <img src="/img/icons8-twitter-30.png" alt="" className="cursor-pointer" />
                        <p className="border-t border-black w-16 xl:w-40 md:w-24 mt-4"></p>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="flex flex-col space-y-4 text-xs">
                    <div className="second-col flex justify-between">
                        <p className="text-center">Privacy</p>
                        <p className="text-center">Terms and conditions</p>
                        <p className="text-center">Accessibility</p>
                    </div>
                    <div className="">
                        <p className="text-center">Don't sell any personal information about any other.</p>
                    </div>
                    <div className="third-col">
                        <p className="text-center">Website settings</p>
                    </div>
                    <div className="fourth-col flex justify-center">
                        <img src="/img/logo1.png" alt="" className="h-10 w-auto" />
                        <p className="text-center p-4">©2022-2023 Khana Aau. All Rights Reserved</p>
                    </div>
                </div>
            </div>
            <div className="footer hidden md:block lg:my-16 max-w-6xl mx-auto">
                <div className="lg:flex lg:justify-between">
                    <div className="image">
                        <img src="/img/logo1.png" alt="" className="w-auto h-24" />
                        <p className='font-base text-xl font-david-libre font-bold'>Opening Day-Hour</p>
                        <p className=''>Sunday-Friday</p>
                        <p>Hours : 10:00 - 5:00</p>
                        <p></p>
                        <p className='font-base text-xl font-bold font-david-libre'>Saturday : Closed</p>
                    </div>
                    {/* <div className="footer-container flex justify-between mx-8  lg:mx-auto"> */}
                        <div className="first-col flex justify-between flex-col">
                            <p className="font-semibold">Khana aau</p>
                            <Link to=""><span className="">Home</span></Link>
                            <Link to=""><span className="">Menu</span></Link>
                            <Link to=""><span className="">Table Booking</span></Link>
                            <Link to=""><span className="">Exclusive Deals</span></Link>
                            <Link to=""><span className="">Nutrition's Calculator</span></Link>
                        </div>
                        <div className="third-col flex flex-col space-y-6">
                            <p className="font-semibold">Main Products</p>
                            <Link to=""><span className="">Burger</span></Link>
                            <Link to=""><span className="">Pizza</span></Link>
                            <Link to=""><span className="">Sandwich</span></Link>
                            <Link to=""><span className="">Cold Drinks</span></Link>
                            <Link to=""><span className="">Katti Roll</span></Link>
                            <Link to=""><span className="">Cold Drinks</span></Link>
                        </div>
                        <div className="forth-col support md:block ">
                            <div className="flex flex-col space-y-6">
                                <p className="font-semibold">Keep Connected</p>
                                <div className="facebook">
                                    <Link to="" className="flex space-x-2 items-center">
                                        <img src="/img/facebook.png" alt="" className='h-8'/>
                                        <span> Follow us on Facebook</span>
                                    </Link>
                                </div>
                                <div className="Instagram">
                                    <Link to="" className="flex space-x-2 items-center">
                                        <img src="/img/instagram.png" alt="" className='h-8'/>
                                        <span>Follow us on Instagram</span>
                                    </Link>
                                </div>
                                <div className="twitter">
                                    <Link to="" className="flex space-x-2 items-center">
                                        <img src="/img/twitter.png" alt="" className='h-8'/>
                                        <span>Follow us on Twitter</span>
                                    </Link>
                                </div>
                                <div className="viber">
                                    <Link to="" className="flex space-x-2 items-center">
                                        <img src="/img/viber.png" alt="" className='h-8'/>
                                        <span>Follow us on Viber</span>
                                    </Link>
                                </div>
                                <div className="facebook">
                                    <Link to="" className="flex space-x-2 items-center">
                                        <img src="/img/telegram.png" alt="" className='h-8'/>
                                        <span>Follow us on Telegram</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
                <hr className="border-black m-auto my-10" />
                <div className="last-footer">
                    <p className=" first-letter:mt-4 first-line:uppercase font-bold first-letter:text-6xl font-serif text-center">Thank for visiting our website.</p>
                    <p className="text-center"> © 2023 Restaurant Management System.</p>
                </div>
            </div>

        </>
    )
}

export default Footer
