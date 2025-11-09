// src/services/catalogApi.js
export async function fetchCatalogItems() {
  const response = await fetch('/items.json');
  if (!response.ok) throw new Error('Erro ao carregar catálogo');
  const data = await response.json();
  return data;
}
