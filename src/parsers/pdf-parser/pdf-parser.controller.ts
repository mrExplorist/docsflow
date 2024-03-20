import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';

@ApiSecurity('apiKey')
@ApiTags('parsers')
@Controller({ path: 'parsers/pdf', version: '1' })
export class PdfParserController {
  @Get()
  getHello(): string {
    return 'Hello World from PdfParserController!';
  }
}