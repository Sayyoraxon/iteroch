import { AnimatedTestimonials } from "./ui/animated-testemonials";
import { MdArrowOutward } from "react-icons/md";

export function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            quote:
                "It is a time tracking solution that helps employees track hours across multiple tasks and projects  software.",
            name: "Plan Your Project with Your Software",
            designation: "November 21, 2022- Tom Black",
            src: "/image1.png",
        },
        {
            quote:
                "It is a time tracking solution that helps employees track hours across multiple tasks and projects  software.",
            name: "Plan Your Project with Your Software",
            designation: "November 21, 2022- Tom Black",
            src: "/image2.png",
        },
        {
            quote:
                "It is a time tracking solution that helps employees track hours across multiple tasks and projects  software.",
            name: "Building Data Analytics Software",
            designation: "November 21, 2022- Tom Black",
            src: "/image3.png",
        },

    ];
    return (
        <div id="blog" className="px-3 w-full bg-[#070706] py-[140px]">
            <div className="max-w-[1296px] mx-auto">
                <p className="font-bold text-[18px] leading-[26px] text-[#ff8911]">
                    OUR LATEST BLOG
                </p>
                <p className="mt-4 font-bold text-[64px] leading-[72px] text-[#fff]">
                    Our Latest Experience
                </p>
                <div className="mt-4 w-full flex justify-between items-center">
                    <p className="w-[736px] font-normal text-base leading-6 text-white">
                        Assertively streamline interactive interfaces after value a infrastructures. Authoritatively fabricate fully tested methodologies before Holistic deliver end-to-end architectures rather sound benefits.
                    </p>
                    <button className="flex items-center font-medium text-[15px] leading-4 tracking-[1px] text-[#ff8911]">
                        <MdArrowOutward className="w-7 h-7"/>
                        VIEW ALL
                    </button>
                </div>

                <AnimatedTestimonials testimonials={testimonials} />
            </div>

        </div>

    )
}
