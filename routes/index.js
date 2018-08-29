import client from "./client/client";
import shows from "./shows/shows";

module.exports = app => {
    app.use("/api/v1", shows);
    app.use("/api/v1", client);
} /* end of module */