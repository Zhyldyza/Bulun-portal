import { useState } from "react";
import { Bus } from "lucide-react";
import { Separator } from "../../components/ui/separator";
import { TRANSPORT_ITEM_GROUP_ONE, TRANSPORT_ITEM_GROUP_TWO } from "./const";
import WeatherAside from "../../shared/global_aside/weather_aside/WeatherAside";
import RoadstatusAside from "../../shared/global_aside/roadStatus_asede/RoadStatusAside";
import FlightsAside from "../../shared/global_aside/flights_aside/FlightsAside";
import TaxiScheduleAside from "../../shared/global_aside/taxiSchedule_aside/TaxiScheduleAside";

// Компонент для одного блока времени
const TimeBlock = ({ title, times }) => {
  const [selectedTime, setSelectedTime] = useState(null); // Состояние для выбранного времени
  const isSmallBlock = times.length === 4; // Определяем, маленький ли блок (4 времени)

  // Высота между элементами времени для маленьких и больших блоков
  const timeOffset = isSmallBlock ? 65 : 50; // Увеличиваем расстояние для маленьких блоков

  return (
    <div className="max-w-[200px] mx-auto">
      <div>
        <p className="text-center text-lg">{title}</p>
        <div className="flex gap-4 mt-8 justify-center relative">
          {/* Серебряная линия */}
          <div className="bg-[#DEE0E3] h-[270px] w-[5px] mt-2 relative">
            <div className="h-3 w-3 bg-[#DEE0E3] rounded-full  -ml-[3px]"></div>
            <div className="h-3 w-3 bg-[#DEE0E3] rounded-full mt-[247px] -ml-[3px]"></div>

            <div
              className="h-5 w-5 bg-[#0052cc] rounded-full absolute -left-[7px]"
              style={{
                top: selectedTime
                  ? `${times.indexOf(selectedTime) * timeOffset}px`
                  : "-10px",
              }} // Изменяем позицию круга
            >
              <div className="h-3 w-3 bg-[#fff] rounded-full absolute left-1 top-1"></div>
            </div>
          </div>

          {/* Список времен */}
          <div className="grid col-span-1">
            {times.map((time, index) => (
              <span
                key={index}
                onClick={() => setSelectedTime(time)} // Устанавливаем выбранное время
                className={`cursor-pointer ml-2 mb-[28px] ${
                  selectedTime === time
                    ? "text-[#0052cc] font-bold"
                    : "text-[#ACACAC]"
                }`}
              >
                {time}
              </span>
            ))}
          </div>

          {/* Иконка автобуса */}
          <Bus
            className="text-[#0052cc] -mt-[4px] absolute hidden xl:flex"
            style={{
              top: selectedTime
                ? `${times.indexOf(selectedTime) * (isSmallBlock ? 68 : 53)}px`
                : "3px", // Разное смещение для блоков
              left: "20px", // Отдаляем иконку от линии
            }}
          />
        </div>
      </div>
    </div>
  );
};

const Transport = () => {
  return (
    <div className="max-w-[1250px] mx-auto mt-5 flex">
      <div className="max-w-[848px] mx-auto">
        <h2 className="text-2xl mb-5">Расписание движения маршрутного такси</h2>
        <div className="bg-[#fff] px-8 p-5">
          <h3 className="text-center mb-5 text-xs font-semibold">
            ПОНЕДЕЛЬНИК - ПЯТНИЦА
          </h3>
          <Separator className="mb-5" />

          {/* Первая группа блоков */}
          <div className="grid grid-cols-3 gap-8 justify-between">
            {TRANSPORT_ITEM_GROUP_ONE.map((block, index) => (
              <div key={index} className="flex">
                {/* Вертикальный сепаратор перед блоком, кроме первого */}
                {index > 0 && (
                  <Separator orientation="vertical" className="mr-4" />
                )}
                <TimeBlock title={block.title} times={block.times} />
              </div>
            ))}
          </div>

          <Separator />
          <h3 className="text-center text-xs font-semibold mt-5 mb-5">
            СУББОТА
          </h3>
          <Separator />

          {/* Вторая группа блоков */}
          <div className="grid grid-cols-3 gap-8 justify-between mt-8">
            {TRANSPORT_ITEM_GROUP_TWO.map((block, index) => (
              <div key={index} className="flex">
                {/* Вертикальный сепаратор перед блоком, кроме первого */}
                {index > 0 && (
                  <Separator orientation="vertical" className="mr-4" />
                )}
                <TimeBlock title={block.title} times={block.times} />
              </div>
            ))}
          </div>
          <Separator className="mt-9 mb-5" />
          <p className="text-center text-xs font-semibold text-[#D86E28]">
            ВОСКРЕСЕНЬЕ ВЫХОДНОЙ
          </p>
        </div>
      </div>
      <div className="hidden xl:block -mt-20 ">
        <TaxiScheduleAside />
        <RoadstatusAside />
        <FlightsAside />
      </div>
    </div>
  );
};

export default Transport;
