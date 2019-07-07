import {h, app} from 'hyperapp'

export default function RandomQuote({state, actions}) {
  return (
    <section id="RandomQuote" style={{
      backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,.2) 0,#000 100%), url("https://static1.squarespace.com/static/5395130de4b09ddb699acb37/t/57d5ad1d3e00be430c583ca9/1473621283973/Ingredients+for+cooking+and+empty+cutting+board+on+an+old+wooden+table.+Food+background+with+copyspace.jpg?format=1500w")'
    }}>
      <div className="container">
         <h1>"Food has the power to bring everyone together.  No matter what culture, people get together to eat."</h1> 
         <span className="author"> - Henry</span>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
