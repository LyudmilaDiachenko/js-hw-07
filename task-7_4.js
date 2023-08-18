// # Завдання 4
// Ви отримали об'єкт даних з інформацією про продукти в 
// інтернет-магазині:

const product = {
  id: 1,
  name: "Ноутбук Lenovo IdeaPad 3",
  price: 15000,
  description: "15.6 дюймовий, AMD Ryzen 5, 8 ГБ ОЗУ, 512 ГБ SSD",
  images: ["image1.jpg", "image2.jpg", "image3.jpg"],
  category: "Ноутбуки",
  available: true,
};

// Напишіть функцію printProductInfo, яка приймає об'єкт 
// product в якості параметра та друкує в консоль інформацію 
// про цей продукт в наступному форматі:

function printProductInfo({name,price,category,available}){
   return `Назва: ${name}\nКатегорія: ${category}\nДоступність: ${available ? "Так" : "Ні"}\nЦіна: ${price} грн`
}
console.log(printProductInfo(product))

// Реалізуйте цю функцію, використовуючи деструктуризацію 
// для отримання необхідних полів з об'єкту product.