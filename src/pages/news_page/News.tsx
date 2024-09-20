import { Separator } from "@/components/ui/separator";
import scale from "@/assets/scale.svg";
import React from "react";

const News = () => {
  return (
    <div className="ml-[90px]">
      <h4 className="py-7 text-[24px] font-normal leading-6">
        Расписание движения маршрутного такси
      </h4>
      <div className="bg-[#fff] w-[848px] h-[833px]  rounded-md shadow-[0px_3px_10px_rgba(0,0,0,0.4)]">
        <h4 className="py-7 text-sm font-bold text-center">
          ПОНЕДЕЛЬНИК - ПЯТНИЦА
        </h4>
        <div>
          <Separator orientation="horizontal" className="bg-[#F3F3F3] " />
          <div className="grid grid-cols-3">
            <div>
              <h2 className="text-center pb-[15px]">Тикси-3 Гостинница «Арктика»</h2>
              <div className="flex align-center justify-center pb-[30px]">
                <img src={scale} alt="scale" />
              </div>
            </div>
            <div>
              <h2 className="text-center">Тикси-3 Гостинница «Арктика»</h2>
            </div>
            <div>
              <h2 className="text-center">Тикси-3 Гостинница «Арктика»</h2>
            </div>
          </div>
          <Separator orientation="horizontal" className="bg-[#F3F3F3] " />
        </div>
      </div>
    </div>
  );
};

export default News;
