export const getWhatsAppLink = (productName: string) => {
  const phone = "5565981274128"; // Exemplo, pode ser configurado
  const message = `Olá, tenho interesse no ${productName} que vi no site.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};
