import { Module } from '@nestjs/common';
import { SetupService } from './setup.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SetupController } from './setup.controller';

@Module({
  providers: [SetupService, PrismaService],
  controllers: [SetupController]
})
export class SetupModule { }
