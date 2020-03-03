import { Action, action, thunk, Thunk, ThunkOn, thunkOn } from "easy-peasy";
import { StoreModel } from "./model";

export interface CellValueUpdate {
  productId: string;
  attributeDefinitionId: string;
  content: any;
}

export interface EmptyButMandatoryColumnGroup {
  name: string;
  columnNames: string[];
}

interface ColumnGroupVisibility {
  columnGroupName: string;
  visible: boolean;
}

class SortColumn {
}

interface Item {
}

interface ColumnGroup {
}

interface AttributeDefinitionMap {
}

interface ProductGridModel {
}

interface ValidationErrorMap {
}

interface UpdateMap {
}

export interface ProductGridContainerModel {
  // state
  productListId: number;
  productDefinitionId?: string;
  productDefinitionName: string;
  sortColumn: SortColumn;
  items: Array<Item>;
  errors: any;
  selectedItemIds: Array<string>;
  columnGroups: Array<ColumnGroup>;
  fileName: string;
  startDownload: boolean;
  emptyButMandatoryColumns: EmptyButMandatoryColumnGroup[];
  attributeDefinitionById: AttributeDefinitionMap;
  isClosing: boolean;
  isDirty: boolean;
  validationErrorMessages: string[];

  // listeners
  onServerActionStarted: ThunkOn<
    ProductGridContainerModel,
    StoreModel
  >;
  onServerActionFailed: ThunkOn<
    ProductGridContainerModel,
    StoreModel
  >;
  onServerActionSucceeded: ThunkOn<
    ProductGridContainerModel,
    StoreModel
  >;

  // actions
  loadModel: Thunk<ProductGridContainerModel, number>;
  setModel: Action<
    ProductGridContainerModel,
    [ProductGridModel, AttributeDefinitionMap]
  >;
  sortRows: Action<ProductGridContainerModel, SortColumn>;
  updateCellValue: Thunk<
    ProductGridContainerModel,
    CellValueUpdate
  >;
  setErrors: Action<ProductGridContainerModel, ValidationErrorMap>;
  setCellValue: Action<ProductGridContainerModel, CellValueUpdate>;
  showColumnGroup: Action<ProductGridContainerModel, ColumnGroupVisibility>;
  updateSelection: Action<ProductGridContainerModel, string[]>;
  updateSelectedItems: Thunk<
    ProductGridContainerModel,
    Map<string, string[]>
  >;
  doUpdateSelectedItems: Action<
    ProductGridContainerModel,
    Map<string, string[]>
  >;
  clearState: Action<ProductGridContainerModel>;
  beginClosing: Action<ProductGridContainerModel>;
  endClosing: Action<ProductGridContainerModel>;
  beginSave: Thunk<
    ProductGridContainerModel,
    void,
    StoreModel,
    Promise<boolean>
  >;
  saveOnServer: Thunk<ProductGridContainerModel, void>;
  endSaving: Action<ProductGridContainerModel>;
  clearValidationErrors: Action<ProductGridContainerModel>;
  setValidationErrorMessages: Action<ProductGridContainerModel, string[]>;
  beginDownload: Thunk<ProductGridContainerModel>;
  calculateEmptyButMandatoryColumns: Action<ProductGridContainerModel>;
  download: Thunk<ProductGridContainerModel, void, StoreModel>;
  endDownload: Action<ProductGridContainerModel>;
  updateNames: Thunk<ProductGridContainerModel, string[]>;
  doUpdate: Action<ProductGridContainerModel, UpdateMap>;
}

export function createProductGridContainerModel(): ProductGridContainerModel {
  return {
    productListId: 0,
    productDefinitionId: undefined,
    productDefinitionName: "",
    sortColumn: new SortColumn(),
    items: new Array<Item>(),
    errors: {},
    selectedItemIds: new Array<string>(),
    columnGroups: new Array<ColumnGroup>(),
    fileName: "",
    startDownload: false,
    emptyButMandatoryColumns: [],
    attributeDefinitionById: {},
    isClosing: false,
    isDirty: false,
    validationErrorMessages: [],

    onServerActionStarted: thunkOn(
      actions => [actions.download.startType, actions.beginSave.startType],
      (actions, targetPayload, { getStoreActions }) => {

      }
    ),
    onServerActionFailed: thunkOn(
      actions => [
        actions.loadModel.failType,
        actions.updateCellValue.failType,
        actions.saveOnServer.failType,
        actions.beginSave.failType
      ],
      (actions, targetPayload, { getStoreActions, getState }) => {

      }
    ),
    onServerActionSucceeded: thunkOn(
      actions => [
        actions.saveOnServer.successType,
        actions.download.successType,
        actions.beginSave
      ],
      (actions, targetPayload, { getStoreActions, getState }) => {

      }
    ),
    loadModel: thunk(async (actions, productListId, { injections }) => {

    }),
    setModel: action((state, payload) => {

    }),
    updateCellValue: thunk(
      async (actions, cellValueUpdate, { injections, getState }) => {
      }    ),
    setErrors: action((state, validationErrorsByItemId: ValidationErrorMap) => {

    }),
    setCellValue: action((state, cellValueUpdate) => {

    }),
    sortRows: action((state, sortColumn) => {
    }),
    showColumnGroup: action((state, columnGroupVisibility) => {
    }),
    updateSelection: action((state, selectedItemIds) => {      state.selectedItemIds = selectedItemIds;
    }),
    updateSelectedItems: thunk(
      async (actions, payload, { injections, getState }) => {
      }
    ),
    doUpdateSelectedItems: action((state, valuesByColumnId) => {
    }),
    clearState: action(() => {
    }),
    beginClosing: action(state => {
    }),
    endClosing: action(state => {
    }),
    beginSave: thunk(async (actions, _, { injections, getState }) => {
      return undefined;
    }),
    saveOnServer: thunk(async (actions, _, { injections, getState }) => {
    }),
    clearValidationErrors: action(state => {
    }),
    endSaving: action(state => {
    }),
    setValidationErrorMessages: action((state, errorMessages) => {
    }),
    beginDownload: thunk(async actions => {
    }),
    calculateEmptyButMandatoryColumns: action(state => {
    }),
    download: thunk(async (actions, _, { injections, getState }) => {
    }),
    endDownload: action(state => {
    }),
    updateNames: thunk(async (actions, itemIds, { injections, getState }) => {
    }),
    doUpdate: action( (state, updateMap)=> {;
    })
  };
}

const productGridContainer: ProductGridContainerModel = createProductGridContainerModel();
export default productGridContainer;
