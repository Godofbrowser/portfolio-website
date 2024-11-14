import { AppButtonGroup } from "../ui/AppButtonGroup"

const ProjectsSection = () => {
    const options = [
        {label: 'All Projects', value: 'all'},
        {label: 'Live Projects', value: 'live'},
        {label: 'Personal Projects', value: 'personal'},
    ]
    return (
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl my-6">Projects</h2>

          <div>
            <AppButtonGroup options={options} />
            <div>
                {/* project item card */}
            </div>
          </div>
        </div>
      </section>
    );
}

ProjectsSection.displayName = 'ProjectsSection'

export { ProjectsSection }