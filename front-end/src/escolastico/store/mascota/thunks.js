import {
  deleteMascota,
  getAllMascota,
  getMascota,
  createMascota,
  updateMascota,
} from "../../services/mascotaService";
import {
  saveNewMascota,
  getListMascota,
  updateMascotaOne,
  deleteMascotaOne,
  getMascotaOne,
} from "./mascotaSlice";

export const startNewMascota = (mascota) => async (dispatch) => {
  try {
    const data  = await createMascota(mascota);
    console.log(data);
    dispatch(saveNewMascota(data));
  } catch (error) {
    console.log(error);
  }
};

export const getListMascotas = () => async (dispatch) => {
  try {
    const response = await getAllMascota();
    if (response === '') {
      console.log("response null", response);
      dispatch(getListMascota({ data: [], message: "No hay datos" }));
    } else {
      console.log("response", response);
      dispatch(
        getListMascota({ data: response, message: "Datos correctos" })
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export const getMascotaA = (id) => async (dispatch) => {
  try {
    const  data  = await getMascota(id);
    console.log(data);
    dispatch(getMascotaOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startUpdateMascota = (mascota) => async (dispatch) => {
  try {
    const data = await updateMascota(mascota, mascota.id);
    console.log(data);
    dispatch(updateMascotaOne(data));
  } catch (error) {
    console.log(error);
  }
};

export const startDeleteMascota = (id) => async (dispatch) => {
  try {
    const data = await deleteMascota(id);
    console.log(data);
    dispatch(deleteMascotaOne(id));
  } catch (error) {
    console.log(error);
  }
};
