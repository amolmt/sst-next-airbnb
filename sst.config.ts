import { SSTConfig } from "sst";
import { Default } from "./stacks/Default";

export default {
  config(_input) {
    return {
      name: "sst-next-air",
      region: "ap-south-1",
    };
  },
  stacks(app) {
    app.stack(Default);
  }
} satisfies SSTConfig;
