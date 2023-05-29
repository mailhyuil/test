module.exports = {
  apps: [
    {
      name: "client",
      script: ".output/server/index.mjs",
      env: {
        NITRO_PORT: 8081,
      },
    },
  ],
};
