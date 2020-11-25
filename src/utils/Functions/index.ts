import Logger from '@utils/Logger';

export const pErr = (err: Error) => {
    if (err) {
        Logger.err(err);
    }
};

export const getRandomInt = () => {
    return Math.floor(Math.random() * 1_000_000_000_000);
};
