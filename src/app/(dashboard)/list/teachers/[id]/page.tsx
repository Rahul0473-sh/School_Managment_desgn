"use client";
import BigCalendar from "@/components/BigCalendar";
import Image from "next/image";
import Link from "next/link"
import { useParams } from "next/navigation";
import Announcment from "@/components/Announcment";
import Performance from "@/components/Performance";
const SingleTeacherPage = () => {
    const params = useParams();
    const { id } = params;
    return (
        <div className="flex-1 p-4 flex  flex-col gap-4 xl:flex-row">
            {/*left side */}
            <div className="w-full md:w-2/3">
                {/*Top*/}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/*UserInfoCard*/}
                    <div className="bg-lamaSky px-4 py-6 rounded-md flex-1 flex gap-4 ">
                        <div className="w-1/3">
                            <Image src="data:image/jpeg;base64,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" alt="User Avatar" width={144} height={144} className="w-36 h-36 rounded-full object-cover" />
                        </div>
                        <div className="w-2/3 flex flex-col justify-between gap-4">
                            <h1 className="text-xl font-semibold">Captain Levi</h1>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adi</p>
                        </div>
                        <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image
                                    src="/blood.png"
                                    alt="bloodicon"
                                    width={14}
                                    height={14}
                                    className="w-4 h-4 flex-shrink-0" // Fixed size for all screens
                                />
                                <span>A+</span>
                            </div>

                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image
                                    src="/date.png"
                                    alt="dateIcon"
                                    width={14}
                                    height={14}
                                    className="w-4 h-4 flex-shrink-0" // Fixed size for all screens
                                />
                                <span>January 2025</span>
                            </div>

                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image
                                    src="/mail.png"
                                    alt="mailIcon"
                                    width={14}
                                    height={14}
                                    className="w-4 h-4 flex-shrink-0" // Fixed size for all screens
                                />
                                <span>levi@gmail.com</span>
                            </div>

                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image
                                    src="/phone.png"
                                    alt="phoneIcon"
                                    width={14}
                                    height={14}
                                    className="w-4 h-4 flex-shrink-0" // Fixed size for all screens
                                />
                                <span>+91 8343342</span>
                            </div>
                        </div>

                    </div>
                    {/*smallcard*/}
                    <div className=" flex-1 flex gap-4 justify-between flex-wrap">
                        <div className="bg-white p-4 rounded-md flex gap-4  w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] ">
                            <Image src="/singleAttendance.png" alt="attendanceIcon" width={24} height={24} className="w-6 h-6" />

                            <div>
                                <h1 className="text-xl font-semibold">90%</h1>
                                <span className="text-sm text-gray-400">Attendance</span>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-md flex gap-4  w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] ">
                            <Image src="/singleLesson.png" alt="lessonIcon" width={24} height={24} className="w-6 h-6" />

                            <div>
                                <h1 className="text-xl font-semibold">18</h1>
                                <span className="text-sm text-gray-400">Lessons</span>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-md flex gap-4  w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] ">
                            <Image src="/singleBranch.png" alt="singleBranchIcon" width={24} height={24} className="w-6 h-6" />

                            <div>
                                <h1 className="text-xl font-semibold">6th</h1>
                                <span className="text-sm text-gray-400">Grade</span>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-md flex gap-4  w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] ">
                            <Image src="/singleClass.png" alt="singleClassIcon" width={24} height={24} className="w-6 h-6" />

                            <div>
                                <h1 className="text-xl font-semibold">6thA</h1>
                                <span className="text-sm text-gray-400">Class</span>
                            </div>
                        </div>
                    </div>

                </div>
                {/*Bottom*/}
                <div>
                    <h1>Student&apos;s Schedule</h1>
                    <BigCalendar/>
                </div>
            </div>

            {/*Right side */}
            <div className="w-full md:w-1/3 flex flex-col gap-4">
            <div className="bg-white p-4 rounded-md">
                <h1 className="text-xl font-semibold">Shortcuts</h1>
                <div className="flex flex-col gap-2 mt-4">
                    <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
                     Student&apos;s Lessons
                    </Link>

                    <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
                     Student&apos;s Teachers
                    </Link>

                    <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
                     Student&apos;s Exam
                    </Link>

                    <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
                     Student&apos;s Assignment
                    </Link>

                    <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
                     Student&apos;s Results
                    </Link>
                </div>
                <Performance/>
                <Announcment/>
            </div>
            </div>
        </div>
    )
}
export default SingleTeacherPage;