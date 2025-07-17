const JobFinderCounter = () => {
  const stats = [
    {
      id: 1,
      title: "45k+",
      description: "Skill Aligned episode are scanned Every day, World-Wide",
    },
    {
      id: 2,
      title: "15min+",
      description: "New Podcast episode are scanned Every day, World-Wide",
    },
    {
      id: 3,
      title: "2000+",
      description: "New Podcast episode are scanned Every day, World-Wide",
    },
  ];
  return (
    <>
      <div className="pt-120 pb-60">
        <div className="container">
          <div className="row justify-content-center g-4">
            {stats.map((stat) => (
              <div key={stat.id} className="col-sm-6 col-lg-4 col-xxl-3">
                <div className="text-center">
                  <h4 className="home-38-title fs-48 mb-2">{stat.title}</h4>
                  <p className="fw-medium">
                    <span className="fw-bold">{stat.description}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobFinderCounter;
