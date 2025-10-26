/**
 * Muestra la imagen principal y una pequeña galería del producto.
 * Si no hay datos funciona como PlaceHolder
 * @param {{ imageUrl: string, productName: string }} props
 */
export default function ProductImageGallery({ imageUrl, productName }) {

    const content = imageUrl ? (
        <img 
            src={imageUrl} 
            alt={`Imagen principal de ${productName}`} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
    ) : (
        <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--light-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '4rem',
            color: 'var(--primary-color)'
        }}>
            {productName ? productName.substring(0, 2) : "❓"}
        </div>
    );

    return (
        <div className="col-12 col-lg-6 mb-4">
            <div 
                className="card-custom" 
                style={{ 
                    padding: '0', 
                    overflow: 'hidden',
                    minHeight: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {content}
            </div>
            
            {/* Galería de miniaturas */}
            <div className="d-flex gap-2 mt-2">
                <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--accent-color)', borderRadius: 'var(--border-radius-sm)' }}></div>
                <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--secondary-color)', borderRadius: 'var(--border-radius-sm)' }}></div>
            </div>
        </div>
    );
}