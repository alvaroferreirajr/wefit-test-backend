import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
    private readonly secretKey = 'your-secret-key';

    generateAccessToken(): string {
        const payload = { user: 'guest' };
        return `Bearer ${jwt.sign(payload, this.secretKey, { expiresIn: '1h' })}`;
    }

    verifyAccessToken(token: string): boolean {
        try {
            jwt.verify(token, this.secretKey);
            return true;
        } catch (error) {
            return false;
        }
    }
}