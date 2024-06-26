'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import './snipcart.css'
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import * as fbq from '../lib/fpixel'
const inter = Inter({ subsets: ['latin'] })
import { useEffect, useState } from 'react'

export default function RootLayout({ children }) {
  // useEffect(() => {
  // // Yotpo script
  // const yotpoScript = document.createElement('script')
  // yotpoScript.type = 'text/javascript'
  // yotpoScript.async = true
  // yotpoScript.src =
  //   '//staticw2.yotpo.com/EaMynCkV7J2dZy7SrhJdg1qSJpOAUgm2yIYNzFKo/widget.js'
  // const firstScript = document.getElementsByTagName('script')[0]
  // firstScript.parentNode.insertBefore(yotpoScript, firstScript)
  // Create and append Yotpo script
  //   const yotpoScript = document.createElement('script')
  //   yotpoScript.type = 'text/javascript'
  //   yotpoScript.async = true
  //   yotpoScript.src =
  //     '//staticw2.yotpo.com/EaMynCkV7J2dZy7SrhJdg1qSJpOAUgm2yIYNzFKo/widget.js'
  //   document.head.appendChild(yotpoScript)

  //   // Snipcart settings
  //   window.SnipcartSettings = {
  //     publicApiKey:
  //       'ODIwNDE1OGUtNzBiYy00YWZkLWEwMDAtNjdmYjdiYzUzZDAzNjM4NDAzNDU1NTMxMDU4NzAy',
  //     loadStrategy: 'on-user-interaction',
  //     version: '3.7.1',
  //     modalStyle: 'side',
  //   }
  //   ;(function () {
  //     var c,
  //       d
  //       // Assign default values for settings if not provided
  //     ;(d = (c = window.SnipcartSettings).version) != null ||
  //       (c.version = '3.0')
  //     var s, S
  //     ;(S = (s = window.SnipcartSettings).timeoutDuration) != null ||
  //       (s.timeoutDuration = 2750)
  //     var l, p
  //     ;(p = (l = window.SnipcartSettings).domain) != null ||
  //       (l.domain = 'cdn.snipcart.com')
  //     var w, u
  //     ;(u = (w = window.SnipcartSettings).protocol) != null ||
  //       (w.protocol = 'https')
  //     var m, g
  //     ;(g = (m = window.SnipcartSettings).loadCSS) != null || (m.loadCSS = !0)
  //     var y =
  //         window.SnipcartSettings.version.includes('v3.0.0-ci') ||
  //         (window.SnipcartSettings.version != '3.0' &&
  //           window.SnipcartSettings.version.localeCompare('3.4.0', void 0, {
  //             numeric: !0,
  //             sensitivity: 'base',
  //           }) === -1),
  //       f = ['focus', 'mouseover', 'touchmove', 'scroll', 'keydown']

  //     // Function to load Snipcart
  //     window.LoadSnipcart = o

  //     // Check document state to decide when to call 'o'
  //     document.readyState === 'loading'
  //       ? document.addEventListener('DOMContentLoaded', r)
  //       : r()

  //     function r() {
  //       // Check load strategy to determine when to call 'o'
  //       window.SnipcartSettings.loadStrategy
  //         ? window.SnipcartSettings.loadStrategy === 'on-user-interaction' &&
  //           (f.forEach(function (t) {
  //             return document.addEventListener(t, o)
  //           }),
  //           setTimeout(o, window.SnipcartSettings.timeoutDuration))
  //         : o()
  //     }

  //     var a = !1

  //     // Function to load Snipcart
  //     function o() {
  //       if (a) return
  //       a = !0
  //       var t = document.getElementsByTagName('head')[0],
  //         n = document.querySelector('#snipcart'),
  //         i = document.querySelector(
  //           'src[src^="'
  //             .concat(window.SnipcartSettings.protocol, '://')
  //             .concat(window.SnipcartSettings.domain, '"][src$="snipcart.js"]')
  //         ),
  //         e = document.querySelector(
  //           'link[href^="'
  //             .concat(window.SnipcartSettings.protocol, '://')
  //             .concat(
  //               window.SnipcartSettings.domain,
  //               '"][href$="snipcart.css"]'
  //             )
  //         )
  //       n ||
  //         ((n = document.createElement('div')),
  //         (n.id = 'snipcart'),
  //         n.setAttribute('hidden', 'true'),
  //         document.body.appendChild(n)),
  //         h(n),
  //         i ||
  //           ((i = document.createElement('script')),
  //           (i.src = ''
  //             .concat(window.SnipcartSettings.protocol, '://')
  //             .concat(window.SnipcartSettings.domain, '/themes/v')
  //             .concat(window.SnipcartSettings.version, '/default/snipcart.js')),
  //           (i.async = !0),
  //           t.appendChild(i)),
  //         !e &&
  //           window.SnipcartSettings.loadCSS &&
  //           ((e = document.createElement('link')),
  //           (e.rel = 'stylesheet'),
  //           (e.type = 'text/css'),
  //           (e.href = ''
  //             .concat(window.SnipcartSettings.protocol, '://')
  //             .concat(window.SnipcartSettings.domain, '/themes/v')
  //             .concat(
  //               window.SnipcartSettings.version,
  //               '/default/snipcart.css'
  //             )),
  //           t.prepend(e)),
  //         f.forEach(function (v) {
  //           return document.removeEventListener(v, o)
  //         })
  //     }

  //     // Function to set Snipcart settings on the element
  //     function h(t) {
  //       !y ||
  //         ((t.dataset.apiKey = window.SnipcartSettings.publicApiKey),
  //         window.SnipcartSettings.addProductBehavior &&
  //           (t.dataset.configAddProductBehavior =
  //             window.SnipcartSettings.addProductBehavior),
  //         window.SnipcartSettings.modalStyle &&
  //           (t.dataset.configModalStyle = window.SnipcartSettings.modalStyle),
  //         window.SnipcartSettings.currency &&
  //           (t.dataset.currency = window.SnipcartSettings.currency),
  //         window.SnipcartSettings.templatesUrl &&
  //           (t.dataset.templatesUrl = window.SnipcartSettings.templatesUrl))
  //     }
  //   })()
  // }, [])

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Global Site Code Pixel - Facebook Pixel */}

        <Nav />
        <main>{children}</main>
        <Footer />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
          window.SnipcartSettings = {
            publicApiKey: 'MjllOGJiYWMtODYyNi00OWM3LWJjOTAtZGJkZGRmMGUyOTNkNjM4NDAzNDU1NTMxMDU4NzAy',
            loadStrategy: "on-user-interaction",
              version: "3.7.1",
              modalStyle: "side",
              loadCSS: false,
          };

          (()=>{var c,d;(d=(c=window.SnipcartSettings).version)!=null||(c.version="3.0");var s,S;(S=(s=window.SnipcartSettings).timeoutDuration)!=null||(s.timeoutDuration=2750);var l,p;(p=(l=window.SnipcartSettings).domain)!=null||(l.domain="cdn.snipcart.com");var w,u;(u=(w=window.SnipcartSettings).protocol)!=null||(w.protocol="https");var f=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,m=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=o;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();function r(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(m.forEach(t=>document.addEventListener(t,o)),setTimeout(o,window.SnipcartSettings.timeoutDuration)):o()}var a=!1;function o(){if(a)return;a=!0;let t=document.getElementsByTagName("head")[0],e=document.querySelector("#snipcart"),i=document.querySelector(\`src[src^="\${window.SnipcartSettings.protocol}://\${window.SnipcartSettings.domain}"][src$="snipcart.js"]\`),n=document.querySelector(\`link[href^="\${window.SnipcartSettings.protocol}://\${window.SnipcartSettings.domain}"][href$="snipcart.css"]\`);e||(e=document.createElement("div"),e.id="snipcart",e.setAttribute("hidden","true"),document.body.appendChild(e)),v(e),i||(i=document.createElement("script"),i.src=\`\${window.SnipcartSettings.protocol}://\${window.SnipcartSettings.domain}/themes/v\${window.SnipcartSettings.version}/default/snipcart.js\`,i.async=!0,t.appendChild(i)),n||(n=document.createElement("link"),n.rel="stylesheet",n.type="text/css",n.href=\`\${window.SnipcartSettings.protocol}://\${window.SnipcartSettings.domain}/themes/v\${window.SnipcartSettings.version}/default/snipcart.css\`,t.prepend(n)),m.forEach(g=>document.removeEventListener(g,o))}function v(t){!f||(t.dataset.apiKey=window.SnipcartSettings.publicApiKey,window.SnipcartSettings.addProductBehavior&&(t.dataset.configAddProductBehavior=window.SnipcartSettings.addProductBehavior),window.SnipcartSettings.modalStyle&&(t.dataset.configModalStyle=window.SnipcartSettings.modalStyle),window.SnipcartSettings.currency&&(t.dataset.currency=window.SnipcartSettings.currency),window.SnipcartSettings.templatesUrl&&(t.dataset.templatesUrl=window.SnipcartSettings.templatesUrl))}})();
        `,
          }}
          strategy="beforeInteractive"
        />
        <Script
          id="fb-pixel"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
          }}
          strategy="lazyOnload"
        />
        {/* <Script
          dangerouslySetInnerHTML={{
            __html: `
          (function e(){
            var e=document.createElement("script");
            e.type="text/javascript";
            e.async=true;
            e.src="//staticw2.yotpo.com/EaMynCkV7J2dZy7SrhJdg1qSJpOAUgm2yIYNzFKo/widget.js";
            var t=document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e,t);
          })();
        `,
          }}
          strategy="lazyOnload"
        /> */}
      </body>
      <GoogleTagManager gtmId="GTM-WZS4FBXG" />
    </html>
  )
}
