import React from 'react';
import ExperienceCard from './experienceCard';

function experience() {
    const experienceData = [
        {
            company: 'Coveo',
            startDate: 'Sept. 2023',
            endDate: 'Dec. 2023',
            description: ['Future intern on the Commerce Searchandizing team', 'Developing a cutting-edge SaaS product for businesses with AI-powered search capabilities', 'Utilizing React, TypeScript, Java, Kubernetes, and AWS technologies'],
            picture: 'https://logovectordl.com/wp-content/uploads/2020/05/coveo-solutions-inc-logo-vector.png',
            title: 'Software Developer Intern',
        },
        {
            company: 'IBM',
            startDate: 'May 2023',
            endDate: 'Aug 2023',
            description: ['Developed innovative demos using drones and robots for client engagement', 'Integrated computer vision and machine learning for accurate anomaly detection', 'Utilized Python, ROS, and Docker for efficient system coordination', 'Implemented SLAM algorithms for autonomous mapping and navigation', 'Collaborated with the Edge Computing team, improving demo experiences and client satisfaction'],
            picture: 'https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg',
            title: 'Software Engineer Intern',
        },
        {
            company: 'SpaceBridge',
            startDate: 'June 2022',
            endDate: 'Aug 2022',
            description: ['Automated test suite development in Python for quality testing of satellite communication channels', 'Significantly reduced hardware testing time from months to under 48 hours through automation', 'Designed user-friendly Jenkins interface with customizable test parameters for streamlined execution', 'Achieved over 60% reduction in system bug diagnosis time'],
            picture: 'https://www.spacebridge.com/wp-content/uploads/2020/09/new-logo.png',
            title: 'Software Developer Intern',
        },
        // Add more objects to the array with different experience data
    ];

    return (
        <section className="flex flex-col items-center">
            <h2 className="font-bold text-4xl text-blue-500 dark:text-stone-400 mt-8 mb-4">Experience</h2>
            <div className="grid gap-4 justify-center mx-4 sm:mx-8">
                {experienceData.map((experience, index) => (
                    <ExperienceCard key={index} vals={experience} />
                ))}
            </div>
        </section>
    );

}

export default experience;
