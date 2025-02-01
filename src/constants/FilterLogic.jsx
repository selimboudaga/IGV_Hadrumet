import { useEffect, useState } from "react";
import { opportunities, projects } from "./Opportunities";
const FilterLogic = () => {
  const [sortDate, setSortDate] = useState(false);
  const [sortPrice, setSortPrice] = useState(false);
  const [date, setDate] = useState({
    from: undefined,
    to: undefined,
  });
  const [opps, setOpps] = useState(opportunities);
  const [sortOpps, setSortOpps] = useState(opps);
  const [projectFilter, setProjectFilter] = useState(
    projects.map((project) => ({ project: project.name, clicked: false }))
  );
  const handleClickSortDate = () =>{
    setSortDate(prev => !prev);
    setSortPrice(false);
  }
  const handleClickSortPrice = () =>{
    setSortPrice(prev => !prev);
    setSortDate(false);
  }
  const handleFilters = () => {
    const activeProjects = projectFilter
      .filter((item) => item.clicked)
      .map((item) => item.project);

    const filteredOpps = opportunities.filter((opp) => {
      // Filter by project
      const isProjectMatch =
        activeProjects.length === 0 || activeProjects.includes(opp.project);

      // Filter by date
      const isDateMatch =
        !date.from ||
        !date.to ||
        (new Date(opp.startDate) >= new Date(date.from) &&
          new Date(opp.startDate) <= new Date(date.to));

      return isProjectMatch && isDateMatch;
    });

    setOpps(filteredOpps);
  };

  const handleClickProject = (i) => {
    setProjectFilter((prev) =>
      prev.map((value, index) =>
        index === i ? { ...value, clicked: !value.clicked } : value
      )
    );
  };

  const handleSortDate = () => {
    const sortedOpps = [...opps].sort((a, b) => {
      if (!a.startDate) return 1;
      if (!b.startDate) return -1;
      return new Date(a.startDate) - new Date(b.startDate);
    });

    setSortOpps(sortDate ? sortedOpps : opps); // Apply sorting based on the toggle
  };

  const handleSortPrice = () => {
    const sortedOpps = [...opps].sort((a, b) => a.exchangeFee - b.exchangeFee);
    setSortOpps(sortPrice ? sortedOpps : opps); // Apply sorting based on the toggle
  };

  useEffect(() => {
    handleSortPrice();
  }, [sortPrice, opps]);

  useEffect(() => {
    handleSortDate();
  }, [sortDate, opps]);

  useEffect(() => {
    handleFilters();
  }, [projectFilter, date]);

  return {
    sortDate,
    setSortDate,
    sortPrice,
    setSortPrice,
    date,
    setDate,
    opps,
    sortOpps,
    projectFilter,
    handleClickProject,
    handleClickSortDate,
    handleClickSortPrice
  };
};

export default FilterLogic;
