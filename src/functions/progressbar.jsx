import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBarComponent(props) {

    const progress = {

        height: "1rem",
        fontSize: "0.75rem",
        backgroundColor: "#e9ecef",
        borderRadius: "0.375rem"
      };

      const progressBar = {
        display: "flex",
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "center",
        color: "#ffffff",
        textAlign: "center",
        whiteSpace: "nowrap",
        backgroundColor: "#0d6efd",
        transition: "width 0.6s ease"
      };
      
//   return <ProgressBar now={now} label={`${now}%`} />;
return (
    <div className="progress" style={progress}>
        <div role="progressbar" className="progress-bar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={progressBar}>{props.stockleft}</div>
    </div>
)
}

export default ProgressBarComponent;