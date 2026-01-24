# 🎨 Componentes de Efectos Visuales - Vynext

Esta carpeta contiene todos los componentes y utilidades de efectos visuales creados para el sitio web de Vynext.

## 📦 Componentes Principales

### 1. HexagonBackground
Fondo animado con hexágonos flotantes que crean un efecto visual distintivo.

**Props:**
- `count` (número): Cantidad de hexágonos (default: 15)
- `className` (string): Clases CSS adicionales

**Uso:**
```tsx
<HexagonBackground count={20} />
```

### 2. HexagonPattern
Patrón de hexágonos concéntricos para decorar secciones específicas.

**Props:**
- `density`: 'low' | 'medium' | 'high'
- `position`: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
- `animate` (boolean): Activar animación de entrada

**Uso:**
```tsx
<HexagonPattern density="medium" position="top-right" />
```

### 3. CustomCursor
Cursor personalizado con destellos hexagonales que sigue el movimiento del mouse.

**Características:**
- Se desactiva automáticamente en dispositivos táctiles
- Destellos hexagonales aleatorios al moverse
- Optimizado con GPU acceleration

**Uso:**
```tsx
<CustomCursor />
```

### 4. ParallaxEffects
Componentes y hooks para efectos parallax.

**Componentes:**
- `ParallaxSection`: Contenedor con efecto parallax
- `ParallaxImage`: Imagen con parallax
- `ParallaxLayer`: Capa con profundidad parallax

**Props comunes:**
- `speed` (número): Velocidad del efecto (0.5 = lento, 2 = rápido)
- `direction`: 'up' | 'down' (solo ParallaxSection)

**Uso:**
```tsx
<ParallaxSection speed={0.5}>
  <h1>Título con parallax</h1>
</ParallaxSection>
```

### 5. PageTransitions
Transiciones suaves entre páginas y componentes.

**Componentes:**
- `PageTransition`: Transición estándar para páginas
- `CustomTransition`: Transición personalizable
- `ModalWrapper`: Wrapper para modales con animación

**Variantes disponibles:**
- `fade`: Desvanecimiento simple
- `slide`: Deslizamiento horizontal
- `zoom`: Efecto de zoom
- `rotate`: Rotación con escala

**Uso:**
```tsx
<PageTransition>
  <YourPage />
</PageTransition>

<CustomTransition variant="zoom">
  <YourComponent />
</CustomTransition>
```

## 🎭 Utilidades de Animación

### animations.tsx
Librería completa de animaciones reutilizables con Framer Motion.

**Variantes disponibles:**
- `fadeIn`: Aparición con opacidad
- `fadeInUp`: Aparición desde abajo
- `fadeInDown`: Aparición desde arriba
- `fadeInLeft`: Aparición desde la izquierda
- `fadeInRight`: Aparición desde la derecha
- `scaleIn`: Aparición con escala
- `slideInUp`: Deslizamiento desde abajo
- `zoomIn`: Zoom con opacidad
- `rotateIn`: Rotación con aparición

**Componentes helper:**
- `AnimatedSection`: Sección con animación al hacer scroll
- `StaggerContainer`: Contenedor para animaciones escalonadas
- `StaggerItem`: Item con animación escalonada

**Uso:**
```tsx
import { AnimatedSection } from '../utils/animations';

<AnimatedSection variant="fadeInUp" delay={0.2}>
  <h2>Título animado</h2>
</AnimatedSection>
```

## ⚡ Optimización

Todos los componentes están optimizados para performance:

- **GPU Acceleration**: Las animaciones usan `transform` y `opacity` para aprovechar la GPU
- **Will-change**: Uso estratégico de `will-change` para mejorar rendering
- **Lazy Loading**: Componentes pesados se cargan bajo demanda
- **Respeta preferencias**: Todas las animaciones respetan `prefers-reduced-motion`
- **No bloquea scroll**: Los efectos no interfieren con la experiencia de scroll

## 🎯 Mejores Prácticas

1. **Usar con moderación**: No sobrecargar una página con demasiados efectos
2. **Mobile-first**: Algunos efectos se desactivan en móvil para mejor performance
3. **Accesibilidad**: Todos los efectos respetan las preferencias del usuario
4. **Performance**: Monitorear el impacto en FPS, especialmente en dispositivos móviles

## 📱 Responsividad

- El cursor personalizado solo se muestra en dispositivos con puntero fino (no táctiles)
- Los efectos parallax se suavizan en móvil
- Los hexágonos de fondo se reducen en cantidad en pantallas pequeñas

## 🔧 Configuración

Para ajustar la configuración global de efectos, edita:
- `src/styles/global.css`: Variables CSS y optimizaciones GPU
- `src/utils/designSystem.ts`: Configuración de durations y easings
