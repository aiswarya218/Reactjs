// import React, { useState } from 'react';

// const productsData = [
//   // Product 1: OPPO K13x 5G (Listing Card Example)
//   {
//     "id": 1,
//     "name": "OPPO K13x 5G",
//     "colorAndStorage": "(Midnight Violet, 128 GB)",
//     "charger": "6000 mAh Battery",
//     "rating": 4.4,
//     "numRatings": 3246,
//     "numReviews": 370,
//     "price": "₹11,499",
//     "originalPrice": "₹15,999",
//     "discount": "28%",
//     "assured": true,
//     "lowestPriceLive": true,
//     "exchangeOffer": "8,600",
//     "imageUrl": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/q/k/-original-imahfw4vamrf5xhf.jpeg?q=70",
//     "specs": [
//       "4 GB RAM | 128 GB ROM | Expandable Upto 2 TB",
//       "16.94 cm (6.67 inch) HD+ Display",
//       "50MP + 2MP | 8MP Front Camera",
//       "Dimensity 6300 Processor",
//       "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories"
//     ],
//     "type": "LISTING" // Identifier for list view
//   },
//   // Product 3: Samsung Galaxy A35 5G (Another Listing Card Example)
//   {
//     "id": 3,
//     "name": "Samsung Galaxy A35 5G",
//     "colorAndStorage": "(Awesome Lilac, 128 GB)",
//     "charger": "5000 mAh Battery",
//     "rating": 4.3,
//     "numRatings": 27594,
//     "numReviews": 1747,
//     "price": "₹17,999",
//     "originalPrice": "₹33,999",
//     "discount": "47%",
//     "assured": true,
//     "lowestPriceLive": false,
//     "exchangeOffer": "13,650",
//     "imageUrl": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/j/d/-original-imahgy25zuwqzzye.jpeg?q=70",
//     "specs": [
//       "8 GB RAM | 128 GB ROM",
//       "16.76 cm (6.7 inch) Full HD+ Display",
//       "50MP + 8MP + 5MP | 13MP Front Camera",
//       "Samsung Exynos 1380 Processor",
//       "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for In-Box Accessories"
//     ],
//     "type": "LISTING_TOP_DISCOUNT" // Identifier for list view with special badge
//   },
//   // Product 11: MOTOROLA g35 5G (Detail Page Example)
//   {
//     "id": 11,
//     "categoryPath": 'Home > Mobiles & Accessories > Mobiles > MOTOROLA > MOTOROLA...',
//     "name": 'MOTOROLA g35 5G (Midnight Black, 128 GB) (4 GB RAM)',
//     "rating": 4.2,
//     "numRatings": 76865,
//     "numReviews": 5305,
//     "assured": true,
//     "price": '₹8,999',
//     "originalPrice": '₹12,499',
//     "discount": '28%',
//     "extraDiscount": '1000',
//     "promise": '29 Protect Promise Fee',
//     "deliveryDate": '28 Sep',
//     "imageUrl": 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/o/y/e/-original-imahy5yvj3fh4v6n.jpeg?q=70',
//     "imageUrls": [ // Multiple images for the detail page gallery
//         'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/o/y/e/-original-imahy5yvj3fh4v6n.jpeg?q=70',
//         'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/o/y/e/-original-imahy5yvj3fh4v6n.jpeg?q=70',
//         'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/o/y/e/-original-imahy5yvj3fh4v6n.jpeg?q=70',
//     ],
//     "highlights": [
//         'Fastest 5G | 12 5G Bands',
//         '120Hz FHD+ 6.72" Display',
//         '50MP Quad Pixel | 8MP Ultrawide Camera'
//     ],
//     "offers": [
//         'Bank Offer 10% Off on Supermoney UPI. Max discount of ₹50. Minimum order value of ₹250. T&C',
//         'Bank Offer 5% cashback on Flipkart SBI Credit Card upto ₹4,000 per calendar quarter T&C',
//         'Bank Offer 5% cashback on Axis Bank Flipkart Debit Card T&C',
//         'Special Price Get extra ₹1000 off T&C'
//     ],
//     "type": "DETAIL" // Identifier for detail view
//   },
//   // ... rest of the product data array (IDs 2, 4-10) would be here
// ];

// const listStyles = {
//     // Styles for the ProductCard component (used in ProductList)
//     card: { display: 'flex', padding: '20px', border: '1px solid #eee', borderRadius: '4px', backgroundColor: '#fff', maxWidth: '900px', margin: '20px auto 10px', boxShadow: '0 1px 1px rgba(0,0,0,0.05)' },
//     imageSection: { flex: '0 0 200px', marginRight: '20px', textAlign: 'center' },
//     imagePlaceholder: { width: '100%', maxWidth: '180px', height: 'auto' },
//     infoSection: { flex: '1', paddingRight: '20px' },
//     priceSection: { flex: '0 0 160px', textAlign: 'right' },
//     sponsoredTag: { color: '#666', fontSize: '12px', marginBottom: '5px' },
//     title: { fontSize: '18px', fontWeight: '500', color: '#2a55e5', lineHeight: '22px', marginBottom: '5px' },
//     ratingContainer: { display: 'flex', alignItems: 'center', marginBottom: '10px' },
//     ratingBadge: { backgroundColor: '#388e3c', color: 'white', padding: '2px 6px', borderRadius: '3px', fontSize: '13px', marginRight: '8px', fontWeight: '600' },
//     reviews: { fontSize: '14px', color: '#555' },
//     specsList: { listStyle: 'disc', paddingLeft: '20px', margin: '0' },
//     specItem: { fontSize: '14px', lineHeight: '22px', color: '#333', listStyleType: 'disc', marginLeft: '-10px' },
//     currentPrice: { fontSize: '28px', fontWeight: '600', color: '#212121' },
//     priceDetails: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: '5px' },
//     originalPrice: { textDecoration: 'line-through', color: '#878787', fontSize: '16px', marginRight: '10px', fontWeight: '400' },
//     discount: { color: '#388e3c', fontSize: '16px', fontWeight: '600' },
//     assuredBadge: { fontSize: '12px', fontWeight: 'bold' },
//     lowestPrice: { backgroundColor: '#e2f0d9', color: '#388e3c', padding: '2px 6px', fontSize: '12px', fontWeight: '600', borderRadius: '3px', marginTop: '8px', display: 'inline-block' },
//     topDiscount: { backgroundColor: '#f1f8ff', color: '#2874f0', padding: '3px 6px', fontSize: '12px', fontWeight: '600', borderRadius: '2px', marginTop: '10px', display: 'inline-block' },
//     exchange: { fontSize: '14px', marginTop: '10px', color: '#555' }
// };


// const ProductCard = ({ product }) => {
//     const showPriceDetails = product.originalPrice && product.discount;

//     return (
//         <div style={listStyles.card}>
//             {/* 1. Image and Compare Section */}
//             <div style={listStyles.imageSection}>
//                 <img src={product.imageUrl} alt={product.name} style={listStyles.imagePlaceholder} />
//                 {product.type === 'LISTING' && <div style={{...listStyles.sponsoredTag, color: 'transparent'}}>Sponsored</div>}
                
//                 {product.type === 'LISTING' && (
//                   <div style={{...listStyles.checkbox, marginTop: '20px'}}>
//                     <input type="checkbox" id={`compare-${product.id}`} />
//                     <label htmlFor={`compare-${product.id}`}>Add to Compare</label>
//                   </div>
//                 )}
//             </div>

//             {/* 2. Product Info Section */}
//             <div style={listStyles.infoSection}>
//                 {product.type === 'LISTING' && <div style={listStyles.sponsoredTag}>Sponsored</div>}
//                 <div style={listStyles.title}>
//                     {product.name} {product.colorAndStorage} {product.charger}
//                 </div>
                
//                 {product.rating && (
//                     <div style={listStyles.ratingContainer}>
//                         <span style={listStyles.ratingBadge}>{product.rating} ★</span>
//                         <span style={listStyles.reviews}>
//                             {product.numRatings.toLocaleString()} Ratings & {product.numReviews.toLocaleString()} Reviews
//                         </span>
//                     </div>
//                 )}

//                 {/* Specifications List */}
//                 <ul style={listStyles.specsList}>
//                     {product.specs.map((spec, index) => (
//                         <li key={index} style={listStyles.specItem}>{spec}</li>
//                     ))}
//                 </ul>
//             </div>

//             {/* 3. Price and Offer Section */}
//             <div style={listStyles.priceSection}>
//                 <div style={listStyles.currentPrice}>{product.price}</div>
                
//                 {showPriceDetails && (
//                     <div style={listStyles.priceDetails}>
//                         <span style={listStyles.originalPrice}>{product.originalPrice}</span>
//                         <span style={listStyles.discount}>{product.discount} off</span>
//                     </div>
//                 )}
                
//                 {product.assured && (
//                     <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '5px' }}>
//                         {/* Assured text placeholder */}
//                         <span style={listStyles.assuredBadge}>Assured</span>
//                     </div>
//                 )}

//                 {product.lowestPriceLive && (
//                     <div style={listStyles.lowestPrice}>Lowest Price Live</div>
//                 )}
                
//                 {product.type === 'LISTING_TOP_DISCOUNT' && (
//                     <div style={listStyles.topDiscount}>Top Discount of the Sale</div>
//                 )}

//                 {product.exchangeOffer && (
//                     <div style={listStyles.exchange}>
//                         Upto **₹{product.exchangeOffer}** Off on Exchange
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// const ProductList = ({ data }) => {
//     const mobileResults = data.filter(p => p.type === 'LISTING' || p.type === 'LISTING_TOP_DISCOUNT');
//     const numResults = mobileResults.length;

//     return (
//         <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
//             <div style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
//                 <h2 style={{ fontSize: '20px', fontWeight: '500' }}>
//                     Showing 1 – {numResults} of 11,220 results for "mobile"
//                 </h2>
//             </div>
      
//             <div style={{ display: 'flex', gap: '20px', margin: '15px 0' }}>
//                 <a href="#" style={{ textDecoration: 'none', fontWeight: 'bold', color: '#2a55e5', borderBottom: '2px solid #2a55e5' }}>Relevance</a>
//                 <a href="#" style={{ textDecoration: 'none', color: '#555' }}>Popularity</a>
//             </div>

//             {mobileResults.map(product => (
//                 <ProductCard key={product.id} product={product} />
//             ))}
//         </div>
//     );
// };

// const ProductGallery = ({ product }) => {
//     const [mainImage, setMainImage] = useState(product.imageUrl);

//     const galleryStyles = { /* ... (Include the specific gallery styles from previous answer) */ };
//     const styles = {
//         container: { display: 'flex', flex: '0 0 350px', marginRight: '40px' },
//         thumbnails: { width: '60px', marginRight: '10px' },
//         thumbnailItem: { border: '1px solid #eee', marginBottom: '10px', cursor: 'pointer', padding: '5px' },
//         mainImageContainer: { flex: 1, position: 'relative' },
//         mainImageStyle: { width: '100%', border: '1px solid #eee' },
//         highlightBox: { position: 'absolute', bottom: '10%', right: '10%', color: 'white', backgroundColor: 'rgba(0,0,0,0.6)', padding: '10px', textAlign: 'center', borderRadius: '5px', maxWidth: '80%', pointerEvents: 'none' },
//         highlightText: { fontSize: '14px', margin: '5px 0' }
//     };
    
//     // Fallback to single image if imageUrls is not defined (for simplicity)
//     const imageList = product.imageUrls || [product.imageUrl];

//     return (
//         <div style={styles.container}>
//             <div style={styles.thumbnails}>
//                 {imageList.map((img, index) => (
//                     <div 
//                         key={index}
//                         style={{...styles.thumbnailItem, borderColor: img === mainImage ? '#2874F0' : '#eee'}}
//                         onMouseEnter={() => setMainImage(img)}
//                     >
//                         <img src={img} alt={`Thumbnail ${index + 1}`} style={{ width: '100%' }} />
//                     </div>
//                 ))}
//             </div>
//             <div style={styles.mainImageContainer}>
//                 <img src={mainImage} alt="Main Product View" style={styles.mainImageStyle} />
//                 {product.highlights && (
//                     <div style={styles.highlightBox}>
//                         {product.highlights.map((line, index) => (
//                             <p key={index} style={styles.highlightText}>{line}</p>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// const ProductDetails = ({ product }) => {
//     const detailStyles = { 
//         container: { flex: '1' }, 
//         path: { fontSize: '12px', color: '#555', marginBottom: '10px' },
//         ratingContainer: { display: 'flex', alignItems: 'center', marginBottom: '10px' },
//         ratingBadge: { backgroundColor: '#388e3c', color: 'white', padding: '2px 6px', borderRadius: '3px', fontSize: '14px', marginRight: '8px', fontWeight: 'bold' },
//         reviews: { fontSize: '14px', color: '#555', marginRight: '10px' },
//         assuredBadge: { fontSize: '14px', color: '#2874F0' },
//         priceContainer: { display: 'flex', alignItems: 'baseline', marginBottom: '10px' },
//         currentPrice: { fontSize: '30px', fontWeight: '600', marginRight: '10px' },
//         originalPrice: { textDecoration: 'line-through', color: '#878787', fontSize: '18px', marginRight: '10px' },
//         discount: { color: '#388e3c', fontSize: '18px', fontWeight: '600' },
//         extraDiscount: { color: '#388e3c', fontWeight: 'bold', fontSize: '14px', marginBottom: '15px' },
//         offerItem: { display: 'flex', alignItems: 'flex-start', marginBottom: '8px', fontSize: '14px' },
//         bankIcon: { color: '#388e3c', marginRight: '8px', fontSize: '16px' }
//     };

//     return (
//         <div style={detailStyles.container}>
//             <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '14px' }}>
//                 <span style={{ marginRight: '15px' }}>Compare</span>
//                 <span>Share</span>
//             </div>
//             <div style={detailStyles.path}>{product.categoryPath}</div>
            
//             <h1 style={{ fontSize: '20px', fontWeight: '500', marginBottom: '5px' }}>{product.name}</h1>

//             <div style={detailStyles.ratingContainer}>
//                 <span style={detailStyles.ratingBadge}>{product.rating} ★</span>
//                 <span style={detailStyles.reviews}>
//                     {product.numRatings.toLocaleString()} Ratings & {product.numReviews.toLocaleString()} Reviews
//                 </span>
//                 {product.assured && <span style={detailStyles.assuredBadge}>Assured</span>}
//             </div>
            
//             <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '15px 0' }} />

//             <div style={{ marginBottom: '10px' }}>
//                 <div style={detailStyles.priceContainer}>
//                     <span style={detailStyles.currentPrice}>{product.price}</span>
//                     <span style={detailStyles.originalPrice}>{product.originalPrice}</span>
//                     <span style={detailStyles.discount}>{product.discount} off</span>
//                 </div>
//                 {product.extraDiscount && (
//                     <div style={detailStyles.extraDiscount}>Extra ₹{product.extraDiscount} Off</div>
//                 )}
//                 {product.promise && (
//                     <div style={{ fontSize: '14px', color: '#878787', marginBottom: '10px' }}>
//                         + ₹{product.promise} <a href="#" style={{ color: '#2874F0' }}>Learn more</a>
//                     </div>
//                 )}
//                 <div style={{ fontSize: '14px', marginBottom: '15px' }}>
//                     Secure delivery by {product.deliveryDate}
//                 </div>
//             </div>

//             <div>
//                 <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>Available offers</h3>
//                 {product.offers && product.offers.map((offer, index) => (
//                     <div key={index} style={detailStyles.offerItem}>
//                         <span style={detailStyles.bankIcon}>₹</span>
//                         <span style={{ color: '#333' }}>{offer}</span>
//                     </div>
//                 ))}
//                 <a href="#" style={{ color: '#2874F0', fontSize: '14px', display: 'block', marginTop: '10px' }}>View 9 more offers</a>
//             </div>
            
//             <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', borderTop: '1px dashed #eee', paddingTop: '15px' }}>
//                 <input type="radio" id="buy-no-exchange" name="buy-option" defaultChecked />
//                 <label htmlFor="buy-no-exchange" style={{ fontSize: '16px', marginLeft: '10px' }}>
//                     Buy without Exchange
//                 </label>
//                 <span style={{ fontSize: '16px', fontWeight: '600', marginLeft: 'auto' }}>
//                     ₹{product.price.replace('₹', '')}
//                 </span>
//             </div>
//         </div>
//     );
// };

// const ProductPage = ({ product }) => {
//     const containerStyle = {
//         display: 'flex',
//         maxWidth: '1200px',
//         margin: '20px auto',
//         padding: '20px',
//         backgroundColor: '#fff',
//     };

//     return (
//         <div className="product-page-wrapper">
//             <div style={containerStyle}>
//                 <ProductGallery product={product} />
//                 <ProductDetails product={product} />
//             </div>
//         </div>
//     );
// };

// const AppContainer = () => {
//     const [view, setView] = useState('LIST'); 
//     const detailProduct = productsData.find(p => p.type === 'DETAIL');

//     return (
//         <div style={{ fontFamily: 'Roboto, Arial, sans-serif', backgroundColor: '#f1f3f6', minHeight: '100vh' }}>
//             <div style={{padding: '20px', textAlign: 'center'}}>
//                 <button 
//                     onClick={() => setView('LIST')} 
//                     style={{marginRight: '10px', padding: '10px 20px', cursor: 'pointer', backgroundColor: view === 'LIST' ? '#2a55e5' : '#ccc', color: 'white', border: 'none'}}
//                 >
//                     Show Product List
//                 </button>
//                 <button 
//                     onClick={() => setView('DETAIL')} 
//                     style={{padding: '10px 20px', cursor: 'pointer', backgroundColor: view === 'DETAIL' ? '#2a55e5' : '#ccc', color: 'white', border: 'none'}}
//                 >
//                     Show Product Detail Page
//                 </button>
//             </div>

//             {view === 'LIST' && <ProductList data={productsData} />}
//             {view === 'DETAIL' && detailProduct && <ProductPage product={detailProduct} />}
//             {view === 'DETAIL' && !detailProduct && <p style={{textAlign: 'center'}}>Detail product data not found.</p>}
//         </div>
//     );
// };

// export default AppContainer;



import React, { useState } from 'react';

const productData = {
    "id": 11,
    "categoryPath": 'Home > Mobiles & Accessories > Mobiles > MOTOROLA > MOTOROLA...',
    "name": 'MOTOROLA g35 5G (Midnight Black, 128 GB) (4 GB RAM)',
    "rating": 4.2,
    "numRatings": 76865,
    "numReviews": 5305,
    "assured": true,
    "price": '₹8,999',
    "originalPrice": '₹12,499',
    "discount": '28%',
    "extraDiscount": '1000',
    "promise": '29 Protect Promise Fee',
    "deliveryDate": '28 Sep',
    "imageUrl": 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/o/y/e/-original-imahy5yvj3fh4v6n.jpeg?q=70', // Main placeholder
    "imageUrls": [ // Thumbnails
        'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/o/y/e/-original-imahy5yvj3fh4v6n.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/w/j/-original-imahy5yvj3fh4v6n.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/r/a/m/-original-imahy5yvj3fh4v6n.jpeg?q=70',
    ],
    "highlights": [ // Features displayed over the main image
        'Fastest 5G | 12 5G Bands',
        '120Hz FHD+ 6.72" Display',
        '50MP Quad Pixel | 8MP Ultrawide Camera'
    ],
    "offers": [
        'Bank Offer 10% Off on Supermoney UPI. Max discount of ₹50. Minimum order value of ₹250. T&C',
        'Bank Offer 5% cashback on Flipkart SBI Credit Card upto ₹4,000 per calendar quarter T&C',
        'Bank Offer 5% cashback on Axis Bank Flipkart Debit Card T&C',
        'Special Price Get extra ₹1000 off T&C'
    ],
};


const ProductGallery = ({ product }) => {
    // Set the first image as the default main image
    const [mainImage, setMainImage] = useState(product.imageUrls[0] || product.imageUrl);

    const styles = {
        container: { display: 'flex', flex: '0 0 350px', marginRight: '40px' },
        thumbnails: { width: '60px', marginRight: '10px' },
        thumbnailItem: { border: '1px solid #eee', marginBottom: '10px', cursor: 'pointer', padding: '5px' },
        mainImageContainer: { flex: 1, position: 'relative' },
        mainImageStyle: { width: '100%', border: '1px solid #eee' },
        highlightBox: { 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            color: 'white', 
            backgroundColor: 'rgba(0,0,0,0.6)', 
            padding: '20px 10px', 
            textAlign: 'center', 
            borderRadius: '5px', 
            maxWidth: '80%', 
            pointerEvents: 'none' 
        },
        highlightText: { fontSize: '14px', margin: '5px 0' }
    };
    
    const imageList = product.imageUrls || [product.imageUrl];

    return (
        <div style={styles.container}>
            {/* Thumbnails */}
            <div style={styles.thumbnails}>
                {imageList.map((img, index) => (
                    <div 
                        key={index}
                        style={{...styles.thumbnailItem, borderColor: img === mainImage ? '#2874F0' : '#eee'}}
                        onMouseEnter={() => setMainImage(img)}
                    >
                        <img src={img} alt={`Thumbnail ${index + 1}`} style={{ width: '100%' }} />
                    </div>
                ))}
            </div>
            {/* Main Image */}
            <div style={styles.mainImageContainer}>
                <img src={mainImage} alt={`Main view of ${product.name}`} style={styles.mainImageStyle} />
                {/* Image Overlay for highlights */}
                {product.highlights && (
                    <div style={styles.highlightBox}>
                        {product.highlights.map((line, index) => (
                            <p key={index} style={styles.highlightText}>{line}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};


const ProductDetails = ({ product }) => {
    // Styles object for the detail section
    const detailStyles = { 
        container: { flex: '1' }, 
        path: { fontSize: '12px', color: '#555', marginBottom: '10px' },
        ratingContainer: { display: 'flex', alignItems: 'center', marginBottom: '10px' },
        ratingBadge: { backgroundColor: '#388e3c', color: 'white', padding: '2px 6px', borderRadius: '3px', fontSize: '14px', marginRight: '8px', fontWeight: 'bold' },
        reviews: { fontSize: '14px', color: '#555', marginRight: '10px' },
        assuredBadge: { fontSize: '14px', color: '#2874F0' },
        priceContainer: { display: 'flex', alignItems: 'baseline', marginBottom: '10px' },
        currentPrice: { fontSize: '30px', fontWeight: '600', marginRight: '10px' },
        originalPrice: { textDecoration: 'line-through', color: '#878787', fontSize: '18px', marginRight: '10px' },
        discount: { color: '#388e3c', fontSize: '18px', fontWeight: '600' },
        extraDiscount: { color: '#388e3c', fontWeight: 'bold', fontSize: '14px', marginBottom: '15px' },
        offerItem: { display: 'flex', alignItems: 'flex-start', marginBottom: '8px', fontSize: '14px' },
        bankIcon: { color: '#388e3c', marginRight: '8px', fontSize: '16px' }
    };

    return (
        <div style={detailStyles.container}>
            {/* Top right actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '14px' }}>
                <span style={{ marginRight: '15px' }}>Compare</span>
                <span>Share</span>
            </div>
            
            <div style={detailStyles.path}>{product.categoryPath}</div>
            
            <h1 style={{ fontSize: '20px', fontWeight: '500', marginBottom: '5px' }}>{product.name}</h1>

            {/* Ratings and Assured */}
            <div style={detailStyles.ratingContainer}>
                <span style={detailStyles.ratingBadge}>{product.rating} ★</span>
                <span style={detailStyles.reviews}>
                    {product.numRatings.toLocaleString()} Ratings & {product.numReviews.toLocaleString()} Reviews
                </span>
                {product.assured && <span style={detailStyles.assuredBadge}>Assured</span>}
            </div>
            
            <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '15px 0' }} />

            {/* Price Details */}
            <div style={{ marginBottom: '10px' }}>
                <span style={detailStyles.extraDiscount}>Extra ₹{product.extraDiscount} Off</span>
                <div style={detailStyles.priceContainer}>
                    <span style={detailStyles.currentPrice}>{product.price}</span>
                    <span style={detailStyles.originalPrice}>{product.originalPrice}</span>
                    <span style={detailStyles.discount}>{product.discount} off</span>
                </div>
                {product.promise && (
                    <div style={{ fontSize: '14px', color: '#878787', marginBottom: '10px' }}>
                        + ₹{product.promise} <a href="#" style={{ color: '#2874F0' }}>Learn more</a>
                    </div>
                )}
                <div style={{ fontSize: '14px', marginBottom: '15px' }}>
                    Secure delivery by {product.deliveryDate}
                </div>
            </div>

            {/* Offers Section */}
            <div>
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>Available offers</h3>
                {product.offers && product.offers.map((offer, index) => (
                    <div key={index} style={detailStyles.offerItem}>
                        <span style={detailStyles.bankIcon}>₹</span> {/* Simple Bank icon placeholder */}
                        <span style={{ color: '#333' }}>{offer}</span>
                    </div>
                ))}
                <a href="#" style={{ color: '#2874F0', fontSize: '14px', display: 'block', marginTop: '10px' }}>View 9 more offers</a>
            </div>
            
            {/* Buy Option */}
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', borderTop: '1px dashed #eee', paddingTop: '15px' }}>
                <input type="radio" id="buy-no-exchange" name="buy-option" defaultChecked />
                <label htmlFor="buy-no-exchange" style={{ fontSize: '16px', marginLeft: '10px' }}>
                    Buy without Exchange
                </label>
                <span style={{ fontSize: '16px', fontWeight: '600', marginLeft: 'auto' }}>
                    ₹{product.price.replace('₹', '')}
                </span>
            </div>
        </div>
    );
};


const ProductPage = () => {
    // The main container style
    const containerStyle = {
        display: 'flex',
        maxWidth: '1200px',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#fff',
    };

    return (
        <div style={{ fontFamily: 'Roboto, Arial, sans-serif', backgroundColor: '#f1f3f6', minHeight: '100vh' }}>
            <div style={containerStyle}>
                {/* Left Column: Gallery */}
                <ProductGallery product={productData} />
                
                {/* Right Column: Details and Offers */}
                <ProductDetails product={productData} />
            </div>
        </div>
    );
};

export default ProductPage;