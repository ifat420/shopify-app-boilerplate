import { Router  } from 'express';
const proxyRouter = Router();


proxyRouter.get('/json', async (req, res) => {
  console.log("Shop URL")
  console.log(req.user_shop)

  const shop = req.user_shop;
  // const sessionID = await shopify.getSessionID(shop);

  // console.log("Session ID", sessionID)

  res.send({ message: 'Proxy is working' })
})




export default proxyRouter;