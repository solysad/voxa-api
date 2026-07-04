import { Injectable } from '@nestjs/common';

@Injectable()
export class RegistrarService {
    create() {
        return {"status" : "success", "message" : "This action adds a new registrar"};
    }
}
