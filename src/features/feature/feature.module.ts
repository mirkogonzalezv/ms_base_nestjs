import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeatureEntity } from './domain/entities/feature.entity';
import { FeatureService } from './infrastructure/service/feature.service';
import { FeatureController } from './infrastructure/controller/feature.controller';
import { ConfigService } from '@nestjs/config';
import FeatureCRUDUsesCases from './data/usescases/feature.crud.usescases';

@Module({
  imports: [TypeOrmModule.forFeature([FeatureEntity])],
  providers: [FeatureService, FeatureCRUDUsesCases, ConfigService],
  controllers: [FeatureController],
})
export class FeatureModule {}
