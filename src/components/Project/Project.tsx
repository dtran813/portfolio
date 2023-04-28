import { SectionWrapper } from '../../hoc';

function ProjectSection() {
  return <div>Project</div>;
}

const Project = SectionWrapper(ProjectSection, 'project');

export default Project;
