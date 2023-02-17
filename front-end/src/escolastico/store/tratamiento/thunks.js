import {
  deleteTratamiento,
  getAllTratamiento,
  getTratamiento,
  createTratamiento,
  updateTratamiento,
} from "../../services/tratamientoService";
import {
  saveNewTratamiento,
  getListTratamiento,
  updateTratamientoOne,
  deleteTratamientoOne,
  getTratamientoOne,
} from "./tratamientoSlice";

export const startNewTratamiento = (tratamiento) => async (dispatch) => {
  try {
    const data  = await createTratamiento(tratamiento);
    console.log(data);
    dispatch(saveNewTratamiento(data));
  } catch (error) {
    console.log(error);
  }
};

export const getListTratamientos = () => async (dispatch) => {
  try {
    const response = await getAllTratamiento();
    if (response === '') {
      console.log("response null", response);
      dispatch(getListTratamiento({ data: [], message: "No hay datos" }));
    } else {
      console.log("response", response);
      dispatch(
        getListTratamiento({ data: response, message: "Datos correctos" })
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export const getTratamientoA = (id) => async (dispatch) => {
  try {
    const  data  = await getTratamiento(id);
    console.log(data);
    dispatch(getTratamientoOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startUpdateTratamiento = (tratamiento) => async (dispatch) => {
  try {
    const data = await updateTratamiento(tratamiento, tratamiento.id);
    console.log(data);
    dispatch(updateTratamientoOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startDeleteTratamiento = (id) => async (dispatch) => {
  try {
    const data = await deleteTratamiento(id);
    console.log(data);
    dispatch(deleteTratamientoOne(id));
  } catch (error) {
    console.log(error);
  }
};
