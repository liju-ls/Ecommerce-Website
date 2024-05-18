import Express from "express";

const app = Express();

export function startServer() {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on : ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}
