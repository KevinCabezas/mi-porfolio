import { useState } from "react";

export type Project = {
  id: number;
  title: string;
  description: string;
  frontpage: string;
  icon: string;
  image: File[] | null;
  stack: string[];
};

type Props = {
  onSubmit: (project: Project) => void;
};

export function ProjectForm({ onSubmit }: Props) {
  const [formData, setFormData] = useState<Project>({
    id: 0,
    title: "",
    description: "",
    frontpage: "",
    icon: "",
    image: null,
    stack: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.split(",").map((item) => item.trim());

    setFormData((prev) => ({
      ...prev,
      stack: value,
    }));
  };

  const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const filesArray = Array.from(e.target.files);

    setFormData((prev) => ({
      ...prev,
      image: filesArray,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="input-base"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="input-base"
      />

      <input
        name="frontpage"
        placeholder="Frontpage URL"
        value={formData.frontpage}
        onChange={handleChange}
        className="input-base"
      />

      <input
        name="icon"
        placeholder="Icon URL"
        value={formData.icon}
        onChange={handleChange}
        className="input-base"
      />

      {/* 🔥 File input */}
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleImagesChange}
        className="block"
      />

      <input
        placeholder="Stack (React, Node, etc)"
        onChange={handleStackChange}
        className="input-base"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Crear Proyecto
      </button>
    </form>
  );
}