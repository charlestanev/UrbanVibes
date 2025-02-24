import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

const MainContent = () => {
    return (
        <section className="relative">
            <img src="images/cover-main-section.jpg" alt="Site Logo" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex justify-center items-center text-white text-3xl">
                <div className="flex min-h-full items-center justify-center">
                    <div className="space-y-6">
                        <div className="text-white text-center">
                            <p className="text-4xl capitalize font-bold mb-4">
                                Discover places that people love
                            </p>
                            <p className="text-lg">
                                We will <Link href='https://www.google.com/' className="font-semibold text-blue-600">help you</Link> find the best places in the world.
                            </p>
                        </div>

                        <div className="flex gap-5">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="rounded-md w-80 bg-white text-gray-600 py-2.5 px-6 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="I'm Looking for..."
                                    className="rounded-md w-80 bg-white text-gray-600 py-2.5 px-6 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>
                            <div>
                                <Button
                                    label="Search"
                                    className="text-lg py-3.5 px-6"
                                    variant="solid"
                                    icon="search"
                                    iconPosition="left"
                                >
                                </Button>
                            </div>
                        </div>

                        <div>
                            <ul className="flex justify-center gap-5 text-sm text-white mb-5">
                                <li className="capitalize">
                                    <Link href="/" className="hover:text-amber-500 flex items-center gap-1">
                                        <span className="material-icons align-middle hidden md:inline-flex">restaurant</span>
                                        Restaurants
                                    </Link>
                                </li>
                                <li className="capitalize">
                                    <Link href="/" className="hover:text-amber-500 flex items-center gap-1">
                                        <span className="material-icons align-middle hidden md:inline-flex">local_cafe</span>
                                        Cafe
                                    </Link>
                                </li>
                                <li className="capitalize">
                                    <Link href="/" className="hover:text-amber-500 flex items-center gap-1">
                                        <span className="material-icons align-middle hidden md:inline-flex">fitness_center</span>
                                        Gym
                                    </Link>
                                </li>
                                <li className="capitalize">
                                    <Link href="/" className="hover:text-amber-500 flex items-center gap-1">
                                        <span className="material-icons align-middle hidden md:inline-flex">local_hospital</span>
                                        Hospital
                                    </Link>
                                </li>
                                <li className="capitalize">
                                    <Link href="/" className="hover:text-amber-500 flex items-center gap-1">
                                        <span className="material-icons align-middle hidden md:inline-flex">school</span>
                                        School
                                    </Link>
                                </li>
                                <li className="capitalize">
                                    <Link href="/" className="hover:text-amber-500 flex items-center gap-1">
                                        <span className="material-icons align-middle hidden md:inline-flex">shopping_cart</span>
                                        Shopping
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default MainContent;
