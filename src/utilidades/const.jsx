export const NAME_APP = 'Bordados Marina';

export async function getProductsMeLi(criterio) {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${criterio}`
    );
    const data = await response.json();
    return data.results;
  }
