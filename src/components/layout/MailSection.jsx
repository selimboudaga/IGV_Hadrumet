import { useEffect, useState } from "react";
import LC from "../../assets/hadrumet.png";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const MailSection = () => {
  const serviceID = import.meta.env.VITE_SERVICE_ID;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const { toast } = useToast();

  const checkEmail = () => {
    // Email regex pattern
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isPhoneNumber = (phoneNumber) =>
      /^[0-9\s]{8,}$/.test(phoneNumber.trim()) &&
      phoneNumber.trim().replace(/\s+/g, "").length === 8;

    if (
      name.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      email.trim() !== "" &&
      businessName.trim() !== "" &&
      address.trim() !== ""
    ) {
      if (name !== "") {
        if (isPhoneNumber(phoneNumber)) {
          if (regex.test(email)) {
            if (businessName !== "") {
              if (address !== "") {
                toast({
                  title: "Email Sent Successfully !",
                });
                return true;
              }
              toast({
                title: "Address is missing !",
              });
              return false;
            } else {
              toast({
                title: "Business Name is missing !",
              });
              return false;
            }
          } else {
            toast({
              title: "Email  is missing or invalid !",
            });
            return false;
          }
        } else {
          toast({
            title: "Phone Number is missing or invalid !",
          });
          return false;
        }
      } else {
        toast({
          title: "Full Name is missing !",
        });
        return false;
      }
    } else {
      toast({ title: "Please fill all the fields!" });
      return false;
    }
  };

  const sendEmail = () => {
    if (!checkEmail()) return; // Only proceed if validation passes

    const templateParams = {
      name,
      phoneNumber,
      businessName,
      reply_to: email, // Set reply-to instead of "from"
      address,
      from_name: businessName,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response);
        setName(""); // Clear fields only after successful submission
        setPhoneNumber("");
        setBusinessName("");
        setEmail("");
        setAddress("");
      })
      .catch((error) => {
        console.log("FAILED...", error);
        toast({
          title: "Email Does not Exist !",
        });
      });
  };

  useEffect(() => {
    // Check if the URL has a hash for scrolling
    if (window.location.hash === "#collaborations") {
      const element = document.getElementById("collaborations");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth", // Smooth scroll
          block: "center", // Center the element vertically
          inline: "center", // Center the element horizontally (if applicable)
        });
      }
    }
  }, []);

  return (
    <div id="collaborations" className=" flex flex-col w-full  ">
      <div className=" flex flex-col  lg:flex-row w-[90%] mx-auto mt-[150px] ">
        {/**Partnership text */}
        <div className=" w-full">
          <h1 className=" font-semibold drop-shadow-xl text-nowrap text-5xl  lg:text-6xl">
            Become Our Patner
          </h1>
          <div className=" mt-[30px] lg:w-[88%] ">
            <p className="text-grey text-[22px]">
              You’re just a few clicks away from becoming one of our dear
              partners! Fill out the form with your details, and we’ll get in
              touch with you soon. By working with us, you’ll connect with
              talented young people, create meaningful projects, and promote
              cultural exchange. Together, we can make a positive impact and
              bridge communities around the world. Don’t miss this chance{" "}
              <span className=" font-semibold text-blue">
                —get started today!
              </span>
            </p>
          </div>
        </div>

        {/**Email Form */}
        <form className=" mx-auto w-[90%] mt-12 lg:mt-20 xl:mt-2 flex flex-col">
          <div className=" flex flex-col sm:flex-row ">
            <div className=" flex flex-col w-full mr-[7%] ">
              <label
                htmlFor="FullName"
                className="font-semibold text-blue text-2xl pb-2 "
              >
                Full Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="FullName"
                placeholder="Full Name"
                className=" pl-3 text-lg rounded-lg border-[3px] py-[6px] border-gray-600"
                type="text"
              />
            </div>
            <div className=" flex flex-col w-full mt-3 sm:mt-0">
              <label
                htmlFor="PhoneNumber"
                className="font-semibold text-blue text-2xl pb-2 "
              >
                Phone Number
              </label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                name="PhoneNumber"
                placeholder="XX-XXX-XXX"
                className=" pl-3 text-lg rounded-lg border-[3px] py-[6px] border-gray-600"
                type="text"
              />
            </div>
          </div>

          <div className=" flex flex-col sm:flex-row  mt-3 ">
            <div className=" flex flex-col w-full mr-[7%]">
              <label
                htmlFor="BusinessName"
                className="font-semibold text-blue text-2xl pb-2 "
              >
                Business Name
              </label>
              <input
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Business Name"
                name="BusinessName"
                className=" pl-3 text-lg rounded-lg border-[3px] py-[6px] border-gray-600"
                type="text"
              />
            </div>

            <div className=" flex flex-col w-full mt-3 sm:mt-0 ">
              <label
                htmlFor="Email"
                className="font-semibold text-blue text-2xl pb-2 "
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="Email"
                placeholder="Your Email Address"
                className=" pl-3 text-lg rounded-lg border-[3px] py-[6px] border-gray-600"
                type="text"
              />
            </div>
          </div>

          <div className=" flex flex-col sm:flex-row  mt-3 ">
            <div className=" flex flex-col w-full mr-[7%]">
              <label
                htmlFor="LocalAddress"
                className="font-semibold text-blue text-2xl pb-2 "
              >
                Local Address
              </label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                name="LocalAddress"
                placeholder="Your Local Address"
                className=" pl-3 text-lg rounded-lg border-[3px] py-[6px] border-gray-600"
                type="text"
              />
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                sendEmail();
              }}
              type="submit"
              className=" z-20 border-[3px] border-blue hover:bg-transparent hover:text-blue  w-full h-1/2 mt-[42px] text-xl items-center font-semibold text-white bg-blue transition-colors duration-300 rounded-lg py-[6px]"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      <div className=" relative flex mb-[50px] md:mb-[80px]  mt-[150px] ">
        <div className="  w-[480px] h-[340px]  bg-blue/70 rounded-full z-0 top-[60%] left-[0%]  -translate-x-[200px] translate-y-[-50%] blur-[150px] absolute"></div>

        <div className=" hidden xl:flex  w-[380px] h-[280px]  bg-blue/70 rounded-full z-0 -top-[40%] left-[80%]  -translate-x-[200px] translate-y-[-50%] blur-[160px] absolute"></div>
        <div className=" mx-auto flex items-center ">
          <img
            src={LC}
            className=" w-[390px] h-[200px]  md:w-[450px] md:h-[240px]  "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MailSection;
