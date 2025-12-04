// MANEJO DE PRECIOS CLP

// Parsea un valor tipo "49.990" | "$49.990" | 49_990 | null a number (CLP)
export function parseCLP(value) {
  if (value == null) return 0; // null o undefined
  if (typeof value === "number") return value;

  const digits = String(value).replace(/[^\d]/g, "");
  return digits ? Number(digits) : 0;
}

// Formatea un número a CLP con separadores chilenos
export function formatToCLP(number) {
  if (number == null || isNaN(number)) return "$0";
  return "$" + Number(number).toLocaleString("es-CL");
}
