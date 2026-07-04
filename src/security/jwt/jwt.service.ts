import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'
@Injectable()
export class serviceJwt {
    constructor(private jwtService : JwtService ){}

    createToken(paylod : object, ){
        return this.jwtService.signAsync(paylod, {
            secret : '1234'
        })
    }
}
