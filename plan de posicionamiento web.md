# Plan de Posicionamiento Web (SEO) - Vynext

Este documento detalla el análisis del estado actual del proyecto y la hoja de ruta para posicionar `vynext.lat` en los primeros resultados de búsqueda en Google, enfocado en el mercado de **Guatemala**.

## 1. Análisis del Estado Actual (Auditoría Técnica)

Actualmente, el sitio web está construido con **Astro**, lo cual es una excelente base tecnológica debido a su alto rendimiento y velocidad de carga, factores que Google valora enormemente (Core Web Vitals).

### Puntos a Favor:
*   **Velocidad:** Astro genera HTML estático, lo que hace que la web sea muy rápida.
*   **Diseño:** La estructura de componentes permite un código limpio.

### Oportunidades de Mejora Detectadas (Faltantes Críticos):
1.  **Sitemap (Mapa del sitio):** No existe un archivo `sitemap.xml`. Google necesita este archivo para entender qué páginas existen en tu sitio.
2.  **Robots.txt:** No existe archivo de directrices para los "crawlers" (robots) de Google.
3.  **Metadatos Genéricos:** Los títulos y descripciones en `index.astro` y `Layout.astro` son funcionales pero no están optimizados para palabras clave locales (ej. "Guatemala").
4.  **Datos Estructurados (Schema.org):** Faltan etiquetas JSON-LD para decirle a Google "Somos una empresa de software ubicada en Guatemala".

---

## 2. Estrategia de Palabras Clave (Keywords)

Para posicionar en Guatemala, debemos ser explícitos con la ubicación. No basta con decir "Desarrollo de Software", debemos decir "Desarrollo de Software en Guatemala".

### Keywords Principales (Alta Prioridad):
Estas deben ir en el H1 (Título principal) y en el `<title>` de la página.
*   "Desarrollo de software en Guatemala"
*   "Empresa de desarrollo web Guatemala"
*   "Sistemas a la medida Guatemala"
*   "Agencia de transformación digital Guatemala"

### Keywords Secundarias (Para descripciones y servicios):
*   "Diseño de páginas web profesionales"
*   "Aplicaciones móviles (Android/iOS) en Guatemala"
*   "Automatización de procesos empresariales"

---

## 3. Hoja de Ruta: ¿Qué debemos hacer?

Aquí divido las tareas en lo que **yo implementaré en el código** y lo que **tú debes hacer externamente**.

### FASE 1: Optimización Técnica (Yo implementaré esto en el código)

1.  **Configurar generación automática del Sitemap:**
    *   Instalaré `@astrojs/sitemap` para que cada vez que construyas el proyecto, se genere un mapa actualizado de todas tus URLs.
    
2.  **Crear archivo `robots.txt`:**
    *   Crearé este archivo en la carpeta `public/` para guiar a Google hacia el sitemap.

3.  **Optimización On-Page (Metadatos):**
    *   Modificaré `src/layouts/Layout.astro` y `src/pages/index.astro`.
    *   **Título Nuevo:** `Vynext | Desarrollo de Software y Web a la Medida en Guatemala`
    *   **Descripción Nueva:** `Empresa líder en desarrollo de software y páginas web en Guatemala. Creamos soluciones digitales, apps móviles y sistemas a la medida para tu negocio.`

4.  **Etiquetas Open Graph:**
    *   Mejorar cómo se ve el link cuando se comparte en WhatsApp o Facebook.

### FASE 2: Acciones Externas (Tú debes realizar esto)

Estas acciones requieren cuentas de Google y verificación manual, por lo tanto **no puedo hacerlas por código**, pero son obligatorias para el éxito.

#### 1. Google Search Console (Indispensable)
*   **Acción:** Registra tu dominio `vynext.lat` en [Google Search Console](https://search.google.com/search-console).
*   **Por qué:** Es la herramienta oficial para decirle a Google "Aquí estoy".
*   **Paso clave:** Una vez verificado el dominio, ve a la sección "Sitemaps" y envía la URL `https://vynext.lat/sitemap-0.xml`.

#### 2. Google My Business (SEO Local - Muy Importante)
*   **Acción:** Crea un perfil de negocio en Google Maps.
*   **Nombre:** "Vynext - Desarrollo de Software" (o similar).
*   **Ubicación:** Guatemala.
*   **Por qué:** Cuando alguien busque "desarrollo de software cerca de mí" o "en Guatemala", aparecerás en el mapa. Esto te da visibilidad inmediata antes incluso que los resultados web normales.

---

## 4. Recomendaciones de Contenido

Para mantener el posicionamiento a largo plazo:

1.  **Landing Pages Específicas:** Con el tiempo, crea páginas dedicadas para cada servicio:
    *   `vynext.lat/servicios/desarrollo-web-guatemala`
    *   `vynext.lat/servicios/apps-moviles`
    *   *Razón:* Es más fácil posicionar una página específica para una búsqueda específica.

2.  **Blog Técnico:** Escribir artículos sobre tecnología ayuda mucho.
    *   Ejemplo: "¿Por qué tu empresa en Guatemala necesita un software a la medida?"

---

## Próximos Pasos Inmediatos para mí (Antigravity):

Si estás de acuerdo con este análisis, procederé a realizar los cambios de la **FASE 1**:
1.  Instalar la integración de sitemap.
2.  Crear `robots.txt`.
3.  Actualizar los textos de `Layout` y `Home` con las keywords de Guatemala.
