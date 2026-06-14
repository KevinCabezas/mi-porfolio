import { Icon } from "@iconify/react";
import { ImageService } from "../service/image.service"
import { ProjectForm } from "../components/form-projects";
import type { Project } from "../components/form-projects";

export default function Admin() {
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      const imageUrl = await ImageService.uploadImage(file);

      console.log(imageUrl);
    } catch (error) {
      console.log(error);
    }
  };
 const handleCreateProject = (project: Project) => {
    console.log(project);
  };


  return (
    <main className="flex-1 px-4 lg:px-16 2xl:px-22 pt-24 pb-10 2xl:pb-16  2xl:pt-34">
      <section>
        <div>
          <h2>Admin</h2>
        </div>
     
        <ProjectForm onSubmit={handleCreateProject} />



      <div className="flex items-center gap-3 px-3 bg-amber-300">
        <span>Agregar</span>

        <div className="flex items-center">
          <input id="foto" type="file" onChange={handleUpload} className="hidden" />
          <label htmlFor="foto" className="flex justify-center">
            <Icon icon="line-md:image-filled" className="cursor-pointer text-2xl text-emerald-500" />
          </label>
        </div>
      </div>
      </section>
    </main>
  )
}