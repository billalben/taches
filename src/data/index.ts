import { Task } from "@/types";

import storeIcon from "@/assets/icons/store.svg";
import rotateIcon from "@/assets/icons/rotate.svg";
import balisageIcon from "@/assets/icons/balisage.svg";
import inventaireIcon from "@/assets/icons/inventaire.svg";

export const dataTasks: Task[] = [
  {
    id: 1,
    title: "Planification de la réunion",
    priority: {
      label: "Haute",
    },
    status: {
      label: "A faire",
    },
    description: "Préparer l'ordre du jour et informer tous les participants.",
    collaborators: [
      { initials: "MN", color: "#26A4DA" },
      { initials: "AB", color: "#1F1F1F" },
      { initials: "CJ", color: "#DA2626" },
    ],
  },
  {
    id: 2,
    title: "Développement de la fonctionnalité",
    priority: {
      label: "Moyenne",
    },
    status: {
      label: "En cours",
    },
    description: "Coder la fonctionnalité X et réaliser les tests unitaires.",
    collaborators: [
      { initials: "KP", color: "#DAA520" },
    ],
  },
  {
    id: 3,
    title: "Revue de code",
    priority: {
      label: "Basse",
    },
    status: {
      label: "Terminé",
    },
    description: "Revoir et approuver les modifications de code de l'équipe.",
    collaborators: [
      { initials: "TR", color: "#8A2BE2" },
      { initials: "MJ", color: "#1F1F1F" },
      { initials: "JL", color: "#26A4DA" },
    ],
  },
  {
    id: 4,
    title: "Mise à jour de la documentation",
    priority: {
      label: "Basse",
    },
    status: {
      label: "A faire",
    },
    description: "Mettre à jour les guides de l'utilisateur et les API docs.",
    collaborators: [
      { initials: "SJ", color: "#FF4500" },
      { initials: "MM", color: "#FFD700" },
    ],
  },
  {
    id: 5,
    title: "Déploiement de la version 1.2",
    priority: {
      label: "Haute",
    },
    status: {
      label: "En cours",
    },
    description: "Déployer la version 1.2 sur l'environnement de production.",
    collaborators: [
      { initials: "BK", color: "#26A4DA" },
      { initials: "NW", color: "#6A5ACD" },
      { initials: "JL", color: "#FF6347" },
    ],
  },
  {
    id: 6,
    title: "Correction des bugs critiques",
    priority: {
      label: "Haute",
    },
    status: {
      label: "En cours",
    },
    description: "Analyser et corriger les bugs critiques détectés.",
    collaborators: [
      { initials: "RL", color: "#FF6347" },
    ],
  },
  {
    id: 7,
    title: "Test de régression",
    priority: {
      label: "Moyenne",
    },
    status: {
      label: "A faire",
    },
    description:
      "Effectuer des tests de régression sur les nouvelles fonctionnalités.",
    collaborators: [
      { initials: "EC", color: "#20B2AA" },
      { initials: "LS", color: "#FF8C00" },
    ],
  },
  {
    id: 8,
    title: "Analyse de performance",
    priority: {
      label: "Basse",
    },
    status: {
      label: "Terminé",
    },
    description:
      "Analyser les performances de l'application et faire un rapport.",
    collaborators: [
      { initials: "JM", color: "#26A4DA" },
      { initials: "ZK", color: "#A0522D" },
    ],
  },
  {
    id: 9,
    title: "Sécurisation des données",
    priority: {
      label: "Haute",
    },
    status: {
      label: "En cours",
    },
    description:
      "Mettre en place des politiques de sécurité et un audit de données.",
    collaborators: [
      { initials: "AA", color: "#DA2626" },
      { initials: "BB", color: "#26A4DA" },
    ],
  },
  {
    id: 10,
    title: "Formation des nouveaux employés",
    priority: {
      label: "Basse",
    },
    status: {
      label: "A faire",
    },
    description:
      "Organiser une session de formation pour les nouveaux collaborateurs.",
    collaborators: [
      { initials: "LN", color: "#26A4DA" },
      { initials: "MK", color: "#008080" },
    ],
  },
  {
    id: 11,
    title: "Planification de la feuille de route",
    priority: {
      label: "Moyenne",
    },
    status: {
      label: "A faire",
    },
    description:
      "Définir les objectifs de la prochaine feuille de route produit.",
    collaborators: [
      { initials: "SD", color: "#26A4DA" },
      { initials: "AR", color: "#DAA520" },
    ],
  },
  {
    id: 12,
    title: "Optimisation des requêtes SQL",
    priority: {
      label: "Haute",
    },
    status: {
      label: "Terminé",
    },
    description: "Optimiser les requêtes SQL pour améliorer les performances.",
    collaborators: [
      { initials: "RL", color: "#FFD700" },
      { initials: "HW", color: "#8A2BE2" },
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
