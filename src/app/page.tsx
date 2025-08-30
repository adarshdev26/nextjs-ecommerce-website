import Herosection from "@/sections/Herosection";
import CardSection from "@/sections/CardSection";
import Whyus from "@/sections/Whyus";
import Reality from "@/sections/RealitySection";
import Blogs from "@/sections/Blogsection";
import GetPerfect from "@/sections/GetPerfect";

export default function Home() {
  return (
    <div className=" ">
     <Herosection />
     <CardSection />
     <Whyus />
     <Reality />
     <Blogs />
     <GetPerfect/>
    </div>
  );
}
