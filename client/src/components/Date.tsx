
import moment from "moment";
const Date = () => {
  return (
    <div className="font-nexa font-semibold text-lg">
      {moment().format("DD MMMM, YYYY")}
    </div>
  );
};

export default Date;
