import {object, string} from "yup";

export default object({
    destination: string().url("Must be a valid url").required("Destination required"),
});