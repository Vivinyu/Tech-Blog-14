module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    format_plural: (word, amount) => {
      if (amount !== 1) {
        return `${word}s`;
      }
  
      return word;
    },
    format_url: (url) => {
      return url
        .replace('http://', '')
        .replace('https://', '')
        .replace('www.', '')
        .split('/')[0]
        .split('?')[0];
    },
    eq: (v1, v2) => {
      return v1 === v2;
    },
    ne: (v1, v2) => {
      return v1 !== v2;
    },
    lt: (v1, v2) => {
      return v1 < v2;
    },
    gt: (v1, v2) => {
      return v1 > v2;
    },
    lte: (v1, v2) => {
      return v1 <= v2;
    },
    gte: (v1, v2) => {
      return v1 >= v2;
    },
    and() {
      return Array.prototype.every.call(arguments, Boolean);
    },
    or() {
      return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
    }
  };