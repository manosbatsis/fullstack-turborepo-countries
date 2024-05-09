import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {

    // Currencies
    const euro = await prisma.currency.upsert({
        where: { alphabeticCode: 'EUR' },
        update: {},
        create: {
            id: 1,
            alphabeticCode: 'EUR',
            numericCode: '978',
            minorUnit: 2
        }
    });
    const usd = await prisma.currency.upsert({
        where: { alphabeticCode: 'USD' },
        update: {},
        create: {
            id: 2,
            alphabeticCode: 'USD',
            numericCode: '840',
            minorUnit: 2
        }
    });

    // Countries
    const greece = await prisma.country.upsert({
        where: { name: 'Greece' },
        update: {},
        create: {
            name: 'Greece',
            alpha2: 'GR',
            alpha3: 'GRC',
            currencies: {
                connect: {
                    id: 1,
                },
            }
        }
    });
    const france = await prisma.country.upsert({
        where: { name: 'France' },
        update: {},
        create: {
            name: 'France',
            alpha2: 'FR',
            alpha3: 'FRA',
            currencies: {
                connect: {
                    id: 1,
                },
            }
        }
    });

    const usa = await prisma.country.upsert({
        where: { name: 'United States of America' },
        update: {},
        create: {
            name: 'United States of America',
            alpha2: 'US',
            alpha3: 'USA',
            currencies: {
                connect: {
                    id: 2,
                },
            }
        }
    });
    const samoa = await prisma.country.upsert({
        where: { name: 'American Samoa' },
        update: {},
        create: {
            name: 'American Samoa',
            alpha2: 'AS',
            alpha3: 'ASM',
            currencies: {
                connect: {
                    id: 2,
                },
            }
        }
    });
    console.info('currencies', { euro, usd });
    console.info('countries', { greece, france, usa, samoa });
}

// execute the main function
main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect();
    });
