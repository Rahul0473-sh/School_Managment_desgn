import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard"

const adminPage = () => {
  return (
    <div className=" flex flex-col md:flex-row p-4 gap-4">
      {/*Left */}
      <div className="w-full lg:w-2/3 gap-8 flex flex-col  ">
        <div className="flex gap-4 justify-between  flex-wrap">
          <UserCard type="parent" />
          <UserCard type="student" />
          <UserCard type="parent" />
          <UserCard type="student" />
        </div>
        <div className="flex gap-4 flex-col lg:flex-row ">
          {/** count chart */}
          <div className="w-full  lg:w-1/3 h-[450px]">
            <CountChart/>
          </div>

          {/** Attendance Chart */}
          <div
          className="w-full  lg:w-2/3 h-[450px] "
          >
            <AttendanceChart/>
          </div>
        </div>
        {/* Bottom Chart*/}
        <div>
          <FinanceChart/>
        </div>
      </div>

      {/*right */}
      <div className=" w-full lg:w-1/3 ">
       <EventCalendar/>
      </div>
    </div>
  );
}

export default adminPage