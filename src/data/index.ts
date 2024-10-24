import { Task } from "@/types";

export const dataTasks: Task[] = [
  {
    id: 1,
    title: "Titre de tache",
    priority: {
      label: "Haute",
    },
    status: {
      label: "A faire",
    },
    description: "Fournisseur, N° Tel, 2 ou 3 articles parmis les...",
    collaborators: [
      { initials: "MN", color: "#26A4DA" },
      { initials: "AB", color: "#1F1F1F" },
    ],
  },
  {
    id: 2,
    title: "Titre de tache",
    priority: {
      label: "Moyenne",
    },
    status: {
      label: "En cours",
    },
    description: "Fournisseur, N° Tel, 2 ou 3 articles parmis les...",
    collaborators: [
      { initials: "MN", color: "#26A4DA" },
      { initials: "AB", color: "#1F1F1F" },
    ],
  },
  {
    id: 3,
    title: "Titre de tache",
    priority: {
      label: "Basse",
    },
    status: {
      label: "Terminé",
    },
    description: "Fournisseur, N° Tel, 2 ou 3 articles parmis les...",
    collaborators: [
      { initials: "MN", color: "#26A4DA" },
      { initials: "AB", color: "#1F1F1F" },
    ],
  },
];
