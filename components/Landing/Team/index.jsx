import SectionTitle from "../SectionTitle"
import Member from "./Member"

const Team = () => {
  return (
    <div id="team" className="w-full bg-slate-200">
      <div className="py-32 sm:w-3/4 w-full mx-auto sm:px-8 px-4">
        <SectionTitle>Members of The Team</SectionTitle>
        <div className="flex flex-row mt-5 w-full justify-center flex-wrap items-start">
          <Member name="Hanief Fadilul Haq" deskripsi="Social Media Manager" img=""/>
          <Member name="Adrian Wahyu Prasetya" deskripsi="Web Developer" img=""/>
          <Member name="Adham Faraitodi" deskripsi="Webmaster" img=""/>
          <Member name="Bagas Ardianto" deskripsi="Article Writer" img=""/>
          <Member name="Muhammad Jaelani AS" deskripsi="Content Creator" img=""/>
          <Member name="Muhammad Alfian SA" deskripsi="Content Creator" img=""/>
        </div>
      </div>
    </div>
  )
}

export default Team