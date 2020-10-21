const contentful = require("contentful");

const client = contentful.createClient({
  space: "lhmy5mgb9x5k",
  accessToken: "pD7aIO7WDf28G0qD_jScmSX_vvgNOuLk3DOd95P5HpI",
});

client.getEntries((entries) => {
  entries.forEach((entry) => console.log(entry));
});
