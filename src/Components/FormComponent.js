import React, { Component } from 'react';
import AwsForm from '../AwsForm';
import AzureForm from '../AzureForm';

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        
        const {showForm} = this.props;
        return ( <div>
            {
                showForm === 0 ? 
                <AwsForm />
                :
                <AzureForm />
            }
        </div> );
    }
}
 
export default FormComponent;