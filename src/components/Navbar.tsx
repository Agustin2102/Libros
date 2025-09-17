/**
 * COMPONENTE: Navbar
 * Barra de navegación con autenticación
 */

"use client";

import React from 'react';
import Link from 'next/link';
import { useAuthContext } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout, isLoading } = useAuthContext();

  const handleLogout = () => {
    logout();
    // Opcional: redireccionar o mostrar mensaje
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Título */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">📚</span>
            <h1 className="text-xl font-bold text-gray-900">
              Reseñas de Libros
            </h1>
          </Link>

          {/* Menú de navegación */}
          <div className="flex items-center space-x-4">
            {isLoading ? (
              // Estado de carga
              <div className="animate-pulse">
                <div className="h-8 w-24 bg-gray-200 rounded"></div>
              </div>
            ) : isAuthenticated && user ? (
              // Usuario autenticado
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">
                  Hola, <span className="font-medium">{user.name}</span>
                </span>
                <Link
                  href="/profile"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Perfil
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              // Usuario no autenticado
              <div className="flex items-center space-x-3">
                <Link
                  href="/login"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  href="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Registrarse
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;