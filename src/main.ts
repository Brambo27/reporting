import { NestFactory } from "@nestjs/core";
import { ReportingModule } from "./reporting.module";

async function bootstrap() {
  const app = await NestFactory.create(ReportingModule);
  console.log("reporting module created");
  await app.listen(5030);
}
bootstrap();
