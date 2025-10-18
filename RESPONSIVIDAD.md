# Guía de Pruebas de Responsividad

## Cómo Probar la Responsividad

### 1. Iniciar el Servidor de Desarrollo
```bash
npm run dev
```

### 2. Abrir en el Navegador
- Abrir http://localhost:5173 en el navegador
- Abrir las herramientas de desarrollador (F12)

### 3. Probar Diferentes Tamaños de Pantalla

#### Breakpoints de Bootstrap:
- **XS (Extra Small)**: < 576px
- **SM (Small)**: ≥ 576px
- **MD (Medium)**: ≥ 768px
- **LG (Large)**: ≥ 992px
- **XL (Extra Large)**: ≥ 1200px
- **XXL (Extra Extra Large)**: ≥ 1400px

#### Dispositivos de Prueba:
- **Móvil**: 375px x 667px (iPhone SE)
- **Tablet**: 768px x 1024px (iPad)
- **Desktop**: 1920px x 1080px

### 4. Elementos a Verificar

#### Header:
- Logo y título se adaptan en móvil
- Botones se reorganizan verticalmente en pantallas pequeñas

#### Grid Principal:
- Columna principal (8/12) y sidebar (4/12) se apilan en móvil
- Cards mantienen proporciones adecuadas

#### Sección de Responsividad:
- 4 columnas se convierten en 2 en tablet
- Se apilan en 1 columna en móvil

#### Footer:
- Texto centrado en todos los tamaños

### 5. Herramientas de Desarrollo

#### Chrome DevTools:
1. F12 → Toggle Device Toolbar (Ctrl+Shift+M)
2. Seleccionar dispositivo o tamaño personalizado
3. Rotar orientación (portrait/landscape)

#### Firefox DevTools:
1. F12 → Responsive Design Mode
2. Seleccionar tamaño o dispositivo

### 6. Variables CSS Implementadas

```css
/* Breakpoints personalizados */
--breakpoint-xs: 0;
--breakpoint-sm: 576px;
--breakpoint-md: 768px;
--breakpoint-lg: 992px;
--breakpoint-xl: 1200px;
--breakpoint-xxl: 1400px;
```

### 7. Clases de Bootstrap Utilizadas

- `container` y `container-fluid`
- `row` y `col-*`
- `d-flex`, `justify-content-*`, `align-items-*`
- `text-*-*` para alineación de texto
- `mb-*`, `mt-*`, `p-*` para espaciado
- `bg-*` para colores de fondo

### 8. Resultados Esperados

✅ **Móvil (< 576px)**:
- Header con logo centrado
- Contenido en una columna
- Botones apilados verticalmente
- Texto legible sin scroll horizontal

✅ **Tablet (576px - 991px)**:
- Header con layout horizontal
- Grid de 2 columnas en sección de responsividad
- Contenido principal y sidebar se apilan

✅ **Desktop (≥ 992px)**:
- Layout completo de 2 columnas
- Header con logo a la derecha
- Grid de 4 columnas en sección de responsividad
- Espaciado óptimo
