import { Response } from 'supertest';
import { IUser } from 'src/utils/node_modules/@entities/User';


export interface IResponse extends Response {
    body: {
        users: IUser[];
        error: string;
    };
}

export interface IReqBody {
    user?: IUser;
}
