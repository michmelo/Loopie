/**
 * Muestra los detalles de precio, cantidad y botón de compra.
 * @param {{ 
 *  product: { name: string, precioNumero?: number, precioFormateado?: string, cant?: number },
 *  onAddToCart: (product: object) => void,
 *  isOffer?: boolean
 * }} props
 */
export default function ProductInfoPanel({ product, onAddToCart, isOffer }) {
    return (
        <div className="col-12 col-lg-6 mb-4">
            <div className="card-custom">

                {isOffer && (
                    <div style={{
                        backgroundColor: 'var(--pink-accent)',
                        color: 'var(--background-color)',
                        padding: '8px 15px',
                        borderRadius: 'var(--border-radius-md)',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                        fontSize: '1.2rem'
                    }}>
                        ¡OFERTA EXCLUSIVA!
                    </div>
                )}

                <h1 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                    {product.name}
                </h1>

                <p style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0.25rem 0' }}>{product.precioFormateado ?? (product.precioNumero ? `$${product.precioNumero}` : '—')}</p>
                {/* Mostrar descripción del producto si existe (soporta keys en español/inglés) */}
                {(product.description || product.descripcion) && (
                    <p className="mt-3 product-description" style={{ color: '#3b3b3b', lineHeight: 1.4 }}>
                        {product.description || product.descripcion}
                    </p>
                )}

                <button className="btn-custom" onClick={() => onAddToCart(product)} style={{ width: '100%', padding: '15px 0' }}>
                    {isOffer ? "¡Aprovechar Oferta!" : "🛍️ Agregar al Carrito"}
                </button>

                <p className="mt-3" style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--accent-color)' }}>
                    ¡Quedan {product.cant} unidad(es) en stock!
                </p>
            </div>
        </div>
    );
}