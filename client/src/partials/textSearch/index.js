import React,{useState} from 'react';

const TextSearch = ({filterHandler}) => {
    const [search,setSearch] = useState('')
    const handleForm =(e)=>{
        e.preventDefault()
        filterHandler(search,'name')
    }
    return (
        <form className="textSearch" onSubmit={handleForm}>
        <input className="textInput" value={search} onChange={(e)=>setSearch(e.target.value)} type="text" name="search" />
        <input type="submit" value=" Search"/>            
        </form>
    );
};

export default TextSearch;