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
            
            {/* Antes aquí había swatches/miniaturas de color. Se eliminan para mostrar solo la imagen principal. */}
        </div>
    );
}