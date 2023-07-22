// import { A } from "solid-start";
import "../../styles/teams.css";

import {
  SubBanner,
  SubBannerProps,
  Title2,
  ResearchItem,
  PeopleCard,
  Resultcard,
  Title1,
  ResultcardSM,
} from "~/components/compIndex";
import { useParams } from "solid-start";

export default function TeamsID() {
  const prams = useParams();
  const subBannerData: SubBannerProps = {
    items: [
      { title: "首页", url: "/" },
      { title: "团队", url: "/teams" },
      { title: "智能交互与服务", url: "/teams/1", active: true },
    ],
    titles: {
      zh: "智能交互与服务" + prams.id,
      en: "INTERACTION & SERVICE",
    },
  };
  return (
    <main class="mx-auto ">
      <SubBanner items={subBannerData.items} titles={subBannerData.titles} />
      <div class="teamOverview con">
        <div class="heading">
          <Title2 zh={"方向介绍"} en={"Direction intro".toUpperCase()} />
          <div class="text t1">
            <div>
              团队目前有专职教师19名，其中教授3名、副教授5名，博士11名（含在读），有海外留学访学经历的6人。享受国务院特殊津贴专家1名，浙江省151人才1名，浙江省学科带头人1名，浙江省优秀教师1名，浙江省教坛新秀1名，校教坛新秀3名，校“521计划”拔尖人才1名、骨干人才3名，金富春教学奖1名，五四青年奖章2名，华鼎奖教金3名，双高双强教师3名，由家具行业协会认定的首批全国家具十佳设计师1名。
            </div>
            <div class="mt-10">
              团队目前有专职教师19名，其中教授3名、副教授5名，博士11名（含在读），有海外留学访学经历的6人。享受国务院特殊津贴专家1名，浙江省151人才1名，浙江省学科带头人1名，浙江省优秀教师1名，浙江省教坛新秀1名，校教坛新秀3名，校“521计划”拔尖人才1名、骨干人才3名，金富春教学奖1名，五四青年奖章2名，华鼎奖教金3名，双高双强教师3名，由家具行业协会认定的首批全国家具十佳设计师1名。
            </div>
          </div>
        </div>
        <div>
          <img class="w-full" src="/tmp/5.png" alt="" />
        </div>
      </div>
      <div class="peoples con bg-gray-100">
        <Title2 zh={"人员架构"} en={"Personnel structure".toUpperCase()} />
        <div class="peopleDetail mt-[5rem]">
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
        </div>
      </div>
      <div class="results con">
        <Title2 zh={"具体成果"} en={"Concrete results".toUpperCase()} />
        <div class="resultsItem mt-[8rem] ">
          <div class="left sm:flex-5">
            <Resultcard />
            <Resultcard />
          </div>
          <div class="right hidden sm:block ml-[10rem]">
            <p class="t5 font-bold gradient-text"> 更多成果</p>
            <ResultcardSM />
            <ResultcardSM />
            <ResultcardSM />
          </div>
        </div>
      </div>
    </main>
  );
}
