export interface IUserRole {
  setUserRole: (value: string) => void;
  userRole: string;
}


export interface IDoctorSubmitData {
  userRole: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
  direction: string;
  workPlace: string;
  password: string;
}

export interface IPatientSubmitData {
  userRole: string;
  name: string;
  lastName: string;
  birthday: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  photo: string
}