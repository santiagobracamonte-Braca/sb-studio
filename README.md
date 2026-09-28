# SB Studio — Santiago Bracamonte Suárez

Sitio web profesional de marca personal orientado a conversión: desarrollo web,
software, bases de datos, asesoría tecnológica y soluciones digitales.
Construido con **React + TypeScript + Vite + Tailwind CSS**.

> Diseño moderno y tecnológico · Responsive · Modo oscuro/claro · SEO técnico ·
> Integración con WhatsApp · Formularios de captación de leads.

---

## 📑 Índice

1. [Requisitos](#-requisitos)
2. [Instalación](#-instalación)
3. [Ejecutar en local](#-ejecutar-en-local)
4. [Personalizar tus datos (lo más importante)](#-personalizar-tus-datos)
5. [Configurar WhatsApp](#-configurar-whatsapp)
6. [Configurar el formulario (recibir mensajes)](#-configurar-el-formulario)
7. [SEO](#-seo)
8. [Google Analytics](#-google-analytics)
9. [Desplegar (Vercel / Netlify / GitHub Pages)](#-desplegar)
10. [Dominio y hosting](#-dominio-y-hosting)
11. [Estructura del proyecto](#-estructura-del-proyecto)
12. [Crecer a futuro](#-crecer-a-futuro)

---

## ✅ Requisitos

- **Node.js 18 o superior** (recomendado 20+).
- Un editor de código (VS Code recomendado).

Verifica tu versión:

```bash
node -v
```

---

## 📦 Instalación

```bash
# 1. Entra a la carpeta del proyecto
cd sb-studio

# 2. Instala las dependencias
npm install
```

---

## 🚀 Ejecutar en local

```bash
npm run dev
```

Abre en el navegador la URL que aparece (normalmente **http://localhost:5173**).

Otros comandos:

| Comando           | Qué hace                                      |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Modo desarrollo con recarga automática.       |
| `npm run build`   | Genera la versión de producción en `dist/`.   |
| `npm run preview` | Previsualiza el build de producción.          |
| `npm run lint`    | Revisa el código.                             |

---

## ✏️ Personalizar tus datos

> **TODO lo importante se edita en un solo archivo:**
> [`src/config.ts`](./src/config.ts)

No necesitas tocar los componentes. Abre `src/config.ts` y cambia los valores.
Busca los textos entre `[CORCHETES]` — esos son los que debes reemplazar.

Resumen de dónde cambiar cada cosa (todo dentro de `src/config.ts`):

| Quiero cambiar…            | Sección en `config.ts`         |
| -------------------------- | ------------------------------ |
| **Número de WhatsApp**     | `contact.whatsapp`             |
| **Correo**                 | `contact.email`                |
| **Instagram**              | `socials.instagram`            |
| **Facebook**               | `socials.facebook`             |
| **TikTok**                 | `socials.tiktok`               |
| **GitHub**                 | `socials.github`               |
| **LinkedIn**               | `socials.linkedin`             |
| **Foto** de perfil         | `site.photo`                   |
| **Precios / planes**       | `plans` y `maintenancePlan`    |
| **Servicios**              | `services`                     |
| **Proyectos (portafolio)** | `projects`                     |
| **Testimonios**            | `testimonials`                 |
| **Descripción personal**   | `About.tsx` + `site.tagline`   |
| **Indicadores (stats)**    | `stats`                        |
| **Preguntas frecuentes**   | `faqs`                         |
| **Dominio**                | `site.domain`                  |

> 💡 **Redes sociales:** si dejas la URL **vacía** (`""`), el icono se **oculta**
> automáticamente. Solo se muestran las redes que tengan enlace.

### Cambiar la foto de perfil

1. Copia tu foto a la carpeta `public/` (ej. `public/santiago.jpg`).
2. En `config.ts` pon: `photo: "/santiago.jpg"`.
   Si la dejas vacía, se muestra el logo SB como avatar.

### Cambiar el logo

El logo es un SVG generado por código en `src/components/Logo.tsx` (nítido en
cualquier tamaño). Si prefieres usar tu imagen de logo:

1. Copia tu logo a `public/` (ej. `public/logo.png`).
2. En `Logo.tsx`, reemplaza el componente `<LogoMark />` por
   `<img src="/logo.png" alt="SB Studio" className="h-9 w-9 rounded-full" />`.

---

## 💬 Configurar WhatsApp

1. Abre `src/config.ts`.
2. En `contact.whatsapp`, escribe tu número en **formato internacional, sin `+`
   ni espacios**. Para Colombia el código es `57`:

   ```ts
   whatsapp: "573001234567", // ejemplo
   ```

Con eso se activan automáticamente **todos** los botones de WhatsApp del sitio:
hero, tarjetas de servicio, cotización, footer y el **botón flotante**.
Cada botón lleva un **mensaje precargado** distinto según el contexto.

> Si dejas el número vacío, los botones de WhatsApp **no aparecen**.

---

## 📨 Configurar el formulario

Por defecto el formulario funciona en **modo demostración**: valida los datos y
muestra el mensaje de éxito, pero **no envía nada** (verás un aviso amarillo).

Para recibir los mensajes de verdad, sin montar un backend, usa un servicio de
formularios. Recomendados:

### Opción A — Formspree (más simple)

1. Crea una cuenta gratis en [formspree.io](https://formspree.io).
2. Crea un formulario y copia tu endpoint (algo como `https://formspree.io/f/xxxxxx`).
3. En `src/config.ts`:

   ```ts
   export const forms = {
     endpoint: "https://formspree.io/f/xxxxxx",
     web3formsAccessKey: "",
   };
   ```

### Opción B — Web3Forms

1. Crea una Access Key gratis en [web3forms.com](https://web3forms.com).
2. En `src/config.ts`:

   ```ts
   export const forms = {
     endpoint: "https://api.web3forms.com/submit",
     web3formsAccessKey: "TU_ACCESS_KEY",
   };
   ```

### Otras opciones

También puedes usar Getform, Basin, un webhook (Zapier / Make / n8n) o tu propio
backend. Solo pon la URL en `forms.endpoint`; el sitio envía los datos como JSON.

> 🔒 **Seguridad:** el formulario incluye un campo *honeypot* anti-spam y no
> expone ninguna clave secreta. El *Access Key* de Web3Forms es público por
> diseño. Nunca pongas contraseñas ni claves privadas en el frontend.

---

## 🔍 SEO

Ya está configurado en `index.html`:

- `title`, `meta description` y `keywords` orientados a búsquedas locales
  (ej. *desarrollo web Caucasia*, *programador Caucasia*, *desarrollo de software Antioquia*).
- **Open Graph** y **Twitter Cards** para que el enlace se vea bien al
  compartirlo en redes.
- **Datos estructurados** (Schema.org `ProfessionalService`) con tu ubicación y servicios.
- `robots.txt` y `sitemap.xml` en `public/`.
- Favicon SVG con el logo SB.

**Qué debes actualizar cuando tengas dominio:**

1. En `index.html`, reemplaza `https://santiagobracamonte.com/` por tu dominio real
   (en `canonical`, Open Graph, Twitter y el JSON-LD).
2. En `public/robots.txt` y `public/sitemap.xml`, cambia también la URL.
3. (Opcional) Crea una imagen `public/og-image.png` de **1200×630 px** para las
   redes sociales.
4. Registra tu sitio en [Google Search Console](https://search.google.com/search-console)
   y envía el `sitemap.xml`.

---

## 📈 Google Analytics

1. Crea una propiedad en [Google Analytics](https://analytics.google.com) y copia
   tu ID (formato `G-XXXXXXX`).
2. En `index.html`, **descomenta** el bloque de analítica (al final del `<head>`)
   y reemplaza `G-XXXXXXX` por tu ID.

Para **Meta Pixel** (si más adelante haces publicidad), agrega tu `META_PIXEL_ID`
de forma similar. Los IDs también están referenciados en `analytics` dentro de
`src/config.ts` como recordatorio.

---

## 🌐 Desplegar

El sitio es estático, así que despliega en segundos.

### ⭐ Vercel (recomendado)

1. Sube este proyecto a un repositorio de GitHub.
2. Entra a [vercel.com](https://vercel.com), importa el repositorio.
3. Vercel detecta Vite automáticamente:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy. ¡Listo!

### Netlify

- **Build command:** `npm run build`
- **Publish directory:** `dist`

### GitHub Pages

Funciona, pero requiere un paso extra porque se sirve desde un subpath. Vercel o
Netlify son más sencillos para este proyecto. Si aun así quieres GitHub Pages,
añade `base: "/NOMBRE_DEL_REPO/"` en `vite.config.ts` y publica la carpeta `dist`.

> **Recomendación:** usa **Vercel** — es gratis para proyectos personales, muy
> rápido, con HTTPS automático y fácil de conectar a un dominio propio.

---

## 🏷️ Dominio y hosting

- **Hosting:** con Vercel o Netlify no necesitas contratar hosting aparte; ellos
  alojan el sitio gratis y con HTTPS automático.
- **Dominio:** compra un dominio en Namecheap, GoDaddy, Google Domains, etc.
  Ideas (verifica disponibilidad): `santiagobracamonte.com`, `bracamonte.dev`,
  `studiobracamonte.com`.
- Luego conéctalo desde el panel de Vercel/Netlify (sección *Domains*) siguiendo
  sus instrucciones de DNS.

---

## 🗂️ Estructura del proyecto

```
sb-studio/
├─ public/                 # Archivos estáticos (favicon, robots, sitemap, manifest)
├─ src/
│  ├─ components/          # Componentes reutilizables
│  │  ├─ ui/               #   Container, Reveal, SectionTitle
│  │  ├─ Logo, Navbar, WhatsAppButton, ThemeToggle...
│  │  ├─ ServiceCard, PortfolioCard, PricingCard
│  │  ├─ LeadForm, QuickContactModal, FloatingButtons
│  │  └─ SocialLinks, BrandIcons
│  ├─ sections/            # Secciones de la página (Hero, About, Services, ...)
│  ├─ context/             # ThemeContext (dark/light), QuickContactContext
│  ├─ hooks/               # useReveal (animaciones al hacer scroll)
│  ├─ services/            # submitForm (envío del formulario)
│  ├─ utils/               # whatsapp, cn
│  ├─ config.ts            # ⭐ TODA tu información editable
│  ├─ App.tsx              # Ensambla todas las secciones
│  ├─ main.tsx             # Punto de entrada
│  └─ index.css            # Estilos base + Tailwind
├─ index.html              # SEO, metadatos, favicon
├─ tailwind.config.js      # Paleta de marca y animaciones
└─ package.json
```

---

## 🔮 Crecer a futuro

La arquitectura está lista para ampliarse con:
blog, sistema de reservas / citas, pagos (Mercado Pago, PayPal, Stripe), panel
administrativo, login, gestión de clientes/CRM, newsletter, chat y más.
Al estar todo modularizado en secciones y componentes, agregar nuevas partes es
sencillo.

---

© Santiago Bracamonte Suárez — SB Studio · Caucasia, Antioquia, Colombia.
