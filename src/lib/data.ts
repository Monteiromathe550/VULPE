import iphone17Orange from '../assets/iphone-17-orange.png';
import iphone17Black from '../assets/iphone-17-black.png';
import iphone17ProOrange from '../assets/iphone-17-pro-orange.png';
import iphone17ProWhite from '../assets/iphone-17-pro-white.png';
import iphone17Blue from '../assets/iphone-17-blue.png';
import ipadMini from '../assets/ipad-mini.png';
import macbook from '../assets/macbook.png';
import macMini from '../assets/mac-mini.png';
import magicKeyboard from '../assets/magic-keyboard.png';
import airPods4 from '../assets/airpods-4.png';
import airPodsAnc from '../assets/airpods-anc.png';
import airPodsPro from '../assets/airpods-pro.png';
import airPodsMax from '../assets/airpods-max.png';
import airPodsCase from '../assets/airpods-case.png';
import iphone16ProMaxWhite from '../assets/iphone-16-pro-max-white.png';
import ipadKeyboard from '../assets/ipad-keyboard.png';
import magicMouse from '../assets/magic-mouse.png';
import ipadBlue from '../assets/ipad-blue.png';
import ipadProGray from '../assets/ipad-pro-gray.png';
import applePencilPro from '../assets/apple-pencil-pro.png';
import appleCharger20w from '../assets/apple-charger-20w.png';
import appleWatchUltra from '../assets/apple-watch-ultra.png';
import appleWatchSE from '../assets/apple-watch-se.png';
import appleWatchUltraBlack from '../assets/apple-watch-ultra-black.png';
import appleWatchUltraTitanium from '../assets/apple-watch-ultra-titanium.png';
import appleWatchStarlight from '../assets/apple-watch-starlight.png';
import appleWatchRoseGold from '../assets/apple-watch-rose-gold.png';
import appleWatchSEWhite from '../assets/apple-watch-se-white.png';
import iphone16PlusPurple from '../assets/iphone-16-plus-purple.png';
import iphone16Black from '../assets/iphone-16-black.png';
import ipadAirSpaceGray from '../assets/ipad-air-space-gray.png';
import ipadAirStarlight from '../assets/ipad-air-starlight.png';
import macbookProSpaceGray from '../assets/macbook-pro-space-gray.png';
import macMiniBack from '../assets/mac-mini-back.png';
import iphone16ProSpaceGray from '../assets/iphone-16-pro-space-gray.png';

export type ProductStatus = 'Disponível' | 'Em falta';

export interface Product {
  id: string;
  name: string;
  category: string;
  pricePix: number | null;
  priceTotalInstallment: number | null;
  installmentValue: number | null;
  status: ProductStatus;
  image: string;
}

const BASE_IMAGES: Record<string, string> = {
  'Apple Watch': 'https://images.unsplash.com/photo-1659221483828-6bb77a72fc2e',
  'iPhone (Modelos Anteriores e 16)': 'https://images.unsplash.com/photo-1695822958645-b2b058159215',
  'iPhone Linha 17': 'https://images.unsplash.com/photo-1725625972772-9f1bc04a2608',
  'MacBook Pro': 'https://images.unsplash.com/photo-1537183673931-f890242dbaef',
  'Mac Mini': 'https://images.unsplash.com/photo-1537183673931-f890242dbaef',
  'iPad': 'https://images.unsplash.com/photo-1516089996551-0fe8a38413b9',
  'AirPods': 'https://images.unsplash.com/photo-1621451766686-38d3f8964a0f',
  'Acessórios e Periféricos': 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0'
};

// Mapeamento de produtos específicos para imagens customizadas
const CUSTOM_PRODUCT_IMAGES: Record<string, string> = {
  // iPhones 17
  'iPhone 17 128GB': iphone17Blue,
  'iPhone 17 Air 256GB': iphone17Black,
  'iPhone 17 Air 512GB': iphone17Black,
  'iPhone 17 Pro 256GB': iphone17ProOrange,
  'iPhone 17 Pro 512GB': iphone17ProOrange,
  'iPhone 17 Pro 1TB': iphone17ProOrange,
  'iPhone 17 Pro Max 256GB': iphone17ProWhite,
  'iPhone 17 Pro Max 512GB': iphone17ProWhite,
  'iPhone 17 Pro Max 1TB': iphone17ProWhite,
  'iPhone 17 Pro Max 2TB': iphone17ProWhite,

  // iPhones 16
  'iPhone 16 Pro Max 256GB': iphone16ProMaxWhite,
  'iPhone 16 Pro Max 512GB': iphone16ProMaxWhite,
  'iPhone 16 Pro 128GB': iphone16ProSpaceGray,
  'iPhone 16 Plus 128GB': iphone16PlusPurple,
  'iPhone 16 128GB': iphone16Black,
  'iPhone 16 256GB': iphone16Black,

  // iPads
  'iPad Mini 128GB': ipadMini,
  'iPad Mini 256GB': ipadMini,
  'iPad Mini 512GB': ipadMini,
  'iPad 11 A16 128GB': ipadBlue,
  'iPad 11 A16 256GB': ipadBlue,
  'iPad Air M3 11" 128GB': ipadKeyboard,
  'iPad Air M3 11" 256GB': ipadKeyboard,
  'iPad Air M3 13" 128GB': ipadAirStarlight,
  'iPad Air M3 13" 256GB': ipadAirSpaceGray,
  'iPad Pro M4 11" 256GB': ipadProGray,
  'iPad Pro M4 13" 256GB': ipadProGray,
  'iPad Pro M5 11" 256GB': ipadProGray,
  'iPad Pro M5 13" 256GB': ipadProGray,

  // MacBooks
  'MacBook Pro M4 14" 512GB': macbook,
  'MacBook Pro M4 14" 1TB': macbook,
  'MacBook Pro M4 16" 512GB': macbook,
  'MacBook Pro M4 16" 1TB': macbook,
  'Macbook Pro M4 Pro 24/512GB 14"': macbookProSpaceGray,
  'Macbook Pro M4 Max 36/1TB 14"': macbookProSpaceGray,
  'Macbook Pro M4 Max 36/1TB 16"': macbookProSpaceGray,
  'Macbook Pro M4 Max 48/1TB 16"': macbookProSpaceGray,

  // Mac Mini
  'Mac Mini M4 256GB': macMini,
  'Mac Mini M4 512GB': macMini,

  // Acessórios
  'Magic Keyboard': magicKeyboard,
  'Magic Keyboard para Mac': magicKeyboard,
  'Magic Keyboard para Mac (iPad section)': ipadKeyboard,
  'Magic Mouse': magicMouse,
  'Apple Pencil Pro': applePencilPro,
  'Carregador Apple 20w': appleCharger20w,

  // Apple Watch
  'Apple Watch Ultra 2': appleWatchUltraBlack,
  'Apple Watch Ultra 3': appleWatchUltraTitanium,
  'Apple Watch SE 2 44mm': appleWatchSE,
  'Apple Watch SE 3 40mm': appleWatchStarlight,
  'Apple Watch SE 3 44mm': appleWatchSEWhite,
  'Apple Watch S11 42mm': appleWatchRoseGold,

  // AirPods
  'AirPods 4': airPods4,
  'AirPods 4 ANC': airPodsAnc,
  'AirPods Pro 2': airPodsPro,
  'AirPods Pro 3': airPodsCase,
  'AirPods Max USB-C': airPodsMax
};

const RAW_DATA = {
  "meta": {
    "title": "Tabela de Preços Apple",
    "updated_at": "Dezembro 2025",
    "currency": "BRL"
  },
  "categories": [
    {
      "name": "Apple Watch",
      "products": [
        { "model": "Apple Watch SE 2 40mm", "price_pix": null, "installment_value": null, "price_total_installment": null, "status": "out_of_stock" },
        { "model": "Apple Watch SE 2 44mm", "price_pix": 1990, "installment_value": 195, "price_total_installment": 2337, "status": "available" },
        { "model": "Apple Watch SE 3 40mm", "price_pix": 2690, "installment_value": 261, "price_total_installment": 3135, "status": "available" },
        { "model": "Apple Watch SE 3 44mm", "price_pix": 2890, "installment_value": 280, "price_total_installment": 3363, "status": "available" },
        { "model": "Apple Watch S11 42mm", "price_pix": 3190, "installment_value": 309, "price_total_installment": 3705, "status": "available" },
        { "model": "Apple Watch S11 46mm", "price_pix": null, "installment_value": null, "price_total_installment": null, "status": "out_of_stock" },
        { "model": "Apple Watch Ultra 2", "price_pix": 5190, "installment_value": 499, "price_total_installment": 5985, "status": "available" },
        { "model": "Apple Watch Ultra 3", "price_pix": 5990, "installment_value": 575, "price_total_installment": 6897, "status": "available" }
      ]
    },
    {
      "name": "iPhone (Modelos Anteriores e 16)",
      "products": [
        { "model": "iPhone 13 128GB", "price_pix": 3450, "installment_value": 333, "price_total_installment": 4001, "status": "available" },
        { "model": "iPhone 14 128GB", "price_pix": 3890, "installment_value": 375, "price_total_installment": 4503, "status": "available" },
        { "model": "iPhone 15 128GB", "price_pix": 4290, "installment_value": 413, "price_total_installment": 5073, "status": "available" },
        { "model": "iPhone 15 256GB", "price_pix": null, "installment_value": null, "price_total_installment": null, "status": "out_of_stock" },
        { "model": "iPhone 16e 128GB", "price_pix": 3990, "installment_value": 385, "price_total_installment": 4617, "status": "available" },
        { "model": "iPhone 16e 256GB", "price_pix": null, "installment_value": null, "price_total_installment": null, "status": "out_of_stock" },
        { "model": "iPhone 16 128GB", "price_pix": 4790, "installment_value": 463, "price_total_installment": 5757, "status": "available" },
        { "model": "iPhone 16 256GB", "price_pix": 5690, "installment_value": 546, "price_total_installment": 6555, "status": "available" },
        { "model": "iPhone 16 Plus 128GB", "price_pix": 5790, "installment_value": 575, "price_total_installment": 6897, "status": "available" },
        { "model": "iPhone 16 Pro 128GB", "price_pix": 6890, "installment_value": 661, "price_total_installment": 7932, "status": "available" },
        { "model": "iPhone 16 Pro 256GB", "price_pix": null, "installment_value": null, "price_total_installment": null, "status": "out_of_stock" },
        { "model": "iPhone 16 Pro Max 256GB", "price_pix": 7990, "installment_value": 765, "price_total_installment": 9177, "status": "available" },
        { "model": "iPhone 16 Pro Max 512GB", "price_pix": 8850, "installment_value": 850, "price_total_installment": 10200, "status": "available" }
      ]
    },
    {
      "name": "iPhone Linha 17",
      "products": [
        { "model": "iPhone 17 128GB", "price_pix": 6890, "installment_value": 660, "price_total_installment": 7923, "status": "available" },
        { "model": "iPhone 17 Air 256GB", "price_pix": 6990, "installment_value": 670, "price_total_installment": 8037, "status": "available" },
        { "model": "iPhone 17 Air 512GB", "price_pix": 7590, "installment_value": 727, "price_total_installment": 8721, "status": "available" },
        { "model": "iPhone 17 Pro 256GB", "price_pix": 8990, "installment_value": 860, "price_total_installment": 10317, "status": "available" },
        { "model": "iPhone 17 Pro 512GB", "price_pix": 9690, "installment_value": 936, "price_total_installment": 11115, "status": "available" },
        { "model": "iPhone 17 Pro 1TB", "price_pix": 11590, "installment_value": 1107, "price_total_installment": 13281, "status": "available" },
        { "model": "iPhone 17 Pro Max 256GB", "price_pix": 9790, "installment_value": 936, "price_total_installment": 11229, "status": "available" },
        { "model": "iPhone 17 Pro Max 512GB", "price_pix": 10990, "installment_value": 1054, "price_total_installment": 12597, "status": "available" },
        { "model": "iPhone 17 Pro Max 1TB", "price_pix": 12290, "installment_value": 1173, "price_total_installment": 14079, "status": "available" },
        { "model": "iPhone 17 Pro Max 2TB", "price_pix": 15790, "installment_value": 1506, "price_total_installment": 18069, "status": "available" }
      ]
    },
    {
      "name": "MacBook Pro",
      "products": [
        { "model": "Macbook Pro M4 Pro 24/512GB 14\"", "price_pix": 14299, "installment_value": 1468, "price_total_installment": 17613, "status": "available" },
        { "model": "Macbook Pro M4 Max 36/1TB 14\"", "price_pix": 23490, "installment_value": 2256, "price_total_installment": 27075, "status": "available" },
        { "model": "Macbook Pro M4 Max 36/1TB 16\"", "price_pix": 26590, "installment_value": 2552, "price_total_installment": 30261, "status": "available" },
        { "model": "Macbook Pro M4 Max 48/1TB 16\"", "price_pix": 28590, "installment_value": 2722, "price_total_installment": 32661, "status": "available" },
        { "model": "Macbook Pro M5 16/512GB 14\"", "price_pix": 12690, "installment_value": 1211, "price_total_installment": 14535, "status": "available" },
        { "model": "Macbook Pro M5 16/1TB 14\"", "price_pix": 14590, "installment_value": 1392, "price_total_installment": 16701, "status": "available" },
        { "model": "Macbook Pro M5 24/1TB 14\"", "price_pix": 16590, "installment_value": 1582, "price_total_installment": 18981, "status": "available" }
      ]
    },
    {
      "name": "Mac Mini",
      "products": [
        { "model": "Mac Mini M4 16/256", "price_pix": 4590, "installment_value": 442, "price_total_installment": 5301, "status": "available" },
        { "model": "Mac Mini M4 16/512", "price_pix": 5890, "installment_value": 566, "price_total_installment": 6793, "status": "available" },
        { "model": "Mac Mini M4 24/512", "price_pix": 8990, "installment_value": 863, "price_total_installment": 10357, "status": "available" },
        { "model": "Mac Mini M4 24/1TB", "price_pix": 11590, "installment_value": 948, "price_total_installment": 11383, "status": "available" }
      ]
    },
    {
      "name": "iPad",
      "products": [
        { "model": "iPad Mini 7th 128GB", "price_pix": 3490, "installment_value": 337, "price_total_installment": 4047, "status": "available" },
        { "model": "iPad 11 A16 128GB", "price_pix": 2990, "installment_value": 290, "price_total_installment": 3477, "status": "available" },
        { "model": "iPad 11 A16 256GB", "price_pix": 3690, "installment_value": 356, "price_total_installment": 4275, "status": "available" },
        { "model": "iPad Air M3 11\" 128GB", "price_pix": 5190, "installment_value": 499, "price_total_installment": 5985, "status": "available" },
        { "model": "iPad Air M3 11\" 256GB", "price_pix": 5790, "installment_value": 566, "price_total_installment": 6669, "status": "available" },
        { "model": "iPad Air M3 13\" 128GB", "price_pix": 5990, "installment_value": 575, "price_total_installment": 6897, "status": "available" },
        { "model": "iPad Air M3 13\" 256GB", "price_pix": 6590, "installment_value": 632, "price_total_installment": 7581, "status": "available" },
        { "model": "iPad Pro M4 11\" 256GB", "price_pix": 6990, "installment_value": 670, "price_total_installment": 8037, "status": "available" },
        { "model": "iPad Pro M4 13\" 256GB", "price_pix": 8790, "installment_value": 841, "price_total_installment": 10089, "status": "available" },
        { "model": "iPad Pro M5 11\" 256GB", "price_pix": 7590, "installment_value": 727, "price_total_installment": 8721, "status": "available" },
        { "model": "iPad Pro M5 13\" 256GB", "price_pix": 9490, "installment_value": 907, "price_total_installment": 10887, "status": "available" }
      ]
    },
    {
      "name": "AirPods",
      "products": [
        { "model": "AirPods 4", "price_pix": 950, "installment_value": 96, "price_total_installment": 1151, "status": "available" },
        { "model": "AirPods 4 ANC", "price_pix": 1590, "installment_value": 157, "price_total_installment": 1881, "status": "available" },
        { "model": "AirPods Pro 2", "price_pix": 1690, "installment_value": 166, "price_total_installment": 1995, "status": "available" },
        { "model": "AirPods Pro 3", "price_pix": 1990, "installment_value": 195, "price_total_installment": 2337, "status": "available" },
        { "model": "AirPods Max USB-C", "price_pix": 4290, "installment_value": 413, "price_total_installment": 4959, "status": "available" }
      ]
    },
    {
      "name": "Acessórios e Periféricos",
      "products": [
        { "model": "Magic Keyboard para Mac (iPad section)", "price_pix": 990, "installment_value": 100, "price_total_installment": 1197, "status": "available" },
        { "model": "Magic Keyboard para Mac", "price_pix": 990, "installment_value": 100, "price_total_installment": 1197, "status": "available" },
        { "model": "Apple Pencil Pro", "price_pix": 1090, "installment_value": 109, "price_total_installment": 1311, "status": "available" },
        { "model": "Apple Pencil USB-C", "price_pix": 750, "installment_value": 77, "price_total_installment": 923, "status": "available" },
        { "model": "Carregador Apple 20w", "price_pix": 189, "installment_value": 24, "price_total_installment": 284, "status": "available" },
        { "model": "Magic Mouse", "price_pix": 890, "installment_value": 90, "price_total_installment": 1083, "status": "available" },
        { "model": "Magic Trackpad", "price_pix": 1190, "installment_value": 119, "price_total_installment": 1425, "status": "available" },
        { "model": "AirTag Pack 4", "price_pix": 980, "installment_value": 96, "price_total_installment": 1151, "status": "available" }
      ]
    }
  ]
};

export const CATEGORIES = RAW_DATA.categories.map(c => c.name);

export const PRODUCTS: Product[] = RAW_DATA.categories.flatMap((category, catIndex) =>
  category.products.map((product, prodIndex) => ({
    id: `${catIndex}-${prodIndex}`,
    name: product.model,
    category: category.name,
    pricePix: product.price_pix,
    priceTotalInstallment: product.price_total_installment,
    installmentValue: product.installment_value,
    status: product.status === 'out_of_stock' ? 'Em falta' : 'Disponível',
    image: CUSTOM_PRODUCT_IMAGES[product.model] || BASE_IMAGES[category.name] || 'https://images.unsplash.com/photo-1616348436168-de43ad0db179'
  }))
);
