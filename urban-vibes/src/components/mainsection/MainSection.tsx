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
                    <div>
                        <div className="">
                            <p className="text-4xl capitalize font-bold mb-4">
                                Discover places that people love
                            </p>
                            <p className="text-lg">
                                We will <Link href='https://www.google.com/' className="font-semibold text-blue-600">help you</Link> find the best places in the world.
                            </p>
                        </div>

                        <div className="mt-6 flex flex-col gap-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="rounded-md w-80 bg-white text-gray-600 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="I'm Looking for..."
                                    className="rounded-md w-80 bg-white text-gray-600 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>
                            <div>
                                <Button
                                    label="Search"
                                    className="text-lg"
                                    variant="solid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default MainContent;
