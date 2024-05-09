import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CountryModule } from './country/country.module';

@Module({
  imports: [PrismaModule, CountryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
