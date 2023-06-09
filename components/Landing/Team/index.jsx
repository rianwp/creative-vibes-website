import SectionTitle from "../../SectionTitle"
import Member from "./Member"

const Team = () => {
  return (
    <div id="team" className="w-full bg-slate-200">
      <div className="py-32 lg:w-3/4 md:w-full sm:w-full w-full mx-auto sm:px-8 px-4">
        <SectionTitle>Members of The Team</SectionTitle>
        <div className="flex flex-row mt-5 w-full justify-center flex-wrap items-start">
          <Member name="Hanief Fadilul Haq" deskripsi="Social Media Manager" img="/img/hanief.JPG"/>
          <Member name="Adrian Wahyu Prasetya" deskripsi="Web Developer" img="/img/adrian.jpg"/>
          <Member name="Adham Faraitodi" deskripsi="Webmaster" img="/img/adham.jpeg"/>
          <Member name="Bagas Ardianto" deskripsi="Content Writer" img="/img/bagas.png"/>
          <Member name="Muhammad Jaelani AS" deskripsi="Content Creator" img="/img/jaelani.jpeg"/>
          <Member name="Muhammad Alfian SA" deskripsi="Content Creator" img=""/>
        </div>
      </div>
    </div>
  )
}

export default Team