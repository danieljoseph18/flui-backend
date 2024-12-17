import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { RealtimeService } from './realtime/realtime.service.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable cors
  app.enableCors({
    origin: 'http://localhost:3000, https://flui.ai',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Initialize WebSocket server
  const realtimeService = app.get(RealtimeService);
  realtimeService.initialize(app);

  // Updated port handling for production
  const port = process.env.PORT || 3001;
  await app.listen(port);
}
bootstrap();
