import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Res,
  HttpStatus,
  Logger,
  Injectable, NestInterceptor, ExecutionContext, CallHandler, NotFoundException, UseInterceptors,
} from '@nestjs/common';
import { CountryService } from './country.service';
import { ApiQuery } from '@nestjs/swagger';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  @ApiQuery({
    name: "currency",
    type: 'Int',
    description: "A currency id. Optional",
    required: false
  })
  findAll(
    @Query('currency') currency?: number
  ) {
    return this.countryService.findAll(currency);
  }

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.countryService.findOne(code);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countryService.remove(+id);
  }
}
