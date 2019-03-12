import React from 'react';

function Pricing() {
  
  calculatePrice() {
  
    let basePrice = project.basePrice;
  /*let materialPrice = project.materialList.map(material);*/
    let materialPrice = 10;
    
    if((basePrice > 0) && (basePrice != null)) {
      if(project.type === 2D ) {
        let h = project.height;
        let w = project.width;
        let sellPrice = (basePrice + materialPrice) + (h * w);
    }
  }
    return sellPrice;
  }
  
  
  
  
  
  
  return(
    <div>
      
    </div>
  );
}


export default Pricing;