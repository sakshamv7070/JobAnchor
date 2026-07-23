import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import { Button, Divider } from "@mantine/core";
import ExpCard from "./ExpCard";
import Cert from "./Cert";

const Profile = (props: any) => {
  return (
    <div className="w-2/3">
      <div className="relative">
        <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
        <img
          className="h-48 w-48 -bottom-1/3 absolute left-3 rounded-full border-mine-shaft-950 border-8"
          src="/avatar-9.png"
          alt=""
        />
      </div>

      <div className="px-3 mt-24">
        <div className="text-3xl font-semibold flex justify-between">
          {props.name}
          <Button color="brightSun.4" variant="light">
            Message
          </Button>
        </div>

        <div className="text-xl flex gap-1 items-center">
          <IconBriefcase className="h-5 w-5" stroke={1.5} />
          {props.role} &bull; {props.company}
        </div>

        <div className="text-lg flex gap-1 items-center text-mine-shaft-400">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
          {props.location}
        </div>
      </div>

      <Divider size="xs" my="xl" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className="text-justify text-mine-shaft-400 text-sm">
          {props.about}
        </div>
      </div>

      <Divider mx="xs" size="xs" my="xl" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">Skills</div>

        <div className="flex flex-wrap gap-2">
          {props.skills.map((skill: any, index: number) => (
            <div
              key={index}
              className="bg-bright-sun-400/15 text-bright-sun-400 text-sm font-medium rounded-3xl px-3 py-1"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <Divider mx="xs" size="xs" my="xl" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Experience</div>
        <div className="flex flex-col gap-8">
        {
            props.experience.map((exp:any, index:any)=><ExpCard key={index} {...exp} />)
        }
        </div>
        
      </div>

      <Divider mx="xs" size="xs" my="xl" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Certifications</div>
        <div className="flex flex-col gap-8">
        {
            props.certifications.map((certi:any, index:any)=><Cert key={index} {...certi} />)
        }
        </div>
      </div>
    </div>
  );
};

export default Profile;