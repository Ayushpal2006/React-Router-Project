import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Developing in React brings flexibility and creativity to web applications, enabling developers to build dynamic user interfaces with ease. Every component comes together like building blocks, creating a seamless experience for both users and developers. The power of reusable code, combined with the robust React ecosystem, opens up endless possibilities for crafting beautiful and responsive designs.
                        </p>
                        <p className="mt-4 text-gray-600">
                        From managing state efficiently to rendering elements in real-time, React allows developers to focus on innovation and scalability. Each project presents new challenges, driving continuous learning and improvement in this ever-evolving field. The excitement of watching an idea transform into a fully functional application keeps developers motivated to push boundaries and explore new technologies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
