// create your App component here
import react,{useState, useEffect} from "react";

function App(){

    const[image,setImage]=useState();
    const[loading,setLoading]=useState();
    useEffect(() => {
        setLoading(true);
        fetch("https://dog.ceo/api/breeds/image/random")
          .then(response => response.json())
          .then(data => {
            setImage(data.message);
            setLoading(false);
          });
      }, []);
    
    return(
        <div>
        {loading ? <p>Loading...</p> : <img src={image} alt="A Random Dog" />}
      </div>
        
    )
}
export default App;
