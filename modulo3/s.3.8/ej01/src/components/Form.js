import React from 'react';
import Cardform from './Cardform';

class Form extends React.Component {
    render() {
        return(
            <div className="container__form">
                <form>
                    <label htmlFor="name">Name:</label>
                    <input
                    id="name"
                    name="name"
                    type="text"
                    value={this.props.name}
                    onChange={this.props.handleInfo}
                    />
                    
                    <label htmlFor="description">Description:</label>
                    <textarea 
                    id="cdescription" 
                    name="description" 
                    rows="8" 
                    cols="20"
                    value={this.props.description}
                    onChange={this.props.handleInfo}>
                    </textarea>
                    <label htmlFor="language">Language:</label>
                    <select 
                    id="language" 
                    name="language"
                    onChange={this.props.handleInfo}>
                    <option value="Español">Español</option>
                    <option value="Inglés">Inglés</option>
                    <option value="Portugués">Portugués</option>
                    </select>
                </form>
                <Cardform 
                name={this.props.name}
                description={this.props.description}
                language={this.props.language}
                // handleName={this.props.handleName}
                // handleLanguage={this.handleLanguage}
                // handleDescription={this.handleDescription}
                />
            </div>
        )
    }   
}
export default Form;