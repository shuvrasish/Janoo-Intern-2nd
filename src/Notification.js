
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import "./Notification.css"

const Notification = () => {
    const notify1 = () => toast.success("Notification Activated, success notif");
    const notify2 = () => toast("Different kind of notifications can be made with different designs.");
    const notify3 = () => toast.custom(
        <span>
            Custom <em>JSX content</em> can be turned into <strong>notifications</strong>
        </span>);
    const notify4 = () => toast.error("Notification Activated, error notif");
    const notify5 = () => toast.custom(
        <img src="https://www.online-tech-tips.com/wp-content/uploads/2019/09/cropped-notifications.png" alt="notification"/>, { 
            style: {
                maxWidth: '100px',
            }
        }
    );
    const notify6 = () => toast("Images can be notifications");
    const notify7 = () => toast("Can add custom styling",  {
        style: {
            border: '1px solid black',
            background: 'orangered',
        },
    });
    const notify8 = () => toast("Custom styling example 2", {
        style: {
            border: '1px solid red',
            width: '300px',
        },
    });

    return (
        <div className="container">
            <button className="button1" onClick={notify1}>Click</button>
            <button className="button2" onClick={notify2}>Click</button>
            <button className="button3" onClick={notify3}>Click</button>
            <button className="button4" onClick={notify4}>Click</button>
            <button className="button5" onClick={notify5}>Click</button>
            <button className="button6" onClick={notify6}>Click</button>
            <button className="button7" onClick={notify7}>Click</button>
            <button className="button8" onClick={notify8}>Click</button>
            <Toaster />
        </div>
    )
}

export default Notification
