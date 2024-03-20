import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { authModule } from './auth/auth.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl:60,
      limit:10
    }),
    forwardRef(()=>UserModule),
    forwardRef(()=>authModule)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
