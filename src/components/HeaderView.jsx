import { useLocation } from 'react-router-dom'

function HeaderView() {
  const location = useLocation();
  let actPath = location.pathname;
  if(actPath === "/"){
    actPath = "Dashboard"
  }else{
    const path = actPath.replace("/","");
    const uppercasePath = path.charAt(0).toUpperCase();
    actPath = uppercasePath + path.slice(1);

  }
  console.log(actPath);
  
  return actPath;
}

export default HeaderView