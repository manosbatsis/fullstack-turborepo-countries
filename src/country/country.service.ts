import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CountryService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(currency?: number) {
    if (currency) return this.prisma.country.findMany(
        {
          include: { currencies: true },
          where: {
            currencies: {
              some: {
                id: Number(currency),
              },
            },
            deleted: false
          }
        }
      );
    else return this.prisma.country.findMany(
      {
        include: { currencies: true },
        where: {
          deleted: false
        }
      }
    );
  }

  findOne(code: string) {
    let id = undefined;
    let alpha2 = undefined;
    let alpha3 = undefined;
    if(Number.isInteger(code)) id = +code;
    else if(code.length == 2) alpha2 = code;
    else alpha3 = code;

    console.log(code, id, alpha2, alpha3);
    return this.prisma.country.findUniqueOrThrow({
      include: { currencies: true },
      where: {
        id,
        alpha2,
        alpha3
      },
    });
  }

  remove(id: number) {
    return this.prisma.country.update({
      where: { id },
      data: {
        deleted: true
      }
    });
  }
}
