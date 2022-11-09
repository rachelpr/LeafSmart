import React from "react";
import Nav from "./Nav";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const contacts = [
    {
      name: "Rachel Plourde-Rideout",
      photo: "/team-photos/rachel.jpg",
      email: "rplourder@gmail.com",
      githubLink: "https://github.com/rachelpr",
      githubUsername: "rachelpr",
    },
    {
      name: "Andrea Madsen",
      photo: "/team-photos/andrea.jpg",
      email: "almadsen792@live.ca",
      githubLink: "https://github.com/b1u3too",
      githubUsername: "b1u3too",
    },
    {
      name: "Matt Stankovich",
      photo: "/team-photos/matt.jpg",
      email: "matt.stankovich@gmail.com",
      githubLink: "https://github.com/MGS31",
      githubUsername: "MGS31",
    },
  ];
  const renderContactCards = (contacts) => {
    return contacts.map((contact) => {
      return (
        <div key={contact.name} className="flex flex-col rounded-3xl justify-evenly items-center bg-White w-72 h-96 drop-shadow-2xl">
          <img
            className="h-28 w-28 rounded-full"
            alt={`${contact.name}`}
            src={`${contact.photo}`}
          />
          <h1 className="text-2xl">{contact.name}</h1>
          <div>
            <div className="flex items-center">
              <p className="pr-1">
                <MdEmail />
              </p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div className="flex items-center">
              <p className="pr-1">
                <FaGithub />
              </p>
              <p>
                <a href={contact.githubLink}>{contact.githubUsername}</a>
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <main className="pl-44 pr-32">
        <Nav />
        <section className="py-5 min-h-screen bg-Isabelline">
          <h1 className="flex justify-center pt-20 pb-32 text-6xl">
            Meet the team behind LeafSmart!
          </h1>
          <div className="flex justify-evenly">{renderContactCards(contacts)}</div>
        </section>
      </main>
    </>
  );
};

export default Contact;
