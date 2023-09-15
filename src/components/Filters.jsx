import { useDispatch, useSelector } from "react-redux"
import { Form, Link } from "react-router-dom"
import { formatPrice } from "../utils";
import { changePrice } from "../features/filter/filterSlice";

const Filters = ({products, meta, searchObj}) => {
    const {min, max, filters: {price}} = useSelector((store) => store.filter)
    const dispatch = useDispatch()
    const {categories, companies} = meta
    const sortArray = ["a-z", "z-a", "high", "low"]
    
  return (
    <Form className="grid gap-y-8 gap-x-4 bg-[#181920] px-8 py-5 rounded-md sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* search */}
        <div className="flex flex-col ">
            <label htmlFor="search" className="text-sm p-1">Search Product</label>
            <input className="input input-secondary input-sm border-gray-500" type="search" name="search" id="search" defaultValue={searchObj.search}/>
        </div>
        {/* category */}
        <div className="flex flex-col ">
            <label className="text-sm p-1" htmlFor="category">Select Category</label>
            <select className="select select-sm select-secondary font-semibold border-gray-500" name="category" id="category" defaultValue={searchObj.category}>
                {categories.map(category => <option key={category}>{category}</option>)}
            </select>
        </div>
        {/* company */}
        <div className="flex flex-col ">
            <label className="text-sm p-1" htmlFor="company">Select Company</label>
            <select className="select select-sm select-secondary font-semibold border-gray-500" name="company" id="company" defaultValue={searchObj.company}>
                {companies.map(company => <option key={company}>{company}</option>)}
            </select>
        </div>
        {/* sort */}
        <div className="flex flex-col">
            <label className="text-sm p-1" htmlFor="sort">Sort By</label>
            <select className="select select-sm select-secondary font-semibold border-gray-500" name="order" id="sort" defaultValue={searchObj.order}>
                {sortArray.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
        {/* price */}
        <div className="flex flex-col ">
            <label htmlFor="price" className="text-sm p-1 flex justify-between"><span>Search Price</span><span className="text-base">{formatPrice(price)}</span></label>
            <input className="range range-secondary range-sm border-gray-500" type="range" name="price" id="price" min={min} max={max} value={price}  onChange={(e) => {
                dispatch(changePrice(parseInt(e.target.value)))
            }}/>
            <ul className="p-2 flex justify-between text-xs font-bold">
                <li>{min}</li>
                <li>Max: {formatPrice(max)}</li>
            </ul>
        </div>
        {/* shipping */}
        <div className="flex flex-col place-items-center">
            <p className="text-sm p-2">Free Shipping</p>
            <input className="checkbox checkbox-secondary checkbox-sm" type="checkbox" name="shipping" defaultChecked={searchObj.shipping}/>
        </div>
        {/* search button */}
        <div className="flex place-items-center">
            <button className="btn btn-secondary btn-sm btn-block" type="submit">search</button>
        </div>
        {/* reset button */}
        <div className="flex place-items-center">
            <Link to="/products" className="btn btn-block btn-sm bg-[#ffb261] text-gray-800">reset</Link>
        </div>
    </Form>
  )
}
export default Filters