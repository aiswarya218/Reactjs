import React from 'react';

const SpecItem = ({ spec }) => (
  <li style={{ fontSize: '14px', lineHeight: '20px', color: '#333' }}>
    {spec}
  </li>
);

const styles = {
    card: { display: 'flex', border: '1px solid #e0e0e0', padding: '15px', margin: '10px 0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', backgroundColor: '#fff' },
    imageSection: { flex: '0 0 250px', marginRight: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' },
    title: { fontSize: '18px', fontWeight: '600', color: '#2a55e5', lineHeight: '22px', marginBottom: '5px' },
};


const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageSection}>
        <img src={product.imageUrl} alt={product.name} style={styles.imagePlaceholder} />
        <div style={styles.checkbox}>
          <input type="checkbox" id={`compare-${product.id}`} />
          <label htmlFor={`compare-${product.id}`}>Add to Compare</label>
        </div>
      </div>

      <div style={styles.infoSection}>
        <div style={styles.sponsoredTag}>Sponsored</div>
        <div style={styles.title}>
          {product.name} {product.charger} & AI {product.colorAndStorage}
        </div>
        
        <div style={styles.ratingContainer}>
          <span style={styles.ratingBadge}>{product.rating} ★</span>
          <span style={styles.reviews}>
            {product.numRatings.toLocaleString()} Ratings & {product.numReviews} Reviews
          </span>
        </div>

        <ul style={{ listStyle: 'disc', paddingLeft: '20px', margin: '0' }}>
          {product.specs.map((spec, index) => (
            <SpecItem key={index} spec={spec} />
          ))}
        </ul>
      </div>

      <div style={styles.priceSection}>
        <div style={styles.currentPrice}>{product.price}</div>
        <div style={styles.priceDetails}>
          <span style={styles.originalPrice}>{product.originalPrice}</span>
          <span style={styles.discount}>{product.discount} off</span>
        </div>
        
        {product.assured && (
          <div style={styles.assuredBadge}>Assured</div>
        )}

        {product.lowestPriceLive && (
          <div style={styles.lowestPrice}>Lowest Price Live</div>
        )}

        <div style={styles.exchange}>
          Upto **₹{product.exchangeOffer}** Off on Exchange
        </div>
      </div>
    </div>
  );
};

export default ProductCard;