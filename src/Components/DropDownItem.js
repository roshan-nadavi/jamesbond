import React from 'react'

function DropDownItem(props)
{
    let a = props.name;
    return <option value = {a} className="drop">{a}</option>
}

export default DropDownItem;