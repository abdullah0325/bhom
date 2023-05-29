// import Image from 'next/image'
// import Card from "../../component/card";

// export default function Home() {
//   return (
//     <div>
//       <h1>
//       my teacher is blal
//       </h1>
//       <p>
//         pakistan
//       </p>
//       <Card/>
//       </div>
    
//   )
// }
import Image from 'next/image';
import Card from '../../component/Card';
import Nav from '../../component/nav';
import Link from "next/link";

export default function Home() {
  let a= "this is pakistan";
  return (
    
    <div>
      <Nav/>
      
      <h1>{a}</h1>
      <h1>My teacher is blal</h1>
      <p>Pakistan</p>
      <Card />
    </div>
  );
}

