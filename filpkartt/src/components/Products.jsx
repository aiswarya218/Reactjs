// // import React from "react";

// // function ProductListing() {
// //   return (
// //     <section className="product-listing">
// //       <div className="listing-header">
// //         <div className="breadcrumb">Home / Mobiles</div>
// //         <div className="page-title">Mobiles</div>
// //         <div className="search-result">Showing 1 – 24 of 10,000 results</div>
// //         <div className="sort-options">
// //           Sort By: <span>Popularity</span> <span>Price -- Low to High</span> <span>Newest First</span>
// //         </div>
// //       </div>
      
// //       {/* Product cards will go here later */}
// //       <p>[Products Grid Placeholder]</p>
// //     </section>
// //   );
// // }

// // export default ProductListing;

// import React from "react";

// const products = [
//   {
//     id: 1,
//     title: "Samsung Galaxy S24 Ultra",
//     image: "https://via.placeholder.com/150",
//     price: "₹1,29,999",
//     rating: "4.5★"
//   },
//   {
//     id: 2,
//     title: "Apple iPhone 15 Pro",
//     image: "https://via.placeholder.com/150",
//     price: "₹1,39,999",
//     rating: "4.8★"
//   },
//   {
//     id: 3,
//     title: "Xiaomi Redmi Note 13 Pro",
//     image: "https://via.placeholder.com/150",
//     price: "₹24,999",
//     rating: "4.2★"
//   },
//   {
//     id: 4,
//     title: "Realme GT 6",
//     image: "https://via.placeholder.com/150",
//     price: "₹34,999",
//     rating: "4.3★"
//   }
// ];

// function Products() {
//   return (
//     <section className="product-listing">
//       <div className="listing-header">
//         <div className="breadcrumb">Home / Mobiles</div>
//         <div className="page-title">Mobiles</div>
//         <div className="search-result">Showing {products.length} of 11,220 results</div>
//         <div className="sort-options">
//           Sort By: <span>Relevance</span> <span>Popularity</span> <span>Price -- Low to High</span> <span>Price -- High to Low</span>  <span>Newest First</span>
//         </div>
//       </div>

//       <div className="product-grid">
//         {products.map((product) => (
//           <div className="product-card" key={product.id}>
//             <img src={product.image} alt={product.title} />
//             <h3>{product.title}</h3>
//             <p className="price">{product.price}</p>
//             <p className="rating">{product.rating}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Products;



// import React from 'react';
// import './ProductCard.css'; // Assuming you'd use a CSS file for real styling

// // Helper component for the key specifications list
// const SpecItem = ({ spec }) => (
//   <li style={{ fontSize: '14px', lineHeight: '20px', color: '#333' }}>
//     {spec}
//   </li>
// );

// const ProductCard = () => {
//   const product = {
//     name: 'OPPO K13x 5G',
//     colorAndStorage: '(Midnight Violet, 128 GB)',
//     charger: '6000mAh and 45W SUPERVOOC Charger & AI',
//     rating: 4.4,
//     numRatings: 3246,
//     numReviews: 370,
//     price: '₹11,499',
//     originalPrice: '₹15,999',
//     discount: '28%',
//     assured: true,
//     lowestPriceLive: true,
//     exchangeOffer: '₹8,600',
//     specs: [
//       '4 GB RAM | 128 GB ROM | Expandable Upto 2 TB',
//       '16.94 cm (6.67 inch) HD+ Display',
//       '50MP + 2MP | 8MP Front Camera',
//       '6000 mAh Battery',
//       'Dimensity 6300 Processor',
//       '1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories',
//     ],
//     imageUrl: 'path/to/your/product/image.png', // Replace with your actual image path
//   };

//   // // Inline styles (for demonstration - use CSS for production!)
//   // const styles = {
//   //   card: {
//   //     display: 'flex',
//   //     border: '1px solid #e0e0e0',
//   //     padding: '15px',
//   //     margin: '10px 0',
//   //     boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
//   //     backgroundColor: '#fff',
//   //   },
//   //   imageSection: {
//   //     flex: '0 0 250px', // Fixed width for the image container
//   //     marginRight: '20px',
//   //     display: 'flex',
//   //     flexDirection: 'column',
//   //     alignItems: 'center',
//   //   },
//   //   imagePlaceholder: {
//   //     width: '100%',
//   //     maxWidth: '200px',
//   //     height: 'auto',
//   //   },
//   //   checkbox: {
//   //     marginTop: '10px',
//   //     fontSize: '14px',
//   //   },
//   //   infoSection: {
//   //     flex: '1',
//   //     paddingRight: '20px',
//   //   },
//   //   priceSection: {
//   //     flex: '0 0 150px', // Fixed width for the price column
//   //     textAlign: 'right',
//   //   },
//   //   sponsoredTag: {
//   //     color: '#666',
//   //     fontSize: '12px',
//   //     marginBottom: '5px',
//   //     fontWeight: '500',
//   //   },
//   //   title: {
//   //     fontSize: '18px',
//   //     fontWeight: '600',
//   //     color: '#2a55e5', // Blue color for the title
//   //     lineHeight: '22px',
//   //     marginBottom: '5px',
//   //   },
//   //   ratingContainer: {
//   //     display: 'flex',
//   //     alignItems: 'center',
//   //     marginBottom: '10px',
//   //   },
//   //   ratingBadge: {
//   //     backgroundColor: '#388e3c', // Green for rating
//   //     color: 'white',
//   //     padding: '2px 6px',
//   //     borderRadius: '3px',
//   //     fontSize: '13px',
//   //     marginRight: '8px',
//   //     fontWeight: '600',
//   //   },
//   //   reviews: {
//   //     fontSize: '14px',
//   //     color: '#555',
//   //   },
//   //   currentPrice: {
//   //     fontSize: '28px',
//   //     fontWeight: '600',
//   //     color: '#212121',
//   //   },
//   //   priceDetails: {
//   //     display: 'flex',
//   //     alignItems: 'center',
//   //     justifyContent: 'flex-end',
//   //     marginBottom: '5px',
//   //   },
//   //   originalPrice: {
//   //     textDecoration: 'line-through',
//   //     color: '#878787',
//   //     fontSize: '14px',
//   //     marginRight: '8px',
//   //   },
//   //   discount: {
//   //     color: '#388e3c', // Green for discount
//   //     fontSize: '14px',
//   //     fontWeight: '600',
//   //   },
//   //   assuredBadge: {
//   //     backgroundColor: '#2a55e5', // Blue for Assured (Example color)
//   //     color: 'white',
//   //     padding: '2px 4px',
//   //     borderRadius: '2px',
//   //     fontSize: '12px',
//   //     fontWeight: 'bold',
//   //     marginTop: '5px',
//   //     display: 'inline-block',
//   //   },
//   //   lowestPrice: {
//   //     backgroundColor: '#f6ffed', // Light green background
//   //     border: '1px solid #a8df90',
//   //     color: '#388e3c',
//   //     padding: '2px 6px',
//   //     fontSize: '12px',
//   //     fontWeight: '600',
//   //     borderRadius: '3px',
//   //     marginTop: '8px',
//   //     display: 'inline-block',
//   //   },
//   //   exchange: {
//   //     fontSize: '14px',
//   //     marginTop: '10px',
//   //     color: '#555',
//   //   }
//   // };

//   return (
//     <div style={styles.card}>
//       <div style={styles.imageSection}>
//         <img
//           src={product.imageUrl}
//           alt={product.name}
//           style={styles.imagePlaceholder}
//         />
//         <div style={styles.checkbox}>
//           <input type="checkbox" id="compare" name="compare" />
//           <label htmlFor="compare">Add to Compare</label>
//         </div>
//       </div>

//       <div style={styles.infoSection}>
//         <div style={styles.sponsoredTag}>Sponsored</div>
//         <div style={styles.title}>
//           {product.name} {product.charger} & AI {product.colorAndStorage}
//         </div>
        
//         <div style={styles.ratingContainer}>
//           <span style={styles.ratingBadge}>{product.rating} ★</span>
//           <span style={styles.reviews}>
//             {product.numRatings.toLocaleString()} Ratings & {product.numReviews} Reviews
//           </span>
//         </div>

//         <ul style={{ listStyle: 'disc', paddingLeft: '20px', margin: '0' }}>
//           {product.specs.map((spec, index) => (
//             <SpecItem key={index} spec={spec} />
//           ))}
//         </ul>
//       </div>

//       <div style={styles.priceSection}>
//         <div style={styles.currentPrice}>{product.price}</div>
//         <div style={styles.priceDetails}>
//           <span style={styles.originalPrice}>{product.originalPrice}</span>
//           <span style={styles.discount}>{product.discount} off</span>
//         </div>
        
//         {product.assured && (
//           <div style={styles.assuredBadge}>Assured</div> 
//         )}

//         {product.lowestPriceLive && (
//           <div style={styles.lowestPrice}>Lowest Price Live</div>
//         )}

//         <div style={styles.exchange}>
//           Upto **₹{product.exchangeOffer}** Off on Exchange
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;



import React from 'react';
import ProductCard from './ProductCard';
import productsData from './product.json'; 

const ProductList = () => {
  const searchTerm = "mobile";
  const numResults = productsData.length; 

  return (
    <div className="product-listing-container" style={{maxWidth: '1200px', margin: '0 auto', padding: '20px'}}>
      <div style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
        <h2 style={{fontSize: '20px', fontWeight: '500'}}>
          Showing 1 – {numResults} of {productsData.length} results for "{searchTerm}"
        </h2>
      </div>

      <div style={{ display: 'flex', gap: '20px', margin: '15px 0' }}>
        <a href="#" style={{ textDecoration: 'none', color: '#555' }}>Sort By</a>
          <a href="#" style={{ textDecoration: 'none', fontWeight: 'bold', color: '#2a55e5', borderBottom: '2px solid #2a55e5' }}>Relevance</a>
        <a href="#" style={{ textDecoration: 'none', color: '#555' }}>Popularity</a>
        <a href="#" style={{ textDecoration: 'none', color: '#555' }}>Price -- Low to High</a>
        <a href="#" style={{ textDecoration: 'none', color: '#555' }}>Price -- High to Low</a>
        <a href="#" style={{ textDecoration: 'none', color: '#555' }}>Newest First</a>
      </div>

      {productsData.map(product => (
        <ProductCard  key={product.id}  product={product}  />
      ))}
    </div>
  );
};

export default ProductList;