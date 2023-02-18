import Advantages from "./advantages";
import QuickRoute from "./quickRoute";
import ShopByCategory from "./shopByCategory";
import ShopNow from "./shopNow";
import Slider from "./slider";
import BestSelling from "./bestSelling";
import FeaturedProducts from "./featuredProducts";
import Footer from "./footer";

const TommyBody = ({imagesData}) => {
  return (
    <div>
    {imagesData.length === 0 ? 'Loading' : (
      
      <div className="tommybody">
        <QuickRoute />
        <Slider imagesData= {imagesData} />
        <Advantages />
        <ShopNow imagesData={imagesData}/>
        <ShopByCategory imagesData={imagesData} />
        <BestSelling imagesData={imagesData}/>
        <FeaturedProducts imagesData={imagesData}/>
        <Footer />
      </div>
    )
  }
      </div>
  )
};

export default TommyBody;
