import { Metadata } from "next"
import Image from "next/image"
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "lp-items"
import p1 from "./public/images/p1.png"
import p2 from "./public/images/p2.png"
import p3 from "./public/images/p3.png"
import tempBanner from "./public/images/temp-banner.png"

export const metadata: Metadata = {
  title: "RVLTN.cz | Budoucnost podnikové automatizace a digitální automatizace",
  description:
    "Objevte inovativní řešení pro podnikovou a digitální automatizaci s RVLTN. Zvyšte produktivitu a zjednodušte své každodenní úkoly.",
  twitter: {
    card: "summary_large_image",
    title: "RVLTN.cz | Budoucnost podnikové automatizace",
    description: "Objevte inovativní řešení pro podnikovou a digitální automatizaci s RVLTN.",
  },
  openGraph: {
    url: "https://rvltn-swiftly-hp.vercel.app/",
    title: "RVLTN.cz | Budoucnost podnikové automatizace a digitální automatizace",
    description: "Objevte inovativní řešení pro podnikovou a digitální automatizaci s RVLTN.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "", // Zde můžete vložit správnou URL obrázku
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="flex min-h-screen items-center justify-center px-4 py-2 lg:py-4">
          <div className="max-w-screen-xl text-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              🚀 Objevte budoucnost podnikové automatizace a digitální automatizace s{" "}
              <span className="text-orange-500">RVLTN! </span>
            </h1>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Zjednodušte své každodenní úkoly a zvyšte produktivitu s naším intuitivním řešením pro digitální
              automatizaci. Připojte se k nám na začátku naší cesty a buďte mezi prvními, kdo vyzkouší RVLTN!
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Button href="https://mailchi.mp/04e71d39ff57/swiftlycz-pedbn-pstup" className="mb-4">
                Chci předběžný přístup k automatizaci!
              </Button>
              <Button href="https://www.instagram.com/rvltn.cz/" intent="secondary" className="mb-4">
                Sledujte nás pro více o digitální automatizaci!
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-1 sm:py-1 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                <div
                  role="img"
                  className="text-black-700 mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-400 p-1.5 dark:bg-primary-200 lg:h-12 lg:w-12"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  {singleItem.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{singleItem.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-4 sm:py-4 lg:px-6">
          <div className="mt-8 space-y-16">
            <div className="relative flex flex-col items-center lg:flex-row">
              <div className="relative h-96 w-full lg:-ml-64 lg:h-[600px] lg:w-2/3">
                <Image
                  src={tempBanner}
                  alt="softwarová mapa automatizací v RVLTN"
                  layout="fill"
                  objectFit="contain"
                  className=""
                />
              </div>
              <div className="mt-8 text-center lg:ml-16 lg:mt-0 lg:w-1/3 lg:text-left">
                <h3 className="text-xl font-bold dark:text-white">Potřebujete přehlednou mapu svých automatizací?</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  s <span className="text-orange-500">RVLTN </span>, budete mít všechny své automatizace na jednom
                  místě.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col items-center lg:flex-row-reverse">
              <div className="relative h-96 w-full lg:-mr-64 lg:h-[600px] lg:w-2/3">
                <Image src={p2} alt="přehledný panel softwaru RVLTN" layout="fill" objectFit="contain" className="" />
              </div>
              <div className="mt-8 text-center lg:mr-16 lg:mt-0 lg:w-1/3 lg:text-right">
                <h3 className="text-xl font-bold dark:text-white">Přehledný panel pro denní pořádek!</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  <span className="text-orange-500">RVLTN </span>, vám pomůže s denním pořádkem a zvýší vaši
                  produktivitu.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col items-center lg:flex-row">
              <div className="relative h-96 w-full lg:-ml-64 lg:h-[600px] lg:w-2/3">
                <Image src={p3} alt="screenshot softwaru RVLTN" layout="fill" objectFit="contain" className="" />
              </div>
              <div className="mt-8 text-center lg:ml-16 lg:mt-0 lg:w-1/3 lg:text-left">
                <h3 className="text-xl font-bold dark:text-white">Nekonečné možnosti administrace !</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {" "}
                  V <span className="text-orange-500">RVLTN</span>, je správa administrace klíčem k úspěchu.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col items-center lg:flex-row-reverse">
              <div className="relative h-96 w-full lg:-mr-64 lg:h-[600px] lg:w-2/3">
                <Image src={p1} alt="Screenshot softwaru RVLTN" layout="fill" objectFit="contain" className="" />
              </div>
              <div className="mt-8 text-center lg:mr-16 lg:mt-0 lg:w-1/3 lg:text-right">
                <h3 className="text-xl font-bold dark:text-white">
                  Vyřizujte své automatizace vaších procesů na jednom místě !
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  V <span className="text-orange-500">RVLTN </span> myslíme na každého koho unavuje pracovní rutina v
                  digitalním prostoru a jejich nezbytné potřeby!
                </p>
              </div>
            </div>
            <div className="mt-12 flex justify-center space-x-4">
              <Button href="https://mailchi.mp/04e71d39ff57/swiftlycz-pedbn-pstup" className="mb-4">
                Chci předběžný přístup k automatizaci!
              </Button>
              <Button href="https://www.instagram.com/rvltn.cz/" intent="secondary" className="mb-4">
                Sledujte nás pro více o digitální automatizaci!
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
