// Product data with full specifications
const products = [
  {
    id: 'FT-001',
    name: 'Premium Facial Tissue Box',
    category: 'facial',
    description: 'Ultra-soft 2-ply facial tissue perfect for homes and offices. Dermatologically tested and hypoallergenic.',
    ply: '2-Ply',
    sheets: '100 Sheets',
    sizes: ['Standard Box', 'Compact Box'],
    packing: '30 boxes per carton',
    pricing: {
      tier1: { qty: '1-99 boxes', price: 45 },
      tier2: { qty: '100-499 boxes', price: 40, discount: '11% off' },
      tier3: { qty: '500+ boxes', price: 35, discount: '22% off' }
    },
    moq: '50 boxes',
    inStock: true,
    sustainable: true
  },
  {
    id: 'FT-002',
    name: 'Bamboo Facial Tissue Premium',
    category: 'facial',
    description: 'Eco-friendly bamboo fiber tissue. Sustainable, soft, and strong. Perfect for environmentally conscious businesses.',
    ply: '3-Ply',
    sheets: '120 Sheets',
    sizes: ['Premium Box'],
    packing: '24 boxes per carton',
    pricing: {
      tier1: { qty: '1-99 boxes', price: 65 },
      tier2: { qty: '100-499 boxes', price: 58, discount: '11% off' },
      tier3: { qty: '500+ boxes', price: 52, discount: '20% off' }
    },
    moq: '50 boxes',
    inStock: true,
    sustainable: true
  },
  {
    id: 'PN-001',
    name: 'Dinner Paper Napkin',
    category: 'napkin',
    description: 'Elegant dinner napkins for restaurants and hotels. Available in multiple colors and custom printing options.',
    ply: '2-Ply',
    sheets: '50 Sheets per pack',
    sizes: ['40x40cm', '33x33cm'],
    packing: '20 packs per carton',
    pricing: {
      tier1: { qty: '1-199 packs', price: 120 },
      tier2: { qty: '200-999 packs', price: 105, discount: '13% off' },
      tier3: { qty: '1000+ packs', price: 95, discount: '21% off' }
    },
    moq: '100 packs',
    inStock: true,
    sustainable: false
  },
  {
    id: 'TR-001',
    name: 'Jumbo Toilet Roll',
    category: 'toilet',
    description: 'High-capacity toilet rolls ideal for large facilities, hotels, and commercial spaces. Long-lasting and economical.',
    ply: '2-Ply',
    sheets: '500 Sheets',
    sizes: ['Jumbo (300m)', 'Standard (200m)'],
    packing: '12 rolls per carton',
    pricing: {
      tier1: { qty: '1-49 rolls', price: 85 },
      tier2: { qty: '50-199 rolls', price: 75, discount: '12% off' },
      tier3: { qty: '200+ rolls', price: 68, discount: '20% off' }
    },
    moq: '24 rolls',
    inStock: true,
    sustainable: true
  },
  {
    id: 'KT-001',
    name: 'Kitchen Towel Roll',
    category: 'kitchen',
    description: 'Heavy-duty kitchen towels with superior absorbency. Perfect for restaurants, cafeterias, and commercial kitchens.',
    ply: '2-Ply',
    sheets: '100 Sheets',
    sizes: ['Standard Roll'],
    packing: '12 rolls per carton',
    pricing: {
      tier1: { qty: '1-49 rolls', price: 95 },
      tier2: { qty: '50-199 rolls', price: 85, discount: '11% off' },
      tier3: { qty: '200+ rolls', price: 75, discount: '21% off' }
    },
    moq: '24 rolls',
    inStock: true,
    sustainable: false
  },
  {
    id: 'PN-002',
    name: 'Premium Cocktail Napkin',
    category: 'napkin',
    description: 'Elegant cocktail napkins for bars, lounges, and events. Available in designer prints and custom branding.',
    ply: '3-Ply',
    sheets: '40 Sheets per pack',
    sizes: ['25x25cm'],
    packing: '30 packs per carton',
    pricing: {
      tier1: { qty: '1-99 packs', price: 150 },
      tier2: { qty: '100-499 packs', price: 135, discount: '10% off' },
      tier3: { qty: '500+ packs', price: 120, discount: '20% off' }
    },
    moq: '50 packs',
    inStock: true,
    sustainable: false
  }
];

let cart = [];
let currentFilter = 'all';

// Render products
function renderProducts(filter = 'all') {
  currentFilter = filter;
  const container = document.getElementById('productsContainer');
  if (!container) return;

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  container.innerHTML = filteredProducts.map(product => `
    <div class="product-card">
      <div class="product-header">
        <div class="product-image">
          <div style="width:100%;height:280px;background:#F5F5F5;display:flex;align-items:center;justify-content:center;font-size:18px;color:#2E7D32;font-weight:600;">${product.category.toUpperCase()}</div>
          ${product.sustainable ? '<div class="eco-badge">🌱 Eco-Friendly</div>' : ''}
          ${product.inStock ? '<div class="stock-badge">In Stock</div>' : '<div class="stock-badge out">Out of Stock</div>'}
        </div>
      </div>
      <div class="product-body">
        <div class="product-meta">
          <span class="product-sku">SKU: ${product.id}</span>
          <span class="product-category">${product.category}</span>
        </div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        
        <div class="product-specs">
          <div class="spec-item"><strong>Ply:</strong> ${product.ply}</div>
          <div class="spec-item"><strong>Sheets:</strong> ${product.sheets}</div>
          <div class="spec-item"><strong>Sizes:</strong> ${product.sizes.join(', ')}</div>
          <div class="spec-item"><strong>Packing:</strong> ${product.packing}</div>
          <div class="spec-item"><strong>MOQ:</strong> ${product.moq}</div>
        </div>

        <div class="pricing-table">
          <div class="pricing-header">Bulk Pricing</div>
          <div class="pricing-row">
            <span>${product.pricing.tier1.qty}</span>
            <span class="price">₹${product.pricing.tier1.price}</span>
          </div>
          <div class="pricing-row highlight">
            <span>${product.pricing.tier2.qty}</span>
            <span>
              <span class="price">₹${product.pricing.tier2.price}</span>
              <span class="discount">${product.pricing.tier2.discount}</span>
            </span>
          </div>
          <div class="pricing-row highlight">
            <span>${product.pricing.tier3.qty}</span>
            <span>
              <span class="price">₹${product.pricing.tier3.price}</span>
              <span class="discount">${product.pricing.tier3.discount}</span>
            </span>
          </div>
        </div>

        <div class="product-actions">
          <div class="quantity-selector">
            <button onclick="decreaseQty('${product.id}')">-</button>
            <input type="number" id="qty-${product.id}" value="50" min="${parseInt(product.moq)}">
            <button onclick="increaseQty('${product.id}')">+</button>
          </div>
          <button class="btn-add-cart" onclick="addToCart('${product.id}')">Add to Cart</button>
          <button class="btn-quote" onclick="requestQuote('${product.id}')">Get Quote</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Cart functions
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const qtyInput = document.getElementById(`qty-${productId}`);
  const quantity = parseInt(qtyInput?.value || '50');

  if (product) {
    const existingItem = cart.find(item => item.product.id === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ product, quantity });
    }
    updateCartCount();
    showNotification(`Added ${quantity} ${product.name} to cart!`);
  }
}

function updateCartCount() {
  const countEl = document.getElementById('cartCount');
  if (countEl) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    countEl.textContent = totalItems.toString();
  }
}

function toggleCart() {
  if (cart.length === 0) {
    showNotification('Your cart is empty');
    return;
  }
  
  const cartSummary = cart.map(item => 
    `${item.product.name} x ${item.quantity}`
  ).join('\\n');
  
  alert(`Cart Contents:\\n\\n${cartSummary}\\n\\nIn production, this would open a full cart modal with checkout options.`);
}

// Utility functions
function increaseQty(productId) {
  const input = document.getElementById(`qty-${productId}`);
  if (input) {
    input.value = (parseInt(input.value) + 10).toString();
  }
}

function decreaseQty(productId) {
  const input = document.getElementById(`qty-${productId}`);
  const product = products.find(p => p.id === productId);
  const minQty = parseInt(product?.moq || '50');
  if (input && parseInt(input.value) > minQty) {
    input.value = (parseInt(input.value) - 10).toString();
  }
}

function filterProducts(category) {
  renderProducts(category);
  scrollToSection('facilities');
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function showBusinessLogin() {
  alert('Business Login Modal\\n\\nIn production, this would show a login form with:\\n- Email/GST login\\n- Password\\n- Forgot password\\n- Register new business');
}

function showQuoteModal() {
  alert('Request Quote Modal\\n\\nIn production, this would show a form with:\\n- Business details\\n- Product requirements\\n- Quantity needed\\n- Delivery location\\n- Special requests');
}

function showCustomDesignForm() {
  alert('Custom Design Form\\n\\nIn production, this would show:\\n- Upload logo\\n- Choose colors\\n- Select sizes\\n- Specify quantities\\n- Get instant quote');
}

function downloadCatalog() {
  alert('Download Catalog\\n\\nIn production, this would:\\n- Generate PDF catalog\\n- Include all products\\n- Show pricing tiers\\n- Include company info');
}

function requestQuote(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    alert(`Request Quote: ${product.name}\\n\\nIn production, this would:\\n- Pre-fill quote form\\n- Include product details\\n- Send to sales team\\n- Provide instant response`);
  }
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  console.log('🚀 Matvex Premium Platform Loaded');
  console.log('📦 Products:', products.length);
});