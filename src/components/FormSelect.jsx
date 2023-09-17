const FormSelect = ({optionsArray, option, searchObj}) => {
  return (
    <div className="flex flex-col ">
        <label className="text-sm p-1 capitalize" htmlFor={option}>Select {option}</label>
        <select className="select select-sm select-secondary font-semibold border-gray-500" name={option} id={option} defaultValue={searchObj}>
            {optionsArray.map(val => <option key={val}>{val}</option>)}
        </select>
    </div>
  )
}
export default FormSelect