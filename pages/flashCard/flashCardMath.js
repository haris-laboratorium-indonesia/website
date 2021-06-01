import Image from "next/image";
import MathTab from "../../components/MathTab";

export default function flashCardMath() {
  const images = [
    {
      id: "1",
      pic: "/image/image1.jpg",
      title: "Image 1",
      subTitle: "This is image 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nobis voluptas? Ea autem quidem rerum nesciunt ab.",
    },
    {
      id: "2",
      pic: "/image/image2.jpg",
      title: "Image 2",
      subTitle: "This is image 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nobis voluptas? Ea autem quidem rerum nesciunt ab.",
    },
    {
      id: "3",
      pic: "/image/image3.jpg",
      title: "Image 3",
      subTitle: "This is image 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nobis voluptas? Ea autem quidem rerum nesciunt ab.",
    },
    {
      id: "4",
      pic: "/image/image4.jpg",
      title: "Image 4",
      subTitle: "This is image 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nobis voluptas? Ea autem quidem rerum nesciunt ab.",
    },
    {
      id: "5",
      pic: "/image/image5.jpg",
      title: "Image 5",
      subTitle: "This is image 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nobis voluptas? Ea autem quidem rerum nesciunt ab.",
    },
    {
      id: "6",
      pic: "/image/image6.jpg",
      title: "Image 6",
      subTitle: "This is image 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nobis voluptas? Ea autem quidem rerum nesciunt ab.",
    },
    {
      id: "7",
      pic: "/image/image7.jpg",
      title: "Image 7",
      subTitle: "This is image 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nobis voluptas? Ea autem quidem rerum nesciunt ab.",
    },
    {
      id: "8",
      pic: "/image/image8.jpg",
      title: "Image 8",
      subTitle: "This is image 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nobis voluptas? Ea autem quidem rerum nesciunt ab.",
    },
  ];
  return (
    <>
      <MathTab in="Card" to="flashCardPhy" />

      <div className="mb-5 text-2xl font-semibold">Fluida Statis</div>
      <div className="space-x-5 bg-gray-100 p-5 shadow-inner rounded-lg sm:p-5 flex overflow-x-auto ">
        {images.map((image) => (
          <div
            key={image.id}
            className="rounded-lg shadow-2xl w-4/5 sm:w-1/4 flex-shrink-0 overflow-hidden"
          >
            <div>
              <Image src={image.pic} width="2000px" height="2000px" priority />
            </div>
            <div className="p-3 ">
              <div className="font-bold font-mw text-[#1c1c1e]">
                {image.title}
              </div>
              <div className="font-semibold text-[#8e8e93] mt-1 mb-4">
                {image.subTitle}
              </div>
              <div className="text-gray-600 leading">{image.description}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
