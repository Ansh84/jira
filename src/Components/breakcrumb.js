import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { project } from '../Project/data/issueData';


function BreadcrumbComponent(props) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Projects</Breadcrumb.Item>
      <Breadcrumb.Item>
        {project.name}
      </Breadcrumb.Item>
      <Breadcrumb.Item>{props.page}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbComponent;