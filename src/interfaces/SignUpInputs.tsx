import { Modality } from 'src/enums/Modality';
import { StudiesType } from 'src/enums/StudiesType';

export default interface SignUpInputs {
    location: string;
    modality: Modality;
    canMove: boolean;
    studiesType: StudiesType
}