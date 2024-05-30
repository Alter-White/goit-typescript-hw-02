import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#3846ad"
        secondaryColor="#3846ad"
        ariaLabel="oval-loading"
        wrapperStyle={{ justifyContent: "center" }}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
