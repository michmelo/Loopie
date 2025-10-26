// MANEJO DE PRECIOS CLP

// Parsea un valor tipo "49.990" | "$49.990" | 49990 a number
export function parseCLP(value) {
  if (typeof value === 'number') return value;
  if (!value) return 0;
  const digits = String(value).replace(/[^0-9]/g, '');
  return digits ? Number(digits) : 0;
}

export function formatToCLP(number) {
  return '$' + Number(number).toLocaleString('es-CL');
}
