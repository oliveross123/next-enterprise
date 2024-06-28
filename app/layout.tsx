import "styles/tailwind.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Swiftly.cz | Software pro automatizaci processů pro střední, male a mirko podnikatelé</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://next-enterprise.vercel.app/" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
