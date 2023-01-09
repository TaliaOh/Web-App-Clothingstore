import * as React from "react";
import Grid from "@mui/material/Grid";
import { Link, useParams } from "react-router-dom";
import CategoryCard from "../Category/CategoryCard";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";


function CategoryItems(props) {
  const categoryTitle = useParams().title;
  var newItems = [];
  newItems = props.categoryItems.filter(
    (item) => item.category === categoryTitle
  );

  return (
    <div>
      <Grid
        columns={24}
        sx={{
          flexGrow: 2,
          textAlign: "center",
          marginBottom: 5,
          marginTop: "10%",
        }}
        container
      >
        {newItems.map((item, i) => (
          <Grid
            key={i}
            item
            xs={24}
            md={6}
            justifyContent="center"
            sx={{
              alignContent: "center",
              padding: "20px",
            }}
          >
            {" "}
            <Card
              sx={{
                bgcolor: "#eaece5",
                maxWidth: 300,
              }}
            >
              <Link
                style={{ textDecoration: "none" }}
                to={`/products/${item.id}`}
              >
                <CategoryCard sx={{ margin: "auto" }} key={i} item={item} />{" "}
              </Link>
              <Typography sx={{ fontSize: 20 }}>{item.productName}</Typography>
              <Typography sx={{ fontSize: 18 }}>${item.price}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default CategoryItems;
