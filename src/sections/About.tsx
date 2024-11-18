import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";

const toolboxItems = [
  {
    title: 'JavaScript',
    icon: '',
  },
  {
    title: 'HTML5',
    icon: '',
  },
  {
    title: 'CSS3',
    icon: '',
  },
  {
    title: 'React',
    icon: '',
  },
  {
    title: 'Chrome',
    icon: '',
  },
  {
    title: 'Github',
    icon: '',
  },
]

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader eyebrow="A Glimpse Into My World" title="About Me" description="Learn more about who I am, what I do, and what inspires me." />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspectives.</p>
          </div>
          <Image src={bookImage} alt="Book cover" />
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>My Toolbox</h3>
            <p>Explore the thechnologies and tools I use to craft exceptional digital experiences.</p>
          </div>
          <div>

          </div>
        </Card>
      </div>
    </div>

  )
};
