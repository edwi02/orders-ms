/*
  Warnings:

  - You are about to alter the column `quantity` on the `OrderItem` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Added the required column `price` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "quantity" SET DATA TYPE INTEGER;
