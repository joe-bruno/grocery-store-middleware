# grocery-store-middleware

The challenge is building a middleware application for a Grocery Store. 

The application is built on Express and it will require additional dependencies to complete.  

Design Considerations:
* Expect High usage/Heavy Traffic - caching of non-volatile data would be optimal
* CPU utilization - search complexity and performance is important

Data API:
Base URl = https://grocery-store-310420.uc.r.appspot.com

Endpoints:
GET /deals
GET /products
GET /customer/:customerId

Requirements:
1) Build 3 new endpoints in the existing project. The endpoints have been defined, but are currently returning an empty response. 
    * The first endpoint should be to GET the list of currently available products and their price according the current deals.
      This will require first making an API call to get the products data, then making an additional call to get the deals data. 
      Inside of the products data is a "portions" array that consists of objects that you can consider purchasable items. The portion
      objects have an itemId which corresponds to the deals data objects.
    * The second endpoint will need to accept an array of purchasable items and calculate the total price of the order. The total price is the 
      sum of all purchasable items specified in the request plus a 6.25% tax rate of the items sum. 
    * The third endpoint should accept a customer id and return me the customer details and their past orders, sorted by most recent. 
2) Build tests for each endpoint using any framework of your choosing. Include both pass and fail scenarios. 

