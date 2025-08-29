import React, { useEffect } from 'react';

const ShopifyBuyButton = ({ productId }) => {
  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    
    // Check if the script is already on the page
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuy.UI.init(client);
      }
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);

    script.onload = () => {
      const client = ShopifyBuy.buildClient({
        domain: 'your-store-name.myshopify.com', // <-- Replace with your Shopify domain
        storefrontAccessToken: 'your-storefront-access-token', // <-- Replace with your token
      });
      ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent('product', {
          id: productId,
          node: document.getElementById(`product-component-${productId}`),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": { "@media (min-width: 601px)": { "max-width": "calc(25% - 20px)", "margin-left": "20px", "margin-bottom": "50px" } },
                "button": { "font-family": "Inter, sans-serif", ":hover": { "background-color": "#115e59" }, "background-color": "#0f766e", ":focus": { "background-color": "#115e59" }, "border-radius": "9999px" },
              },
              "text": { "button": "Add to cart" }
            },
            "cart": { "text": { "total": "Subtotal", "button": "Checkout" } },
          },
        });
      });
    };

  }, [productId]);

  return <div id={`product-component-${productId}`} />;
};

export default ShopifyBuyButton;
