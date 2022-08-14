import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ParseBooleanPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    let val: boolean | null = null;

    if (value === "true") {
      val = true;
    } else if (value === "false") {
      val = false;
    }

    if (val === null) {
      throw new BadRequestException(`${value} is not a boolean`);
    }

    return val;
  }
}
