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
        title: "Franz Geiselbrechtinger Medal",
        description: "Franz Geiselbrechtinger Medal for best Final Year Project.",
        date: "2021",
        icon: "/icons/award-2.svg",
    },
    {
        title: "Mathematical Competition in Modellign Honourable Mention",
        description: "During college me and Two Colleagues entered the Mathematical Competition in Modelling. We got a \"Honorable Mention\" which only about 21% of teams get",
        date: "2019",
        icon: "/icons/features-alt.svg",
    },
    {
        title: "KPMG Dublin Case Study Competion",
        description: "Came First place in KPMG Case Study Competition in Dublin.",
        date: "2019",
        icon: "/icons/features-alt.svg",
    }
];
