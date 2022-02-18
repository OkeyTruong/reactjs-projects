import React from 'react'

const List = ({people}) => {
  return (
      <>
        {people && people.length > 0 &&
            people.map(person =>(
                <article key={person.id} className="person">
                    <img src={person.image} alt={person.name}/>
                    <div>
                        <h4>{person.name}</h4>
                        <h4>{person.age} years</h4>
                    </div>
                </article>
            ))
        }
      </>
  )
}

export default List