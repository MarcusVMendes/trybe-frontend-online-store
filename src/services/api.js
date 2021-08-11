export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  // Implemente aqui
  const response = await fetch(url);
  const object = await response.json();

  return object;
}

async function getProductsFromCategoryId(categoryId) {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?category=';
  const response = await fetch(`${endpoint}${categoryId}`);
  const object = await response.json();

  return object;
}

async function getProductsFromQuery(query) {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=';
  const response = await fetch(`${endpoint}${query}`);
  const object = await response.json();

  return object;
}
/* Lógica recomendada pelo Lucio no grupo de Whatsapp, para que a funçao possa ser chamada
tanto pelo Id, quanto pela query */

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId === null) {
    return getProductsFromQuery(query);
  }
  if (query === null) {
    return getProductsFromCategoryId(categoryId);
  }
}
