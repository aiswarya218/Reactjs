import React, { useState } from 'react';
import './App.css';

const allProductsData = [
    {
        "id": 11,
        "name": 'MOTOROLA g35 5G (Midnight Black, 128 GB) (4 GB RAM)',
        "categoryPath": 'Home > Mobiles > MOTOROLA',
        "rating": 4.2,
        "numRatings": 76865,
        "price": '₹8,999',
        "originalPrice": '₹12,499',
        "discount": '28%',
        "extraDiscount": '1000',
        "deliveryDate": '28 Sep',
        "imageUrls": [
            'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/o/y/e/-original-imahy5yvj3fh4v6n.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/w/j/-original-imahy5yvj3fh4v6n.jpeg?q=70',
        ],
        "highlights": ['Fastest 5G', '120Hz Display'],
        "offers": ['Bank Offer 10% Off', 'Special Price'],
    },
    {
        "id": 22,
        "name": 'Product B: Ultra Smart Watch Pro (Silver)',
        "categoryPath": 'Home > Electronics > Wearables',
        "rating": 4.8,
        "numRatings": 4500,
        "price": '₹19,999',
        "originalPrice": '₹24,999',
        "discount": '20%',
        "extraDiscount": '500',
        "deliveryDate": '29 Sep',
        "imageUrls": [
            'https://example.com/watch_main.jpg', 
            'https://example.com/watch_thumb1.jpg',
        ],
        "highlights": ['ECG Monitoring', 'Titanium Case'],
        "offers": ['No Cost EMI', 'Card Cashback'],
    },
];

const ProductGallery = ({ product }) => {
    const [mainImage, setMainImage] = useState(product.imageUrls[0] || product.imageUrl);
    const imageList = product.imageUrls || [product.imageUrl];

    return (
        <div className="product-gallery">
            <div className="thumbnails">
                {imageList.map((img, index) => (
                    <div 
                        key={index}
                        className={`thumbnail-item ${img === mainImage ? 'active' : ''}`}
                        onMouseEnter={() => setMainImage(img)}
                    >
                        <img src={img} alt={`Thumbnail ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className="main-image-container">
                <img src={mainImage} alt={`Main view of ${product.name}`} className="main-image" />
                {product.highlights && (
                    <div className="image-highlight-box">
                        {product.highlights.map((line, index) => (
                            <p key={index} className="highlight-text">{line}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const ProductDetails = ({ product }) => {
    return (
        <div className="product-details-content">
            <div className="compare-share-actions">
                <span className="action-item">Compare</span>
                <span className="action-item">Share</span>
            </div>
            
            <div className="path">{product.categoryPath}</div>
            
            <h1 className="product-title">{product.name}</h1>

            <div className="rating-container">
                <span className="rating-badge">{product.rating} ★</span>
                <span className="reviews">{product.numRatings.toLocaleString()} Ratings & Reviews</span>
                {product.assured && <span className="assured-badge">Assured</span>}
            </div>
            
            <hr className="divider" />

            <div className="price-info">
                <span className="extra-discount">Extra ₹{product.extraDiscount} Off</span>
                <div className="price-container">
                    <span className="current-price">{product.price}</span>
                    <span className="original-price">{product.originalPrice}</span>
                    <span className="discount">{product.discount} off</span>
                </div>
                {product.promise && (
                    <div className="promise-fee">
                        + ₹{product.promise} <a href="#" className="link">Learn more</a>
                    </div>
                )}
                <div className="delivery-date">
                    Secure delivery by **{product.deliveryDate}**
                </div>
            </div>

            <div className="offers-section">
                <h3 className="offers-title">Available offers</h3>
                {product.offers && product.offers.map((offer, index) => (
                    <div key={index} className="offer-item">
                        <span className="bank-icon">₹</span>
                        <span className="offer-text">{offer}</span>
                    </div>
                ))}
                <a href="#" className="link view-more-offers">View more offers</a>
            </div>
            
            <div className="buy-option-exchange">
                <input type="radio" id="buy-no-exchange" name="buy-option" defaultChecked />
                <label htmlFor="buy-no-exchange" className="buy-label">
                    Buy without Exchange
                </label>
                <span className="buy-price">
                    ₹{product.price.replace('₹', '')}
                </span>
            </div>
        </div>
    );
};

const ProductPageSelector = () => {
    const [selectedProductId, setSelectedProductId] = useState(allProductsData[0].id);

    const currentProduct = allProductsData.find(p => p.id === selectedProductId);

    if (!currentProduct) {
        return <div className="app-container">Loading product details...</div>;
    }

    return (
        <div className="app-container">
            <div className="product-selector">
                <h3 className="selector-title">Select Product to View:</h3>
                {allProductsData.map(product => (
                    <button key={product.id} onClick={() => setSelectedProductId(product.id)} className={`selector-button ${product.id === selectedProductId ? 'active' : ''}`} >
                        {product.name.split(' ')[0]}
                    </button>
                ))}
            </div>

            <div className="product-page-container">
                <ProductGallery product={currentProduct} />
                <ProductDetails product={currentProduct} />
            </div>
        </div>
    );
};

export default ProductPageSelector;