function formatCurrency(val) {
    return ((val * 100) / 100).toFixed(2);
}

module.exports = formatCurrency;