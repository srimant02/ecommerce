const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "Ac5zGoquASHgLV0NYZKds34YEN9NYUvddJBggSmOFQwzDwHDMpPDH-ckr2JSdBjw38tymksc22AdmYl9",
  client_secret: "EIfzTAKKP3kqsohRBtqBmJKRrX1Z-Ow-gFK3ewwylAA2hH55EbWafLs1HAh1xSdyZhwFgOSahoDLyjQg",
});

module.exports = paypal;
