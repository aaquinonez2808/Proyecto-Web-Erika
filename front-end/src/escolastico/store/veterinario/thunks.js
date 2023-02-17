import {
  deleteVeterinario,
  getAllVeterinario,
  getVeterinario,
  createVeterinario,
  updateVeterinario,
} from "../../services/veterinarioService";
import {
  saveNewVeterinario,
  getListVeterinario,
  updateVeterinarioOne,
  deleteVeterinarioOne,
  getVeterinarioOne,
} from "./veterinarioSlice";

export const startNewVeterinario = (veterinario) => async (dispatch) => {
  try {
    const data  = await createVeterinario(veterinario);
    console.log(data);
    dispatch(saveNewVeterinario(data));
  } catch (error) {
    console.log(error);
  }
};

export const getListVeterinarios = () => async (dispatch) => {
  try {
    const response = await getAllVeterinario();
    if (response === '') {
      console.log("response null", response);
      dispatch(getListVeterinario({ data: [], message: "No hay datos" }));
    } else {
      console.log("response", response);
      dispatch(
        getListVeterinario({ data: response, message: "Datos correctos" })
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export const getVeterinarioA = (id) => async (dispatch) => {
  try {
    const  data  = await getVeterinario(id);
    console.log(data);
    dispatch(getVeterinarioOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startUpdateVeterinario = (veterinario) => async (dispatch) => {
  try {
    const data = await updateVeterinario(veterinario, veterinario.id);
    console.log(data);
    dispatch(updateVeterinarioOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startDeleteVeterinario = (id) => async (dispatch) => {
  try {
    const data = await deleteVeterinario(id);
    console.log(data);
    dispatch(deleteVeterinarioOne(id));
  } catch (error) {
    console.log(error);
  }
};
