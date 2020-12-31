import "@config/initial";
import "@config/database";
import App from "@config/express";
import Logger from "@utils/logger";

// Start the server
const port = Number(process.env.PORT || 3000);
App.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log("\n\n"); // Adding spacing to the console
    Logger.info("Express server started on port: " + port);
});
