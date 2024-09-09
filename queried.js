/*
----------------database: sample_restaurants:- restaurants
1.  $and
        queries:    { $and: [{ borough: "Brooklyn" }, { cuisine: "Bakery" }] }
2.  $or
        queries:    { $or: [{ borough: "Brooklyn" }, { cuisine: "Turkish" }] }
--------------- database: sample_mflix:- embedded_movies 
3.  $not
        queries:    {year: { $not: { $eq: "1914" } }}
4.  $nor
        queries:    { $nor: [{ runtime: "88" }, { year: "1926" }] }
---------------database: sample_airbnb:- listingsAndReviews
5.  $eq
        queries:    {property_type: {$eq:"Apartment"}}
6.  $ne
        queries:    {property_type: {$ne:"Aparthotel"}}
---------------database: sample_analytics:- accounts
7.  $gt
        queries:    { account_id: { $gt: 600000 } }
8.  $lt
        queries:    { limit: { $lt: 7000 } }
---------------database: sample_supplies:- sales
9.  $in
        queries:    { storeLocation: { $in: ["San Diego", "Denver"] } }
10. $nin
        queries:    { storeLocation: { $nin: ["Seattle", "Austin"] } }
*/

