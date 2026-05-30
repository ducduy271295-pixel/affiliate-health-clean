const offers = [
  {
    title: "HydroLean XT Weight Wellness",
    category: "Weight Wellness",
    description: "A clean guide page focused on hydration, healthy routine support, and weight wellness information.",
    url: "/weight-wellness-guide",
    image: "images/hydrolean-xt.jpg"
  },
  {
    title: "Cholibrium Heart Wellness",
    category: "Heart Wellness",
    description: "A more natural, premium-looking guide for adults interested in heart wellness support and daily habits.",
    url: "/cholibrium-heart-wellness",
    image: "images/cholibrium.jpg"
  },
  {
    title: "ProDentim Oral Wellness",
    category: "Oral Wellness",
    description: "An oral wellness landing guide with a fresh, clean product image and a softer lifestyle presentation.",
    url: "/prodentim-oral-wellness",
    image: "images/prodentim.jpg"
  }
];

const grid = document.getElementById('offers-grid');

if (grid) {
  grid.innerHTML = offers.map(offer => `
    <article class="offer-card">
      <img src="${offer.image}" alt="${offer.title}">
      <div class="offer-card-body">
        <span class="offer-tag">${offer.category}</span>
        <h3>${offer.title}</h3>
        <p>${offer.description}</p>
        <div class="offer-footer">
          <a class="offer-link" href="${offer.url}">Open guide →</a>
          <a class="btn btn-outline" href="${offer.url}">View</a>
        </div>
      </div>
    </article>
  `).join('');
}
