/*
  Warnings:

  - You are about to drop the column `tg` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tgId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tgId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_tg_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "tg",
ADD COLUMN     "tgId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_tgId_key" ON "User"("tgId");
