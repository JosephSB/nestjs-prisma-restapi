import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class UUIDValidationPipe implements PipeTransform {
  transform(value: any /*,metadata: ArgumentMetadata*/) {
    const s = '' + value;
    const RGX =
      '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$';
    if (s.match(RGX) === null) {
      throw new BadRequestException('Invalid UUID');
    }
    return value;
  }
}
