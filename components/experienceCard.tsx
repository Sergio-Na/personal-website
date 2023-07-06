import React from 'react';

type Info = {
    company: string;
    startDate: string;
    endDate: string;
    description: string[];
    picture: string;
    title: string;
};

type ExperienceCardProps = {
    vals: Info;
};

function ExperienceCard({ vals }: ExperienceCardProps) {
    const { company, startDate, endDate, description, picture, title } = vals;

    return (
        <div className="flex flex-col items-center p-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="flex justify-center">
                <img src={picture} alt={title} className="w-40 h-40 object-contain" />
            </div>

            <h2 className="mt-4 text-xl font-semibold text-black dark:text-gray-200">{title}</h2>
            <h3 className="text-sm text-gray-600 dark:text-gray-200">
                {startDate} - {endDate}
            </h3>
            <ul className="mt-2 text-gray-700 dark:text-gray-200 list-disc list-inside">
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ExperienceCard;
