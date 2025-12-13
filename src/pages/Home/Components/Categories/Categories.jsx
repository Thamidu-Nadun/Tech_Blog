import React from "react";
import Section from "../Section/Section";
import CategoryCard from "./CategoryCard";
import {
  Zap,
  Code,
  Smartphone,
  Globe,
  Bot,
  ShieldUser,
  Bitcoin,
  Paintbrush,
  ChartScatter,
} from "lucide-react"; // Importing icons from lucide-react

function Categories() {
  const categories = [
    {
      name: "AI & Machine Learning",
      icon: Bot,
      count: 24,
      color: "text-orange-400",
    },
    {
      name: "Web Development",
      icon: Code,
      count: 42,
      color: "text-orange-400",
    },
    {
      name: "Mobile Development",
      icon: Smartphone,
      count: 18,
      color: "text-orange-400",
    },
    {
      name: "Cloud & DevOps",
      icon: Globe,
      count: 31,
      color: "text-orange-400",
    },
    {
      name: "Data Science",
      icon: ChartScatter,
      count: 15,
      color: "text-orange-400",
    },
    {
      name: "Cybersecurity",
      icon: ShieldUser,
      count: 20,
      color: "text-orange-400",
    },
    { name: "Blockchain", icon: Bitcoin, count: 10, color: "text-orange-400" },
    {
      name: "UI/UX Design",
      icon: Paintbrush,
      count: 12,
      color: "text-orange-400",
    },
  ];
  return (
    <Section section_title="Explore Categories">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            category_name={category.name}
            category_count={category.count}
            category_color={category.color}
            CategoryIcon={category.icon}
          />
        ))}
      </div>
    </Section>
  );
}

export default Categories;
