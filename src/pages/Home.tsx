
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-green-700 mb-4">
        Bienvenido a Saad Médical
      </h1>
      <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-8">
        Tu fuente confiable para equipos y suministros médicos de alta calidad.
        Explora nuestro catálogo y encuentra lo que necesitas.
      </p>
      <Link
        to="/catalog"
        className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Explorar Catálogo
      </Link>
    </div>
  )
}