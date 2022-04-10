module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
        useBuiltIns: "entry",
        corejs: "3.20",
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: ["@babel/plugin-syntax-bigint"],
};
