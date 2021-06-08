import React from 'react';
import './card.css';


export interface CardProps {
    size?: "small" | "medium" | "large";
    image: string;
    name: string;
    description: string;
}

export const Card: React.FC<CardProps> = ({ size, image, name, description, ...props }) => {

    return (
        <div className="flexbox-container" >
            <div className={["storybook-card", `storybook-card--${size}`].join(' ')} {...props}>
                <img src={image} className="profile" alt="profilePic"></img>
                <div className="container">
                    <h4>{name}</h4>
                    <p>{description}</p>
                </div>
            </div>

             {size !== "large" &&
                <div className={["storybook-card", `storybook-card--${size}`].join(' ')} {...props}>
                    <img src={image} className="profile" alt="profilePic"></img>
                    <div className="container">
                        <h4>{name}</h4>
                        <p>{description}</p>
                    </div>
                </div>
            }

            { size === "small" && 
                <div className={["storybook-card", `storybook-card--${size}`].join(' ')} {...props}>
                    <img src={image} className="profile" alt="profilePic"></img>
                    <div className="container">
                        <h4>{name}</h4>
                        <p>{description}</p>
                    </div>
                </div>
            }

            {/* {size == 'medium' ? (
                <div className={['storybook-card', `storybook-card--${size}`].join(' ')} {...props}>
                    <img src={image} className="profile" alt="profilePic"></img>
                    <div className="container">
                        <h4>{name}</h4>
                        <p>{description}</p>
                    </div>
                </div>
            ) : (
                <div>
                    <div className={['storybook-card', `storybook-card--${size}`].join(' ')} {...props}>
                        <img src={image} className="profile" alt="profilePic"></img>
                        <div className="container">
                            <h4>{name}</h4>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className={['storybook-card', `storybook-card--${size}`].join(' ')} {...props}>
                        <img src={image} className="profile" alt="profilePic"></img>
                        <div className="container">
                            <h4>{name}</h4>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            )} */}
        </div>
    )
}