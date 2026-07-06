import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'
import { env } from 'prisma/config';
@Injectable()
export class serviceJwt {
    constructor(private jwtService : JwtService ){}

    createToken(paylod : object, ){
        return this.jwtService.signAsync(paylod, {
            secret : '1234'
            // secret : env["JWT_SECRET"]
        })
    }

    verifyToken(token : string){
        return this.jwtService.verifyAsync(token, {
            secret : '1234'
            // secret : env["JWT_SECRET"]
        })
    }
}