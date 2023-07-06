import React from 'react';
import ExperienceCard from './experienceCard';

function experience() {
    const experienceData = [
        {
            company: 'SpaceBridge',
            startDate: 'June 2022',
            endDate: 'Aug 2022',
            description: ['Developed an automated test suite using python for quality testing of satellite communication channels', 'Reduced hardware testing time from 4 months to under 48 hours by replacing old manual testing standards with automated ones', 'Designed a user-friendly Jenkins interface with over 20 customizable test parameters to streamline test execution', 'Reduced the time that it takes to diagnose system bugs by over 60%'],
            picture: 'https://www.spacebridge.com/wp-content/uploads/2020/09/new-logo.png',
            title: 'Software Developer Intern',
        },
        {
            company: 'Company B',
            startDate: 'Feb 2021',
            endDate: 'Present',
            description: ['Developed web applications', 'Implemented new features', 'Developed web applications', 'Developed web applications', 'Developed web applications Developed Developed Developed Developed Developed Developed Developed Developed DevelopedDeveloped  DevelopedDeveloped Developed Developed '],
            picture: 'https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg',
            title: 'Frontend Developer',
        },
        {
            company: 'Company C',
            startDate: 'Mar 2019',
            endDate: 'Jul 2022',
            description: ['Led a team of developers', 'Implemented software solutions'],
            picture: 'https://blog.hubspot.com/hubfs/image8-2.jpg',
            title: 'Software Development Manager',
        },
        {
            company: 'Company D',
            startDate: 'Aug 2022',
            endDate: 'Present',
            description: ['Designed user interfaces', 'Collaborated with UX team'],
            picture: 'https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg',
            title: 'UI/UX Designer',
        },
        // Add more objects to the array with different experience data
    ];

    return (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center">
            {experienceData.map((experience, index) => (
                <ExperienceCard key={index} vals={experience} />
            ))}
        </section>
    );
}

export default experience;
