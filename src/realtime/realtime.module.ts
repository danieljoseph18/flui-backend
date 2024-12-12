import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RealtimeService } from './realtime.service.js';

@Module({
  imports: [ConfigModule],
  providers: [RealtimeService],
  exports: [RealtimeService],
})
export class RealtimeModule {}
