import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '61ecfd5a55fff3ca74ca7ad4bcd0228ae1ed59a9', queries,  });
export default client;
  