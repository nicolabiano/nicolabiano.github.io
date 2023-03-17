export default () => /*html*/`
<header id="site-header">
	<div class="desktop-header"></div>
	<div class="mobile-header">
		<a href="#" id="mobile-back-button" class="header-button btn btn-style-one">
			<span class="header-button-icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="15" height="1.5" fill="#323232"/><path d="M11 5.20001L4 11.7L11 18.2" stroke="#323232" stroke-width="1.5" stroke-linecap="round"/></svg>
			</span>
		</a>
		<span class="header-title text-bolder text-color-one text-size-l">Detail</span>	
		<a href="#" id="mobile-more-button" class="header-button btn btn-style-one">
			<span class="header-button-icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="5.5" cy="11.5" r="1.5" fill="#323232"/><circle cx="12.5" cy="11.5" r="1.5" fill="#323232"/><circle cx="19.5" cy="11.5" r="1.5" fill="#323232"/></svg>
			</span>
		</a>
	</div>
</header>
<div id="site-content">
	<div id="product-127" class="product instock product-summary">
		<div id="product-gallery" class="product-gallery-wrapper">
			<img width="400" height="400" src="../products/modelo-especial.jpeg" class="product-thumbnail-image" alt="" loading="lazy">
		</div>	
		<div class="product-summary-wrapper">
			<div class="title-price-wrapper">
				<h2 id="product-title" class="text-color-three text-size-xl text-bolder">Modelo Especial</h2>
				<span id="product-price" class="text-color-four text-size-xl text-bolder">
					<bdi><span class="currencySymbol">$</span><span class="amount">2.32</span></bdi>
				</span>
			</div>
			<div class="origin-stock-wrapper">
				<span id="product-origin" class="text-color-two text-size-s">Origin: Import</span>
				<span id="product-stock" class="text-color-two text-size-s">Stock: 456</span>
			</div>
			<div class="product-description-wrapper">
				<h3 class="description-title text-color-one text-size-m text-bolder">Description</h3>
				<p id="product-description" class="text-color-two text-size-s">#2 selling imported beer in the US with nearly 60 million cases in annual sales (2), growing more than 15 million cases over the past 2 years (3). A full flavored Mexican lager consistently delivering a crisp, clean taste that has stood the test of time for 90 years. Modelo Especial embodies substance with style - a straightforward, uncomplicated and consistent experience with an understated style.<br>Modelo Especial earned the 2012 Market Watch "Beer Brand of the Year" due to 20 straight years of double-digit growth earning.</p>
				<a href="#" id="product-read-more" class="text-color-four text-size-s text-bolder">Read more</a>
			</div>
			<div class="product-variations">
				<h3 class="variations-title text-color-one text-size-m text-bolder">Size</h3>
				<ul id="variation-swatches-wrapper">
					<li class="variation-option">
						<a href="#" id="variation-option" class="variation-btn text-color-two text-size-s" value="10167">12 - 24oz Cans</a>
					</li>
					<li class="variation-option">
						<a href="#" id="variation-option" class="variation-btn text-color-two text-size-s" value="10166">18 - 12oz Cans</a>
					</li>
					<li class="variation-option">
						<a href="#" id="variation-option" class="variation-btn text-color-two text-size-s" value="10170">Half Barrel</a>
					</li>
				</ul>
			</div>
			<div class="add-to-cart-wrapper">
				<a href="#" id="bag-btn" class="btn btn-style-three">
					<span class="bag-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="6" r="4.25" stroke="#FF9F24" stroke-width="1.5"/><path d="M4.30623 9.59689C4.50953 7.97049 5.89208 6.75 7.53113 6.75H16.4689C18.1079 6.75 19.4905 7.97049 19.6938 9.59689L20.6938 17.5969C20.9362 19.5367 19.4237 21.25 17.4689 21.25H6.53113C4.57626 21.25 3.06375 19.5367 3.30623 17.5969L4.30623 9.59689Z" fill="white" stroke="#FF9F24" stroke-width="1.5"/><circle cx="9.75" cy="10.75" r="0.75" fill="#FF9F24"/><circle cx="13.75" cy="10.75" r="0.75" fill="#FF9F24"/></svg>
					</span>
				</a>
				<a href="#" id="add-to-cart" class="btn btn-style-two text-size-m text-bold">Add to cart</a>
			</div>
		</div>	
	</div>
</div>
`;