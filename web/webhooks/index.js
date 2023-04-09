import { DeliveryMethod } from "@shopify/shopify-api";

export default { 
 
  PRODUCTS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/webhooks/product_create",
    callback: async (topic, shop, body, webhookId) => {
      console.log("-----topics----",  topic)
      console.log("-----shop----",  shop)
      console.log("-----body----",  body)
      console.log("-----webhookId----",  webhookId) 
    }
  },

  PRODUCTS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/webhooks/product_delete",
    callback: async (topic, shop, body, webhookId) => {
      console.log("-----topics----",  topic)
      console.log("-----shop----",  shop)
      console.log("-----body----",  body)
      console.log("-----webhookId----",  webhookId) 
    }
  },

  PRODUCTS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/webhooks/product_update",
    callback: async (topic, shop, body, webhookId) => {
      console.log("-----topics----",  topic)
      console.log("-----shop----",  shop)
      console.log("-----body----",  body)
      console.log("-----webhookId----",  webhookId) 
    }
  },

  COLLECTIONS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/webhooks/collections_create",
    callback: async () => (topic, shop, body, webhookId) => {
      console.log("-----topics----",  topic)
      console.log("-----shop----",  shop)
      console.log("-----body----",  body)
      console.log("-----webhookId----",  webhookId) 
    }
  },

  COLLECTIONS_DELETE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/webhooks/collections_delete",
    callback: async () => (topic, shop, body, webhookId) => {
      console.log("-----topics----",  topic)
      console.log("-----shop----",  shop)
      console.log("-----body----",  body)
      console.log("-----webhookId----",  webhookId) 
    }
  },

  COLLECTIONS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/webhooks/collections_update",
    callback: async () => (topic, shop, body, webhookId) => {
      console.log("-----topics----",  topic)
      console.log("-----shop----",  shop)
      console.log("-----body----",  body)
      console.log("-----webhookId----",  webhookId) 
    }
  }
}


