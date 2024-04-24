import { Page } from "@/types/Page"
import React from "react";

interface NavMenuProps {
    menus: string[][];
}

/**
 * Nav Menu component. Copied from https://tailwindcss.com/docs/reusing-styles#loops.
 * @param props 
 * @returns 
 */
const NavMenu: React.FC<NavMenuProps> = (props) => {
    return <nav className="flex sm:justify-center space-x-4">
        {props.menus.map(([title, url]) => (
            <a key={title}
                href={url}
                className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
                {title}
            </a>
        ))}
    </nav>
}

interface NotificationBoxProps {
    imageUrl?: string;
    imageAlt?: string;
    title?: string;
    message?: string;
}

const NotificationBox: React.FC<NotificationBoxProps> = (props) => {
    return <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mb-2">
        <div className="shrink-0">
            <img className="h-12 w-12"
                src={props.imageUrl ? props.imageUrl : '/unknown.jpg'}
                alt={props.imageAlt ? props.imageAlt : 'An image.'} />
        </div>
        <div>
            <div className="text-xl font-medium text-black">{props.title}</div>
            <p className="text-slate-500">{props.message}</p>
        </div>
    </div>
}

const Flexbox: React.FC = () => {
    const [flexDirection, setFlexDirection] = React.useState<'row' | 'col'>('row');

    function toggleFlexDirection() {
        setFlexDirection(flexDirection === 'row' ? 'col' : 'row');
    }

    return <>
        <div className={`flex flex-${flexDirection}`}>
            <div className="flex-none w-14 bg-blue-500 m-2">
                01
            </div>
            <div className="flex-initial w-64 bg-blue-500 m-2">
                02
            </div>
            <div className="flex-initial w-32 bg-blue-500 m-2">
                03
            </div>
        </div>
        <button type="button" onClick={toggleFlexDirection}>Toggle</button>
    </>
}

const Heading: React.FC<{ title: string }> = (props) => {
    return <h2 className="text-center my-2 font-bold text-lg">{props.title}</h2>;
}

/**
 * Demonstrate the TailwindCSS + React utilization.
 * @returns 
 */
const TailwindPlaygroundPage: Page = () => {
    const navMenus: string[][] = [
        ['Home', '#'],
        ['Team', '#'],
        ['Projects', '#'],
        ['Reports', '#'],
    ];

    const notifications: NotificationBoxProps[] = [
        {
            imageUrl: 'https://cdn.dummyjson.com/product-images/1/1.jpg',
            imageAlt: 'A product image',
            message: 'You have a new product delivered',
            title: 'Product Delivered'
        },
        {
            imageUrl: 'https://cdn.dummyjson.com/product-images/1/2.jpg',
            imageAlt: 'A product image',
            message: 'New product is in the store!',
            title: 'New Product'
        },
    ]

    return <div className="container">
        <Heading title="Navigation Menu Example" />
        <NavMenu menus={navMenus}></NavMenu>

        <Heading title="Notification Box Example" />
        {
            notifications.map((notification, index) => (
                <NotificationBox key={index} {...notification}></NotificationBox>
            ))
        }

        <Heading title="Columns Example" />
        <div className="columns-5">
            <div className="column">Column 1</div>
            <div className="column">Column 2</div>
            <div className="column">Column 3</div>
            <div className="column">Column 4</div>
            <div className="column">Column 5</div>
        </div>

        <Heading title="Flex Example" />
        <Flexbox></Flexbox>

        <Heading title="Grid Example" />
        <div className="grid gap-4 grid-cols-3 grid-rows-3">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
        </div>
    </div>
};

export default TailwindPlaygroundPage;