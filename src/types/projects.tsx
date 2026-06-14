export type Project = {
  id: number;
  title: string;
  description: string;
  frontpage: string;
  icon: string;
  image: string[] | null;
  stack: string[];
}


export type Props = Project & {
  onOpen: () => void;
}