import {object, string} from "yup";

export default object({
    destination: string().required("Destination required"),
});