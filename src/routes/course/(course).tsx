import { A } from "solid-start";
import {
  SubBanner,
  SubBannerProps,
  Title2,
  ResearchItem,
  CourseResultCard,
} from "~/components/compIndex";
import "../../styles/course.css";

export default function Home() {
  const subBannerData: SubBannerProps = {
    items: [
      { title: "首页", url: "/" },
      { title: "教学课程", url: "/course", active: true },
    ],
    titles: {
      zh: "教学课程",
      en: "COURSE",
    },
  };
  return (
    <main class="mx-auto">
      <SubBanner items={subBannerData.items} titles={subBannerData.titles} />
      <div class="teamOverview con py-[2rem]">
        <div class="heading">
          <Title2 zh={"课程总述"} en={"Course Introduciton".toUpperCase()} />
          <div class="text t1">
            团队目前有专职教师19名，其中教授3名、副教授5名，博士11名（含在读），有海外留学访学经历的6人。享受国务院特殊津贴专家1名，浙江省151人才1名，浙江省学科带头人1名，浙江省优秀教师1名，浙江省教坛新秀1名，校教坛新秀3名，校“521计划”拔尖人才1名、骨干人才3名，金富春教学奖1名，五四青年奖章2名，华鼎奖教金3名，双高双强教师3名，由家具行业协会认定的首批全国家具十佳设计师1名。
          </div>
        </div>
        <div class="imgs">
          <img src="/tmp/3.png" />
        </div>
      </div>
      <div class="courseShow con bg-gray-100">
        <Title2 zh={"成果展示"} en={"Results".toUpperCase()} />
        <div class="items mt-[3rem]">
          <CourseResultCard />
          <CourseResultCard />
          <CourseResultCard />
          <CourseResultCard />
          <CourseResultCard />
        </div>
      </div>
    </main>
  );
}
