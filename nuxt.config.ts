import { Configuration } from "@nuxt/types";
// const webpack = require("webpack");

const nuxtConfig: Configuration = {
  buildModules: ["@nuxt/typescript-build"],
  loading: "~/components/Loading.vue"
};
module.exports = nuxtConfig;
