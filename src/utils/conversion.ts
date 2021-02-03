export const DateConversion = (date: Date, tzString: string) => {
    return new Date(date.toLocaleString("en-US", { timeZone: tzString }));
};

export const CustomDateConversion = (format: string, tzString: string) => {
    return new Date(
        new Date(format).toLocaleString("en-GB", {
            timeZone: tzString,
        })
    );
};
