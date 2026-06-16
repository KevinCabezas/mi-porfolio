export type Project = {
  id: number;
  title: string;
  description: string;
  frontpage: string;
  icon: string;
  // image: string[] | null;
  stack: string[];
}


export type Props = Project & {
  onOpen: () => void;
}

type TStack = {
  name: string;
  icon: string;
}

export type TDetailsProject = {
  id: number;
  title: string;
  icon: string;
  description_details: string;
  image: string[];
  age: string;
  state: string;
  repository: string;
  link: string | "";
  stack_details: TStack[];
}