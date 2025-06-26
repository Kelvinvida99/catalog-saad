import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const MainLayout: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
    <header className="bg-white/90 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-200">
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
        >
          Saad Médical
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => `font-medium transition-colors duration-200 ${
            isActive
              ? 'text-green-600'
              : 'text-slate-600 hover:text-green-600'
          }`}
        >
          Catálogo
        </NavLink>
      </nav>
    </header>
    <main className="container mx-auto px-6 py-10 flex-grow">
      <Outlet />
    </main>
    <footer className="bg-white border-t border-slate-200 text-center py-5 text-sm text-slate-500">
      © {new Date().getFullYear()} Saad Médical. Todos los derechos reservados.
    </footer>
  </div>
);
