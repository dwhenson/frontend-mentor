const updateBarWidth = () => {
	rootStyles.setProperty("--width-bar", `${(priceRange.value * 100) / priceRange.max}%`);
};
