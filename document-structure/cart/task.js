document.addEventListener('DOMContentLoaded', function() {
    const cartProducts = document.querySelector('.cart__products');
    const products = document.querySelectorAll('.product');

    // Обработчики для кнопок +/-
    products.forEach(product => {
        const decButton = product.querySelector('.product__quantity-control_dec');
        const incButton = product.querySelector('.product__quantity-control_inc');
        const quantityValue = product.querySelector('.product__quantity-value');
        const addButton = product.querySelector('.product__add');
        const productId = product.getAttribute('data-id');
        const productImage = product.querySelector('.product__image').src;

        // Уменьшение количества
        decButton.addEventListener('click', () => {
            let value = parseInt(quantityValue.textContent);
            if (value > 1) {
                quantityValue.textContent = value - 1;
            }
        });

        // Увеличение количества
        incButton.addEventListener('click', () => {
            let value = parseInt(quantityValue.textContent);
            quantityValue.textContent = value + 1;
        });

        // Добавление в корзину
        addButton.addEventListener('click', () => {
            const count = parseInt(quantityValue.textContent);
            addToCart(productId, productImage, count);
        });
    });

    // Функция добавления товара в корзину
    function addToCart(id, image, count) {
        // Проверяем, есть ли товар уже в корзине
        const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${id}"]`);
        
        if (existingProduct) {
            // Если товар уже есть - увеличиваем количество
            const productCount = existingProduct.querySelector('.cart__product-count');
            productCount.textContent = parseInt(productCount.textContent) + count;
        } else {
            // Если товара нет - создаем новый элемент
            const cartProduct = document.createElement('div');
            cartProduct.className = 'cart__product';
            cartProduct.setAttribute('data-id', id);
            
            const cartImage = document.createElement('img');
            cartImage.className = 'cart__product-image';
            cartImage.src = image;
            
            const cartCount = document.createElement('div');
            cartCount.className = 'cart__product-count';
            cartCount.textContent = count;
            
            cartProduct.appendChild(cartImage);
            cartProduct.appendChild(cartCount);
            cartProducts.appendChild(cartProduct);
        }
    }
});