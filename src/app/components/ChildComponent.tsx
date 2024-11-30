import Image from "next/image"
const ChildComponent = (props: any) => {
 return (
    <div className="flex flex-col items-center">        
        <Image
        src={props.cImage}
        alt={props.carName}
        width={300}
        height={200} 
        className="rounded-md"
        />
        <h1 className="text-3xl font-extrabold mt-4 text-blue-900">{props.cName}</h1>
        <h1 className="text-lg text-black font-extrabold mt-2">{props.cPrice}</h1>
    </div>
 )
}

export default ChildComponent