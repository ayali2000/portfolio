import "./skill.css"

const skills = [
{
  "image": 'assets/html.png',
  "progress": 90,
  "name": 'Html'
},
{
  "image": 'assets/css.jpg',
  "progress": 85,
  "name": 'CSS'
},
{
  "image": "assets/js.png",
  "progress": 70,
  "name": "Javascript"
},
{
  "image": 'assets/bootstrap.png',
  "progress": 90,
  "name": 'Bootstrap'
},
{
  "image": 'assets/react.jpg',
  "progress": 80,
  "name": 'React'
},
]

const backendskill = [
{
  "image": 'assets/python.jpg',
  "progress": 97,
  "name": 'Python'
},
{
  "image": 'assets/js.png',
  "progress": 70,
  "name": 'Javascript'
},
{
  "image": 'assets/django.jpg',
  "progress": 95,
  "name": 'Django/Rest Framework'
},
{
  "image": 'assets/node.jpg',
  "progress": 80,
  "name": 'Node.js'
},
{
  "image": 'assets/db.jpg',
  "progress": 90,
  "name": 'Databases'
},
]

const Skill = () => {
  return (
    <section className="section sec5 skill" id="skill">
      <h1 className="sethead">skill set</h1>
      <hr />
      <div className="frontend skillset">
        <h1 className="skillhead">
          Frontend tools
        </h1>
        <ul>
          {skills.map((each) => (
          <li>
            <div>
              <img src={each.image} alt="" />{each.name}
            </div>
            <input type="range" value={each.progress} />
          </li>
          ))}
        </ul>
        </div>
      <div className="backend skillset">
        <h1 className="skillhead">
          Backend tools
        </h1>
        <ul>
          {backendskill.map((each) => (
          <li>
            <div>
              <img src={each.image} alt="" />{each.name}
            </div>
            <input type="range" value={each.progress} />
          </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skill