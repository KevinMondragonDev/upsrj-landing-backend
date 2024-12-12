import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from './entities/permissions.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [PermissionController],
  providers: [PermissionService],
  imports:[
    TypeOrmModule.forFeature([Permission]),
    AuthModule,
  ]
})
export class PermissionModule {}
