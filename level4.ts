import useSWR from "swr";

declare namespace Android {
  function purchase (sku: string) : void;
  function getProducts(sku: string): void;
  function restorePurchase(sku: string): void;
}

export enum AndroidIAPEndpoints {
  PURCHASE = 'PURCHASE',
  RESTORE = 'RESTORE',
  GET_PRODUCT = 'GET_PRODUCT'
}

useSWR([AndroidIAPEndpoints.GET_PRODUCT, 'sku'], getProduct)

var getProduct = (sku: string) => {
  return new Promise((resolve, reject) => {
    const listener = (event) => {
      window.removeEventListener('PRODUCT_RESPONSE', listener);
      resolve(event.detail);
    }

    window.addEventListener('PRODUCT_RESPONSE', listener);
    Android?.getProducts(sku);
  });
}
