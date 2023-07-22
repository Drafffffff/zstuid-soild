// import { A } from "solid-start";
import "../../styles/course.css";
import { createPagination } from "@solid-primitives/pagination";
import { createEffect, For } from "solid-js";
import { A } from "@solidjs/router";

import {
  SubBanner,
  SubBannerProps,
  Title2,
  CourseWorksCard,
} from "~/components/compIndex";
import { useParams } from "solid-start";

export default function TeamsID() {
  const prams = useParams();
  const [paginationProps, page, setPage] = createPagination({
    pages: 20,
    maxPages: 8,
  });

  createEffect(() => {
    /* do something with */ page();
    console.log(page());
  });
  const subBannerData: SubBannerProps = {
    items: [
      { title: "首页", url: "/" },
      { title: "教学课程", url: "/course" },
      { title: "课程详情", url: "/teams/1", active: true },
    ],
    titles: {
      zh: "工业设计手绘" + prams.id,
      en: "COURSE",
    },
  };
  return (
    <main class="mx-auto ">
      <SubBanner items={subBannerData.items} titles={subBannerData.titles} />
      <div class="teamOverview con">
        <div class="heading">
          <Title2 zh={"课程介绍"} en={"course Introuction".toUpperCase()} />
          <div class="text t1">
            团队目前有专职教师19名，其中教授3名、副教授5名，博士11名（含在读），有海外留学访学经历的6人。享受国务院特殊津贴专家1名，浙江省151人才1名，浙江省学科带头人1名，浙江省优秀教师1名，浙江省教坛新秀1名，校教坛新秀3名，校“521计划”拔尖人才1名、骨干人才3名，金富春教学奖1名，五四青年奖章2名，华鼎奖教金3名，双高双强教师3名，由家具行业协会认定的首批全国家具十佳设计师1名。
          </div>
        </div>
        <div class="heading mt-[10rem]">
          <Title2 zh={"课程特点"} en={"course characteristics".toUpperCase()} />
          <div class="text t1">
            团队目前有专职教师19名，其中教授3名、副教授5名，博士11名（含在读），有海外留学访学经历的6人。享受国务院特殊津贴专家1名，浙江省151人才1名，浙江省学科带头人1名，浙江省优秀教师1名，浙江省教坛新秀1名，校教坛新秀3名，校“521计划”拔尖人才1名、骨干人才3名，金富春教学奖1名，五四青年奖章2名，华鼎奖教金3名，双高双强教师3名，由家具行业协会认定的首批全国家具十佳设计师1名。
          </div>
        </div>
      </div>
      <div class="courseDisp con bg-gray-100">
        <div class="heading">
          <Title2 zh={"课程展示"} en={"course display".toUpperCase()} />
        </div>
        <div class="disp mt-[5rem]">
          <CourseWorksCard />
          <CourseWorksCard />
          <CourseWorksCard />
          <CourseWorksCard />
          <CourseWorksCard />
          <CourseWorksCard />
          <CourseWorksCard />
          <CourseWorksCard />
          <CourseWorksCard />
        </div>
        <nav class="pagination t4 font-light text-gray-400 my-[8rem] sm:mt-[10rem] select-none">
          <ul>
            <For each={paginationProps()}>
              {(props: any) => (
                <li>
                  <A
                    href={`?page=${props.page}`}
                    {...props}
                    class={
                      page() === props.page ? "font-bold gradient-text" : ""
                    }
                  ></A>
                </li>
              )}
            </For>
          </ul>
        </nav>
      </div>
    </main>
  );
}
