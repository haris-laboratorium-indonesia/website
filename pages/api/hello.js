// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  res.status(200).json({
    data: [
      {
        id: "1",
        pic: "/image/image1.jpg",
        title: "Image 1",
        subTitle: "This is image 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        id: "2",
        pic: "/image/image2.jpg",
        title: "Image 2",
        subTitle: "This is image 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        id: "3",
        pic: "/image/image3.jpg",
        title: "Image 3",
        subTitle: "This is image 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        id: "4",
        pic: "/image/image4.jpg",
        title: "Image 4",
        subTitle: "This is image 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        id: "5",
        pic: "/image/image5.jpg",
        title: "Image 5",
        subTitle: "This is image 5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        id: "6",
        pic: "/image/image6.jpg",
        title: "Image 6",
        subTitle: "This is image 5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        id: "7",
        pic: "/image/image7.jpg",
        title: "Image 7",
        subTitle: "This is image 5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      {
        id: "8",
        pic: "/image/image8.jpg",
        title: "Image 8",
        subTitle: "This is image 5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
    ],
  });
}
