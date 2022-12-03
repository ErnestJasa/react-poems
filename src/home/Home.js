import Search from "../search/Search";
import {useEffect, useState} from "react";
import Poem from "../poem/Poem";

const Home = ()=>{
    const [poems, setPoems] = useState()
    const [searchTerm,setSearchTerm ] = useState({
        category:'',
        search:''
    });

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
    },[searchTerm])
    console.log('is tevinio', searchTerm)

    console.log(poems)
    const check = ()=>{
        if(searchTerm.search){
            if(poems){
                if(Array.isArray(poems)){
                    return (
                        <div className='row'>
                            {poems.map(poem =>
                                <Poem
                                    title={poem.title}
                                    author={poem.author}
                                    lines={poem.lines}
                                />)}
                        </div>
                    )
                }else{
                    return (<>
                            <p>Nerasta</p>
                        </>
                    )
                }
            }else{
                return (<>
                    <p>Loading...</p>
                </>)
            }
        }
}


    return(
        <div>
                <Search searchFunction={handleSearch}/>
                {/*<div>*/}
                {/*    {searchTerm.search  && poems?.map(poem =>*/}
                {/*        <Poem*/}
                {/*            title={poem.title}*/}
                {/*            author={poem.author}*/}
                {/*            lines={poem.lines}*/}
                {/*        />*/}
                {/*    )}*/}
                {/*</div>*/}
            {check()}
        </div>
    )
}

export default Home