import pricebysku from "./pricebysku/pricebysku";
import user from "./user/user";
import skulocation from "./skulocation/skulocation";
import sku from "./sku/sku";
import purchasedetail from "./purchasedetail/purchasedetail";
import purchase from "./purchase/purchase";
import provider from "./provider/provider";
import pricelist from "./pricelist/pricelist";
import invoicedetail from "./invoicedetail/invoicedetail";
import invoicecorrelative from "./invoicecorrelative/invoicecorrelative";
import invoice from "./invoice/invoice";
import client from "./client/client";
import shows from "./shows/shows";

module.exports = app => {
    app.use("/api/v1", shows);
    app.use("/api/v1", client);
    app.use("/api/v1", invoice);
    app.use("/api/v1", invoicecorrelative);
    app.use("/api/v1", invoicedetail);
    app.use("/api/v1", pricelist);
    app.use("/api/v1", provider);
    app.use("/api/v1", purchase);
    app.use("/api/v1", purchasedetail);
    app.use("/api/v1", sku);
    app.use("/api/v1", skulocation);
    app.use("/api/v1", user);
    app.use("/api/v1", pricebysku);
} /* end of module */