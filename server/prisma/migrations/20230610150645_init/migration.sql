-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,
    "description" TEXT,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);
