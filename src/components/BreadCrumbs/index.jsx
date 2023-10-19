// https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating

"use client";
import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { usePathname } from "next/navigation";

import styles from "./styles.module.css";

export default function NextBreadcrumbs() {
  // Gives us ability to load the current route details
  const router = usePathname();

  function generateBreadcrumbs() {
    // Remove any query parameters, as those aren't included in breadcrumbs
    const pathSplitArray = router.split("/");

    // Break down the path between "/"s, removing empty entities
    // Ex:"/my/nested/path" --> ["my", "nested", "path"]
    const asPathNestedRoutes = pathSplitArray.filter(
      (route) => route.length > 0
    );

    // Iterate over the list of nested route parts and build
    // a "crumb" object for each one.
    const crumblist = asPathNestedRoutes.map((subpath, index) => {
      // We can get the partial nested route for the crumb
      // by joining together the path parts up to this point.
      const href = "/" + asPathNestedRoutes.slice(0, index + 1).join("/");
      // The title will just be the route string for now
      const title = subpath.replace("-", " ");
      return { href, title };
    });
    // Add in a default "Home" crumb for the top-level
    return [{ href: "/", title: "Home" }, ...crumblist];
  }

  // Call the function to generate the breadcrumbs list
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

// Each individual "crumb" in the breadcrumbs list
function Crumb({ title, href, last = false }) {
  // The last crumb is rendered as normal title since we are already on the page
  if (last) {
    return (
      <Typography className={styles.title} color="text.primary">
        {title}
      </Typography>
    );
  }

  // All other crumbs will be rendered as links that can be visited
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
