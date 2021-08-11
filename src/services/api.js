export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  // Implemente aqui
  const response = await fetch(url);
  const object = await response.json();

  return object;
}

/* Lógica recomendada pelo Lucio no grupo de Whatsapp, para que a funçao possa ser chamada
tanto pelo Id, quanto pela query */

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(url);
  const object = await response.json();

  return object;
}
