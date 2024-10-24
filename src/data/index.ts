import { Task } from "@/types";

import storeIcon from "@/assets/icons/store.svg";
import rotateIcon from "@/assets/icons/rotate.svg";
import balisageIcon from "@/assets/icons/balisage.svg";
import inventaireIcon from "@/assets/icons/inventaire.svg";

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

export const menuItemsData = [
  {
    label: "Divers",
    icon: rotateIcon,
    onClick: () => console.log("Divers clicked"),
  },
  {
    label: "Achat",
    icon: storeIcon,
    onClick: () => console.log("Achat clicked"),
  },
  {
    label: "Inventaire",
    icon: inventaireIcon,
    onClick: () => console.log("Inventaire clicked"),
  },
  {
    label: "Balisage",
    icon: balisageIcon,
    onClick: () => console.log("Balisage clicked"),
  },
];

export const tasksType = [
  { label: "Drivers" },
  { label: "Achat" },
  { label: "Type" },
];

export const tasksPriority = [
  { label: "Haute" },
  { label: "Moyenne" },
  { label: "Basse" },
];

export const tasksStatus = [
  { label: "A faire" },
  { label: "En cours" },
  { label: "Terminé" },
];

export const utilisateur = [
  { label: "Mehdi Naitmazi" },
  { label: "Abdelhak Bouzidi" },
  { label: "Mehdi Naitmazi" },
];
