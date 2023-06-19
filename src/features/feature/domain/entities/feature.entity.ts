import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { IFeatureModel } from '../models/feature.model';
import { IsBoolean, IsEmail, IsString } from 'class-validator';

export class FeatureEntity implements IFeatureModel {
  // Ejemplo de una entidad con TypeOrm

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsString()
  username: string;

  @Column()
  @IsEmail()
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column()
  @IsBoolean()
  isActive: boolean;

  constructor() {
    this.isActive = false;
  }
}
