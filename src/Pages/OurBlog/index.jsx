import React from "react";
import kedarnath from "../../assets/Images/kedarnathnew.jfif";
import badrinath from "../../assets/Images/badrinathnew.jfif";
import gangotri from "../../assets/Images/gangotri.jpg";
import yamunotri from "../../assets/Images/yamunotri.jpg";
import mussoorie from "../../assets/Images/newbanner.jpg";
import InnerBanner from "../../Component/InnerBanner";
import { useNavigate } from "react-router-dom";

const blogs = [
    {
        id: 1,
        image: kedarnath,
        title: "Kedarnath – A Divine Journey to the Abode of Lord Shiva",
        desc: "Kedarnath is one of the holiest pilgrimage sites in India. Discover trekking routes, temple history, and tips for a safe journey.",
        link: "/kedarnath-detail"
    },
    {
        id: 2,
        image: badrinath,
        title: "Badrinath – Explore the Gateway to Moksha",
        desc: "Located in the Garhwal Himalayas, Badrinath is a sacred destination dedicated to Lord Vishnu. A must-visit for every pilgrim.",
        link: "/badrinath-detail"
    },
    {
        id: 3,
        image: gangotri,
        title: "Gangotri – The Origin of the Holy River Ganga",
        desc: "Experience the spiritual aura of Gangotri, where the sacred Ganga River begins its life-filled journey.",
        link: "/gangotri-detail"
    },
    {
        id: 4,
        image: yamunotri,
        title: "Yamunotri – A Soul-Refreshing Himalayan Pilgrimage",
        desc: "Yamunotri, the source of River Yamuna, offers serene surroundings, hot springs, and a peaceful spiritual environment.",
        link: "/yamunotri-detail"
    },
    {
        id: 5,
        image: mussoorie,
        title: "Mussoorie – Queen of Hills & Gateway to Spiritual Trails",
        desc: "A perfect blend of scenic beauty and peaceful escapes — Mussoorie is an ideal stop for pilgrims and nature lovers.",
        link: "/kashmir-detail"
    },
];

const OurBlog = () => {
    const navigate = useNavigate();
    return (
        <>
            <InnerBanner title="Our Blogs" />

            {/* ✅ Blogs Grid */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500"
                        onClick={()=>navigate(blog.link)}
                    >
                        {/* Image */}
                        <div className="w-full h-56 overflow-hidden">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#00bcd4] transition-colors">
                                {blog.title}
                            </h3>
                            <p className="text-gray-600 mt-3">{blog.desc}</p>

                            <button className="mt-5 inline-block px-5 py-2 bg-[#00bcd4] text-white rounded-full shadow-md hover:bg-[#009ab0] transition-all">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default OurBlog;
