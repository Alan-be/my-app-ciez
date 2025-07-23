import Image from "next/image";
import React from "react";

export default function Header({
  className,
  Title,
  Subtitle,
  image,
}: {
  image?: any;
  className?: string;
  Title?: String;
  Subtitle?: String;
}) {
  return (
    <div>
      <div
        className={`relative flex flex-col bg-transparent w-full h-auto pt-32  lg:pt-32 px-10 text-center  ${className}`}
      >
        <div className="grid grid-cols-1 grid-rows-2 my-auto h-auto align-between">
          {image ? (
            <>
              <div className="w-screen h-[10vh] md:h-[30vh] lg:h-[50vh] xl:h-[40vh]  justify-center"></div>
              <div className="w-full h-full justify-center left-0 xl:top-0 xl:bottom-0 m-auto absolute">
                {image}
              </div>
            </>
          ) : (
            <Image
              className="align-text-bottom items-end col-start-1 col-end-2 row-start-1 row-end-3 opacity-5 mx-auto w-1/2 lg:w-1/5 h-auto object-contain"
              src="/GIA-Eagle.png"
              alt="Imagen Principal"
              width="500"
              height="500"
            />
          )}

          <div className="flex flex-col justify-middle gap-5 col-start-1 col-end-2 row-start-1 row-end-3 my-auto w-auto">
            <h2 className="mx-auto w-auto h-auto text-4xl xl:text-6xl">
              {Title}
            </h2>
            <p className="mx-auto h-auto text-start"> {Subtitle}</p>
          </div>
        </div>

        <div
          className={`opacity-40 mt-16 row-start-3 row-end-4 col-start-1 col-end-2  p-0.5 w-full gradientCenter-Out  `}
        >
          <div className={`w-full h-0.5 gradientCenter-In`}> </div>
        </div>
      </div>
    </div>
  );
}