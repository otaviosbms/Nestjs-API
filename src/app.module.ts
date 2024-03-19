import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { authModule } from './auth/auth.module';

@Module({
  imports: [UserModule, authModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
