import validator from 'validator';

const validate = {
  isEmpty : (e)=>{
      if(validator.isEmpty(e)){
        return true
      }
        return false
  }, 
  isEmail:(e)=>{
      if(!validator.isEmail(e.toString())){
        return false;
      }
      return true;
  },
  isMatch:(password,e)=>{
      if(!validator.equals(password, e)){
        return false;
      }
      return true;
  }, 
  
  isNatId:(e)=>{

  }, 
  isNatIdYear:(e)=>{
  var s = e.substring(0, 1);
  var r = e.substring(1, 3);
  var g = e.substring(3, 5);
  var t = e.substring(5, 7);
  if (2 == parseInt(s)) {return true}
  else if(3 != parseInt(s)){ return false}

  },
  isNatIdDate:(e)=>{
  var s = e.substring(0, 1);
  var r = e.substring(1, 3);
  var g = e.substring(3, 5);
  var t = e.substring(5, 7);
  r = "19" + r;
  var _ = Date.parse(r + "-" + g + "-" + t);
    if(isNaN(_)){
      return false
    }
    return true
  },
  isNatGovernate :(e)=>{
    var result;
    switch(e.substring(7, 9)){
      case "01":
          result = true;
          break;
      case "02":
        result = true;
          break;
      case "03":
        result = true;
          break;
      case "04":
        result = true;
          break;
      case "06":
        result = true;
          break;
      case "11":
        result = true;
          break;
      case "12":
        result = true;
          break;
      case "13":
        result = true;
          break;
      case "14":
        result = true;
          break;
      case "15":
        result = true;
          break;
      case "16":
        result = true;
          break;
      case "17":
        result = true;
          break;
      case "18":
        result = true;
          break;
      case "19":
        result = true;
          break;
      case "21":
        result = true;
          break;
      case "22":
        result = true;
          break;
      case "23":
        result = true;
          break;
      case "24":
        result = true;
          break;
      case "25":
        result = true;
          break;
      case "26":
        result = true;
          break;
      case "27":
        result = true;
          break;
      case "28":
        result = true;
          break;
      case "29":
        result = true;
          break;
      case "31":
        result = true;
          break;
      case "32":
        result = true;
          break;
      case "33":
        result = true;
          break;
      case "34":
        result = true;
          break;
      case "35":
        result = true;
          break;
      case "88":
        result = true;
          break;
      default:
          return result = false
    }
    return result
  }
}

export default validate