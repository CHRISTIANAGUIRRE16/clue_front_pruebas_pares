const products = [
  { id: 1, price: 2.99, type: "PRODUCT", weight: "1 kg", name: "Arroz Blanco", image: require("../../../assets/images/arroz-blanco.jpg"), color: "#ffcc66" },
  { id: 2, price: 8.49, type: "PRODUCT", weight: "975 ml", name: "Aceite de Oliva Extra Virgen", image: require("../../../assets/images/aceite-de-oliva-extra-virgen.jpg"), color: "#ff6666" },
  { id: 3, price: 1.79, type: "PRODUCT", weight: "500g", name: "Lentejas", image: require("../../../assets/images/lentejas.jpg"), color: "#99ff99" },
  { id: 4, price: 0.95, type: "PRODUCT", weight: "1 litro", name: "Leche Entera Vita", image: require("../../../assets/images/leche-entera-vita.jpg"), color: "#ffccff" },
  { id: 5, price: 1.75, type: "PRODUCT", weight: "500g", name: "Pasta (espaguetis)", image: require("../../../assets/images/espaguetis-oriental.jpg"), color: "#99ccff" },
  { id: 6, price: 2.80, type: "PRODUCT", weight: "200g", name: "Atún Real", image: require("../../../assets/images/atun-real.jpg"), color: "#ff9966" },
  { id: 7, price: 4.99, type: "PRODUCT", weight: "400g", name: "Café Minerva", image: require("../../../assets/images/cafe-minerva.jpg"), color: "#99ffcc" },
  { id: 8, price: 2.10, type: "PRODUCT", weight: "500ml", name: "Yogurt Natural Tony", image: require("../../../assets/images/yogurth-natural-tony.jpg"), color: "#ff6666" },
  { id: 9, price: 2.50, type: "PRODUCT", weight: "1 kg", name: "Azúcar Blanca San Carlos", image: require("../../../assets/images/azucar-blanca.jpg"), color: "#ffffcc" },
  { id: 10, price: 4.20, type: "PRODUCT", weight: "2 kg", name: "Harina de Trigo", image: require("../../../assets/images/harina-de-trigo.jpg"), color: "#99ccff" },
  { id: 11, price: 12.99, type: "PRODUCT", name: "Salmón Ahumado", weight: "500 g", image: require("../../../assets/images/salmon-ahumado.jpg"), color: "#ffccff" },
  { id: 12, price: 3.00, type: "PRODUCT", weight: "500g", name: "Pan Integral", image: require("../../../assets/images/pan-integral.jpg"), color: "#ffffcc" },
  { id: 13, price: 1.00, type: "PRODUCT", weight: "4 u", name: "Manzanas", image: require("../../../assets/images/manzanas.jpg"), color: "#99ff99" },
  { id: 14, price: 4.50, type: "PRODUCT", weight: "30 u", name: "Huevos (Cubeta)", image: require("../../../assets/images/cubeta-de-huevos.jpg"), color: "#ffcc66" },
  { id: 15, price: 4.20, type: "PRODUCT", weight: "750g", name: "Cereal de Avena", image: require("../../../assets/images/cereal-avena.jpg"), color: "#ffffcc" },
  { id: 16, price: 2.99, type: "PRODUCT", weight: "250g", name: "Mantequilla Bonella", image: require("../../../assets/images/mantequilla-bonella.jpg"), color: "#ffccff" },
  { id: 17, price: 0.90, type: "PRODUCT", weight: "1kg", name: "Sal (Cris-sal)", image: require("../../../assets/images/sal.jpg"), color: "#ff9966" },
  { id: 18, price: 2.50, type: "PRODUCT", weight: "300g", name: "Galletas Oreo", image: require("../../../assets/images/galleta-oreo.jpg"), color: "#ff6666" },
  { id: 19, price: 0.60, type: "PRODUCT", weight: "500 ml", name: "Agua Mineral (Dasani)", image: require("../../../assets/images/agua-dasani.jpg"), color: "#99ffcc" },
  { id: 20, price: 1.00, type: "PRODUCT", weight: "4 lb", name: "Zanahorias", image: require("../../../assets/images/zanahoria-promotion.jpg"), color: "#99ff99" },
  { id: 21, price: 3.20, type: "PRODUCT", weight: "100g", name: "Chocolate Ricacao", image: require("../../../assets/images/ricacao.jpg"), color: "#ff9966" },
  { id: 22, price: 1.35, type: "PRODUCT", weight: "1.35 ml", name: "Coca-Cola", image: require("../../../assets/images/coca-cola.jpg"), color: "#99ccff" },
  { id: 23, price: 2.50, type: "PRODUCT", weight: "3 lt", name: "Pepsi", image: require("../../../assets/images/pepsi.jpg"), color: "#ff6666" },
  { id: 24, price: 3.00, type: "PRODUCT", weight: "3 lt", name: "Sprite", image: require("../../../assets/images/sprite.jpg"), color: "#ffffcc" },
  { id: 25, price: 1.10, type: "PRODUCT", weight: "1.35", name: "Fanta Naranja", image: require("../../../assets/images/fanta.jpg"), color: "#ff9966" },
  { id: 26, price: 2.75, type: "PRODUCT", weight: "250g", name: "Queso Mozzarella", image: require("../../../assets/images/mozarella.jpg"), color: "#ffccff" },
  { id: 27, price: 2.99, type: "PRODUCT", weight: "1 lt", name: "Leche Descremada Vita", image: require("../../../assets/images/leche-descremada-vita.jpg"), color: "#ffccff" },
  { id: 28, price: 2.50, type: "PRODUCT", weight: "500 ml", name: "Aceite Girasol", image: require("../../../assets/images/girasol.jpg"), color: "#ff6666" },
  { id: 29, price: 1.25, type: "PRODUCT", weight: "45g", name: "Chocolate KitKat Nestlé", image: require("../../../assets/images/kitkat.jpg"), color: "#ff9966" },
  { id: 30, price: 1.85, type: "PRODUCT", weight: "90g", name: "Chocolate en barra Galak", image: require("../../../assets/images/galak.jpg"), color: "#ff9966" },
  { id: 31, price: 0.50, type: "PRODUCT", weight: "25 g", name: "Chicles Trident", image: require("../../../assets/images/trident.jpg"), color: "#ff9966" },
  { id: 32, price: 1.80, type: "PRODUCT", weight: "150g", name: "Gomitas de Ositos", image: require("../../../assets/images/gomitas.jpg"), color: "#ff9966" },
  { id: 33, price: 1.50, type: "PRODUCT", weight: "200g", name: "Papas Fritas", image: require("../../../assets/images/papas-fritas.jpg"), color: "#ff9966" },
  { id: 34, price: 4.50, type: "PRODUCT", weight: "500 g", name: "Filete de pollo", image: require("../../../assets/images/filete-de-pollo.jpg"), color: "#ff6666" },
  { id: 35, price: 7.49, type: "PRODUCT", weight: "500 g", name: "Costillas de Cerdo", image: require("../../../assets/images/costilla-de-cerdo.jpg"), color: "#ff6666" },
  { id: 36, price: 7.99, type: "PRODUCT", weight: "500 g", name: "Chuletas de Cerdo", image: require("../../../assets/images/chuleta-de-cerdo.jpg"), color: "#ff6666" },
  { id: 37, price: 5.99, type: "PRODUCT", weight: "4 lb", name: "Pechuga de Pollo", image: require("../../../assets/images/pechuga-pollo.jpg"), color: "#99ff99" },
  { id: 38, price: 4.49, type: "PRODUCT", weight: "2 kg", name: "Muslos de Pollo", image: require("../../../assets/images/pechuga-pollo.jpg"), color: "#99ff99" },
  { id: 39, price: 7.89, type: "PRODUCT", weight: "5 lb", name: "Pollo de campo", image: require("../../../assets/images/pollo-criollo.jpg"), color: "#99ff99" },
  { id: 40, price: 6.49, type: "PROMOTION", weight: "2 kg", name: "Pollo de Mr. Pollo (-10%)", image: require("../../../assets/images/mr-pollo.jpg"), color: "#99ff99" },
  { id: 41, price: 1.25, type: "PRODUCT", weight: "8 u", name: "Salchichas de pollo (plumrose)", image: require("../../../assets/images/salchicha-pollo.jpg"), color: "#ff9966" },
  { id: 42, price: 3.99, type: "PRODUCT", weight: "1 kg", name: "Manzanas Verde", image: require("../../../assets/images/manzana-verde.jpg") },
  { id: 43, price: 1.00, type: "PROMOTION", weight: "250 g", name: "Zanahorias(-10%)", image: require("../../../assets/images/zanahoria-promotion.jpg") },
  { id: 44, price: 5.99, type: "PRODUCT", weight: "750 g", name: "Tilapia Fresca", image: require("../../../assets/images/tilapia-fresca.jpg") },
  { id: 45, price: 1.00, type: "PRODUCT", weight: "1Kg", name: "Remolachas", image: require("../../../assets/images/remolachas.jpg") },
  { id: 46, price: 2.49, type: "PRODUCT", weight: "400 g", name: "Queso Cheddar", image: require("../../../assets/images/queso-cheddar.jpg") },
  { id: 47, price: 1.00, type: "PRODUCT", weight: "1 kg", name: "Promoción: Espinacas Frescas", image: require("../../../assets/images/espinaca-fresca.jpg") },
  { id: 48, price: 6.79, type: "PRODUCT", weight: "500 g", name: "Filete de Ternera", image: require("../../../assets/images/filete-ternera.jpg") },
  { id: 49, price: 2.50, type: "PROMOTION", weight: "700 g", name: "Oferta: Calabacines", image: require("../../../assets/images/calabacines.jpg") },
  { id: 50, price: 7.29, type: "PRODUCT", weight: "900 g", name: "Langostinos Frescos", image: require("../../../assets/images/langostinos-frescos.jpg") },
  { id: 51, price: 5.99, type: "PROMOTION", weight: "500ml", name: "six pack pilsener(-5%)", image: require("../../../assets/images/six-pack-pilsener.jpg") },
  { id: 52, price: 2.99, type: "PRODUCT", weight: "350 g", name: "Jamón Plumrose", image: require("../../../assets/images/jamon-plumrose.jpg") },
  { id: 53, price: 1.50, type: "PROMOTION", weight: "250 g", name: "Promo: Tomates", image: require("../../../assets/images/tomates.jpg") },
  { id: 54, price: 4.49, type: "PRODUCT", weight: "400 gr", name: "Chorizo Paisa", image: require("../../../assets/images/chorizo-paisa.jpg") },
  { id: 55, price: 2.89, type: "PROMOTION", weight: "600 g", name: "Papas (-15%)", image: require("../../../assets/images/papas.jpg") },
  { id: 56, price: 5.49, type: "PRODUCT", weight: "700 g", name: "Pechuga de Pavo", image: require("../../../assets/images/pechuga-pavo.jpg") },
  { id: 57, price: 2.79, type: "PROMOTION", weight: "1lt", name: "Yogurt Tony (-10%)", image: require("../../../assets/images/yogurt-tony.jpg") },
  { id: 58, price: 9.99, type: "PRODUCT", weight: "1 kg", name: "Carne de Res", image: require("../../../assets/images/carne-res.jpg") },
  { id: 59, price: 4.29, type: "PROMOTION", weight: "500 g", name: "Queso Manaba", image: require("../../../assets/images/queso-manaba.jpg") },
  { id: 60, price: 1.00, type: "PRODUCT", weight: "425 g", name: "Sardinas Tomate", image: require("../../../assets/images/sardina-tomate.jpg") },
  { id: 61, price: 0.75, type: "PRODUCT", weight: "1kg", name: "Pimientos", image: require("../../../assets/images/pimientos.jpg") },
  { id: 62, price: 7.79, type: "PRODUCT", weight: "900 g", name: "Camarón Viva", image: require("../../../assets/images/camaron.jpg") },
  { id: 63, price: 3.00, type: "PROMOTION", weight: "1lt", name: "Switch (-5%)", image: require("../../../assets/images/switch.jpg") },
  { id: 64, price: 4.49, type: "PRODUCT", weight: "600 g", name: "Mortadela Carne", image: require("../../../assets/images/mortadela-carne.jpg") },
  { id: 65, price: 1.75, type: "PROMOTION", weight: "250 g", name: "Mix Embutidos (-15%)", image: require("../../../assets/images/mix-embutidos.jpg") },
  { id: 66, price: 48.99, type: "PROMOTION", weight: "7Kg", name: "Pavo Pre-cocido(-10%)", image: require("../../../assets/images/pavo-precocido.jpg") },
  { id: 67, price: 13.99, type: "PROMOTION", weight: "1lt", name: "Whisky (-20%)", image: require("../../../assets/images/wisky.jpg") },
  { id: 68, price: 3.99, type: "PROMOTION", weight: "500 ml", name: "Zumo de Naranja Natural (-5%)", image: require("../../../assets/images/zumo-naranja.jpg") },
  { id: 69, price: 12.99, type: "PROMOTION", weight: "750 ml", name: "Vino Tinto(-15%)", image: require("../../../assets/images/vino-tinto.jpg") },
  { id: 70, price: 18.99, type: "PROMOTION(-5%)", weight: "700 ml", name: "Ron Añejo", image: require("../../../assets/images/ron-anejo.jpg") },
  { id: 78, price: 2.29, type: "PROMOTION", weight: "500 ml", name: "Té Negro(-5%)", image: require("../../../assets/images/te-negro.jpg") },
  { id: 79, price: 3.49, type: "PRODUCT", weight: "500 ml", name: "Detergente para Ropa", image: require("../../../assets/images/detergente-ropa.jpg") },
  { id: 80, price: 2.99, type: "PROMOTION", weight: "750 ml", name: "Limpiador Multiusos(-10%)", image: require("../../../assets/images/limpiador-multiusos.jpg") },
  { id: 81, price: 1.79, type: "PRODUCT", weight: "400 g", name: "Jabón en Barra para Manos", image: require("../../../assets/images/jabon-barra.jpg") },
  { id: 82, price: 4.99, type: "PROMOTION", weight: "1 L", name: "Desinfectante de Superficies(-10%)", image: require("../../../assets/images/desinfectante-superficies.jpg") },
  { id: 83, price: 3.29, type: "PROMOTION", weight: "450 ml", name: "Removedor de Manchas(-5%)", image: require("../../../assets/images/removedor-manchas.jpg") },
  { id: 84, price: 5.49, type: "PROMOTION", weight: "750 ml", name: "Desengrasante Industrial(-10%)", image: require("../../../assets/images/desengrasante-industrial.jpg") },
  { id: 85, price: 2.49, type: "PRODUCT", weight: "300 g", name: "Esponjas de Limpieza", image: require("../../../assets/images/esponjas-limpieza.jpg") },
  { id: 86, price: 6.99, type: "PROMOTION", weight: "1 L", name: "Lavavajillas Concentrado(-5%)", image: require("../../../assets/images/lavavajillas-concentrado.jpg") },
  { id: 87, price: 4.79, type: "PRODUCT", weight: "500 ml", name: "Acondicionador para Muebles", image: require("../../../assets/images/acondicionador-muebles.jpg") },
  { id: 88, price: 3.99, type: "PRODUCT", weight: "400 g", name: "Limpiador de Baños", image: require("../../../assets/images/limpiador-banos.jpg") },
  { id: 89, price: 2.99, type: "PRODUCT", weight: "200 ml", name: "Jabón Líquido Antibacterial", image: require("../../../assets/images/jabon-liquido-antibacterial.jpg") },
  { id: 90, price: 4.49, type: "PRODUCT", weight: "400 ml", name: "Enjuague Bucal", image: require("../../../assets/images/enjuague-bucal.jpg") },
  { id: 91, price: 3.79, type: "PRODUCT", weight: "300 ml", name: "Shampoo Revitalizante", image: require("../../../assets/images/shampoo-revitalizante.jpg") },
  { id: 92, price: 5.99, type: "PRODUCT", weight: "250 ml", name: "Acondicionador Profundo", image: require("../../../assets/images/acondicionador-profundo.jpg") },
  { id: 93, price: 1.99, type: "PRODUCT", weight: "150 ml", name: "Gel Antibacterial de Manos", image: require("../../../assets/images/gel-antibacterial-manos.jpg") },
  { id: 94, price: 6.49, type: "PRODUCT", weight: "200 ml", name: "Crema Hidratante Facial", image: require("../../../assets/images/crema-hidratante-facial.jpg") },
  { id: 95, price: 3.29, type: "PROMOTION", weight: "100 g", name: "Pasta Dental Blanqueadora(-10%)", image: require("../../../assets/images/pasta-dental-blanqueadora.jpg") },
  { id: 96, price: 4.99, type: "PROMOTION", weight: "150 ml", name: "Loción Corporal Nutritiva(-5%)", image: require("../../../assets/images/lotion-corporal-nutritiva.jpg") },
  { id: 97, price: 7.99, type: "PRODUCT", weight: "400 ml", name: "Espuma de Afeitar Suave", image: require("../../../assets/images/espuma-afeitar-suave.jpg") },
  { id: 98, price: 2.49, type: "PRODUCT", weight: "100 ml", name: "Desodorante Roll-On", image: require("../../../assets/images/desodorante-roll-on.jpg") },
  { id: 99, price: 4.79, type: "PRODUCT", weight: "300 ml", name: "Gel Ego", image: require("../../../assets/images/gel-ego.jpg") },
  { id: 100, price: 1.99, type: "PROMOTION", weight: "Pack de 100 unidades", name: "Servilletas de Papel(-5%)", image: require("../../../assets/images/servilletas-papel.jpg") }

];


export const getGroceryItems = (searchText = "", type) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const data = products
          .filter((d) =>
            d.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .filter((f) => f.type === type);
        resolve({
          data: data,
          total: data.length,
        });
      } catch (err) {
        reject(err);
      }
    }, 250);
  });
};

export const getGroceryItem = (id = "") => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve({
          data: products.find((f) => f.id == id),
        });
      } catch (err) {
        reject(err);
      }
    }, 0);
  });
};
