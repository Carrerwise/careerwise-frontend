import Aptitudes from "./Aptitudes";
import Career from "./Careers";
import Interests from "./Interests";

export default interface ResultData {
    interests: Interests;
    aptitudes: Aptitudes;
    careers: Career[];
}