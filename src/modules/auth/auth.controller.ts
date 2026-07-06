import { Controller, Post, Get  ,Body, Res, Req, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { Response } from 'express'
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('api')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post('login')
  async consultUser(@Body() body : any, @Res() res : Response){
    try{
      const result = await this.authService.consultUser(body)
  
      res.cookie('jwt', result.accessToken, {
          httpOnly : true,
          secure : false,
          sameSite : 'lax',
          maxAge : 60 * 60 * 1000,
        })
      
      return res.json({
        id: result.id,
        user: result.username,
        email: result.email,
        remember : result.remember, 
        accessToken: result.accessToken
      });
    }
    catch(error){
      console.error('Erro no login:', error);
      throw error;
    }
  }

  @Post('register')
  async cadastrar(@Body() body: CreateAuthDto) {
    const newUser = await this.authService.cadastrar(body);
    return {
      success: true,
      user: newUser,
    };
  }

  @Get('me')
  async me(@Req() req: any) {
    const user = await this.authService.me(req);
    return {
      success: true,
      retun : user
    };
  }
}
