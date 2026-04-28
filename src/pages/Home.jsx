//rfce
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div style={{height:'400px',background:'url("https://img.freepik.com/premium-photo/banner-talking-business-people-meeting-work-discussion-workshop-teamwork-morning-training-black-man-speaking-employees-about-agenda-schedule-planning-together_590464-228765.jpg")',backgroundSize:'cover'}}></div>
      {/* section admin intro */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* text content */}
            <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt nemo numquam? Velit porro perferendis dolor id debitis cum quia eligendi ullam voluptas perspiciatis dolores eaque, iusto magnam animi aperiam!
            Delectus quod necessitatibus id quibusdam cumque cum praesentium qui atque aspernatur, accusamus, consequuntur aliquid aperiam neque molestiae. Maiores, provident magni explicabo aperiam ullam labore veritatis consectetur temporibus, cum cupiditate natus.
            Exercitationem ut perspiciatis, quasi dolorum maiores at aut nesciunt corrupti atque odio distinctio voluptates deleniti placeat cupiditate vitae eveniet nisi recusandae repellat sequi. Facilis reprehenderit quasi voluptatibus perferendis, ratione sequi.
            Mollitia deleniti ab dolor similique expedita perspiciatis quas in quia. Numquam accusantium quis quas provident perspiciatis impedit libero molestias, ipsam dicta tempore? Sint praesentium quaerat consequuntur temporibus modi non placeat!</p>
          </div>
          <div className="col-lg-6">
            {/* image */}
            <img className='img-fluid' src="https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png" alt="profile" />
          </div>
        </div>
        <div className=" text-center my-5">
          <Link to={'/admin'} className='btn btn-info'>GO TO DASHBOARD</Link>
        </div>
      </div>
    </div>
  )
}

export default Home