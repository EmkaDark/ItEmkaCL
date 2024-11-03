import type { Metadata } from "next";
import "./globals.scss";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "IT Emka | Разработка сайтов, вертска , дизайн сайтов , разработка многостраничников  ",
  description: "Студия по разработке сайтов, ",
  keywords:
    "создать сайт, купить сайт, заказать сайт, купить сайт онлайн, купить сайт москва,куплю сайт цены,официальный сайт купить онлайн ",
  icons: "./short.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta
          name="subject"
          content="Создание сайтов ,верстка,дизайн проектов!"
        />
        <meta name="copyright" content="Emka" />
        <meta name="author" content="Emka Dark, nomad11kl.com" />
        <meta name="designer" content="Svetlana" />
        <meta name="reply-to" content="nomad11kl@mail.ru" />
        <meta name="owner" content="Emka Dark" />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/short.png" />
        <meta property="og:title" content="Веб-студия IT Emka" />
        <meta
          property="og:description"
          content="Создаем современные веб-сайты с адаптивным дизайном и SEO-оптимизацией."
        />
        <meta property="og:image" content="/short.jpg" />
        <meta property="og:url" content="https://itemka.ru" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Веб-студия IT Emka",
              "url": "https://itemka.ru",
              "logo": "https://itemka.ru/logo.png",
              "description": "Мы — веб-студия, которая занимается созданием и продвижением сайтов. Предлагаем услуги веб-разработки, SEO-оптимизации и дизайна.",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+7-967-953-16-49",
                  "contactType": "customer service",
                  "areaServed": "RU",
                  "availableLanguage": ["Russian", "English"]
                }
              ],
            }
          `,
          }}
        />
      </head>
      <body>
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(98806982, "init", {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true
    });
  `}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/98806982"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}
