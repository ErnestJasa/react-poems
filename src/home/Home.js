import Search from "../search/Search";
import {useEffect, useState} from "react";
import Poem from "../poem/Poem";

const Home = ()=>{
    const [poems, setPoems] = useState()
    const [searchTerm,setSearchTerm ] = useState({
        category:'',
        search:''
    });
    const [loading, setLoading] = useState(true);

    const handleSearch = (term)=>{
        setSearchTerm(term)
    }

    useEffect(()=>{
        if(searchTerm){
        try{
            fetch(`https://poetrydb.org/${searchTerm.category}/${searchTerm.search}`)
                .then(response=>response.json())
                .then(data=>setPoems(data))
        }
        catch(msg){
            console.log(msg)
        }
        }
    },[searchTerm.category])
    console.log('is tevinio', searchTerm)

    console.log(poems)
// const checkLoad = ()=>{
//         if(poems)
// }


    return(
        <div>
                <Search searchFunction={handleSearch}/>
                <div>
                    {searchTerm.search  && poems?.map(poem =>
                        <Poem
                            title={poem.title}
                            author={poem.author}
                            lines={poem.lines}
                        />
                    )}
                </div>
        </div>
    )
}

export default Home