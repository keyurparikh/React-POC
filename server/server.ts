import express from "express";
import path from "path";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 5000;
const buildDir = path.join(process.cwd() + "/build");

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Serve the React static files after build
app.use(express.static(buildDir));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello" });
});
