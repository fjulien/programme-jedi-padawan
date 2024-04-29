type Months =
    | "janvier"
    | "février"
    | "mars"
    | "avril"
    | "mai"
    | "juin"
    | "juillet"
    | "août"
    | "septembre"
    | "octobre"
    | "novembre"
    | "décembre";
export type TimelineWeekByMonthType = {
    month: Months;
    elementTimeline: TimelineWeekType[];
}[];

export const months: Months[] = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
];

export type TimelineWeekType = {
    title?: string;
    weekNumber: number;
    events?: string[];
    color: string;
};
export interface Props {
    timelineWeek: TimelineWeekType;
}