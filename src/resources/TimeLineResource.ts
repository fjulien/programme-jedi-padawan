import type {TimelineWeekByMonthType} from "@models/TimeLineModel.ts";
import {Config} from "@eliancodes/brutal-ui";

const color = () => Config.colors[Math.floor(Math.random() * Config.colors.length)];

export const timelineWeekByMonth: TimelineWeekByMonthType = [
    // 27
    {
        month: "mars",
        elementTimeline: [
            {
                title: "Début de programme jedi - padawan",
                weekNumber: 11,
                color: color(),
            },
            {
                events: ["Poster à DEVFEST LILLE", "Poster à DEVQUEST"],
                weekNumber: 12,
                color: color(),
            },
            {
                title: "Fin du premier mois",
                weekNumber: 13,
                color: color(),
            },
        ],
    },
    {
        month: "avril",
        elementTimeline: [
            {
                weekNumber: 14,
                color: color(),
            },
            {
                events: ["Formation feedbacks"],
                weekNumber: 15,
                color: color(),
            },
            {
                weekNumber: 16,
                color: color(),
            },
            {
                events: ["Interview de Christophe", "Feedbacks"],
                weekNumber: 17,
                color: color(),
            },
        ],
    },
    {
        month: "mai",
        elementTimeline: [
            {
                weekNumber: 18,
                color: color(),
            },
            {
                weekNumber: 19,
                color: color(),
            },
            {
                weekNumber: 20,
                events: ["Formation prise de parole fondamentaux"],
                color: color(),
            },
            {
                events: [
                    "Poster un article",
                    "Partager sur linkedin l'article",
                    "Point de suivi",
                    "Formation prise de parole avancée"
                ],
                weekNumber: 21,
                color: color(),
            },
        ],
    },
    {
        month: "juin",
        elementTimeline: [
            {
                events: ["Partage d'une veille", "Poster à un meetup", "Feedbacks"],
                weekNumber: 22,
                color: color(),
            },
            {
                events: ["EventTeck front"],
                weekNumber: 23,
                color: color(),
            },
            {
                events: ["Sensibilisation à la rédaction de contenu"],
                weekNumber: 24,
                color: color(),
            },
            {
                weekNumber: 25,
                color: color(),
            },
            {
                events: ["Partage d'une veille", "Feedbacks"],
                weekNumber: 26,
                color: color(),
            },
        ],
    },
    {
        month: "juillet",
        elementTimeline: [
            {
                weekNumber: 27,
                color: color(),
            },
            {
                weekNumber: 28,
                color: color(),
            },
            {
                weekNumber: 29,
                color: color(),
            },
            {
                events: [
                    "Partage d'une veille",
                    "Feedbacks",
                    "Animer un point technique",
                    "Donner une formation interne",
                    "Faire une qualification technique"
                ],
                weekNumber: 30,
                color: color(),
            },
        ],
    },
    {
        month: "août",
        elementTimeline: [
            {
                weekNumber: 31,
                color: color(),
            },
            {
                weekNumber: 32,
                color: color(),
            },
            {
                weekNumber: 33,
                color: color(),
            },
            {
                events: [
                    "Feedbacks", "Partage d'une veille",
                    "Participer à un projet open source",
                    "Mettre en place une veille efficace"],
                weekNumber: 34,
                color: color(),
            },
        ],
    },
    {
        month: "septembre",
        elementTimeline: [
            {
                weekNumber: 35,
                color: color(),
            },
            {
                weekNumber: 36,
                color: color(),
            },
            {
                title: "Fin du programme jedi padawan",
                weekNumber: 37,
                color: color(),
            },
        ],
    },
];