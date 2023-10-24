import React from "react";
import { Circle } from "react-konva";

class Particle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: Math.random() * 400, // Confine particles within a 400x400 square
      y: Math.random() * 400,
      velocityX: Math.random() * 2 - 1, // Random velocity between -1 and 1
      velocityY: Math.random() * 2 - 1,
      radius: 5, // Particle radius
      collided: false,
    };

    // Set an update interval to move particles
    this.updateInterval = setInterval(this.updatePosition, 16); // Adjust the interval as needed
  }

  updatePosition = () => {
    const { x, y, velocityX, velocityY, radius } = this.state;
    const stageWidth = 400; // Width of the confined area
    const stageHeight = 400; // Height of the confined area

    // Calculate the next position
    let nextX = x + velocityX;
    let nextY = y + velocityY;

    // Reflect off the boundaries
    // if (nextX - radius < 0 || nextX + radius > stageWidth) {
    //   this.setState({ velocityX: -velocityX });
    // }
    // if (nextY - radius < 0 || nextY + radius > stageHeight) {
    //   this.setState({ velocityY: -velocityY });
    // }

    // More complex version that stops particles from clipping through boundaries
    if (nextX - radius < 0) {
      nextX = 0 + radius;
      this.setState({ velocityX: -velocityX });
    }
    if (nextX + radius > stageWidth) {
      nextX = stageWidth - radius;
      this.setState({ velocityX: -velocityX });
    }
    if (nextY - radius < 0) {
      nextY = 0 + radius;
      this.setState({ velocityY: -velocityY });
    }
    if (nextY + radius > stageHeight) {
      nextY = stageWidth - radius;
      this.setState({ velocityY: -velocityY });
    }

    // Update the position
    this.setState({
      x: nextX,
      y: nextY,
    });

    // Check for collisions with other particles
    this.checkParticleCollisions();
  };

  checkParticleCollisions() {
    const { x, y, radius, velocityX, velocityY, collided } = this.state; // 'collided' lets me see if a particle has already bounced.
    // This keeps both particles from logging a collision and both reversing their directions, which then cancels out.
    const { particles } = this.props; // Access the 'particles' prop correctly

    for (let particle of particles) {
      // if( particle === particles[0]){
      //     console.log('Particle 1: ', particle)
      // }

      if (particle === this) {
        continue; // Skip self-check
      }

      const other = particle.ref.current.state;
      const dx = other.x - x;
      const dy = other.y - y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 2 * radius) {
        
        if (other.collided === false) {
        this.setState({
          collided: true,
        });

        if (other.collided == true) {
          console.log("Collision detected!");
        }

        // Particles have collided

        // Calculate collision angle and new velocities
        const collisionAngle = Math.atan2(dy, dx);
        const thisSpeed = Math.sqrt(
          velocityX * velocityX + velocityY * velocityY
        );

        const otherSpeed = Math.sqrt(
          other.velocityX * other.velocityX + other.velocityY * other.velocityY
        );

          const thisDirection = Math.atan2(velocityY, velocityX);
          const otherDirection = Math.atan2(other.velocityY, other.velocityX);

          // Update velocities
          this.setState({
            velocityX: otherSpeed * Math.cos(otherDirection - collisionAngle),
            velocityY: otherSpeed * Math.sin(otherDirection - collisionAngle),
          });

          particle.ref.current.setState({
            velocityX: thisSpeed * Math.cos(thisDirection - collisionAngle),
            velocityY: thisSpeed * Math.sin(thisDirection - collisionAngle),
          });
        }
        // Using gravity:
        // this.setState({
        //     velocityX: (otherSpeed * 0.98) * Math.cos(otherDirection - collisionAngle), // Multipling by 0.98 to gradually reduce velocity
        //     velocityY: ((otherSpeed * 0.98) * Math.sin(otherDirection - collisionAngle) + 0.9), // Adding 0.9 to move particles downward at an increasing rate
        //   });

        //   particle.ref.current.setState({
        //     velocityX: (thisSpeed * 0.98) * Math.cos(thisDirection - collisionAngle),
        //     velocityY: ((thisSpeed * 0.98) * Math.sin(thisDirection - collisionAngle) + 0.9),
        //   });
      } else {
        this.setState({
          collided: false,
        });
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval); // Clear the interval when the component unmounts
  }

  render() {
    const { x, y, radius } = this.state;

    return <Circle x={x} y={y} radius={radius} fill="blue" />;
  }
}

export default Particle;
