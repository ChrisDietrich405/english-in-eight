"use client";
import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { usePathname } from "next/navigation";

import styles from "./styles.module.css";

export default function NextBreadcrumbs() {
  
  const router = usePathname();

  function generateBreadcrumbs() {
  
    const pathSplitArray = router.split("/");

   
    const asPathNestedRoutes = pathSplitArray.filter(
      (route) => route.length > 0
    );


    const crumblist = asPathNestedRoutes.map((subpath, index) => {
    
      const href = "/" + asPathNestedRoutes.slice(0, index + 1).join("/");
     
      const title = subpath.replace("-", " ");
      return { href, title };
    });
  
    return [{ href: "/", title: "Home" }, ...crumblist];
  }


  const breadcrumbs = generateBreadcrumbs();

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      className={styles.breadcrumb_container}
    >
      {breadcrumbs.map((crumb, index) => (
        <Crumb {...crumb} key={index} last={index === breadcrumbs.length - 1} />
      ))}
    </Breadcrumbs>
  );
}


function Crumb({ title, href, last = false }) {

  if (last) {
    return (
      <Typography className={styles.title} color="text.primary">
        {title}
      </Typography>
    );
  }


  return (
    <Link
      className={styles.title}
      underline="hover"
      color="inherit"
      href={href}
    >
      {title}
    </Link>
  );
}
