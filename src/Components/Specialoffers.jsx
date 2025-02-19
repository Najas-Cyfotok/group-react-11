import Cart1 from "../assets/Deals/Deals1.webp"
import Cart2 from "../assets/Deals/Deals2.webp"
import Cart3 from "../assets/Deals/Deals3.webp"
import Cart4 from "../assets/Deals/Deals4.webp"
import Cart5 from "../assets/Deals/Deals5.webp"
import Cart6 from "../assets/Deals/Deals6.webp"
import Cart7 from "../assets/Deals/Deals7.webp"
import Cart8 from "../assets/Deals/Deals8.webp"

const Specialoffers = () => {
  return (
    <section className="mt-14">
      <h2 className=" mb-14 lg:ml-5 max-sm:mx-10 font-bold lg:text-2xl max-sm:text-lg text-wrap max-sm:text-center ">B I G G E S T <span className="ml-3">D E A L S </span> <span className="ml-3">O N</span> <span className="ml-3">T O P</span>   <span className="ml-3 max-sm:te">  B R A N D S</span></h2>
      <div  className="lg:grid lg:grid-cols-4 lg:ml-14 max-sm:mx-10">
        <img src={Cart1} alt="" />
        <img src={Cart2} alt="" />
        <img src={Cart3} alt="" /> 
        <img src={Cart4} alt="" />
        <img src={Cart5} alt="" />
        <img src={Cart6} alt="" />
        <img src={Cart7} alt="" />
        <img src={Cart8} alt="" />
      </div>
    </section>
  )
}

export default Specialoffers

// const image = [
//   {
//     id:1,
//     image : Cart1
//   }
// ]