import { Modality } from 'src/enums/Modality';

export default interface SignUpInputs {
    location: string;
    modality: Modality;
    canMove: boolean;
}