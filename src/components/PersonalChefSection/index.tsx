import Image from "next/image"
import Link from "next/link"

const PersonalChefSection = () => {
    return(
        <section className="px-10 pb-10 flex justify-center items-center gap-10 bg-white max-sm:flex-col">
            <div className="w-2/5 flex flex-col gap-5 text-[#2E363E] max-sm:w-full">
                <p className="w-fit py-3 px-5 text-[14px] bg-[#F2F6FA] rounded uppercase">Who will cook?</p>
                <h3 className="text-4xl font-semibold">I will personally prepare and pack everything beautifully for your event.</h3>
                <ul className="w-2/3 flex flex-col gap-3 text-[14px] list-inside list-disc max-sm:w-full">
                    <li>I will advise on the choice of cupcakes and come up with an original idea</li>
                    <li>I will make cupcakes for your event that everyone will definitely like.</li>
                    <li>I will pack everything carefully and beautifully if you want to make a nice gift.</li>
                </ul>
                <Link className="w-fit py-4 px-6 text-[14px] text-[#2E363E] text-center bg-[#FED84C] rounded" href="/categories">View Categories</Link>
            </div>
            <div className="relative">
                <div className="absolute bottom-40 right-60 text-center text-[14px] max-sm:right-30 max-sm:bottom-20">
                    <p className="p-3 bg-[#2E363E] text-white rounded">Julia Kondratieva</p>
                    <p className="m-auto w-5/6 p-1 bg-[#F2F6FA] uppercase rounded">Your Chef</p>
                </div>
                <Image className="w-100 max-sm:w-75" src="/personalChef.png" alt="personal chef" width={1000} height={1000}/>
            </div>
        </section>
    )
}

export default PersonalChefSection