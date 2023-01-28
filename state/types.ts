enum GENDER {
  MALE,
  FEMALE,
}
interface Invitee {
  id: number;
  name: string;
  gender: GENDER;
}

export { GENDER, type Invitee };
