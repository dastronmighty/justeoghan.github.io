export interface Achievement {
    title: string;
    description: string;
    date: string;
    icon?: string;
    link?: string;
}

export const achievementsData: Achievement[] = [
    {
        title: "Bachelor of Science in Computer Science With Data Science",
        description: "First Class Honours with a focus on Data Science from University College Dublin.",
        date: "2017 - 2021",
        icon: "/icons/degree-credential.svg",
    },
    {
        title: "Franz Geiselbrechtinger Medal.",
        description: "Franz Geiselbrechtinger Medal for best Final Year Project.",
        date: "2021",
        icon: "/icons/award-2.svg",
    },
    {
        title: "KPMG Dublin Case Study Competion",
        description: "Came First place in KPMG Case Study Competition in Dublin.",
        date: "2019",
        icon: "/icons/features-alt.svg",
    },
    {
        title: "Prompt Engineering for ChatGPT",
        description: "Completed the Prompt Engineering for ChatGPT by Vanderbilt University on Coursera.",
        date: "2024",
        icon: "/icons/award-2.svg",
        link: "https://coursera.org/share/01e0be33ccc48d5f1bc8c085baec8714",
    },
    {
        title: "Generative AI Essentials: Overview and Impact",
        description: "Completed the Generative AI Essentials: Overview and Impact course by University of Michigan on Coursera.",
        date: "2024",
        icon: "/icons/award-2.svg",
        link: "https://coursera.org/share/8ecd5d2cbbe5f5e984003488fde429e2",
    },
    {
        title: "Introduction to Cloud Computing",
        description: "Completed the Introduction to Cloud Computing by IBM on Coursera.",
        date: "2023",
        icon: "/icons/award-2.svg",
        link: "https://coursera.org/share/bd6e51ffb2a9fdfefa22aabae69d8337",
    },
    {
        title: "Introduction to Large Language Models",
        description: "Completed the Introduction to Large Language Modelst course by Google Cloud on Coursera.",
        date: "2024",
        icon: "/icons/award-2.svg",
        link: "https://coursera.org/share/7665331001b3c4898be5de42c95f4654",
    },
    {
        title: "Generative AI with Large Language Models",
        description: "Completed the Generative AI with Large Language Models course by DeepLearning.AI on Coursera.",
        date: "2024",
        icon: "/icons/award-2.svg",
        link: "https://coursera.org/share/2079c8d3624d4d0ab5147febf59f643f",
    },
];
