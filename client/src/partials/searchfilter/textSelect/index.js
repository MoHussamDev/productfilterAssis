import React, { useEffect,useState ,useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";
import { CheckerContext } from "../../../helpers/checkerContext";



;
const customStyles = {
  container:(state)=>({
    ...state,
   width:"70%"
  }),
  control: () => ({
    width: '100%',
    display:'flex',
    borderRight:'0',
    padding:"0",
    height:'30px'
  }),
  valueContainer:(state)=>({
    ...state,
    padding:"0",
    width:'100%',
    borderLeft:'1px solid #7ed6df',
    borderTop:'1px solid #7ed6df',
    borderBottom:'1px solid #7ed6df',
    
  }),
  indicatorSeparator:()=>({
    display:'none'
  }),
  indicatorsContainer:()=>({
    borderRight:'1px solid #7ed6df',
    borderTop:'1px solid #7ed6df',
    borderBottom:'1px solid #7ed6df',
    height:'30px',
    padding:'0'
    
  }),
  dropdownIndicator:()=>({
    height:'30px',
    color:'#7ed6df',
    display:'none'
    
  }),
  input:()=>({
    fontSize:'12px',
    height:'30px',
    lineHeight:'30px',
    paddingLeft:'5px',
    width:"100%",
  }),
  placeholder:(state)=>({
    ...state,
    fontSize:'12px',
    height:'30px',
    display:'flex',
    alignItems:'center',
    paddingLeft:'5px',
  }),
  menu:(state)=>({
    ...state,
    borderRadius:'0'

  }),
  menuList:(state)=>({
    ...state,
  }),
  option:(provided , state)=>({
    ...provided,
    height:'2rem',
    fontSize:'12px',
    paddingLeft:'10px',
  }),
  noOptionsMessage:(state)=>({
    ...state,
    fontSize:'12px'


  }),
  singleValue:(state)=>({
    ...state,
    fontSize:'12px',
    paddingLeft:'5px'
  })
}

const TextSelect = (props) => {

let [options,setOptions] = useState([])
let [selected,setSelected] = useState({value:'', label:''})
const { handler, state } = useContext(CheckerContext);
useEffect(()=>{
  let ignore =false 
  if(!ignore){
    let newOptions = [...options];
    props.inputs.map((i,key)=> {
      return newOptions.push( { value: i._id, label: i.code },)
    })
    setOptions(newOptions)

  }
  return ()=> ignore = true

},[])

const handleSubmit= (e)=>{
e.preventDefault()
if(selected.value){
  handler(selected.value);
}
}

  return (
    <form className="textSearch noPadding" onSubmit={handleSubmit} >
    <Select
        defaultValue={selected}
         styles={customStyles}
         placeholder="50_APRIL20..."
         options={options}
         onChange={(e)=>setSelected(e)}
         theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: '#7ed6df',
            primary: '#7ed6df',

          },
        })}
         />
    <input type="submit" value=" Search"/>            
    </form>
      
    
  );
};

export default TextSelect;
