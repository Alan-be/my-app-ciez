"use client"
import Image from "next/image";
import Link from "next/link";
import { useParams,usePathname } from "next/navigation";
import { useState } from "react";
import React from 'react'

const NavBar = () => {
  const pathname = usePathname();
  const lastSegment = pathname.split('/').pop();  

    const [isProductsOpen, setProductsOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <header className="top-0 z-50 sticky flex items-center bg-[#083474] px-4 md:px-6 w-full h-20 shrink-0">
          <Link href="/" className="lg:flex hidden mr-6" prefetch={false}>
            <Image src="/Logo-.png" alt="Logo" width={50} height={50}/>
            <span className="sr-only">Polycell</span>
          </Link>
          <nav className="lg:flex flex-grow hidden">
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/"
                  className="inline-flex justify-center items-center bg-[#083474] hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] disabled:opacity-50 px-4 py-2 rounded-md w-max h-9 font-medium text-sm text-white transition-colors disabled:pointer-events-none focus:outline-none group"
                  prefetch={false}
                >
                  Inicio
                </Link>
              </li>
              <li className={lastSegment == 'cotizador' ? 'hidden' : "flex"}>
                <Link
                  href="#aboutUs"
                  className="${}inline-flex justify-center items-center bg-[#083474] hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] disabled:opacity-50 px-4 py-2 rounded-md w-max h-9 font-medium text-sm text-white transition-colors disabled:pointer-events-none group focus:outline-none"
                  prefetch={false}
                >
                  Nosotros
                </Link>
              </li>
              <li className={lastSegment == 'cotizador' ? 'hidden' : "flex"}>
                <Link
                  href="#products"
                  className="inline-flex justify-center items-center bg-[#083474] hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] disabled:opacity-50 px-4 py-2 rounded-md w-max h-9 font-medium text-sm text-white transition-colors disabled:pointer-events-none focus:outline-none group"
                  prefetch={false}
                >
                  Productos
                </Link>
              </li>
              <li className={lastSegment == 'cotizador' ? 'hidden' : "flex"}>
                <Link
                  href="#contact"
                  className="inline-flex justify-center items-center bg-[#083474] hover:bg-[#0b4a9b] focus:bg-[#0b4a9b] disabled:opacity-50 px-4 py-2 rounded-md w-max h-9 font-medium text-sm text-white transition-colors disabled:pointer-events-none focus:outline-none group"
                  prefetch={false}
                >
                  Contacto
                </Link>
              </li>
              
            </ul>
          </nav>
          <div className="flex items-center space-x-4 ml-auto">
            <Link
              className="inline-flex justify-center items-center bg-[#a80100] hover:bg-red-600 focus:bg-red-600 disabled:opacity-50 px-4 py-2 rounded-md w-max h-9 font-medium text-sm text-white transition-colors disabled:pointer-events-none focus:outline-none group"
              prefetch={false}
              scroll={false}
              href="/cotizador"
              >
              Cotizador
            </Link>
          </div>
          <button
            className="flex justify-center items-center lg:hidden bg-transparent p-2 border-none text-white"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
           |||
          </button>
          {isMenuOpen && (
            <div className="z-50 fixed inset-0 lg:hidden bg-[#083474] p-4 text-white">
              <Link href="#" prefetch={false} className="flex items-center mb-6">

                <span className="ml-2 font-bold">POLYCELL</span>
              </Link>
              <div className="space-y-4">
                <Link
                  href="/"
                  className="block font-semibold text-lg"
                  prefetch={false}
                >
                  Inicio
                </Link>
                {/* <button
                  className="flex items-center font-semibold text-lg"
                  onClick={() => setProductsOpen(!isProductsOpen)}
                >
                  Productos
                </button> */}
                {/* {isProductsOpen && (
                  <div className="space-y-4 ml-4">
                    <Link
                      href="#"
                      className="block text-sm"
                      prefetch={false}
                    >
                      Categoría 1
                    </Link>
                    <Link
                      href="#"
                      className="block text-sm"
                      prefetch={false}
                    >
                      Categoría 2
                    </Link>
                    <Link
                      href="#"
                      className="block text-sm"
                      prefetch={false}
                    >
                      Categoría 3
                    </Link>
                  </div>
                )} */}
                <Link
                  href="#"
                  className="block font-semibold text-lg"
                  prefetch={false}
                >
                  Instalación
                </Link>
                <Link
                  href="#"
                  className="block bg-[#a80100] px-4 py-2 rounded-md font-semibold text-lg"
                  prefetch={false}
                >
                  Contacto
                </Link>
              </div>
            </div>
          )}
        </header>
      );

}

export default NavBar;





function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 17l9-9 9 9" />
      <path d="M12 22V2" />
    </svg>
  );
}