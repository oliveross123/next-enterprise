import { Metadata } from "next"
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "lp-items"

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
        url: "",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              🚀 Objevte budoucnost podnikové automatizace a digitální automatizace s{" "}
              <span className="text-orange-500">RVLTN! </span>
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Zjednodušte své každodenní úkoly a zvyšte produktivitu s naším intuitivním řešením pro digitální
              automatizaci. Připojte se k nám na začátku naší cesty a buďte mezi prvními, kdo vyzkouší RVLTN!
            </p>
            <Button href="https://mailchi.mp/04e71d39ff57/swiftlycz-pedbn-pstup" className="mr-3">
              Chci předběžný přístup k automatizaci!
            </Button>
            <Button href="https://www.instagram.com/rvltn.cz/" intent="secondary">
              Sledujte nás pro více o digitální automatizaci!
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                {/* Přidání fallbacků pro ikony */}
                <div
                  role="img" // Použijeme role "img" pro větší kompatibilitu
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
      </section>
    </>
  )
}
