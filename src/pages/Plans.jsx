import data from '../data.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Plans = () => {
    return (
        <>
            {
                data.plans.map(plan => (
                    <Card key={plan.sku} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{plan.name}</Card.Title>
                            <Card.Text>{plan.price}</Card.Text>
                            <Card.Text>
                                {plan.description}
                            </Card.Text>
                            <Link to={`/react-crud-app/plans/${plan.sku}`}>
                                <Button variant="primary">Detalles</Button>
                            </Link>
                        </Card.Body>
                    </Card >
                ))

            }
        </>
    )
}