type Collaborator = {
  initials: string;
  color: string;
  label?: string;
};

type Priority = {
  label: "Haute" | "Moyenne" | "Basse";
};

type Status = {
  label: "A faire" | "En cours" | "Terminé";
};

export type Task = {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
  collaborators: Collaborator[];
};
