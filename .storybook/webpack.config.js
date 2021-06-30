module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: [
      require.resolve("babel-loader"),
      require.resolve("exports-loader"),
    ],
    options: {
      presets: [["react-app", { flow: false, typescript: true }]],
    },
  });

  config.module.rules.push({});
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
