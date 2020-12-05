import "@config/InitialSetup";
import "@config/DatabaseSetup";
import App from "@config/ExpressSetup";
import Logger from "@utils/Logger";

// Start the server
const port = Number(process.env.PORT || 3000);
App.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log("\n\n"); // Adding spacing to the console
    Logger.info("Express server started on port: " + port);
});
