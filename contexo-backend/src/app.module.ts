import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LogginMiddleware } from './middlewares/logging.middleware';
import { PrismaModule } from './prisma/prisma.module';
import { SetupModule } from './setup/setup.module';

@Module({
  imports: [PrismaModule, SetupModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogginMiddleware).forRoutes('*');
  }
}
