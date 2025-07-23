"use client"
import { animate, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import { AnimateSVG } from '../SVG/AnimatedSVG';

const AboutUs = () => {
    return (
            <section className='flex flex-row w-full h-screen justify-center items-center bg-[#E1EEF6] px-4 md:px-6 lg:px-8'>
                <div className="flex flex-col w-1/2 h-full justify-center items-start p-5 gap-5">
                    <div className="inline-block bg-[#00345B] px-3 py-1 rounded-lg text-sm text-white">
                        Sobre Nosotros
                    </div>
                    <h2 className="font-bold text-3xl text-[#00345B] sm:text-4xl md:text-5xl tracking-tighter">
                        Liderando la innovación en policarbonato
                    </h2>
                    <p className="max-w-[600px text-muted-foreground text-[#00345B] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Somos una empresa líder en la comercialización de policarbonato,
                        con más de 20 años de experiencia en el mercado. Nos enorgullece
                        ofrecer productos de alta calidad y un enfoque innovador que se
                        traduce en soluciones sostenibles para nuestros clientes.
                    </p>
                </div>
                <div className="flex flex-col w-1/2 h-full justify-center items-start p-5 gap-5">
                    <div className="justify-center gap-4 grid">
                        <div className="flex items-center gap-4">
                            <div className="flex justify-center items-center bg-primary p-3 rounded-md">
                                <AnimateSVG
                                    className="w-6 h-6 text-[#00345B]"
                                    height="24"
                                    width="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                    elements={[
                                        {
                                            type: "path",
                                            props: {
                                                d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
                                                custom: 1,
                                            },
                                        },
                                        {
                                            type: "circle",
                                            props: {
                                                cx: "12",
                                                cy: "8",
                                                r: "6",
                                            },
                                        },
                                    ]}
                                />
                            </div>
                            <div>
                                {/* <p className="font-bold text-2xl text-[#00345B]">+500</p> */}
                                <Stat
                                    num={25}
                                    prefix="+"
                                />
                                <p className="text-muted-foreground text-[#00345B]">
                                    Años de experiencia en el sector
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex justify-center items-center bg-primary p-3 rounded-md">
                                <AnimateSVG
                                    className="w-6 h-6 text-[#00345B]"
                                    height="24"
                                    width="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                    elements={[
                                        {
                                            type: "path",
                                            props: {
                                                d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
                                                custom: 1,
                                            },
                                        },
                                        {
                                            type: "circle",
                                            props: {
                                                cx: "9",
                                                cy: "7",
                                                r: "4",
                                            },
                                        },
                                        {
                                            type: "path",
                                            props: {
                                                d: "M22 21v-2a4 4 0 0 0-3-3.87",
                                                custom: 3,
                                            },
                                        },
                                        {
                                            type: "path",
                                            props: {
                                                d: "M16 3.13a4 4 0 0 1 0 7.75",
                                                custom: 4,
                                            },
                                        },
                                    ]}
                                />
                            </div>
                            <div>
                                <Stat
                                    num={500}
                                    prefix="+"
                                />
                                <p className="text-muted-foreground text-[#00345B]">
                                    Alumnos capacitados en nuestros cursos
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex justify-center items-center bg-primary p-3 rounded-md">
                                <AnimateSVG
                                    className="w-6 h-6 text-[#00345B]"
                                    height="24"
                                    width="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                    elements={[
                                        {
                                            type: "path",
                                            props: {
                                                d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
                                            },
                                        },
                                        {
                                            type: "path",
                                            props: {
                                                d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
                                            },
                                        },
                                    ]}
                                />
                            </div>
                            <div>
                                <Stat
                                    num={100}
                                    suffix="%"
                                />
                                <p className="text-muted-foreground text-[#00345B]">
                                    Comprometidos con la educación y la formación continua en Michoacan.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
    )
}

interface Props {
    num: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
    subheading?: string;
}

const Stat = ({ num, suffix, prefix, decimals = 0, subheading }: Props) => {
    const ref = useRef<HTMLSpanElement | null>(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (!isInView) return;

        animate(0, num, {
            duration: 2.5,
            onUpdate(value) {
                if (!ref.current) return;

                ref.current.textContent = value.toFixed(decimals);
            },
        });
    }, [num, decimals, isInView]);

    return (
        <div className="flex flex-col items-start py-8 sm:py-0 w-72">
            <p className="font-semibold text-4xl text-center text-[#00345B] sm:text-2xl">
                {prefix}
                <span ref={ref}></span>
                {suffix}
            </p>
            <p className="max-w-48 text-center text-[#00345B]">{subheading}</p>
        </div>
    );
};

export default AboutUs