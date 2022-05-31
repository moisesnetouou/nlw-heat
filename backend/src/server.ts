import { serverHTTP } from "./app";

serverHTTP.listen(process.env.PORT || 4000, () => console.log(`Server is running! PORT 4000`))