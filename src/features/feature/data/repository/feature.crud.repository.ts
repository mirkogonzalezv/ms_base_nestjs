import { IFeatureModel } from './../../domain/models/feature.model';

export default interface IFeatureCRUDRepository {
  getOneAccount(id: string): Promise<IFeatureModel>;
  getAllAccounts(): Promise<IFeatureModel[]>;
  delete(id: string): Promise<void>;
  create(feature: IFeatureModel): Promise<void>;
  update(feature: IFeatureModel): Promise<void>;
}
