-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "alpha2" TEXT NOT NULL,
    "alpha3" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Currency" (
    "id" SERIAL NOT NULL,
    "alphabeticCode" TEXT NOT NULL,
    "numericCode" TEXT NOT NULL,
    "minorUnit" INTEGER NOT NULL,

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CountryToCurrency" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Country_alpha2_key" ON "Country"("alpha2");

-- CreateIndex
CREATE UNIQUE INDEX "Country_alpha3_key" ON "Country"("alpha3");

-- CreateIndex
CREATE UNIQUE INDEX "Currency_alphabeticCode_key" ON "Currency"("alphabeticCode");

-- CreateIndex
CREATE UNIQUE INDEX "Currency_numericCode_key" ON "Currency"("numericCode");

-- CreateIndex
CREATE UNIQUE INDEX "_CountryToCurrency_AB_unique" ON "_CountryToCurrency"("A", "B");

-- CreateIndex
CREATE INDEX "_CountryToCurrency_B_index" ON "_CountryToCurrency"("B");

-- AddForeignKey
ALTER TABLE "_CountryToCurrency" ADD CONSTRAINT "_CountryToCurrency_A_fkey" FOREIGN KEY ("A") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CountryToCurrency" ADD CONSTRAINT "_CountryToCurrency_B_fkey" FOREIGN KEY ("B") REFERENCES "Currency"("id") ON DELETE CASCADE ON UPDATE CASCADE;
