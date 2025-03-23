
import React from "react";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CategoryBadge from "./CategoryBadge";
import { ServiceType, UserType, CategoryType } from "@/lib/data";

interface ServiceCardProps {
  service: ServiceType;
  user: UserType;
  category: CategoryType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, user, category }) => {
  return (
    <Link to={`/service/${service.id}`}>
      <Card className="overflow-hidden hover-scale h-full flex flex-col">
        <div className="relative">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <CategoryBadge category={category} />
          </div>
        </div>
        <CardContent className="p-4 flex-1">
          <h3 className="font-medium text-lg line-clamp-1">{service.title}</h3>
          <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
            {service.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 border-t flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium line-clamp-1">{user.name}</span>
          </div>
          <div className="flex items-center text-muted-foreground gap-1">
            <Clock className="h-4 w-4" />
            <span className="text-xs">{service.duration} min</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ServiceCard;
