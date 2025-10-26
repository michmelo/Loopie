/**
 * Listado de productos en formato de tabla o reporte.
 * @param {{ products: Array<object> }} props
 */

export default function ProductTable({ products }) {
    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
        backgroundColor: 'var(--input-bg-color)',
        borderRadius: 'var(--border-radius-md)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)'
    };

    const thTdStyle = {
        padding: '12px 15px',
        textAlign: 'left',
        borderBottom: '1px solid var(--accent-color)',
        color: 'var(--primary-color)'
    };

    const thStyle = {
        ...thTdStyle,
        backgroundColor: 'var(--light-color)',
        fontWeight: '700',
        textTransform: 'uppercase',
        fontSize: 'var(--font-size-sm)'
    };

    return (
        <div className="card-custom" style={{ padding: '0', overflowX: 'auto' }}>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>ID</th>
                        <th style={thStyle}>Nombre</th>
                        <th style={thStyle}>Stock</th>
                        <th style={thStyle}>Precio</th>
                        <th style={thStyle}>Categoría</th>
                        <th style={thStyle}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr id={product.id} style={{ borderBottom: '1px solid var(--accent-color)' }}>
                            <td style={thTdStyle}>{product.id}</td>
                            <td style={thTdStyle}>{product.name}</td>
                            <td style={{ ...thTdStyle, fontWeight: 'bold', color: product.stock < 10 ? 'var(--pink-accent)' : 'var(--primary-color)' }}>
                                {product.stock}
                            </td>
                            <td style={thTdStyle}>${product.price}</td>
                            <td style={thTdStyle}>{product.category}</td>
                            <td style={thTdStyle}>
                                <button 
                                    className="btn-custom" 
                                    style={{ padding: '6px 12px', fontSize: '0.8rem', backgroundColor: 'var(--secondary-color)', color: 'var(--background-color)' }}
                                    onClick={() => console.log(`Editar producto: ${product.id}`)}
                                >
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}