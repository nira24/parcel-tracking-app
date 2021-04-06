import Description from "../components/Description";


export default function Package(props) {
  const routerID = props.match.params.id;

  const parcel = props.data.filter((i) => i.id == routerID);

  return (
    <div className="package">
      <div className="body-container">
        <h1 className="h">{parcel.status}</h1>
        <hr />
        {parcel.map((i) => (
          <Description key={i.id} information={i} />
        ))}
      </div>
    </div>
  );
}
