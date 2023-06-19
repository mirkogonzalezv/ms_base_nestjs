import { Injectable } from '@nestjs/common';
import { IFeatureModel } from '../../domain/models/feature.model';
import IFeatureCRUDRepository from '../repository/feature.crud.repository';

@Injectable()
export default class FeatureCRUDUsesCases implements IFeatureCRUDRepository {
  getOneAccount(id: string): Promise<IFeatureModel> {
    throw new Error('Method not implemented.');
  }
  getAllAccounts(): Promise<IFeatureModel[]> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  create(feature: IFeatureModel): Promise<void> {
    throw new Error('Method not implemented.');
  }
  update(feature: IFeatureModel): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
