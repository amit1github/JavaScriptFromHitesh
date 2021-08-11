 // D = (L - S)/L * 100

 // a + ((b * c) /d) * e

 var sellingPrice = 199;
 var listingPrice = 799;

 var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

 console.log("Discount Percentage is: " + discountPercent);

 displayDiscountPercentage = Math.round(discountPercent);

 console.log(displayDiscountPercentage + "% Off");



 var result = listingPrice > sellingPrice;

 console.log(typeof result);

 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/operators/operator_Precedence

// spend time on this link and table at below.