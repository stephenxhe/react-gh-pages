import { useEffect, useState } from "react";

const OffsetText = (props) => {
    const [text, setText] = useState(props.text);
    const [offsets, setOffsets] = useState(props.offsets);

    useEffect(() => {
        setOffsets(props.offsets);
    }, [props.offsets])

    useEffect(() => {
        setOffsets(props.text);
    }, [props.text])

    return (
        <>
        {
            text.map((x, i) => 
                <p key={i} style={{marginLeft: offsets[i]}}>{x}</p>
            )
        }
        </>
    )
}

export default OffsetText;