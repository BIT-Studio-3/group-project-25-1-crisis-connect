// This should be declared under - import indexRoutes from "./routes/index.js";
import institutionRoutes from "./routes/institution.js";

// This should be declared above app.use("/", indexRoutes);
app.use(express.urlencoded({ extended: false })); // To parse the incoming requests with urlencoded payloads. For example, form data

// This should be declared under - app.use(urlencoded({ extended: false }));
app.use(express.json()); // To parse the incoming requests with JSON payloads. For example, REST API requests

// This should be declared under - app.use("/", indexRoutes);
app.use("/api/institutions", institutionRoutes);