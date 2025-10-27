# Loopie
Loopie es una aplicación web desarrollada para el ramo "Fullstack II" (frontend). Está enfocada en la compra y venta de vestuario sostenible y de segunda mano. La plataforma promueve la moda circular, permitiendo a los usuarios publicar, explorar y adquirir prendas únicas.

## Qué incluye este repositorio

- Interfaz construida con React y Vite.
- Contextos (providers) para autenticación, carrito y pedidos.
- Componentes reutilizables para producto, carrito, checkout y administración.
- Persistencia local básica vía localStorage para datos demo (usuarios, carrito, pedidos).

### Componentes básicos incluidos

- `Navbar`, `Footer`, `UserDropdown` — navegación y utilidades de usuario.
- `ProductImageGallery`, `ProductInfoPanel`, `ProductTable` — visualización de productos.
- `CartItem`, `OrderSummary`, `CheckoutSummary`, `PaymentForm`, `ShippingForm` — flujo de carrito/checkout.
- `AuthFormContainer`, `LoginForm`, `RegisterForm` — componentes de autenticación.

### Vistas / Rutas principales

- `HomePage` — landing con destacados y CTA.
- `Tiendas` / `StoreProfile` — listado de tiendas y panel de tienda.
- `AllProducts` / `ProductDetail` — catálogo público y detalle de producto.
- `Carrito`, `Checkout`, `PaymentSuccess`, `PaymentError` — flujo de compra.
- `Profile`, `Pedidos` — perfil de usuario y historial de pedidos.

### API simulada (Mockable)

La aplicación consume una API simulada alojada en Mockable que responde con JSONs de ejemplo para productos y usuarios. La configuración de los endpoints está centralizada en `src/data/api/config.js` y la capa de consumo en `src/data/api/api.js`.

Por ejemplo, la app realiza peticiones a las rutas configuradas en `ENDPOINTS` (por defecto apuntan a `demo9372342.mockable.io`) y espera JSONs con las colecciones de productos y usuarios. Esta capa es fácilmente reemplazable por un backend real cambiando `API_BASE_URL` o implementando nuevos endpoints en `src/data/api/`.


## Requisitos

- Node.js 18+ y npm o yarn.

## Uso (desarrollo)

1. Instala dependencias:

```bash
npm install
```

2. Levanta la app en modo desarrollo (con HMR):

```bash
npm run dev
```

3. Abre http://localhost:5173 en tu navegador.

## Scripts útiles

- `npm run dev` — inicia el servidor de desarrollo.
- `npm run build` — construye la versión para producción en `dist/`.
- `npm run preview` — sirve la build estática para pruebas locales.
- `npm run lint` — ejecuta ESLint (configuración mínima incluida).

## Estructura básica del proyecto

Directorio principal relevante:

- `src/` – código fuente React
	- `components/` – componentes reutilizables
	- `views/` – páginas / rutas
	- `context/` – providers (Auth, Cart, Pedido)
	- `hooks/` – hooks auxiliares (`useAuth`, `useCart`, `usePedidos`)
	- `data/` – adaptadores a localStorage y API simulada
	- `assets/styles/` – estilos globales

- `public/` – activos estáticos
- `docs/` – documentación (este README)

## Notas técnicas y recomendaciones

- La app usa `localStorage` para datos demo; al integrar un backend real, sustituir la lógica en `src/data/api/api.js` y los servicios en `src/data/localStorageService.js`.

## Cómo contribuir
- Haz un fork y abre un PR sobre `main` describiendo los cambios.
- Mantén el estilo de código existente y añade pruebas mínimas cuando sea posible.

## Licencia y contacto
Este repositorio está destinado a fines educativos.