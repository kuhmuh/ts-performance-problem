import productGridContainer, {ProductGridContainerModel} from "./productGrid";

export interface StoreModel {
  productGridContainer: ProductGridContainerModel;
}

const model: StoreModel = {
  productGridContainer,
};

export default model;
