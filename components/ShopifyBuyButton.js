import React, { useEffect } from 'react';

const ShopifyBuyButton = ({ productId }) => {
  useEffect(() => {
    // --- START: CONFIGURATION ---
    const shopifyDomain = 'qyyhq7-6e.myshopify.com'; // Your store domain
    const storefrontAccessToken = '19574ece4b5d9dd54cc6e15e185a6ed6'; // Your storefront access token
    // --- END: CONFIGURATION ---

    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    
    if (window.ShopifyBuy && window.ShopifyBuy.UI) {
      // If the script is already loaded, just re-initialize
      const client = ShopifyBuy.buildClient({
        domain: shopifyDomain,
        storefrontAccessToken: storefrontAccessToken,
      });
      ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent('product', {
          id: productId,
          node: document.getElementById(`product-component-${productId}`),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": { "@media (min-width: 601px)": { "max-width": "100%", "margin-left": "0", "margin-bottom": "50px" } },
                "button": { "font-family": "Inter, sans-serif", ":hover": { "background-color": "#115e59" }, "background-color": "#0f766e", ":focus": { "background-color": "#115e59" }, "border-radius": "9999px" },
              },
              "text": { "button": "Add to cart" }
            },
            "cart": { "text": { "total": "Subtotal", "button": "Checkout" } },
          },
        });
      });
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);

    script.onload = () => {
      const client = ShopifyBuy.buildClient({
        domain: shopifyDomain,
        storefrontAccessToken: storefrontAccessToken,
      });
      ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent('product', {
          id: productId,
          node: document.getElementById(`product-component-${productId}`),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": { "@media (min-width: 601px)": { "max-width": "100%", "margin-left": "0", "margin-bottom": "50px" } },
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
