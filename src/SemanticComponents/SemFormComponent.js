import React, { useState } from 'react'
import { Form, Button, Container,  Segment, Transition } from 'semantic-ui-react'





const FormExampleSubcomponentId = (props) => {

    const [awsAk, setawsAK] = useState('');
    const [awsSk, setawsSk] = useState('');
    const [azureAS, setazureAS] = useState('');
    const [azureAI, setazureAI] = useState('');
    const [azureTI, setazureTI] = useState('');
    const [azureSI, setazureSI] = useState('');
    const [loadingData, setLoading] = useState(false);

    const awsData = () => {
        setLoading(true)

        console.log('awsData', awsAk, awsSk);

    }

    const azureData = () => {
        console.log('Azuredata', azureAS, azureAI, azureTI, azureSI);
    }
    return (
    <Container>
    <Form loading={loadingData}>
    <Form.Group unstackable widths={props.activeItem === 'aws' ? 2 : 4}>
      { props.activeItem === 'aws' &&
      <>
      <Form.Input label='Aws Access Key' placeholder='Aws Access Key' onChange={(e) => {setawsAK(e.target.value)}} />
      <Form.Input label='Aws Secret Key' placeholder='Aws Secret Key' onChange={(e) => {setawsSk(e.target.value)}}/>
      </>
      }
      { props.activeItem === 'azure' &&
            <>
        <Form.Input label='Application Secret Key' placeholder='Application Secret Key' onChange={(e) => setazureAS(e.target.value)} />
        <Form.Input label='Application ID' placeholder='Application ID' onChange={(e) => setazureAI(e.target.value)} />
        <Form.Input label='Tenant ID' placeholder='Tenant ID' onChange={(e) => setazureTI(e.target.value)} />
        <Form.Input label='Subscription ID' placeholder='Subscription ID' onChange={(e) => setazureSI(e.target.value)} />
        </>
      }
    </Form.Group>
    <Button type='submit' className='primary' onClick={() => {props.activeItem === 'aws' ?  awsData() : azureData() }}>Submit</Button>
  </Form>
  </Container>
)
}

export default FormExampleSubcomponentId