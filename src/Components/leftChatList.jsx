export default function LeftBar() {
  return (
    <section className="border border-black w-[40%] h-[100vh] ">
      <section className="flex justify-between items-center">
        <h1 className="text-2xl m-5">Chats</h1>
        <div className="flex items-center gap-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzeeEGWxI4S1SSqXpmfZJPGMgd64cxXSHrGA&s" className="h-[40px] w-[40px] rounded-full " alt="" />
            <i className='bx bx-log-out-circle me-4 text-3xl'></i>
        </div>
      </section>

    <section>
        <input type="text" placeholder="Search....." name="" id="" />
    </section>


    </section>
  );
}
