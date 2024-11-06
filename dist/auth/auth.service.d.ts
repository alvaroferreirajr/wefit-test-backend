export declare class AuthService {
    private readonly secretKey;
    generateAccessToken(): string;
    verifyAccessToken(token: string): boolean;
}
