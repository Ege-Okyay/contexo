import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SetupService {
  constructor(private prisma: PrismaService) { }

  async getSetupStatus(): Promise<boolean> {
    return await this.prisma.user.count() > 0;
  }
}
