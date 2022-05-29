import Audio from "./Audio";

/*___________________________________________________________________________________*/

const AudioType = (props) => {
  return (
    <>
      {props.sections.map((section, idx) => {
        const mainTypeIndex = props.data.findIndex(
          (obj) => obj.mainType === props.mainType
        );
        return (
          <div
            key={idx}
            className="mt-5 p-4 d-flex flex-column gap-4 border rounded-3"
            style={{ width: "360px" }}
          >
            <h3 className="text-center">{section.type}</h3>
            <ul>
              {section.audios.map((audio, id) => (
                <Audio
                  key={id}
                  rateId={id}
                  name={audio.name}
                  file={audio.audio}
                  data={props.data}
                  setData={props.setData}
                  mainTypeIndex={mainTypeIndex}
                  sectionId={idx}
                />
              ))}
              <textarea
                rows={4}
                className="w-100 p-2"
                placeholder="Comment Section"
                value={props.data[mainTypeIndex].sections[idx].comment}
                onChange={(e) => {
                  let arr = [...props.data];
                  arr[mainTypeIndex].sections[idx].comment =
                    e.currentTarget.value;
                  props.setData(arr);
                }}
              ></textarea>
            </ul>
          </div>
        );
      })}
    </>
  );
};
export default AudioType;

/*___________________________________________________________________________________*/
