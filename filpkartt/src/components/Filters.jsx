import React from "react";

function Filters() {
  return (
    <aside className="filters-sidebar">
      <div className="filter-heading">Filters</div>

      <div className="filter-section">
        <div className="filter-category">Categories</div>
        <div className="filter-item">Mobiles</div>
      </div>

      <div className="filter-section">
        <div className="filter-category">Price</div>
        <input type="range" min="Min" max="30000" />
        <div>Min - ₹30,000+</div>
      </div>

      <div className="filter-section">
        <div className="filter-category">BRAND</div>
        <label><input type="checkbox" /> Samsung</label><br />
        <label><input type="checkbox" /> Apple</label><br />
        <label><input type="checkbox" /> MOTOROLA</label><br />
        <label><input type="checkbox" /> Google</label>
      </div>

      <div className="filter-section">
        <div className="filter-category">CUSTOMER RATINGS</div>
        <label><input type="checkbox" /> 4★ & above</label><br />
        <label><input type="checkbox" /> 3★ & above</label><br />
        <label><input type="checkbox" /> 2★ & above</label>
      </div>

      <div className="filter-section">
        <div className="filter-category">NETWORK TYPES</div>
        <label><input type="checkbox" /> 4G</label><br />
        <label><input type="checkbox" /> 3G</label><br />
        <label><input type="checkbox" /> 2G</label><br />
        <label><input type="checkbox" /> 5G</label>
      </div>

      <div className="filter-section">
        <div className="filter-category">RAM</div>
        <label><input type="checkbox" /> 4 GB</label><br />
        <label><input type="checkbox" /> 3 GB</label><br />
        <label><input type="checkbox" /> 2 GB</label><br />
        <label><input type="checkbox" /> 1 GB and Below</label>
      </div>

      <div className="filter-section">
        <div className="filter-category">GST INVOICE AVAILABLE</div>
        <label><input type="checkbox" /> GST Invoice Available</label>
      </div>

      <div className="filter-section">
        <div className="filter-category">INTERNAL STORAGE</div>
        <label><input type="checkbox" /> 256 GB & Above</label><br />
        <label><input type="checkbox" /> 128 - 255.9 GB</label><br />
        <label><input type="checkbox" /> 64 - 127.9 GB</label><br />
        <label><input type="checkbox" /> 32 - 63.9 GB</label>
      </div>

      <div className="filter-section">
        <div className="filter-category">BATTERY CAPACITY</div>
        <label><input type="checkbox" /> 1000 - 1999 mAh</label><br />
        <label><input type="checkbox" /> 2000 - 2999 mAh</label><br />
        <label><input type="checkbox" /> 3000 - 3999 mAh</label>
      </div>

      <div className="filter-section">
        <div className="filter-category">SCREEN SIZE</div>
        <label><input type="checkbox" /> 5.7 - 5.9 inch</label><br />
        <label><input type="checkbox" /> 5.5 - 5.6 inch</label><br />
        <label><input type="checkbox" /> 4 - 4.4 inch</label>
      </div>

      <div className="filter-section">
        <div className="filter-category">PRIMARY CAMERA</div>
        <label><input type="checkbox" /> Below 5 MP</label><br />
        <label><input type="checkbox" /> 5 - 7.9 MP</label><br />
        <label><input type="checkbox" /> 12 - 12.9 MP</label>
      </div>

      <div className="filter-section">
        <div className="filter-category">SECONDARY CAMERA</div>
        <label><input type="checkbox" /> 12 - 15.9 MP</label><br />
        <label><input type="checkbox" /> 16 - 20.9 MP</label><br />
        <label><input type="checkbox" /> 21 MP & Above</label>
      </div>

      <div className="filter-section">
        <div className="filter-category">PROCESSOR BRAND</div>
        <label><input type="checkbox" /> AMD</label><br />
        <label><input type="checkbox" /> ARM</label><br />
        <label><input type="checkbox" /> Broadcom</label>
      </div>

      <div className="filter-section">
        <div className="filter-category">SPECIALITY</div>
        <label><input type="checkbox" /> Big Storage</label><br />
        <label><input type="checkbox" /> Higher Performance</label><br />
        <label><input type="checkbox" /> Long-Lasting Battery</label><br />
        <label><input type="checkbox" /> Selfie Camera</label>
      </div>

      <div className="filter-section">
        <div className="filter-category">RESOLUTION TYPE</div>
        <label><input type="checkbox" /> Full HD</label><br />
        <label><input type="checkbox" /> Full HD+</label><br />
        <label><input type="checkbox" /> FWVGA</label>
      </div>

      <div className="filter-section">
        <div className="filter-category">OPERATING SYSTEM</div>
        <label><input type="checkbox" /> Android</label><br />
        <label><input type="checkbox" /> Blackberry</label><br />
        <label><input type="checkbox" /> iOS</label>
      </div>

      <div className="filter-section">
        <div className="filter-category">SIM TYPE</div>
        <label><input type="checkbox" /> Dual Sim</label><br />
        <label><input type="checkbox" /> Four Sim</label><br />
        <label><input type="checkbox" /> Single Sim</label>
      </div>

      <div className="filter-section">
        <div className="filter-category">OFFERS</div>
        <label><input type="checkbox" /> Special Price</label><br />
        <label><input type="checkbox" /> Buy More, Save More</label><br />
        <label><input type="checkbox" /> No Cost EMI</label>
      </div>

      <div className="filter-section">
        <div className="filter-category">FEATURES</div>
        <label><input type="checkbox" /> WiFi</label><br />
        <label><input type="checkbox" /> NFC</label><br />
        <label><input type="checkbox" /> GPRS</label>
      </div>

      <div className="filter-section">
        <div className="filter-category">AVAILABILITY</div>
        <label><input type="checkbox" /> Exclude Out of Stock</label>
        </div>

      <div className="filter-section">
        <div className="filter-category">CLOCK SPEED</div>
        <label><input type="checkbox" /> 1.5 - 1.9 GHz</label><br />
        <label><input type="checkbox" /> 2 - 2.5 GHz</label><br />
        <label><input type="checkbox" /> Less than 900 MHz</label>
      </div>
    </aside>
  );
}

export default Filters;