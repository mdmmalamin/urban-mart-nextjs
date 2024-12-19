"use client";

import { Avatar } from "@nextui-org/avatar";

import { formatDate } from "@/src/utils";
import Container from "@/src/components/ui/Container";
import Rating from "@/src/components/ui/Rating";

const CustomerReview = () => {
  const reviews = [
    {
      fullName: "Md Lea",
      comment:
        "One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements.",
      createdAt: "2024-12-05T16:11:26.406Z",
    },
    {
      fullName: "Md Lea",
      comment:
        "One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements.",
      createdAt: "2024-12-05T16:11:26.406Z",
    },
    {
      fullName: "Md Lea",
      comment:
        "One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements.",
      createdAt: "2024-12-05T16:11:26.406Z",
    },
    {
      fullName: "Md Lea",
      comment:
        "One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements.",
      createdAt: "2024-12-05T16:11:26.406Z",
    },
    {
      fullName: "Md Lea",
      comment:
        "One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements.",
      createdAt: "2024-12-05T16:11:26.406Z",
    },
    {
      fullName: "Md Lea",
      comment:
        "One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements.",
      createdAt: "2024-12-05T16:11:26.406Z",
    },
    {
      fullName: "Md Lea",
      comment:
        "One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements.",
      createdAt: "2024-12-05T16:11:26.406Z",
    },
    {
      fullName: "Md Lea",
      comment:
        "One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements.",
      createdAt: "2024-12-05T16:11:26.406Z",
    },
    {
      fullName: "Md Lea",
      comment:
        "One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements.",
      createdAt: "2024-12-05T16:11:26.406Z",
    },
    {
      fullName: "Md Lea",
      comment:
        "One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements.",
      createdAt: "2024-12-05T16:11:26.406Z",
    },
    {
      fullName: "Md Lea",
      comment:
        "One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements.",
      createdAt: "2024-12-05T16:11:26.406Z",
    },
  ];

  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl font-bold">People Love Us</h2>
      </div>

      <div className="max-w-4xl mx-auto">
        {reviews?.slice(0, 5)?.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center flex-col md:flex-row gap-4 border-b border-default-50 py-3"
          >
            <Avatar
              className="w-20 h-20 flex-none order-first"
              name={item.fullName}
            />

            <p className="text-default-500 text-sm line-clamp-3 order-last md:order-first text-center md:text-left">
              {item.comment}
            </p>
            <div className="flex flex-col items-center gap-2 text-nowrap">
              <Rating value={4} />{" "}
              <span className="text-default-500">
                {formatDate(item.createdAt)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CustomerReview;
