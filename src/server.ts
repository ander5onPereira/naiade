import { app } from "./app";

app.listen(process.env.PORT_SERVICE, () => {
  console.clear();
  console.log(`🔥 Server started ${process.env.PORT_SERVICE}`);
});
