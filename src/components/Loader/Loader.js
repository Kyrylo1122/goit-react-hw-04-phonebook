import { CirclesWithBar } from 'react-loader-spinner';
import './Loader.css';
export default function Loader() {
  return (
    <div className="backdrop">
      <div className="loader__container">
        <CirclesWithBar
          height="300"
          width="300"
          color="#07c"
          wrapperClass="loader"
          visible={true}
          outerCircleColor="#07c"
          innerCircleColor="#07c"
          barColor="#07c"
          ariaLabel="circles-with-bar-loading"
        />
      </div>
    </div>
  );
}
