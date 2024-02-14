export default function formatBrand(brand) {
    if (typeof brand === 'string') {
        return brand.toUpperCase();
    } else {
        console.error('Invalid brand type, expected a string');
        return brand;
    }
}