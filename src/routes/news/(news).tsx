import { A } from "solid-start";
import "../../styles/news.css";
import {
  SubBanner,
  SubBannerProps,
  Title2,
  ResearchItem,
  CourseResultCard,
  NewsCard,
} from "~/components/compIndex";
import { createPagination } from "@solid-primitives/pagination";
import { createEffect, For } from "solid-js";
export default function Home() {
  const subBannerData: SubBannerProps = {
    items: [
      { title: "首页", url: "/" },
      { title: "新闻中心", url: "/news", active: true },
    ],
    titles: {
      zh: "新闻中心",
      en: "NEWS",
    },
  };
  const [paginationProps, page, setPage] = createPagination({
    pages: 20,
    maxPages: 6,
  });
  return (
    <main class="mx-auto ">
      <SubBanner items={subBannerData.items} titles={subBannerData.titles} />
      <div class="news con">
        <div class="newsNav select-none t5 sm:mt-[3rem] font-light text-gray-400 cursor-pointer">
          <ul>
            <li class="active">
              <span>&gt 全部</span>
            </li>
            <li class="sm:mt-5">
              <span>&gt 展讯</span>
            </li>
            <li class="sm:mt-5">
              <span>&gt 通知</span>
            </li>
            <li class="sm:mt-5">
              <span>&gt 讲座</span>
            </li>
          </ul>
        </div>
        <div class="newsItems">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>

      <div class="con pag mb-20 ">
        <nav class="pagination t4 font-light text-gray-400  select-none">
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
