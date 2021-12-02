import ListGroup from 'react-bootstrap/ListGroup'
import IPasta from '../interfaces/pasta'

interface pastaComment {
  selectedDish: IPasta | null
}
const DishComments = ({ selectedDish }: pastaComment) => (
  <ListGroup>
    {selectedDish ? (
      selectedDish.comments.map((c) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
    )}
  </ListGroup>
)

export default DishComments
