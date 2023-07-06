
import Home from '@/components/Home';
import Product from '@/components/Product';
import Sports from '@/components/Sports';
import Roadmap from '@/components/Roadmap';
import Team from '@/components/Team';
import WaitList from '@/components/WaitList';

export default function Mainpage() {

  return (
      <div  className="Main">
        <div id="home" className=" First" > </div>
        <Home/>
        <span id="product" className="Anchor"> </span>
        <Product/>
        <span id="sports" className="Anchor"> </span>
        <Sports/>
        <span id="roadmap" className="Anchor"> </span>
        <Roadmap/>
        <span id="team" className="Anchor"> </span>
        <Team/>
        <span id="waitlist" className="Anchor"> </span>
        <WaitList/>
      </div>
  );
};
