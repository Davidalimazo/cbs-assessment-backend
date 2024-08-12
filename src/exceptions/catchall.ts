import { Controller, Get } from '@nestjs/common';

@Controller('*')
export class CatchAllController {
  @Get()
  handleAllRequests() {
    return 'This will catch all GET requests';
  }
}
