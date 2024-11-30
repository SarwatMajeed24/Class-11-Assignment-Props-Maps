import ChildComponent from "./ChildComponent"
import FooterComponent from "./Footer"
import HeaderComponent from "./Header"

const ParentComponent = () => {
    const carDetails = [
        {carName: "Suzuki Alto", carPrice: "PKR 23.3 - 30.5 lacs", carImage:"/image/Suzuki_Alto_-_PNG.png"},
        {carName: "Toyota Corolla", carPrice: "PKR 59.7 - 75.5 lacs", carImage:"/image/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg"},
        {carName: "Honda City", carPrice: "PKR 46.5 - 58.5 lacs", carImage:"/image/Honda_City_Front.jpg"},
        {carName: "Honda Civics", carPrice: "PKR 86.6 - 99.0 lacs", carImage:"/image/Honda-Civics.jpg"}
    ]
    return(           
         <div>
             <div className="bg-slate-600">
                {/* Header Section */}
                    <HeaderComponent title="Assignment of Class 11 about props and map function"/>
                    </div> 

                 {/* Car Details Section */}  
               <div className="flex flex-col items-center justify-between bg-slate-200">
                  <h1  className="text-4xl font-extrabold text-blue-500 mb-2 mt-16">Featured New Cars</h1>
       
        <div className="flex flex-wrap justify-center gap-6 bg-slate-200 min-h-screen">{
            carDetails.map ((car, index) => {
                return (
                   <div 
                     key={index}
                    className="flex flex-col items-center border border-gray-300 rounded-lg p-4 shadow-md w-[300px] h-[350px] mb-24 mt-32 bg-green-600">
                    <ChildComponent
                        cName = {car.carName}
                        cPrice= {car.carPrice}
                        cImage= {car.carImage}
                        />
                    </div>
                )
            }
            
         )
            
       } 
     </div>   
            <div className="bg-slate-400 w-full">
                  {/* Footer Section */}
               <FooterComponent message="© 2024 Sarwat Majeed. All rights reserved." />  
               </div>
              </div>     
             </div> 
      )
}
export default ParentComponent
