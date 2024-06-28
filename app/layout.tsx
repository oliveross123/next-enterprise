import "styles/tailwind.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Swiftly.cz | Software pro automatizaci procesů pro střední, malé a mikro podnikatele</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://rvltn-swiftly-hp.vercel.app/" />
        <meta property="og:image" content="https://rvltn-swiftly-hp.vercel.app/" />
        {/* Přidání vlastního skriptu */}
        <script
          id="mcjs"
          dangerouslySetInnerHTML={{
            __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/ed718c28d97fab0e745e57174/dc01543b5e28a42bc4ebf806f.js");`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
