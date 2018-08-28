import invoice from "./invoice/invoice";
import shows from "./shows/shows";

module.exports = app => {
    app.use("/api/v1", shows);
    app.use("/api/v1", invoice);
} /* end of module */