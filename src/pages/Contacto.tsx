import CardContact from "../components/Card-Contact"

export default function Contacto() {
  return (
    <section className="flex-1 px-4 lg:px-16 2xl:px-22 dark:bg-black/90 pt-24 transition-all duration-200 pb-10 2xl:pb-16  2xl:pt-34">
      <div className="mb-6 2xl:mb-8 ">
        <h2 className="text-2xl 2xl:text-4xl font-semibold  dark:text-gray-200 text-gray-900">Contacto</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-xl mt-1 2xl:mt-2">Estoy disponible para nuevas oportunidades</p>
      </div>
      <CardContact />
    </section>
  )
}