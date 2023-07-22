import { A } from "solid-start";
import {
  SubBanner,
  SubBannerProps,
  Title2,
  ResearchItem,
  CourseResultCard,
  GraWorkCard,
} from "~/components/compIndex";
import "../../styles/graduation.css";

import { createPagination } from "@solid-primitives/pagination";
import { For } from "solid-js";

export default function Home() {
  const [paginationProps, page, setPage] = createPagination({
    pages: 20,
    maxPages: 8,
  });
  const subBannerData: SubBannerProps = {
    items: [
      { title: "首页", url: "/" },
      { title: "毕业展", url: "/graduation", active: true },
    ],
    titles: {
      zh: "毕业展",
      en: "Graduation exhibition".toUpperCase(),
    },
  };
  return (
    <main class="mx-auto">
      <SubBanner items={subBannerData.items} titles={subBannerData.titles} />
      <div class="teamOverview con py-[2rem]">
        <div class="years t5 font-light text-gray-400 mb-[6rem]">
          <span class="active">2022</span>
          <span>2021</span>
          <span>2020</span>
          <span>2019</span>
        </div>
        <div class="heading">
          <Title2 zh={"序言"} en={"PREAMBLE".toUpperCase()} />
          <div class="text t1 mt-12">
            全球疫情影响全球各项展览活动基本停摆，人群密集的展会、博物馆、美术馆等受到不同程度的冲击。基于网络空间增设或者重构展品数据信息，抑或强化互联渠道，透过丰富的交互媒介形态，为展品资源拓宽层次丰富、不受时空限制的虚拟线上观看体验。
            随着云计算技术高度发展，云平台作为一种新型信息技术环境，其具备了多元化的展现形式、即时的互动沟通性能、开放的信息资源共享等特点，成为用户获取信息资源、建立人际关系、获得情感归属、体现自我价值的重要平台。虚拟展馆就是利用计算机图形学的技术构建的数字化展览馆，是一种三维互动体验方式，以传统展馆为基
            础，利用虚拟技术将展馆及其陈列品移植到互联网上进行展示、宣传与教育活动，突破了传统意义上的时间与空间的局限。
            本次办展主题为“交织视界” 从狭义上解释：
            <br />
            <br />
            视觉：物体的影像刺激眼睛所产生的感觉
            ；交错：侧重错杂的交叠，通用语各种文体；交织：侧重于错综的复杂性，有一定的形象色彩；视觉特征：有层次的形象色彩
            从广义上解释：
            <br />
            <br />
            万物互联，旨在以视觉作为信息接收的窗口，能映照世间万物的关系，陌生感和以往存在于脑海之中的想象之间的纠缠，真
            实和虚构像潮水一样交错生长。物与人的视线交错，使设计变得立体，以同样的境遇来反思自我，反思自身在社
            会中的处境以及与他人和自然的关系，展品成为自己的镜子。
          </div>
        </div>
        <div class="imgs sm:mt-[10rem] mt-[5rem]">
          <img src="/gra.png" />
        </div>
      </div>
      <div class="onlineExb con gradient-line">
        <div class="title">
          <div class="t6 font-bold text-white">线上毕业展入口</div>
          <div class="t4 text-white">
            {"Online graduation exhibition".toUpperCase()}
          </div>
        </div>
        <div class="entry">
          <div class="item one">
            <div class="entryLink text-white ">
              <div class="text ">
                <div class="t3 font-bold">线上毕业展路线一</div>
                <div class="t1 mt-5 text-gray-100">
                  路线介绍路线介绍路线介绍路线介绍路线介绍路线介绍路线介绍路线介绍路线介绍路线介绍路线介绍路线介绍路线
                </div>
              </div>
              <div class="arrow mb-10 ml-[3rem]">
                <img src="/tmp/arrow.png" class="w-20" alt="" />
              </div>
            </div>
          </div>
          <div class="item two"></div>
          <div class="item three"></div>
        </div>
      </div>
      <div class="exbWorks con">
        <Title2 zh={"毕业设计"} en={"Graduation Design".toUpperCase()} />
        <div class="works sm:mt-[10rem] mt-[3rem] grid grid-cols-2 gap-8">
          <GraWorkCard />
          <GraWorkCard />
          <GraWorkCard />
          <GraWorkCard />
          <GraWorkCard />
          <GraWorkCard />
          <GraWorkCard />
          <GraWorkCard />
          <GraWorkCard />
        </div>

        <nav class="pagination t4 font-light text-gray-400 my-[5rem] sm:mt-[10rem] select-none">
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
