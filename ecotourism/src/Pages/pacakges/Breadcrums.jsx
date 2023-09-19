import React from 'react'
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useParams } from 'react-router-dom';
const Breadcrumbs = () => {
  const { name } = useParams();
  return (
    <Breadcrumb
    spacing="8px"
    separator={<ChevronRightIcon color="gray.500" />}
  >
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink href="/destination">Indian Destinations</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink href="#">{name}</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
  )
}

export default Breadcrumbs