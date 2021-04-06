
import Description from "../components/Description";

export default function Results(props) {
  const queryParcelId = props.match.params.id;
  const parcel = props.data.filter((i) => i.parcel_id == queryParcelId);


  console.log("parcel", parcel);
  return (
    <div>
      <hr />
      {parcel.length !== 0 ? (
        parcel.map((i) => <Description key={i.id} information={i} />)
      ) : (
        <h3 className="h3">
          Sorry! parcel id does not exist
        </h3>
      )}
    </div>
  );
}
