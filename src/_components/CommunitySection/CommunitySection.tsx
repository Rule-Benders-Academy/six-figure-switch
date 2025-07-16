import CommunityBanner from "../CommunityBanner/CommunityBanner";
import MemberCard from "../MemberCard/MemberCard";
import CardImg1 from "../../_assets/community-card-1.png"
import CardImg2 from "../../_assets/community-card-2.png"
import CardImg3 from "../../_assets/community-card-3.png"
import CardImg4 from "../../_assets/community-card-4.png"


const CommunitySection = () => {
  return (
    <div className="space-y-16 py-10 px-4 md:px-16" id="community">
      <CommunityBanner />

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto" id="courses">
        <MemberCard
          name="David Hunt"
          role="Programme Manager"
          imageSrc={CardImg1}
        />
        <MemberCard
          name="Brittany Dowell"
          role="Head of Customer Transactions"
          imageSrc={CardImg2}
        />
        <MemberCard
          name="Matt White"
          role="PMO Manager"
          imageSrc={CardImg3}
        />
        <MemberCard
          name="Catrina Knight"
          role="Business Analyst"
          imageSrc={CardImg4}
        />
      </div>
    </div>
  );
};

export default CommunitySection;
