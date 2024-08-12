import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { EStatus } from 'src/interfaces/order.interface';

@Injectable()
export class StatusValidationPipe implements PipeTransform {
  transform(value: any) {
    if (!Object.values(EStatus).includes(value)) {
      throw new BadRequestException(
        `Invalid status value. Must be one of: ${Object.values(EStatus).join(', ')}`,
      );
    }
    return value;
  }
}
