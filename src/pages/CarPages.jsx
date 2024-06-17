// // import lixiangLi7 from "../../public/lixiangLi7.mp4";
// import { useParams } from "react-router-dom";
// import { cardInfo } from "../utils/constants/constants";

// export const CarPages = () => {
//   let { name } = useParams();
//   const selectedCar = cardInfo.filter((e) => e.id === name);

//   return (
//     <div>
//       {
//         selectedCar.map((selectCar) => {
//           console.log(selectCar, "mmm");

//           return (
//             <section
//               className="relative h-screen w-full flex justify-center items-center"
//               key={selectCar.id}
//             >
//               <p className="mt-[300px]">{selectCar.title}</p>
//               <p>{selectCar.desc}</p>
//               {/* Rest of your code */}
//             </section>
//           );
//         })
//         //   }
//       }
//     </div>
//   );
// };
