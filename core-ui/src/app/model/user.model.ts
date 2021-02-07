export class User {
    email: string;
    token: string;
    id: number;
    decoded: TokenInfo;
}

export class TokenInfo {
    id: number;
    user: UserInfo;
    iat: number;
    exp: number;
}

export class UserInfo {
    name: string;
    email: string;
    roles: string[];
    company: string;
}