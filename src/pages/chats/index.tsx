import Layout from "@/components/layout";
import type { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar>
      <div className="divide-y-[1px] py-10">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div
            key={i}
            className="mb-3 flex cursor-pointer items-center space-x-3 px-4 py-3"
          >
            <div className="h-10 w-10 rounded-full bg-gray-300" />
            <div>
              <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
              <p className="text-sm font-medium text-gray-500">
                내일 14:00 시에 봐요
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default Chats;
