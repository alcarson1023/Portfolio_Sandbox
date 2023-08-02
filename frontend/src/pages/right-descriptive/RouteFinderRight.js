import React from "react";
import { CodeBlock } from "../../styles/basePage_style.js";

const RouteFinderRight = ({ method }) => {
  let content;

  if (method === "return") {
    content = (
      <div>
        <p>Please create a grid and add some points to get started!</p>
        <p>
          The "Return" method is selected by default. This one simply returns
          points in the order they were clicked.
        </p>
      </div>
    );
  } else if (method === "sort") {
    content = (
      <div>
        <p>
          This method is also fairly simple! "Sort" finds a path between the
          points selected running left to right and top to bottom.
        </p>
      </div>
    );
  } else if (method === "nearest_point") {
    content = (
      <div>
        <p>
          "Closest First" is a custom algorythm that I created to test a few
          features. It's not very efficient, but it was great practice!
        </p>
        <p>
          It works by checking each square around it for an unused point. It
          starts by looking in a one-square radius, then expands that radius if
          nothing is found.
        </p>
      </div>
    );
  } else if (method === "pythagorean") {
    content = (
      <div>
        <p>
          This method uses the Pythogrean theorem to find the distance from the
          current point to each unused point.
        </p>
        <p>
          I start by creating a loop that runs until each of the black squares has been added to the path. Within that loop, I find the distance along
          the x and y axes from the current point to the first unused point.
        </p>
        <p>
          Once I have these distances, I use the Pythagorean theorem (a*a + b*b
          = c*c) to find the diagonal distance to the next unused point. I
          repeat this process until I know the distance from the current point
          to each unused point in my list.
        </p>
        <p>
          Once I have these distances, I choose the shortest one as the path to
          the next point, then repeat the process using that new point and the
          remaining unused points.
        </p>
        <CodeBlock>
          <pre>
            while len(unused_points) > 0:{"\n"}
            distance_list = []{"\n"}
            {"\n"}
            for node in unused_points:{"\n"}# Gather the distances between the
            current point and each node in the list along the X & Y axis{"\n"}
            ydistance = int(node[0]) - int(current_point[0]){"\n"}
            xdistance = int(node[1]) - int(current_point[1]){"\n"}# Use the
            pythagorean theorem to find the distance between the two point
            {"\n"}
            distance = math.sqrt(ydistance**2 + xdistance**2){"\n"}# Add those
            distances to a list in order, then grab the node that shares an
            index with the shortest distance.{"\n"}
            distance_list.append(distance){"\n"}
            {"\n"}# Once the loop is finished, the index of the shortest
            distance will match the index of the closest node.{"\n"}
            print(distance_list){"\n"}
            index = distance_list.index(min(distance_list)) # Find the index of
            the shortest distance available{"\n"}
            closest_node = unused_points[index]{"\n"}
            current_point = closest_node{"\n"}
            unused_points.remove(current_point{"\n"})
            chosen_path.append(current_point){"\n"}
          </pre>
        </CodeBlock>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default RouteFinderRight;
