import {useState} from "react";


const Search = (props)=>{
    const [selection, setSelection] = useState('');
    const [term, setTerm] = useState();

    const changeSelection = (newSelection)=>{
        setSelection(newSelection)
    }
    const handleChange = (e) =>{
            setTerm(e.target.value)
    }
    //console.log(selection)
  //  console.log("is search " +term)

    const submitHandler = (e)=>{
        e.preventDefault();
        props.searchFunction({
            category: selection,
            search: term
        })
    }
    return(
        <div className="container">
            <form>
                <select className='p-2 mb-2' onChange={(event)=>changeSelection(event.target.value)} value={selection}>
                    <option>Select</option>
                    <option value="author">Search by author</option>
                    <option value="lines">Search by lines</option>
                    <option value="title">Search by title</option>
                </select>
            </form>
            <div>
                <form onSubmit={submitHandler}>
                    <input onChange={handleChange} type="text"/>
                    <button type='submit'>Ieskoti</button>
                </form>
            </div>
        </div>
    )
}

export default  Search