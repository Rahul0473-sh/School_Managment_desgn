import Announcment from "@/components/Announcment";
import BigCalendar from "@/components/BigCalendar";


const studentPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/** left */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="font-bold text-xl">Schedule(Rahul)</h1>
          <BigCalendar />
        </div>
      </div>

      <div className="w-full xl:w-1/3">
        <Announcment />
      </div>
    </div>
  );
};

export default studentPage;
