import '../styling/MasonHeader.css'
import Typewriter from 'typewriter-effect';


function MasonHeader () {


return (
  <div className="MasonHeader">
    <div className="grid-container">
      <div className="item-a">
    // Hello -------------------------------------------------------------------------------------------------------------------
      </div>

      <div className="item-b">
        Put a picture or a logo or some ASCII here for chrissake 
      </div>

  {/* maybe have this be under an about us? prompt and have it appear as a cool typed text.  */}
      
      <div className="item-c">
        <Typewriter
          
          onInit={(typewriter) => {

          typewriter.changeDelay(50)  
          .typeString(`Welcome to the BYTE MASONS HQ. We are a development team which has a passion for the blockchain, programming and security. We strive to build good, strong, structurally sound and safe applications.`)
          
          .start();
          
        
    }}
  />
    
        {/* Welcome to the BYTE MASONS HQ. We are a development team which has a passion for the blockchain, 
        programming and security. We strive to build good, strong, structurally sound and safe applications.  */}
      </div>
    </div>
  </div>
)

}


export default MasonHeader;