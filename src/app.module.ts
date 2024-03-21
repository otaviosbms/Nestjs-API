import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { authModule } from './auth/auth.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    forwardRef(()=>UserModule),
    forwardRef(()=>authModule)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
