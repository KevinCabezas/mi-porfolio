export interface Section {
  icono: string;
  titulo: string;
  path: string;
  boton: string;
}

export const sections: Section[] = [
  {
    icono: "material-symbols:home-rounded",
    titulo: "nav_home",
    path: "/",
    boton: ""
  },
  {
    icono: "iconamoon:profile-fill",
    titulo: "nav_about",
    path: "about",
    boton: "btn_about"
  },
  {
    icono: "material-symbols:dashboard-2-gear-rounded",
    titulo: "nav_projects",
    path: "projects",
    boton: "btn_projects"
  },
  {
    icono: "flowbite:brain-solid",
    titulo: "nav_skills",
    path: "skills",
    boton: "btn_skills"
  },
  {
    icono: "tabler:briefcase-filled",
    titulo: "nav_history",
    path: "history",
    boton: "btn_history"
  },
  {
    icono: "tabler:school-filled",
    titulo: "nav_education",
    path: "education",
    boton: "btn_education"
  },
  {
    icono: "famicons:call",
    titulo: "nav_contact",
    path: "contact",
    boton: "btn_contact"
  }
];