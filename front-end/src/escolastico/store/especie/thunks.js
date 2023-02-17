import {
  deleteEspecie,
  getAllEspecie,
  getEspecie,
  createEspecie,
  updateEspecie,
} from "../../services/especieService";
import {
  saveNewEspecie,
  getListEspecie,
  updateEspecieOne,
  deleteEspecieOne,
  getEspecieOne,
} from "./especieSlice";

export const startNewEspecie = (especie) => async (dispatch) => {
  try {
    const data  = await createEspecie(especie);
    console.log(data);
    dispatch(saveNewEspecie(data));
  } catch (error) {
    console.log(error);
  }
};

export const getListEspecies = () => async (dispatch) => {
  try {
    const response = await getAllEspecie();
    if (response === '') {
      console.log("response null", response);
      dispatch(getListEspecie({ data: [], message: "No hay datos" }));
    } else {
      console.log("response", response);
      dispatch(
        getListEspecie({ data: response, message: "Datos correctos" })
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export const getEspecieA = (id) => async (dispatch) => {
  try {
    const  data  = await getEspecie(id);
    console.log(data);
    dispatch(getEspecieOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startUpdateEspecie = (especie) => async (dispatch) => {
  try {
    const data = await updateEspecie(especie, especie.id);
    console.log(data);
    dispatch(updateEspecieOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startDeleteEspecie = (id) => async (dispatch) => {
  try {
    const data = await deleteEspecie(id);
    console.log(data);
    dispatch(deleteEspecieOne(id));
  } catch (error) {
    console.log(error);
  }
};
