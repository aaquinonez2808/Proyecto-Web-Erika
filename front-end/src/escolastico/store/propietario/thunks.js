import {
  deletePropietario,
  getAllPropietario,
  getPropietario,
  createPropietario,
  updatePropietario,
} from "../../services/propietarioService";
import {
  saveNewPropietario,
  getListPropietario,
  updatePropietarioOne,
  deletePropietarioOne,
  getPropietarioOne,
} from "./propietarioSlice";

export const startNewPropietario = (propietario) => async (dispatch) => {
  try {
    const data  = await createPropietario(propietario);
    console.log(data);
    dispatch(saveNewPropietario(data));
  } catch (error) {
    console.log(error);
  }
};

export const getListPropietarios = () => async (dispatch) => {
  try {
    const response = await getAllPropietario();
    if (response === '') {
      console.log("response null", response);
      dispatch(getListPropietario({ data: [], message: "No hay datos" }));
    } else {
      console.log("response", response);
      dispatch(
        getListPropietario({ data: response, message: "Datos correctos" })
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export const getPropietarioA = (id) => async (dispatch) => {
  try {
    const  data  = await getPropietario(id);
    console.log(data);
    dispatch(getPropietarioOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startUpdatePropietario = (propietario) => async (dispatch) => {
  try {
    const data = await updatePropietario(propietario, propietario.id);
    console.log(data);
    dispatch(updatePropietarioOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startDeletePropietario = (id) => async (dispatch) => {
  try {
    const data = await deletePropietario(id);
    console.log(data);
    dispatch(deletePropietarioOne(id));
  } catch (error) {
    console.log(error);
  }
};
